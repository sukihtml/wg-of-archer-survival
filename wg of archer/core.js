
const cv=document.getElementById('c');let g=cv.getContext('2d');
const PI=Math.PI,TAU=PI*2,M=Math;
let W,H,sc,VW,VH,GY,dd,T=0,DT=.016,cam=0,shake=0,gBg,gFg,gGr;
const STK='pemanah_set_v1',STM={gq:2,fp:2,fl:5,ly:1,wa:1},ST={gq:2,fp:2,fl:0,ly:0,wa:0},GQC=[.75,1.2,1.6],FPI=[29.5,13.5,0];
try{const o=JSON.parse(localStorage.getItem(STK)||'null');if(o)for(const k in STM)if(o[k]!=null)ST[k]=M.max(0,M.min(STM[k],o[k]|0))}catch(x){}
function rs(){
dd=M.min(devicePixelRatio||1,GQC[ST.gq]);W=innerWidth;H=innerHeight;
cv.width=W*dd;cv.height=H*dd;
sc=M.max(.55,M.min(1.5,H/520,W/600));
VW=W/sc;VH=H/sc;GY=M.round(VH*.8);
gBg=g.createLinearGradient(0,0,0,GY);
gBg.addColorStop(0,'#050a1b');gBg.addColorStop(.3,'#0e1a3e');gBg.addColorStop(.6,'#22346a');gBg.addColorStop(.85,'#4a5a92');gBg.addColorStop(1,'#938bb8');
gFg=g.createLinearGradient(0,GY-90,0,GY);
gFg.addColorStop(0,'rgba(110,125,185,0)');gFg.addColorStop(1,'rgba(120,135,195,.3)');
gGr=g.createLinearGradient(0,GY,0,VH);
gGr.addColorStop(0,'#1d3336');gGr.addColorStop(.35,'#12232a');gGr.addColorStop(1,'#070e14');
}
rs();addEventListener('resize',rs);
const slc=document.createElement('canvas'),slg=slc.getContext('2d');
let slA=0,slO=null;
function slOn(){
if(ST.fl!=5||slA)return;
if(slc.width!=cv.width||slc.height!=cv.height){slc.width=cv.width;slc.height=cv.height}
else{slg.setTransform(1,0,0,1,0,0);slg.clearRect(0,0,slc.width,slc.height)}
slg.setTransform(g.getTransform());
slg.globalAlpha=1;slg.globalCompositeOperation='source-over';
slO=g;g=slg;slA=1;
}
function slOff(){
if(!slA)return;
slA=0;g=slO;
slg.setTransform(1,0,0,1,0,0);
slg.globalCompositeOperation='source-in';slg.fillStyle='#000';slg.fillRect(0,0,slc.width,slc.height);
slg.globalCompositeOperation='source-over';
g.save();g.setTransform(1,0,0,1,0,0);g.drawImage(slc,0,0);g.restore();
}
function slRs(){
if(slA){slA=0;g=slO}
}

const rnd=(a,b)=>a+M.random()*(b-a);
const hs=n=>{const s=M.sin(n*127.1+311.7)*43758.5453;return s-M.floor(s)};
const lr=(a,b,t)=>a+(b-a)*t;

