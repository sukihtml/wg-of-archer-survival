const K={},TT={};
const KM={l:['KeyA','ArrowLeft'],r:['KeyD','ArrowRight'],j:['KeyW','ArrowUp','Space'],f:['KeyJ','KeyF','Mouse0'],s:['KeyK','KeyS','ArrowDown','Mouse2'],q:['KeyQ','KeyL'],u:['KeyE','KeyU'],v:['KeyR','KeyI'],m:['KeyT','KeyO'],x:['KeyX','KeyN']};
const SKN=['q','u','v','m','x'];
const inp=n=>!p.dead&&!(duOn&&duS==0)&&(KM[n].some(c=>K[c])||TT[n])&&(!SKN.includes(n)||hasSk(n));
addEventListener('keydown',e=>{K[e.code]=1;if(e.code.startsWith('Arrow')||e.code=='Space')e.preventDefault()});
addEventListener('keyup',e=>{K[e.code]=0});
cv.addEventListener('contextmenu',e=>e.preventDefault());
cv.addEventListener('pointerdown',e=>{if(e.pointerType!='mouse')return;if(e.button==0)K.Mouse0=1;if(e.button==2)K.Mouse2=1});
addEventListener('pointerup',e=>{if(e.pointerType!='mouse')return;if(e.button==0)K.Mouse0=0;if(e.button==2)K.Mouse2=0});

const bt=[...document.querySelectorAll('.b')].map(el=>({el,k:el.dataset.k,x:0,y:0,r:0}));
const ptr=new Map();
const DPJ={el:document.getElementById('dp'),k:'dp',id:null};
function dpPos(e){
if(DPJ.el.classList.contains('nw'))return dpPosN(e);
const r=DPJ.el.getBoundingClientRect(),mx=M.max(1,r.width/2-r.height*.22-2),cx=r.left+r.width/2,cy=r.top+r.height/2;
let ox=e.clientX-cx,oy=e.clientY-cy;
const d=M.hypot(ox,oy);
if(d>mx){ox*=mx/d;oy*=mx/d}
const dz=mx*.22;
DPJ.el.style.setProperty('--k',ox+'px');DPJ.el.style.setProperty('--ky',oy+'px');
TT.l=ox<-dz?1:0;TT.r=ox>dz?1:0;
TT.a=(TT.l||TT.r)?(ox<0?-1:1)*M.max(.2,M.min(1,(M.abs(ox)-dz)/M.max(1,mx-dz))):0;
TT.vy=M.abs(oy)>dz?(oy<0?-1:1)*M.min(1,(M.abs(oy)-dz)/M.max(1,mx-dz)):0;
}
function dpPosN(e){
const r=DPJ.el.getBoundingClientRect(),mx=M.max(1,r.width/2-r.height*.36-2),cx=r.left+r.width/2;
const ox=M.max(-mx,M.min(mx,e.clientX-cx)),dz=mx*.22;
DPJ.el.style.setProperty('--k',ox+'px');
TT.l=ox<-dz?1:0;TT.r=ox>dz?1:0;
TT.a=(TT.l||TT.r)?(ox<0?-1:1)*M.max(.2,M.min(1,(M.abs(ox)-dz)/M.max(1,mx-dz))):0;
TT.vy=0;
}
function dpDown(e){
if(DPJ.id!==null)return false;
const r=DPJ.el.getBoundingClientRect();
if(!r.width||e.clientX<r.left-16||e.clientX>r.right+16||e.clientY<r.top-28||e.clientY>r.bottom+28)return false;
DPJ.id=e.pointerId;DPJ.el.classList.add('on');dpPos(e);return true;
}
function dpRel(e){
if(DPJ.id!==e.pointerId)return false;
dpClr();return true;
}
function dpClr(){DPJ.id=null;DPJ.el.classList.remove('on');DPJ.el.style.setProperty('--k','0px');DPJ.el.style.setProperty('--ky','0px');TT.l=0;TT.r=0;TT.a=0;TT.vy=0}
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
addEventListener('pointerdown',e=>{if(e.pointerType=='mouse')return;if(dpDown(e))return;mb();put(e.pointerId,hit(e.clientX,e.clientY))});
addEventListener('pointermove',e=>{if(e.pointerId===DPJ.id)dpPos(e)});
addEventListener('pointermove',e=>{if(e.pointerType!='mouse'&&ptr.has(e.pointerId))put(e.pointerId,hit(e.clientX,e.clientY))});
const rel=e=>{if(dpRel(e))return;if(ptr.delete(e.pointerId))sync()};
addEventListener('pointerup',rel);addEventListener('pointercancel',rel);
addEventListener('blur',()=>{for(const k in K)K[k]=0;for(const k in TT)TT[k]=0;ptr.clear();sync();dpClr()});
addEventListener('pagehide',dpClr);
document.addEventListener('visibilitychange',()=>{if(document.hidden)dpClr()});

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

