
const cv=document.getElementById('c');let g=GX.init(cv);
const PI=Math.PI,TAU=PI*2,M=Math;
let W,H,sc,VW,VH,GY,dd,T=0,DT=.016,cam=0,shake=0,gBg,gFg,gGr;
const STK='pemanah_set_v1',STM={gq:2,fp:2,fl:5,wa:1,bg:5,pt:2},ST={gq:2,fp:2,fl:0,wa:0,bg:0,pt:2},GQC=[.6,.95,1.6],FPI=[29.5,13.5,0];
let dq=1,dqG=-1;
try{const o=JSON.parse(localStorage.getItem(STK)||'null');if(o){for(const k in STM)if(o[k]!=null)ST[k]=M.max(0,M.min(STM[k],o[k]|0));if(o.pt==null)ST.pt=ST.gq}}catch(x){}
function rs(){
const oG=GY;
if(dqG!==ST.gq){dq=1;dqG=ST.gq}
dd=M.max(.5,M.min(devicePixelRatio||1,GQC[ST.gq])*(ST.gq<2?dq:1));W=innerWidth;H=innerHeight;
cv.width=W*dd;cv.height=H*dd;
sc=M.max(.55,M.min(1.5,H/520,W/600));
VW=W/sc;VH=H/sc;GY=M.round(VH*.8);
if(oG)try{p.y+=GY-oG}catch(x){}
gBg=g.createLinearGradient(0,0,0,GY);
gBg.addColorStop(0,'#050a1b');gBg.addColorStop(.3,'#0e1a3e');gBg.addColorStop(.6,'#22346a');gBg.addColorStop(.85,'#4a5a92');gBg.addColorStop(1,'#938bb8');
gFg=g.createLinearGradient(0,GY-90,0,GY);
gFg.addColorStop(0,'rgba(110,125,185,0)');gFg.addColorStop(1,'rgba(120,135,195,.3)');
gGr=g.createLinearGradient(0,GY,0,VH);
gGr.addColorStop(0,'#1d3336');gGr.addColorStop(.35,'#12232a');gGr.addColorStop(1,'#070e14');
}
rs();addEventListener('resize',rs);
const slc=GX.layer(),slg=slc.c;
let slA=0,slO=null;
function slOn(){
if(ST.fl!=5||slA)return;
slc.size(cv.width,cv.height);slc.clear();slg.rs();
slg.setTransform(g.getTransform());
slO=g;g=slg;slA=1;
}
function slOff(){
if(!slA)return;
slA=0;g=slO;
g.save();g.setTransform(1,0,0,1,0,0);g.drawSil(slc);g.restore();
}
function slRs(){
if(slA){slA=0;g=slO}
}

const rnd=(a,b)=>a+M.random()*(b-a);
const hs=n=>{const s=M.sin(n*127.1+311.7)*43758.5453;return s-M.floor(s)};
const lr=(a,b,t)=>a+(b-a)*t;
const QI=[.083,.05,0],QM=new WeakMap();
function qDraw(o,fn){
const iv=QI[ST.gq];
if(!iv){fn(o);return}
let q=QM.get(o);
if(!q){q={k:[],s:[],l:[],t:-1e9,T:0};QM.set(o,q)}
if(T<q.t||T-q.t>=iv){
const k=q.k,s=q.s;let n=0;
for(const a in o){const v=o[a],y=typeof v;if((y==='number'||y==='boolean'||y==='string')&&a!=='x'&&a!=='y'&&a!=='f'&&a!=='hf'&&a!=='dd'&&a!=='dead'){k[n]=a;s[n]=v;n++}}
k.length=n;s.length=n;q.t=T;q.T=T;
fn(o);return
}
const k=q.k,s=q.s,l=q.l,n=k.length,t0=T;
for(let i=0;i<n;i++){const a=k[i];l[i]=o[a];o[a]=s[i]}
T=q.T;
try{fn(o)}finally{
T=t0;
for(let i=0;i<n;i++){const a=k[i],c=o[a];if(c===s[i]||c!==c)o[a]=l[i]}
}
}

