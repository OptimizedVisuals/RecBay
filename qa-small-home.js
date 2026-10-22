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
  for (const width of [320,360,390]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height:800,deviceScaleFactor:1,mobile:true});
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:'light'}]});
    await send('Page.navigate',{url:'http://127.0.0.1:4173/index.html'});
    await sleep(700);
    const info=await evalJs(`(() => {const d=document.documentElement;const stage=document.querySelector('.lineup-stage').getBoundingClientRect();const cards=[...document.querySelectorAll('.lineup-card')].map(el=>{const r=el.getBoundingClientRect();return {l:+r.left.toFixed(1),r:+r.right.toFixed(1),t:+r.top.toFixed(1),b:+r.bottom.toFixed(1)}});const count=document.querySelector('.lineup-count').getBoundingClientRect();return {vw:innerWidth,sw:d.scrollWidth,cw:d.clientWidth,overflow:d.scrollWidth>d.clientWidth+1,stage:{h:+stage.height.toFixed(1),b:+stage.bottom.toFixed(1)},count:{w:+count.width.toFixed(1),r:+count.right.toFixed(1)},cards};})()`);
    console.log(width, JSON.stringify(info));
  }
  ws.close();
})().catch(e=>{console.error(e);process.exit(1);});
