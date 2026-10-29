function upA(dt){
for(let i=A.length-1;i>=0;i--){
const a=A[i];
if(!a.st){
a.tr.push({x:a.x,y:a.y});if(a.tr.length>16)a.tr.shift();
a.vy+=(a.sp==2?0:430*dt);a.x+=a.vx*dt;a.y+=a.vy*dt;a.an=M.atan2(a.vy,a.vx);
if(hitA(a)){A.splice(i,1);continue}
if(a.sp==2){a.lf-=dt;if(a.lf<=0){A.splice(i,1);continue}}
if(M.random()<.6)sp(1,a.x-a.vx*.01,a.y-a.vy*.01,rnd(-8,8),rnd(-8,8),.3,8+a.c*6,AE[a.ev].k);
if(a.c>.5&&M.random()<.5)sp(5,a.x-a.vx*.02,a.y-a.vy*.02,rnd(-24,24),rnd(-24,24),rnd(.3,.5),1.5,AE[a.ev].s,60,2);
if(a.ev==4&&!a.sp)sTrP(a,dt);
if(a.ev==5&&!a.sp)nTrP(a,dt);
if(a.y>=GY){
a.y=GY+rnd(1,4);a.st=1;a.l=a.ul?3:0;dust(a.x,GY,a.ul?2:5,70);ring(a.x,GY,AE[a.ev].c,16);
for(let k=0;k<(a.ul?3:6);k++)sp(3,a.x,GY-1,rnd(-90,90),rnd(-200,-60),rnd(.25,.5),1.8,AE[a.ev].c,600,1.5);
shake=M.max(shake,a.ul?.4:.8);
if(a.ev==4&&!a.sp)sLand(a);
if(a.ev==5&&!a.sp)nLand(a);
}else if(M.abs(a.x-p.x)>3000)A.splice(i,1);
}else{
a.l+=dt;if(a.tr.length)a.tr.shift();
if(a.l>4.2)A.splice(i,1);
}
}
}
function sFx(x,y,d,a,c,m){
const an=d>0?a:PI-a,u=.6+c*.6+(m>1?.3:0);
if(P.length<250){
for(let i=0;i<7;i++)P.push({t:6,x,y,vx:0,vy:0,l:.34,m:.34,r:5+c*3,c:'255,236,170',gv:0,dg:0,an:an+(i-3)*.13,ln:rnd(110,230)*u});
for(let i=0;i<8;i++)P.push({t:6,x,y,vx:0,vy:0,l:.26,m:.26,r:3.5,c:'255,246,205',gv:0,dg:0,an:rnd(0,TAU),ln:rnd(26,70)*u});
for(let i=0;i<3+M.floor(c*3);i++){const l=rnd(.7,1.3);P.push({t:8,x,y,vx:d*rnd(60,220),vy:rnd(-120,40),l,m:l,r:rnd(4,6.5),c:'255,238,180',gv:40,dg:1.4,an:rnd(0,TAU),sp:rnd(-8,8)})}
}
ring(x,y,'255,236,170',(44+c*44)*u);ring(x,y,'255,255,255',(26+c*26)*u);
sp(1,x,y,0,0,.3,(96+c*70)*u,'p');sp(1,x,y,0,0,.18,50+c*30,'w');
shake=M.max(shake,2+c*3);p.wf=1;
}
function sTrP(a,dt){
if(a.ul&&M.random()>.3)return;
const hp=a.hp=(a.hp||0)+dt*26,nx=-M.sin(a.an),ny=M.cos(a.an),o=M.sin(hp)*(5+a.c*7);
sp(1,a.x+nx*o,a.y+ny*o,0,0,.24,9+a.c*7,'p');
if(!a.ul)sp(1,a.x-nx*o,a.y-ny*o,0,0,.24,7+a.c*5,'w');
if(!a.ul&&M.random()<.3&&P.length<240){const l=rnd(.5,.9);P.push({t:8,x:a.x,y:a.y,vx:rnd(-30,30),vy:rnd(-30,30),l,m:l,r:rnd(3,5),c:'255,238,180',gv:20,dg:1,an:rnd(0,TAU),sp:rnd(-9,9)})}
}
function sTr(a){
const t=a.tr,n=t.length;
if(n<3)return;
const w=1+a.c*.9;
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.globalAlpha=.16;g.strokeStyle='rgb(255,236,170)';g.lineWidth=9*w;
g.beginPath();g.moveTo(t[0].x,t[0].y);
for(let i=1;i<n;i++)g.lineTo(t[i].x,t[i].y);
g.lineTo(a.x,a.y);g.stroke();
const ns=a.ul?1:2;
for(let s=0;s<ns;s++){
g.strokeStyle=s?'rgb(255,255,255)':'rgb(255,214,120)';g.globalAlpha=.7;g.lineWidth=1.5*w;
g.beginPath();
for(let i=0;i<=n;i++){
const pa=t[M.max(0,i-1)],pb=i<n?(i+1<n?t[i+1]:a):a,pc=i<n?t[i]:a;
const dx=pb.x-pa.x,dy=pb.y-pa.y,dl=M.hypot(dx,dy)||1,nx=-dy/dl,ny=dx/dl,k=i/n;
const off=M.sin(i*.9+T*28+s*PI)*(1+k*5.5)*w;
if(i)g.lineTo(pc.x+nx*off,pc.y+ny*off);else g.moveTo(pc.x+nx*off,pc.y+ny*off);
}
g.stroke();
}
if(!a.ul){
for(let i=1;i<=n;i++){
const k=i/n,pa=t[i-1],pb=i<n?t[i]:a;
g.globalAlpha=k*.5;g.strokeStyle='hsl('+((T*220+i*14)%360)+',100%,68%)';g.lineWidth=k*3*w+.4;
g.beginPath();g.moveTo(pa.x,pa.y);g.lineTo(pb.x,pb.y);g.stroke();
}
const L=(26+a.c*22)*(1+.15*M.sin(T*30));
g.save();g.translate(a.x,a.y);g.rotate(a.an);
g.globalAlpha=.7;g.strokeStyle='rgb(255,250,225)';g.lineWidth=1.2;
g.beginPath();g.moveTo(-L,0);g.lineTo(L,0);g.moveTo(0,-L*.55);g.lineTo(0,L*.55);g.stroke();
g.restore();
}
g.restore();
if(!a.ul){
gl('w',a.x,a.y,18+a.c*12,.8);gl('p',a.x,a.y,34+a.c*22,.55);
for(let k=0;k<3;k++){const an=T*18+k*2.09,of=8+a.c*6;gl('w',a.x+M.cos(an)*of,a.y+M.sin(an)*of,6,.7)}
}
}
function sLand(a){
ring(a.x,GY,'255,236,170',a.ul?30:48);
sp(1,a.x,GY-6,0,0,.3,a.ul?46:80,'p');
if(!a.ul&&P.length<250)P.push({t:7,x:a.x,y:GY,vx:0,vy:0,l:.45,m:.45,r:34,c:'255,236,170',gv:0,dg:0,ln:170});
}
function sHit(x,y,a){
const u=a.ul?.5:1,r=a.c,c='255,236,170';
ring(x,y,c,(60+r*50)*u);ring(x,y,'255,255,255',(34+r*30)*u);
sp(1,x,y,0,0,.3,(110+r*60)*u,'p');
if(P.length<250){
const n=a.ul?4:10;
for(let i=0;i<n;i++)P.push({t:6,x,y,vx:0,vy:0,l:.3,m:.3,r:5,c,gv:0,dg:0,an:rnd(0,TAU),ln:rnd(40,110)*(.6+u*.6)});
if(!a.ul){
P.push({t:7,x,y:GY,vx:0,vy:0,l:.5,m:.5,r:46,c,gv:0,dg:0,ln:GY+20});
for(let i=0;i<3;i++){const l=rnd(.6,1.1);P.push({t:8,x,y,vx:rnd(-160,160),vy:rnd(-200,-40),l,m:l,r:rnd(3.5,6),c:'255,238,180',gv:60,dg:1.2,an:rnd(0,TAU),sp:rnd(-8,8)})}
}
}
if(!a.ul)shake=M.max(shake,2.5+r*2);
}
function uFx(){
const c='255,236,170';
if(P.length<250){
for(let i=0;i<10;i++){const l=rnd(.8,1.3);P.push({t:7,x:cam+VW*(i+.5)/10+rnd(-26,26),y:GY,vx:0,vy:0,l,m:l,r:rnd(50,96),c,gv:0,dg:0,ln:GY+30})}
for(let i=0;i<26;i++)P.push({t:6,x:p.x,y:p.y-30,vx:0,vy:0,l:.6,m:.6,r:6,c,gv:0,dg:0,an:i/26*TAU,ln:rnd(180,420)});
}
ring(p.x,GY-4,'255,255,255',420);ring(p.x,GY-4,c,300);ring(p.x,p.y-30,c,160);
sp(1,p.x,p.y-30,0,0,.7,240,'p');
FXA.fl=.8;FXA.fc=c;shake=16;
}
function uSt(dt){
p.wf=1;
if(M.random()<dt*7){
const x=rnd(cam,cam+VW);
P.push({t:9,x,y:0,vx:0,vy:0,l:.3,m:.3,r:1,c:'255,236,170',gv:0,dg:0,sd:rnd(0,999),ox:rnd(-90,90)});
ring(x,GY-3,'255,236,170',74);ring(x,GY-3,'255,255,255',40);
sp(1,x,GY-4,0,0,.3,96,'p');dust(x,GY,3,90);
shake=M.max(shake,2.4);
}
if(M.random()<dt*9&&P.length<240){const l=rnd(.4,.7);P.push({t:7,x:rnd(cam,cam+VW),y:GY,vx:0,vy:0,l,m:l,r:rnd(18,36),c:'255,236,170',gv:0,dg:0,ln:GY+20})}
if(M.random()<dt*24)sp(5,rnd(cam,cam+VW),-20,rnd(-20,20),rnd(320,520),rnd(.5,.9),2.4,'255,246,205',0,0);
}
function fxSky(){
const ak=M.min(1,(UD-p.ut)*4)*M.min(1,p.ut*2.5),cy=GY*.3,R=M.max(240,M.min(380,VW*.4));
g.save();g.translate(p.x,cy);g.scale(1,.34);g.globalCompositeOperation='lighter';g.lineCap='round';
g.rotate(-T*.45);
g.strokeStyle='rgba(255,236,170,'+.85*ak+')';g.lineWidth=5;
g.beginPath();g.arc(0,0,R,0,TAU);g.stroke();
g.lineWidth=2.4;g.setLineDash([24,14]);
g.beginPath();g.arc(0,0,R*.82,0,TAU);g.stroke();g.setLineDash([]);
g.rotate(T*1.3);
g.strokeStyle='rgba(255,250,235,'+.7*ak+')';g.lineWidth=2.6;
g.beginPath();
for(let t=0;t<2;t++)for(let i=0;i<=3;i++){const a=(i%3)*TAU/3+t*PI/3-PI/2,x=M.cos(a)*R*.78,y=M.sin(a)*R*.78;if(i==0)g.moveTo(x,y);else g.lineTo(x,y)}
g.stroke();
g.rotate(-T*2.2);g.lineWidth=2;g.strokeStyle='rgba(255,236,170,'+.6*ak+')';
g.beginPath();
for(let i=0;i<24;i++){const a=i*TAU/24,r1=R*.9,r2=R*(i&1?.96:1.04);g.moveTo(M.cos(a)*r1,M.sin(a)*r1);g.lineTo(M.cos(a)*r2,M.sin(a)*r2)}
g.stroke();
g.restore();
gl('p',p.x,cy,R*.7,.35*ak);
}
function nFx(x,y,d,a,c,m){
const an=d>0?a:PI-a,u=.6+c*.6+(m>1?.3:0);
if(P.length<250){
for(let i=0;i<6;i++)P.push({t:6,x,y,vx:0,vy:0,l:.32,m:.32,r:4.5+c*3,c:'190,225,255',gv:0,dg:0,an:an+(i-2.5)*.12,ln:rnd(100,210)*u});
for(let i=0;i<6;i++)P.push({t:6,x,y,vx:0,vy:0,l:.24,m:.24,r:3.2,c:'235,245,255',gv:0,dg:0,an:rnd(0,TAU),ln:rnd(24,64)*u});
for(let i=0;i<3+M.floor(c*3);i++){const l=rnd(.6,1.1);P.push({t:10,x,y,vx:d*rnd(60,220),vy:rnd(-110,40),l,m:l,r:rnd(3.5,5.5),c:'190,225,255',gv:50,dg:1.4,an:rnd(0,TAU),sp:rnd(-9,9)})}
}
ring(x,y,'170,215,255',(40+c*40)*u);ring(x,y,'255,255,255',(24+c*24)*u);
sp(1,x,y,0,0,.3,(90+c*64)*u,'s');sp(1,x,y,0,0,.18,48+c*28,'w');
shake=M.max(shake,2+c*3);p.wf=1;
}
function nTrP(a,dt){
if(a.ul&&M.random()>.3)return;
const hp=a.hp=(a.hp||0)+dt*22,nx=-M.sin(a.an),ny=M.cos(a.an),o=M.sin(hp)*(4+a.c*6);
sp(1,a.x+nx*o,a.y+ny*o,0,0,.26,8+a.c*6,'s');
if(!a.ul)sp(1,a.x-nx*o,a.y-ny*o,0,0,.24,6+a.c*4,'w');
if(!a.ul&&M.random()<.22&&P.length<240){const l=rnd(.5,.9);P.push({t:10,x:a.x,y:a.y,vx:rnd(-26,26),vy:rnd(-26,26),l,m:l,r:rnd(2.4,3.6),c:'190,225,255',gv:30,dg:1,an:rnd(0,TAU),sp:rnd(-9,9)})}
}
function nTr(a){
const t=a.tr,n=t.length;
if(n<3)return;
const w=1+a.c*.9;
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.globalAlpha=.14;g.strokeStyle='rgb(150,205,255)';g.lineWidth=9*w;
g.beginPath();g.moveTo(t[0].x,t[0].y);
for(let i=1;i<n;i++)g.lineTo(t[i].x,t[i].y);
g.lineTo(a.x,a.y);g.stroke();
const ns=a.ul?1:2;
for(let s=0;s<ns;s++){
g.strokeStyle=s?'rgb(255,255,255)':'rgb(160,208,255)';
for(let i=1;i<=n;i++){
const pa=t[M.max(0,i-2)],pb=i<n?t[i]:a,pc=t[i-1],k=i/n,dx=pb.x-pa.x,dy=pb.y-pa.y,dl=M.hypot(dx,dy)||1,nx=-dy/dl,ny=dx/dl;
const h0=(i-1)*.7+T*22+s*PI,h1=i*.7+T*22+s*PI,o0=M.sin(h0)*(1+(k-1/n)*5.5)*w,o1=M.sin(h1)*(1+k*5.5)*w,dp=M.cos(h1);
g.globalAlpha=(.22+.6*k)*(.55+.45*dp);g.lineWidth=(.5+k*1.9)*w*(.65+.35*dp);
g.beginPath();g.moveTo(pc.x+nx*o0,pc.y+ny*o0);g.lineTo(pb.x+nx*o1,pb.y+ny*o1);g.stroke();
}
}
if(!a.ul){
const L=(22+a.c*20)*(1+.12*M.sin(T*30));
g.save();g.translate(a.x,a.y);g.rotate(a.an);
g.globalAlpha=.55;g.strokeStyle='rgb(235,245,255)';g.lineWidth=1;
g.beginPath();g.moveTo(-L,0);g.lineTo(L,0);g.stroke();
g.restore();
}
g.restore();
if(!a.ul){
gl('w',a.x,a.y,16+a.c*10,.75);gl('s',a.x,a.y,32+a.c*20,.55);
const ca=M.cos(a.an),sa=M.sin(a.an);
for(let k=0;k<3;k++){const an=T*16+k*2.09,of=7+a.c*5,cs=M.cos(an),sn=M.sin(an);gl('w',a.x+sa*cs*of+ca*sn*of*.4,a.y-ca*cs*of+sa*sn*of*.4,4+2.2*(sn+1),.5+.3*sn)}
}
}
function nLand(a){
ring(a.x,GY,'170,215,255',a.ul?30:48);
sp(1,a.x,GY-6,0,0,.3,a.ul?46:80,'s');
if(!a.ul&&P.length<250)P.push({t:7,x:a.x,y:GY,vx:0,vy:0,l:.45,m:.45,r:30,c:'170,215,255',gv:0,dg:0,ln:GY+10});
}
function nHit(x,y,a){
const u=a.ul?.5:1,r=a.c,c='170,215,255';
ring(x,y,c,(58+r*48)*u);ring(x,y,'255,255,255',(32+r*28)*u);
sp(1,x,y,0,0,.3,(105+r*58)*u,'s');
if(P.length<250){
const n=a.ul?3:9;
for(let i=0;i<n;i++)P.push({t:6,x,y,vx:0,vy:0,l:.3,m:.3,r:4.6,c,gv:0,dg:0,an:rnd(0,TAU),ln:rnd(40,105)*(.6+u*.6)});
if(!a.ul){
P.push({t:7,x,y:GY,vx:0,vy:0,l:.5,m:.5,r:40,c,gv:0,dg:0,ln:GY+10});
for(let i=0;i<4;i++){const l=rnd(.6,1.1);P.push({t:10,x,y,vx:rnd(-170,170),vy:rnd(-210,-40),l,m:l,r:rnd(3.5,5.5),c:'190,225,255',gv:140,dg:1.1,an:rnd(0,TAU),sp:rnd(-9,9)})}
}
}
if(!a.ul)shake=M.max(shake,2.5+r*2);
}
function nUf(){
const c='170,215,255';
if(P.length<250){
for(let i=0;i<10;i++){const l=rnd(.8,1.3);P.push({t:7,x:cam+VW*(i+.5)/10+rnd(-26,26),y:GY,vx:0,vy:0,l,m:l,r:rnd(46,90),c,gv:0,dg:0,ln:GY+30})}
for(let i=0;i<22;i++)P.push({t:6,x:p.x,y:p.y-30,vx:0,vy:0,l:.6,m:.6,r:5.6,c,gv:0,dg:0,an:i/22*TAU,ln:rnd(160,380)});
for(let i=0;i<14;i++){const b=rnd(0,TAU),v=rnd(120,360),l=rnd(.9,1.5);P.push({t:10,x:p.x,y:p.y-30,vx:M.cos(b)*v,vy:M.sin(b)*v-80,l,m:l,r:rnd(4,7),c:'190,225,255',gv:120,dg:1.2,an:rnd(0,TAU),sp:rnd(-8,8)})}
}
ring(p.x,GY-4,'255,255,255',400);ring(p.x,GY-4,c,290);ring(p.x,p.y-30,c,150);
sp(1,p.x,p.y-30,0,0,.7,230,'s');
FXA.fl=.8;FXA.fc=c;shake=16;
}
function nUs(dt){
p.wf=1;
if(M.random()<dt*8){
const x=rnd(cam,cam+VW);
if(P.length<240)P.push({t:7,x,y:GY,vx:0,vy:0,l:.5,m:.5,r:rnd(26,52),c:'170,215,255',gv:0,dg:0,ln:GY+20});
ring(x,GY-3,'170,215,255',70);ring(x,GY-3,'255,255,255',38);
sp(1,x,GY-4,0,0,.3,92,'s');dust(x,GY,3,90);
shake=M.max(shake,2.2);
}
if(M.random()<dt*11&&P.length<240){const l=rnd(.7,1.2);P.push({t:10,x:rnd(cam,cam+VW),y:-20,vx:rnd(-24,24),vy:rnd(300,500),l,m:l,r:rnd(3.5,6),c:'190,225,255',gv:0,dg:0,an:rnd(0,TAU),sp:rnd(-7,7)})}
if(M.random()<dt*24)sp(5,rnd(cam,cam+VW),-20,rnd(-20,20),rnd(320,520),rnd(.5,.9),2.2,'205,230,255',0,0);
}
function nSky(){
const ak=M.min(1,(UD-p.ut)*4)*M.min(1,p.ut*2.5),cy=GY*.3,R=M.max(150,M.min(250,VW*.26)),s=R*.17,a=T*1.1;
N3.f=1;
g.save();g.translate(p.x,cy);g.lineCap='round';
g.globalCompositeOperation='lighter';
g.strokeStyle='rgb(170,215,255)';
n3R(R,.8,.28*M.sin(T*.4),T*.5,.9*ak,0,3.4);
n3R(R*.72,.3,-.5+.3*M.cos(T*.35),-T*.8,.8*ak,0,2.6);
g.globalCompositeOperation='source-over';
g.globalAlpha=ak;
n3B(0,-s,0,0,s*1.35,0,M.cos(a),0,M.sin(a),s*.52,s*.52,.42,[190,222,255],1,1);
g.globalAlpha=1;
g.globalCompositeOperation='lighter';
g.strokeStyle='rgb(170,215,255)';
n3R(R,.8,.28*M.sin(T*.4),T*.5,.9*ak,1,3.4);
n3R(R*.72,.3,-.5+.3*M.cos(T*.35),-T*.8,.8*ak,1,2.6);
g.globalAlpha=1;g.globalCompositeOperation='source-over';
g.restore();
gl('s',p.x,cy,R*.7,.34*ak);gl('w',p.x,cy,s*1.6,.4*ak);
}
function arrow5(ae,ph){
g.lineCap='round';g.lineJoin='round';
const vane=a=>{
const co=M.cos(a),si=M.sin(a),h=5.6,e=M.abs(co),li=.45+.55*M.abs(.75*si+.55*co);
g.fillStyle='rgba('+(110+120*li|0)+','+(165+80*li|0)+','+(232+23*li|0)+','+(.5+.4*e)+')';
g.beginPath();g.moveTo(-22,0);g.lineTo(-29,h*co);g.lineTo(-36,h*co*.96);g.lineTo(-33,0);g.closePath();g.fill();
if(e>.25){g.strokeStyle='rgba(235,245,255,'+.5*e+')';g.lineWidth=.5;g.stroke()}
};
const va=[ph+.4,ph+.4+TAU/3,ph+.4+TAU*2/3];
for(const a of va)if(M.sin(a)<0)vane(a);
g.strokeStyle='#cfdff2';g.lineWidth=1.8;
g.beginPath();g.moveTo(-31,0);g.lineTo(-3,0);g.stroke();
g.strokeStyle='rgba(255,255,255,.55)';g.lineWidth=.6;
g.beginPath();g.moveTo(-29,-.6);g.lineTo(-4,-.6);g.stroke();
g.strokeStyle='rgba('+ae.c+',.85)';g.lineWidth=.9;
g.beginPath();g.moveTo(-27,0);g.lineTo(-2,0);g.stroke();
g.strokeStyle='#7fb4ee';g.lineWidth=1.2;
for(let k=0;k<3;k++){g.beginPath();g.moveTo(-10-k*4.5,-1.8);g.lineTo(-10-k*4.5,1.8);g.stroke()}
for(const a of va)if(M.sin(a)>=0)vane(a);
const hr=4.8,V=[];
for(let k=0;k<4;k++){const a=ph+k*PI/2;V.push([-1.5,hr*M.cos(a),hr*M.sin(a)])}
const tip=[12.5,0,0],tail=[-7,0,0];
const tri=(A,B,C)=>{
const ux=B[0]-A[0],uy=B[1]-A[1],uz=B[2]-A[2],vx=C[0]-A[0],vy=C[1]-A[1],vz=C[2]-A[2];
let nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;
if(nx*((A[0]+B[0]+C[0])/3+1.5)+ny*((A[1]+B[1]+C[1])/3)+nz*((A[2]+B[2]+C[2])/3)<0){nx=-nx;ny=-ny;nz=-nz}
if(nz<=0)return;
const nl=M.hypot(nx,ny,nz),df=M.max(0,(nx*.35-ny*.75+nz*.55)/nl),li=.32+.68*df,sp=M.pow(df,8)*.6;
g.fillStyle='rgb('+n3c(205*li+50*sp)+','+n3c(228*li+27*sp)+','+n3c(255*(.45+.55*li))+')';
g.beginPath();g.moveTo(A[0],A[1]);g.lineTo(B[0],B[1]);g.lineTo(C[0],C[1]);g.closePath();g.fill();
g.strokeStyle='rgba(255,255,255,.5)';g.lineWidth=.4;g.stroke();
};
for(let k=0;k<4;k++){const B=V[k],C=V[(k+1)%4];tri(tail,C,B);tri(tip,B,C)}
}
function arrowBody(ae,v,ph){
if(v==5){arrow5(ae,ph===undefined?T*6:ph);return}
const sc=['#b8a07a','#cfd8e4','#c9764a','#b8a8e8','#e8c868'][v],tp=[5,9,9,9,11][v],fh=2.6+v*.5;
g.lineCap='round';g.lineJoin='round';
g.strokeStyle='rgba(6,8,16,.5)';g.lineWidth=2.6+v*.25;
g.beginPath();g.moveTo(-30,0);g.lineTo(-3,0);g.stroke();
g.strokeStyle=sc;g.lineWidth=1.7+v*.25;
g.beginPath();g.moveTo(-30,0);g.lineTo(-3,0);g.stroke();
g.strokeStyle='rgba(255,255,255,.45)';g.lineWidth=.5;
g.beginPath();g.moveTo(-29,-.5);g.lineTo(-4,-.5);g.stroke();
if(v>0){
g.strokeStyle='rgba('+ae.c+',.8)';g.lineWidth=.6+v*.25;
g.beginPath();g.moveTo(-27,.3);g.lineTo(-2,.3);g.stroke();
}
if(v==0){
g.strokeStyle='rgba(60,40,24,.75)';g.lineWidth=1.2;
g.beginPath();g.moveTo(-23,-1.3);g.lineTo(-23,1.3);g.moveTo(-8,-1.3);g.lineTo(-8,1.3);g.stroke();
}
if(v==3){
g.strokeStyle='rgba(255,250,235,.9)';g.lineWidth=.9;
g.beginPath();g.moveTo(-28,0);
for(let k=1;k<=7;k++)g.lineTo(-28+k*4,(k&1?-1:1)*(1.8+M.sin(T*40+k)*.9));
g.stroke();
}
if(v==4){
g.strokeStyle='#f0cf7a';g.lineWidth=1.3;
for(let k=0;k<3;k++){g.beginPath();g.moveTo(-9-k*5,-2);g.lineTo(-9-k*5,2);g.stroke()}
}
if(v>0){
g.fillStyle=ae.f;g.strokeStyle='rgba(6,8,16,.55)';g.lineWidth=.5;
g.beginPath();g.rect(-7.4,-1.5-v*.25,3.2,3+v*.5);g.fill();g.stroke();
}
g.beginPath();
if(v==0){g.moveTo(5,0);g.lineTo(0,-3);g.lineTo(-3.6,-.9);g.lineTo(-3.6,.9);g.lineTo(0,3)}
else if(v==1){g.moveTo(9,0);g.lineTo(2,-3.6);g.lineTo(-3,-1.8);g.lineTo(-5,0);g.lineTo(-3,1.8);g.lineTo(2,3.6)}
else if(v==2){g.moveTo(9,0);g.lineTo(1,-3);g.lineTo(-1,-6);g.lineTo(-3,-1.4);g.lineTo(-4.5,0);g.lineTo(-3,1.4);g.lineTo(-1,6);g.lineTo(1,3)}
else if(v==3){g.moveTo(9,0);g.lineTo(3,-2.4);g.lineTo(4,-6.5);g.lineTo(-1,-3);g.lineTo(-5,-3.4);g.lineTo(-3,0);g.lineTo(-5,3.4);g.lineTo(-1,3);g.lineTo(4,6.5);g.lineTo(3,2.4)}
else{g.moveTo(11,0);g.lineTo(3,-4.6);g.lineTo(-.5,-8);g.lineTo(-2.6,-2.6);g.lineTo(-6.5,0);g.lineTo(-2.6,2.6);g.lineTo(-.5,8);g.lineTo(3,4.6)}
g.closePath();
g.fillStyle=ae.h;g.fill();
g.save();g.clip();
g.fillStyle='rgba(6,8,16,.18)';g.fillRect(-12,0,26,10);
g.fillStyle='rgba(255,255,255,.3)';g.fillRect(-12,-10,26,4);
g.restore();
g.strokeStyle='rgba(6,8,16,.6)';g.lineWidth=.7;g.stroke();
g.strokeStyle='rgba(255,255,255,.7)';g.lineWidth=.4;
g.beginPath();g.moveTo(-2,0);g.lineTo(tp-1.2,0);g.stroke();
const vn=(x0,L2,h)=>{
g.beginPath();g.moveTo(x0,-.7);g.lineTo(x0-1.6,-h);g.lineTo(x0-L2-1.6,-h);g.lineTo(x0-L2,-.7);g.closePath();
g.fillStyle=ae.f;g.fill();
g.fillStyle=ae.g;
g.beginPath();g.moveTo(x0-.8,-.9);g.lineTo(x0-2,-h*.55);g.lineTo(x0-L2*.9-1.6,-h*.55);g.lineTo(x0-L2*.9,-.9);g.closePath();g.fill();
g.strokeStyle='rgba(6,8,16,.5)';g.lineWidth=.45;
g.beginPath();g.moveTo(x0,-.7);g.lineTo(x0-1.6,-h);g.lineTo(x0-L2-1.6,-h);g.lineTo(x0-L2,-.7);g.closePath();g.stroke();
g.strokeStyle='rgba(6,8,16,.28)';g.lineWidth=.4;
g.beginPath();
for(let k=1;k<4;k++){const x=x0-L2*k/4;g.moveTo(x,-.9);g.lineTo(x-1.6,-h*.9)}
g.stroke();
};
vn(-23.5,9,fh);
g.save();g.scale(1,-1);vn(-23.5,9,fh);g.restore();
if(v>=2){vn(-15,4,fh*.6);g.save();g.scale(1,-1);vn(-15,4,fh*.6);g.restore()}
ov(-32.6,0,1.3,1.6,sc);
g.strokeStyle='rgba(6,8,16,.6)';g.lineWidth=.4;
g.beginPath();g.ellipse(-32.6,0,1.3,1.6,0,0,TAU);g.stroke();
}
function drawA(){
for(const a of A){
if(a.sp==2)continue;
if(a.sp==1){spFall(a);continue}
const fade=a.st?M.min(1,(4.2-a.l)/.8):1;
const ae=AE[a.ev];
g.lineCap='round';g.globalCompositeOperation='lighter';g.strokeStyle='rgb('+ae.t+')';
for(let i=1;i<a.tr.length;i++){
const k=i/a.tr.length;
g.globalAlpha=k*.4*fade;g.lineWidth=(.8+k*2.2)*(1+a.ev*.25);
g.beginPath();g.moveTo(a.tr[i-1].x,a.tr[i-1].y);g.lineTo(a.tr[i].x,a.tr[i].y);g.stroke();
}
g.globalCompositeOperation='source-over';g.globalAlpha=1;
if(a.ev==4&&!a.st&&!a.sp)sTr(a);
if(a.ev==5&&!a.st&&!a.sp)nTr(a);
if(!a.st)gl(ae.k,a.x,a.y,11+a.c*6+a.ev*3,.4+a.ev*.05);
g.save();g.translate(a.x,a.y);
g.rotate(a.an+(a.st?M.sin(a.l*45)*M.exp(-a.l*7)*.1:0));
if(!a.st&&a.ev>0)gl(ae.k,-26,0,8+a.ev*3,.35+a.ev*.05);
g.globalAlpha=fade;
if(a.ev>=4&&!a.sp)g.scale(1+a.c*.4,1+a.c*.4);
if(a.sp)spShaft();else arrowBody(ae,a.ev,a.x*.012);
g.restore();
}
g.globalAlpha=1;
}

const SF=[];
for(let i=0;i<8;i++)SF.push({x:0,y:0,ox:0,oy:0});
let sfInit=0;
function upSf(dt,ax,ay){
if(!sfInit){SF.forEach((q,i)=>{q.x=q.ox=ax-i*4;q.y=q.oy=ay});sfInit=1}
SF[0].x=SF[0].ox=ax;SF[0].y=SF[0].oy=ay;
for(let i=1;i<SF.length;i++){
const q=SF[i],vx=(q.x-q.ox)*.93,vy=(q.y-q.oy)*.93;
q.ox=q.x;q.oy=q.y;
q.x+=vx+p.wd*(1300+M.sin(T*1.3+i)*350)*dt*dt;
q.y+=vy+(300+M.sin(T*6+i*1.1)*420)*dt*dt;
}
for(let it=0;it<2;it++)for(let i=1;i<SF.length;i++){
const q=SF[i],r=SF[i-1],dx=q.x-r.x,dy=q.y-r.y,d=M.hypot(dx,dy)||1,k=(d-5)/d;
q.x-=dx*k;q.y-=dy*k;
if(q.y>GY-2)q.y=GY-2;
}
}
const SFC=['#b4733f','#7fa8cc','#e0602e','#7b5cd0','#f2e6bd','#8ec0f2'],SFD=['#7a4a24','#e8f1fb','#ffb26b','#d8cdfa','#d9b657','#f2f8ff'];
function drawSf(){
const n=SF.length,Lp=[],Rp=[],v=p.vt,c1=SFC[v],c2=SFD[v];
for(let i=0;i<n;i++){
const a=SF[M.max(0,i-1)],b=SF[M.min(n-1,i+1)],dx=b.x-a.x,dy=b.y-a.y,d=M.hypot(dx,dy)||1,w=(3.4*(1-i/n)+.8)*(1+p.vt*.2);
Lp.push([SF[i].x-dy/d*w,SF[i].y+dx/d*w]);Rp.push([SF[i].x+dy/d*w,SF[i].y-dx/d*w]);
}
const E=SF[n-1],Q=SF[n-2],ex=E.x-Q.x,ey=E.y-Q.y,el=M.hypot(ex,ey)||1,ux=ex/el,uy=ey/el;
g.lineJoin='round';
g.fillStyle=c1;g.beginPath();g.moveTo(Lp[0][0],Lp[0][1]);
for(let i=1;i<n;i++)g.lineTo(Lp[i][0],Lp[i][1]);
g.lineTo(E.x+ux*4.4+(Lp[n-1][0]-E.x)*.8,E.y+uy*4.4+(Lp[n-1][1]-E.y)*.8);
g.lineTo(E.x+ux*1.4,E.y+uy*1.4);
g.lineTo(E.x+ux*4.4+(Rp[n-1][0]-E.x)*.8,E.y+uy*4.4+(Rp[n-1][1]-E.y)*.8);
for(let i=n-1;i>=0;i--)g.lineTo(Rp[i][0],Rp[i][1]);
g.closePath();g.fill();
g.strokeStyle='rgba(60,30,10,.5)';g.lineWidth=.8;g.stroke();
g.fillStyle=c2;g.globalAlpha=.6;
for(let i=3;i<n-1;i+=3){
g.beginPath();g.moveTo(Lp[i][0],Lp[i][1]);g.lineTo(Rp[i][0],Rp[i][1]);g.lineTo(lr(Rp[i][0],Rp[i+1][0],.35),lr(Rp[i][1],Rp[i+1][1],.35));g.lineTo(lr(Lp[i][0],Lp[i+1][0],.35),lr(Lp[i][1],Lp[i+1][1],.35));g.closePath();g.fill();
}
g.globalAlpha=1;
g.strokeStyle='rgba(255,255,255,.22)';g.lineWidth=.6;g.beginPath();g.moveTo(Lp[0][0],Lp[0][1]);
for(let i=1;i<n;i++)g.lineTo(Lp[i][0],Lp[i][1]);
g.stroke();
ov(SF[0].x,SF[0].y,3.4+v*.15,2.6,c2);
g.strokeStyle='rgba(60,30,10,.45)';g.lineWidth=.6;g.beginPath();g.ellipse(SF[0].x,SF[0].y,3.4+v*.15,2.6,0,0,TAU);g.stroke();
if(v>=2)gl(AE[v].k,E.x,E.y,8+v*2,.22+.08*M.sin(T*5));
}

const PV={
cape:['#1e303b','#22405a','#4a2420','#2a2458','#e6dfc6','#27457f'],
tun:['#2e4352','#38546c','#5a302a','#3a3266','#f2ecd8','#33619f'],
hood:['#223644','#2a4862','#3c1e1a','#2a2350','#e8e1c8','#213c70'],
arm:['#2a3b48','#34506a','#4a2a24','#342d5e','#ddd5ba','#3d6cae'],
arm2:['#1d2b36','#263f56','#3a201c','#271f4a','#d0c8ac','#2c5290'],
bow:['#6a4a32','#8d98a6','#8a3f22','#5a4a96','#e0b85a','#b9d8f7'],
bk:['#c79a5a','#cfd8e4','#ffb26b','#d8cdfa','#fff2c0','#f2f8ff'],
tr:['rgba(120,160,175,.28)','rgba(200,225,245,.7)','rgba(255,150,90,.75)','rgba(205,190,255,.75)','rgba(255,232,160,.85)','rgba(190,225,255,.9)'],
ey:['#ffdf9e','#d8ecff','#ffb27a','#e4d6ff','#fff6d0','#ffffff'],
pd:['#8fa6b3','#d6e0ec','#e0763e','#b9a6f0','#f0cf7a','#9cc8f5'],
rm:['rgba(130,175,195,.4)','rgba(210,232,250,.7)','rgba(255,170,110,.7)','rgba(215,200,255,.7)','rgba(255,240,190,.85)','rgba(205,232,255,.9)']
};
