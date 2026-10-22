const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const list = await (await fetch('http://127.0.0.1:9226/json/list')).json();
  const target = list.find(t => t.type === 'page');
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let seq=0; const pending=new Map();
  ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id&&pending.has(m.id)){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(new Error(JSON.stringify(m.error))):p.resolve(m.result);}};
  await new Promise((res,rej)=>{ws.onopen=res;ws.onerror=rej;});
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
  await send('Page.enable'); await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
  await send('Page.navigate',{url:'http://127.0.0.1:4173/index.html'});
  await sleep(900);
  const ax=await send('Accessibility.getFullAXTree');
  const keep=new Set(['heading','link','button','main','navigation','banner','contentinfo']);
  const rows=ax.nodes.filter(n=>keep.has(n.role?.value)).map(n=>({role:n.role.value,name:n.name?.value||'',level:n.properties?.find(p=>p.name==='level')?.value?.value}));
  console.log(JSON.stringify(rows,null,2));
  ws.close();
})().catch(e=>{console.error(e);process.exit(1);});
