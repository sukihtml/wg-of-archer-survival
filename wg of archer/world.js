const SHG=(()=>{const r=g.createRadialGradient(0,0,0,0,0,1);r.addColorStop(0,'rgba(2,4,12,1)');r.addColorStop(.55,'rgba(2,4,12,.5)');r.addColorStop(1,'rgba(2,4,12,0)');return r})();
const MGS=(()=>{
const S=500,c=document.createElement('canvas');c.width=S;c.height=S;
const x=c.getContext('2d');
const f=(cx,cy,r,a)=>{
const q=x.createRadialGradient(cx,cy,0,cx,cy,r);
for(let i=0;i<=10;i++){const t=i/10;q.addColorStop(t,'rgba(190,204,246,'+(a*Math.exp(-t*t*2.6)*(1-t*t*t)).toFixed(3)+')')}
x.fillStyle=q;x.fillRect(0,0,S,S);
};
f(250,270,200,.12);f(250,250,130,.1);f(250,250,60,.13);f(250,250,28,.17);
const t=document.createElement('canvas');t.width=S;t.height=S;
const y=t.getContext('2d');y.filter='blur(6px)';y.drawImage(c,0,0);
return t;
})();
const MPG=(()=>{const r=g.createRadialGradient(0,0,0,0,0,1);r.addColorStop(0,'rgba(150,178,222,.22)');r.addColorStop(.6,'rgba(150,178,222,.08)');r.addColorStop(1,'rgba(150,178,222,0)');return r})();
function shd(x,w,a){
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
const MS=(()=>{
const c=document.createElement('canvas');c.width=512;c.height=64;
const x=c.getContext('2d');
for(let i=0;i<9;i++){
const px=hs(i+300)*512,py=24+hs(i+310)*16,rx=60+hs(i+320)*90,ry=8+hs(i+330)*8;
for(const o of[-512,0,512]){
x.save();x.translate(px+o,py);x.scale(rx,ry);
const r=x.createRadialGradient(0,0,0,0,0,1);
r.addColorStop(0,'rgba(208,198,240,.5)');r.addColorStop(1,'rgba(208,198,240,0)');
x.fillStyle=r;x.beginPath();x.arc(0,0,1,0,TAU);x.fill();x.restore();
}
}
return c;
})();
const CLD=(()=>{
const W=2048,H=240,c=document.createElement('canvas');c.width=W;c.height=H;
const x=c.getContext('2d');
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
const t=document.createElement('canvas');t.width=W*3;t.height=H;
const y=t.getContext('2d');y.filter='blur(5px)';
for(let k=0;k<3;k++)y.drawImage(c,k*W,0);
const o=document.createElement('canvas');o.width=W;o.height=H;
o.getContext('2d').drawImage(t,-W,0);
return o;
})();
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
if(!RN)return;
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
function bg(){
wsRs();
g.fillStyle=WS.sk;g.fillRect(0,0,VW,VH);
g.fillStyle='#e4eaff';
for(let i=0;i<60;i++){
const x=((hs(i)*VW*1.4-cam*.02)%VW+VW)%VW,y=hs(i+99)*GY*.58,z=hs(i+3)>.88?1.7:1;
g.globalAlpha=(.2+.55*M.abs(M.sin(T*(.5+hs(i+5))+i)))*(1-y/(GY*.7));g.fillRect(x,y,z,z);
}
g.globalAlpha=1;
const mw=VW+200,mx=((VW*.78-cam*.02)%mw+mw)%mw-100,my=GY*.26;
g.drawImage(MGS,mx-500,my-500,1000,1000);
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
for(const f of FF){
const x=(((f.x-cam*.8+M.sin(T*.5*f.s+f.ph)*30)%VW)+VW)%VW,y=GY-20-f.y*190+M.cos(T*.7*f.s+f.ph*1.3)*20;
const a=.25+.75*M.pow(M.sin(T*f.s*1.4+f.ph),2);
gl('g',x,y,8,a*.55);
g.fillStyle='rgba(230,250,220,'+a*.9+')';g.fillRect(x-.6,y-.6,1.2,1.2);
}
}

function fxGr(){
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
g.shadowColor='rgba(255,40,70,1)';g.shadowBlur=24;g.fillStyle='#ffeceb';
g.fillText('WANGSAF GAMING',VW/2,VH*.28);
g.shadowBlur=0;g.font='600 13px system-ui,sans-serif';g.fillStyle='rgba(255,170,180,.9)';
g.fillText('Wangsaf Gaming Yt',VW/2,VH*.28-fs-4);
g.restore();
}
}
