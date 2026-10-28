const K={},TT={};
const KM={l:['KeyA','ArrowLeft'],r:['KeyD','ArrowRight'],j:['KeyW','ArrowUp','Space'],f:['KeyJ','KeyF'],s:['KeyK','KeyS','ArrowDown'],q:['KeyQ','KeyL'],u:['KeyE','KeyU'],v:['KeyR','KeyI'],m:['KeyT','KeyO'],x:['KeyX','KeyN']};
const SKN=['q','u','v','m','x'];
const inp=n=>!p.dead&&(KM[n].some(c=>K[c])||TT[n])&&(!SKN.includes(n)||hasSk(n));
addEventListener('keydown',e=>{K[e.code]=1;if(e.code.startsWith('Arrow')||e.code=='Space')e.preventDefault()});
addEventListener('keyup',e=>{K[e.code]=0});
cv.addEventListener('contextmenu',e=>e.preventDefault());
cv.addEventListener('pointerdown',e=>{if(e.pointerType!='mouse')return;if(e.button==0)TT.f=1;if(e.button==2)TT.s=1});
addEventListener('pointerup',e=>{if(e.pointerType!='mouse')return;if(e.button==0)TT.f=0;if(e.button==2)TT.s=0});

const bt=[...document.querySelectorAll('.b')].map(el=>({el,k:el.dataset.k,x:0,y:0,r:0}));
const ptr=new Map();
function mb(){
for(const b of bt){const r=b.el.getBoundingClientRect();b.x=r.left+r.width/2;b.y=r.top+r.height/2;b.r=r.width/2+12}
}
function hit(x,y){
let o=null,bd=1e9;
for(const b of bt){const d=M.hypot(x-b.x,y-b.y);if(d<b.r&&d<bd){bd=d;o=b}}
return o;
}
function sync(){
const on=new Set(ptr.values());
for(const b of bt){const v=on.has(b)?1:0;TT[b.k]=v;b.el.classList.toggle('on',!!v)}
}
function put(id,b){if(ptr.get(id)!==b){ptr.set(id,b);sync()}}
addEventListener('pointerdown',e=>{if(e.pointerType=='mouse')return;mb();put(e.pointerId,hit(e.clientX,e.clientY))});
addEventListener('pointermove',e=>{if(e.pointerType!='mouse'&&ptr.has(e.pointerId))put(e.pointerId,hit(e.clientX,e.clientY))});
const rel=e=>{if(ptr.delete(e.pointerId))sync()};
addEventListener('pointerup',rel);addEventListener('pointercancel',rel);
addEventListener('blur',()=>{for(const k in K)K[k]=0;for(const k in TT)TT[k]=0;ptr.clear();sync()});

const de=document.documentElement,fsb=document.getElementById('fs');
const fsReq=de.requestFullscreen||de.webkitRequestFullscreen;
const fsExit=document.exitFullscreen||document.webkitExitFullscreen;
const fsEl=()=>document.fullscreenElement||document.webkitFullscreenElement;
function fsOn(){
if(!fsReq||fsEl())return;
try{const r=fsReq.call(de,{navigationUI:'hide'});if(r&&r.catch)r.catch(()=>{})}catch(x){}
}
function fsOff(){
if(!fsExit||!fsEl())return;
try{const r=fsExit.call(document);if(r&&r.catch)r.catch(()=>{})}catch(x){}
}
function fsAuto(e){
if(e.pointerType=='mouse'||(e.target&&e.target.closest&&e.target.closest('#fs')))return;
removeEventListener('pointerup',fsAuto);fsOn();
}
if(!fsReq)fsb.style.display='none';
else{
fsb.addEventListener('click',()=>{if(fsEl())fsOff();else fsOn()});
addEventListener('pointerup',fsAuto);
const fsc=()=>{fsb.classList.toggle('x',!!fsEl());rs();setTimeout(rs,150);setTimeout(rs,500)};
document.addEventListener('fullscreenchange',fsc);
document.addEventListener('webkitfullscreenchange',fsc);
}

const pzb=document.getElementById('pz');
let paused=0;
function tp(){
if(inMenu)return;
paused=paused?0:1;
pzb.classList.toggle('x',!!paused);
document.body.classList.toggle('ps',!!paused);
if(!paused)last=performance.now();
}
pzb.addEventListener('click',tp);
const bmb=document.getElementById('bm');
bmb.addEventListener('click',()=>{if(!paused)return;tp();menuGo()});
addEventListener('keydown',e=>{if(e.code=='KeyP'&&!e.repeat)tp()});

