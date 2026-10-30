const p={x:0,y:0,vx:0,vy:0,f:1,cv:0,on:1,wk:0,st:0,ch:0,pc:0,dr:0,da:0,sh:0,sf:0,rc:0,sq:0,cy:0,jb:0,cd:0,air:0,idle:0,mt:0,bl:3,wd:-1,wj:0,ws:0,hp:100,mh:100,hu:0,inv:0,dead:0,rg:0,kc:0,uc:0,ut:0,us:0,wq:0,we:0,vt:0,fy:0,wa:0,wp:0,go:0,gd:1,gf:0,gx:0,gc:0,gp:0,ga:0,dc:0,dn:0,dw:0,dsp:0,dht:0,dz:0,dl:-1};
p.y=GY;cam=-VW*.5;

const AE=[
{n:'wangsaf gaming yt',d:1,k:'a',c:'255,205,130',t:'255,200,120',s:'236,200,140',h:'#d9dfe8',f:'#8fb3a8',g:'#b9d1c8',pr:0},
{n:'@cwuhuy',d:1.35,k:'c',c:'150,195,225',t:'170,210,240',s:'190,220,245',h:'#eef4fb',f:'#9fc3e0',g:'#cfe4f5',pr:0},
{n:'ell sebelum before',d:1.8,k:'f',c:'255,140,80',t:'255,130,70',s:'255,180,110',h:'#ffb26b',f:'#e8683a',g:'#ffc090',pr:1},
{n:'ell sesudah after',d:2.4,k:'e',c:'190,170,245',t:'190,170,250',s:'220,205,255',h:'#e6dcff',f:'#a58de0',g:'#d8cdfa',pr:1},
{n:'sukixwg',d:3.2,k:'p',c:'255,236,170',t:'255,236,170',s:'255,246,205',h:'#fff6d2',f:'#f0cf7a',g:'#fff2c0',pr:2},
{n:'wg of suki',d:4.4,k:'s',c:'170,215,255',t:'170,215,255',s:'205,230,255',h:'#f2f8ff',f:'#7fb4ee',g:'#cfe6ff',pr:3}
];
const SKC=6,UD=2.8,GCD=80,GCH=.8,GFR=1.4;
const evl=()=>p.vt;
const GRM=[1,2,4,7,12,20],GRK=['','f','c','a','z','s'];
const GRN=[['','Zirah Perunggu','Zirah Perak','Zirah Gold','Zirah Obsidian','Zirah Bintang'],['','Pedang Perunggu','Pedang Perak','Pedang Gold','Pedang Obsidian','Pedang Bintang']];
const GRP=[0,
['#f0b87a','#b8733a','#6b3d17','#2e1a09','#ffd9a0'],
['#ffffff','#c3cedc','#74829a','#2c3544','#9fd0ff'],
['#fff3b0','#f2c94c','#a87810','#4d3504','#fff9d6'],
['#7a6a9e','#2c2438','#0c0911','#000000','#b47bff'],
['#f2f8ff','#9cc8f5','#3c6fb0','#10244a','#cfe6ff']];
const GQ={l:0,m:3.8,t:0};
const gDm=()=>GRM[p.vt];
function gearMk(k,t){
const o=document.createElement('canvas');o.width=o.height=64;
const x=o.getContext('2d'),m=GRP[t];
const lg=(a,b,c,d)=>{const q=x.createLinearGradient(a,b,c,d);q.addColorStop(0,m[0]);q.addColorStop(.45,m[1]);q.addColorStop(1,m[2]);return q};
x.lineJoin='round';x.lineCap='round';
const rg=x.createRadialGradient(32,32,2,32,32,31);
rg.addColorStop(0,m[4]);rg.addColorStop(1,m[4]+'00');
x.globalAlpha=.22;x.fillStyle=rg;x.fillRect(0,0,64,64);x.globalAlpha=1;
x.strokeStyle=m[3];x.lineWidth=1.8;
if(k==0){
for(const sd of[-1,1]){
x.save();x.translate(32+sd*19,21);x.rotate(sd*.35);
x.beginPath();x.ellipse(0,0,9.5,7,0,0,TAU);x.fillStyle=lg(-9,-7,9,7);x.fill();x.stroke();
x.strokeStyle=m[2];x.lineWidth=1;x.beginPath();x.ellipse(0,0,6,4,0,0,TAU);x.stroke();
x.restore();
}
x.beginPath();x.moveTo(19,13);x.quadraticCurveTo(32,8,45,13);x.lineTo(48,29);x.quadraticCurveTo(46,44,40,53);x.quadraticCurveTo(32,59,24,53);x.quadraticCurveTo(18,44,16,29);x.closePath();
x.fillStyle=lg(16,10,48,58);x.fill();x.stroke();
x.beginPath();x.moveTo(25,12.5);x.quadraticCurveTo(32,20,39,12.5);x.quadraticCurveTo(32,8.5,25,12.5);x.fillStyle=m[3];x.fill();
x.strokeStyle=m[2];x.lineWidth=1.4;
x.beginPath();x.moveTo(32,19);x.lineTo(32,32);x.stroke();
x.beginPath();x.moveTo(20,29);x.quadraticCurveTo(32,37,44,29);x.stroke();
x.beginPath();x.moveTo(22,45);x.quadraticCurveTo(32,50,42,45);x.stroke();
x.globalAlpha=.26;x.fillStyle='#ffffff';
x.beginPath();x.moveTo(21,16);x.quadraticCurveTo(26,14,30,15);x.lineTo(28,38);x.quadraticCurveTo(22,34,20,28);x.closePath();x.fill();
x.globalAlpha=1;
x.fillStyle=m[4];x.beginPath();x.moveTo(32,34);x.lineTo(35,38.5);x.lineTo(32,43);x.lineTo(29,38.5);x.closePath();x.fill();
x.strokeStyle=m[3];x.lineWidth=1;x.stroke();
}else{
x.translate(32,32);x.rotate(PI/4);
x.beginPath();x.moveTo(0,-30);x.lineTo(5,-22);x.lineTo(4.4,7);x.lineTo(-4.4,7);x.lineTo(-5,-22);x.closePath();
x.fillStyle=lg(-5,0,5,0);x.fill();x.stroke();
x.strokeStyle=m[2];x.lineWidth=1.3;x.beginPath();x.moveTo(0,-24);x.lineTo(0,3);x.stroke();
x.strokeStyle=m[4];x.globalAlpha=.7;x.lineWidth=1;x.beginPath();x.moveTo(-3,-19);x.lineTo(-2.8,4);x.stroke();x.globalAlpha=1;
x.fillStyle=t==4?'#17101f':'#2b1d12';x.fillRect(-2.4,9.5,4.8,12);
x.strokeStyle=m[3];x.lineWidth=1.2;x.strokeRect(-2.4,9.5,4.8,12);
x.strokeStyle=m[2];x.lineWidth=.9;
for(let i=0;i<3;i++){x.beginPath();x.moveTo(-2.4,12.5+i*3.5);x.lineTo(2.4,14+i*3.5);x.stroke()}
x.beginPath();x.moveTo(-13,5);x.quadraticCurveTo(0,2,13,5);x.lineTo(13,10);x.quadraticCurveTo(0,8,-13,10);x.closePath();
x.fillStyle=lg(-13,0,13,0);x.fill();x.strokeStyle=m[3];x.lineWidth=1.6;x.stroke();
x.beginPath();x.arc(0,25,3.6,0,TAU);x.fillStyle=lg(-3,22,3,28);x.fill();x.stroke();
x.fillStyle=m[4];x.beginPath();x.arc(0,7.2,1.8,0,TAU);x.fill();
}
return o;
}
const GRC=[[0],[0]];
for(let t=1;t<=5;t++){GRC[0][t]=gearMk(0,t);GRC[1][t]=gearMk(1,t)}
function gearUp(t){
p.mh=100*GRM[t];p.hp=p.mh;GQ.t=t;GQ.l=GQ.m;
}
function gearHud(x,y,w){
const t=p.vt;
if(t<1)return;
g.save();
g.textAlign='center';g.font='600 9px system-ui,sans-serif';
for(let i=0;i<2;i++){
const bx=x+w+34+i*46,by=y+12;
g.fillStyle='rgba(8,10,16,.55)';g.fillRect(bx-1,by-1,24,24);
g.strokeStyle='rgba(232,223,204,.3)';g.lineWidth=1;g.strokeRect(bx-.5,by-.5,23,23);
g.drawImage(GRC[i][t],bx,by,22,22);
g.fillStyle='rgba(228,234,248,.85)';
g.fillText((i?'DMG x':'HP x')+GRM[t],bx+11,by+33);
}
g.restore();
}
function gearPop(){
if(GQ.l<=0)return;
const t=GQ.t,k=M.max(0,M.min(1,GQ.l*2,(GQ.m-GQ.l)*4)),pp=1+.3*M.max(0,1-(GQ.m-GQ.l)*3);
g.save();g.textAlign='center';
for(let i=0;i<2;i++){
const cx=VW/2+(i?84:-84),cy=142,sz=56*pp;
gl(GRK[t],cx,cy,64,k*.5);
g.globalAlpha=k;
g.fillStyle='rgba(8,10,16,.6)';g.fillRect(cx-36,cy-36,72,72);
g.strokeStyle='rgba(232,223,204,.35)';g.lineWidth=1;g.strokeRect(cx-35.5,cy-35.5,71,71);
g.drawImage(GRC[i][t],cx-sz/2,cy-sz/2,sz,sz);
g.font='600 12px system-ui,sans-serif';g.fillStyle='#e8dfcc';g.fillText(GRN[i][t],cx,cy+54);
g.font='11px system-ui,sans-serif';g.fillStyle='rgba(232,223,204,.75)';g.fillText((i?'Damage x':'HP x')+GRM[t],cx,cy+69);
}
g.restore();
}

function aim(d,s,x0,y0,def){
let b=null,bd=1e9;
for(const e of E){
if(e.dd)continue;
const dx=(e.x-x0)*d;
if(dx<30||dx>760||dx>=bd)continue;
bd=dx;b=e;
}
if(!b)return def;
const ex=((b.x+b.vx*bd/s*.8)-x0)*d,ey=b.y-30*b.sz-y0;
if(ex<30)return def;
let a=M.atan2(ey,ex);
for(let i=0;i<3;i++){const t=ex/(s*M.max(.2,M.cos(a)));a=M.atan2(ey-215*t*t,ex)}
return M.max(-.62,M.min(.5,a));
}

function fire(){
const c=M.max(.18,p.ch),s=(480+c*760)*gUs(),d=p.f,a=aim(d,s,p.x+d*26,p.y-45,-.07-(1-c)*.04),ev=evl(),e=AE[ev];
for(let n=0,m=M.random()<gUm()?2:1;n<m;n++){const b=n?a+(M.random()<.5?-.05:.05):a;A.push({x:p.x+d*26,y:p.y-45,vx:d*M.cos(b)*s,vy:M.sin(b)*s,tr:[],st:0,l:0,c,an:d>0?b:PI-b,dm:(16+c*44)*e.d*gDm()*gUd(),pr:(c>.85?2:0)+e.pr,hit:[],ev})}
p.dr=0;p.ch=0;p.pc=0;p.cd=.2;p.rc=1;shake=M.max(shake,1+c*3);
for(let i=0;i<8;i++){const b=rnd(-.5,.5);sp(3,p.x+d*28,p.y-45,d*M.cos(b)*rnd(120,360)*c+d*60,M.sin(b)*rnd(120,300)*c,rnd(.2,.4),2,e.c,500,2)}
ring(p.x+d*30,p.y-45,e.c,22+c*22);
sp(1,p.x+d*30,p.y-45,0,0,.2,50,e.k);
if(ev==4)sFx(p.x+d*28,p.y-45,d,a,c,1);
if(ev==5)nFx(p.x+d*28,p.y-45,d,a,c,1);
}

function skill(){
if(SPC){spSkill();return}
const d=p.f,ev=evl(),e=AE[ev],ks=1000*gUs(),ba=aim(d,ks,p.x+d*26,p.y-45,-.09);
p.kc=SKC;p.dr=0;p.ch=0;p.pc=0;p.cd=.25;p.rc=1;shake=M.max(shake,3);
for(let i=-2;i<=2;i++){
const a=ba+i*.1;
A.push({x:p.x+d*26,y:p.y-45,vx:d*M.cos(a)*ks,vy:M.sin(a)*ks,tr:[],st:0,l:0,c:.85,an:d>0?a:PI-a,dm:30*e.d*gDm()*gUd(),pr:1+e.pr,hit:[],ev});
}
for(let i=0;i<10;i++){const b=rnd(-.6,.6);sp(3,p.x+d*28,p.y-45,d*M.cos(b)*rnd(160,420)+d*60,M.sin(b)*rnd(160,340),rnd(.2,.4),2,e.c,500,2)}
ring(p.x+d*30,p.y-45,e.c,34);
sp(1,p.x+d*30,p.y-45,0,0,.25,64,e.k);
for(let i=-2;i<=2;i++){const b=ba+i*.1;P.push({t:6,x:p.x+d*26,y:p.y-45,vx:0,vy:0,l:.3,m:.3,r:7,c:e.c,gv:0,dg:0,an:d>0?b:PI-b,ln:300})}
ring(p.x+d*30,p.y-45,e.c,60);
FXA.sa=.5;FXA.fl=.16;FXA.fc=e.c;
if(ev==4)sFx(p.x+d*28,p.y-45,d,ba,1,2);
if(ev==5)nFx(p.x+d*28,p.y-45,d,ba,1,2);
}
function ult(){
if(SPC){spUlt();return}
const e=AE[evl()];
p.uc=0;p.ut=UD;p.us=0;p.dr=0;p.ch=0;p.pc=0;p.cd=.4;p.rc=1;shake=10;
ring(p.x,p.y-30,e.c,90);ring(p.x,p.y-30,e.c,50);
sp(1,p.x,p.y-30,0,0,.6,170,e.k);
for(let i=0;i<20;i++){const b=rnd(0,TAU),v=rnd(120,320);sp(3,p.x,p.y-30,M.cos(b)*v,M.sin(b)*v-120,rnd(.4,.8),2,e.c,500,2)}
ban(SPC?'Ultimate: Hujan Tombak':'Ultimate: Hujan Panah');
P.push({t:7,x:p.x,y:GY,vx:0,vy:0,l:.8,m:.8,r:80,c:e.c,gv:0,dg:0,ln:GY+20});
for(let i=0;i<14;i++){const b=i/14*TAU;P.push({t:6,x:p.x,y:p.y-30,vx:0,vy:0,l:.55,m:.55,r:6,c:e.c,gv:0,dg:0,an:b,ln:rnd(140,260)})}
ring(p.x,GY-4,e.c,220);ring(p.x,GY-4,e.c,150);
FXA.fl=.5;FXA.fc=e.c;
if(!SPC&&evl()==4)uFx();
if(!SPC&&evl()==5)nUf();
}
function ulUp(dt){
if(SPC){p.ut-=dt;spRain(dt);return}
p.ut-=dt;p.us-=dt;
while(p.us<=0){
p.us+=.03;
const ev=evl();
A.push({x:rnd(cam-30,cam+VW+30),y:rnd(-160,-40),vx:rnd(-40,40),vy:rnd(650,900),tr:[],st:0,l:0,c:.75,an:PI/2,dm:46*AE[ev].d*gDm()*gUd(),pr:AE[ev].pr,hit:[],ev,ul:1,sp:SPC?1:0});
if(!SPC&&ev>=4&&M.random()<.55)A.push({x:rnd(cam-30,cam+VW+30),y:rnd(-220,-40),vx:rnd(-60,60),vy:rnd(700,980),tr:[],st:0,l:0,c:.8,an:PI/2,dm:0,pr:0,hit:[],ev,ul:1,vf:1});
}
if(!SPC&&evl()==4)uSt(dt);
if(!SPC&&evl()==5)nUs(dt);
if(M.random()<.7){const e=AE[evl()];sp(3,p.x+rnd(-70,70),GY-2,rnd(-14,14),rnd(-300,-140),rnd(.4,.8),1.8,e.c,0,1)}
}

const gwL=()=>M.max(700,VW*.66);
function gwF(){
const tf=p.go-GCH;
return[gwL()*(1-M.pow(1-M.min(1,tf/.22),2)),M.min(1,tf/.12)*M.max(0,M.min(1,(GFR-tf)/.3))];
}
function gw(){
p.go=.001;p.gf=0;p.gx=0;p.gd=p.f;p.dr=0;p.ch=0;p.pc=0;p.cd=.3;
ring(p.x+p.f*28,p.y-47,'150,80,255',30);
ban('Gelombang Elektrik');
}
function gwHit(){
const d=p.gd,ox=p.x+d*28,oy=p.y-47,f=gwF(),L=f[0],R=30*f[1],dm=16*AE[evl()].d*gDm()*gUd();
if(R<4)return;
for(let i=0;i<4;i++){const x=ox+d*rnd(0,L);sp(3,x,oy+rnd(-R,R),rnd(-70,70),rnd(-200,-50),rnd(.3,.6),1.8,'200,150,255',500,2)}
for(const e of E){
if(e.dd)continue;
const dx=(e.x-ox)*d;
if(dx<-12||dx>L+14*e.sz)continue;
if(oy+R<e.y-64*e.sz||oy-R>e.y+2)continue;
hurtE(e,dm,d);
for(let k=0;k<3;k++)sp(3,e.x,e.y-rnd(10,55)*e.sz,rnd(-220,220),rnd(-220,60),rnd(.15,.3),1.6,'210,160,255',400,2);
sp(1,e.x,e.y-30*e.sz,0,0,.18,40+e.sz*8,'z');
}
}
function gwUp(dt){
const d=p.gd,ox=p.x+d*28,oy=p.y-47;
p.go+=dt;
if(p.go<GCH){
const k=p.go/GCH;
if(M.random()<.8){const a=rnd(0,TAU),r=rnd(26,50);sp(1,ox+M.cos(a)*r,oy+M.sin(a)*r,-M.cos(a)*r*3.6,-M.sin(a)*r*3.6,.3,rnd(6,10),'z')}
if(M.random()<.5){const a=rnd(0,TAU);sp(5,p.x+M.cos(a)*30,p.y-30+M.sin(a)*40,0,rnd(-40,-10),rnd(.3,.6),1.6,'200,150,255',0,1)}
shake=M.max(shake,k*1.6);
}else{
if(!p.gf){
p.gf=1;p.gx=0;p.rc=1;shake=14;FXA.fl=.45;FXA.fc='150,80,255';
ring(ox,oy,'150,80,255',60);ring(ox,oy,'255,255,255',34);
sp(1,ox,oy,0,0,.5,140,'z');
for(let i=0;i<16;i++){const b=rnd(-.9,.9);sp(3,ox,oy,d*M.cos(b)*rnd(180,520),M.sin(b)*rnd(180,520),rnd(.25,.5),2,'200,150,255',300,2)}
}
shake=M.max(shake,5);
p.gx-=dt;
if(p.gx<=0){p.gx+=.1;gwHit()}
}
if(p.go>=GCH+GFR){p.go=0;p.gf=0;p.gc=GCD}
}

function upd(dt){
DPJ.el.classList.toggle('nw',!wgT());
const L=inp('l'),R=inp('r'),J=inp('j'),F=inp('f')&&!p.go,S=inp('s')&&!p.go,Q=inp('q'),U=inp('u'),V=inp('v'),Mk=inp('m'),dir=(R||L)&&TT.a&&!KM.l.some(c=>K[c])&&!KM.r.some(c=>K[c])?TT.a:(R?1:0)-(L?1:0);
p.cd-=dt;
p.kc=M.max(0,p.kc-dt);
p.gc=M.max(0,p.gc-dt);
if(p.ut<=0)p.uc=M.min(1,p.uc+dt/(SPC?20:90));
if(Q&&!p.wq&&p.kc<=0&&!(SPC&&p.s3>=0))skill();
if(U&&!p.we&&p.uc>=1&&p.ut<=0)ult();
if(V&&!p.gp&&p.gc<=0&&p.go<=0)gw();
if(SPC&&Mk&&!p.wm)spSk3();
p.wm=Mk;
p.wq=Q;p.we=U;p.gp=V;
domUp(dt);if(p.ut>0)ulUp(dt);
if(p.go>0)gwUp(dt);
if(S&&!p.ws){
p.sf=1;ring(p.x+p.f*18,p.y-30,'150,195,225',30);
for(let i=0;i<7;i++){const a=rnd(-1,1);sp(3,p.x+p.f*30,p.y-30+a*14,p.f*rnd(40,140),a*90,rnd(.25,.45),1.6,'165,205,230',200,2)}
}
if(SPC){p.dr=0;p.ch=0;if(F&&!p.sF&&!S&&p.cd<=0&&p.at<0&&p.sk1<0&&p.s3<0)spAtk();p.sF=F}
else if(S){p.dr=0;p.ch=0}
else if(F){
if(!p.dr&&p.cd<=0){p.dr=1;p.ch=0}
if(p.dr)p.ch=M.min(1,p.ch+dt/.7);
}else if(p.dr)fire();
p.da+=((p.dr?1:0)-p.da)*M.min(1,dt*16);
if(p.dr){
const nx=p.x+p.f*24,ny=p.y-45;
if(p.ch>.2&&M.random()<p.ch*.5){const a=rnd(0,TAU),r=rnd(18,30);sp(1,nx+M.cos(a)*r,ny+M.sin(a)*r,-M.cos(a)*r*3.2,-M.sin(a)*r*3.2,.3,7,AE[evl()].k)}
if(p.pc<1&&p.ch>=1)ring(nx,ny,AE[evl()].c,24);
p.pc=p.ch;
}
if(dir&&!p.dr&&!p.go&&!(SPC&&p.sk1>=0))p.f=dir>0?1:-1;
p.wd+=(-p.f-p.wd)*M.min(1,dt*1.5);
p.sh+=((S?1:0)-p.sh)*M.min(1,dt*13);
const spd=320*(p.dr?.42:1)*(SPC&&(p.at>=0||p.sk1>=0||p.s3>=0)?.4:1)*(1-p.sh*.45)*(p.go?.15:1)*(1+.06*xzB.v)*(p.fy?1+.08*sv.wl:1);
p.vx+=(dir*spd-p.vx)*M.min(1,dt*(p.on?(dir?13:11):(p.fy?8:4)));
if(SPC&&p.sk1>=.2&&p.sk1<.37)p.vx=p.f*(dxS.act=='T'?640:-320);
if(SPC&&dxS.act=='B'&&p.s3>=.2&&p.s3<.37)p.vx=-p.f*200;
if(J&&!p.wj)p.jb=.13;else p.jb-=dt;
p.cy=p.on?.1:p.cy-dt;
if(p.jb>0&&p.cy>0){p.vy=-560;p.on=0;p.cy=0;p.jb=0;p.sq=-.3;dust(p.x,GY,6,60)}
else if(wgT()&&!p.on&&!p.fy&&p.jb>0){
p.fy=1;p.jb=0;p.vy=M.min(p.vy,-120);
ring(p.x,p.y-30,AE[p.vt].c,36);
for(let i=0;i<6;i++)sp(5,p.x+rnd(-14,14),p.y-rnd(20,50),rnd(-30,30),rnd(-60,-10),rnd(.5,.9),1.6,AE[p.vt].s,0,.6);
}
if(!p.on){
if(p.fy){
p.vy+=((J?-240:(TT.vy||0)<0?(TT.vy||0)*240:60+(TT.vy||0)*180)-p.vy)*M.min(1,dt*6);p.y+=p.vy*dt;
if(p.y<GY-300-sv.wl*30){p.y=GY-300-sv.wl*30;if(p.vy<0)p.vy=0}
}else{
let gr=1700;
if(p.vy<0&&!J)gr*=2.3;else if(p.vy>0)gr*=1.12;
p.vy=M.min(950,p.vy+gr*dt);p.y+=p.vy*dt;
}
if(p.y>=GY){p.y=GY;if(p.vy>260){p.sq=M.min(.4,p.vy/2400);dust(p.x,GY,8,90)}p.vy=0;p.on=1;p.fy=0}
}else p.y=GY;
p.x+=p.vx*dt;
const sn=M.min(1,M.abs(p.vx)/190);
if(p.on){
p.wk+=M.abs(p.vx)*dt*.085;
const s=M.floor(p.wk/PI);
if(s!=p.st){p.st=s;if(sn>.3)dust(p.x-p.f*4,GY,2,40)}
}
p.air+=((p.on?0:1)-p.air)*M.min(1,dt*16);
p.wa+=((wgT()?(p.on?.3:1):0)-p.wa)*M.min(1,dt*8);
p.wp+=dt*(p.fy?(J?17:8):(p.on?1.8:5));
p.ga+=((p.go>0?1:0)-p.ga)*M.min(1,dt*12);
p.cv+=(p.vx-p.cv)*M.min(1,dt*6);p.sq*=M.exp(-dt*9);p.rc*=M.exp(-dt*8);p.sf*=M.exp(-dt*3.2);
p.wj=J;p.ws=S;
if(!dir&&p.on&&!p.dr&&!S&&M.abs(p.vx)<5)p.idle+=dt;else p.idle=0;
p.mt-=dt;
if(p.idle>1&&p.mt<=0){p.mt=rnd(.25,.5);sp(1,p.x+rnd(-14,14),p.y-rnd(10,50),rnd(-4,4),rnd(-16,-8),rnd(1.4,2.4),rnd(5,9),'a')}
p.bl-=dt;if(p.bl<-.12)p.bl=rnd(2.2,5);
evFx(dt);
}

