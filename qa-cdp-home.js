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
  const setMedia=value=>send('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value}]});
  const setViewport=(width,height,mobile)=>send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile});
  const load=async(url)=>{await send('Page.navigate',{url});await sleep(1600);};
  const inspect=()=>evalJs(`(() => {
    const d=document.documentElement;
    const stage=document.querySelector('.lineup-stage');
    const cards=[...document.querySelectorAll('.lineup-card')].map((el,i)=>{
      const r=el.getBoundingClientRect(); const img=el.querySelector('img');
      return {i, x:+r.x.toFixed(1), y:+r.y.toFixed(1), w:+r.width.toFixed(1), h:+r.height.toFixed(1), right:+r.right.toFixed(1), bottom:+r.bottom.toFixed(1), imgComplete:img.complete, naturalW:img.naturalWidth, naturalH:img.naturalHeight};
    });
    const title=document.querySelector('.lineup-title').getBoundingClientRect();
    const copy=document.querySelector('.lineup-copy').getBoundingClientRect();
    const header=document.querySelector('.site-header').getBoundingClientRect();
    const grid=document.querySelector('.project-grid').getBoundingClientRect();
    return {theme:d.getAttribute('data-theme'), innerWidth, scrollWidth:d.scrollWidth, clientWidth:d.clientWidth, overflow:d.scrollWidth>d.clientWidth+1, stage:{x:+stage.getBoundingClientRect().x.toFixed(1), w:+stage.getBoundingClientRect().width.toFixed(1), h:+stage.getBoundingClientRect().height.toFixed(1)}, cards, title:{x:+title.x.toFixed(1),w:+title.width.toFixed(1),right:+title.right.toFixed(1)}, copy:{x:+copy.x.toFixed(1),w:+copy.width.toFixed(1),right:+copy.right.toFixed(1)}, header:{w:+header.width.toFixed(1)}, grid:{w:+grid.width.toFixed(1)}};
  })()`);
  await send('Page.enable'); await send('Runtime.enable');
  for (const theme of ['light','dark']) {
    await setViewport(1366,900,false);
    await setMedia(theme);
    await load('http://127.0.0.1:4173/index.html');
    await evalJs(`localStorage.setItem('recbay-theme','${theme}'); location.reload();`);
    await sleep(1600);
    console.log('desktop', theme, JSON.stringify(await inspect()));
    const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
    fs.writeFileSync(`qa-cdp-home-${theme}-1366.png`, Buffer.from(shot.data,'base64'));
  }
  for (const theme of ['light','dark']) {
    await setViewport(390,844,true);
    await setMedia(theme);
    await load('http://127.0.0.1:4173/index.html');
    await evalJs(`localStorage.setItem('recbay-theme','${theme}'); location.reload();`);
    await sleep(1600);
    console.log('mobile', theme, JSON.stringify(await inspect()));
    const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
    fs.writeFileSync(`qa-cdp-home-${theme}-390.png`, Buffer.from(shot.data,'base64'));
  }
  ws.close();
})().catch(e=>{console.error(e);process.exit(1);});
