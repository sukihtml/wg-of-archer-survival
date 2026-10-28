const E=[],S=[],Pr=[];
let msg=null,spT=2,lc=-1;
const fb=document.getElementById('f'),qb=document.getElementById('q'),ub=document.getElementById('u'),vb=document.getElementById('v');
let lq=-1,lu=-1,lw=-1,lx=-1;const mdb=document.getElementById('m');
const SK='pemanah_save_v1';
const sv={coins:10,own:[0],sel:0,hi:1,up:[0,0,0,0],wg:[],ws:0,sq:[],sl:[0,0,0,0],wl:0};
try{const o=JSON.parse(localStorage.getItem(SK)||'null');if(o){sv.coins=M.max(0,M.floor(+o.coins||0));if(Array.isArray(o.own))for(const v of o.own)if((v|0)>0&&(v|0)<AE.length&&!sv.own.includes(v|0))sv.own.push(v|0);if(sv.own.includes(o.sel|0))sv.sel=o.sel|0;sv.hi=M.max(1,o.hi|0);if(Array.isArray(o.up))for(let i=0;i<4;i++)sv.up[i]=M.max(0,M.min(10,o.up[i]|0));if(Array.isArray(o.wg))for(const v of o.wg)if((v==1||v==2)&&!sv.wg.includes(v))sv.wg.push(v);if(sv.wg.includes(o.ws|0))sv.ws=o.ws|0;if(Array.isArray(o.sq))for(const v of o.sq)if((v|0)>=0&&(v|0)<4&&!sv.sq.includes(v|0))sv.sq.push(v|0);if(Array.isArray(o.sl))for(let i=0;i<4;i++)sv.sl[i]=M.max(0,M.min(5,o.sl[i]|0));sv.wl=M.max(0,M.min(5,o.wl|0))}}catch(x){}
const WV={n:0,k:0,q:0,bs:0,bt:0,ts:0};
let mmOn=0,mmTi=0,mmBs=0,mmCn=0,brOn=0,brK=0,brN=0,brT=0,brBest=0;
const BRK='pemanah_bossrush_v1';
try{brBest=M.max(0,+localStorage.getItem(BRK)|0)}catch(x){}
const mmT=()=>M.floor(mmTi/60)+':'+('0'+M.floor(mmTi%60)).slice(-2);
const CG=[1,2,3,0,2,3];
function save(){try{localStorage.setItem(SK,JSON.stringify(sv))}catch(x){}}
setInterval(save,4000);
addEventListener('pagehide',save);
document.addEventListener('visibilitychange',()=>{if(document.hidden)save()});
function wake(){
last=performance.now();
for(const k in K)K[k]=0;for(const k in TT)TT[k]=0;ptr.clear();sync();
rs();setTimeout(rs,200);setTimeout(rs,600);
}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)wake()});
addEventListener('pageshow',wake);
addEventListener('focus',wake);
const ban=t=>{msg={t,l:3.4,m:3.4}};
const sgn=v=>v<0?-1:1;
const wgT=()=>SPC?0:sv.ws||(p.vt==4?1:p.vt==5?2:0);
const pdm=()=>AE[evl()].d*gDm();
const gUh=()=>1+.1*sv.up[0],gUd=()=>(1+.1*sv.up[1]+.12*xzB.d)*(xzT.dm>0?1.5:1),gUs=()=>1+.05*sv.up[2]+.1*xzB.s,gUm=()=>.1*sv.up[3]+.08*xzB.m;

const ET=[
{hp:55,sp:82,dm:12,rg:28,cd:.95,wu:.26,pc:'110,125,105'},
{hp:80,sp:64,dm:16,rg:42,cd:1.2,wu:.36,pc:'215,205,180'},
{hp:170,sp:42,dm:24,rg:34,cd:1.7,wu:.5,pc:'140,142,150'},
{hp:1000,sp:50,dm:30,rg:90,cd:0,wu:1,pc:'150,150,160'},
{hp:48,sp:95,dm:13,rg:30,cd:2,wu:.3,pc:'120,100,160'},
{hp:65,sp:58,dm:15,rg:300,cd:2.4,wu:.55,pc:'165,140,210'}
];
const BN=['ell sesudah after, Penjaga Gerbang','wgxsuki, Raja Batu','Raja suki','Golem Batu Purba','Pemanah Bayangan'];
const SC=[
{n:'WG',k:1,hp:70,dm:16,at:330,hd:200,sg:430,cd:.85,wu:.22,sp:150,of:-56,t:'#3a4a3f',cp:'#4f4833',a:'#33423a',l1:'#1a211c',l2:'#2b241a'},
{n:'ell sebelum before',k:2,hp:75,dm:24,at:380,hd:230,sg:460,cd:1.3,wu:.28,sp:110,of:80,th:[0,0,0],a:'#3f4962',l1:'#222838',l2:'#2c2a2a'},
{n:'Suki Elektrik',k:3,hp:150,dm:38,at:340,hd:210,sg:470,cd:1,wu:.3,sp:150,of:-112,t:'#2d2358',cp:'#3a2670',a:'#2c2352',l1:'#1a1430',l2:'#2a2040'},
{n:'ell sesudah after',k:5,hp:1800,dm:8,at:70,rg:76,sg:430,cd:1.3,wu:.45,sp:105,of:128,t:'#8b8678',cp:'#5c5849',a:'#6f6a5d',l1:'#5e5a4f',l2:'#47443b'}
];

function near(e){
let o=null,bd=1e9;
if(!p.dead){bd=M.abs(p.x-e.x)-30;o=p}
for(const s of S){if(s.dead)continue;const d=M.abs(s.x-e.x);if(d<bd){bd=d;o=s}}
return o;
}

function killP(){
if(!mmOn)sv.cw=1;save();
p.hp=0;p.dead=.001;p.dr=0;p.ch=0;p.go=0;p.fy=0;p.vx*=.3;shake=9;
for(let i=0;i<14;i++)sp(3,p.x,p.y-30,rnd(-160,160),rnd(-260,-40),rnd(.4,.8),2,'160,70,60',600,1.5);
dust(p.x,GY,10,100);
}
function hurtP(d,fx){
if(p.dead||p.inv>0)return;
const dr=fx>p.x?1:-1;
if(p.sh>.6&&dr==p.f){
p.sf=1;p.inv=.25;p.vx-=dr*70;p.hp-=d*.2;p.rg=3;shake=M.max(shake,1.5);
ring(p.x+p.f*20,p.y-26,'160,200,220',22);
for(let i=0;i<6;i++)sp(3,p.x+p.f*22,p.y-26+rnd(-14,14),dr*rnd(40,180),rnd(-100,60),rnd(.2,.4),1.6,'190,215,230',300,2);
if(p.hp<=0)killP();
return;
}
p.hp-=d;p.hu=.3;p.inv=.4;p.rg=4;p.vx-=dr*220;shake=M.max(shake,4);
for(let i=0;i<5;i++)sp(0,p.x+rnd(-5,5),p.y-rnd(20,50),-dr*rnd(20,70),rnd(-60,-10),rnd(.3,.5),rnd(2,3.5),'150,70,62',200,2);
if(p.hp<=0)killP();
}
function hurtS(s,d,fx){
if(s.dead)return;
s.hp-=d;s.hf=.2;s.rg=4;s.vx+=(s.x>fx?1:-1)*140;
for(let i=0;i<4;i++)sp(0,s.x+rnd(-5,5),s.y-rnd(20,50),rnd(-40,40),rnd(-60,-10),rnd(.3,.5),rnd(2,3.5),'150,70,62',200,2);
if(s.hp<=0){
s.hp=0;s.dead=12;dust(s.x,GY,8,80);
for(let i=0;i<10;i++)sp(3,s.x,s.y-rnd(15,50),rnd(-150,150),rnd(-260,-40),rnd(.3,.7),2,'200,190,170',600,1.5);
}
}
function hurtE(e,d,dx){
if(e.dd)return;
e.hp-=d;e.hf=.14;
e.vx+=dx*(e.boss?18:e.t==2?90:170);
const c=e.boss?'150,150,160':ET[e.t].pc,z=e.sz;
for(let i=0;i<5;i++)sp(0,e.x+rnd(-6,6),e.y-rnd(20,50)*z,dx*rnd(20,80),rnd(-60,-10),rnd(.3,.6),rnd(2,4),c,200,2);
for(let i=0;i<4;i++)sp(3,e.x,e.y-rnd(25,50)*z,dx*rnd(60,220)+rnd(-40,40),rnd(-180,-20),rnd(.2,.4),1.6,e.t==2||e.boss?'255,205,130':'215,205,185',500,1.5);
if(e.hp<=0)killE(e);
}
function killE(e){
e.hp=0;e.dd=.001;e.wu=0;
const cn=brOn?20:mmOn?0:xzCn(e.boss?20+WV.n*2:CG[e.t]);sv.coins+=cn;WV.k++;xzKill(e,cn);
p.uc=M.min(1,p.uc+(e.boss?.3:.05));if(SPC)cmbCh(e.boss?.3:.04);
const z=e.sz;
dust(e.x,GY,e.boss?16:6,e.boss?160:70);
for(let i=0;i<(e.boss?30:10);i++)sp(3,e.x+rnd(-8,8)*z,e.y-rnd(10,55)*z,rnd(-200,200),rnd(-320,-60),rnd(.35,.8),2,e.t==2||e.boss?'255,205,130':'215,205,185',600,1.2);
shake=M.max(shake,e.boss?12:2);
if(e.boss){if(!p.dead)p.hp=M.min(p.mh,p.hp+35*gDm());ban(brOn?'Boss tumbang  -  +20 koin':'Boss tumbang');if(brOn){brK++;if(brK>brBest){brBest=brK;try{localStorage.setItem(BRK,brBest)}catch(x){}}}}
save();
}

function hitA(a){
if(a.vf)return false;
const q=a.tr[a.tr.length-1]||a;
for(const e of E){
if(e.dd||a.hit.includes(e))continue;
for(let k=1;k<=4;k++){
const x=lr(q.x,a.x,k/4),y=lr(q.y,a.y,k/4);
if(M.abs(x-e.x)<15*e.sz&&y>e.y-64*e.sz&&y<e.y+2){
a.hit.push(e);
hurtE(e,a.dm,a.vx<0?-1:1);
ring(x,y,AE[a.ev].c,14);
sp(1,x,y,0,0,.18,34,AE[a.ev].k);
for(let j=0;j<4;j++)sp(3,x,y,rnd(-140,140),rnd(-140,60),rnd(.15,.3),1.5,'255,215,150',400,2);
if(a.ev==4&&!a.sp)sHit(x,y,a);
if(a.ev==5&&!a.sp)nHit(x,y,a);
if(a.pr>0){a.pr--;break}
return true;
}
}
}
return false;
}

