const fs = require('fs');
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const list = await (await fetch('http://127.0.0.1:9226/json/list')).json();
  const target = list.find(t => t.type === 'page');
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let seq = 0; const pending = new Map();
  ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { const p=pending.get(m.id); pending.delete(m.id); m.error?p.reject(new Error(JSON.stringify(m.error))):p.resolve(m.result); } };
  await new Promise((res,rej)=>{ws.onopen=res;ws.onerror=rej;});
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
  const evalJs=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});return r.result?.value;};
  await send('Page.enable'); await send('Runtime.enable');
  for (const width of [390, 520, 800, 801, 1024, 1366]) {
    for (const theme of ['light','dark']) {
      await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<=800});
      await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:theme}]});
      await send('Page.navigate',{url:'http://127.0.0.1:4173/index.html'});
      await sleep(700);
      await evalJs(`localStorage.setItem('recbay-theme','${theme}'); location.reload();`);
      await sleep(900);
      const info = await evalJs(`(() => {
        const d=document.documentElement;
        const stage=document.querySelector('.lineup-stage').getBoundingClientRect();
        const copy=document.querySelector('.lineup-copy').getBoundingClientRect();
        const copyInner=document.querySelector('.lineup-copy > div').getBoundingClientRect();
        const title=document.querySelector('.lineup-title').getBoundingClientRect();
        const intro=document.querySelector('.lineup-intro').getBoundingClientRect();
        const cta=document.querySelector('.lineup-copy .button').getBoundingClientRect();
        const cards=[...document.querySelectorAll('.lineup-card')].map(el=>{const r=el.getBoundingClientRect();return {x:+r.x.toFixed(1),right:+r.right.toFixed(1),y:+r.y.toFixed(1),bottom:+r.bottom.toFixed(1)}});
        return {theme:d.getAttribute('data-theme'), vw:innerWidth, sw:d.scrollWidth, cw:d.clientWidth, overflow:d.scrollWidth>d.clientWidth+1,
          stage:{top:+stage.top.toFixed(1),bottom:+stage.bottom.toFixed(1),w:+stage.width.toFixed(1)},
          copy:{x:+copy.x.toFixed(1),w:+copy.width.toFixed(1),right:+copy.right.toFixed(1)},
          copyInner:{x:+copyInner.x.toFixed(1),w:+copyInner.width.toFixed(1),right:+copyInner.right.toFixed(1)},
          title:{x:+title.x.toFixed(1),w:+title.width.toFixed(1),right:+title.right.toFixed(1)},
          intro:{x:+intro.x.toFixed(1),w:+intro.width.toFixed(1),right:+intro.right.toFixed(1)},
          cta:{x:+cta.x.toFixed(1),w:+cta.width.toFixed(1),right:+cta.right.toFixed(1)},
          cards};
      })()`);
      console.log(width, theme, JSON.stringify(info));
      if ((width===390||width===800||width===801||width===1366) && theme==='light') {
        const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
        fs.writeFileSync(`qa-cdp-home-fixed-${width}.png`, Buffer.from(shot.data,'base64'));
      }
    }
  }
  ws.close();
})().catch(e=>{console.error(e);process.exit(1);});
