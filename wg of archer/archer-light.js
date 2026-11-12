const alS={t:0,on:0,rl:0,pj:[],dl:[],fx:0,rg:'255,44,66',u:0,tu:0,ns:0,nm:0,fl2:0,bl:[],cl:[],cs:0,o2:0,t2:0,c2:0,sp2:0,n2:0,rn:[]};
const AS2=9;
const alCd=GX.make(128,128,x=>{
const q=x.createRadialGradient(64,64,0,64,64,64);
q.addColorStop(0,'rgba(16,9,22,.95)');q.addColorStop(.55,'rgba(14,8,19,.6)');q.addColorStop(1,'rgba(10,6,14,0)');
x.fillStyle=q;x.fillRect(0,0,128,128);
}),alCl=GX.make(128,128,x=>{
const q=x.createRadialGradient(64,64,0,64,64,64);
q.addColorStop(0,'rgba(255,100,120,.55)');q.addColorStop(.6,'rgba(255,60,80,.18)');q.addColorStop(1,'rgba(255,44,66,0)');
x.fillStyle=q;x.fillRect(0,0,128,128);
});
const alK=['#14060c','#0e0a13','#160f1c','#2a1220','#a3172e','#d93a50','#430a15','#080609'];
const alBt=[],alBB='#2a1233',alBS='#0d0614',alBR='#c42a42',alBF='#5a2442';
let alLo=null;
const alLy=GX.layer(),alLg=alLy.c;
function alLyOn(){
if(ST.gq<2){alLo=null;return}
const c=g.canvas;
alLy.size(c.width,c.height);alLy.clear();alLg.rs();
alLg.setTransform(g.getTransform());
alLo=g;g=alLg;
}
function alLyOff(){
if(!alLo)return;
g=alLo;
const a=g.globalAlpha;
g.save();g.setTransform(1,0,0,1,0,0);g.globalCompositeOperation='source-over';g.globalAlpha=a*.8;g.drawImage(alLy,0,0);g.restore();
}
function alBat(s,a,fl){
const f=M.sin(fl),f1=M.sin(fl-.5),f2=M.sin(fl-.35),f3=M.sin(fl-.2),f4=M.sin(fl-.1),w=new Path2D(),tp=[[10.6,-2.6-5.4*f1],[9.4,.9-3.6*f2],[6.8,2.6-2.4*f3],[3.8,3.2-1.2*f4]],wx=5.2,wy=-3.6-2.4*f,xs=1-.26*M.max(0,f);
w.moveTo(1,-1);w.lineTo(wx,wy);w.lineTo(tp[0][0],tp[0][1]);
for(let i=1;i<tp.length;i++){const q=tp[i-1],r=tp[i];w.quadraticCurveTo(lr(q[0],r[0],.5)-1.1,lr(q[1],r[1],.5)-.5,r[0],r[1])}
w.quadraticCurveTo(2.2,2.4,1,2.2);w.closePath();
g.save();g.rotate(a);g.scale(s,s);g.translate(0,f*.8);g.lineJoin='round';g.lineCap='round';
for(let m=0;m<2;m++){
g.save();g.scale(m?-xs:xs,1);
g.save();g.clip(w);g.fillStyle=alBS;g.fill(w);g.translate(0,-.8);g.fillStyle=alBB;g.fill(w);g.restore();
g.strokeStyle=alBF;g.lineWidth=.14;g.beginPath();
for(let i=0;i<tp.length;i++){g.moveTo(wx,wy);g.lineTo(tp[i][0]*.93,tp[i][1]*.93)}
g.stroke();
g.strokeStyle=alK[0];g.lineWidth=.34;g.stroke(w);
g.strokeStyle=alBR;g.lineWidth=.17;g.beginPath();g.moveTo(1,-1);g.lineTo(wx,wy);g.lineTo(tp[0][0],tp[0][1]);g.stroke();
g.restore();
}
const tw=M.sin(fl*.5)*.3;
poly([-1.2,-1.4,-1.7+tw,-4.2,-.2,-2.4],alBB,alK[0],.3);
poly([1.2,-1.4,1.7+tw*.6,-4.2,.2,-2.4],alBB,alK[0],.3);
ov(0,.4,1.7,2.6,alK[0]);
ov(0,.4,1.3,2.2,alBB);
ov(.45,1,.85,1.2,alBS);
const er=.36+.06*M.sin(fl*.7);ov(-.55,-.7,er,er,'#ff6a7e');ov(.55,-.7,er,er,'#ff6a7e');
g.restore();
}
function alBatOrb(ph,k){
const n=k?8:6,R=k?1.5:1;
g.save();
for(let j=0;j<2;j++){
if(j&&!k){g.save();g.translate(M.sin(ph*3.1)*3,M.sin(ph*4.3)*3);alBat(1.9,M.sin(ph*2.2)*.12,ph*17);g.restore()}
for(let i=0;i<n;i++){
const t=ph*(2.4+i*.3)+i*TAU/n+M.sin(ph*1.9+i*2)*.5;
if((M.sin(t)<0)==(j==0)){g.save();g.translate(M.cos(t)*(27+5*M.sin(ph*1.7+i*2))*R,(M.sin(t)*(13+3*M.sin(ph*2.3+i))+M.sin(ph*9+i)*2)*R);alBat(k?1.1:.95,M.cos(t)*.35+M.sin(ph*6+i)*.12,ph*(24+i*2)+i*1.7);g.restore()}
}
}
g.restore();
}
function alBurst(x,y,n,v){
for(let i=0;i<n&&alBt.length<60;i++){const a=rnd(0,TAU),u=rnd(.4,1),l=rnd(.8,1.4);alBt.push({x:x+M.cos(a)*10,y:y+M.sin(a)*10,vx:M.cos(a)*v*u,vy:M.sin(a)*v*u-30,l,m:l,s:rnd(.55,.95),fl:rnd(0,TAU),fs:rnd(26,34),w:rnd(0,TAU)})}
}
const alW=()=>-(2.2+M.sin(T*1.7)*1.2)-M.max(-1,M.min(1,p.vx*p.f/190))*7+p.wd*p.f*2;
function alPose(){
const c=alS.cs*.9;
if(alS.u){
const t=alS.tu,u=M.min(1,t/.5),e=u*u*(3-2*u),r=t>3.9?M.max(0,1-(t-3.9)/.5):1,k=e*r;
return{up:k,th:c,lf:16*k+M.sin(t*7)*2*k,sw:(M.sin(t*17)*.45+M.sin(t*29)*.15)*k};
}
if(alS.o2){
const t=alS.t2,u=M.min(1,t/.4),e=u*u*(3-2*u),r=t>1.5?M.max(0,1-(t-1.5)/.35):1,k=e*r;
return{up:k,th:c,lf:14*k+M.sin(t*9)*1.6*k,sw:M.sin(t*13)*.4*k};
}
const t=alS.on?alS.t:-1;
if(t<0)return{up:0,th:c,lf:0,sw:0};
if(t<.45){const u=t/.45,e=u*u*(3-2*u);return{up:e,th:c,lf:e*9,sw:0}}
const s=M.min(1,(t-.45)/.55),v=M.min(1,(t-.45)/.16),e=v*v*(3-2*v);
return{up:1-e,th:M.max(c,e*(1-s*s)),lf:9*(1-s),sw:0};
}
function orb6(ph,vs,tl){
const a=vs===undefined?1:vs,fl=.85+.15*M.sin(ph*11)+.06*M.sin(ph*23);
g.save();g.globalAlpha*=a;
g.globalCompositeOperation='lighter';
if(tl){
const tg=g.createLinearGradient(0,0,-78,0);tg.addColorStop(0,'rgba(255,110,125,'+.6*fl+')');tg.addColorStop(.4,'rgba(255,50,70,.22)');tg.addColorStop(1,'rgba(255,44,66,0)');
g.fillStyle=tg;g.beginPath();g.moveTo(0,-10);g.quadraticCurveTo(-34,-5,-78,0);g.quadraticCurveTo(-34,5,0,10);g.closePath();g.fill();
}
let q=g.createRadialGradient(0,0,0,0,0,48);
q.addColorStop(0,'rgba(255,120,135,'+.55*fl+')');q.addColorStop(.18,'rgba(255,60,80,'+.3*fl+')');q.addColorStop(.45,'rgba(255,44,66,'+.1*fl+')');q.addColorStop(1,'rgba(255,44,66,0)');
g.fillStyle=q;g.beginPath();g.arc(0,0,48,0,TAU);g.fill();
for(let r=0;r<2;r++){
const L=r?24:46,sx=g.createLinearGradient(-L,0,L,0);
sx.addColorStop(0,'rgba(255,60,80,0)');sx.addColorStop(.5,'rgba(255,175,188,'+(r?.35:.55)*fl+')');sx.addColorStop(1,'rgba(255,60,80,0)');
g.save();g.rotate(r*PI/2);g.fillStyle=sx;g.fillRect(-L,-.9,L*2,1.8);g.restore();
}
q=g.createRadialGradient(0,0,0,0,0,13);
q.addColorStop(0,'rgba(255,255,255,1)');q.addColorStop(.3,'rgba(255,228,233,.95)');q.addColorStop(.62,'rgba(255,90,110,.75)');q.addColorStop(1,'rgba(216,31,56,0)');
g.fillStyle=q;g.beginPath();g.arc(0,0,13,0,TAU);g.fill();
g.strokeStyle='rgba(255,236,240,'+.6*fl+')';g.lineWidth=.8;
for(let i=0;i<3;i++){const s=ph*7+i*2.09;g.beginPath();g.arc(0,0,5+i*1.7,s,s+1.3);g.stroke()}
g.lineWidth=.6;g.strokeStyle='rgba(255,200,208,'+.5*fl+')';
for(let r=0;r<2;r++){g.beginPath();g.ellipse(0,0,19,8,ph*2+r*1.57,0,TAU);g.stroke()}
for(let i=0;i<4;i++){
const t=ph*6+i*TAU/4,x=M.cos(t)*19,y=M.sin(t)*10.5;
g.strokeStyle='rgba(255,150,165,.5)';g.lineWidth=1;g.beginPath();g.moveTo(x,y);g.lineTo(M.cos(t-.5)*19,M.sin(t-.5)*10.5);g.stroke();
g.fillStyle='rgba(255,215,222,.95)';g.beginPath();g.arc(x,y,1.5,0,TAU);g.fill();
}
g.restore();
}
function alTr(a){
const e=AE[6];
sp(3,a.x-a.vx*.012,a.y+rnd(-6,6),-a.vx*.06+rnd(-40,40),rnd(-50,50),rnd(.25,.55),rnd(1.4,2.6),e.s,0,2);
if(M.random()<.5)sp(1,a.x-a.vx*.02,a.y+rnd(-4,4),0,0,.3,rnd(18,30),e.k);
}
function alHit(x,y){
const e=AE[6];
ring(x,y,e.c,34);ring(x,y,e.s,20);
sp(1,x,y,0,0,.28,96,e.k);
for(let i=0;i<14;i++){const a=rnd(0,TAU),v=rnd(100,360);sp(3,x,y,M.cos(a)*v,M.sin(a)*v,rnd(.2,.45),rnd(1.5,2.6),e.s,200,2)}
shake=M.max(shake,2.2);
}
function alStaff(hx,hy,bt,ad){
const s=M.sin(bt),c=M.cos(bt),tx=hx+s*34,ty=hy-c*34,bx=hx-s*32,by=hy+c*32;
g.lineCap='round';g.lineJoin='round';
sl(bx,by,tx,ty,alK[0],3.8);sl(bx,by,tx,ty,alK[2],2.4);
sl(bx+.6,by,tx+.6,ty,alBR,.6);
for(let i=1;i<5;i++){const u=i/5,x=lr(bx,tx,u),y=lr(by,ty,u);sl(x-1.5,y+.5,x+1.5,y-.5,alK[4],.9)}
ov(bx,by,2,1.6,alK[4]);
g.save();g.translate(tx,ty);g.rotate(bt);
g.strokeStyle=alK[0];g.lineWidth=2.6;g.beginPath();g.moveTo(-1.6,-1);g.quadraticCurveTo(-6.2,-6,-3.2,-13);g.moveTo(1.6,-1);g.quadraticCurveTo(6.2,-6,3.2,-13);g.stroke();
g.strokeStyle=alK[4];g.lineWidth=1;g.stroke();
poly([0,-21,3.9,-13.6,1.4,-8.4,-1.4,-8.4,-3.9,-13.6],alK[4],alK[0],.8);
poly([0,-18.4,1.7,-13.6,0,-10.4,-1.7,-13.6],alK[5]);
g.restore();
}
function alDraw(part){
alLyOn();
const sx=1+p.sq*.55,sy=1-p.sq*.55+p.air*M.min(.1,M.abs(p.vy)/6000);
const sn=M.min(1,M.abs(p.vx)/190),ph=p.wk,id=M.sin(T*1.9),da=M.max(0,p.da||0),ce=p.ch||0,w=alW(),pz=alPose();
const th0=M.sin(ph)*.4*sn,T1=lr(th0,.2,p.air)+.02*(1-sn),T2=lr(-th0,-.16,p.air)-.02*(1-sn);
const LL=29,hipY=-LL*M.cos(M.min(M.abs(T1),M.abs(T2))),B=hipY+LL+id*.3;
const leg=(th,hx)=>{
const fx=hx+M.sin(th)*LL,fy=hipY+M.cos(th)*LL;
g.lineCap='round';g.lineJoin='round';
sl(hx,hipY,fx,fy,alK[0],5.4);
sl(hx+1.3,hipY+4,fx+1.1,fy,alBR,.8);
poly([fx-2.9,fy-8,fx+2.8,fy-8,fx+3.2,fy-2.4,fx+7.6,fy-.8,fx+7.4,fy+.8,fx-3.4,fy+.8],alK[1],alK[0],.8);
sl(fx-3.3,fy+.5,fx+7.3,fy+.5,alK[4],.9);
sl(fx-2.9,fy-7.4,fx+2.9,fy-7.4,alK[4],1);
};
const fx0=10+M.sin(ph)*2*sn,fy0=-34+B;
let FX=lr(lr(fx0,15.6-p.rc*2.4,da),6,pz.up),FY=lr(lr(fy0,-45+B,da),-71+B,pz.up);
FX=lr(FX,23,pz.th);FY=lr(FY,-52+B,pz.th);
let bt=lr(lr(.05+M.sin(ph)*.06*sn,.02,da),.22,pz.up);bt=lr(bt,1.2,pz.th)+pz.sw;
const nkx=lr(9,0,ce);
let BX=lr(lr(-3.2-M.sin(ph)*2.4*sn,nkx,da),-5,pz.up),BY=lr(lr(-28+B,-45+B,da),-67+B,pz.up);
BX=lr(BX,-6,pz.th);BY=lr(BY,-40+B,pz.th);
const arm=(sx0,sy0,tx,ty,s)=>{
const r=ik(sx0,sy0,tx,ty,12.2,11.4,s),ex=r[0],ey=r[1],hx=r[2],hy=r[3];
const dx=hx-ex,dy=hy-ey,d=M.hypot(dx,dy)||1,nx=-dy/d,ny=dx/d;
sl(sx0,sy0,ex,ey,alK[0],6.4);sl(sx0,sy0,ex,ey,alK[2],4.8);
poly([ex+nx*2.6,ey+ny*2.6,hx+nx*3.9,hy+ny*3.9,hx-nx*3.9,hy-ny*3.9,ex-nx*2.6,ey-ny*2.6],alK[2],alK[0],.9);
sl(ex+nx*2.4,ey+ny*2.4,hx+nx*3.7,hy+ny*3.7,alBR,.7);
poly([hx+nx*3.9,hy+ny*3.9,hx-nx*3.9,hy-ny*3.9,hx-nx*2+w*.55,hy-ny*2+8+M.sin(T*4.1)*1.3,hx+nx*2+w*.3,hy+ny*2+6],alK[1],alK[4],.7);
sl(hx+nx*3.9,hy+ny*3.9,hx-nx*3.9,hy-ny*3.9,alK[4],1.1);
ov(hx+.4,hy+.9,2.2,2.4,alK[0]);
return[hx,hy];
};
g.save();g.translate(p.x,p.y);g.scale(p.f*sx,sy);g.translate(0,-pz.lf);
if(part==0){
g.save();g.translate(0,-26+B);
if(wgT()==1&&p.wa>.01)evWn(p.wa,p.wp);
if(wgT()==2)ev5W();
g.restore();
const lf=pz.up*5;
const gr=g.createLinearGradient(-17+w*2,0,-3,0);gr.addColorStop(0,'#3a0a17');gr.addColorStop(.34,'#3a0a17');gr.addColorStop(.4,'#240812');gr.addColorStop(.68,'#240812');gr.addColorStop(.74,'#12070d');gr.addColorStop(1,'#12070d');
g.beginPath();g.moveTo(-3.6,-46.5+B);g.quadraticCurveTo(-6.6,-30,-6,-20);
const bp=[[-11,-9],[-6.6,-11.4],[-12,-8.2],[-5.6,-10.6],[-10,-9.6]];
for(let i=0;i<bp.length;i++)g.lineTo(bp[i][0]+w*(2.5-i*.35)+M.sin(T*3.1+i*1.4)*1.2-pz.up*i*.8,bp[i][1]-lf+M.sin(T*4.3+i)*1.2);
g.lineTo(-3,-12);g.closePath();g.fillStyle=gr;g.fill();
g.strokeStyle=alBR;g.lineWidth=.7;g.stroke();
leg(T2,-1.6);
if(da>.02||pz.up>.02||pz.th>.02){const h=arm(-1.6,-47.5+B,BX,BY,BY<-55?-1:1)}
else arm(-1.6,-47.5+B,BX,BY,1);
const nx=-1.8,ny=-50+B;
upSf(DT,p.x+p.f*sx*nx,p.y-pz.lf+sy*ny);
}else{
leg(T1,1.6);
const hem=[];
for(let i=0;i<=6;i++){const u=i/6;hem.push([lr(-8.4+w*1.35+T2*6,8.4+w*.3+T1*6,u)+(u-.5)*pz.up*9+M.sin(T*3.4+i)*.7,-6.6+(i&1?1.9:0)+M.sin(T*4.4+i*1.2)*(1.1+sn*.9)-pz.up*(2+3*M.sin(u*PI))])}
g.beginPath();g.moveTo(-4.6,-47.5+B);
g.quadraticCurveTo(-5.4,-40+B,-4.1,-34+B);
g.quadraticCurveTo(-5.6+w*.3,-20,hem[0][0],hem[0][1]);
for(let i=1;i<=6;i++)g.lineTo(hem[i][0],hem[i][1]);
g.quadraticCurveTo(5.8,-20,4.4,-34+B);
g.quadraticCurveTo(5.4,-41+B,4.6,-47.5+B);
g.closePath();
const rg=g.createLinearGradient(-9,0,9,0);rg.addColorStop(0,'#0a0610');rg.addColorStop(.4,'#0a0610');rg.addColorStop(.46,alK[2]);rg.addColorStop(.74,alK[2]);rg.addColorStop(.8,alK[3]);rg.addColorStop(1,alK[3]);
g.fillStyle=rg;g.fill();g.strokeStyle=alK[0];g.lineWidth=1;g.stroke();
g.strokeStyle=alBR;g.lineWidth=.9;g.beginPath();g.moveTo(4.6,-47.5+B);g.quadraticCurveTo(5.4,-41+B,4.4,-34+B);g.quadraticCurveTo(5.8,-20,hem[6][0],hem[6][1]);g.stroke();
g.strokeStyle='rgba(0,0,0,.45)';g.lineWidth=.8;g.beginPath();
for(const i of[1,3,5]){g.moveTo(lr(-3.6,3.8,i/6),-33+B);g.lineTo(hem[i][0],hem[i][1])}
g.stroke();
poly([-4.5,-36+B,4.6,-36+B,4.5,-32.8+B,-4.3,-32.8+B],alK[6],alK[0],.8);
poly([2,-37+B,3.6,-34.4+B,2,-31.8+B,.4,-34.4+B],alK[5],alK[0],.5);
const ga=.65+.3*M.sin(T*3);
g.strokeStyle='rgba(196,42,66,'+ga+')';g.lineWidth=1;g.beginPath();g.moveTo(2.6,-9);g.lineTo(2.6,-29+B);g.stroke();
poly([2.6,-31.4+B,.6,-27.6+B,4.6,-27.6+B],'rgba(196,42,66,'+ga+')');
g.strokeStyle='rgba(196,42,66,'+ga+')';g.lineWidth=.8;g.beginPath();g.moveTo(2.6,-10);g.lineTo(.8,-12.6);g.moveTo(2.6,-10);g.lineTo(4.4,-12.6);g.stroke();
poly([-5.6,-48+B,-2.6,-53.4+B,4.4,-49.6+B,3.4,-47+B],alK[1],alBR,.7);
const hx=1.7+sn*.5,hy=-58+B,hw=M.max(-9,w);
sl(0,-48+B,hx-.4,hy+5,alK[0],3.6);
ov(hx,hy+.4,5.2,5.7,alK[7]);
g.strokeStyle=alBR;g.lineWidth=.7;g.beginPath();g.ellipse(hx,hy+.4,5.2,5.7,0,-1.1,1.1);g.stroke();
const eh=p.bl<0?.25:1.5;
ov(hx+3,hy+.9,2.1,eh*.62,alK[5],-.2);ov(hx+.4,hy+1.1,1.5,eh*.5,'#c42a42',-.1);
const tipX=hx-5.5+hw*1.4+M.sin(T*3.3)*1.2,tipY=hy-27+M.sin(T*2.6)*.8;
g.beginPath();g.moveTo(hx-6.8,hy-4.4);g.quadraticCurveTo(hx-7.4,hy-16,tipX,tipY);g.quadraticCurveTo(hx+2.5,hy-17,hx+5.8,hy-4.4);g.closePath();
const hg=g.createLinearGradient(hx-8,0,hx+6,0);hg.addColorStop(0,'#0a0610');hg.addColorStop(.45,'#0a0610');hg.addColorStop(.51,alK[1]);hg.addColorStop(.8,alK[1]);hg.addColorStop(.86,alK[3]);hg.addColorStop(1,alK[3]);
g.fillStyle=hg;g.fill();g.strokeStyle=alK[0];g.lineWidth=.8;g.stroke();
g.strokeStyle=alBR;g.lineWidth=.8;g.beginPath();g.moveTo(hx+5.8,hy-4.4);g.quadraticCurveTo(hx+2.5,hy-17,lr(hx+3,tipX,.7),lr(hy-14,tipY,.7));g.stroke();
g.strokeStyle='#4a2236';g.lineWidth=1.5;g.beginPath();g.moveTo(hx-3.2,hy-8.6);g.quadraticCurveTo(hx-.2,hy-11.2,hx+2.6,hy-8.9);g.stroke();
ov(hx-.6,hy-3.9,11.8,2.7,alK[0],-.06);
g.strokeStyle=alBR;g.lineWidth=.8;g.beginPath();g.ellipse(hx-.6,hy-3.9,11.8,2.7,-.06,.15,PI-.15);g.stroke();
poly([hx-6.9,hy-5.6,hx+5.9,hy-5.6,hx+6.1,hy-3.4,hx-7.1,hy-3.4],alK[6],alK[0],.6);
poly([hx+3.6,hy-7.1,hx+5.4,hy-4.5,hx+3.6,hy-2.2,hx+1.8,hy-4.5],alK[4],alK[0],.6);
alStaff(FX,FY,bt,da+pz.th*.8+pz.up*.6);
const fh=arm(3.2,-47.5+B,FX,FY,FY<-55?-1:1);
const oc=M.max(pz.up*.9,pz.th);
if(oc>.04){const ox=FX+M.sin(bt)*58,oy=FY-M.cos(bt)*58,z=.35+oc*.65;g.save();g.translate(ox,oy);g.scale(z,z);if(alS.on||alS.o2||alS.u){orb6(T);if(!alS.u)alBatOrb(T,1)}else alBatOrb(T);g.restore()}
}
g.restore();
alLyOff();
}
function alSkill(){
if(alS.on||alS.o2||alS.u)return;
alS.on=1;alS.t=0;alS.rl=0;
p.kc=SKC;p.dr=0;p.ch=0;p.pc=0;p.cd=1.2;
ring(p.x,GY-4,alS.rg,70);ring(p.x,GY-4,alS.rg,44);
ban('Skill: Bola Cahaya Merah');alBurst(p.x,p.y-30,16,260);
}
function alFire(){
const f=p.f,x0=p.x+f*52,y0=p.y-60;
alS.pj.push({x:x0,y:y0,vx:f*1500,l:0,hit:[],f,dm:300*gDm()*gUd()});
shake=M.max(shake,11);FXA.fl=.35;FXA.fc=alS.rg;
ring(x0,y0,alS.rg,100);ring(x0,y0,alS.rg,60);sp(1,x0,y0,0,0,.3,110,'r');
for(let i=0;i<26;i++){const a=rnd(-.7,.7),v=rnd(160,520);sp(3,x0,y0,f*M.cos(a)*v,M.sin(a)*v,rnd(.25,.5),rnd(1.6,2.6),alS.rg,200,2)}
p.vx-=f*170;alBurst(x0,y0,12,380);
}
function alUpd(dt){
if(inMenu||p.vt!=6||SPC){alS.on=0;alS.o2=0;alS.u=0;alS.cs=0;alS.pj.length=0;alS.dl.length=0;alS.rn.length=0;alS.bl.length=0;alBt.length=0;return}
if(p.dead){alS.on=0;alS.o2=0;alS.u=0}
if(dt<=0)return;
alS.cs=M.max(0,alS.cs-dt*4);alS.c2=M.max(0,alS.c2-dt);
if(alS.on){
alS.t+=dt;p.dr=0;p.ch=0;p.cd=M.max(p.cd,.2);p.vx*=M.exp(-dt*9);
if(alS.t<.45){
const u=alS.t/.45;
for(let k=0;k<2;k++){const a=rnd(0,TAU),r=rnd(24,50)*(1-u*.4);sp(5,p.x+M.cos(a)*r,GY-rnd(0,6),M.cos(a)*-rnd(10,30),-rnd(70,150),rnd(.4,.7),rnd(1.4,2.4),alS.rg,0,0)}
}
if(!alS.rl&&alS.t>=.45){alS.rl=1;alFire()}
if(alS.t>=1)alS.on=0;
}
if(alS.o2){
alS.t2+=dt;p.dr=0;p.ch=0;p.cd=M.max(p.cd,.2);p.vx*=M.exp(-dt*9);
if(alS.t2<.4){
const u=alS.t2/.4;
for(let k=0;k<2;k++){const a=rnd(0,TAU),r=rnd(26,56)*(1-u*.4);sp(5,p.x+M.cos(a)*r,GY-rnd(0,6),M.cos(a)*-rnd(10,30),-rnd(80,170),rnd(.4,.7),rnd(1.4,2.4),alS.rg,0,0)}
}else if(alS.n2<6){
alS.sp2-=dt;
if(alS.sp2<=0){
alS.sp2=.13;
const x=p.x+p.f*(120+alS.n2*80);
alS.rn.push({x,y:p.y-380,vy:500,dm:200*gDm()*gUd()});
ring(x,p.y-380,alS.rg,40);
alS.n2++;
}
}
if(alS.t2>=1.85)alS.o2=0;
}
for(let i=alS.rn.length-1;i>=0;i--){
const q=alS.rn[i];q.vy+=900*dt;q.y+=q.vy*dt;
sp(3,q.x+rnd(-6,6),q.y-rnd(0,50),rnd(-30,30),-rnd(40,120),rnd(.25,.5),rnd(1.5,3),alS.rg,0,2);
sp(1,q.x,q.y,0,0,.16,50,'r');
if(q.y>=GY-14){
ring(q.x,GY-6,alS.rg,96);ring(q.x,GY-6,alS.rg,60);sp(1,q.x,GY-20,0,0,.3,110,'r');shake=M.max(shake,5);
for(let k=0;k<14;k++){const a=rnd(PI,TAU),v=rnd(120,380);sp(3,q.x,GY-10,M.cos(a)*v,M.sin(a)*v,rnd(.25,.5),rnd(1.6,2.6),alS.rg,300,2)}
for(const e of E){if(e.dd)continue;if(M.abs(e.x-q.x)<70+14*e.sz)hurtE(e,q.dm,e.x<q.x?-1:1)}
alS.rn.splice(i,1);
}
}
if(alS.u){
alS.tu+=dt;p.dr=0;p.ch=0;p.cd=M.max(p.cd,.2);p.vx*=M.exp(-dt*9);
alS.fl2=M.max(0,alS.fl2-dt*5);
const t=alS.tu;
shake=M.max(shake,t<.8?1+t*4:t<3.8?4.5+M.sin(t*38)*1.5:M.max(0,(4.4-t)*3));
if(t<.8){for(let k=0;k<3;k++){const a=rnd(0,TAU),r=rnd(30,80)*(1-t*.5);sp(5,p.x+M.cos(a)*r,GY-rnd(0,8),M.cos(a)*-rnd(10,40),-rnd(90,200),rnd(.5,.9),rnd(1.4,2.6),alS.rg,0,0)}}
if(t>.3)sp(5,p.x+p.f*28+rnd(-8,8),p.y-132+rnd(-8,8),rnd(-40,40),rnd(-90,-20),rnd(.3,.6),rnd(1.4,2.4),alS.rg,0,0);
if(t>=.8&&t<3.8){
alS.ns-=dt;
while(alS.ns<=0){alS.ns+=.07;alStrike(0)}
alS.nm-=dt;
if(alS.nm<=0){alS.nm=.5;alStrike(1)}
}
if(t>=4.4)alS.u=0;
}
for(let i=alS.bl.length-1;i>=0;i--){const b=alS.bl[i];b.t-=dt;if(b.t<=0)alS.bl.splice(i,1)}
for(let i=alS.pj.length-1;i>=0;i--){
const q=alS.pj[i];q.l+=dt;q.x+=q.vx*dt;
sp(3,q.x-q.f*rnd(0,90),q.y+rnd(-20,20),-q.f*rnd(20,120),rnd(-60,60),rnd(.25,.5),rnd(1.5,3),alS.rg,0,2);
sp(1,q.x,q.y,0,0,.16,56,'r');
for(const e of E){
if(e.dd||q.hit.includes(e))continue;
if(M.abs(q.x-e.x)<30+14*e.sz&&q.y+26>e.y-66*e.sz&&q.y-26<e.y+4){
q.hit.push(e);hurtE(e,q.dm,q.f);alS.dl.push({e,t:.32,dm:q.dm*.5,f:q.f});
ring(e.x,e.y-30*e.sz,alS.rg,48);shake=M.max(shake,5);
for(let k=0;k<8;k++)sp(3,e.x,e.y-30*e.sz,rnd(-220,220),rnd(-220,120),rnd(.2,.45),rnd(1.5,2.6),alS.rg,300,2);
}
}
if(q.l>.95||M.abs(q.x-p.x)>2200){ring(q.x,q.y,alS.rg,70);alS.pj.splice(i,1)}
}
for(let i=alS.dl.length-1;i>=0;i--){
const d=alS.dl[i];d.t-=dt;
if(d.t<=0){
if(!d.e.dd){hurtE(d.e,d.dm,d.f);const x=d.e.x,y=d.e.y-30*d.e.sz;ring(x,y,alS.rg,64);sp(1,x,y,0,0,.25,80,'r');shake=M.max(shake,3);for(let k=0;k<12;k++){const a=rnd(0,TAU),v=rnd(80,300);sp(3,x,y,M.cos(a)*v,M.sin(a)*v,rnd(.2,.45),rnd(1.5,2.6),alS.rg,200,2)}}
alS.dl.splice(i,1);
}
}
alS.fx-=dt;
if(alS.fx<=0&&!p.dead){
const sk=alS.on||alS.o2||alS.u;alS.fx=sk?.05:.08;
if(alBt.length<(sk?48:30)){const l=rnd(.9,1.5);alBt.push({x:p.x+rnd(-14,14),y:p.y-rnd(10,52),vx:rnd(-20,20)+p.wd*p.f*8,vy:rnd(-42,-14),l,m:l,s:rnd(.5,.85),fl:rnd(0,TAU),fs:rnd(26,34),w:rnd(0,TAU)})}
if(M.abs(p.vx)>45&&alBt.length<(sk?48:30)){const l=rnd(.6,1);alBt.push({x:p.x-p.f*rnd(6,14),y:p.y-rnd(8,40),vx:-p.f*rnd(40,80),vy:rnd(-20,4),l,m:l,s:rnd(.5,.8),fl:rnd(0,TAU),fs:rnd(28,36),w:rnd(0,TAU)})}
}
for(let i=alBt.length-1;i>=0;i--){const b=alBt[i];b.l-=dt;if(b.l<=0){alBt.splice(i,1);continue}b.x+=(b.vx+M.sin(T*5+b.w)*14)*dt;b.y+=(b.vy+M.sin(T*7+b.w)*18)*dt;b.fl+=b.fs*dt}
}
function alShot(){
const d=p.f,ox=p.x+d*54,oy=p.y-56,s=1000*gUs(),e=AE[6];
for(let n=0,m=M.random()<gUm()?2:1;n<m;n++){const b=n?(M.random()<.5?-.06:.06):0;
A.push({x:ox,y:oy,vx:d*M.cos(b)*s,vy:M.sin(b)*s,tr:[],st:0,l:0,c:.5,an:d>0?b:PI-b,dm:50*gDm()*gUd(),pr:e.pr,hit:[],ev:6,ob:1})}
p.cd=.5;p.rc=1;alS.cs=1;shake=M.max(shake,1.2);
ring(ox,oy,e.c,38);ring(ox,oy,e.s,22);sp(1,ox,oy,0,0,.24,100,e.k);
for(let i=0;i<12;i++){const b=rnd(-.6,.6);sp(3,ox,oy,d*M.cos(b)*rnd(120,320)+d*50,M.sin(b)*rnd(120,260),rnd(.2,.4),2,e.c,500,2)}
}
function alSk2(){
if(alS.c2>0||alS.on||alS.o2||alS.u||p.dead)return;
alS.o2=1;alS.t2=0;alS.c2=AS2;alS.sp2=0;alS.n2=0;
p.dr=0;p.ch=0;p.pc=0;p.cd=1.6;
ring(p.x,GY-4,alS.rg,80);ring(p.x,GY-4,alS.rg,50);
ban('Skill: Hujan Bola Cahaya');alBurst(p.x,p.y-30,18,300);
}
function alUlt(){
if(alS.on||alS.o2||alS.u||p.dead)return;
alS.u=1;alS.tu=0;alS.ns=0;alS.nm=.6;alS.fl2=0;alS.bl.length=0;alS.cl.length=0;
for(let i=0;i<38;i++)alS.cl.push({x:rnd(-80,VW+80),y:rnd(8,104),r:rnd(70,150),d:rnd(0,TAU),s:rnd(.4,1)});
p.uc=0;p.ut=UD;p.dr=0;p.ch=0;p.pc=0;p.cd=.5;p.rc=1;shake=10;
ring(p.x,GY-4,alS.rg,240);ring(p.x,GY-4,alS.rg,160);ring(p.x,GY-4,alS.rg,90);
FXA.fl=.35;FXA.fc=alS.rg;
ban('Ultimate: Badai Petir Cahaya');alBurst(p.x,p.y-30,30,420);
}
function alStrike(m){
let x;
const c=E.filter(e=>!e.dd&&e.x>cam-20&&e.x<cam+VW+20);
if(c.length&&M.random()<(m?.9:.65))x=c[M.floor(M.random()*c.length)].x+rnd(-24,24);
else x=rnd(cam+40,cam+VW-40);
const y0=rnd(70,110),pts=[[x+rnd(-50,50),y0]],n=M.floor((GY-y0)/26);
for(let i=1;i<=n;i++){const u=i/n;pts.push([lr(pts[0][0],x,u)+(i<n?rnd(-20,20)*(1-u*.5):0),lr(y0,GY,u)])}
const fk=[];
for(let i=2;i<n-1;i++)if(M.random()<(m?.35:.16)){
const d=M.random()<.5?-1:1,q=[pts[i]];
for(let k=1;k<=4;k++)q.push([q[k-1][0]+d*rnd(10,26),q[k-1][1]+rnd(14,30)]);
fk.push(q);
}
alS.bl.push({p:pts,k:fk,t:m?.34:.22,m:m?.34:.22,w:m?2.6:1.4});
const r=m?110:70,dm=(m?220:110)*gDm()*gUd();
for(const e of E){if(e.dd)continue;if(M.abs(e.x-x)<r*.6+12*e.sz)hurtE(e,dm,e.x<x?-1:1)}
ring(x,GY-4,alS.rg,r);if(m)ring(x,GY-4,'255,200,208',r*.6);
sp(1,x,GY-14,0,0,.3,m?150:90,'r');
for(let k=0;k<(m?18:9);k++){const a=rnd(PI,TAU),v=rnd(120,420);sp(3,x,GY-8,M.cos(a)*v,M.sin(a)*v,rnd(.2,.5),rnd(1.4,2.6),alS.rg,400,2)}
shake=M.max(shake,m?9:3);alS.fl2=M.min(1,alS.fl2+(m?.9:.35));
if(m){FXA.fl=.22;FXA.fc='255,200,208';alBurst(x,GY-30,6,260)}
}
function alUlDraw(){
if(!alS.u&&!alS.bl.length)return;
const t=alS.tu,k=alS.u?M.min(1,t/.7)*(t>3.9?M.max(0,1-(t-3.9)/.5):1):0;
g.save();
if(k>0){
g.globalAlpha=.5*k;g.fillStyle='rgba(6,2,10,1)';g.fillRect(cam-10,0,VW+20,VH);
for(const c of alS.cl){
const x=cam+c.x+M.sin(T*.35*c.s+c.d)*26,y=c.y-(1-k)*140+M.sin(T*.5+c.d)*5,r=c.r*(.85+.15*M.sin(T*.7*c.s+c.d));
g.globalAlpha=k*.95;g.drawImage(alCd,x-r,y-r*.62,r*2,r*1.24);
if(alS.fl2>.02){g.globalCompositeOperation='lighter';g.globalAlpha=alS.fl2*.5*k;g.drawImage(alCl,x-r,y-r*.62,r*2,r*1.24);g.globalCompositeOperation='source-over'}
}
g.globalAlpha=1;
}
g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
for(const b of alS.bl){
const f=b.t/b.m,a=M.min(1,f*2.2)*(.75+.25*M.sin(T*90)),all=[b.p].concat(b.k);
for(const q of all){
const tr=()=>{g.beginPath();g.moveTo(q[0][0],q[0][1]);for(let i=1;i<q.length;i++)g.lineTo(q[i][0],q[i][1])},s=q===b.p?1:.55;
g.strokeStyle='rgba(255,50,70,'+.18*a+')';g.lineWidth=b.w*7*s;tr();g.stroke();
g.strokeStyle='rgba(255,120,135,'+.5*a+')';g.lineWidth=b.w*2.8*s;tr();g.stroke();
g.strokeStyle='rgba(255,245,246,'+a+')';g.lineWidth=b.w*s;tr();g.stroke();
}
const e=b.p[b.p.length-1],R=60*b.w/1.4,gg=g.createRadialGradient(e[0],e[1],0,e[0],e[1],R);
gg.addColorStop(0,'rgba(255,200,208,'+.7*a+')');gg.addColorStop(1,'rgba(255,44,66,0)');
g.fillStyle=gg;g.beginPath();g.arc(e[0],e[1],R,0,TAU);g.fill();
}
if(alS.u&&t>.3&&k>0){
const tx=p.x+p.f*28,ty=p.y-132;
g.strokeStyle='rgba(255,160,172,'+.55*k+')';g.lineWidth=1;g.beginPath();g.moveTo(tx,ty);
for(let i=1;i<=6;i++){const u=i/6;g.lineTo(lr(tx,tx+rnd(-30,30),u)+rnd(-7,7),lr(ty,90,u))}
g.stroke();
}
g.restore();
}
function alFx(){
if(ST.gq<2)return;
alUlDraw();
if((alS.on||alS.o2)&&!p.dead){
const k=alS.o2,tt=k?alS.t2:alS.t,u=M.min(1,tt/(k?.4:.45)),r=(k?24:20)+u*(k?36:30),a=k?(tt<1.5?1:M.max(0,1-(tt-1.5)/.35)):(tt<.95?1-M.max(0,(tt-.6)/.35):0);
g.save();g.translate(p.x,GY+1);g.scale(1,.22);g.globalCompositeOperation='lighter';g.rotate(T*1.6);
g.strokeStyle='rgba(255,50,70,'+.7*a+')';g.lineWidth=2.4;g.beginPath();g.arc(0,0,r,0,TAU);g.stroke();
g.lineWidth=1.1;g.beginPath();g.arc(0,0,r*.72,0,TAU);g.stroke();
for(let i=0;i<8;i++){g.save();g.rotate(i*TAU/8);g.translate(r*.86,0);g.rotate(-PI/2);poly([0,-7,3.4,1,0,-1,-3.4,1],'rgba(255,60,80,'+.8*a+')');g.restore()}
g.restore();
}
for(const q of alS.pj){
g.save();g.translate(q.x,q.y);g.scale(q.f*2,2);orb6(T,M.min(1,q.l*9),1);g.restore();
}
for(const q of alS.rn){
g.save();g.translate(q.x,q.y);
g.globalCompositeOperation='lighter';
g.rotate(PI/2);
g.scale(1.5,1.5);orb6(T+q.x*.01,1,1);g.restore();
}
for(const b of alBt){const u=b.l/b.m;g.save();g.globalAlpha=M.min(1,u*3,(1-u)*6);g.translate(b.x,b.y);alBat(b.s,M.max(-.5,M.min(.5,b.vx*.012))+M.sin(T*4+b.w)*.15,b.fl);g.restore()}
g.globalAlpha=1;
}
function gearAl(k){
return GX.make(64,64,x=>{
const A=['#3a1522','#1d1421','#0b0910','#ff4d60'];
x.lineJoin='round';x.lineCap='round';
const rg=x.createRadialGradient(32,32,2,32,32,31);rg.addColorStop(0,'#ff4d6099');rg.addColorStop(1,'#ff4d6000');
x.globalAlpha=.3;x.fillStyle=rg;x.fillRect(0,0,64,64);x.globalAlpha=1;
x.lineWidth=1.8;
if(k==0){
x.beginPath();x.moveTo(20,12);x.quadraticCurveTo(32,8,44,12);x.lineTo(48,30);x.quadraticCurveTo(50,46,53,58);x.lineTo(11,58);x.quadraticCurveTo(14,46,16,30);x.closePath();
const lg=x.createLinearGradient(12,0,52,0);lg.addColorStop(0,A[2]);lg.addColorStop(.55,A[1]);lg.addColorStop(1,A[0]);
x.fillStyle=lg;x.fill();x.strokeStyle='#07060b';x.stroke();
x.beginPath();x.moveTo(22,10);x.lineTo(26,17);x.lineTo(32,13);x.lineTo(38,17);x.lineTo(42,10);x.strokeStyle='#d81f38';x.lineWidth=2.2;x.stroke();
x.fillStyle='#5a0c1b';x.fillRect(17,32,30,5);x.strokeStyle='#07060b';x.lineWidth=1.2;x.strokeRect(17,32,30,5);
x.beginPath();x.moveTo(32,22);x.lineTo(36,28);x.lineTo(32,34);x.lineTo(28,28);x.closePath();x.fillStyle='#ff4d60';x.fill();x.stroke();
x.strokeStyle='#d81f38';x.lineWidth=1.6;x.beginPath();x.moveTo(32,40);x.lineTo(32,56);x.stroke();
x.beginPath();x.moveTo(32,38);x.lineTo(28,44);x.lineTo(36,44);x.closePath();x.fillStyle='#d81f38';x.fill();
}else{
x.save();x.translate(32,32);x.rotate(PI/4);
x.strokeStyle='#07060b';x.lineWidth=5;x.beginPath();x.moveTo(0,-14);x.lineTo(0,28);x.stroke();
x.strokeStyle='#1d1421';x.lineWidth=3;x.stroke();
x.strokeStyle='#d81f38';x.lineWidth=1.3;for(let i=0;i<3;i++){x.beginPath();x.moveTo(-2.4,10+i*5);x.lineTo(2.4,8+i*5);x.stroke()}
x.strokeStyle='#07060b';x.lineWidth=2.6;x.beginPath();x.moveTo(-2,-14);x.quadraticCurveTo(-8,-20,-4,-27);x.moveTo(2,-14);x.quadraticCurveTo(8,-20,4,-27);x.stroke();
x.strokeStyle='#d81f38';x.lineWidth=1.1;x.stroke();
x.beginPath();x.moveTo(0,-34);x.lineTo(4.4,-25);x.lineTo(1.6,-19);x.lineTo(-1.6,-19);x.lineTo(-4.4,-25);x.closePath();
x.fillStyle='#d81f38';x.fill();x.strokeStyle='#07060b';x.lineWidth=1.4;x.stroke();
x.fillStyle='#ff4d60';x.beginPath();x.moveTo(0,-31);x.lineTo(1.8,-25);x.lineTo(0,-21.5);x.lineTo(-1.8,-25);x.closePath();x.fill();
x.restore();
}
},2);
}
