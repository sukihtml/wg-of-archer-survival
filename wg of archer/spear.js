let SPC=0;
try{SPC=+localStorage.getItem('wg_spc')||0}catch(x){}
if(SPC>1)SPC=1;
const dxS={act:'T',O:{}};
const SK3=9;
function dxMk(id,P0){
const O={x:0,y:0,vx:0,vy:0,f:1,on:1,sh:0,at:-1,atH:0,sk1:-1,skH:0,skE:0,rl:-1,cb:0,sF:0,cd:0,us:0,uc:0,ut:0,kc:0,dr:0,ch:0,rv:0,bt:30,k3:0,s3:-1,s3H:0};
dxS.O[id]=O;
return new Proxy(P0,{get:(t,k)=>dxS.act!==id&&k in O?O[k]:t[k],set:(t,k,v)=>{if(dxS.act!==id&&k in O)O[k]=v;else t[k]=v;return true}});
}
(function(P0){
const p=dxMk('T',P0);
function R(x,y,w,h,c){g.fillStyle=c;g.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h))}
function CI(x,y,r,c){g.fillStyle=c;x=Math.round(x);y=Math.round(y);for(let j=-r;j<=r;j++){const w=Math.floor(Math.sqrt(r*r-j*j+r*.5));g.fillRect(x-w,y+j,w*2+1,1)}}
function PG(p,c){
g.fillStyle=c;
let y0=1e9,y1=-1e9;
for(const q of p){y0=Math.min(y0,q[1]);y1=Math.max(y1,q[1])}
for(let y=Math.floor(y0);y<Math.ceil(y1);y++){
const m=y+.5,xs=[];
for(let i=0;i<p.length;i++){
const a=p[i],b=p[(i+1)%p.length];
if((a[1]<=m&&b[1]>m)||(b[1]<=m&&a[1]>m))xs.push(a[0]+(m-a[1])*(b[0]-a[0])/(b[1]-a[1]));
}
xs.sort((u,v)=>u-v);
for(let i=0;i+1<xs.length;i+=2){const x0=Math.round(xs[i]),x1=Math.round(xs[i+1]);if(x1>x0)g.fillRect(x0,y,x1-x0,1)}
}
}
function SH(p,c,o){
for(const d of [[-1,0],[1,0],[0,-1],[0,1]])PG(p.map(q=>[q[0]+d[0],q[1]+d[1]]),o);
PG(p,c);
}
function PL(a,b,c){
g.fillStyle=c;
const n=Math.max(Math.abs(Math.round(b[0])-Math.round(a[0])),Math.abs(Math.round(b[1])-Math.round(a[1])))||1;
for(let i=0;i<=n;i++)g.fillRect(Math.round(a[0]+(b[0]-a[0])*i/n),Math.round(a[1]+(b[1]-a[1])*i/n),1,1);
}
function spear(g,a,k){
const co=Math.cos(a),si=Math.sin(a),nx=-si,ny=co;
const bt=[g[0]-co*14,g[1]-si*14],bs=[g[0]+co*25,g[1]+si*25],tp=[g[0]+co*35,g[1]+si*35],m=[bs[0]+co*3,bs[1]+si*3];
for(const d of [[-1,0],[1,0],[0,-1],[0,1]])PL([bt[0]+d[0],bt[1]+d[1]],[bs[0]+d[0],bs[1]+d[1]],OL);
PL(bt,bs,k('#8a5a2e'));
SH([bs,[m[0]+nx*3.5,m[1]+ny*3.5],tp,[m[0]-nx*3.5,m[1]-ny*3.5]],k('#e9ecff'),OL);
PL([bs[0]+co*2,bs[1]+si*2],[tp[0]-co*2,tp[1]-si*2],k('#8f98d8'));
const tx=Math.round(bs[0]-co*3),ty=Math.round(bs[1]-si*3);
R(tx-1,ty-1,3,3,k('#d83a4a'));R(tx-1,ty+2,1,4,k('#d83a4a'));R(tx+1,ty+2,1,3,k('#9c2434'));
return tp;
}
function IK(x,y,tx,ty,l1,l2,s){
let dx=tx-x,dy=ty-y,d=Math.hypot(dx,dy)||.01;
d=Math.max(Math.abs(l1-l2)+.01,Math.min(d,l1+l2-.01));
const a=Math.atan2(dy,dx),c=Math.acos((l1*l1+d*d-l2*l2)/(2*l1*d))*s;
return[[x,y],[x+Math.cos(a+c)*l1,y+Math.sin(a+c)*l1],[x+Math.cos(a)*d,y+Math.sin(a)*d]];
}
function LB(p,r,c){
const s=[];
for(let i=0;i<p.length-1;i++){
const n=Math.ceil(Math.hypot(p[i+1][0]-p[i][0],p[i+1][1]-p[i][1])*1.5)+1;
for(let j=0;j<n;j++){const t=j/n;s.push([p[i][0]+(p[i+1][0]-p[i][0])*t,p[i][1]+(p[i+1][1]-p[i][1])*t,r[i]+(r[i+1]-r[i])*t,i])}
}
const e=p.length-1;
s.push([p[e][0],p[e][1],r[e],Math.max(0,e-1)]);
for(const q of s)CI(q[0],q[1],Math.round(q[2])+1,OL);
for(const q of s)CI(q[0],q[1],Math.round(q[2]),c[Math.min(q[3],c.length-1)]);
}
function shoe(a,g,c){const co=Math.cos(g),si=Math.sin(g);SH([[-4,-1],[3,-1],[10,3],[-4,3]].map(q=>[Math.round(a[0]+q[0]*co-q[1]*si),Math.round(a[1]+q[0]*si+q[1]*co)]),c,OL)}
function lt(o){const hy=-30+o.b,co=Math.cos(o.lean),si=Math.sin(o.lean);return(x,y)=>{const dy=y-hy;return[x*co-dy*si,x*si+dy*co+hy]}}
function pose(f){
const t=f.t,s=f.s,T=f.fr;
const o={b:0,hx:0,hy:0,ln:0,a:[3,18],c:[-3,18],lb:[-6,-3],lf:[6,-3],gb:0,gf:0,lean:0,ox:0,oy:0,e:0,sa:-1.3,cg:0};
const mx=(p,q,w)=>p.map((v,i)=>v+(q[i]-v)*w);
const sm=(x,y,w)=>x+(y-x)*w;
if(s==='idle'){
const w=Math.sin(T*.06);o.b=w*.5+.5;o.a=[8+w*.5,8];o.c=[-3-w,18];o.sa=-1.3;
}
else if(s==='run'){
const ph=f.ph,L=27,A=.6,c0=-.1,Lf=9,mv=Math.min(1,Math.abs(f.vx)/1.7);
const g=(p,x)=>{const th=c0+A*Math.sin(p),sw=Math.max(0,Math.cos(p)),len=L-Lf*sw;return{th:th,sw:sw,dx:x+len*Math.sin(th),dy:len*Math.cos(th)}};
const n=g(ph,3),r=g(ph+Math.PI,-3),h=Math.max(n.dy,r.dy)+3;
const gp=q=>(q.th<0?-1.1*q.th:-.35*q.th)+.3*q.sw;
const hop=3.5*Math.pow(Math.max(0,-Math.cos(2*ph)),1.5)*mv;
o.b=30-h-hop;o.lf=[n.dx,n.dy-h-hop];o.lb=[r.dx,r.dy-h-hop];o.gf=gp(n);o.gb=gp(r);
o.lean=.3*mv;
const arm=al=>[15.5*Math.sin(al),15.5*Math.cos(al)-2.5*Math.max(0,Math.sin(al))];
o.a=[11,3+1.5*Math.sin(2*ph)];o.c=arm(.8*Math.sin(ph)+.1);o.sa=-.55;
}
else if(s==='jump'){
const u=Math.max(0,Math.min(1,(f.vy+5.4)/10.8)),mv=Math.min(1,Math.abs(f.vx)/1.7);
const J0={lf:[4,-4],lb:[-4,-5],gf:1,gb:1,a:[8,-14],c:[-8,-14]},J1={lf:[14,-5.5],lb:[-12,-6],gf:.5,gb:.7,a:[13,-8],c:[-12,-9]},J2={lf:[9,-3],lb:[-8,-3],gf:.1,gb:.1,a:[14,5],c:[-14,5]};
const p=u<.5?J0:J1,q=u<.5?J1:J2,w=u<.5?u*2:(u-.5)*2;
o.lf=mx(p.lf,q.lf,w);o.lb=mx(p.lb,q.lb,w);o.gf=sm(p.gf,q.gf,w);o.gb=sm(p.gb,q.gb,w);o.a=mx(p.a,q.a,w);o.c=mx(p.c,q.c,w);
o.lean=.12*mv;o.hy=-(1-u);o.a=[12,-3];o.c=[-10,-8];o.sa=-.9+u*1.5;
}
else if(s==='shield'){
o.b=2;o.lean=t<6?.2:.12;o.lf=[10,-3];o.lb=[-8,-3];o.a=[15,-3];o.c=[15,3];o.sa=-.35;o.cg=1;
}
else if(s==='attack'){
if(t<6){o.b=2;o.lean=-.08;o.lf=[8,-3];o.lb=[-10,-3];o.a=[-2,2];o.sa=-.1;o.cg=1}
else if(t<13){o.b=4;o.lean=.3;o.lf=[17,-3];o.lb=[-14,-3];o.a=[17,f.cb?2:-4];o.sa=f.cb?.2:-.18;o.cg=1}
else{o.b=1;o.lean=.1;o.lf=[9,-3];o.lb=[-7,-3];o.a=[9,6];o.sa=-.7;o.c=[-5,16]}
}
else if(s==='skill1'){
if(t<12){o.b=3;o.lean=-.1;o.lf=[11,-3];o.lb=[-10,-3];o.a=[0,0];o.sa=-.08;o.cg=1}
else if(t<24){o.b=5;o.lean=.42;o.lf=[19,-3];o.lb=[-15,-3];o.gf=.3;o.a=[17,-3];o.sa=-.02;o.cg=1}
else{o.lean=.05;o.lf=[7,-3];o.lb=[-7,-3];o.a=[8,8];o.sa=-.6;o.c=[-4,16]}
}
else if(s==='skill2'){
if(t<20){const w=t/20;o.b=3.5-2*w;o.lean=.05;o.lf=[9,-3];o.lb=[-9,-3];o.a=[4,2-16*w];o.sa=-1.55;o.cg=1}
else if(t<48){o.b=1;o.lean=.1;o.lf=[10,-3];o.lb=[-9,-3];o.a=[14,-8];o.sa=-.5;o.cg=1}
else{o.lf=[7,-3];o.lb=[-7,-3];o.a=[9,6];o.sa=-.8;o.c=[-4,16]}
}
else if(s==='combo'){
const k=f.ck;
if(k==='ready'){o.b=3;o.lean=-.12;o.lf=[11,-3];o.lb=[-10,-3];o.a=[0,0];o.sa=-.08;o.cg=1}
else if(k==='dash'){o.b=5;o.lean=.5;o.lf=[19,-3];o.lb=[-15,-3];o.gf=.3;o.a=[17,-3];o.sa=-.02;o.cg=1}
else if(k==='slash'){o.b=3;o.lean=.26;o.lf=[15,-3];o.lb=[-12,-3];o.a=[16,-6];o.sa=-.42;o.cg=1}
else if(k==='leap'){o.b=1.5;o.lean=.04;o.lf=[12,-6];o.lb=[-9,-4];o.a=[4,-15];o.sa=-1.55;o.cg=1}
else if(k==='throw'){o.b=4;o.lean=.4;o.lf=[17,-4];o.lb=[-12,-3];o.a=[15,-5];o.sa=-.55;o.cg=1}
else if(k==='fall'){o.b=2;o.lean=.12;o.lf=[11,-6];o.lb=[-9,-4];o.a=[7,-11];o.sa=-1.05;o.cg=1}
else{o.lf=[7,-3];o.lb=[-7,-3];o.a=[9,6];o.sa=-.8;o.c=[-4,16]}
}
else if(s==='die'){
o.e=2;o.sa=1.1;
if(t<8){o.ln=-4;o.hx=-2;o.a=[4,8];o.c=[-8,12]}
else if(t<20){o.b=8;o.hy=3;o.ln=-4;o.a=[6,12];o.c=[-8,12];o.lb=[-8,-3];o.lf=[9,-3]}
else{o.a=[8,14];o.c=[-8,14];o.lb=[-8,-3];o.lf=[9,-3]}
}
if(f.ls>0&&!f.air&&s==='idle'){o.b=Math.max(o.b,3);o.lb=[-9,-3];o.lf=[9,-3];o.lean=.1}
return o;
}
function eye(x,y,m,P,k,e,bl){
const w=k('#ffffff');
if(bl){R(x,y+1,6,1,k(P.l));return}
if(m){R(x+1,y,5,1,w);R(x,y+1,6,1,w);R(x,y+2,5,1,w)}else{R(x,y,5,1,w);R(x,y+1,6,1,w);R(x+1,y+2,5,1,w)}
R(x+2,y,3,3,e===1?'#ffffff':k(P.i));
R(x+3,y,1,3,e===1?P.ih:'#2a1a05');
if(e!==1)R(x+2,y,1,1,k(P.ih));
}
function drawBody(f,o,fl){
const P=CH[f.ch],k=c=>fl?(fl===true?'#c9d1ff':fl):c,dead=o.e===2;
const b=o.b,bb=b*.8,u=o.ln*.5,ru=Math.round(u),rb=Math.round(bb);
const T=lt(o);
const hp=T(o.hx+o.ln*.8,-49+o.hy+bb);
const hx=Math.round(hp[0]),hy=Math.round(hp[1]+49);
const cb=k(P.b),cl=k(P.l),cd=k(P.d),cn=k(P.n),cs=k(P.s),css=k(P.ss);
const cv=q=>[(q.x-f.x)*f.d-o.ox,q.y-f.y-o.oy];
const hipY=-30+b,ch=T(u,-40+bb);
const lg=(x,a)=>[[x,hipY],[(x+a[0])/2,(hipY+a[1])/2],a];
LB(f.tl.map(cv),[1.4,1.4,1.4,1.4,1,1,1,0],[cb,cb,cb,cb,cb,cb,cl]);
LB(lg(-3,o.lb),[2,2,3],[cd,cn]);shoe(o.lb,o.gb,cl);
const sb=T(u-4,-39+bb),sf=T(u+4,-39+bb);
const fa=IK(sf[0],sf[1],sf[0]+o.a[0],sf[1]+o.a[1],9,9,1),gp=fa[2],ca=Math.cos(o.sa),sa=Math.sin(o.sa);
const fr=[sb[0]+o.c[0],sb[1]+o.c[1]],rt=[fr[0]+(gp[0]-ca*8-fr[0])*o.cg,fr[1]+(gp[1]-sa*8-fr[1])*o.cg];
LB(IK(sb[0],sb[1],rt[0],rt[1],9,9,1),[2,1,1],[cd,cd]);
LB(f.sc.map(cv),[1.4,1.4,1,0],[cs,cs,css]);
LB([[0,hipY],ch],[2,3],[cb]);
LB([T(-1,hipY-1),T(u-1,-38+bb)],[0,0],[cl]);
LB(lg(3,o.lf),[2,2,3],[cb,cn]);shoe(o.lf,o.gf,cl);
SH([[hx-8,-52+hy],[hx-7,-61+hy],[hx-1,-55+hy]],cb,OL);
SH([[hx+1,-55+hy],[hx+8,-62+hy],[hx+8,-50+hy]],cb,OL);
PG([[hx-7,-55+hy],[hx-7,-59+hy],[hx-4,-55+hy]],cl);
PG([[hx+5,-55+hy],[hx+7,-59+hy],[hx+7,-53+hy]],cl);
SH([[hx-7,-52+hy],[hx-5,-55+hy],[hx+5,-55+hy],[hx+7,-52+hy],[hx+8,-48+hy],[hx+7,-44+hy],[hx+3,-43+hy],[hx-3,-43+hy],[hx-7,-44+hy],[hx-8,-48+hy]],cb,OL);
R(hx-4,-54+hy,7,1,cl);
R(hx-7,-51+hy,1,3,cl);
if(dead){
const xm=(x,y)=>{R(x,y,1,1,'#fff');R(x+2,y,1,1,'#fff');R(x+1,y+1,1,1,'#fff');R(x,y+2,1,1,'#fff');R(x+2,y+2,1,1,'#fff')};
xm(hx-4,-50+hy);xm(hx+4,-50+hy);
}else{
const bl=!inMenu&&f.fr%210<5;
eye(hx-5,-50+hy,0,P,k,o.e,bl);
eye(hx+2,-50+hy,1,P,k,o.e,bl);
}
const tp=spear(gp,o.sa,k);
f.tip=[Math.round(f.x)+f.d*(tp[0]+o.ox),f.y+o.oy+tp[1]];
LB(fa,[2,1,1],[cb,cl]);
CI(gp[0],gp[1],2,OL);CI(gp[0],gp[1],1,cl);
LB([T(-6+ru,-39+rb),T(6+ru,-39+rb)],[2,2],[css]);
LB([T(-7+ru,-43+rb),T(7+ru,-43+rb)],[2,2],[cs]);
PL(T(-6+ru,-45+rb),T(-1+ru,-45+rb),'#fff');
PL(T(-5+ru,-41+rb),T(5+ru,-41+rb),css);
}
function drawBarrier(f){
const cx=f.x+f.d*2,cy=f.y-28,r=30+Math.round(Math.sin(f.fr*.2)),gk=Math.min(1,f.t/6);
g.save();
g.globalAlpha=.16*gk;CI(cx,cy,r,'#6f9cff');
g.globalAlpha=.95*gk;
for(let i=0;i<60;i++){if(i%6>3)continue;const a=i/60*6.283+f.fr*.04;R(cx+Math.cos(a)*r,cy+Math.sin(a)*r,2,2,i%12<6?'#9db8ff':'#5b86f0')}
g.globalAlpha=.7*gk;
R(cx-12,cy-14,6,1,'#7fa4ff');R(cx-13,cy-13,1,4,'#7fa4ff');R(cx+6,cy+11,5,1,'#7fa4ff');
g.restore();
}
function chain(ch,ax,ay,len,rest,k,g,dr){
ch[0].x=ax;ch[0].y=ay;ch[0].ox=ax;ch[0].oy=ay;
for(let i=1;i<ch.length;i++){
const q=ch[i],vx=(q.x-q.ox)*dr,vy=(q.y-q.oy)*dr;
q.ox=q.x;q.oy=q.y;
q.x+=vx+(rest[i][0]-q.x)*k;
q.y+=vy+g+(rest[i][1]-q.y)*k;
}
for(let n=0;n<3;n++)for(let i=1;i<ch.length;i++){
const p=ch[i-1],q=ch[i],dx=q.x-p.x,dy=q.y-p.y,d=Math.hypot(dx,dy)||1;
q.x=p.x+dx/d*len[i];q.y=p.y+dy/d*len[i];
}
}
const OL='#0e0e1a',k0=c=>c;
const CH=[
{b:'#3b3c5a',l:'#5d6190',d:'#23243b',n:'#161a48',i:'#ffd21f',ih:'#fff3a0',s:'#f7f7fd',ss:'#c4c8e4'},
{b:'#453a63',l:'#685c92',d:'#2b2244',n:'#1c1648',i:'#9a63ff',ih:'#dcc6ff',s:'#f2edff',ss:'#c8bee8'}
];
const ez=(a,b,k)=>Array.isArray(a)?a.map((v,i)=>v+(b[i]-v)*k):a+(b-a)*k;
const TB=[[-3,-29],[-8,-26],[-14,-23],[-19,-21],[-23,-24],[-23,-30],[-19,-33],[-16,-31]];
const SB=[[-5,-41],[-8,-39],[-11,-37],[-13,-34]];
const lens=a=>a.map((q,i)=>i?Math.hypot(q[0]-a[i-1][0],q[1]-a[i-1][1]):0);
const TL=lens(TB),SL=lens(SB);
const mk=(a,x,y)=>a.map(q=>({x:x+q[0],y:y+q[1],ox:x+q[0],oy:y+q[1]}));
const F={x:0,y:0,vx:0,vy:0,d:1,s:'idle',t:0,ch:0,air:false,ls:0,cb:0,fr:0,ph:0,o:null,ps:'',ct:0,tip:[0,0],acc:0,px:0,tl:null,sc:null};
const FXL=[],JV=[];
const CM={on:0,k:'',t:0};
function cmSet(o){CM.on=1;CM.k=o.k;CM.t=o.t||0;p.x=o.x;p.y=o.y;p.f=o.f;p.vx=0;p.vy=0;p.on=o.y>=GY-1?1:0;p.sh=0;if(o.us!=null)p.us=o.us;p.at=-1;p.sk1=-1;p.s3=-1}
function cmEnd(){if(!CM.on)return;CM.on=0;p.y=GY;p.vy=0;p.vx=0;p.on=1}
function cmGhost(x,y,d,c){const o=F.o;if(!o)return;g.save();g.translate(M.round(x),M.round(y+o.oy));g.scale(d,1);g.translate(o.ox,0);drawBody(F,o,c||true);g.restore()}
function cmSpear(x,y,a,s){const P=CH[F.ch];g.save();g.translate(x,y);g.scale(s,s);spear([0,0],a,c=>c==='#e9ecff'?'#fffbe0':c==='#8f98d8'?P.i:c);g.restore()}
function atkHit(){
const d=p.f,e=AE[p.vt],tp=F.tip;
A.push({x:p.x+d*24,y:p.y-38+(p.cb?3:-3),vx:d*1100,vy:0,tr:[],st:0,l:0,c:.7,an:d>0?0:PI,dm:30*e.d*gDm()*gUd(),pr:2+e.pr,hit:[],ev:p.vt,sp:2,lf:.085});
ring(tp[0],tp[1],e.c,16);
for(let i=0;i<7;i++)sp(3,tp[0],tp[1],d*rnd(80,260),rnd(-120,80),rnd(.15,.3),1.8,e.c,400,2);
FXL.push({k:'stk',x:tp[0]-d*30,y:tp[1],w:d*36,l:.15,m:.15});
shake=M.max(shake,1.5);
}
function dashHit(){
const d=p.f,e=AE[p.vt];
A.push({x:p.x+d*20,y:p.y-38,vx:d*700,vy:0,tr:[],st:0,l:0,c:.9,an:d>0?0:PI,dm:42*e.d*gDm()*gUd(),pr:99,hit:[],ev:p.vt,sp:2,lf:.2});
ring(p.x,p.y-30,e.c,26);shake=M.max(shake,3);
}
function spAtk(){p.at=0;p.atH=0;p.cd=.42;p.cb^=1;p.vx=p.f*200}
function spSkill(){p.kc=SKC;p.at=-1;p.sk1=0;p.skH=0;p.skE=0;p.cd=.5;p.dr=0;p.ch=0}
function spStep(){
const d=F;
d.x=p.x;d.y=p.y;d.vx=p.vx*1.7/190;d.vy=p.vy*5.4/560;d.d=p.f;d.air=!p.on;d.ch=p.vt&1;d.cb=p.cb;d.fr++;
let s='idle',t=0;
if(p.dead){s='die';t=p.dead*60}
else if(CM.on){s='combo';t=CM.t*60}
else if(p.sk1>=0){s='skill1';t=p.sk1*60}
else if(p.s3>=0){s='skill1';t=p.s3*60}
else if(p.at>=0){s='attack';t=p.at*60}
else if(p.ut>0&&p.on&&M.abs(p.vx)<67){s='skill2';t=M.min(47,(UD-p.ut)*60)}
else if(p.sh>.5&&p.on)s='shield';
else if(!p.on)s='jump';
else if(M.abs(p.vx)>67)s='run';
if(s!==d.ps){d.ps=s;d.ct=0}else d.ct++;
d.s=s;d.ck=CM.k;d.t=(s==='attack'||s==='skill1'||s==='skill2'||s==='die'||s==='combo')?t:d.ct;
d.ph+=M.abs(d.vx)*.104*.65;
if(s==='skill1'&&p.sk1>=.2&&p.sk1<.37)FXL.push({k:'zig',x0:d.px,x1:p.x,y:p.y-30+M.round((M.random()-.5)*10),s:M.random()*99,l:.2,m:.2});
d.px=p.x;
const kk=s==='run'&&d.ct>5?.85:.35,tg=pose(d);
if(!d.o)d.o=tg;else{for(const k in tg)d.o[k]=ez(d.o[k],tg[k],kk);d.o.e=tg.e}
const oo=d.o,LT=lt(oo),tp=LT(-2,-29+oo.b),sq=LT(-5+oo.ln*.5,-41+oo.b*.8);
chain(d.tl,d.x+d.d*tp[0],d.y+oo.oy+tp[1],TL,TB.map((q,i)=>{const r=LT(q[0],q[1]+oo.b);return[d.x+d.d*r[0],d.y+oo.oy+r[1]+M.sin(d.fr*.07-i*.8)*i*.35]}),.12,.02,.9);
chain(d.sc,d.x+d.d*sq[0],d.y+oo.oy+sq[1],SL,SB.map(q=>{const r=LT(q[0],q[1]);return[d.x+d.d*r[0],d.y+oo.oy+r[1]]}),.04,.08,.93);
}
function spUpd(dt){
const d=F;
if(!d.tl||M.abs(p.x-d.px)>260){d.tl=mk(TB,p.x,p.y);d.sc=mk(SB,p.x,p.y);d.px=p.x;d.o=null}
if(inMenu||p.dead){p.at=-1;p.sk1=-1;p.s3=-1}
if(inMenu){p.k3=0;JV.length=0}
if(p.k3>0)p.k3=M.max(0,p.k3-dt);
const e=AE[p.vt];
if(p.at>=0){p.at+=dt;if(!p.atH&&p.at>=.133){p.atH=1;atkHit()}if(p.at>=.37)p.at=-1}
if(p.sk1>=0){
p.sk1+=dt;
if(p.sk1<.2&&M.random()<.5)sp(1,d.tip[0],d.tip[1],0,0,.15,10,e.k);
if(!p.skH&&p.sk1>=.2){p.skH=1;dashHit()}
if(!p.skE&&p.sk1>=.37){p.skE=1;ring(d.tip[0],d.tip[1],e.c,34);for(let i=0;i<12;i++)sp(3,d.tip[0],d.tip[1],rnd(-260,260),rnd(-200,120),rnd(.2,.4),2,e.c,400,2);shake=M.max(shake,4)}
if(p.sk1>=.67)p.sk1=-1;
}
if(p.s3>=0){
p.s3+=dt;
if(!p.s3H&&p.s3>=.2){p.s3H=1;jThrow()}
if(p.s3>=.55)p.s3=-1;
}
for(let i=JV.length-1;i>=0;i--){
const j=JV[i];
j.l+=dt;j.x+=j.vx*dt;
if(M.random()<.8)sp(1,j.x-j.d*14,j.y,rnd(-10,10),rnd(-10,10),.2,10,e.k);
if(M.random()<.5)sp(3,j.x-j.d*10,j.y,rnd(-60,60),rnd(-80,80),rnd(.15,.3),1.6,e.c,200,2);
for(const q of E){
if(q.dd||j.hit.includes(q))continue;
if(M.abs(j.x-q.x)<18*q.sz+8&&j.y>q.y-70*q.sz&&j.y<q.y+6){
j.hit.push(q);hurtE(q,j.dm,j.d);jBolt(q.x);jChain(q,j);
}
}
if(j.l>=.55){jStrike(j.x,j.dm*1.4);JV.splice(i,1)}
}
for(let i=FXL.length-1;i>=0;i--)if((FXL[i].l-=dt)<=0)FXL.splice(i,1);
d.acc+=dt;
let n=0;
while(d.acc>=1/60&&n<3){d.acc-=1/60;n++;spStep()}
if(d.acc>1/60)d.acc=0;
}
function spDraw(){
const d=F;
if(!d.o)return;
const P=CH[d.ch];
g.save();
g.translate(M.round(p.x),M.round(p.y+d.o.oy));
g.scale(d.d,1);
g.translate(d.o.ox,0);
drawBody(d,d.o,false);
g.restore();
if(d.s==='shield')drawBarrier(d);
if((p.sk1>=0&&p.sk1<.2)||d.s==='skill2'){g.save();g.globalAlpha=.35+.3*M.sin(d.fr*.6);CI(d.tip[0],d.tip[1],4,P.ih);g.restore()}
for(const q of FXL){
g.save();g.globalAlpha=q.l/q.m;
if(q.k==='stk'){const lx=M.min(q.x,q.x+q.w),ww=M.abs(q.w);R(lx,q.y-2,ww,1,P.i);R(lx,q.y+2,ww,1,P.i);R(lx,q.y-1,ww,3,'#fff')}
else if(q.k==='bolt'){let px=q.x,py=GY-330;for(let i=1;i<=11;i++){const ny=GY-330+i*30,nx=q.x+(i<11?M.round(M.sin(q.s+i*2.1)*14):0);PL([px,py-1],[nx,ny-1],P.i);PL([px+1,py],[nx+1,ny],P.i);PL([px,py],[nx,ny],'#fff');px=nx;py=ny}}
else if(q.k==='mk'){g.globalAlpha=(.4+.4*M.sin(d.fr*.7))*q.l/q.m;for(let i=-12;i<=12;i+=4)R(q.x+i,GY+1,2,1,P.i);R(q.x-9,GY+3,18,1,P.i)}
else{const n=M.max(2,M.round(M.abs(q.x1-q.x0)/4));let px=q.x0,py=q.y;for(let i=1;i<=n;i++){const nx=q.x0+(q.x1-q.x0)*i/n,ny=q.y+(i<n?M.round(M.sin(q.s+i*2.3)*6):0);PL([px,py-1],[nx,ny-1],P.i);PL([px,py+1],[nx,ny+1],P.i);PL([px,py],[nx,ny],'#fff');px=nx;py=ny}}
g.restore();
}
for(const j of JV){
g.save();
for(let n=1;n<=4;n++){g.globalAlpha=.5-n*.1;R(M.round(j.x-j.d*(16+n*9))-3,M.round(j.y)+(n&1?-1:1),6,2,P.i)}
g.globalAlpha=1;
spear([M.round(j.x),M.round(j.y)],j.d>0?0:PI,c=>c==='#e9ecff'?'#fffbe0':c==='#8f98d8'?P.i:c);
g.restore();
}
}
function spShaft(){spear([-35,0],0,k0)}
function jBolt(x){
const e=AE[p.vt];
FXL.push({k:'bolt',x,l:.3,m:.3,s:rnd(0,99)});
ring(x,GY-4,e.c,60);
for(let i=0;i<6;i++)sp(3,x,GY-6,rnd(-160,160),rnd(-260,-40),rnd(.2,.4),2,e.c,500,2);
}
function jChain(q,j){
const e=AE[p.vt],o=E.filter(w=>!w.dd&&w!==q&&!j.hit.includes(w)&&M.abs(w.x-q.x)<280).sort((a,b)=>M.abs(a.x-q.x)-M.abs(b.x-q.x)).slice(0,2);
for(const w of o){
hurtE(w,j.dm*.5,w.x<q.x?-1:1);
FXL.push({k:'zig',x0:q.x,x1:w.x,y:GY-34,s:rnd(0,99),l:.22,m:.22});
ring(w.x,w.y-30*w.sz,e.c,26);
}
}
function jStrike(x,dm){
const e=AE[p.vt];
FXL.push({k:'bolt',x,l:.34,m:.34,s:rnd(0,99)});
ring(x,GY-4,e.c,130);ring(x,GY-4,'255,255,255',76);
sp(1,x,GY-40,0,0,.3,120,e.k);
for(let i=0;i<16;i++)sp(3,x,GY-6,rnd(-280,280),rnd(-340,-60),rnd(.25,.5),2,e.c,500,2);
dust(x,GY,6,90);shake=M.max(shake,5);
for(const q of E){if(q.dd)continue;if(M.abs(q.x-x)<110+14*q.sz)hurtE(q,dm,q.x<x?-1:1)}
}
function jThrow(){
const d=p.f,e=AE[p.vt],t=F.tip;
JV.push({x:t[0],y:t[1],d,vx:d*1500,l:0,hit:[],dm:80*e.d*gDm()*gUd()});
ring(t[0],t[1],e.c,30);ring(t[0],t[1],'255,255,255',16);
sp(1,t[0],t[1],0,0,.2,60,e.k);
for(let i=0;i<10;i++)sp(3,t[0],t[1],d*rnd(120,420),rnd(-160,160),rnd(.15,.3),2,e.c,300,2);
shake=M.max(shake,3);
}
function spSk3(){
if(p.dead||p.k3>0||p.s3>=0||p.at>=0||p.sk1>=0||p.ut>0)return;
p.k3=SK3;p.s3=0;p.s3H=0;p.cd=.6;p.dr=0;p.ch=0;
}
p.at=-1;p.sk1=-1;p.atH=0;p.skH=0;p.skE=0;p.cb=0;p.sF=0;p.s3=-1;p.s3H=0;p.k3=0;


function spUlt(){
const e=AE[p.vt];
p.uc=0;p.ut=UD;p.us=0;p.dr=0;p.ch=0;p.cd=.4;shake=8;
ring(p.x,p.y-30,e.c,80);ring(p.x,GY-4,e.c,160);
for(let i=0;i<16;i++){const b=rnd(0,TAU),v=rnd(120,320);sp(3,p.x,p.y-30,M.cos(b)*v,M.sin(b)*v-120,rnd(.4,.8),2,e.c,500,2)}
ban('Skill 2: Hujan Tombak');
}
function spRain(dt){
const e=AE[p.vt];
p.us-=dt;
while(p.us<=0){
p.us+=.1;
const x=rnd(cam-20,cam+VW+20);
A.push({x,y:-140,vx:0,vy:1000,tr:[],st:0,l:0,c:.9,an:PI/2,dm:75*e.d*gDm()*gUd(),pr:3,hit:[],ev:p.vt,ul:1,sp:1});
FXL.push({k:'mk',x,l:.5,m:.5});
}
}
function spFall(a){
const P=CH[a.ev&1],fade=a.st?M.min(1,(4.2-a.l)/.8):1;
g.save();
if(!a.st){g.globalAlpha=.3*fade;R(a.x-1,a.y-170,3,150,P.ih);R(a.x-4,a.y-130,1,100,P.i);R(a.x+4,a.y-130,1,100,P.i)}
g.globalAlpha=fade;
g.translate(M.round(a.x),M.round(a.y));g.scale(1.4,1.4);
spear([0,-35],1.5708,k0);
g.restore();
}
const IC={
f:'<path d="M3 12h14M17 12l-4-3.5v7zM3 8h5M3 16h5"/>',
q:'<path d="M2 12h10M12 12l-3.5-3v6zM18 4l-3 7h5l-3 8"/>',
u:'<path d="M6 3v10M6 14l-2-3.5h4zM12 6v12M12 19l-2-3.5h4zM18 3v10M18 14l-2-3.5h4z"/>',
m:'<path d="M3 21 13 11M13 11l1.5-5.5 5.5 1.5-4 4zM18 14l-3 3.5h4L16 21"/>'
};
window.dxT={Ult:spUlt,Rain:spRain,Fall:spFall,Upd:spUpd,Draw:spDraw,Atk:spAtk,Skill:spSkill,Sk3:spSk3,Shaft:spShaft,IC,Cm:cmSet,CmEnd:cmEnd,Ghost:cmGhost,Tip:()=>F.tip,Spear:cmSpear};
})(p);
(function(P0){
const p=dxMk('B',P0);
function R(x,y,w,h,c){g.fillStyle=c;g.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h))}
function CI(x,y,r,c){g.fillStyle=c;x=Math.round(x);y=Math.round(y);for(let j=-r;j<=r;j++){const w=Math.floor(Math.sqrt(r*r-j*j+r*.5));g.fillRect(x-w,y+j,w*2+1,1)}}
function PG(p,c){
g.fillStyle=c;
let y0=1e9,y1=-1e9;
for(const q of p){y0=Math.min(y0,q[1]);y1=Math.max(y1,q[1])}
for(let y=Math.floor(y0);y<Math.ceil(y1);y++){
const m=y+.5,xs=[];
for(let i=0;i<p.length;i++){
const a=p[i],b=p[(i+1)%p.length];
if((a[1]<=m&&b[1]>m)||(b[1]<=m&&a[1]>m))xs.push(a[0]+(m-a[1])*(b[0]-a[0])/(b[1]-a[1]));
}
xs.sort((u,v)=>u-v);
for(let i=0;i+1<xs.length;i+=2){const x0=Math.round(xs[i]),x1=Math.round(xs[i+1]);if(x1>x0)g.fillRect(x0,y,x1-x0,1)}
}
}
function SH(p,c,o){
for(const d of [[-1,0],[1,0],[0,-1],[0,1]])PG(p.map(q=>[q[0]+d[0],q[1]+d[1]]),o);
PG(p,c);
}
function PL(a,b,c){
g.fillStyle=c;
const n=Math.max(Math.abs(Math.round(b[0])-Math.round(a[0])),Math.abs(Math.round(b[1])-Math.round(a[1])))||1;
for(let i=0;i<=n;i++)g.fillRect(Math.round(a[0]+(b[0]-a[0])*i/n),Math.round(a[1]+(b[1]-a[1])*i/n),1,1);
}
let RU=null;
function rocket(g,a,u0,len,k,fl){
const co=Math.cos(a),si=Math.sin(a),p=(u,v)=>[g[0]+co*u-si*v,g[1]+si*u+co*v],e=u0+len,n=e-7;
if(fl)PG([p(u0,-2),p(u0-9,0),p(u0,2)],'#ff9a2e');
SH([p(u0,-2),p(n,-2),p(n,2),p(u0,2)],k('#d9deef'),OL);
SH([p(n,-2),p(e,0),p(n,2)],k('#d83a4a'),OL);
SH([p(u0,-2),p(u0-3,-5),p(u0+5,-2)],k('#8f98d8'),OL);
SH([p(u0,2),p(u0-3,5),p(u0+5,2)],k('#8f98d8'),OL);
}
function bazooka(g,a,k){
const co=Math.cos(a),si=Math.sin(a),ac=k(CH[0].i);
const p=(u,v)=>[g[0]+co*u-si*v,g[1]+si*u+co*v];
if(RU!==null)rocket(p(0,-4),a,RU,34,k,0);
SH([p(-9,0),p(-6,0),p(-7,6),p(-10,6)],k('#2e3045'),OL);
SH([p(-2,0),p(2,0),p(2,5),p(-2,5)],k('#2e3045'),OL);
SH([p(-16,-8),p(20,-8),p(20,0),p(-16,0)],k('#6b7a4a'),OL);
SH([p(-16,-9),p(-20,-10),p(-20,1),p(-16,1)],k('#3a4230'),OL);
SH([p(20,-9),p(23,-10),p(23,1),p(20,1)],k('#3a4230'),OL);
PG([p(-6,-8),p(-3,-8),p(-3,0),p(-6,0)],ac);
PG([p(11,-8),p(14,-8),p(14,0),p(11,0)],ac);
SH([p(2,-12),p(8,-12),p(8,-8),p(2,-8)],k('#2b2d44'),OL);
PG([p(5,-11),p(7,-11),p(7,-9),p(5,-9)],ac);
PL(p(-14,-6.5),p(8,-6.5),k('#9aa882'));
return p(24,-4);
}
function missile(x,y){
SH([[x-2,y-16],[x+3,y-16],[x+3,y-3],[x+1,y+1],[x-2,y-3]],'#e9ecff',OL);
PG([[x-2,y-3],[x+3,y-3],[x+1,y+1]],'#d83a4a');
SH([[x-2,y-16],[x-5,y-20],[x-5,y-11],[x-2,y-9]],'#8f98d8',OL);
SH([[x+3,y-16],[x+6,y-20],[x+6,y-11],[x+3,y-9]],'#8f98d8',OL);
R(x-1,y-26,3,10,'#ff9a2e');R(x,y-24,1,8,'#ffe27a');
}
function IK(x,y,tx,ty,l1,l2,s){
let dx=tx-x,dy=ty-y,d=Math.hypot(dx,dy)||.01;
d=Math.max(Math.abs(l1-l2)+.01,Math.min(d,l1+l2-.01));
const a=Math.atan2(dy,dx),c=Math.acos((l1*l1+d*d-l2*l2)/(2*l1*d))*s;
return[[x,y],[x+Math.cos(a+c)*l1,y+Math.sin(a+c)*l1],[x+Math.cos(a)*d,y+Math.sin(a)*d]];
}
function LB(p,r,c){
const s=[];
for(let i=0;i<p.length-1;i++){
const n=Math.ceil(Math.hypot(p[i+1][0]-p[i][0],p[i+1][1]-p[i][1])*1.5)+1;
for(let j=0;j<n;j++){const t=j/n;s.push([p[i][0]+(p[i+1][0]-p[i][0])*t,p[i][1]+(p[i+1][1]-p[i][1])*t,r[i]+(r[i+1]-r[i])*t,i])}
}
const e=p.length-1;
s.push([p[e][0],p[e][1],r[e],Math.max(0,e-1)]);
for(const q of s)CI(q[0],q[1],Math.round(q[2])+1,OL);
for(const q of s)CI(q[0],q[1],Math.round(q[2]),c[Math.min(q[3],c.length-1)]);
}
function shoe(a,g,c){const co=Math.cos(g),si=Math.sin(g);SH([[-4,-1],[3,-1],[10,3],[-4,3]].map(q=>[Math.round(a[0]+q[0]*co-q[1]*si),Math.round(a[1]+q[0]*si+q[1]*co)]),c,OL)}
function lt(o){const hy=-30+o.b,co=Math.cos(o.lean),si=Math.sin(o.lean);return(x,y)=>{const dy=y-hy;return[x*co-dy*si,x*si+dy*co+hy]}}
function pose(f){
const t=f.t,s=f.s,T=f.fr;
const o={b:0,hx:0,hy:0,ln:0,a:[3,18],c:[-3,18],lb:[-6,-3],lf:[6,-3],gb:0,gf:0,lean:0,ox:0,oy:0,e:0,sa:-.25,cg:1,ro:8};
const mx=(p,q,w)=>p.map((v,i)=>v+(q[i]-v)*w);
const sm=(x,y,w)=>x+(y-x)*w;
if(s==='idle'){
const w=Math.sin(T*.06);o.b=w*.5+.5;o.a=[11,5+w*.5];o.sa=-.25;
}
else if(s==='run'){
const ph=f.ph,L=27,A=.6,c0=-.1,Lf=9,mv=Math.min(1,Math.abs(f.vx)/1.7);
const g=(p,x)=>{const th=c0+A*Math.sin(p),sw=Math.max(0,Math.cos(p)),len=L-Lf*sw;return{th:th,sw:sw,dx:x+len*Math.sin(th),dy:len*Math.cos(th)}};
const n=g(ph,3),r=g(ph+Math.PI,-3),h=Math.max(n.dy,r.dy)+3;
const gp=q=>(q.th<0?-1.1*q.th:-.35*q.th)+.3*q.sw;
const hop=3.5*Math.pow(Math.max(0,-Math.cos(2*ph)),1.5)*mv;
o.b=30-h-hop;o.lf=[n.dx,n.dy-h-hop];o.lb=[r.dx,r.dy-h-hop];o.gf=gp(n);o.gb=gp(r);
o.lean=.3*mv;
o.a=[12,5+1.5*Math.sin(2*ph)];o.sa=-.2;
}
else if(s==='jump'){
const u=Math.max(0,Math.min(1,(f.vy+5.4)/10.8)),mv=Math.min(1,Math.abs(f.vx)/1.7);
const J0={lf:[4,-4],lb:[-4,-5],gf:1,gb:1,a:[8,-14],c:[-8,-14]},J1={lf:[14,-5.5],lb:[-12,-6],gf:.5,gb:.7,a:[13,-8],c:[-12,-9]},J2={lf:[9,-3],lb:[-8,-3],gf:.1,gb:.1,a:[14,5],c:[-14,5]};
const p=u<.5?J0:J1,q=u<.5?J1:J2,w=u<.5?u*2:(u-.5)*2;
o.lf=mx(p.lf,q.lf,w);o.lb=mx(p.lb,q.lb,w);o.gf=sm(p.gf,q.gf,w);o.gb=sm(p.gb,q.gb,w);o.a=mx(p.a,q.a,w);o.c=mx(p.c,q.c,w);
o.lean=.12*mv;o.hy=-(1-u);o.a=[12,4];o.sa=-.25+u*.2;
}
else if(s==='shield'){
o.b=2;o.lean=t<6?.2:.12;o.lf=[10,-3];o.lb=[-8,-3];o.a=[14,2];o.sa=-.1;o.cg=1;
}
else if(s==='attack'){
if(t<6){o.b=2;o.lean=.04;o.lf=[9,-3];o.lb=[-10,-3];o.a=[14,3];o.sa=-.02}
else if(t<13){o.b=3;o.lean=-.12;o.lf=[10,-3];o.lb=[-12,-3];o.a=[11,3];o.sa=-.1}
else if(t<19){o.b=2;o.lean=0;o.lf=[9,-3];o.lb=[-10,-3];o.a=[13,4];o.sa=-.05}
else{o.b=1;o.lean=.04;o.lf=[8,-3];o.lb=[-8,-3];o.a=[12,5];o.sa=-.25}
}
else if(s==='skill1'){
if(t<12){o.b=4;o.lean=.06;o.lf=[11,-3];o.lb=[-11,-3];o.a=[14,3];o.sa=-.02}
else if(t<24){o.b=3;o.lean=-.3;o.lf=[12,-3];o.lb=[-14,-3];o.a=[9,3];o.sa=-.18}
else{o.lean=.03;o.lf=[8,-3];o.lb=[-8,-3];o.a=[12,5];o.sa=-.25}
}
else if(s==='skill2'){
if(t<20){const w=t/20;o.b=3.5-2*w;o.lean=-.05;o.lf=[9,-3];o.lb=[-9,-3];o.a=[5,2-14*w];o.sa=-1.4-w*.15}
else if(t<30){o.b=3;o.lean=-.2;o.lf=[9,-3];o.lb=[-11,-3];o.a=[3,-12];o.sa=-1.35}
else if(t<48){o.b=1;o.lean=.05;o.lf=[9,-3];o.lb=[-9,-3];o.a=[13,0];o.sa=-.3}
else{o.lf=[7,-3];o.lb=[-7,-3];o.a=[12,5];o.sa=-.5}
}
else if(s==='reload'){
o.cg=1;o.b=2;o.lf=[8,-3];o.lb=[-8,-3];
if(t<8){o.a=[10,4];o.sa=.25;o.lean=.05}
else if(t<16){o.a=[10,4];o.sa=.25;o.lean=-.05;o.ro=8+26*(t-8)/8}
else if(t<40){o.a=[10,4];o.sa=.25;o.lean=.02;o.ro=34-33*(t-16)/24}
else if(t<48){o.a=[10,4];o.sa=.25;o.lean=.04;o.ro=1}
else{o.a=[12,5];o.sa=-.25;o.lean=.04}
}
else if(s==='ult'){
o.cg=1;o.lf=[10,-3];o.lb=[-10,-3];
if(t<36){const w=t/36;o.b=3.5-2*w;o.lean=-.04;o.a=[5,2-14*w];o.sa=-1.4-w*.15}
else if(t<50){o.b=4;o.lean=-.25;o.a=[3,-12];o.sa=-1.35}
else{o.b=1;o.lean=.03;o.a=[6,-8];o.sa=-1.1}
}
else if(s==='combo'){
const k=f.ck;
if(k==='ready'){o.b=4;o.lean=.06;o.lf=[11,-3];o.lb=[-11,-3];o.a=[14,3];o.sa=-.02}
else if(k==='fire'){o.b=3;o.lean=-.3;o.lf=[12,-3];o.lb=[-14,-3];o.a=[9,3];o.sa=-.18}
else if(k==='aimup'){o.b=4;o.lean=-.22;o.lf=[11,-3];o.lb=[-12,-3];o.a=[4,-12];o.sa=-1.1}
else if(k==='fireup'){o.b=3;o.lean=-.42;o.lf=[12,-3];o.lb=[-15,-3];o.a=[2,-10];o.sa=-1.18}
else{o.b=1;o.lean=.03;o.lf=[8,-3];o.lb=[-8,-3];o.a=[12,5];o.sa=-.25}
}
else if(s==='die'){
o.e=2;o.sa=1.1;o.cg=0;
if(t<8){o.ln=-4;o.hx=-2;o.a=[4,8];o.c=[-8,12]}
else if(t<20){o.b=8;o.hy=3;o.ln=-4;o.a=[6,12];o.c=[-8,12];o.lb=[-8,-3];o.lf=[9,-3]}
else{o.a=[8,14];o.c=[-8,14];o.lb=[-8,-3];o.lf=[9,-3]}
}
if(f.ls>0&&!f.air&&s==='idle'){o.b=Math.max(o.b,3);o.lb=[-9,-3];o.lf=[9,-3];o.lean=.1}
return o;
}

function eye(x,y,m,P,k,e,bl){
const w=k('#ffffff');
if(bl){R(x,y+1,6,1,k(P.l));return}
if(m){R(x+1,y,5,1,w);R(x,y+1,6,1,w);R(x,y+2,5,1,w)}else{R(x,y,5,1,w);R(x,y+1,6,1,w);R(x+1,y+2,5,1,w)}
R(x+2,y,3,3,e===1?'#ffffff':k('#9a63ff'));
R(x+3,y,1,3,e===1?'#dcc6ff':'#2a1a05');
    if(e!==1)R(x+2,y,1,1,k('#dcc6ff'));
}
function drawBody(f,o,fl){
const P=CH[f.ch],k=c=>fl?(fl===true?'#c9d1ff':fl):c,dead=o.e===2,baz=f.type==='baz';
const b=o.b,bb=b*.8,u=o.ln*.5,ru=Math.round(u),rb=Math.round(bb);
const T=lt(o);
const hp=T(o.hx+o.ln*.8,-49+o.hy+bb);
const hx=Math.round(hp[0]),hy=Math.round(hp[1]+49);
const cb=k(P.b),cl=k(P.l),cd=k(P.d),cn=k(P.n),cs=k(P.s),css=k(P.ss);
const cv=q=>[(q.x-f.x)*f.d-o.ox,q.y-f.y-o.oy];
const hipY=-30+b,ch=T(u,-40+bb);
const lg=(x,a)=>[[x,hipY],[(x+a[0])/2,(hipY+a[1])/2],a];
LB(f.tl.map(cv),[1.4,1.4,1.4,1.4,1,1,1,0],[cb,cb,cb,cb,cb,cb,cl]);
LB(lg(-3,o.lb),[2,2,3],[cd,cn]);shoe(o.lb,o.gb,cl);
const sb=T(u-4,-39+bb),sf=T(u+4,-39+bb);
const fa=IK(sf[0],sf[1],sf[0]+o.a[0],sf[1]+o.a[1],9,9,1),gp=fa[2],ca=Math.cos(o.sa),sa=Math.sin(o.sa);
const ro=baz?o.ro:8;
const fr=[sb[0]+o.c[0],sb[1]+o.c[1]],rt=[fr[0]+(gp[0]-ca*ro-fr[0])*o.cg,fr[1]+(gp[1]-sa*ro-fr[1])*o.cg];
LB(IK(sb[0],sb[1],rt[0],rt[1],9,9,1),[2,1,1],[cd,cd]);
LB(f.sc.map(cv),[1.4,1.4,1,0],[cs,cs,css]);
LB([[0,hipY],ch],[2,3],[cb]);
LB([T(-1,hipY-1),T(u-1,-38+bb)],[0,0],[cl]);
LB(lg(3,o.lf),[2,2,3],[cb,cn]);shoe(o.lf,o.gf,cl);
SH([[hx-8,-52+hy],[hx-7,-61+hy],[hx-1,-55+hy]],cb,OL);
SH([[hx+1,-55+hy],[hx+8,-62+hy],[hx+8,-50+hy]],cb,OL);
PG([[hx-7,-55+hy],[hx-7,-59+hy],[hx-4,-55+hy]],cl);
PG([[hx+5,-55+hy],[hx+7,-59+hy],[hx+7,-53+hy]],cl);
SH([[hx-7,-52+hy],[hx-5,-55+hy],[hx+5,-55+hy],[hx+7,-52+hy],[hx+8,-48+hy],[hx+7,-44+hy],[hx+3,-43+hy],[hx-3,-43+hy],[hx-7,-44+hy],[hx-8,-48+hy]],cb,OL);
R(hx-4,-54+hy,7,1,cl);
R(hx-7,-51+hy,1,3,cl);
if(dead){
const xm=(x,y)=>{R(x,y,1,1,'#fff');R(x+2,y,1,1,'#fff');R(x+1,y+1,1,1,'#fff');R(x,y+2,1,1,'#fff');R(x+2,y+2,1,1,'#fff')};
xm(hx-4,-50+hy);xm(hx+4,-50+hy);
}else{
const bl=!inMenu&&f.fr%210<5;
eye(hx-5,-50+hy,0,P,k,o.e,bl);
eye(hx+2,-50+hy,1,P,k,o.e,bl);
}
let tp;
if(baz){
RU=f.s==='reload'?(f.t<16?null:f.t<48?-o.ro-5:-6):(f.am>0?-6:null);
tp=bazooka(gp,o.sa,k);
}
f.tip=[Math.round(f.x)+f.d*(tp[0]+o.ox),f.y+o.oy+tp[1]];
if(baz&&o.cg>.5){CI(rt[0],rt[1],2,OL);CI(rt[0],rt[1],1,cl)}
LB(fa,[2,1,1],[cb,cl]);
CI(gp[0],gp[1],2,OL);CI(gp[0],gp[1],1,cl);
LB([T(-6+ru,-39+rb),T(6+ru,-39+rb)],[2,2],[css]);
LB([T(-7+ru,-43+rb),T(7+ru,-43+rb)],[2,2],[cs]);
PL(T(-6+ru,-45+rb),T(-1+ru,-45+rb),'#fff');
PL(T(-5+ru,-41+rb),T(5+ru,-41+rb),css);
}

function drawBarrier(f){
const cx=f.x+f.d*2,cy=f.y-28,r=30+Math.round(Math.sin(f.fr*.2)),gk=Math.min(1,f.t/6);
g.save();
g.globalAlpha=.16*gk;CI(cx,cy,r,'#6f9cff');
g.globalAlpha=.95*gk;
for(let i=0;i<60;i++){if(i%6>3)continue;const a=i/60*6.283+f.fr*.04;R(cx+Math.cos(a)*r,cy+Math.sin(a)*r,2,2,i%12<6?'#9db8ff':'#5b86f0')}
g.globalAlpha=.7*gk;
R(cx-12,cy-14,6,1,'#7fa4ff');R(cx-13,cy-13,1,4,'#7fa4ff');R(cx+6,cy+11,5,1,'#7fa4ff');
g.restore();
}
function chain(ch,ax,ay,len,rest,k,g,dr){
ch[0].x=ax;ch[0].y=ay;ch[0].ox=ax;ch[0].oy=ay;
for(let i=1;i<ch.length;i++){
const q=ch[i],vx=(q.x-q.ox)*dr,vy=(q.y-q.oy)*dr;
q.ox=q.x;q.oy=q.y;
q.x+=vx+(rest[i][0]-q.x)*k;
q.y+=vy+g+(rest[i][1]-q.y)*k;
}
for(let n=0;n<3;n++)for(let i=1;i<ch.length;i++){
const p=ch[i-1],q=ch[i],dx=q.x-p.x,dy=q.y-p.y,d=Math.hypot(dx,dy)||1;
q.x=p.x+dx/d*len[i];q.y=p.y+dy/d*len[i];
}
}
const OL='#0e0e1a',k0=c=>c;
const CH=[
{b:'#3b3c5a',l:'#5d6190',d:'#23243b',n:'#161a48',i:'#ffd21f',ih:'#fff3a0',s:'#f7f7fd',ss:'#c4c8e4'},
{b:'#453a63',l:'#685c92',d:'#2b2244',n:'#1c1648',i:'#9a63ff',ih:'#dcc6ff',s:'#f2edff',ss:'#c8bee8'}
];
const ez=(a,b,k)=>Array.isArray(a)?a.map((v,i)=>v+(b[i]-v)*k):a+(b-a)*k;
const TB=[[-3,-29],[-8,-26],[-14,-23],[-19,-21],[-23,-24],[-23,-30],[-19,-33],[-16,-31]];
const SB=[[-5,-41],[-8,-39],[-11,-37],[-13,-34]];
const lens=a=>a.map((q,i)=>i?Math.hypot(q[0]-a[i-1][0],q[1]-a[i-1][1]):0);
const TL=lens(TB),SL=lens(SB);
const mk=(a,x,y)=>a.map(q=>({x:x+q[0],y:y+q[1],ox:x+q[0],oy:y+q[1]}));
const F={x:0,y:0,vx:0,vy:0,d:1,s:'idle',t:0,ch:0,air:false,ls:0,cb:0,fr:0,ph:0,o:null,ps:'',ct:0,tip:[0,0],acc:0,px:0,tl:null,sc:null,type:'baz',am:3};
const RK=[],MS=[],CK=[],BM=[];
const FXL=[];
const CM={on:0,k:'',t:0};
function cmSet(o){CM.on=1;CM.k=o.k;CM.t=o.t||0;p.x=o.x;p.y=o.y;p.f=o.f;p.vx=0;p.vy=0;p.on=o.y>=GY-1?1:0;p.sh=0;if(o.us!=null)p.us=o.us;p.at=-1;p.sk1=-1;p.s3=-1;p.rl=-1}
function cmEnd(){if(!CM.on)return;CM.on=0;p.y=GY;p.vy=0;p.vx=0;p.on=1;p.rl=-1;F.am=3}
function cmGhost(x,y,d,c){const o=F.o;if(!o)return;g.save();g.translate(M.round(x),M.round(y+o.oy));g.scale(d,1);g.translate(o.ox,0);drawBody(F,o,c||true);g.restore()}
function cmRocket(x,y,a,l,s){g.save();g.translate(x,y);g.scale(s,s);rocket([0,0],a,-l/2,l,k0,1);g.restore()}
function bzRl(){if(p.dead||p.rl>=0||p.at>=0||p.sk1>=0||p.s3>=0||F.am>=3)return;p.rl=0;p.cd=.2}
function boom(x,y,s){
ring(x,y,'255,236,170',46*s);ring(x,y,'255,150,60',30*s);ring(x,GY,'214,185,138',58*s);
sp(1,x,y,0,0,.32,96*s,'f');sp(1,x,y,0,0,.18,52*s,'w');
for(let i=0;i<8+M.round(8*s);i++){const b=rnd(0,TAU),v=rnd(90,320)*s;sp(3,x,y,M.cos(b)*v,M.sin(b)*v-90,rnd(.25,.55),2,'255,200,90',500,2)}
dust(x,GY,6+M.round(4*s),90*s);
shake=M.max(shake,3+3*s);
}
function aoe(x,y,r,dm){
for(const e of E){if(e.dd)continue;const dx=e.x-x;if(M.abs(dx)<r+14*e.sz&&M.abs(e.y-30*e.sz-y)<r+40*e.sz)hurtE(e,dm,dx<0?-1:1)}
}
function fire(big){
const d=p.f,t=F.tip,e=AE[p.vt],bx=t[0]-d*36;
RK.push({x:t[0],y:t[1],vx:d*(big?640:760),vy:0,d,z:big?2:1,dm:(big?120:50)*e.d*gDm()*gUd(),r:big?95:55});
ring(t[0],t[1],'255,226,122',10+big*8);ring(bx,t[1],'255,226,122',12);
for(let i=0;i<10+big*8;i++){const b=rnd(-.5,.5);sp(3,t[0],t[1],d*M.cos(b)*rnd(90,320),M.sin(b)*rnd(90,320),rnd(.15,.3),2,'255,226,122',200,2)}
sp(1,t[0],t[1],0,0,.15,44+big*28,'w');sp(1,bx,t[1],0,0,.2,40+big*24,'f');
for(let i=0;i<4+big*3;i++)sp(0,bx,t[1]+rnd(-3,3),-d*rnd(40,150),rnd(-30,-5),rnd(.4,.7),rnd(3,6+big*4),'200,203,224',-10,1);
p.rv=-d*(big?220:90);shake=M.max(shake,2+big*3);
}
function spAtk(){if(p.at>=0||p.sk1>=0||p.rl>=0||p.s3>=0)return;if(F.am<=0){bzRl();return}p.at=0;p.atH=0;p.cd=.42;p.cb^=1}
function spSkill(){p.kc=SKC;p.at=-1;p.sk1=0;p.skH=0;p.skE=0;p.cd=.5;p.dr=0;p.ch=0;p.rl=-1}
function cThrow(){
const d=p.f,t=F.tip,e=AE[p.vt];
CK.push({x:t[0],y:t[1],vx:d*600,vy:-300,d,l:0,dm:62*e.d*gDm()*gUd()});
ring(t[0],t[1],'255,226,122',22);ring(t[0]-d*36,t[1],'255,226,122',12);
sp(1,t[0],t[1],0,0,.15,56,'w');sp(1,t[0]-d*36,t[1],0,0,.2,48,'f');
for(let i=0;i<12;i++){const b=rnd(-.5,.5);sp(3,t[0],t[1],d*M.cos(b)*rnd(90,320),M.sin(b)*rnd(90,320),rnd(.15,.3),2,'255,226,122',200,2)}
for(let i=0;i<5;i++)sp(0,t[0]-d*36,t[1]+rnd(-3,3),-d*rnd(40,150),rnd(-30,-5),rnd(.4,.7),rnd(3,7),'200,203,224',-10,1);
p.rv=-d*150;shake=M.max(shake,3);
}
function cSplit(c){
boom(c.x,c.y,.6);
for(let i=0;i<6;i++)BM.push({x:c.x,y:c.y,vx:c.vx*.3+(i-2.5)*95+rnd(-30,30),vy:rnd(-360,-120),l:0,dm:c.dm});
}
function spSk3(){
if(p.dead||p.k3>0||p.s3>=0||p.at>=0||p.sk1>=0||p.rl>=0||p.ut>0)return;
p.k3=SK3;p.s3=0;p.s3H=0;p.cd=.6;p.dr=0;p.ch=0;
}
function spStep(){
const d=F;
d.x=p.x;d.y=p.y;d.vx=p.vx*1.7/190;d.vy=p.vy*5.4/560;d.d=p.f;d.air=!p.on;d.ch=p.vt&1;d.cb=p.cb;d.fr++;
let s='idle',t=0;
if(p.dead){s='die';t=p.dead*60}
else if(CM.on){s='combo';t=CM.t*60}
else if(p.sk1>=0){s='skill1';t=p.sk1*60}
else if(p.s3>=0){s='skill1';t=p.s3*60}
else if(p.at>=0){s='attack';t=p.at*60}
else if(p.rl>=0){s='reload';t=p.rl*60}
else if(p.ut>0&&p.on&&M.abs(p.vx)<67){s='ult';t=(UD-p.ut)*60}
else if(p.sh>.5&&p.on)s='shield';
else if(!p.on)s='jump';
else if(M.abs(p.vx)>67)s='run';
if(s!==d.ps){d.ps=s;d.ct=0}else d.ct++;
d.s=s;d.ck=CM.k;d.t=(s==='attack'||s==='skill1'||s==='ult'||s==='reload'||s==='die'||s==='combo')?t:d.ct;
d.ph+=M.abs(d.vx)*.104*.65;
d.px=p.x;
const kk=s==='run'&&d.ct>5?.85:.35,tg=pose(d);
if(!d.o)d.o=tg;else{for(const k in tg)d.o[k]=ez(d.o[k],tg[k],kk);d.o.e=tg.e}
const oo=d.o,LT=lt(oo),tp=LT(-2,-29+oo.b),sq=LT(-5+oo.ln*.5,-41+oo.b*.8);
chain(d.tl,d.x+d.d*tp[0],d.y+oo.oy+tp[1],TL,TB.map((q,i)=>{const r=LT(q[0],q[1]+oo.b);return[d.x+d.d*r[0],d.y+oo.oy+r[1]+M.sin(d.fr*.07-i*.8)*i*.35]}),.12,.02,.9);
chain(d.sc,d.x+d.d*sq[0],d.y+oo.oy+sq[1],SL,SB.map(q=>{const r=LT(q[0],q[1]);return[d.x+d.d*r[0],d.y+oo.oy+r[1]]}),.04,.08,.93);
}
function spUpd(dt){
const d=F;
if(!d.tl||M.abs(p.x-d.px)>260){d.tl=mk(TB,p.x,p.y);d.sc=mk(SB,p.x,p.y);d.px=p.x;d.o=null}
if(p.dead)d.am=3;
if(inMenu||p.dead){p.at=-1;p.sk1=-1;p.rl=-1;p.s3=-1}
if(inMenu){RK.length=0;MS.length=0;CK.length=0;BM.length=0;p.k3=0}
if(p.k3>0)p.k3=M.max(0,p.k3-dt)
const e=AE[p.vt];
if(p.at>=0){p.at+=dt;if(!p.atH&&p.at>=.1){p.atH=1;fire(0);d.am--}if(p.at>=.37){p.at=-1;if(d.am<=0)bzRl()}}
if(p.sk1>=0){
p.sk1+=dt;
if(p.sk1<.2&&M.random()<.5)sp(1,d.tip[0],d.tip[1],0,0,.15,10,e.k);
if(!p.skH&&p.sk1>=.2){p.skH=1;fire(1)}
if(p.sk1>=.67)p.sk1=-1;
}
if(p.rl>=0){const q=p.rl;p.rl+=dt;if(q<.67&&p.rl>=.67){ring(d.tip[0]-d.d*24,d.tip[1],'255,226,122',10);shake=M.max(shake,1)}if(p.rl>=1.03){p.rl=-1;d.am=3}}
if(p.s3>=0){
p.s3+=dt;
if(!p.s3H&&p.s3>=.2){p.s3H=1;cThrow()}
if(p.s3>=.55)p.s3=-1;
}
for(let i=CK.length-1;i>=0;i--){
const c=CK[i];
c.l+=dt;c.vy+=900*dt;c.x+=c.vx*dt;c.y+=c.vy*dt;
sp(0,c.x-c.d*10,c.y,rnd(-8,8),rnd(-8,8),rnd(.3,.5),rnd(3,5),'200,203,224',-10,1);
if(M.random()<.5)sp(1,c.x-c.d*8,c.y,0,0,.12,16,'f');
let h=c.l>=.4||c.y>=GY-10;
if(!h)for(const q of E){if(!q.dd&&M.abs(c.x-q.x)<15*q.sz+8&&c.y>q.y-64*q.sz&&c.y<q.y+2){h=1;break}}
if(h){cSplit(c);CK.splice(i,1)}
}
for(let i=BM.length-1;i>=0;i--){
const b=BM[i];
b.l+=dt;b.vy+=1100*dt;b.x+=b.vx*dt;b.y+=b.vy*dt;
if(M.random()<.6)sp(1,b.x,b.y,0,0,.1,9,'f');
let h=b.y>=GY-6||b.l>1.4;
if(!h)for(const q of E){if(!q.dd&&b.l>.08&&M.abs(b.x-q.x)<14*q.sz+4&&b.y>q.y-64*q.sz&&b.y<q.y+2){h=1;break}}
if(h){const y=M.min(b.y,GY-8);boom(b.x,y,.8);aoe(b.x,y,62,b.dm);BM.splice(i,1)}
}
for(let i=RK.length-1;i>=0;i--){
const r=RK[i];r.vy+=110*dt;r.x+=r.vx*dt;r.y+=r.vy*dt;
sp(0,r.x-r.d*10,r.y,rnd(-8,8),rnd(-8,8),rnd(.3,.5),rnd(3,5)+r.z*2,'200,203,224',-10,1);
if(M.random()<.5)sp(1,r.x-r.d*8,r.y,0,0,.12,16*r.z,'f');
let h=r.y>=GY-6||M.abs(r.x-p.x)>1300;
if(!h)for(const q of E){if(!q.dd&&M.abs(r.x-q.x)<15*q.sz+5&&r.y>q.y-64*q.sz&&r.y<q.y+2){h=1;break}}
if(h){const y=M.min(r.y,GY-8);boom(r.x,y,r.z);aoe(r.x,y,r.r,r.dm);RK.splice(i,1)}
}
for(let i=MS.length-1;i>=0;i--){
const m=MS[i];m.y+=720*dt;
if(m.y>=GY-4){boom(m.x,GY-8,1.4);aoe(m.x,GY-8,80,m.dm);MS.splice(i,1)}
else if(M.random()<.5)sp(1,m.x,m.y-28,0,0,.18,18,'f');
}
for(let i=FXL.length-1;i>=0;i--)if((FXL[i].l-=dt)<=0)FXL.splice(i,1);
d.acc+=dt;
let n=0;
while(d.acc>=1/60&&n<3){d.acc-=1/60;n++;spStep()}
if(d.acc>1/60)d.acc=0;
}
function spDraw(){
const d=F;
if(!d.o)return;
const P=CH[d.ch],tp=d.tip;
g.save();
g.translate(M.round(p.x),M.round(p.y+d.o.oy));
g.scale(d.d,1);
g.translate(d.o.ox,0);
drawBody(d,d.o,false);
g.restore();
if(d.s==='shield')drawBarrier(d);
if(d.s==='ult'&&d.t<36){const q=d.t/36;g.save();g.globalAlpha=.4+.3*M.sin(d.fr*.6);CI(tp[0],tp[1],3+M.round(q*12),'#ffe27a');g.globalAlpha=.7;CI(tp[0],tp[1],1+M.round(q*5),'#fff');g.restore()}
if(d.s==='skill1'&&d.t<12){g.save();g.globalAlpha=.5+.4*M.sin(d.fr);const ex=d.d>0?cam+VW:cam;for(let x=tp[0];d.d>0?x<ex:x>ex;x+=d.d*4)R(x,tp[1],1,1,'#ff3b4a');g.globalAlpha=.35+.3*M.sin(d.fr*.6);CI(tp[0],tp[1],2+M.round(d.t/12*5),P.ih);g.restore()}
if(!p.dead)for(let i=0;i<3;i++)R(M.round(p.x)-7+i*5,M.round(p.y)-66,3,3,i<d.am?P.i:'#3a3d5a');
for(const q of FXL){g.save();g.globalAlpha=(.4+.4*M.sin(d.fr*.7))*q.l/q.m;for(let i=-12;i<=12;i+=4)R(q.x+i,GY+1,2,1,P.i);R(q.x-9,GY+3,18,1,P.i);g.restore()}
for(const r of RK){const ln=r.z>1?32:24;rocket([r.x,r.y],M.atan2(r.vy,r.vx),-ln/2,ln,k0,1)}
for(const m of MS)missile(m.x,m.y);
for(const c of CK)rocket([c.x,c.y],M.atan2(c.vy,c.vx),-14,28,k0,1);
for(const b of BM){CI(b.x,b.y,3,OL);CI(b.x,b.y,2,'#ff9a2e');CI(b.x,b.y,1,'#fff6c8')}
}
function spShaft(){}
p.at=-1;p.sk1=-1;p.rl=-1;p.atH=0;p.skH=0;p.skE=0;p.cb=0;p.sF=0;p.s3=-1;p.s3H=0;p.k3=0;
function spUlt(){
const e=AE[p.vt];
p.uc=0;p.ut=UD;p.us=.6;p.dr=0;p.ch=0;p.cd=.4;p.rl=-1;shake=8;
ring(p.x,p.y-30,e.c,80);ring(p.x,GY-4,e.c,160);
for(let i=0;i<16;i++){const b=rnd(0,TAU),v=rnd(120,320);sp(3,p.x,p.y-30,M.cos(b)*v,M.sin(b)*v-120,rnd(.4,.8),2,e.c,500,2)}
}
function spRain(dt){
const e=AE[p.vt];
p.us-=dt;
while(p.us<=0){
p.us+=.13;
const x=rnd(cam-20,cam+VW+20);
MS.push({x,y:-130,dm:75*e.d*gDm()*gUd()});
FXL.push({k:'mk',x,l:.9,m:.9});
}
}
function spFall(){}
const IC={
f:'<path d="M3 12h13v4H3zM16 14h5M7 16v4"/>',
q:'<path d="M2 12h10M12 12l-3-3v6zM16 7h5v10h-5z"/>',
u:'<path d="M6 3v10M6 14l-2-3.5h4zM12 6v12M12 19l-2-3.5h4zM18 3v10M18 14l-2-3.5h4z"/>'
};
window.dxB={Ult:spUlt,Rain:spRain,Fall:spFall,Upd:spUpd,Draw:spDraw,Atk:spAtk,Skill:spSkill,Sk3:spSk3,Shaft:spShaft,IC,Cm:cmSet,CmEnd:cmEnd,Ghost:cmGhost,Tip:()=>F.tip,Rocket:cmRocket,Shoot:b=>fire(b)};
})(p);
(function(){
const O=dxS.O,BT={};
const act=()=>dxS.act=='T'?dxT:dxB,bid=()=>dxS.act=='T'?'B':'T',bt=()=>dxS.act=='T'?dxB:dxT;
const SW='<path d="M7 7h11l-3-3M17 17H6l3 3"/>';
if(typeof document!='undefined')for(const k of ['f','q','u','v','m']){const el=document.getElementById(k),s=el&&el.querySelector('svg');if(s)BT[k]=[s,s.innerHTML]}
function spIcons(){for(const k in BT)BT[k][0].innerHTML=SPC?(k=='v'?SW:dxT.IC[k]):BT[k][1]}
function spSet(v){SPC=v;try{localStorage.setItem('wg_spc',v)}catch(x){}spIcons();if(typeof skSync=='function')skSync()}
const hasSk=k=>duOn&&!pvOn?0:SPC?(k=='q'||k=='u'||k=='m'||k=='x'):sv.ek.includes(k);
function spCard(){
const on=SPC;
return '<div class="cd'+(on?' on':'')+'" data-i="6"><div class="ic ch"><img src="'+spImg()+'"></div><b>Pasukan Duo</b><small>Bazoka + Tombak  tukar, bot &amp; ultimate combo</small><div class="bt'+(on?' ds':'')+'">'+(on?'Dipilih':'Pilih')+'</div></div>';
}
function swap(){
if(!SPC||inMenu||p.dead||cmb.on)return;
const a=dxS.act,b=bid(),oa=O[a],ob=O[b];
if(p.ut>0||ob.ut>0)return;
oa.x=p.x;oa.f=p.f;oa.uc=p.uc;oa.kc=p.kc;oa.k3=p.s3>=0&&!p.s3H?0:p.k3;oa.vx=0;oa.at=-1;oa.sk1=-1;oa.rl=-1;oa.s3=-1;oa.ut=0;oa.cd=0;oa.bt=40;
p.x=ob.x;p.f=ob.f;p.uc=ob.uc;p.kc=ob.kc;p.k3=ob.k3;p.vx=0;p.at=-1;p.sk1=-1;p.rl=-1;p.s3=-1;p.cd=.25;
dxS.act=b;
ring(p.x,p.y-30,'160,180,255',40);
}
addEventListener('keydown',e=>{if((e.code=='KeyC'||e.code=='Tab')&&SPC&&!inMenu){e.preventDefault();if(!e.repeat)swap()}});
let pv=0;
function botAI(dt){
const id=bid(),o=O[id],c=bt(),off=id=='T'?46:-46;
if(inMenu||p.dead){o.uc=0;o.kc=0;o.k3=0;o.ut=0;o.us=0;o.vx=0;o.at=-1;o.sk1=-1;o.rl=-1;o.s3=-1;o.x=p.x+p.f*off;o.f=p.f;o.y=GY;return}
o.y=GY;o.vy=0;o.on=1;o.sh=0;
if(o.kc>0)o.kc-=dt;
if(o.cd>0)o.cd-=dt;
const busy=o.at>=0||o.sk1>=0||o.rl>=0||o.s3>=0||o.ut>0;
if(o.ut<=0)o.uc=M.min(1,o.uc+dt/20);
const tx=p.x+p.f*off,dx=tx-o.x;
if(M.abs(dx)>420){o.x=tx;o.vx=0}
let mv=0;
if(!busy&&M.abs(dx)>10)mv=dx>0?1:-1;
if(busy)o.vx*=M.max(0,1-dt*8);else o.vx+=(mv*340-o.vx)*M.min(1,dt*14);
o.x+=o.vx*dt;
if(mv)o.f=mv;
o.bt-=dt*60;
if(o.bt<=0&&!busy){
o.bt=40+M.random()*70;
let ne=null,nd=900;
for(const e of E){if(e.dd)continue;const d=M.abs(e.x-o.x);if(d<nd){nd=d;ne=e}}
if(ne){
o.f=ne.x>o.x?1:-1;
const r=M.random();
if(o.uc>=1&&r<.7)c.Ult();
else if(o.kc<=0&&r<.3)c.Skill();
else if(o.k3<=0&&r<.55)c.Sk3();
else c.Atk();
}
}
}
function mark(x,y,col,uc){
g.fillStyle=col;
for(let i=0;i<4;i++)g.fillRect(M.round(x)-4+i,y+i,9-2*i,1);
if(uc!==undefined){g.fillStyle='rgba(8,10,16,.6)';g.fillRect(M.round(x)-10,y-5,20,3);g.fillStyle=uc>=1?'#ffd21f':'#c9a45c';g.fillRect(M.round(x)-10,y-5,M.round(20*uc),3)}
}
window.spUlt=()=>act().Ult();window.spRain=dt=>act().Rain(dt);window.spFall=a=>dxT.Fall(a);window.spAtk=()=>act().Atk();window.spSkill=()=>act().Skill();window.spSk3=()=>act().Sk3();window.spShaft=()=>dxT.Shaft();
window.spMn=()=>dxS.act=='T'?'Lembing Guntur':'Roket Kluster';window.spQn=()=>dxS.act=='T'?'Tusukan Kilat':'Roket Raksasa';window.spUn=()=>dxS.act=='T'?'Hujan Tombak':'Badai Rudal';
window.spUpd=dt=>{
const tv=typeof TT!='undefined'&&TT.v&&!(duOn&&duS==0)?1:0;
if(tv&&!pv)swap();
pv=tv;
if(!cmb.on)botAI(dt);
const o=O[bid()];
bt().Upd(dt);
if(o.ut>0&&!inMenu){o.ut-=dt;bt().Rain(dt)}
act().Upd(dt);
};
window.spDraw=()=>{
bt().Draw();act().Draw();
if(!p.dead&&!cmb.on){const o=O[bid()];mark(p.x,M.round(p.y)-86,'#ffd21f');mark(o.x,GY-86,'#8f98d8',o.uc)}
};
window.spSet=spSet;window.spCard=spCard;window.hasSk=hasSk;
spIcons();
})();
