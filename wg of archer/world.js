const SHG=(()=>{const r=g.createRadialGradient(0,0,0,0,0,1);r.addColorStop(0,'rgba(2,4,12,1)');r.addColorStop(.55,'rgba(2,4,12,.5)');r.addColorStop(1,'rgba(2,4,12,0)');return r})();
const MGS=GX.make(500,500,x=>{
const S=500;
const f=(cx,cy,r,a)=>{
const q=x.createRadialGradient(cx,cy,0,cx,cy,r);
for(let i=0;i<=10;i++){const t=i/10;q.addColorStop(t,'rgba(190,204,246,'+(a*Math.exp(-t*t*2.6)*(1-t*t*t)).toFixed(3)+')')}
x.fillStyle=q;x.fillRect(0,0,S,S);
};
f(250,270,200,.12);f(250,250,130,.1);f(250,250,60,.13);f(250,250,28,.17);
},1,[6,0]);
const MPG=(()=>{const r=g.createRadialGradient(0,0,0,0,0,1);r.addColorStop(0,'rgba(150,178,222,.22)');r.addColorStop(.6,'rgba(150,178,222,.08)');r.addColorStop(1,'rgba(150,178,222,0)');return r})();
function shd(x,w,a){
if(ST.gq<2)return;
g.save();g.translate(x-w*.2,GY+1);g.scale(w,w*.2);g.globalAlpha=a;g.fillStyle=SHG;g.beginPath();g.arc(0,0,1,0,TAU);g.fill();g.restore();
}
const LY=[
{f:.12,b:.62,a:38,w:.0045,c0:'#454c86',c1:'#303a6c',c2:'#212850',fg:'rgba(138,122,186,',fa:.46},
{f:.28,b:.7,a:34,w:.007,c0:'#303870',c1:'#222a56',c2:'#141a38',fg:'rgba(112,102,168,',fa:.42},
{f:.5,b:.76,a:26,w:.011,c0:'#202850',c1:'#141a38',c2:'#0a0e22',fg:'rgba(90,86,148,',fa:.36}
];
const TS=[
{st:78,h0:11,hv:12,c:'#2c3466',tc:'#252c58',rim:'rgba(186,172,238,.3)'},
{st:60,h0:20,hv:16,c:'#1a2048',tc:'#151a3c',rim:'rgba(164,152,228,.3)'},
{st:42,h0:30,hv:26,c:'#0a0e22',tc:'#070a1a',rim:'rgba(136,128,210,.34)'}
];
const TV=[{n:4,k:1,w:.3,s:.22,t:.36,c:.2},{n:6,k:1.35,w:.2,s:.17,t:.3,c:.15},{n:3,k:.85,w:.42,s:.27,t:.42,c:.3},{n:5,k:1.1,w:.26,s:.19,t:.34,c:.17}];
const MT=[
{f:.035,st:210,s:11,b:.68,h0:.2,hv:.18,t:'#2e2a56',bt:'#695b8c',lt:'rgba(190,178,240,.34)',dk:.42,sn:'rgba(150,138,206,.34)'},
{f:.08,st:150,s:37,b:.72,h0:.12,hv:.16,t:'#201e48',bt:'#4a3f70',lt:'rgba(170,158,228,.3)',dk:.46,sn:'rgba(128,116,186,.3)',fg:'rgba(124,110,176,',fa:.46}
];
const MS=GX.make(512,64,x=>{
for(let i=0;i<9;i++){
const px=hs(i+300)*512,py=24+hs(i+310)*16,rx=60+hs(i+320)*90,ry=8+hs(i+330)*8;
for(const o of[-512,0,512]){
x.save();x.translate(px+o,py);x.scale(rx,ry);
const r=x.createRadialGradient(0,0,0,0,0,1);
r.addColorStop(0,'rgba(208,198,240,.5)');r.addColorStop(1,'rgba(208,198,240,0)');
x.fillStyle=r;x.beginPath();x.arc(0,0,1,0,TAU);x.fill();x.restore();
}
}
});
const CLD=GX.make(2048,240,x=>{
const W=2048;
const pf=(px,py,rx,ry,col,a)=>{
for(const o of[-W,0,W]){
x.save();x.translate(px+o,py);x.scale(rx,ry);
const r=x.createRadialGradient(0,0,0,0,0,1);
r.addColorStop(0,col+a+')');r.addColorStop(.55,col+a*.55+')');r.addColorStop(1,col+'0)');
x.fillStyle=r;x.beginPath();x.arc(0,0,1,0,TAU);x.fill();x.restore();
}
};
for(let i=0;i<6;i++){
const cx=hs(i+400)*W,cy=100+hs(i+410)*40,s=.7+hs(i+420)*.6;
for(let pass=0;pass<2;pass++)for(let k=0;k<9;k++){
const px=cx+(hs(i*9+k+430)-.5)*190*s,py=cy+(hs(i*9+k+520)-.5)*46*s,rx=(50+hs(i*9+k+610)*60)*s,ry=(18+hs(i*9+k+700)*22)*s;
if(pass)pf(px,py,rx,ry,'rgba(10,12,34,',.62);
else pf(px,py-ry*.3,rx*1.04,ry,'rgba(140,128,196,',.14);
}
}
},1,[5,1]);
const CLP=[{y:.03,h:.3,w:2200,p:.015,s:7,a:.5,o:0},{y:.14,h:.26,w:1900,p:.03,s:12,a:.4,o:900}];
const RN=1;
const hill=(L,wx)=>GY*L.b+M.sin(wx*L.w)*L.a+M.sin(wx*L.w*2.3+1.7)*L.a*.4;
let wkey='',WG=[],WS={};
function wsRs(){
const k=GY+'|'+VH;
if(k==wkey)return;
wkey=k;
const fb=(y0,y1,p,q,bl)=>{const f=g.createLinearGradient(0,y0,0,y1);for(let i=0;i<=10;i++){const t=i/10;f.addColorStop(t,p+(q*M.pow(M.sin(bl?PI*t:PI*t/2),2)).toFixed(3)+')')}return f};
WG=LY.map(L=>{
const y0=GY*L.b-L.a*1.5,a=g.createLinearGradient(0,y0,0,VH);
a.addColorStop(0,L.c0);a.addColorStop(.45,L.c1);a.addColorStop(1,L.c2);
const fy=GY*L.b-L.a*.7,f=g.createLinearGradient(0,fy,0,GY+4);
f.addColorStop(0,L.fg+'0)');f.addColorStop(1,L.fg+L.fa+')');
const hb=L.a*1.1+38,my=GY*L.b-hb,m=fb(my,my+hb*2,L.fg,L.fa*.8,1);
return{a,f,fy,m,my,mh:hb*2};
});
const sk=g.createLinearGradient(0,0,0,GY);
sk.addColorStop(0,'#080b20');sk.addColorStop(.25,'#141838');sk.addColorStop(.45,'#26264f');sk.addColorStop(.65,'#433b6e');sk.addColorStop(.82,'#6e5f93');sk.addColorStop(1,'#9d8bb0');
const fg=g.createLinearGradient(0,GY-130,0,GY);
fg.addColorStop(0,'rgba(150,134,194,0)');fg.addColorStop(1,'rgba(150,134,194,.4)');
const gh=g.createLinearGradient(0,GY,0,GY+70);
gh.addColorStop(0,'rgba(130,114,176,.3)');gh.addColorStop(1,'rgba(130,114,176,0)');
const m=MT.map(K=>{
const y0=GY*(K.b-K.h0-K.hv),y1=GY*K.b,a=g.createLinearGradient(0,y0,0,y1),d=g.createLinearGradient(0,y0,0,y1);
a.addColorStop(0,K.t);a.addColorStop(1,K.bt);
d.addColorStop(0,'rgba(6,5,26,'+K.dk+')');d.addColorStop(1,'rgba(6,5,26,0)');
const fy=y1-GY*.24,f=K.fg?fb(fy,y1-GY*.03,K.fg,K.fa,0):0;
return{a,d,f,fy};
});
WS={sk,fg,gh,m};
}
function mist(y,h,tw,sp,off,a){
if(ST.gq<2)return;
g.globalAlpha=a;
const x0=-((((off+T*sp)%tw)+tw)%tw);
for(let x=x0;x<VW;x+=tw)g.drawImage(MS,x,y,tw,h);
g.globalAlpha=1;
}
function mtns(){
MT.forEach((K,ki)=>{
const S=WS.m[ki],B=GY*K.b,sh=cam*K.f,i0=M.floor(sh/K.st)-4,i1=M.ceil((sh+VW)/K.st)+4,pk=[],ys=[],ST=6,OF=260,n=M.ceil((VW+OF*2)/ST)+1,sb=M.floor(sh/ST)*ST,fr=sh-sb;
const vn=q=>{const i=M.floor(q),f=q-i;return hs(i)+(hs(i+1)-hs(i))*f*f*(3-2*f)};
for(let i=i0;i<=i1;i++)pk.push({i,x:i*K.st+hs(i+K.s)*K.st*.5,h:GY*(K.h0+hs(i+K.s+7)*K.hv),w:K.st*(.72+hs(i+K.s+9)*.3),e:1.3+hs(i+K.s+11)*.35});
for(let j=0;j<n;j++){
const wx=j*ST-OF+sb,c=M.floor(wx/K.st)-i0;let s=0;
for(let k=c-2;k<=c+2;k++){
if(k<0||k>=pk.length)continue;
const p=pk[k],t=M.abs(wx-p.x)/p.w;
if(t<1)s+=M.pow(p.h*M.pow(1-t,p.e),4);
}
ys.push(B-GY*.035-M.pow(s,.25)*(1+(vn(wx*.011+K.s)-.5)*.16+(vn(wx*.035+K.s*5)-.5)*.06));
}
const P=new Path2D(),Dk=new Path2D(),Lt=new Path2D(),Sn=new Path2D();
let rim=0,jp=0;
P.moveTo(-OF-fr,VH);
for(let j=0;j<n;j++){
const x=j*ST-OF-fr;
P.lineTo(x,ys[j]);
if(j<n-1&&ys[j+1]>ys[j]+.04){if(!rim){Lt.moveTo(x,ys[j]);rim=1}Lt.lineTo(x+ST,ys[j+1])}else rim=0;
}
P.lineTo((n-1)*ST-OF-fr,VH);P.closePath();
for(const p of pk){
const jc=M.round((p.x-sb+OF)/ST);
if(jc<4||jc>n-5)continue;
let jt=jc;
for(let j=jc-3;j<=jc+3;j++)if(ys[j]<ys[jt])jt=j;
if(jt==jc-3||jt==jc+3||!(ys[jt]<ys[jt-1]&&ys[jt]<=ys[jt+1]))continue;
const px=jt*ST-OF-fr,py=ys[jt],D=B-py,w=p.w;
let jl=jp;
for(let j=jp;j<=jt;j++)if(ys[j]>ys[jl])jl=j;
jp=jt;
Dk.moveTo(jl*ST-OF-fr,ys[jl]);
for(let j=jl+1;j<=jt;j++)Dk.lineTo(j*ST-OF-fr,ys[j]);
Dk.lineTo(px+(hs(p.i+K.s+31)-.4)*w*.1,py+D*.3);
Dk.lineTo(px+(hs(p.i+K.s+33)-.3)*w*.18,py+D*.62);
Dk.lineTo(px+(hs(p.i+K.s+35)-.2)*w*.26,B+GY*.03);
Dk.closePath();
if(p.h>GY*(K.h0+K.hv*.3)){
const cy=py+D*.27;
let a=jt,b=jt;
while(a>0&&ys[a-1]<cy)a--;
while(b<n-1&&ys[b+1]<cy)b++;
if(b-a>2){
const xa=a*ST-OF-fr,xb=b*ST-OF-fr,m=7;
Sn.moveTo(xa,ys[a]);
for(let j=a+1;j<=b;j++)Sn.lineTo(j*ST-OF-fr,ys[j]);
for(let k=1;k<=m;k++)Sn.lineTo(xb+(xa-xb)*k/m,cy+((k&1)*.05+hs(p.i+K.s+40+k)*.07)*D);
Sn.closePath();
}
}
}
g.fillStyle=S.a;g.fill(P);
g.fillStyle=K.sn;g.fill(Sn);
g.fillStyle=S.d;g.fill(Dk);
g.strokeStyle=K.lt;g.lineWidth=1.1;g.stroke(Lt);
if(S.f){g.fillStyle=S.f;g.fillRect(0,S.fy,VW,VH-S.fy)}else mist(B-GY*.12,GY*.16,ki?700:880,ki?5:3,0,ki?.4:.5);
});
}
const RL=[
{n:14,q:14,sp:330,sv:150,ln:7,lv:8,al:.08,lw:.7,sl:.14,ey:.72,o:1000},
{n:16,q:15,sp:430,sv:200,ln:10,lv:11,al:.12,lw:.85,sl:.18,ey:.86,o:2000},
{n:18,q:17,sp:520,sv:260,ln:14,lv:16,al:.16,lw:1,sl:.22,ey:1,o:0}
];
function rain(){
if(!RN||ST.gq<2)return;
const w=VW+120;
for(const R of RL){
const n=R.n+ST.gq*R.q,ey=GY*R.ey;
g.strokeStyle='rgba(196,200,238,'+R.al+')';g.lineWidth=R.lw;g.beginPath();
for(let i=0;i<n;i++){
const sp=R.sp+hs(i+R.o+840)*R.sv,ln=R.ln+hs(i+R.o+850)*R.lv,x=((hs(i+R.o+800)*w+T*sp*R.sl)%w+w)%w-60,y=((hs(i+R.o+820)*ey+T*sp)%ey+ey)%ey;
g.moveTo(x,y);g.lineTo(x+ln*R.sl,y+ln);
}
g.stroke();
}
}
function skyCl(){
if(ST.gq<2)return;
for(const C of CLP){
const tw=C.w,x0=(((T*C.s-cam*C.p+C.o)%tw)+tw)%tw-tw;
g.globalAlpha=C.a;
for(let x=x0;x<VW;x+=tw)g.drawImage(CLD,x,GY*C.y,tw,GY*C.h);
}
g.globalAlpha=1;
}
const BW=[[1,0],[1.8,3.2],[.3,7.4],[-.6,9.8],[-1,7.4],[-1.9,6.4],[-1.3,5.2],[-2.2,3.6],[-1.4,2.2],[-1.8,0]];
function skyBt(){
const my=GY*.26,cy=VW+200;
for(let i=0;i<8;i++){
const pc=cy*(7+hs(i+990)*4),sp=28+hs(i+950)*18,x=((hs(i+940)*pc+T*sp-cam*.02)%pc+pc)%pc-100;
if(x>VW+60)continue;
const u=.7+hs(i+970)*.35,ph=T*(11+hs(i+980)*5)+i*2.3,y=my+32+hs(i+960)*GY*.09+M.sin(T*.9+i*1.7)*3+M.sin(ph)*.35*u;
const wing=(sg,fc,ed)=>{
g.beginPath();
for(let k=0;k<BW.length;k++){
const q=BW[k],a=.15+.95*M.sin(ph-.45*q[1]/9.8),zz=q[1]*M.cos(a)*sg,sx=x+(q[0]-zz*.3)*u,sy=y+(zz*.4-q[1]*M.sin(a))*u;
if(k)g.lineTo(sx,sy);else g.moveTo(sx,sy);
}
g.closePath();g.fillStyle=fc;g.fill();
if(ed){g.strokeStyle=ed;g.lineWidth=.6;g.stroke()}
};
wing(-1,'rgba(4,4,16,.5)',0);
g.fillStyle='rgba(4,4,16,.76)';
g.beginPath();g.ellipse(x,y,2.2*u,1.1*u,-.08,0,TAU);g.fill();
g.beginPath();g.arc(x+2.5*u,y-.2*u,.85*u,0,TAU);g.fill();
g.beginPath();
g.moveTo(x+3.1*u,y-.5*u);g.lineTo(x+4.1*u,y+.1*u);g.lineTo(x+3.1*u,y+.4*u);
g.moveTo(x+2*u,y-.8*u);g.lineTo(x+2.1*u,y-2.3*u);g.lineTo(x+2.8*u,y-.9*u);
g.moveTo(x+2.9*u,y-.8*u);g.lineTo(x+3.3*u,y-2.1*u);g.lineTo(x+3.5*u,y-.5*u);
g.moveTo(x-2*u,y-.3*u);g.lineTo(x-4*u,y+.7*u);g.lineTo(x-2*u,y+.9*u);
g.fill();
wing(1,'rgba(6,6,22,.82)','rgba(150,160,214,.22)');
}
}
let arK='',arF=null,arN=null,arY=0,arW=0,arH=0,arS=null,arG=null,arD=null,dkS=null,dkG=null;
const arP=480,arC=['#b57a5a','#8d6b8f','#c9b28a','#7a8fb0','#a65a5a','#d8c7a5','#6f8f78'];
function bgBd(){
const k=GY+'|'+VH+'|'+dd+'|'+sc;
if(k==arK)return;
arK=k;
const fh=GY,nY=M.round(GY*.58),nh=GY-nY,s=M.min(dd*sc,1,600/fh,260/nh);
arY=nY;arH=nh;
if(!arF){arF=GX.dyn(arP,600);arN=GX.dyn(arP,260)}
let q;
GX.fill(arF,M.round(arP*s),M.round(fh*s),f=>{
f.setTransform(arF.w/arP,0,0,arF.h/fh,0,0);
const aT=GY*.16,aH=GY*.09,cT=aT+aH,cB=GY*.62;
f.fillStyle='#2a201b';f.fillRect(0,cB,arP,GY-cB);
q=f.createLinearGradient(0,aT,0,aT+aH);
q.addColorStop(0,'#8b7760');q.addColorStop(1,'#6a5846');
f.fillStyle=q;f.fillRect(0,aT,arP,aH);
f.fillStyle='#9e8a70';f.fillRect(0,aT,arP,2.5);
f.fillStyle='#4a3b2f';f.fillRect(0,aT+aH-3,arP,3);
for(let i=0;i<10;i++){
const x=i*48;
f.fillStyle='#a08c70';f.fillRect(x-1.5,aT+2.5,3,aH-5.5);
f.fillStyle='#6a5846';f.fillRect(x+24-2.5,aT-6,5,6);
if(i&1){f.fillStyle='#1b1410';f.fillRect(x+18,aT+aH*.28,12,aH*.46)}
else{
f.strokeStyle='#3a2d24';f.lineWidth=2;f.beginPath();f.moveTo(x+24,aT-6);f.lineTo(x+34,aT-44);f.stroke();
}
}
const hC=cB-cT;
for(let si=0;si<3;si++){
const sT=cT+si*hC/3,sB=sT+hC/3-5,rh=7,nr=M.floor((sB-sT)/rh);
for(let r=0;r<nr;r++){
const y=sT+r*rh;
f.fillStyle=r&1?'#51433b':'#5c4d44';f.fillRect(0,y,arP,rh);
for(let j=0;j<52;j++){
const sd=j*3+r*17+si*53;
if(hs(sd+7)<.12)continue;
const x=(j+.2+hs(j*7+r*13+si*101)*.6)*arP/52,c=arC[M.floor(hs(sd)*arC.length)];
f.fillStyle=c;f.fillRect(x-2.6,y+4.3,5.2,2.7);
f.fillStyle=hs(sd+3)<.5?'#c8a283':'#8f6a52';f.beginPath();f.arc(x,y+2.4,2.1,0,TAU);f.fill();
}
}
f.fillStyle='#3b2f29';f.fillRect(0,sB,arP,5);
f.fillStyle='#8b7760';f.fillRect(0,sB,arP,1.2);
if(si){
f.fillStyle='#0e0a0d';
for(let k=0;k<5;k++){
const c=96*k+48+(si==2?48:0);
if(c+9>arP)continue;
f.beginPath();f.moveTo(c-9,sB);f.lineTo(c-9,sT+14);f.arc(c,sT+14,9,PI,0);f.lineTo(c+9,sB);f.fill();
}
}
}
q=f.createLinearGradient(0,aT,0,cB);
q.addColorStop(0,'rgba(14,12,36,.38)');q.addColorStop(1,'rgba(14,12,36,0)');
f.fillStyle=q;f.fillRect(0,aT,arP,cB-aT);
q=f.createLinearGradient(0,cB-90,0,cB+4);
q.addColorStop(0,'rgba(230,140,80,0)');q.addColorStop(1,'rgba(230,140,80,.24)');
f.fillStyle=q;f.fillRect(0,cB-90,arP,94);
});
GX.fill(arN,M.round(arP*s),M.round(nh*s),n=>{
n.setTransform(arN.w/arP,0,0,arN.h/nh,0,0);
const pT=GY*.62-nY,wT=pT+12,pl=10,bB=nh;
arW=wT;
for(let j=0;j<40;j++){
const sd=j*5+900,x=(j+.3+hs(sd)*.4)*arP/40;
n.fillStyle=arC[M.floor(hs(sd+1)*arC.length)];n.fillRect(x-4,pT+2,8,6);
n.fillStyle=hs(sd+2)<.5?'#c8a283':'#8f6a52';n.beginPath();n.arc(x,pT+.5,3.4,0,TAU);n.fill();
}
q=n.createLinearGradient(0,pT,0,wT);
q.addColorStop(0,'#9a8466');q.addColorStop(1,'#7a6650');
n.fillStyle=q;n.fillRect(0,pT,arP,12);
n.fillStyle='#b8a283';n.fillRect(0,pT,arP,2);
q=n.createLinearGradient(0,wT,0,bB);
q.addColorStop(0,'#8a7660');q.addColorStop(1,'#5e4e3f');
n.fillStyle=q;n.fillRect(0,wT,arP,bB-wT);
n.fillStyle='rgba(0,0,0,.14)';
for(let y=wT+14;y<bB;y+=14)n.fillRect(0,y,arP,1);
const top=wT+14,bot=bB-pl;
for(let k=0;k<6;k++){
const c=80*k+40;
n.beginPath();n.moveTo(c-26,bot);n.lineTo(c-26,top+26);n.arc(c,top+26,26,PI,0);n.lineTo(c+26,bot);n.closePath();
q=n.createLinearGradient(0,top,0,bot);
q.addColorStop(0,'#1a1218');q.addColorStop(1,'#0a070a');
n.fillStyle=q;n.fill();
if(!(k&1)){
n.save();n.clip();
n.fillStyle='#2e242b';
for(let j=0;j<9;j++)n.fillRect(c-24+j*6,top,1.6,bot-top);
n.fillRect(c-26,top+(bot-top)*.35,52,1.6);n.fillRect(c-26,top+(bot-top)*.7,52,1.6);
n.restore();
}
n.strokeStyle='#b09a78';n.lineWidth=3;
n.beginPath();n.moveTo(c-26,top+26);n.arc(c,top+26,26,PI,0);n.stroke();
n.fillStyle='#b8a283';n.fillRect(c-3,top-3,6,7);
}
for(let k=0;k<=6;k++){
const x=80*k;
n.fillStyle='#9c8668';n.fillRect(x-6,wT+4,12,bB-pl-wT-4);
n.fillStyle='rgba(0,0,0,.18)';n.fillRect(x-2.5,wT+8,1,bB-pl-wT-12);n.fillRect(x+1.5,wT+8,1,bB-pl-wT-12);
n.fillStyle='#b39c7a';n.fillRect(x-9,wT+4,18,4);n.fillRect(x-9,bB-pl-4,18,4);
if(!(k&1)){
n.fillStyle='#2a2118';n.fillRect(x-1.5,wT+36,3,8);
n.fillStyle='#3a2d22';n.fillRect(x-3.5,wT+32,7,5);
}else if(k<6){
n.fillStyle='#8c1f2b';n.beginPath();n.moveTo(x-7,wT+12);n.lineTo(x+7,wT+12);n.lineTo(x+7,wT+58);n.lineTo(x,wT+50);n.lineTo(x-7,wT+58);n.closePath();n.fill();
n.fillStyle='#d9b24a';n.fillRect(x-1.5,wT+15,3,30);
n.strokeStyle='#d9b24a';n.lineWidth=1;n.stroke();
}
}
n.fillStyle='#4b3d31';n.fillRect(0,bot,arP,pl);
n.fillStyle='#7d6a57';n.fillRect(0,bot,arP,1);
});
arS=g.createLinearGradient(0,0,0,GY);
arS.addColorStop(0,'#10132f');arS.addColorStop(.5,'#3c2d55');arS.addColorStop(1,'#b3623f');
arG=g.createLinearGradient(0,GY,0,VH);
arG.addColorStop(0,'#6e583b');arG.addColorStop(.12,'#8c7351');arG.addColorStop(.45,'#6f5a3c');arG.addColorStop(1,'#3a2b1c');
arD=g.createLinearGradient(0,GY,0,GY+46);
arD.addColorStop(0,'rgba(10,6,4,.55)');arD.addColorStop(1,'rgba(10,6,4,0)');
dkS=g.createLinearGradient(0,0,0,GY);
dkS.addColorStop(0,'#03050a');dkS.addColorStop(1,'#0a0f18');
dkG=g.createLinearGradient(0,GY,0,VH);
dkG.addColorStop(0,'#0b1118');dkG.addColorStop(1,'#04070b');
}
function bgAr(){
bgBd();
g.fillStyle=arS;g.fillRect(0,0,VW,VH);
const fx=-((((cam*.1)%arP)+arP)%arP);
for(let t=fx;t<VW;t+=arP)g.drawImage(arF,t,0,arP+1,GY);
const nx=-((((cam*.3)%arP)+arP)%arP);
for(let t=nx;t<VW;t+=arP)g.drawImage(arN,t,arY,arP+1,arH);
for(let t=nx;t<VW+arP;t+=arP)for(let k=0;k<6;k+=2){
const x=t+80*k;
if(x<-60||x>VW+60)continue;
const y=arY+arW+30,fl=.8+.2*M.sin(T*9+k*1.7)*M.sin(T*5.3+k);
gl('a',x,y+8,64,.16*fl);
gl('f',x,y-4,24,.6*fl);
g.fillStyle='#ffb14a';g.beginPath();g.moveTo(x-2.6,y);g.quadraticCurveTo(x-3,y-6*fl,x,y-11*fl);g.quadraticCurveTo(x+3,y-6*fl,x+2.6,y);g.fill();
g.fillStyle='#fff0b0';g.beginPath();g.moveTo(x-1.2,y);g.quadraticCurveTo(x-1.4,y-3*fl,x,y-5.5*fl);g.quadraticCurveTo(x+1.4,y-3*fl,x+1.2,y);g.fill();
}
}
function bgDk(){
bgBd();
g.fillStyle=dkS;g.fillRect(0,0,VW,VH);
}
function grAr(){
g.fillStyle=arG;g.fillRect(cam-40,GY,VW+80,VH-GY+40);
g.fillStyle=arD;g.fillRect(cam-40,GY,VW+80,46);
for(let i=M.floor(cam/40);i<(cam+VW)/40+1;i++){
const x=i*40+hs(i+31)*34,y=GY+8+hs(i+37)*(VH-GY-12),r=2+hs(i+33)*5;
g.fillStyle='rgba(30,18,8,.2)';g.beginPath();g.ellipse(x-1.2,y+1,r,r*.3,0,0,TAU);g.fill();
g.fillStyle='rgba(214,186,132,.16)';g.beginPath();g.ellipse(x,y,r,r*.28,0,0,TAU);g.fill();
}
}
function grDk(){
bgBd();
g.fillStyle=dkG;g.fillRect(cam-40,GY,VW+80,VH-GY+40);
g.fillStyle='rgba(120,140,180,.18)';g.fillRect(cam-40,GY,VW+80,1);
}
const guSN=(()=>{const r=g.createRadialGradient(0,0,0,0,0,1);r.addColorStop(0,'rgba(255,240,200,.95)');r.addColorStop(.1,'rgba(255,220,160,.6)');r.addColorStop(.35,'rgba(255,190,120,.22)');r.addColorStop(1,'rgba(255,170,100,0)');return r})();
const guCT=GX.make(1024,96,x=>{
const S=1024;
for(let i=0;i<7;i++){
const px=hs(i+1200)*S,py=30+hs(i+1210)*36,rx=70+hs(i+1220)*120,ry=5+hs(i+1230)*8;
for(const o of[-S,0,S]){
x.save();x.translate(px+o,py);x.scale(rx,ry);
const r=x.createRadialGradient(0,0,0,0,0,1);
r.addColorStop(0,'rgba(255,230,200,.75)');r.addColorStop(1,'rgba(255,230,200,0)');
x.fillStyle=r;x.beginPath();x.arc(0,0,1,0,TAU);x.fill();x.restore();
}
}
});
const guLY=[
{f:.08,b:.84,st:560,h0:.05,hv:.05,s:21,c0:'#f0bd8e',c1:'#e8b283',sd:'rgba(122,94,130,.5)'},
{f:.18,b:.92,st:420,h0:.06,hv:.07,s:41,c0:'#efae6a',c1:'#e2a063',sd:'rgba(88,64,114,.55)'},
{f:.32,b:1,st:320,h0:.04,hv:.06,s:61,c0:'#f0a85a',c1:'#dca56a',sd:'rgba(74,50,98,.6)'}
];
function guCl(){
for(const C of[[.06,.12,1500,6,.55,0],[.2,.1,1200,10,.4,500]]){
const tw=C[2],x0=(((T*C[3]-cam*.01+C[5])%tw)+tw)%tw-tw;
g.globalAlpha=C[4];
for(let x=x0;x<VW;x+=tw)g.drawImage(guCT,x,GY*C[0],tw,GY*C[1]);
}
g.globalAlpha=1;
}
function guMs(){
const st=420,sh=cam*.04,B=GY*.74,i0=M.floor(sh/st)-1,i1=M.ceil((sh+VW)/st)+1;
g.fillStyle='#d8a688';g.fillRect(0,B,VW,GY-B+1);
for(let i=i0;i<=i1;i++){
if(hs(i+1300)<.25)continue;
const xc=i*st+hs(i+1310)*st*.6-sh,w=90+hs(i+1320)*110,h=GY*(.09+hs(i+1330)*.12),t=hs(i+1340)<.3?w*.14:w*.42;
g.fillStyle='#a47f89';
g.beginPath();g.moveTo(xc-w*.8,B);g.lineTo(xc-w*.52,B-h*.4);g.lineTo(xc-t-w*.02,B-h*.44);g.lineTo(xc-t,B-h);g.lineTo(xc+t,B-h*.98);g.lineTo(xc+t+w*.02,B-h*.46);g.lineTo(xc+w*.54,B-h*.4);g.lineTo(xc+w*.8,B);g.closePath();g.fill();
g.fillStyle='#c99b86';
g.beginPath();g.moveTo(xc+t*.1,B-h);g.lineTo(xc+t,B-h*.98);g.lineTo(xc+t+w*.02,B-h*.46);g.lineTo(xc+w*.54,B-h*.4);g.lineTo(xc+w*.8,B);g.lineTo(xc+t*.1+w*.1,B);g.closePath();g.fill();
g.strokeStyle='rgba(112,78,90,.3)';g.lineWidth=1;
g.beginPath();g.moveTo(xc-t,B-h*.7);g.lineTo(xc+t,B-h*.68);g.moveTo(xc-t,B-h*.85);g.lineTo(xc+t,B-h*.84);g.stroke();
}
}
function guHz(a){
const q=g.createLinearGradient(0,GY*.6,0,GY);
q.addColorStop(0,'rgba(248,206,152,0)');q.addColorStop(1,'rgba(248,206,152,'+a+')');
g.fillStyle=q;g.fillRect(0,GY*.6,VW,GY*.4+1);
}
function guDn(L){
const sh=cam*L.f,i0=M.floor(sh/L.st)-2,i1=M.ceil((sh+VW)/L.st)+2,B=GY*L.b,bt=GY+4,lg=g.createLinearGradient(0,B-GY*(L.h0+L.hv),0,bt),Pl=new Path2D(),Ps=new Path2D();
lg.addColorStop(0,L.c0);lg.addColorStop(1,L.c1);
g.fillStyle=lg;g.fillRect(0,B,VW,bt-B);
for(let i=i0;i<=i1;i++){
const xc=i*L.st+hs(i+L.s)*L.st*.5-sh,wl=L.st*(.3+hs(i+L.s+3)*.15),wr=L.st*(.8+hs(i+L.s+5)*.25),h=GY*(L.h0+hs(i+L.s+7)*L.hv),yc=B-h,x0=xc-wl,x1=xc+wr,xb=xc+wr*(.05+hs(i+L.s+9)*.3);
Pl.moveTo(x0,B+2);
Pl.bezierCurveTo(x0+wl*.1,B-h*.5,xc-wl*.1,yc+h*.18,xc,yc);
Pl.bezierCurveTo(xc+wr*.25,yc+h*.1,xc+wr*.55,B-h*.28,x1,B+2);
Pl.closePath();
Ps.moveTo(xc,yc);
Ps.bezierCurveTo(xc-wl*.1,yc+h*.18,x0+wl*.1,B-h*.5,x0,B+2);
Ps.lineTo(xb,B+2);
Ps.quadraticCurveTo(xc+(xb-xc)*.3+(hs(i+L.s+11)-.5)*wl*.4,yc+h*.55,xc,yc);
Ps.closePath();
}
g.fillStyle=lg;g.fill(Pl);
g.fillStyle=L.sd;g.fill(Ps);
}
function bgGu(){
const sk=g.createLinearGradient(0,0,0,GY);
sk.addColorStop(0,'#2f5d95');sk.addColorStop(.3,'#5b8fc3');sk.addColorStop(.55,'#a9c4d6');sk.addColorStop(.75,'#f3d5a6');sk.addColorStop(.9,'#f6bf82');sk.addColorStop(1,'#f0a466');
g.fillStyle=sk;g.fillRect(0,0,VW,VH);
const mw=VW+200,mx=((VW*.7-cam*.02)%mw+mw)%mw-100,my=GY*.6;
g.save();g.translate(mx,my);g.scale(GY*.9,GY*.9);g.fillStyle=guSN;g.beginPath();g.arc(0,0,1,0,TAU);g.fill();g.restore();
g.fillStyle='#fff6dc';g.beginPath();g.arc(mx,my,17,0,TAU);g.fill();
guCl();
guMs();
guHz(.45);
guDn(guLY[0]);
guHz(.3);
guDn(guLY[1]);
guDn(guLY[2]);
}
let fgS=0;
function guCa(x,y,s,i,k){
const h=(86+hs(i+1500)*44)*s,w=14*s,ay=y-h*.36,by=y-h*.54,la=w*2.3,ra=w*2.1,lh=h*(.28+hs(i+1520)*.2),rh=h*(.22+hs(i+1530)*.2),ar=hs(i+1510)<.9;
if(!k){
g.fillStyle='rgba(84,46,28,.26)';g.beginPath();g.ellipse(x-h*.34,y+1,h*.4,3*s,0,0,TAU);g.fill();
g.fillStyle='rgba(30,22,16,.35)';g.beginPath();g.ellipse(x,y,w*.7,2.2*s,0,0,TAU);g.fill();
return;
}
const aw=w*.74,tp=y-h+w*.5,tk=new Path2D(),L=new Path2D(),R=new Path2D();
tk.moveTo(x-w*.6,y);tk.quadraticCurveTo(x-w*.49,y-h*.1,x-w*.46,y-h*.24);tk.lineTo(x-w*.46,tp);tk.arc(x,tp,w*.46,PI,0);tk.lineTo(x+w*.46,y-h*.24);tk.quadraticCurveTo(x+w*.49,y-h*.1,x+w*.6,y);tk.closePath();
L.moveTo(x,ay);L.bezierCurveTo(x-la*.9,ay,x-la,ay-lh*.15,x-la,ay-lh);
R.moveTo(x,by);R.bezierCurveTo(x+ra*.9,by,x+ra,by-rh*.15,x+ra,by-rh);
g.lineCap='round';g.lineJoin='round';g.strokeStyle='#142219';
if(ar){g.lineWidth=aw+2.4;g.stroke(L);g.stroke(R)}
g.lineWidth=2.4;g.stroke(tk);
const arm=P=>{
g.lineWidth=aw;g.strokeStyle='#4d6b45';g.stroke(P);
g.save();g.translate(aw*.2,-aw*.16);g.lineWidth=aw*.4;g.strokeStyle='#7a9a5e';g.stroke(P);g.restore();
g.save();g.translate(-aw*.24,aw*.15);g.lineWidth=aw*.34;g.strokeStyle='#2f4a37';g.stroke(P);g.restore();
g.save();g.translate(aw*.3,-aw*.22);g.lineWidth=aw*.09;g.strokeStyle='#c4cf8a';g.stroke(P);g.restore();
g.lineWidth=.8;g.strokeStyle='rgba(20,36,28,.5)';g.stroke(P);
g.save();g.translate(aw*.12,-aw*.09);g.stroke(P);g.restore();
};
if(ar){arm(L);arm(R)}
g.fillStyle='#4d6b45';g.fill(tk);
g.save();g.clip(tk);
g.fillStyle='#2f4a37';g.fillRect(x-w,tp-w,w*.78,h+w*2);
g.fillStyle='#7a9a5e';g.fillRect(x+w*.14,tp-w,w,h+w*2);
g.fillStyle='#c4cf8a';g.fillRect(x+w*.3,tp-w*.2,w*.08,h);
g.strokeStyle='rgba(20,36,28,.55)';g.lineWidth=1;g.beginPath();
for(let j=-3;j<=3;j++){const rx=x+j*w*.15;g.moveTo(rx,y);g.lineTo(rx,tp);g.quadraticCurveTo(rx,tp-w*.4,x,tp-w*.46)}
g.stroke();
g.fillStyle='rgba(236,228,184,.8)';g.beginPath();
for(let n=1;n<26;n++){const yy=y-n*h*.038;for(let j=-3;j<=3;j+=1){const xx=x+j*w*.15+(hs(i+n*7+j)-.5)*w*.04;g.rect(xx,yy+(j&1)*h*.015,.9,.9)}}
g.fill();
g.restore();
}
function guLs(){
const ph=VH-GY,o=[];
for(let i=M.floor((cam-100)/150);i<(cam+VW+100)/150;i++){
const r=hs(i+1600);
if(r>.7)continue;
const y=GY+6+hs(i+1610)*(ph-12);
o.push([r<.22?guCa:r<.5?guSh:guRk,i*150+hs(i+1620)*110,y,.75+(y-GY)/ph*.5,i]);
}
return o.sort((a,b)=>a[2]-b[2]);
}
function fgGu(){
g.save();
for(const e of guLs())e[0](e[1],e[2],e[3],e[4],1);
g.restore();
}
function guSh(x,y,s,i,k){
const r=(10+hs(i+1540)*9)*s;
if(!k){g.fillStyle='rgba(84,46,28,.24)';g.beginPath();g.ellipse(x-r*.9,y+1,r*1.5,2.6*s,0,0,TAU);g.fill();return}
for(let k=0;k<7;k++){
const u=k<4,cx=x+(u?(k-1.5)*r*.7:(k-5)*r*.6),cy=y-r*(u?.3:.78)-hs(i+k+1550)*r*.12,rx=r*(u?.62:.5)*(.85+hs(i+k+1570)*.3),ry=r*(u?.5:.42);
g.fillStyle='#5d6a3b';g.beginPath();g.ellipse(cx,cy,rx,ry,0,0,TAU);g.fill();
g.fillStyle='#98984f';g.beginPath();g.ellipse(cx+rx*.22,cy-ry*.22,rx*.62,ry*.55,0,0,TAU);g.fill();
}
}
function guRk(x,y,s,i,k){
const r=(7+hs(i+1560)*9)*s;
if(!k){g.fillStyle='rgba(84,46,28,.26)';g.beginPath();g.ellipse(x-r*.9,y+1,r*1.6,2.4*s,0,0,TAU);g.fill();return}
g.fillStyle='#8a5d4a';g.beginPath();g.moveTo(x-r,y);g.quadraticCurveTo(x-r*.9,y-r*.9,x-r*.1,y-r*.85);g.quadraticCurveTo(x+r*.8,y-r*.9,x+r,y);g.closePath();g.fill();
g.fillStyle='#c48b64';g.beginPath();g.moveTo(x+r*.1,y-r*.82);g.quadraticCurveTo(x+r*.8,y-r*.88,x+r,y);g.lineTo(x+r*.3,y);g.closePath();g.fill();
}
function grGu(){
let q=g.createLinearGradient(0,GY,0,VH);
q.addColorStop(0,'#dca56a');q.addColorStop(.18,'#d39a5e');q.addColorStop(.6,'#bb7f45');q.addColorStop(1,'#8f5a30');
g.fillStyle=q;g.fillRect(cam-40,GY,VW+80,VH-GY+40);
q=g.createLinearGradient(0,GY,0,GY+56);
q.addColorStop(0,'rgba(250,214,160,.4)');q.addColorStop(1,'rgba(250,214,160,0)');
g.fillStyle=q;g.fillRect(cam-40,GY,VW+80,56);
const ph=VH-GY,Pd=new Path2D(),Pl=new Path2D(),o=[];
for(let r=1;r<=9;r++){
const t=r/9,y=GY+ph*t*t+3,a=.8+t*2.6,fq=.05-t*.02;
for(let i=M.floor((cam-60)/130);i<(cam+VW+60)/130;i++){
const sd=i*7+r*131;
if(hs(sd)<.3)continue;
const xs=i*130+hs(sd+1)*40,xl=60+hs(sd+2)*70,yo=(hs(sd+3)-.5)*ph*.05;
for(let x=0;x<=xl;x+=10){
const wx=xs+x,yy=y+yo+M.sin(wx*fq+r*1.9)*a;
if(x){Pd.lineTo(wx,yy);Pl.lineTo(wx,yy-1.6)}else{Pd.moveTo(wx,yy);Pl.moveTo(wx,yy-1.6)}
}
}
}
g.save();
g.lineWidth=1.2;g.lineCap='round';
g.strokeStyle='rgba(112,64,28,.2)';g.stroke(Pd);
g.strokeStyle='rgba(255,226,172,.2)';g.stroke(Pl);
for(const e of guLs()){e[0](e[1],e[2],e[3],e[4],0);if(!fgS)e[0](e[1],e[2],e[3],e[4],1)}
g.restore();
}
const skVn=q=>{const i=M.floor(q),f=q-i;return hs(i)+(hs(i+1)-hs(i))*f*f*(3-2*f)};
const skRg=q=>1-M.abs(2*skVn(q)-1);
const snRG=[
{f:.03,b:.74,h:.34,k:.0042,s:101,c0:'#8a95c8',c1:'#c6b3cc',l0:'#f2d3d6',l1:'rgba(244,207,198,.45)',rm:'rgba(255,235,230,.6)'},
{f:.08,b:.8,h:.24,k:.0065,s:131,c0:'#6f7fb4',c1:'#b3a8c9',l0:'#f7dcdc',l1:'rgba(239,199,196,.45)',rm:'rgba(255,240,236,.7)'}
];
const snHL=[
{f:.14,b:.86,a:16,w:.006,st:70,th:26,c0:'#d6e0f2',c1:'#c3d0e8'},
{f:.26,b:.94,a:12,w:.009,st:90,th:40,c0:'#e4ebf7',c1:'#d0dcee'}
];
const vkRG=[
{f:.1,b:.82,h:.2,k:.0075,s:201,c0:'#2c1419',c1:'#3d1b1b',l0:'#5a2a24',l1:'rgba(122,50,31,.5)',rm:'rgba(255,150,80,.5)'},
{f:.22,b:.92,h:.12,k:.011,s:231,c0:'#170b0e',c1:'#241012',l0:'#3b1a16',l1:'rgba(82,34,26,.5)',rm:'rgba(255,125,55,.6)'}
];
const vkGL=(()=>{const r=g.createRadialGradient(0,0,0,0,0,1);r.addColorStop(0,'rgba(255,170,70,.9)');r.addColorStop(.25,'rgba(255,110,40,.5)');r.addColorStop(.6,'rgba(220,60,20,.18)');r.addColorStop(1,'rgba(200,50,20,0)');return r})();
const vkPF=[['96,72,70',.9],['255,120,50',.8]].map(c=>{
return GX.make(128,128,x=>{
const r=x.createRadialGradient(64,64,0,64,64,64);
r.addColorStop(0,'rgba('+c[0]+','+c[1]+')');r.addColorStop(.6,'rgba('+c[0]+','+c[1]*.45+')');r.addColorStop(1,'rgba('+c[0]+',0)');
x.fillStyle=r;x.fillRect(0,0,128,128);
});
});
function skHz(c,a){
const q=g.createLinearGradient(0,GY*.55,0,GY);
q.addColorStop(0,'rgba('+c+',0)');q.addColorStop(1,'rgba('+c+','+a+')');
g.fillStyle=q;g.fillRect(0,GY*.55,VW,GY*.45+1);
}
function skRd(L){
const SP=8,sh=cam*L.f,sb=M.floor(sh/SP)*SP,fr=sh-sb,n=M.ceil(VW/SP)+3,B=GY*L.b,H=GY*L.h,ys=[],P=new Path2D(),Lt=new Path2D(),Rm=new Path2D();
for(let j=0;j<n;j++){const wx=sb+j*SP;ys.push(B-H*(skRg(wx*L.k+L.s)+.35*skRg(wx*L.k*2.7+L.s+9))/1.35)}
P.moveTo(-fr,GY+4);
for(let j=0;j<n;j++){
const x=j*SP-fr;
P.lineTo(x,ys[j]);
if(j<n-1&&ys[j+1]>ys[j]){Lt.moveTo(x,ys[j]);Lt.lineTo(x+SP,ys[j+1]);Lt.lineTo(x+SP-(GY+4-ys[j+1])*.5,GY+4);Lt.lineTo(x-(GY+4-ys[j])*.5,GY+4);Lt.closePath();Rm.moveTo(x,ys[j]);Rm.lineTo(x+SP,ys[j+1])}
}
P.lineTo((n-1)*SP-fr,GY+4);P.closePath();
let q=g.createLinearGradient(0,B-H,0,GY);
q.addColorStop(0,L.c0);q.addColorStop(1,L.c1);
g.fillStyle=q;g.fill(P);
q=g.createLinearGradient(0,B-H,0,GY);
q.addColorStop(0,L.l0);q.addColorStop(1,L.l1);
g.fillStyle=q;g.fill(Lt);
g.strokeStyle=L.rm;g.lineWidth=1.2;g.stroke(Rm);
}
function snHl(L){
const q=g.createLinearGradient(0,GY*L.b-L.a*1.5,0,GY+4),cp=new Path2D(),tr=new Path2D(),sn=new Path2D();
q.addColorStop(0,L.c0);q.addColorStop(1,L.c1);
g.fillStyle=q;g.beginPath();g.moveTo(0,GY+4);
for(let x=0;x<=VW+12;x+=12){const y=hill(L,x+cam*L.f);g.lineTo(x,y);if(x)cp.lineTo(x,y);else cp.moveTo(x,y)}
g.lineTo(VW+12,GY+4);g.fill();
g.strokeStyle='rgba(255,255,255,.75)';g.lineWidth=1.4;g.stroke(cp);
for(let i=M.floor(cam*L.f/L.st)-1;i<(cam*L.f+VW)/L.st+1;i++){
if(hs(i+L.st)<.3)continue;
const wx=i*L.st+hs(i+L.th)*L.st*.6,x=wx-cam*L.f,by=hill(L,wx)+2,h=L.th*(.7+hs(i+L.st+4)*.6),w=h*.34;
for(let k=0;k<3;k++){
const yy=by-h*.18-k*h*.27,ww=w*(1-k*.22),th=h*.42;
tr.moveTo(x-ww,yy);tr.lineTo(x,yy-th);tr.lineTo(x+ww,yy);
sn.moveTo(x-ww*.55,yy-th*.45);sn.lineTo(x,yy-th);sn.lineTo(x+ww*.55,yy-th*.45);
}
}
g.fillStyle='#2f4668';g.fill(tr);
g.fillStyle='#e6eefa';g.fill(sn);
}
function snFl(n,o,z,al,sp,ox){
if(ST.gq<2)return;
g.fillStyle='rgba(255,255,255,'+al+')';
for(let i=0;i<n;i++){
const x=((hs(i+o+2000)*VW+M.sin(T*.7+i)*14+T*10*(.4+hs(i+o+2010)))%VW+VW)%VW+ox,y=((hs(i+o+2020)*VH+T*sp*(.6+hs(i+o+2030)*.8))%VH+VH)%VH,r=z*(.6+hs(i+o+2040)*.9);
g.fillRect(x,y,r,r);
}
}
function bgSn(){
const sk=g.createLinearGradient(0,0,0,GY),mw=VW+200,mx=((VW*.7-cam*.02)%mw+mw)%mw-100;
sk.addColorStop(0,'#1d2f66');sk.addColorStop(.3,'#3d4f95');sk.addColorStop(.55,'#8a79ad');sk.addColorStop(.75,'#e0a3b4');sk.addColorStop(.9,'#f3c0a4');sk.addColorStop(1,'#f8d7ae');
g.fillStyle=sk;g.fillRect(0,0,VW,VH);
g.fillStyle='#e8eeff';
for(let i=0;i<30;i++){
const x=((hs(i)*VW*1.4-cam*.02)%VW+VW)%VW,y=hs(i+99)*GY*.4;
g.globalAlpha=(.15+.5*M.abs(M.sin(T*(.5+hs(i+5))+i)))*(1-y/(GY*.45));g.fillRect(x,y,1.4,1.4);
}
g.globalAlpha=1;
g.save();g.translate(mx,GY*.74);g.scale(GY*.8,GY*.6);g.globalAlpha=.55;g.fillStyle=guSN;g.beginPath();g.arc(0,0,1,0,TAU);g.fill();g.restore();
skRd(snRG[0]);
skHz('246,200,180',.35);
skRd(snRG[1]);
skHz('246,200,180',.3);
snHl(snHL[0]);
snHl(snHL[1]);
snFl(40+ST.gq*30,0,1.6,.8,34,0);
}
function snPn(x,y,s,i,k){
const h=(90+hs(i+2100)*50)*s,w=h*.26;
if(!k){g.fillStyle='rgba(70,90,150,.24)';g.beginPath();g.ellipse(x-h*.3,y+1,h*.36,3*s,0,0,TAU);g.fill();return}
const tw=h*.045;
g.fillStyle='#17110e';g.fillRect(x-tw*.5-1,y-h*.2-1,tw+2,h*.2+1);
g.fillStyle='#4a382c';g.fillRect(x-tw*.5,y-h*.2,tw,h*.2);
g.fillStyle='#2d211a';g.fillRect(x-tw*.5,y-h*.2,tw*.4,h*.2);
g.fillStyle='#6b5340';g.fillRect(x+tw*.2,y-h*.2,tw*.3,h*.2);
g.lineJoin='round';
for(let t=0;t<10;t++){
const sd=i*13+t*29,u=t/9,yb=y-h*.09-t*h*.088,th=h*(.17-.006*t),yt=M.max(yb-th*1.15,y-h),ww=w*(1-u*.86),wl=ww*(.88+hs(sd)*.24),wr=ww*(.88+hs(sd+1)*.24),ox=(hs(sd+3)-.5)*w*.08,m=M.round(4+ww/w*5),P=new Path2D(),S=new Path2D(),tp=[];
P.moveTo(x+ox,yt);P.quadraticCurveTo(x-wl*.45,yt+(yb-yt)*.5,x-wl,yb+th*.25);
tp.push([x-wl,yb+th*.25]);
for(let j=1;j<2*m;j++){
const px=lr(x-wl,x+wr,j/(2*m))+(hs(sd+j)-.5)*ww*.08,py=j&1?yb-th*(.02+.1*hs(sd+j+40)):yb+th*(.14+.14*hs(sd+j+80));
P.lineTo(px,py);if(!(j&1))tp.push([px,py]);
}
P.lineTo(x+wr,yb+th*.25);tp.push([x+wr,yb+th*.25]);
P.quadraticCurveTo(x+wr*.45,yt+(yb-yt)*.5,x+ox,yt);P.closePath();
g.fillStyle='#24443a';g.fill(P);
g.save();g.clip(P);
poly([x-wl*1.3,yt-2,x-ww*.05,yt-2,x-wl*.42,yb+th*.4,x-wl*1.3,yb+th*.4],'#142a27');
poly([x+ww*.3,yt-2,x+wr*1.3,yt-2,x+wr*1.3,yb+th*.4,x+wr*.6,yb+th*.4],'#356354');
g.strokeStyle='rgba(10,26,24,.45)';g.lineWidth=.7;g.beginPath();
for(const q of tp){g.moveTo(lr(x+ox,q[0],.2),lr(yt,yb,.34));g.lineTo(q[0],q[1])}
g.stroke();
const sy=yb-th*.36;
S.moveTo(x-wl*1.2,sy);S.lineTo(x+wr*1.2,sy);S.lineTo(x+wr*1.2,yb-th*.2);
for(let j=1;j<14;j++)S.lineTo(lr(x+wr*1.2,x-wl*1.2,j/14),yb-th*.26+(j&1?th*.13*hs(sd+j+9):0));
S.lineTo(x-wl*1.2,yb-th*.2);S.closePath();
g.save();g.clip(S);g.fillStyle='#a9bbd9';g.fill(S);g.translate(ww*.14,-th*.08);g.fillStyle='#f1f6fd';g.fill(S);g.restore();
g.restore();
g.strokeStyle='#0e1a1c';g.lineWidth=1;g.stroke(P);
}
}
function snLs(){
const ph=VH-GY,o=[];
for(let i=M.floor((cam-100)/150);i<(cam+VW+100)/150;i++){
const r=hs(i+2300);
if(r>.68)continue;
const y=GY+6+hs(i+2310)*(ph-12);
o.push([r<.3?snPn:r<.52?snMd:snRk,i*150+hs(i+2320)*110,y,.75+(y-GY)/ph*.5,i]);
}
return o.sort((a,b)=>a[2]-b[2]);
}
function fgSn(){
g.save();
for(const e of snLs())e[0](e[1],e[2],e[3],e[4],1);
g.restore();
}
function fgOb(){
if(ST.bg!=3&&ST.bg!=4)return;
const q=slA,c=g;
if(q)g=slO;
if(ST.bg==3)fgGu();else fgSn();
if(q)g=c;
}
function snMd(x,y,s,i,k){
const r=(14+hs(i+2110)*14)*s;
if(!k){g.fillStyle='rgba(80,100,160,.22)';g.beginPath();g.ellipse(x-r*.5,y+1,r*1.3,3*s,0,0,TAU);g.fill();return}
g.fillStyle='#b9c8e4';g.beginPath();g.ellipse(x,y-r*.18,r,r*.4,0,0,TAU);g.fill();
g.fillStyle='#f4f8ff';g.beginPath();g.ellipse(x+r*.12,y-r*.28,r*.82,r*.3,0,0,TAU);g.fill();
}
function snRk(x,y,s,i,k){
const r=(7+hs(i+2120)*9)*s;
if(!k){g.fillStyle='rgba(80,100,160,.24)';g.beginPath();g.ellipse(x-r*.9,y+1,r*1.6,2.4*s,0,0,TAU);g.fill();return}
g.fillStyle='#5d6c8e';g.beginPath();g.moveTo(x-r,y);g.quadraticCurveTo(x-r*.9,y-r*.9,x-r*.1,y-r*.85);g.quadraticCurveTo(x+r*.8,y-r*.9,x+r,y);g.closePath();g.fill();
g.fillStyle='#f0f5fc';g.beginPath();g.moveTo(x-r*.7,y-r*.55);g.quadraticCurveTo(x-r*.1,y-r*1.1,x+r*.7,y-r*.5);g.quadraticCurveTo(x,y-r*.7,x-r*.7,y-r*.55);g.fill();
}
function grSn(){
let q=g.createLinearGradient(0,GY,0,VH);
q.addColorStop(0,'#e6edf8');q.addColorStop(.2,'#d6e0f0');q.addColorStop(.6,'#b7c6e2');q.addColorStop(1,'#98aacd');
g.fillStyle=q;g.fillRect(cam-40,GY,VW+80,VH-GY+40);
const ph=VH-GY,Pd=new Path2D(),Pl=new Path2D(),o=[];
for(let r=1;r<=7;r++){
const t=r/7,y=GY+ph*t*t+3,a=.6+t*1.8,fq=.02-t*.008;
for(let i=M.floor((cam-60)/200);i<(cam+VW+60)/200;i++){
const sd=i*7+r*131;
if(hs(sd+2200)<.3)continue;
const xs=i*200+hs(sd+2201)*50,xl=90+hs(sd+2202)*80,yo=(hs(sd+2203)-.5)*ph*.05;
for(let x=0;x<=xl;x+=14){
const wx=xs+x,yy=y+yo+M.sin(wx*fq+r*1.9)*a;
if(x){Pd.lineTo(wx,yy);Pl.lineTo(wx,yy-1.6)}else{Pd.moveTo(wx,yy);Pl.moveTo(wx,yy-1.6)}
}
}
}
g.save();
g.lineWidth=1.2;g.lineCap='round';
g.strokeStyle='rgba(110,130,185,.28)';g.stroke(Pd);
g.strokeStyle='rgba(255,255,255,.7)';g.stroke(Pl);
for(const e of snLs()){e[0](e[1],e[2],e[3],e[4],0);if(!fgS)e[0](e[1],e[2],e[3],e[4],1)}
snFl(14+ST.gq*10,500,2.4,.9,60,cam);
g.restore();
}
function vkEm(n,o,ox){
if(ST.gq<2)return;
g.save();g.globalCompositeOperation='lighter';
for(let i=0;i<n;i++){
const sp=14+hs(i+o+2500)*26,x=((hs(i+o+2510)*VW+M.sin(T*.8+i)*12+T*6)%VW+VW)%VW+ox,y=VH-((hs(i+o+2520)*VH+T*sp)%VH),a=(.25+.6*hs(i+o+2530))*(.6+.4*M.sin(T*4+i));
g.fillStyle='rgba(255,'+(120+M.floor(hs(i+o+2540)*90))+',50,'+a.toFixed(2)+')';g.fillRect(x,y,1.8,1.8);
}
g.restore();
}
function vkVl(){
const st=1100,sh=cam*.05,B=GY*.82,i0=M.floor(sh/st)-1,i1=M.ceil((sh+VW)/st)+1;
for(let i=i0;i<=i1;i++){
const xc=i*st+300+hs(i+1810)*300-sh,W=620+hs(i+1820)*160,H=GY*(.34+hs(i+1830)*.08),cw=W*.07,yt=B-H,q=g.createLinearGradient(0,yt,0,B);
q.addColorStop(0,'#3a1a1c');q.addColorStop(1,'#1c0c0f');
g.fillStyle=q;g.beginPath();g.moveTo(xc-W*.5,B+4);g.quadraticCurveTo(xc-W*.16,B-H*.2,xc-cw,yt);g.lineTo(xc+cw*1.1,yt+H*.03);g.quadraticCurveTo(xc+W*.16,B-H*.2,xc+W*.5,B+4);g.closePath();g.fill();
g.save();g.translate(xc,yt);g.scale(W*.3,W*.22);g.fillStyle=vkGL;g.beginPath();g.arc(0,0,1,0,TAU);g.fill();g.restore();
g.save();g.lineCap='round';g.lineJoin='round';
for(let s=0;s<3;s++){
const P=new Path2D(),pl=.75+.25*M.sin(T*2+s*2+i);
P.moveTo(xc+(s-1)*cw*.8,yt+H*.02);
for(let k=1;k<=6;k++){const t=k/6;P.lineTo(xc+(s-1)*(cw*.8+W*.4*M.pow(t,1.7))+(hs(i*7+s*13+k)-.5)*16*t,yt+H*.02+H*.97*t)}
g.strokeStyle='rgba(255,90,20,'+.5*pl+')';g.lineWidth=5;g.stroke(P);
g.strokeStyle='rgba(255,200,110,'+.85*pl+')';g.lineWidth=1.6;g.stroke(P);
}
g.restore();
for(let k=0;k<9;k++){
const t=(T*.045+k/9)%1,r=26+t*84,x=xc+cw*.4+t*W*.22+M.sin(T*.4+k*2)*8*t-r,y=yt-t*GY*.55-r,a=M.pow(M.sin(PI*t),.7);
g.globalAlpha=a*.85;g.drawImage(vkPF[0],x,y,r*2,r*2);
g.globalAlpha=a*(1-t)*.6;g.drawImage(vkPF[1],x,y+r*.3,r*2,r*2);
}
g.globalAlpha=1;
}
}
function bgVk(){
const sk=g.createLinearGradient(0,0,0,GY);
sk.addColorStop(0,'#0b0810');sk.addColorStop(.35,'#1f0e18');sk.addColorStop(.6,'#4a1a1c');sk.addColorStop(.8,'#8c3419');sk.addColorStop(.93,'#d2561f');sk.addColorStop(1,'#f08a2e');
g.fillStyle=sk;g.fillRect(0,0,VW,VH);
vkVl();
skHz('210,90,40',.3);
skRd(vkRG[0]);
skHz('210,90,40',.18);
skRd(vkRG[1]);
vkEm(30+ST.gq*20,0,0);
}
function vkRk(x,y,s,i){
const r=(8+hs(i+2450)*12)*s;
g.fillStyle='rgba(0,0,0,.35)';g.beginPath();g.ellipse(x-r*.8,y+1,r*1.5,2.6*s,0,0,TAU);g.fill();
g.fillStyle='#1d1013';g.beginPath();g.moveTo(x-r,y);g.lineTo(x-r*.8,y-r*.6);g.lineTo(x-r*.2,y-r*.95);g.lineTo(x+r*.5,y-r*.8);g.lineTo(x+r,y-r*.2);g.lineTo(x+r*1.05,y);g.closePath();g.fill();
g.strokeStyle='rgba(255,120,50,.6)';g.lineWidth=1.2;g.beginPath();g.moveTo(x-r*.2,y-r*.95);g.lineTo(x+r*.5,y-r*.8);g.lineTo(x+r,y-r*.2);g.stroke();
}
function grVk(){
let q=g.createLinearGradient(0,GY,0,VH);
q.addColorStop(0,'#3a2020');q.addColorStop(.25,'#2a171a');q.addColorStop(1,'#0e0709');
g.fillStyle=q;g.fillRect(cam-40,GY,VW+80,VH-GY+40);
q=g.createLinearGradient(0,GY,0,GY+60);
q.addColorStop(0,'rgba(255,110,40,.4)');q.addColorStop(1,'rgba(255,110,40,0)');
g.fillStyle=q;g.fillRect(cam-40,GY,VW+80,60);
const ph=VH-GY,pl=.7+.3*M.sin(T*2);
g.save();g.lineCap='round';g.lineJoin='round';
for(let i=M.floor((cam-100)/150);i<(cam+VW+100)/150;i++){
if(hs(i+2400)<.35)continue;
const y0=GY+8+hs(i+2410)*(ph-16),x0=i*150+hs(i+2420)*100,P=new Path2D();
P.moveTo(x0,y0);
for(let k=1;k<=5;k++)P.lineTo(x0+k*(12+hs(i+k+2430)*14),y0+(hs(i+k+2440)-.5)*(8+ph*.08));
g.strokeStyle='rgba(255,90,25,'+.4*pl+')';g.lineWidth=4;g.stroke(P);
g.strokeStyle='rgba(255,196,100,'+.85*pl+')';g.lineWidth=1.3;g.stroke(P);
}
for(let i=M.floor((cam-100)/150);i<(cam+VW+100)/150;i++){
if(hs(i+2460)<.45)continue;
const y=GY+6+hs(i+2470)*(ph-12);
vkRk(i*150+hs(i+2480)*110,y,.75+(y-GY)/ph*.5,i);
}
vkEm(12+ST.gq*8,600,cam);
g.restore();
}
function bg(){
if(ST.bg==1){bgAr();return}
if(ST.bg==2){bgDk();return}
if(ST.bg==3){bgGu();return}
if(ST.bg==4){bgSn();return}
if(ST.bg==5){bgVk();return}
wsRs();
g.fillStyle=WS.sk;g.fillRect(0,0,VW,VH);
g.fillStyle='#e4eaff';
for(let i=0;i<60;i++){
const x=((hs(i)*VW*1.4-cam*.02)%VW+VW)%VW,y=hs(i+99)*GY*.58,z=hs(i+3)>.88?1.7:1;
g.globalAlpha=(.2+.55*M.abs(M.sin(T*(.5+hs(i+5))+i)))*(1-y/(GY*.7));g.fillRect(x,y,z,z);
}
g.globalAlpha=1;
const mw=VW+200,mx=((VW*.78-cam*.02)%mw+mw)%mw-100,my=GY*.26;
if(ST.gq>1)g.drawImage(MGS,mx-500,my-500,1000,1000);
g.fillStyle='#eef1fb';g.beginPath();g.arc(mx,my,22,0,TAU);g.fill();
g.fillStyle='rgba(150,162,196,.4)';
g.beginPath();g.arc(mx-7,my-4,5,0,TAU);g.fill();
g.beginPath();g.arc(mx+8,my+7,3.4,0,TAU);g.fill();
g.beginPath();g.arc(mx-2,my+11,2.4,0,TAU);g.fill();
g.strokeStyle='rgba(255,255,255,.35)';g.lineWidth=1;g.beginPath();g.arc(mx,my,21.5,-2.6,-.6);g.stroke();
skyCl();skyBt();
mtns();
LY.forEach((L,li)=>{
const S=WG[li],Q=TS[li],cp=new Path2D(),pt=new Path2D(),pf=new Path2D(),pr=new Path2D();
g.fillStyle=S.a;g.beginPath();g.moveTo(0,VH);
for(let x=0;x<=VW+12;x+=12){const y=hill(L,x+cam*L.f);g.lineTo(x,y);if(x)cp.lineTo(x,y);else cp.moveTo(x,y)}
g.lineTo(VW+12,VH);g.fill();
g.strokeStyle='rgba(176,192,240,'+(.2-li*.04)+')';g.lineWidth=1.2;g.stroke(cp);
for(let i=M.floor(cam*L.f/Q.st)-1;i<(cam*L.f+VW)/Q.st+1;i++){
if(hs(i+li*50+3)<.28)continue;
const wx=i*Q.st+hs(i+li)*Q.st*.5,x=wx-cam*L.f,by=hill(L,wx)+2,r=hs(i+li*31+57),V=r<.3?TV[0]:r<.5?TV[1]:r<.68?TV[2]:r<.88?TV[3]:0,h=Q.h0+hs(i+7)*Q.hv;
if(!V){
const e=h*.6;
for(const o of[[-.5,.1,.55,.42],[.45,.12,.5,.4],[0,.42,.6,.5]]){
const cx=x+o[0]*e,cy=by-o[1]*e,rx=o[2]*e,ry=o[3]*e;
pf.moveTo(cx+rx,cy);pf.ellipse(cx,cy,rx,ry,0,0,TAU);
pr.moveTo(cx+M.cos(-2.5)*rx,cy+M.sin(-2.5)*ry);pr.ellipse(cx,cy,rx,ry,0,-2.5,-.5);
}
continue;
}
const H=h*V.k,w=H*V.w,th=H*.2,tw=M.max(1.4,w*.22);
pt.rect(x-tw/2,by-th-2,tw,th+4);
for(let k=0;k<V.n;k++){
const yy=by-th-H*k*V.s,ww=w*(1-k*V.c),ox=V==TV[3]?(hs(i+k*9+li)-.5)*w*.22:0;
pf.moveTo(x-ww,yy);pf.lineTo(x+ox,yy-H*V.t);pf.lineTo(x+ww,yy);
pr.moveTo(x+ox,yy-H*V.t);pr.lineTo(x+ww,yy);
}
}
g.fillStyle=Q.tc;g.fill(pt);
g.fillStyle=Q.c;g.fill(pf);
g.strokeStyle=Q.rim;g.lineWidth=.8;g.stroke(pr);
g.fillStyle=S.f;g.fillRect(0,S.fy,VW,GY+4-S.fy);
g.fillStyle=S.m;g.fillRect(0,S.my,VW,S.mh);
});
g.fillStyle=WS.fg;g.fillRect(0,GY-130,VW,130);
rain();
}
const TRS=560;
function tpr(a,r0,r1){
for(let s=0;s<=14;s++){
const t=s/14,q=a.map(p=>[p[0],p[1]]);
for(let k=q.length-1;k>0;k--)for(let j=0;j<k;j++){q[j][0]+=(q[j+1][0]-q[j][0])*t;q[j][1]+=(q[j+1][1]-q[j][1])*t}
const r=r0+(r1-r0)*t;
g.moveTo(q[0][0]+r,q[0][1]);g.arc(q[0][0],q[0][1],r,0,TAU);
}
}
function monk(px,py,sd,i){
const S=1.2,ph=T*2.1+i,sw=.16*M.sin(ph)+.04*M.sin(T*3.7+i),tl=M.sin(T*2.2+i)*4,lg=M.sin(ph-.9)*3,hd=.14*M.sin(T*1.3+i*2)+.06*M.sin(T*3.1),br=.28*M.sin(T*2.6),ax=12.8+M.sin(T*2.3+i)*.8,ay=27.2+M.sin(T*1.9+i*2)*.9;
const body=()=>{
g.beginPath();
tpr([[0,0],[-1.6,8.5],[1.2,17]],1.5,2.6);
tpr([[0,-.3],[0,-.2]],2.2,2.2);
tpr([[-1.5,1.4],[-1.6,2]],1,1);
tpr([[1.6,1.6],[1.7,2.2]],1,1);
tpr([[2.4,20.5],[3.2,27],[1,34.5]],5.4+br,3.7+br*.5);
g.save();g.translate(3,18);g.rotate(hd);g.translate(-3,-18);
tpr([[3,17],[2.6,20]],3.6,4.6);
tpr([[3.6,15.2],[3.6,15.3]],4.7,4.7);
g.moveTo(10.5,16.6);g.ellipse(7.6,16.6,2.9,2.3,0,0,TAU);
tpr([[.8,14],[.8,14.1]],1.9,1.9);
tpr([[3.4,10.6],[3.4,10.7]],1.5,1.5);
tpr([[5.2,10.9],[5.2,11]],1.2,1.2);
g.restore();
tpr([[4.4,20],[(4.4+ax)/2+1.1,(20+ay)/2-1.8],[ax,ay]],2.5,1.6);
tpr([[ax,ay+.4],[ax,ay+.5]],1.9,1.9);
tpr([[1,34],[-2.4+lg*.6,40.5],[-1.2+lg,48]],3,1.4);
tpr([[-1.2+lg,48],[2.2+lg,50.4]],1.5,1);
tpr([[2.2,34],[5.4-lg*.6,40],[3.6-lg,47]],3,1.4);
tpr([[3.6-lg,47],[7-lg,49]],1.5,1);
tpr([[0,33.5],[-8+tl*.5,33+tl*.2],[-13+tl*.3,40+tl*.6],[-11.5+tl*.4,46.5]],1.9,1.3);
tpr([[-11.5+tl*.4,46.5],[-10.4+tl*.6,50],[-6.8,51.6+tl*.2],[-5.6-tl*.3,48.6-tl*.3]],1.3,1);
g.fill();
};
g.save();g.translate(px,py);g.rotate(sw);g.scale(sd*S,S);
g.save();g.translate(.8*sd,-.8);g.fillStyle='rgba(150,172,230,.3)';body();g.restore();
g.fillStyle='#05080f';body();
g.save();g.translate(3,18);g.rotate(hd);g.translate(-3,-18);
g.fillStyle='rgba(236,240,255,.9)';g.beginPath();g.ellipse(5.7,14.2,.75,.75*((T+i*1.7)%4.2<.14?.12:1),0,0,TAU);g.fill();
g.restore();
g.restore();
const lx=sd*S*ax,ly=S*ay,wx=px+lx*M.cos(sw)-ly*M.sin(sw),wy=py+lx*M.sin(sw)+ly*M.cos(sw),bs=sw*.5+.18*M.sin(ph-1.1);
g.save();g.translate(wx,wy);g.rotate(bs);
g.strokeStyle='rgba(14,20,36,.95)';g.lineWidth=1;g.beginPath();g.moveTo(0,0);g.lineTo(-12,32);g.moveTo(0,0);g.lineTo(48,32);g.stroke();
g.fillStyle='#0b1120';g.beginPath();g.rect(-22,32,80,26);g.fill();
g.strokeStyle='rgba(140,166,222,.32)';g.lineWidth=.8;g.stroke();
g.font='700 6.4px system-ui,sans-serif';g.textBaseline='middle';g.textAlign='left';
const tx='WANGSAF GAMING',tw=g.measureText(tx).width,x0=18-(17+tw)/2;
g.globalAlpha=.5;g.fillStyle='#ff1e1e';
g.beginPath();g.moveTo(x0+3,40.5);g.lineTo(x0+10,40.5);g.arcTo(x0+13,40.5,x0+13,43.5,3);g.lineTo(x0+13,47.5);g.arcTo(x0+13,50.5,x0+10,50.5,3);g.lineTo(x0+3,50.5);g.arcTo(x0,50.5,x0,47.5,3);g.lineTo(x0,43.5);g.arcTo(x0,40.5,x0+3,40.5,3);g.closePath();g.fill();
g.fillStyle='#ffffff';g.beginPath();g.moveTo(x0+5.2,43.3);g.lineTo(x0+9,45.5);g.lineTo(x0+5.2,47.7);g.closePath();g.fill();
g.globalAlpha=1;g.fillStyle='rgba(216,224,250,.92)';g.fillText(tx,x0+17,45.7);
g.restore();
}
function trunks(){
for(let i=M.floor((cam-200)/TRS);i<(cam+VW+200)/TRS+1;i++){
if(hs(i*1.7+11)<.28&&i%5)continue;
const x=i*TRS+hs(i+13)*300,bw=12+hs(i+17)*10,tw=bw*.7,fl=bw*.55,bn=(hs(i+19)-.5)*16;
g.save();g.translate(x-bw*3.4,GY+11);g.scale(bw*7,9);g.globalAlpha=.6;g.fillStyle=SHG;g.beginPath();g.arc(0,0,1,0,TAU);g.fill();g.restore();
g.save();g.translate(x,GY+3);g.scale(bw*2,4.5);g.globalAlpha=.75;g.fillStyle=SHG;g.beginPath();g.arc(0,0,1,0,TAU);g.fill();g.restore();
g.globalAlpha=1;
const tg=g.createLinearGradient(x-bw,0,x+bw,0);
tg.addColorStop(0,'#060a14');tg.addColorStop(.5,'#0d1424');tg.addColorStop(.82,'#18233b');tg.addColorStop(1,'#2a3a5c');
g.fillStyle=tg;g.beginPath();
g.moveTo(x-bw-fl,GY+9);g.quadraticCurveTo(x-bw,GY+2,x-bw*.92,GY-22);
g.quadraticCurveTo(x-bw*.85+bn,GY*.45,x-tw,-30);
g.lineTo(x+tw,-30);
g.quadraticCurveTo(x+bw*.85+bn,GY*.45,x+bw*.92,GY-22);
g.quadraticCurveTo(x+bw,GY+2,x+bw+fl,GY+9);
g.closePath();g.fill();
g.lineCap='round';g.lineJoin='round';
g.strokeStyle='rgba(3,6,14,.5)';g.lineWidth=1;
g.beginPath();
for(let k=0;k<4;k++){
const ox=(-.62+k*.42)*bw+(hs(i+40+k)-.5)*3;
g.moveTo(x+ox,GY+2);g.quadraticCurveTo(x+ox+bn*.9,GY*.45,x+ox*.7+bn*.4,-20);
}
g.stroke();
g.fillStyle='rgba(3,6,14,.4)';
for(let k=0;k<7;k++){
const yy=GY-30-hs(i+50+k)*GY*.8;
g.fillRect(x-bw*.7+hs(i+60+k)*bw*1.1+bn*(1-yy/GY)*.5,yy,2+hs(i+70+k)*5,1);
}
g.strokeStyle='rgba(140,166,222,.32)';g.lineWidth=1.3;
g.beginPath();g.moveTo(x+bw*.92,GY-22);g.quadraticCurveTo(x+bw*.85+bn,GY*.45,x+tw,-30);g.stroke();
const ky=GY*(.55+hs(i+80)*.25);
g.fillStyle='rgba(3,6,14,.55)';g.beginPath();g.ellipse(x-bw*.15+bn*.2,ky,bw*.22,bw*.38,0,0,TAU);g.fill();
for(let k=0;k<2;k++){
const sd=(hs(i+90+k)<.5?-1:1),by=GY*(.52-k*.24)+hs(i+95+k)*20,len=34+hs(i+98+k)*36,bx=x+sd*tw*.85+bn*.4;
g.strokeStyle='#0a101e';g.lineWidth=bw*.3;
g.beginPath();g.moveTo(bx,by);g.quadraticCurveTo(bx+sd*len*.5,by-5,bx+sd*len,by-len*.5);g.stroke();
g.lineWidth=bw*.14;
g.beginPath();g.moveTo(bx+sd*len*.55,by-len*.27);g.lineTo(bx+sd*len*.8,by-len*.14);g.moveTo(bx+sd*len*.7,by-len*.36);g.lineTo(bx+sd*len*1.05,by-len*.62);g.stroke();
g.strokeStyle='rgba(150,176,230,.3)';g.lineWidth=.9;
g.beginPath();g.moveTo(bx,by-bw*.12);g.quadraticCurveTo(bx+sd*len*.5,by-5-bw*.12,bx+sd*len,by-len*.5-bw*.12);g.stroke();
g.fillStyle='#0e1528';
const tx=bx+sd*len,ty=by-len*.5;
g.beginPath();g.moveTo(tx,ty);g.lineTo(tx+sd*18,ty-4);g.lineTo(tx+sd*9,ty+8);g.moveTo(tx,ty);g.lineTo(tx+sd*8,ty-14);g.lineTo(tx+sd*2,ty+2);g.fill();
if(k==0&&!(i%5)){const q=.55,v=1-q;monk(v*v*bx+2*v*q*(bx+sd*len*.5)+q*q*(bx+sd*len),v*v*by+2*v*q*(by-5)+q*q*(by-len*.5)+bw*.15,sd,i)}
}
}
}
function splash(){
if(!RN)return;
const n=12+ST.gq*14,w=VW+120,sd=.38,hits=[];
g.save();g.lineWidth=1;g.lineCap='round';
g.strokeStyle='rgba(196,200,238,.2)';g.beginPath();
for(let i=0;i<n;i++){
const sp=520+hs(i+840)*260,fl=60+hs(i+870)*70,ft=fl/sp,pd=ft+sd+hs(i+880)*.5,tt=T+hs(i+890)*pd*7,c=M.floor(tt/pd),p=tt-c*pd;
const lx=hs(i+c*3.7+900)*w-60+cam,ly=GY+5+hs(i+c*2.9+910)*(VH-GY-12);
if(p<ft){
const yh=ly-fl+p*sp,xh=lx-(ly-yh)*.22,ln=14+hs(i+850)*16;
g.moveTo(xh-ln*.22,yh-ln);g.lineTo(xh,yh);
}else if(p<ft+sd)hits.push([lx,ly,(p-ft)/sd,i,c]);
}
g.stroke();
for(const h of hits){
const x=h[0],y=h[1],a=h[2],i=h[3],c=h[4],f=1-a,t=a*sd;
g.strokeStyle='rgba(196,204,244,'+(.34*f).toFixed(3)+')';
g.beginPath();g.ellipse(x,y,2+a*10,.8+a*3,0,0,TAU);g.stroke();
g.fillStyle='rgba(214,220,250,'+(.55*f).toFixed(3)+')';
for(let k=0;k<3;k++){
const vx=(hs(i+c*1.3+k*5+920)-.5)*50,vy=60+hs(i+c*1.7+k*5+930)*50;
g.fillRect(x+vx*t-.6,y-(vy*t-210*t*t)-.6,1.3,1.3);
}
}
g.restore();
}
function ground(){
if(ST.bg==1){grAr();return}
if(ST.bg==2){grDk();return}
if(ST.bg==3){grGu();return}
if(ST.bg==4){grSn();return}
if(ST.bg==5){grVk();return}
g.fillStyle=gGr;g.fillRect(cam-40,GY,VW+80,VH-GY+40);
g.fillStyle=WS.gh;g.fillRect(cam-40,GY,VW+80,70);
const mw=VW+200,mx=((VW*.78-cam*.02)%mw+mw)%mw-100,ph=VH-GY;
g.save();g.translate(cam+mx,GY+ph*.28);g.scale(VW*.42,ph*.62);g.fillStyle=MPG;g.beginPath();g.arc(0,0,1,0,TAU);g.fill();g.restore();
g.fillStyle='rgba(176,202,240,.3)';g.fillRect(cam-40,GY,VW+80,1);
g.fillStyle='rgba(0,2,8,.3)';g.fillRect(cam-40,GY+1,VW+80,2);
for(let i=M.floor(cam/60);i<(cam+VW)/60+1;i++){
const x=i*60+hs(i)*50,y=GY+6+hs(i+7)*(VH-GY-10),r=3+hs(i+3)*6;
g.fillStyle='rgba(2,5,12,.22)';g.beginPath();g.ellipse(x-1.5,y+1,r,r*.3,0,0,TAU);g.fill();
g.fillStyle='rgba(126,152,196,.14)';g.beginPath();g.ellipse(x,y,r,r*.28,0,0,TAU);g.fill();
}
splash();trunks();
}
const FF=[];
for(let i=0;i<10;i++)FF.push({x:hs(i)*1000,y:hs(i+40),s:.6+hs(i+80),ph:hs(i+120)*TAU});
function fireflies(){
if(ST.gq<2)return;
for(const f of FF){
const x=(((f.x-cam*.8+M.sin(T*.5*f.s+f.ph)*30)%VW)+VW)%VW,y=GY-20-f.y*190+M.cos(T*.7*f.s+f.ph*1.3)*20;
const a=.25+.75*M.pow(M.sin(T*f.s*1.4+f.ph),2);
gl('g',x,y,8,a*.55);
g.fillStyle='rgba(230,250,220,'+a*.9+')';g.fillRect(x-.6,y-.6,1.2,1.2);
}
}

function fxGr(){
if(ST.gq<2)return;
const u=p.ut>0;
if(!u&&FXA.sa<=0)return;
const ec=AE[evl()].c;
g.save();g.translate(p.x,GY+2);g.scale(1,.22);g.globalCompositeOperation='lighter';g.lineCap='round';
if(u){
const ak=M.min(1,(UD-p.ut)*4)*M.min(1,p.ut*2.5);
g.rotate(T*1.2);
g.strokeStyle='rgba('+ec+','+.85*ak+')';g.lineWidth=5;
g.beginPath();g.arc(0,0,92,0,TAU);g.stroke();
g.lineWidth=3;g.setLineDash([16,12]);
g.beginPath();g.arc(0,0,66,0,TAU);g.stroke();
g.setLineDash([]);
g.strokeStyle='rgba(255,250,235,'+.6*ak+')';g.lineWidth=2.4;
g.beginPath();
for(let t=0;t<2;t++)for(let i=0;i<=3;i++){const a=(i%3)*TAU/3+t*PI/3-PI/2,x=M.cos(a)*88,y=M.sin(a)*88;if(i==0)g.moveTo(x,y);else g.lineTo(x,y)}
g.stroke();
}else{
const sk=FXA.sa/.5;
g.strokeStyle='rgba('+ec+','+M.min(1,sk*1.2)*.8+')';g.lineWidth=4;
g.beginPath();g.arc(0,0,30+(1-sk)*70,0,TAU);g.stroke();
g.lineWidth=2.4;
g.beginPath();g.arc(0,0,16+(1-sk)*42,0,TAU);g.stroke();
}
g.restore();
if(u&&!SPC&&evl()==4)fxSky();
if(u&&!SPC&&evl()==5)nSky();
}
function fxTop(){
if(ST.gq<2)return;
const e=AE[evl()];
if(p.ut>0){
const ak=M.min(1,(UD-p.ut)*4)*M.min(1,p.ut*2.5);
gl(e.k,p.x,p.y-30,84+M.sin(T*12)*8,.55*ak);
for(let i=0;i<5;i++){const a=T*5+i*TAU/5;gl(e.k,p.x+M.cos(a)*40,p.y-30+M.sin(a)*40,11,.85*ak)}
}
if(FXA.sa>0)gl(e.k,p.x+p.f*26,p.y-45,56*(.5+FXA.sa),FXA.sa*1.8);
}

const DS=[],DD=7,SLP=[[2.6,.3,'230,40,60'],[1.2,.75,'255,96,108'],[.4,1,'255,250,244']];
let JC=1,JS=0,JK=1,JX=0,JY=0,JA=1;
const domK=()=>p.dn>0?M.min(1,(DD-p.dn)*2.2)*M.min(1,p.dn*1.6):0;
function domGo(){
p.dc=0;p.dn=DD;p.dsp=0;p.dht=0;p.dz=0;p.dr=0;p.ch=0;p.pc=0;p.cd=.5;p.rc=1;
DS.length=0;shake=12;FXA.fl=.6;FXA.fc='215,40,60';
ring(p.x,p.y-30,'215,60,80',100);ring(p.x,p.y-30,'255,255,255',60);ring(p.x,GY-4,'215,50,70',260);
sp(1,p.x,p.y-30,0,0,.6,200,'r');
}
function domSl(){
const b=M.random()<.2,r=M.random();
DS.push({x:rnd(cam-40,cam+VW+40),y:rnd(GY*.05,GY),an:r<.15?rnd(-.14,.14):(M.random()<.5?-1:1)*rnd(.35,1.25),ln:b?rnd(220,420):rnd(70,200),l:b?.42:.26,m:b?.42:.26,w:b?rnd(5,9):rnd(1.4,3)});
}
function domHit(){
const dm=M.max(1,gDm())*gUd(),ad=AE[evl()].d;
for(const e of E){
if(e.dd||e.x<cam-60||e.x>cam+VW+60)continue;
hurtE(e,9*ad*dm+e.mh*.004,M.random()<.5?1:-1);
if(DS.length<130)DS.push({x:e.x+rnd(-14,14),y:e.y-rnd(8,56)*e.sz,an:rnd(-1.3,1.3)+(M.random()<.5?0:PI),ln:rnd(60,130)*M.max(1,e.sz*.6),l:.22,m:.22,w:rnd(2,4)});
}
}
function domFin(){
const dm=M.max(1,gDm())*gUd(),ad=AE[evl()].d;
for(const e of E){
if(e.dd||e.x<cam-80||e.x>cam+VW+80)continue;
hurtE(e,40*ad*dm+e.mh*.16,M.random()<.5?1:-1);
sp(1,e.x,e.y-30*e.sz,0,0,.3,90,'r');
}
for(let i=0;i<7;i++)DS.push({x:cam+VW*(.1+i*.13)+rnd(-30,30),y:rnd(GY*.2,GY*.85),an:(i&1?-1:1)*rnd(.5,1.1),ln:rnd(300,560),l:.55,m:.55,w:rnd(9,15)});
shake=16;FXA.fl=.8;FXA.fc='255,150,160';
ring(p.x,p.y-30,'255,90,110',200);ring(p.x,GY-4,'255,255,255',320);
}
function domTk(dt){
p.dn-=dt;
const te=DD-p.dn;
p.inv=M.max(p.inv,.2);
for(const e of E){if(!e.dd&&!e.boss){e.wu=0;e.cd=M.max(e.cd,.5)}}
if(te<.9)shake=M.max(shake,5*(1-te/.9));
if(te>.9&&p.dn>.9){
p.dsp-=dt;
while(p.dsp<=0){p.dsp+=.05;if(DS.length<130){domSl();domSl()}}
p.dht-=dt;
if(p.dht<=0){p.dht+=.1;domHit()}
shake=M.max(shake,2.2);
}
if(!p.dz&&p.dn<=.9){p.dz=1;domFin()}
if(M.random()<dt*30)sp(5,rnd(cam,cam+VW),GY-2,rnd(-10,10),rnd(-120,-40),rnd(.6,1.2),1.8,'255,90,100',0,.6);
if(p.dn<=0){p.dn=0;ring(p.x,GY-4,'255,255,255',300)}
}
function domUp(dt){
const B=inp('m');
if(p.dl<0)p.dl=WV.k;
if(p.dn<=0)p.dc=M.min(1,p.dc+dt/120+M.max(0,WV.k-p.dl)*.008);
if(B&&!SPC&&!p.dw&&p.dn<=0&&p.dc>=1&&p.ut<=0&&!p.go&&!p.dead)domGo();
p.dl=WV.k;p.dw=B;
if(p.dn>0)domTk(dt);
for(let i=DS.length-1;i>=0;i--){DS[i].l-=dt;if(DS[i].l<=0)DS.splice(i,1)}
}
function jq(X,Y,Z){
const x=X*JC-Z*JS,z=X*JS+Z*JC,y=Y*.99+z*.14,d=z*.99-Y*.14,f=900/(900+d);
return[x*f*JK+JX,JY-y*f*JK,d];
}
function jf(L,pts,c,em){
const q=[],R=[];let dz=0;
for(const P of pts){
const x=P[0]*JC-P[2]*JS,z=P[0]*JS+P[2]*JC,y=P[1]*.99+z*.14,d=z*.99-P[1]*.14,f=900/(900+d);
R.push([x,P[1],z]);q.push(x*f*JK+JX,JY-y*f*JK);dz+=d;
}
const a=R[0],b=R[1],c2=R[2],ux=b[0]-a[0],uy=b[1]-a[1],uz=b[2]-a[2],vx=c2[0]-a[0],vy=c2[1]-a[1],vz=c2[2]-a[2],nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx,nl=M.hypot(nx,ny,nz)||1;
L.push({q,d:dz/pts.length,c,lm:em?1:.32+.68*M.abs((nx*-.4+ny*.62+nz*-.68)/nl)});
}
function jd(L,ed){
L.sort((a,b)=>b.d-a.d);
g.globalAlpha=JA;g.lineJoin='round';
for(const f of L){
const c=f.c,m=f.lm;
g.fillStyle='rgb('+(c[0]*m|0)+','+(c[1]*m|0)+','+(c[2]*m|0)+')';
g.beginPath();g.moveTo(f.q[0],f.q[1]);
for(let i=2;i<f.q.length;i+=2)g.lineTo(f.q[i],f.q[i+1]);
g.closePath();g.fill();
if(ed){g.strokeStyle=ed;g.lineWidth=.9;g.stroke()}
}
L.length=0;
}
function jbox(L,x0,x1,y0,y1,z0,z1,c){
jf(L,[[x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0]],c);
jf(L,[[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]],c);
jf(L,[[x0,y0,z0],[x0,y0,z1],[x0,y1,z1],[x0,y1,z0]],c);
jf(L,[[x1,y0,z0],[x1,y0,z1],[x1,y1,z1],[x1,y1,z0]],c);
jf(L,[[x0,y1,z0],[x1,y1,z0],[x1,y1,z1],[x0,y1,z1]],c);
}
function jroof(L,y,rw,rd,tw,td,rh,lf,c,ct){
const y1=y+rh,A=[-rw,y+lf,-rd],B=[rw,y+lf,-rd],C=[rw,y+lf,rd],D=[-rw,y+lf,rd],a=[-tw,y1,-td],b=[tw,y1,-td],c2=[tw,y1,td],d=[-tw,y1,td];
jf(L,[A,a,b,B,[0,y,-rd]],c);
jf(L,[B,b,c2,C,[rw,y,0]],c);
jf(L,[C,c2,d,D,[0,y,rd]],c);
jf(L,[D,d,a,A,[-rw,y,0]],c);
jf(L,[a,b,c2,d],ct);
}
function jtap(L,C,W,N,c){
const n=C.length,Lf=[],Rg=[];
for(let i=0;i<n;i++){const o=N[i],w=W[i];Lf.push([C[i][0]-o[0]*w,C[i][1]-o[1]*w,C[i][2]-o[2]*w]);Rg.push([C[i][0]+o[0]*w,C[i][1]+o[1]*w,C[i][2]+o[2]*w])}
const pts=[Lf[0],Rg[0]];
for(let i=1;i<n;i++)pts.push(Rg[i]);
for(let i=n-2;i>=1;i--)pts.push(Lf[i]);
jf(L,pts,c);
}
function fxShrine(k,e){
const yw=M.sin(T*.5)*.5+.12;
JC=M.cos(yw);JS=M.sin(yw);JA=k;
JK=GY*.76/400;JX=VW*.5;JY=GY-8+(1-e)*440*JK;
const L=[],RB=[],RF=[],bone=[226,214,190],st='rgba(255,84,100,.55)',rc=[56,20,34],rt=[88,32,50];
for(let i=0;i<12;i++){
const a=i/12*TAU+.26,ca=M.cos(a),sa=M.sin(a),bx=250*ca,bz=175*sa,hh=150+(i%3)*34,C=[],W=[],N=[];
for(let j=0;j<5;j++){const s=j/4,r=1-.4*s*s;C.push([bx*r,14+hh*s,bz*r]);W.push(j<4?9*(1-s)+.3:0);N.push([-sa,0,ca])}
jtap(bx*JS+bz*JC<0?RF:RB,C,W,N,bone);
}
jd(RB,st);
jbox(L,-260,260,0,14,-190,190,[92,78,86]);jd(L,st);
jbox(L,-210,210,14,26,-150,150,[112,96,104]);jd(L,st);
jbox(L,-120,120,26,96,-90,90,[116,42,58]);jd(L,st);
jf(L,[[-34,26,-91],[34,26,-91],[34,80,-91],[-34,80,-91]],[8,1,4],1);jd(L,null);
for(let i=0;i<6;i++){const x=-34+i*11.34;jf(L,[[x,80,-92],[x+11.34,80,-92],[x+5.67,64,-92]],[236,228,206],1);jf(L,[[x,26,-92],[x+11.34,26,-92],[x+5.67,42,-92]],[236,228,206],1)}
jf(L,[[-88,64,-91.5],[-58,64,-91.5],[-58,76,-91.5],[-88,76,-91.5]],[255,60,84],1);
jf(L,[[58,64,-91.5],[88,64,-91.5],[88,76,-91.5],[58,76,-91.5]],[255,60,84],1);
jd(L,'rgba(60,0,10,.6)');
jroof(L,96,205,160,76,56,58,18,rc,rt);jd(L,st);
jbox(L,-62,62,154,208,-46,46,[120,46,60]);
jf(L,[[-20,170,-47.5],[20,170,-47.5],[20,190,-47.5],[-20,190,-47.5]],[255,70,90],1);jd(L,st);
jroof(L,208,132,98,46,32,46,15,rc,rt);jd(L,st);
jbox(L,-34,34,254,296,-26,26,[124,48,62]);
jf(L,[[-10,266,-27.5],[10,266,-27.5],[10,284,-27.5],[-10,284,-27.5]],[255,70,90],1);jd(L,st);
jroof(L,296,84,62,20,16,44,13,rc,rt);jd(L,st);
for(const sg of[-1,1]){
const C=[],W=[],N=[];
for(let j=0;j<6;j++){const s=j/5,dx=sg*50,dy=96*1.9*M.pow(s,.9),dl=M.hypot(dx,dy);C.push([sg*(12+50*s),340+96*M.pow(s,1.9),0]);W.push(8*(1-s));N.push([-dy/dl,dx/dl,0])}
jtap(L,C,W,N,bone);
}
jtap(L,[[0,340,0],[0,370,0],[0,420,0]],[7,4,0],[[1,0,0],[1,0,0],[1,0,0]],[255,96,110]);
jd(L,st);
for(const T2 of[[96,205,160,18],[208,132,98,15],[296,84,62,13]])for(const sx of[-1,1])for(const sz of[-1,1]){const q=jq(sx*T2[1],T2[0]+T2[3]+4,sz*T2[2]);gl('r',q[0],q[1],(22+T2[3])*JK*1.4,k*.8)}
const q=jq(0,54,-93);gl('r',q[0],q[1],110*JK,k*(.5+.2*M.sin(T*5)));
jd(RF,st);
}
function fxDomBg(){
const k=domK();
if(k<=0)return;
const te=DD-p.dn,ri=M.min(1,te/.9),e=1-M.pow(1-ri,3);
g.save();
let gr=g.createLinearGradient(0,0,0,GY);
gr.addColorStop(0,'#12020a');gr.addColorStop(.55,'#52091b');gr.addColorStop(1,'#a62335');
g.globalAlpha=k*.92;g.fillStyle=gr;g.fillRect(0,0,VW,VH);
const mr=M.min(VW*.28,GY*.34),mx=VW*.5,my=GY*.4+(1-e)*50;
gl('r',mx,my,mr*2.8,k*.6);
gr=g.createRadialGradient(mx-mr*.25,my-mr*.25,mr*.1,mx,my,mr);
gr.addColorStop(0,'#ffd6c8');gr.addColorStop(.55,'#ea4a5c');gr.addColorStop(1,'#8c1428');
g.globalAlpha=k;g.fillStyle=gr;g.beginPath();g.arc(mx,my,mr,0,TAU);g.fill();
g.fillStyle='rgba(90,10,24,.28)';
g.beginPath();g.arc(mx-mr*.35,my+mr*.2,mr*.16,0,TAU);g.fill();
g.beginPath();g.arc(mx+mr*.3,my-mr*.3,mr*.1,0,TAU);g.fill();
g.beginPath();g.arc(mx+mr*.38,my+mr*.34,mr*.2,0,TAU);g.fill();
g.globalCompositeOperation='lighter';
for(let i=0;i<46;i++){
const x=hs(i+500)*VW,y=((hs(i+520)*GY-T*(14+hs(i+540)*34))%GY+GY)%GY;
g.globalAlpha=k*(.2+.5*hs(i+560))*(.6+.4*M.sin(T*3+i));g.fillStyle='#ff6a78';g.fillRect(x+M.sin(T+i)*6,y,1.6,1.6);
}
g.globalCompositeOperation='source-over';g.globalAlpha=1;
fxShrine(k,e);
g.restore();
}
function fxDomGr(){
const k=domK();
if(k<=0)return;
const te=DD-p.dn;
g.save();
const gr=g.createLinearGradient(0,GY,0,VH);
gr.addColorStop(0,'rgba(170,24,42,'+.62*k+')');gr.addColorStop(1,'rgba(36,2,10,'+.8*k+')');
g.fillStyle=gr;g.fillRect(cam-40,GY,VW+80,VH-GY+40);
g.globalAlpha=k*.8;
for(let i=M.floor(cam/120)-1;i<(cam+VW)/120+1;i++){
if(hs(i+700)<.35)continue;
const x=i*120+hs(i+710)*70,y=GY+10+hs(i+720)*(VH-GY-26),r=4+hs(i+730)*4;
g.fillStyle='#d8ccb2';g.beginPath();g.ellipse(x,y,r,r*.85,0,0,TAU);g.fill();
g.fillRect(x-r*.55,y+r*.55,r*1.1,r*.6);
g.fillStyle='#2a0810';
g.beginPath();g.ellipse(x-r*.38,y-r*.05,r*.26,r*.32,0,0,TAU);g.fill();
g.beginPath();g.ellipse(x+r*.38,y-r*.05,r*.26,r*.32,0,0,TAU);g.fill();
}
g.globalAlpha=1;
g.translate(p.x,GY+3);g.scale(1,.2);g.globalCompositeOperation='lighter';g.lineCap='round';
const R=60+M.min(1,te*1.2)*300;
g.rotate(T*.5);
g.strokeStyle='rgba(255,70,90,'+.8*k+')';g.lineWidth=5;
g.beginPath();g.arc(0,0,R,0,TAU);g.stroke();
g.lineWidth=2.4;g.setLineDash([22,14]);
g.beginPath();g.arc(0,0,R*.82,0,TAU);g.stroke();g.setLineDash([]);
g.rotate(-T*1.2);
g.strokeStyle='rgba(255,220,210,'+.6*k+')';g.lineWidth=2.4;
g.beginPath();
for(let i=0;i<=5;i++){const a=((i*2)%5)*TAU/5-PI/2,x=M.cos(a)*R*.78,y=M.sin(a)*R*.78;if(i==0)g.moveTo(x,y);else g.lineTo(x,y)}
g.stroke();
g.restore();
}
function fxDomSl(){
if(!DS.length)return;
g.save();g.globalCompositeOperation='lighter';
for(const s of DS){
const k=s.l/s.m,u=M.min(1,(1-k)*7),Ln=s.ln*(.2+.8*u),c=M.cos(s.an),n=M.sin(s.an),w=s.w*(k<.5?k*2:1),x0=s.x-c*Ln,y0=s.y-n*Ln,x1=s.x+c*Ln,y1=s.y+n*Ln;
for(const q of SLP){
const ox=-n*w*q[0],oy=c*w*q[0];
g.fillStyle='rgba('+q[2]+','+q[1]*k+')';
g.beginPath();g.moveTo(x0,y0);g.lineTo(s.x+ox,s.y+oy);g.lineTo(x1,y1);g.lineTo(s.x-ox,s.y-oy);g.closePath();g.fill();
}
}
g.restore();
}
function fxDomTop(){
const k=domK();
if(k<=0)return;
const te=DD-p.dn;
const vg=g.createRadialGradient(VW/2,VH/2,VH*.32,VW/2,VH/2,M.max(VW,VH)*.75);
vg.addColorStop(0,'rgba(120,0,16,0)');vg.addColorStop(1,'rgba(30,0,8,'+.75*k+')');
g.fillStyle=vg;g.fillRect(0,0,VW,VH);
g.fillStyle='rgba(210,20,45,'+.09*k+')';g.fillRect(0,0,VW,VH);
const bh=VH*.075*k;
g.fillStyle='rgba(2,0,2,'+.9*k+')';g.fillRect(0,0,VW,bh);g.fillRect(0,VH-bh,VW,bh);
if(te>.1&&te<2){
const a=M.min(1,(te-.1)*4)*M.min(1,(2-te)*2.5),fs=M.round(M.min(40,VW*.07));
g.save();g.globalAlpha=a;g.textAlign='center';
g.font='700 '+fs+'px system-ui,sans-serif';
g.shadowColor='rgba(255,40,70,1)';g.shadowBlur=ST.gq<2?0:24;g.fillStyle='#ffeceb';
g.fillText('WANGSAF GAMING',VW/2,VH*.28);
g.shadowBlur=0;g.font='600 13px system-ui,sans-serif';g.fillStyle='rgba(255,170,180,.9)';
g.fillText('Wangsaf Gaming Yt',VW/2,VH*.28-fs-4);
g.restore();
}
}
