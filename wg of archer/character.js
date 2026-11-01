function evFx(dt){
if(p.wf){p.wf*=M.exp(-dt*4);if(p.wf<.01)p.wf=0}
if(wgT()==1){
const q=p.wa;
if(M.random()<dt*(4+q*8)&&P.length<240){const l=rnd(1.4,2.4);P.push({t:8,x:p.x-p.f*rnd(8,40),y:p.y-rnd(40,92),vx:-p.f*rnd(6,36)+p.vx*.4,vy:rnd(-26,6),l,m:l,r:rnd(4.5,7.5),c:'255,238,180',gv:rnd(12,26),dg:.7,an:rnd(0,TAU),sp:rnd(-4,4)})}
if(M.random()<dt*(12+q*16))sp(1,p.x-p.f*rnd(6,50),p.y-rnd(30,100),rnd(-10,10),rnd(-20,-4),rnd(.5,.9),rnd(6,11),'p');
}
if(wgT()==2){
const q=p.wa;
if(M.random()<dt*(3+q*8)&&P.length<240){const l=rnd(.9,1.6);P.push({t:10,x:p.x-p.f*rnd(6,34),y:p.y-rnd(36,88),vx:-p.f*rnd(4,24)+p.vx*.3,vy:rnd(-22,2),l,m:l,r:rnd(2.6,4.4),c:'190,225,255',gv:6,dg:.8,an:rnd(0,TAU),sp:rnd(-5,5)})}
if(M.random()<dt*(10+q*14))sp(1,p.x-p.f*rnd(6,46),p.y-rnd(30,96),rnd(-8,8),rnd(-18,-3),rnd(.5,.9),rnd(5,9),'s');
}
if(p.vt>0){
const e2=AE[p.vt],mv=M.min(1,M.abs(p.vx)/190);
if(M.random()<dt*(2+p.vt*2.2)&&P.length<200)sp(1,p.x-p.f*rnd(-6,14),p.y-rnd(44,70),rnd(-10,10)-p.f*8,rnd(-30,-12),rnd(.5,1),rnd(4,8),e2.k,-6,.6);
if(p.air<.3&&mv>.3&&M.random()<dt*(10+p.vt*5))sp(1,p.x+rnd(-6,6),p.y-rnd(0,3),-p.f*rnd(6,26),rnd(-34,-10),rnd(.3,.6),rnd(4,7),e2.k,30,1);
if((p.vt==1||p.vt==3||p.vt==5)&&M.random()<dt*(3+p.vt)&&P.length<220){const l=rnd(.6,1.1);P.push({t:10,x:p.x+rnd(-18,18),y:p.y-rnd(14,70),vx:rnd(-6,6),vy:rnd(-14,-2),l,m:l,r:rnd(2.4,4),c:e2.s,gv:0,dg:.5,an:rnd(0,TAU),sp:rnd(-6,6)})}
if(p.vt==2&&M.random()<dt*10&&P.length<200)sp(5,p.x+rnd(-10,10),p.y-rnd(10,60),rnd(-8,8),rnd(-50,-24),rnd(.5,.9),rnd(1,2),e2.s,-20,.3);
if(p.vt==4&&M.random()<dt*5&&P.length<200)sp(1,p.x+p.f*rnd(-4,16),p.y-rnd(66,80),rnd(-6,6),rnd(-16,-4),rnd(.6,1),rnd(3,5),'p');
}
if(p.dr&&p.ch>.25&&M.random()<dt*(10+p.ch*30)&&P.length<200)sp(1,p.x+p.f*rnd(14,28),p.y-rnd(26,42),rnd(-16,16)+p.f*rnd(0,20),rnd(-22,10),rnd(.2,.45),rnd(3,6),AE[p.vt].k);
if(!p.vt||M.random()>dt*(4+p.vt*4))return;
const e=AE[p.vt];
sp(5,p.x+rnd(-12,12),p.y-rnd(8,52),rnd(-8,8),rnd(-34,-14),rnd(.6,1.1),1.5,e.s,0,.4);
}
function evFl(hx,hh){
g.globalCompositeOperation='lighter';
for(let k=0;k<3;k++){
const w=M.sin(T*9+k*2)*1.6,h=7+k*2.2+M.sin(T*7+k)*1.8,x=hx-4-k*3.6;
g.fillStyle='rgba(255,'+(120+k*30)+',70,.55)';
g.beginPath();g.moveTo(x-2,hh-6+k*.4);g.quadraticCurveTo(x-2+w,hh-6-h*.6,x+w*1.4-1,hh-6-h);g.quadraticCurveTo(x+2+w*.4,hh-6-h*.4,x+2,hh-6+k*.4);g.closePath();g.fill();
}
g.globalCompositeOperation='source-over';
}
function evSh(){
for(let k=0;k<4;k++){
const a=T*2.2+k*TAU/4,x=M.cos(a)*17+2,y=-22+M.sin(a)*8-4*M.sin(T*3+k),z=M.sin(a)>0?1:.7;
gl('e',x,y,9*z,.6*z);
poly([x,y-4*z,x+1.8*z,y,x,y+4*z,x-1.8*z,y],'#e6dcff');
}
}
const WGC=M.cos(.62),WGS=M.sin(.62),WPC=M.cos(.2),WPS=M.sin(.2),WO=[0,0,0],WT=[0,0,0],WB=new Float32Array(14),WTP=new Float32Array(20),WU=[.1,.4,.72,1],WI=[0,1,2,3,2,1,0],WSG=[1,1,1,1,-1,-1,-1];
function wgPj(X,Y,Z){
const x=X*WGC-Z*WGS,z=X*WGS+Z*WGC,y=Y*WPC-z*WPS,d=z*WPC+Y*WPS,k=1/(1-d*.0045);
WO[0]=x*k;WO[1]=-y*k;WO[2]=d;
}
function wgF(rx,ry,rz,dx,dy,dz,tx,ty,tz,L,wd,fi,st,gw,rc){
for(let j=0;j<7;j++){
const u=WU[WI[j]],o=L*.1*u*u+WSG[j]*wd*M.sin(PI*M.min(1,u*.95+.08)),b=L*u;
wgPj(rx+dx*b+tx*o,ry+dy*b+ty*o-L*.08*u*u,rz+dz*b+tz*o);
WB[j*2]=WO[0];WB[j*2+1]=WO[1];
if(j==3){WT[0]=WO[0];WT[1]=WO[1];WT[2]=WO[2]}
}
g.beginPath();g.moveTo(WB[0],WB[1]);
for(let j=1;j<7;j++)g.lineTo(WB[j*2],WB[j*2+1]);
g.closePath();
if(fi){g.fillStyle=fi;g.fill()}
if(st){g.strokeStyle=st;g.lineWidth=.8;g.stroke()}
if(gw){g.globalCompositeOperation='lighter';g.fillStyle=gw;g.fill();g.globalCompositeOperation='source-over'}
if(rc){g.strokeStyle=rc;g.lineWidth=.7;g.beginPath();g.moveTo((WB[0]+WB[12])*.5,(WB[1]+WB[13])*.5);g.lineTo(WT[0],WT[1]);g.stroke()}
}
function wgLy(sg,fp,q,wf,nr,n,ls,md,gk){
const th0=1-q*.2+M.sin(fp)*(.12+.5*q)+wf*.25,span=.55+.75*q+wf*.12,Lm=(18+30*q)*(1+wf*.18)*ls,s0=.12+(md==1?span/(n*2+2):0);
for(let i=n-1;i>=0;i--){
const t=n>1?i/(n-1):0,thi=th0+.22*q*M.sin(fp-t*1.1-.4),sT=M.sin(thi),cT=M.cos(thi),s=s0+span*t*(md==1?.94:1),ss=M.sin(s),cs=M.cos(s);
const dx=-ss,dy=sT*cs,dz=sg*cT*cs,tx=-cs,ty=-sT*ss,tz=-sg*cT*ss;
const L=Lm*(1-.42*M.pow(t,1.3)),wd=L*.115+1.2;
const lit=M.abs(-sg*cT*.78+sT*.52),fc=M.abs(-sg*cT*.2+sT*WGC),br=.5+.3*lit+.35*fc;
const h=42+t*22+14*M.sin(T*2.6+t*5+nr*1.7),Lg=(nr?1:.84)*(48+30*M.min(1.1,br));
if(md==0){
wgF(0,0,sg*3.2,dx,dy,dz,tx,ty,tz,L,wd,'hsl('+h+',88%,'+Lg+'%)','rgba(255,244,200,'+(.45+.3*br)+')','hsla('+(h+22+wf*40)+',100%,62%,'+(.12+wf*.2)+')','rgba(255,255,236,.5)');
WTP[i*2]=WT[0];WTP[i*2+1]=WT[1];
}else if(md==1){
wgF(0,0,sg*3.2,dx,dy,dz,tx,ty,tz,L,wd*.9,'hsl('+(h+6)+',70%,'+(Lg+10)+'%)','rgba(255,248,215,.55)',null,null);
}else{
wgF(0,0,sg*3.2,dx,dy,dz,tx,ty,tz,L,wd,null,null,'hsla('+((T*170+t*80+gk*50)%360)+',100%,64%,'+(.15/gk)+')',null);
}
}
}
function wgWing(sg,fp,q,wf,nr){
const n=9;
g.save();g.translate(-4,-17);g.lineCap='round';g.lineJoin='round';
for(let k=2;k>=1;k--)wgLy(sg,fp-k*(.2+.2*q),q,wf,nr,n,1.02,2,k);
wgLy(sg,fp,q,wf,nr,n,1,0,1);
wgLy(sg,fp,q,wf,nr,7,.56,1,1);
wgPj(0,0,sg*3.2);
const rx=WO[0],ry=WO[1];
g.globalCompositeOperation='lighter';
g.fillStyle='rgba(255,226,140,'+(.07+wf*.12)+')';
g.beginPath();g.moveTo(rx,ry);
for(let i=0;i<n;i++)g.lineTo(WTP[i*2],WTP[i*2+1]);
g.closePath();g.fill();
g.strokeStyle='rgba(255,236,170,'+(.1+wf*.15)+')';g.lineWidth=1.1;
g.beginPath();
for(let i=0;i<n;i+=2){g.moveTo(rx,ry);g.lineTo(rx+(WTP[i*2]-rx)*1.9,ry+(WTP[i*2+1]-ry)*1.9)}
g.stroke();
g.globalCompositeOperation='source-over';
const th=1-q*.2+M.sin(fp)*(.12+.5*q)+wf*.25,sT=M.sin(th),cT=M.cos(th),Lb=(18+30*q)*(1+wf*.18)*1.04;
let wx=0,wy=0,bx=0,by=0;
g.beginPath();
for(let k=0;k<=4;k++){
const u=k/4;
wgPj(-Lb*.1*M.sin(PI*u),sT*Lb*u-Lb*.05*u*u,sg*(3.2+cT*Lb*u));
if(k)g.lineTo(WO[0],WO[1]);else g.moveTo(WO[0],WO[1]);
if(k==2){wx=WO[0];wy=WO[1]}
if(k==4){bx=WO[0];by=WO[1]}
}
g.strokeStyle='#8a6a2c';g.lineWidth=3.6;g.stroke();
g.strokeStyle='#ffe9a8';g.lineWidth=1.7;g.stroke();
g.globalCompositeOperation='lighter';
g.strokeStyle='rgba(255,236,170,.25)';g.lineWidth=6;g.stroke();
if(q>.5){
const sd=M.floor(T*24)*7.1+nr*13;
g.strokeStyle='rgba(255,252,225,.85)';g.lineWidth=.9;
g.beginPath();zig(rx,ry,bx,by,3.2,sd);g.stroke();
g.strokeStyle='rgba(255,236,170,.6)';g.lineWidth=.8;
g.beginPath();
for(let i=0;i<n-1;i+=2)zig(WTP[i*2],WTP[i*2+1],WTP[i*2+2],WTP[i*2+3],2.4,sd+i*5);
g.stroke();
}
g.strokeStyle='rgba(255,252,230,.8)';g.lineWidth=1;
const ar=T*2.4+nr,sl2=7+wf*8+M.sin(T*9+nr*2)*2;
g.beginPath();
g.moveTo(bx-M.cos(ar)*sl2,by-M.sin(ar)*sl2);g.lineTo(bx+M.cos(ar)*sl2,by+M.sin(ar)*sl2);
g.moveTo(bx-M.sin(ar)*sl2,by+M.cos(ar)*sl2);g.lineTo(bx+M.sin(ar)*sl2,by-M.cos(ar)*sl2);
g.stroke();
g.globalCompositeOperation='source-over';
for(let i=0;i<n;i+=2)gl('p',WTP[i*2],WTP[i*2+1],9+(i==0?9:0)+wf*10,.4+wf*.3);
gl('w',bx,by,16+wf*14,.55+.2*M.sin(T*6+nr));
gl('p',wx,wy,13,.4);
gl('a',rx,ry,18+wf*10,.3);
g.restore();
}
function evWg(sn){
const cx=-7,cy=-27,wf=p.wf||0;
gl('p',cx,cy,70+M.sin(T*3)*6+wf*28,.18+wf*.22);
gl('a',cx,cy,44,.14);
g.save();g.translate(cx,cy);g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
for(let r=0;r<3;r++){
const R=24+r*5.5,al=T*(1.1+r*.55)*(r&1?-1:1),be=T*(.7+r*.4)+r*2.1,ca=M.cos(al),sa=M.sin(al),cb=M.cos(be),sb=M.sin(be);
g.strokeStyle='rgba('+(r==1?'255,255,240':'255,222,140')+','+(.5-r*.1)+')';g.lineWidth=1.5-r*.25;
g.beginPath();
for(let j=0;j<=28;j++){
const a=j/28*TAU,x=M.cos(a)*R,y0=M.sin(a)*R,y1=y0*ca,z0=y0*sa,x2=x*cb+z0*sb,z2=-x*sb+z0*cb;
wgPj(x2,y1,z2);
if(j)g.lineTo(WO[0],WO[1]);else g.moveTo(WO[0],WO[1]);
}
g.stroke();
const oa=T*(2+r),ox=M.cos(oa)*R,oy0=M.sin(oa)*R,oy1=oy0*ca,oz0=oy0*sa;
wgPj(ox*cb+oz0*sb,oy1,-ox*sb+oz0*cb);
g.fillStyle='rgba(255,250,225,.35)';g.beginPath();g.arc(WO[0],WO[1],3.6,0,TAU);g.fill();
g.fillStyle='rgba(255,255,245,.95)';g.beginPath();g.arc(WO[0],WO[1],1.6,0,TAU);g.fill();
}
g.restore();
}
function evWn(q,fp){
const wf=p.wf||0;
wgWing(-1,fp,q,wf,0);
wgWing(1,fp,q,wf,1);
}
function evCr(hx,hh){
g.lineJoin='round';g.lineCap='round';
g.strokeStyle='#b8923f';g.lineWidth=2.8;g.beginPath();
for(let k=0;k<=8;k++){const dx=(k-4)*1.8,x=hx+dx,y=hh-M.sqrt(74-dx*dx)+1.6;if(k)g.lineTo(x,y);else g.moveTo(x,y)}
g.stroke();
g.strokeStyle='#f6dd92';g.lineWidth=1.4;g.stroke();
for(let k=0;k<5;k++){
const dx=(k-2)*3.6,x=hx+dx,by=hh-M.sqrt(74-dx*dx)+1.8,h=k==2?8:k&1?4.4:5.6;
g.fillStyle=k==2?'#f6dd92':'#f0cf7a';g.strokeStyle='#b8923f';g.lineWidth=.6;
g.beginPath();g.moveTo(x-2,by);g.lineTo(x-.2,by-h);g.lineTo(x+2,by);g.closePath();g.fill();g.stroke();
g.fillStyle='rgba(255,252,225,.8)';g.beginPath();g.arc(x-.2,by-h,.9,0,TAU);g.fill();
}
ov(hx,hh-7,1.5,1.9,'#ff6a5e');
gl('f',hx,hh-7,7,.4+.15*M.sin(T*4));
}
function evHl(hx,hh){
g.globalCompositeOperation='lighter';
const pu=.8+.2*M.sin(T*3);
g.strokeStyle='rgba(255,236,170,'+.8*pu+')';g.lineWidth=1.6;
g.beginPath();g.ellipse(hx-1,hh-15,8,2.6,-.1,0,TAU);g.stroke();
g.strokeStyle='rgba(255,246,205,.35)';g.lineWidth=3.6;g.stroke();
g.strokeStyle='rgba(255,236,170,.4)';g.lineWidth=.7;
g.beginPath();g.ellipse(hx-1,hh-15,11.5,3.8,-.1,T*.8,T*.8+4.4);g.stroke();
for(let k=0;k<3;k++){const a=T*1.6+k*2.094;g.fillStyle='rgba(255,250,225,.9)';g.beginPath();g.arc(hx-1+M.cos(a)*8,hh-15+M.sin(a)*2.6,.9,0,TAU);g.fill()}
g.globalCompositeOperation='source-over';
gl('p',hx-1,hh-15,14,.35);
}
function fxEv(){
const x=p.x,y=p.y-30;
if(p.vt>0)gl(AE[p.vt].k,x,y,44+p.vt*9+M.sin(T*3)*4,.08+p.vt*.04);
if(p.vt>0){
g.save();g.translate(x,GY+2);g.scale(1,.22);g.globalCompositeOperation='lighter';g.rotate(T*(.8+p.vt*.3));
g.strokeStyle='rgba('+AE[p.vt].c+',.35)';g.lineWidth=2;g.setLineDash([10,8]);
g.beginPath();g.arc(0,0,30+p.vt*7,0,TAU);g.stroke();g.setLineDash([]);
g.restore();
}
if(p.vt>=2){
g.save();g.translate(x,GY+2);g.scale(1,.22);g.globalCompositeOperation='lighter';g.rotate(-T*(1.1+p.vt*.2));
g.strokeStyle='rgba('+AE[p.vt].s+',.28)';g.lineWidth=1.2;g.setLineDash([3,6]);
g.beginPath();g.arc(0,0,20+p.vt*5,0,TAU);g.stroke();g.setLineDash([]);
g.restore();
}
}

function shP(x0,x1,a,b){
const q=g.createLinearGradient(x0,0,x1,0);
q.addColorStop(0,'rgba(6,8,16,'+a+')');q.addColorStop(.5,'rgba(6,8,16,0)');q.addColorStop(1,'rgba(255,255,255,'+b+')');
g.fillStyle=q;g.fill();
}
function shR(x,y,r){
const q=g.createRadialGradient(x+r*.35,y-r*.4,r*.1,x,y,r*1.15);
q.addColorStop(0,'rgba(255,255,255,.2)');q.addColorStop(.5,'rgba(255,255,255,0)');q.addColorStop(1,'rgba(6,8,16,.42)');
g.fillStyle=q;g.fill();
}
function shL(){
g.save();g.translate(0,-1.1);g.strokeStyle='rgba(255,255,255,.14)';g.lineWidth=1.5;g.stroke();g.restore();
}
function evMk(hx,hh){
const v=p.vt;
g.save();
g.beginPath();g.ellipse(hx+3.6,hh+.6,4.6,5.2,0,0,TAU);g.clip();
g.fillStyle=PV.arm2[v];
g.beginPath();g.moveTo(hx-2,hh+3.1);g.quadraticCurveTo(hx+3,hh+1.1,hx+9,hh+1.6);g.lineTo(hx+9,hh+7);g.lineTo(hx-2,hh+7);g.closePath();g.fill();
g.strokeStyle=PV.rm[v];g.lineWidth=.8;g.lineCap='round';
g.beginPath();g.moveTo(hx-2,hh+3.1);g.quadraticCurveTo(hx+3,hh+1.1,hx+9,hh+1.6);g.stroke();
g.lineWidth=.6;g.beginPath();
for(let k=0;k<3;k++){const x=hx+1.2+k*2.2;g.moveTo(x,hh+2.8+k*.15);g.lineTo(x-.6,hh+6)}
g.stroke();
g.lineWidth=.9;
g.beginPath();g.moveTo(hx+.6,hh-2.6);g.lineTo(hx+4,hh-2.2);g.lineTo(hx+8.4,hh-3.2);g.stroke();
if(v>=2){
g.fillStyle='#f4efe0';
poly([hx+2.6,hh+1.9,hx+3.8,hh+1.8,hx+3.2,hh+3.8]);
poly([hx+5.4,hh+1.7,hx+6.6,hh+1.7,hx+6,hh+3.6]);
}
g.restore();
}
function evHn(hx,hh,v){
const fl=v==2,e=AE[v],L=fl?11:12;
g.lineJoin='round';g.lineCap='round';
for(let s=0;s<2;s++){
const o=s?1:-1,bx=hx-3+s*6.2,by=hh-7.4,cx=bx+o*(fl?7:5.5),cy=by-L*.55,tx=bx+(fl?o*4:-5-(s?0:1.5)),ty=by-L-(fl?3:2);
g.beginPath();g.moveTo(bx-2.6,by);g.quadraticCurveTo(cx-1.4,cy,tx,ty);g.quadraticCurveTo(cx+2,cy+1,bx+2.6,by);g.closePath();
g.fillStyle=s?PV.pd[v]:PV.arm2[v];g.fill();
g.strokeStyle=PV.tr[v];g.lineWidth=.6;g.stroke();
g.strokeStyle='rgba(6,8,16,.35)';g.lineWidth=.7;
for(let k=1;k<4;k++){
const t=k*.2+.12,u=1-t,px=u*u*bx+2*u*t*cx+t*t*tx,py=u*u*by+2*u*t*cy+t*t*ty,dx=2*u*(cx-bx)+2*t*(tx-cx),dy=2*u*(cy-by)+2*t*(ty-cy),dl=M.hypot(dx,dy)||1,w=2-t*1.4;
g.beginPath();g.moveTo(px-dy/dl*w,py+dx/dl*w);g.lineTo(px+dy/dl*w,py-dx/dl*w);g.stroke();
}
gl(e.k,tx,ty,6,.35+.12*M.sin(T*4+s*2));
}
}
function evHd(hx,hh,tx,ty){
const v=p.vt,cx=hx+3.6,cy=hh+.6;
g.lineCap='round';g.lineJoin='round';
g.strokeStyle=v?PV.pd[v]:'#5a4030';g.lineWidth=1.9;
g.beginPath();g.ellipse(cx,cy,5.4,6,0,-2.8,-.15);g.stroke();
g.strokeStyle=PV.bk[v];g.lineWidth=.45;g.setLineDash([1.2,1.4]);
g.beginPath();g.ellipse(cx,cy,5.4,6,0,-2.8,-.15);g.stroke();g.setLineDash([]);
const gx=cx+M.cos(-1.25)*5.4,gy=cy+M.sin(-1.25)*6;
ov(gx,gy,1.5+v*.1,1.8+v*.1,PV.bk[v]);
ov(gx-.4,gy-.5,.5,.6,'rgba(255,255,255,.85)');
gl(AE[v].k,gx,gy,6,.3+.1*M.sin(T*3));
}
function evGv(ex,ey,hx,hy,c,r,v){
const dx=hx-ex,dy=hy-ey,dl=M.hypot(dx,dy)||1,ux=dx/dl,uy=dy/dl,nx=-uy,ny=ux,an=M.atan2(uy,ux);
g.lineCap='round';
g.strokeStyle=v?PV.pd[v]:'#5a4030';g.lineWidth=5.7;
g.beginPath();g.moveTo(hx-ux*4.4,hy-uy*4.4);g.lineTo(hx-ux*2.2,hy-uy*2.2);g.stroke();
g.strokeStyle=PV.rm[v];g.lineWidth=.6;
g.beginPath();g.moveTo(hx-ux*2.2+nx*2.8,hy-uy*2.2+ny*2.8);g.lineTo(hx-ux*2.2-nx*2.8,hy-uy*2.2-ny*2.8);g.stroke();
ov(hx+nx*r*.8+ux*.2,hy+ny*r*.8+uy*.2,r*.55,r*.38,c,an+.6);
g.fillStyle=c;g.beginPath();g.arc(hx,hy,r,0,TAU);g.fill();
for(let k=-1;k<=1;k++)ov(hx+ux*r*.75-nx*k*r*.55,hy+uy*r*.75-ny*k*r*.55,r*.5,r*.38,c,an);
g.fillStyle='rgba(6,8,16,.18)';
for(let k=-1;k<=1;k++){g.beginPath();g.ellipse(hx+ux*r*1.15-nx*k*r*.55,hy+uy*r*1.15-ny*k*r*.55,r*.12,r*.34,an,0,TAU);g.fill()}
ov(hx-nx*r*.35-ux*.3,hy-ny*r*.35-uy*.3,r*.3,r*.22,'rgba(255,255,255,.22)',an);
}
function evBt(kx,ky,fx,fy,v){
const mx=lr(kx,fx,.45),my=lr(ky,fy,.45),dx=fx-kx,dy=fy-ky,dl=M.hypot(dx,dy)||1,nx=-dy/dl,ny=dx/dl;
g.lineCap='round';g.lineJoin='round';
g.strokeStyle=PV.arm2[v];g.lineWidth=5.2;
g.beginPath();g.moveTo(mx,my);g.lineTo(fx,fy);g.stroke();
g.strokeStyle='rgba(6,8,16,.2)';g.stroke();
ov(fx+3.2,fy+.1,2.9,2.4,PV.arm2[v]);
g.strokeStyle='rgba(255,255,255,.14)';g.lineWidth=.8;
g.beginPath();g.arc(fx+3.2,fy+.1,2,-2.6,-.6);g.stroke();
g.strokeStyle=PV.pd[v];g.lineWidth=1;
g.beginPath();g.moveTo(mx-nx*2.7,my-ny*2.7);g.lineTo(mx+nx*2.7,my+ny*2.7);g.stroke();
g.strokeStyle='rgba(6,8,16,.6)';g.lineWidth=1.1;
g.beginPath();g.moveTo(fx-2,fy+2.1);g.lineTo(fx+6.2,fy+2.1);g.stroke();
if(v>=2)poly([fx-2.4,fy-1,fx-6-v*.5,fy-3-v*.4,fx-3.6,fy+.4],PV.pd[v]);
}
function evBw(tx,bl,bc,v){
const N=16,A=[],B=[],C=[],bw=PV.bow[v],ed='rgba(6,8,16,.55)';
const at=t=>{
const u=1-t,x=tx*(u*u+t*t)+2*bc*t*u,y=bl*(2*t-1),dx=2*(2*t-1)*(tx-bc),dy=2*bl,dl=M.hypot(dx,dy)||1;
return[x,y,dy/dl,-dx/dl,(1+v*.1+(2.2+v*.15)*M.pow(M.sin(PI*t),.8))*.5];
};
for(let i=0;i<=N;i++){const q=at(i/N);A.push([q[0]-q[2]*q[4],q[1]-q[3]*q[4]]);B.push([q[0]+q[2]*q[4],q[1]+q[3]*q[4]]);C.push([q[0]+q[2]*q[4]*.45,q[1]+q[3]*q[4]*.45])}
const pe=(t,len,col,lw)=>{const q=at(t),w=q[4]+len;g.strokeStyle=col;g.lineWidth=lw;g.beginPath();g.moveTo(q[0]-q[2]*w,q[1]-q[3]*w);g.lineTo(q[0]+q[2]*w,q[1]+q[3]*w);g.stroke()};
g.lineCap='round';g.lineJoin='round';
if(v>=2){
for(let s=-1;s<=1;s+=2){
g.strokeStyle=ed;g.lineWidth=3.6;
g.beginPath();g.moveTo(tx,s*bl);g.quadraticCurveTo(tx+1,s*(bl+2.6),tx+4.5,s*(bl+3.6));g.stroke();
g.strokeStyle=bw;g.lineWidth=2.2;g.stroke();
}
}
g.beginPath();g.moveTo(A[0][0],A[0][1]);
for(let i=1;i<=N;i++)g.lineTo(A[i][0],A[i][1]);
for(let i=N;i>=0;i--)g.lineTo(B[i][0],B[i][1]);
g.closePath();g.fillStyle=bw;g.fill();g.strokeStyle=ed;g.lineWidth=.7;g.stroke();
g.strokeStyle='rgba(6,8,16,.3)';g.lineWidth=.9;g.beginPath();g.moveTo(A[0][0],A[0][1]);
for(let i=1;i<=N;i++)g.lineTo(A[i][0],A[i][1]);
g.stroke();
g.strokeStyle='rgba(255,255,255,.32)';g.lineWidth=.6;g.beginPath();g.moveTo(C[1][0],C[1][1]);
for(let i=2;i<N;i++)g.lineTo(C[i][0],C[i][1]);
g.stroke();
if(v==0){
for(const t of[.14,.86])pe(t,.3,'#3d2a1e',1.6);
for(const t of[.28,.38,.62,.72])pe(t,-.3,'rgba(60,40,24,.45)',.5);
}else{
for(const t of[.18,.82])pe(t,.5,PV.bk[v],1.5);
}
if(v>=3){
g.save();g.globalCompositeOperation='lighter';
g.globalAlpha=.7+.3*M.sin(T*4);g.strokeStyle=PV.tr[v];g.lineWidth=1.2;
g.beginPath();g.moveTo(C[2][0],C[2][1]);
for(let i=3;i<N-1;i++)g.lineTo(C[i][0],C[i][1]);
g.stroke();
g.restore();
}
for(let s=-1;s<=1;s+=2){
const kx=v>=2?tx+4.5:tx,ky=v>=2?s*(bl+3.6):s*bl;
if(v==4){
for(let k=0;k<3;k++){
const q=at(s<0?.1+k*.12:.9-k*.12),bx=q[0]+q[2]*q[4],by=q[1]+q[3]*q[4],ln=3.8-k*.6;
poly([bx,by-s*1.2,bx+q[2]*ln,by+q[3]*ln+s*2.8,bx,by+s*3.4],PV.bk[v],ed,.45);
}
}
if(v==3)poly([kx-1.2,ky,kx+.6,ky+s*5.5,kx+2.2,ky],PV.pd[v],ed,.5);
if(v==5){
poly([kx-1.4,ky,kx,ky+s*6.5,kx+1.4,ky,kx,ky-s],'#e4f3ff',ed,.5);
poly([kx+1.2,ky,kx+3.4,ky+s*3.6,kx+2.8,ky-s*.6],'#bfe0fa',ed,.4);
}
if(v>=1){g.fillStyle=PV.bk[v];g.strokeStyle=ed;g.lineWidth=.5;g.beginPath();g.arc(kx,ky,1.2+v*.12,0,TAU);g.fill();g.stroke()}
if(v==2)gl('f',kx,ky,7,.4+.15*M.sin(T*5+s));
if(v==3)gl('e',kx,ky,7,.35);
if(v==5)gl('s',kx,ky+s*3,8,.4);
}
const gx=at(.5)[0];
g.fillStyle=v?PV.arm2[v]:'#3a2a1e';g.strokeStyle=ed;g.lineWidth=.6;
g.beginPath();g.rect(gx-2.4,-4.8,4.8,9.6);g.fill();g.stroke();
g.strokeStyle='rgba(255,255,255,.22)';g.lineWidth=.5;
g.beginPath();
for(let k=-2;k<=2;k++){g.moveTo(gx-2.4,k*1.8-.6);g.lineTo(gx+2.4,k*1.8+.6)}
g.stroke();
if(v>0){g.strokeStyle=PV.bk[v];g.lineWidth=1;g.beginPath();g.moveTo(gx-2.6,-4.8);g.lineTo(gx+2.6,-4.8);g.moveTo(gx-2.6,4.8);g.lineTo(gx+2.6,4.8);g.stroke()}
if(v>=2){
ov(gx,0,3+v*.3,4.2+v*.35,PV.rm[v]);
ov(gx,0,1.2+v*.2,2.2+v*.25,PV.bk[v]);
}
}
function drawP(part){
const sn=M.min(1,M.abs(p.vx)/190),ph=p.wk,id=M.sin(T*1.9),ce=p.ch,da=p.da,sh=p.sh;
const sx=(1+p.sq*.55)*(1+p.vt*.03),sy=(1-p.sq*.55+p.air*M.min(.1,M.abs(p.vy)/6000))*(1+p.vt*.03);
const hy=-26-(1-M.abs(M.sin(ph)))*2.4*sn*(1-p.air)+id*.45;
const ln=sn*.05-.02-p.rc*.1+(p.dr?.04+ce*.04:0)-p.vy*p.air*.00011+M.sin(ph)*.025*sn+id*.01*(1-sn);
const fa=M.max(0,M.min(1,(150-p.vy)/500));
const wx=M.sin(ph)*.5*sn+M.sin(T*.8)*.4*(1-sn)*(1-p.air),lg=M.max(-1,M.min(1,(p.vx-p.cv)*p.f/260));
const sw=M.sin(ph)*4*sn,shy=-19+id*.3,jt=M.sin(T*55)*.35*M.max(0,(ce-.85)/.15);
const FX=lr(lr(lr(11-sw*.4,21,da),14,sh),25,p.ga)-p.rc*2.5;
const FY=lr(lr(lr(-9-M.abs(M.cos(ph))*.8*sn,-20,da),-16,sh),-23,p.ga)+jt;
const BX=lr(lr(-1-sw,18-ce*13,da*(1-sh)),22,p.ga),BY=lr(lr(-8,-21,da*(1-sh)),-24,p.ga);
const fp=o=>{
const q=ph+o,a=o?1:0;
const x=M.sin(q)*12*sn+(a?-3:3)*(1-sn),y=-M.max(0,M.cos(q))*5.5*sn;
const ax=a?-3-2*fa:4+3*fa,ay=a?-1-4*fa:-3-8*fa;
return[lr(x,ax,p.air),lr(y,ay,p.air)-2.3];
};
const leg=(o,hx,c1,c2)=>{
const f=fp(o);
const k=limb(hx,hy,f[0],f[1],.6+M.max(0,-2.3-f[1])*.3,c1,c2,1);
g.strokeStyle='rgba(255,255,255,.12)';g.lineWidth=1.5;g.beginPath();g.moveTo(hx+1.3,hy);g.lineTo(k[0]+1.3,k[1]);g.lineTo(f[0]+1.3,f[1]-.5);g.stroke();
evBt(k[0],k[1],f[0],f[1],p.vt);
};
g.save();g.translate(p.x,p.y);g.scale(p.f*sx,sy);
if(part==0){
leg(PI,-1.5,'#141b27','#241a14');
g.save();g.translate(wx,hy);g.rotate(ln);
if(p.vt==4)evWg(sn);
if(wgT()==1&&p.wa>.01)evWn(p.wa,p.wp);
if(wgT()==2)ev5W();
const cs=sn*5+p.air*3+id*.6,cw=M.sin(T*2.3)*1.3+M.sin(T*5.1+1)*.5*sn,cl=p.vt*2.6,cx=-5.2-p.vt*.8-cs+cw-lg*5;
g.fillStyle=PV.cape[p.vt];g.beginPath();g.moveTo(-3,-20);
g.quadraticCurveTo(-5.8-cs*.6,-8,cx,12+cl);
if(p.vt>=2){for(let k=1;k<=4;k++){const t=k/4;g.lineTo(lr(cx,3,t),12+cl+(k&1?-3:1.6)+M.sin(T*3+k)*.8)}}
else g.quadraticCurveTo(-2+cw*.5,14.5+cl,3,11.5+cl);
g.lineTo(4.5,-17);g.closePath();g.fill();shP(cx-4,4.5,.4,.06);
g.strokeStyle=PV.tr[p.vt];g.lineWidth=.9+p.vt*.25;g.stroke();
g.save();g.translate(-5.5,-13);g.rotate(-.38);
g.fillStyle='#5a4030';g.fillRect(-2.6,-9,5.2,17);
g.fillStyle='#3d2a1e';g.fillRect(-2.6,-9,5.2,2);
g.strokeStyle='#4f8f86';g.lineWidth=1.3;
for(let k=0;k<3;k++){g.beginPath();g.moveTo(-1.5+k*1.5,-9);g.lineTo(-2+k*1.8,-14.5);g.stroke()}
g.restore();
const r=ik(-1,shy,BX,BY,11,11,1);
const ex=lr(r[0],-7,da*(1-sh)),ey=lr(r[1],-20,da*(1-sh));
const hx=lr(r[2],BX,da*(1-sh)),hyy=lr(r[3],BY,da*(1-sh));
g.lineCap='round';g.lineJoin='round';g.strokeStyle=PV.arm2[p.vt];g.lineWidth=4.6;
g.beginPath();g.moveTo(-1,shy);g.lineTo(ex,ey);g.lineTo(hx,hyy);g.stroke();
g.strokeStyle='rgba(6,8,16,.22)';g.stroke();shL();
evGv(ex,ey,hx,hyy,'#a8825f',2.2,p.vt);
g.fillStyle=PV.tun[p.vt];g.beginPath();g.moveTo(-5.5,1);g.lineTo(5.5,1);
g.quadraticCurveTo(7,-9,6,-18);g.lineTo(-.5,-21.5);g.lineTo(-6,-18);
g.quadraticCurveTo(-6.5,-9,-5.5,1);g.closePath();g.fill();shP(-6.5,7,.36,.16);
g.strokeStyle='#4a3524';g.lineWidth=1.8;g.beginPath();g.moveTo(-4,-19);g.lineTo(5.2,-3);g.stroke();
if(p.vt>=1){
g.globalAlpha=.7;
poly([-5.6,-18,5.8,-18,5.2,-9,0,-5,-5.2,-9],PV.pd[p.vt],PV.tr[p.vt],.8);
g.globalAlpha=1;
}
if(p.vt>=2){
poly([-5.6,1,5.6,1,5+p.vt*.5,4+p.vt*1.1,1.5,3+p.vt*1.1,-1.5,5+p.vt*1.2,-5-p.vt*.5,4+p.vt*1.1],PV.tun[p.vt],PV.tr[p.vt],.8);
}
g.fillStyle='#4a3524';g.fillRect(-6,-3,12,2.6);
g.fillStyle=PV.bk[p.vt];g.fillRect(1.5,-3.2,2.6,3);
g.restore();
}else{
leg(0,1.5,'#18202d','#2c2018');
g.save();g.translate(wx,hy);g.rotate(ln);
const hx=1.3+sn*.6+M.sin(ph-.9)*.5*sn,hyy=-29+id*.3-M.abs(M.sin(ph-.8))*.9*sn*(1-p.air);
g.fillStyle=PV.hood[p.vt];
g.beginPath();g.arc(hx,hyy,8.6,0,TAU);g.fill();shR(hx,hyy,8.6);
g.beginPath();g.moveTo(hx-5,hyy-6);
g.quadraticCurveTo(hx-11-sn*3-p.vt*1.2,hyy-3,-9-sn*4-p.vt*2.4+M.sin(T*2.3)*1.2-lg*3,-21-p.air*2+p.vt*1.2);
g.lineTo(hx-3,hyy+6);g.closePath();g.fill();
g.fillStyle='rgba(6,8,16,.2)';g.fill();
if(p.vt==1||p.vt==3){
g.beginPath();g.moveTo(hx-5.6,hyy-5);g.quadraticCurveTo(hx-3,hyy-10-p.vt*2,hx-8-p.vt*1.6,hyy-14-p.vt*3.4);g.quadraticCurveTo(hx+2,hyy-10,hx+6,hyy-6.4);g.closePath();g.fill();
}
if(p.vt==2||p.vt==3)evHn(hx,hyy,p.vt);
g.fillStyle='#0b0f17';g.beginPath();g.ellipse(hx+3.6,hyy+.6,4.6,5.2,0,0,TAU);g.fill();
evMk(hx,hyy);
const ey=hyy-.6-(p.vy<-100&&p.air>.5?1:0),eh=p.bl<0?.3:1.7;
g.fillStyle=PV.ey[p.vt];
g.beginPath();g.ellipse(hx+6.4,ey,1.15,eh,0,0,TAU);g.fill();
g.beginPath();g.ellipse(hx+2.8,ey,1.15,eh,0,0,TAU);g.fill();
gl(AE[p.vt].k,hx+4.6,ey,7,.3);
g.strokeStyle=PV.rm[p.vt];g.lineWidth=1;
g.beginPath();g.arc(hx,hyy,8.6,-2.6,-.4);g.stroke();
evHd(hx,hyy,-9-sn*4-p.vt*2.4+M.sin(T*2.3)*1.2-lg*3,-21-p.air*2+p.vt*1.2);
if(p.vt==2)evFl(hx,hyy);
if(p.vt==3)evSh();
if(p.vt==4){evCr(hx,hyy);evHl(hx,hyy)}
if(p.vt==5)ev5H(hx,hyy);
const r=ik(1.5,shy,FX,FY,11,11,1);
g.lineCap='round';g.lineJoin='round';g.strokeStyle=PV.arm[p.vt];g.lineWidth=4.8;
g.beginPath();g.moveTo(1.5,shy);g.lineTo(r[0],r[1]);g.lineTo(r[2],r[3]);g.stroke();shL();
const HX=r[2],HY=r[3];
if(p.vt>0){
ov(1.5,shy-.5,5.4+p.vt*.45,3.8+p.vt*.3,PV.pd[p.vt],.2);
g.strokeStyle=PV.tr[p.vt];g.lineWidth=.8;
g.beginPath();g.ellipse(1.5,shy-.5,5.4+p.vt*.45,3.8+p.vt*.3,.2,3.4,5.8);g.stroke();
for(let k=0;k<p.vt-1;k++)poly([-1.6+k*3.4,shy-2.6,-.2+k*3.4,shy-7.4-k*1.2,1.4+k*3.4,shy-2.6],PV.pd[p.vt]);
}
if(sh<.98&&p.ga<.98){
g.save();g.globalAlpha=(1-sh)*(1-p.ga);g.translate(HX,HY);g.rotate(lr(.95,0,da));g.translate(-3,0);
const tx=-1-ce*3.5,nl=lr(tx+M.sin(T*70)*p.rc*2.5,BX-HX+3,da),ny=lr(0,BY-HY,da),bl=17+p.vt*1.6,bc=8.5+p.vt*.9;
evBw(tx,bl,bc,p.vt);
g.strokeStyle='rgba(235,225,200,.75)';g.lineWidth=.8;
g.beginPath();g.moveTo(tx,-bl);g.lineTo(nl,ny);g.lineTo(tx,bl);g.stroke();
if(p.dr){
const ae=AE[evl()],v=evl(),sc=['#b8a07a','#cfd8e4','#c9764a','#b8a8e8','#e8c868','#cfe6ff'][v];
g.lineCap='round';g.lineJoin='round';
g.strokeStyle='rgba(6,8,16,.5)';g.lineWidth=2.4;
g.beginPath();g.moveTo(nl,ny);g.lineTo(6,ny);g.stroke();
g.strokeStyle=sc;g.lineWidth=1.5;
g.beginPath();g.moveTo(nl,ny);g.lineTo(6,ny);g.stroke();
if(v>0){g.strokeStyle='rgba('+ae.c+','+(.5+ce*.4)+')';g.lineWidth=.6+v*.12;g.beginPath();g.moveTo(nl+2,ny+.3);g.lineTo(6,ny+.3);g.stroke()}
g.fillStyle=ae.f;g.strokeStyle='rgba(6,8,16,.55)';g.lineWidth=.4;
g.beginPath();g.rect(3.6,ny-1.3-v*.2,2.2,2.6+v*.4);g.fill();g.stroke();
g.beginPath();g.moveTo(12+v*1.2,ny);g.lineTo(6.5,ny-2.6-v*.6);g.lineTo(3.6,ny-1.1-v*.3);g.lineTo(6,ny);g.lineTo(3.6,ny+1.1+v*.3);g.lineTo(6.5,ny+2.6+v*.6);g.closePath();
g.fillStyle=ae.h;g.fill();
g.save();g.clip();g.fillStyle='rgba(6,8,16,.2)';g.fillRect(0,ny,24,8);g.restore();
g.strokeStyle='rgba(6,8,16,.6)';g.lineWidth=.5;g.stroke();
for(let s=-1;s<=1;s+=2){
g.save();g.translate(0,ny);g.scale(1,s);
g.fillStyle=ae.f;
g.beginPath();g.moveTo(nl+4.6,-.4);g.lineTo(nl+3,-3.2);g.lineTo(nl-2.2,-3.2);g.lineTo(nl-.6,-.4);g.closePath();g.fill();
g.fillStyle=ae.g;
g.beginPath();g.moveTo(nl+3.6,-.6);g.lineTo(nl+2.6,-1.8);g.lineTo(nl-.8,-1.8);g.lineTo(nl+.2,-.6);g.closePath();g.fill();
g.strokeStyle='rgba(6,8,16,.5)';g.lineWidth=.4;
g.beginPath();g.moveTo(nl+4.6,-.4);g.lineTo(nl+3,-3.2);g.lineTo(nl-2.2,-3.2);g.lineTo(nl-.6,-.4);g.closePath();g.stroke();
g.restore();
}
ov(nl-.8,ny,1,1.3,sc);
gl(ae.k,9,ny,6+ce*12,ce*.8+.1+(ce>=1?M.sin(T*18)*.12:0));
}
g.restore();
}
evGv(r[0],r[1],HX,HY,'#b88f6b',2.4,p.vt);
if(sh>.02){
g.save();g.translate(HX+3,HY-1);g.scale(sh,sh);
const gr=g.createRadialGradient(-2,-4,2,0,0,17);
gr.addColorStop(0,'#4a6578');gr.addColorStop(1,'#243543');
g.fillStyle=gr;g.strokeStyle='#8fa6b3';g.lineWidth=1.8;
g.beginPath();g.ellipse(0,0,11,16,0,0,TAU);g.fill();g.stroke();
g.strokeStyle='rgba(200,225,240,.18)';g.lineWidth=1;
g.beginPath();g.ellipse(0,0,7,11.5,0,0,TAU);g.stroke();
g.strokeStyle='#d9a45f';g.lineWidth=1.2;
g.beginPath();g.moveTo(0,-12);g.lineTo(0,-6.5);g.moveTo(0,6.5);g.lineTo(0,12);g.stroke();
g.fillStyle='#9fb6c2';g.beginPath();g.ellipse(1,0,3,3.8,0,0,TAU);g.fill();
g.restore();
gl('c',HX+3,HY,24+p.sf*16,(.1+.05*M.sin(T*3))*sh+p.sf*.6);
g.globalCompositeOperation='lighter';
g.strokeStyle='rgb(150,195,225)';g.lineWidth=1.3;
g.globalAlpha=M.min(1,(.1+.04*M.sin(T*3))*sh+p.sf*.4);
g.beginPath();g.arc(-2,-14,36+p.sf*6,-.9,.9);g.stroke();
g.globalAlpha=1;g.globalCompositeOperation='source-over';
}
g.restore();
}
g.restore();
if(part==0){
const nx=1.5,ny=-21;
const ux=nx*M.cos(ln)-ny*M.sin(ln),uy=nx*M.sin(ln)+ny*M.cos(ln)+hy;
upSf(DT,p.x+p.f*sx*ux,p.y+sy*uy);
}
}


const N3={yc:M.cos(.55),ys:M.sin(.55),pc:M.cos(.24),ps:M.sin(.24),f:1,tx:0,ty:0},NV=new Float64Array(40);
const n3c=v=>v>255?255:v<0?0:v|0;
const n3d=(x,y,z)=>(x*N3.ys+z*N3.yc)*N3.pc+y*N3.ps;
function n3p(i,x,y,z){
const X=x*N3.yc-z*N3.ys,Z=x*N3.ys+z*N3.yc,Y=y*N3.pc-Z*N3.ps,D=Z*N3.pc+y*N3.ps,k=1/(1-D*.0045),o=i*5;
NV[o]=X;NV[o+1]=Y;NV[o+2]=D;NV[o+3]=X*k;NV[o+4]=-Y*k;
}
function n3t(i,j,k,cx,cy,cz,c,al,ed){
const a=i*5,b=j*5,e=k*5;
const ux=NV[b]-NV[a],uy=NV[b+1]-NV[a+1],uz=NV[b+2]-NV[a+2],vx=NV[e]-NV[a],vy=NV[e+1]-NV[a+1],vz=NV[e+2]-NV[a+2];
let nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;
if(nx*((NV[a]+NV[b]+NV[e])/3-cx)+ny*((NV[a+1]+NV[b+1]+NV[e+1])/3-cy)+nz*((NV[a+2]+NV[b+2]+NV[e+2])/3-cz)<0){nx=-nx;ny=-ny;nz=-nz}
if(nz<=0)return;
const nl=M.hypot(nx,ny,nz)||1;nx/=nl;ny/=nl;nz/=nl;
const df=M.max(0,-.42*N3.f*nx+.72*ny+.55*nz),sp=M.pow(df,8)*.55,rm=M.pow(1-nz,2)*.4,li=.5+.5*df+rm*.3;
g.fillStyle='rgba('+n3c(c[0]*li*.92+(255-c[0])*sp)+','+n3c(c[1]*(.2+.8*li)+(255-c[1])*sp)+','+n3c(c[2]*(.4+.6*li)+(255-c[2])*sp)+','+al+')';
g.beginPath();g.moveTo(NV[a+3],NV[a+4]);g.lineTo(NV[b+3],NV[b+4]);g.lineTo(NV[e+3],NV[e+4]);g.closePath();g.fill();
if(ed){g.strokeStyle='rgba(235,245,255,.38)';g.lineWidth=.5;g.stroke()}
}
function n3B(ax,ay,az,bx,by,bz,ux,uy,uz,w,th,t,c,al,ed){
const dx=bx-ax,dy=by-ay,dz=bz-az,dl=M.hypot(dx,dy,dz)||1,nx=dx/dl,ny=dy/dl,nz=dz/dl,pu=ux*nx+uy*ny+uz*nz;
ux-=nx*pu;uy-=ny*pu;uz-=nz*pu;
const ul=M.hypot(ux,uy,uz)||1;ux/=ul;uy/=ul;uz/=ul;
const vx=ny*uz-nz*uy,vy=nz*ux-nx*uz,vz=nx*uy-ny*ux,mx=ax+dx*t,my=ay+dy*t,mz=az+dz*t;
n3p(0,ax,ay,az);n3p(1,mx+ux*w,my+uy*w,mz+uz*w);n3p(2,mx+vx*th,my+vy*th,mz+vz*th);n3p(3,mx-ux*w,my-uy*w,mz-uz*w);n3p(4,mx-vx*th,my-vy*th,mz-vz*th);n3p(5,bx,by,bz);n3p(6,mx,my,mz);
const cx=NV[30],cy=NV[31],cz=NV[32];
N3.tx=NV[28];N3.ty=NV[29];
for(let k=0;k<4;k++){const j=1+k,l=1+(k+1)%4;n3t(0,j,l,cx,cy,cz,c,al,ed);n3t(5,l,j,cx,cy,cz,c,al,ed)}
}
function n3R(R,tx,tz,sp,al,hf,wd){
const N=44,ct=M.cos(tx),st=M.sin(tx),cz=M.cos(tz),sz=M.sin(tz);
let px=0,py=0,pd=0;
for(let j=0;j<=N;j++){
const a=sp+j/N*TAU,x=M.cos(a)*R,z=M.sin(a)*R,z1=z*ct,y1=z*st,x2=x*cz-y1*sz,y2=x*sz+y1*cz;
n3p(0,x2,y2,z1);
const sx=NV[3],sy=NV[4],d=NV[2];
if(j){
const dm=(d+pd)*.5,k=dm/R*.5+.5;
if((dm>=0)==!!hf){g.globalAlpha=M.max(0,al*(.25+.75*k));g.lineWidth=wd*(.55+.55*k);g.beginPath();g.moveTo(px,py);g.lineTo(sx,sy);g.stroke()}
}
px=sx;py=sy;pd=d;
}
}
function ev5Bl(L,sg,q,wf,wp){
const Lm=(17+30*q)*(1+wf*.16),Lb=Lm*.82,fb=.6-.5*q,A=.1+.72*q+wf*.1;
for(let ly=0;ly<2;ly++){
const n=ly?5:7,ls=ly?.5:1,dr=ly?.22:0;
for(let i=0;i<n;i++){
const s=(i+1)/n,f=fb+A*M.sin(wp-.65*s-ly*.25),c=M.cos(f),sn=M.sin(f);
const ox=-.34*Lb*s,oy=.66*Lb*s,oz=.66*Lb*s;
const rx=ox,ry=oy*c+oz*sn,rz=sg*(3.2+(-oy*sn+oz*c)+ly*.8);
let dx=-(.82-.36*s),dy=-(.48-.34*s)-dr,dz=.2+.5*s;
const dl=M.hypot(dx,dy,dz);dx/=dl;dy/=dl;dz/=dl;
const ex=dx,ey=dy*c+dz*sn,ez=sg*(-dy*sn+dz*c),Lf=Lm*(.5+.5*M.pow(s,.8))*ls,w=Lf*(ly?.2:.17)+1.2;
const bx=rx+ex*Lf,by=ry+ey*Lf,bz=rz+ez*Lf,k=ly?.55:s;
L.push({ax:rx,ay:ry,az:rz,bx,by,bz,ux:-.34,uy:.66*(c+sn),uz:sg*.66*(c-sn),w,th:w*.3,t:.4,c:[110+125*k,165+81*k,240+15*k],z:n3d((rx+bx)*.5,(ry+by)*.5,(rz+bz)*.5)-ly*.01,ed:1,gw:ly?0:1,wg:sg,i:ly?-1:i});
if(!ly&&i==n-1)L.push({ax:0,ay:0,az:sg*3.2,bx:rx,by:ry,bz:rz,ux:0,uy:0,uz:1,w:1.8,th:1.5,t:.5,c:[190,220,250],z:n3d(rx*.5,ry*.5,(rz+sg*3.2)*.5),ed:0,gw:0,wg:sg,i:-1});
}
}
}
function ev5W(){
const q=p.wa,wf=p.wf||0,L=[];
N3.f=p.f;
g.save();g.translate(-4,-17);
gl('s',2,-6,52+M.sin(T*2.4)*4+wf*26,.14+wf*.2);
ev5Bl(L,-1,q,wf,p.wp);ev5Bl(L,1,q,wf,p.wp);
L.sort((a,b)=>a.z-b.z);
for(const b of L){
n3B(b.ax,b.ay,b.az,b.bx,b.by,b.bz,b.ux,b.uy,b.uz,b.w,b.th,b.t,b.c,.97,b.ed);
b.sx=N3.tx;b.sy=N3.ty;
}
g.globalCompositeOperation='lighter';
for(const sg of[-1,1]){
const T2=L.filter(b=>b.wg==sg&&b.i>=0).sort((a,b)=>b.i-a.i);
n3p(0,0,0,sg*3.2);
g.fillStyle='rgba(190,225,255,'+(.07+wf*.1)+')';
g.beginPath();g.moveTo(NV[3],NV[4]);
for(const b of T2)g.lineTo(b.sx,b.sy);
g.closePath();g.fill();
}
for(const b of L){
if(!b.gw)continue;
gl('s',b.sx,b.sy,9+wf*8,.5+wf*.3);
}
g.globalCompositeOperation='source-over';
g.restore();
}
function ev5H(hx,hh){
const L=[],a=T*1.1,bob=M.sin(T*2.1)*1.6,lg=-M.max(-1,M.min(1,p.vx*p.f/320))*3.5,wf=p.wf||0;
N3.f=p.f;
g.save();g.translate(hx-1+lg,hh-22+bob);
gl('s',0,0,22+wf*10,.3+wf*.2);
L.push({ax:0,ay:-6.4,az:0,bx:0,by:8.6,bz:0,ux:M.cos(a),uy:0,uz:M.sin(a),w:3.6,th:3.6,t:.42,c:[190,222,255],z:0,ed:1,m:1});
for(let k=0;k<3;k++){
const o=T*1.8+k*2.094,x=M.cos(o)*11,y=M.sin(o)*5,z=M.sin(o)*9.8;
L.push({ax:x,ay:y-2.8,az:z,bx:x,by:y+2.8,bz:z,ux:M.cos(a*2+k),uy:0,uz:M.sin(a*2+k),w:1.5,th:1.5,t:.5,c:[225,240,255],z:n3d(x,y,z),ed:0,m:0});
}
L.sort((u,v)=>u.z-v.z);
for(const b of L)n3B(b.ax,b.ay,b.az,b.bx,b.by,b.bz,b.ux,b.uy,b.uz,b.w,b.th,b.t,b.c,.97,b.ed);
gl('w',0,0,9,.4);
g.restore();
}
