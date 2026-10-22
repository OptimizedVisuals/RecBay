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
  for (const [width,height,mobile] of [[390,844,true],[1366,900,false]]) {
    for (const theme of ['light','dark']) {
      await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile});
      await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:theme}]});
      await send('Page.navigate',{url:'http://127.0.0.1:4173/index.html'});
      await sleep(700);
      await evalJs(`localStorage.setItem('recbay-theme','${theme}'); location.reload();`);
      await sleep(1000);
      const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
      fs.writeFileSync(`qa-final-home-${width}-${theme}.png`, Buffer.from(shot.data,'base64'));
      const info=await evalJs(`(() => {const d=document.documentElement;const h1=[...document.querySelectorAll('h1')].map(e=>e.textContent.trim());const cards=document.querySelectorAll('.project-grid .project-card').length;return {theme:d.getAttribute('data-theme'),sw:d.scrollWidth,cw:d.clientWidth,h1,cards};})()`);
      console.log(width,theme,JSON.stringify(info));
    }
  }
  ws.close();
})().catch(e=>{console.error(e);process.exit(1);});
