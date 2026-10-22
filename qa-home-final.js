const fs = require('fs');
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const list = await (await fetch('http://127.0.0.1:9226/json/list')).json();
  const target = list.find(t => t.type === 'page');
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let seq=0; const pending=new Map();
  ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id&&pending.has(m.id)){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(new Error(JSON.stringify(m.error))):p.resolve(m.result);}};
  await new Promise((res,rej)=>{ws.onopen=res;ws.onerror=rej;});
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
  const evalJs=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});return r.result?.value;};
  await send('Page.enable'); await send('Runtime.enable');
  for (const width of [390,1366]) {
    for (const theme of ['light','dark']) {
      await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<=800});
      await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:theme}]});
      await send('Page.navigate',{url:'http://127.0.0.1:4173/index.html'});
      await sleep(800);
      await evalJs(`localStorage.setItem('recbay-theme','${theme}'); location.reload();`);
      await sleep(1100);
      const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
      fs.writeFileSync(`qa-home-final-${width}-${theme}.png`, Buffer.from(shot.data,'base64'));
      const info=await evalJs(`({theme:document.documentElement.getAttribute('data-theme'),sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth,titleRight:document.querySelector('.lineup-title').getBoundingClientRect().right,ctaRight:document.querySelector('.lineup-copy .button').getBoundingClientRect().right})`);
      console.log(width, theme, JSON.stringify(info));
    }
  }
  ws.close();
})().catch(e=>{console.error(e);process.exit(1);});
