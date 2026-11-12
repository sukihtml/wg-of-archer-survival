function upH(dt){
p.inv-=dt;p.hu-=dt;p.rg-=dt;GQ.l=M.max(0,GQ.l-dt);
FXA.fl=M.max(0,FXA.fl-dt*1.6);FXA.sa=M.max(0,FXA.sa-dt);
if(p.dead){p.dead+=dt;if(p.dead>3.2&&!pvOn)menuGo()}
else if(p.rg<=0&&p.hp<p.mh)p.hp=M.min(p.mh,p.hp+2*gDm()*dt);
if(msg){msg.l-=dt;if(msg.l<=0)msg=null}
}

function zig(x0,y0,x1,y1,j,sd){
const dx=x1-x0,dy=y1-y0,d=M.hypot(dx,dy)||1,n=M.max(4,M.floor(d/16)),nx=-dy/d,ny=dx/d;
g.moveTo(x0,y0);
for(let i=1;i<n;i++){const t=i/n,o=(hs(sd+i*3.7)-.5)*2*j*M.sin(t*PI);g.lineTo(x0+dx*t+nx*o,y0+dy*t+ny*o)}
g.lineTo(x1,y1);
}
function orb(x,y,r,k,sd){
gl('z',x,y,r*2.6,.35+k*.6);
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.strokeStyle='rgb(190,130,255)';g.lineWidth=1.2;
for(let i=0;i<6;i++){
const a=hs(sd+i*1.7)*TAU,l=r*(.9+hs(sd+i*2.9)*1.1);
g.globalAlpha=M.min(1,.5+k*.4);
g.beginPath();zig(x,y,x+M.cos(a)*l,y+M.sin(a)*l,r*.45,sd+i*11);g.stroke();
}
g.restore();
gl('w',x,y,r*1.2,.45+k*.4);
}

function sqLeg(q,sn,hx,hy,c1,c2,w){
const fx=M.sin(q)*12*sn+(hx<0?-3:3)*(1-sn),lf=M.max(0,M.cos(q))*5.5*sn,fy=-lf-2.3;
const ax=fx-.6,ay=fy-3.4,dx=ax-hx,dy=ay-hy,d=M.hypot(dx,dy)||1,ux=dx/d,uy=dy/d,nx=-uy,ny=ux;
const px=(t,v)=>hx+dx*t+nx*v*w,py=(t,v)=>hy+dy*t+ny*v*w,hw=3.5,aw=2,wd=t=>hw+(aw-hw)*t;
const lg=(a,b,c)=>{g.fillStyle=c;g.beginPath();g.moveTo(px(a,-wd(a)),py(a,-wd(a)));g.lineTo(px(b,-wd(b)),py(b,-wd(b)));g.lineTo(px(b,wd(b)),py(b,wd(b)));g.lineTo(px(a,wd(a)),py(a,wd(a)));g.closePath();g.fill()};
lg(0,1,c1);lg(.48,1,c2);
g.strokeStyle='rgba(0,0,0,.42)';g.lineWidth=.8;g.beginPath();g.moveTo(px(0,hw),py(0,hw));g.lineTo(px(1,aw),py(1,aw));g.stroke();
g.strokeStyle='rgba(255,240,210,.18)';g.lineWidth=.7;g.beginPath();g.moveTo(px(.04,-hw*.62),py(.04,-hw*.62));g.lineTo(px(.96,-aw*.62),py(.96,-aw*.62));g.stroke();
sl(px(.48,-wd(.48)),py(.48,-wd(.48)),px(.48,wd(.48)),py(.48,wd(.48)),'rgba(0,0,0,.45)',.9);
poly([px(.4,0),py(.4,0),px(.47,wd(.47)*.7),py(.47,wd(.47)*.7),px(.56,0),py(.56,0),px(.47,-wd(.47)*.7),py(.47,-wd(.47)*.7)],c1,'rgba(0,0,0,.45)',.6);
sl(px(.8,-wd(.8)),py(.8,-wd(.8)),px(.8,wd(.8)),py(.8,wd(.8)),'rgba(0,0,0,.3)',.8);
poly([ax-w*2.2,ay-.4,ax+w*2.2,ay-.4,ax+w*2.2+.4,fy-.8,fx+5.4,fy+.2-lf*.25,fx+7,fy+1.8-lf*.2,fx+5,fy+2.1,fx-3.6,fy+2.1,fx-3.8,fy-.4],c2,'rgba(0,0,0,.45)',.6);
sl(fx-3.4,fy+1.8,fx+5.6,fy+1.8,'rgba(0,0,0,.5)',1);
sl(ax-w*2,ay+.9,ax+w*2,ay+.9,'rgba(255,240,210,.14)',.7);
return[hx+dx*.5,hy+dy*.5,fx,fy];
}
function rbn(sx,sy,len,sn,cs,cw,c1,c2,ph,wd){
const n=9,A=[],B=[],C=[],hb=len*(.26+sn*.6),vb=len*(.84-sn*.26);
for(let k=0;k<=n;k++){const t=k/n,x=sx-t*hb-cs*t*.4+cw*t+M.sin(T*5.5-t*5+ph)*(.8+sn*2.8)*t,y=sy+t*vb+M.sin(T*4.4-t*4+ph)*(.5+sn*1.2)*t,w=wd*(1-t*.45);A.push([x+w*.45,y]);B.push([x-w,y+t*.6]);C.push([x-w*.28,y])}
const P=[],Q=[];
for(let k=0;k<=n;k++)P.push(A[k][0],A[k][1]);
for(let k=n;k>=0;k--)P.push(B[k][0],B[k][1]);
poly(P,c1,'rgba(0,0,0,.38)',.7);
for(let k=0;k<=n;k++)Q.push(A[k][0],A[k][1]);
for(let k=n;k>=0;k--)Q.push(lr(A[k][0],B[k][0],.5),lr(A[k][1],B[k][1],.5));
poly(Q,c2);
const e=A[n],f=B[n];
for(let k=0;k<4;k++){const u=k/4,v=(k+1)/4,sw=M.sin(T*7+k*1.9+ph)*1.2;poly([lr(e[0],f[0],u),lr(e[1],f[1],u),lr(e[0],f[0],(u+v)/2)+sw,lr(e[1],f[1],(u+v)/2)+4.2+(k&1)*1.6,lr(e[0],f[0],v),lr(e[1],f[1],v)],c1)}
return C;
}
function rbfx(A,k,sd){
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
for(let i=1;i<A.length;i++){
const a=A[i],tw=.5+.5*M.sin(T*6+i*1.9+sd);
if(k==0){
poly([a[0],a[1]-1.8,a[0]+1,a[1],a[0],a[1]+1.8,a[0]-1,a[1]],'rgba(215,238,255,'+(.35+tw*.55)+')');
if(i%3==0)gl('c',a[0],a[1],5+tw*3,.22+tw*.2);
}else{
const b=A[i-1];
g.globalAlpha=.35+tw*.55;g.strokeStyle='rgb(200,150,255)';g.lineWidth=.8;
g.beginPath();zig(b[0],b[1],a[0],a[1],2.2,M.floor(T*18)*3.1+i*5+sd);g.stroke();
if(i%3==0)gl('z',a[0],a[1],5+tw*3,.22+tw*.25);
}}
g.restore();
}
function pld(x,y,c1,c2,k){
poly([x-5.4,y+1,x-4.2,y-3.4,x,y-4.6,x+4.6,y-3,x+5.6,y+1.4,x+2,y+3.2,x-2.6,y+3],c1,'rgba(0,0,0,.5)',.7);
poly([x-5.4,y+1,x-4.2,y-3.4,x-1.4,y-4.2,x-2.6,y+3],'rgba(255,255,255,.14)');
poly([x+.4,y+3,x+5.6,y+1.4,x+2,y+3.2],c2);
sqSpk(x-1.6,y-3.6,-1.9,6.4*k,1.7,c2,'rgba(0,0,0,.5)');
sqSpk(x+2.6,y-3.4,-1.2,5*k,1.4,c2,'rgba(0,0,0,.5)');
sl(x-3.4,y+.4,x+3.6,y+.8,'rgba(0,0,0,.3)',.7);
}
function sqLb(x0,y0,x1,y1,x2,y2,w,c){
const a=[[x0,y0,x1,y1,3.3*w,2.5*w],[x1,y1,x2,y2,2.6*w,1.7*w]];
g.fillStyle=c;
for(const q of a){const dx=q[2]-q[0],dy=q[3]-q[1],d=M.hypot(dx,dy)||1,nx=-dy/d,ny=dx/d;
g.beginPath();g.moveTo(q[0]+nx*q[4],q[1]+ny*q[4]);g.lineTo(q[2]+nx*q[5],q[3]+ny*q[5]);g.lineTo(q[2]-nx*q[5],q[3]-ny*q[5]);g.lineTo(q[0]-nx*q[4],q[1]-ny*q[4]);g.closePath();g.fill()}
const ba=M.atan2(y1-y0,x1-x0),fa=M.atan2(y2-y1,x2-x1);
ov(x0,y0,3.5*w,3.3*w,c);
ov(lr(x0,x1,.4)-M.sin(ba)*1,lr(y0,y1,.4)+M.cos(ba)*1,2.7*w,3*w,c,ba);
ov(x1,y1,2.6*w,2.6*w,c);
ov(lr(x1,x2,.3)-M.sin(fa)*.8,lr(y1,y2,.3)+M.cos(fa)*.8,2.6*w,2.1*w,c,fa);
g.strokeStyle='rgba(255,245,220,.13)';g.lineWidth=.8;g.beginPath();g.moveTo(x0+1,y0-2.4*w);g.lineTo(x1,y1-2*w);g.stroke();
g.strokeStyle='rgba(0,0,0,.22)';g.beginPath();g.moveTo(x1,y1+2*w);g.lineTo(x2,y2+1.5*w);g.stroke();
}
function sqHd(x,y,a,c,w){
const ca=M.cos(a),sa=M.sin(a);
ov(x+ca*1,y+sa*1,2.7*w,2.3*w,c,a);
ov(x+ca*3,y+sa*3,1.5*w,1.9*w,c,a);
sl(x+ca*1.4-sa*1.1,y+sa*1.4+ca*1.1,x+ca*4.2-sa*1.1,y+sa*4.2+ca*1.1,c,1.1*w);
sl(x+ca*1.4+sa*1.1,y+sa*1.4-ca*1.1,x+ca*4.2+sa*1.1,y+sa*4.2-ca*1.1,c,1.1*w);
g.strokeStyle='rgba(0,0,0,.28)';g.lineWidth=.6;g.beginPath();g.moveTo(x+ca*2.6-sa*1.4,y+sa*2.6+ca*1.4);g.lineTo(x+ca*2.6+sa*1.4,y+sa*2.6-ca*1.4);g.stroke();
}
function sqArm(col,hand,th,L,shy,w){
const r=ik(1.5,shy,1.5+M.cos(th)*L,shy+M.sin(th)*L,11,11,1);
sqLb(1.5,shy,r[0],r[1],r[2],r[3],w,col);
sqHd(r[2],r[3],M.atan2(r[3]-r[1],r[2]-r[0]),hand,w);
return r;
}
function sqEye(x,y,w,c,k){
poly([x,y+w*.1,x+w*.55,y-w*.28,x+w,y-w*.5,x+w*.9,y+w*.12,x+w*.4,y+w*.3],c);
gl(k,x+w*.55,y,w*1.5,.5);
}
function sqSpk(x,y,a,l,w,f,s){
const c=M.cos(a),d=M.sin(a);
poly([x-d*w,y+c*w,x+c*l,y+d*l,x+d*w,y-c*w],f,s,.5);
}

function sqFc(x,y,sk,sd,ey,ek){
poly([x-2.6,y+3.6,x+2.2,y+3.6,x+2.6,y+11,x-2.4,y+11],sd);
ov(x-.8,y-.6,5.6,5.8,sk);
poly([x-2.4,y+.6,x+4.4,y-.4,x+5.8,y+2.4,x+4.6,y+5.8,x+1.2,y+7,x-2.8,y+4.8],sk);
poly([x-6.4,y-1,x-2,y-4,x-1.6,y+4.4,x-5.6,y+3.4],sd);
poly([x+4.6,y+.4,x+7.2,y+2.6,x+4.8,y+3.2],sk);
sl(x+4.8,y+1.8,x+6.6,y+2.6,'rgba(0,0,0,.25)',.6);
sqEye(x+2.6,y-.4,3,ey,ek);
sl(x+1.4,y-2.6,x+6.4,y-1.6,'#120c08',1.5);
sl(x+3,y+4.6,x+5.4,y+4.2,'rgba(40,10,12,.75)',.8);
sl(x+1.2,y+5,x+1.6,y+1.4,'rgba(0,0,0,.18)',.8);
}
function og(x,y,r,c,a){const q=g.createRadialGradient(x,y,0,x,y,r);q.addColorStop(0,'rgba('+c+','+a+')');q.addColorStop(1,'rgba('+c+',0)');g.save();g.globalCompositeOperation='lighter';g.fillStyle=q;g.beginPath();g.arc(x,y,r,0,TAU);g.fill();g.restore()}
function sqFur(x,y,w,c1,c2,k){
g.fillStyle=c1;g.beginPath();g.moveTo(x-w,y);
for(let i=0;i<=7;i++){const u=i/7;g.lineTo(x-w+u*w*2,y-3.2*M.sin(u*PI)-1.2);g.lineTo(x-w+(u+.07)*w*2,y+1.6+(i&1?2.8:.8)+M.sin(T*3.4+i)*.5*(1+k))}
g.closePath();g.fill();g.strokeStyle='rgba(0,0,0,.45)';g.lineWidth=.7;g.stroke();
for(let i=0;i<5;i++)sl(x-w+2+i*w*.42,y-1.4,x-w+1.4+i*w*.42,y+2.6,c2,.8);
}
function hLeg(q,sn,hx,hp,c1,c2,cb,ca,w){
const L=M.max(14,-5.2-hp),lf=M.max(0,M.cos(q))*3.4*sn,L2=L-lf;
const ax=hx+(hx<0?-.4:.4)+M.sin(q)*sn*5.2,ay=hp+L2;
const dx=ax-hx,dy=ay-hp,d=M.hypot(dx,dy)||1,nx=-dy/d,ny=dx/d;
const P=(t,v)=>[hx+dx*t+nx*v*w,hp+dy*t+ny*v*w];
const sg=(a,b,wa,wb,c,s)=>{const p=P(a,-wa),r=P(b,-wb),u=P(b,wb),v=P(a,wa);poly([p[0],p[1],r[0],r[1],u[0],u[1],v[0],v[1]],c,s,.6)};
sg(0,.52,3.7,2.8,c1,'rgba(0,0,0,.5)');
sg(.5,.92,2.8,2.1,c2,'rgba(0,0,0,.5)');
let a=P(.05,-2.3),b=P(.5,-1.6);
sl(a[0],a[1],b[0],b[1],'rgba(255,240,210,.14)',.8);
a=P(.5,-1.6);b=P(.9,-1.2);
sl(a[0],a[1],b[0],b[1],'rgba(255,240,210,.1)',.7);
a=P(.5,-2.8);b=P(.5,2.8);
sl(a[0],a[1],b[0],b[1],'rgba(0,0,0,.3)',.7);
const k=P(.5,0);
poly([k[0]-2.6,k[1]-1,k[0],k[1]-2.4,k[0]+2.6,k[1]-1,k[0]+2.2,k[1]+2,k[0]-2.2,k[1]+2],cb,ca,.6);
poly([ax-2.9,ay-7,ax+2.9,ay-7,ax+2.5,ay-.8,ax+4.6,ay+.8,ax+6.8,ay+3.2,ax+6.6,ay+5.2,ax-3.2,ay+5.2,ax-3.1,ay+1.4,ax-2.7,ay-2],cb,'rgba(0,0,0,.55)',.7);
poly([ax-2.9,ay-7,ax-1,ay-7,ax-1.2,ay+1.2,ax-3.1,ay+1.4],'rgba(255,255,255,.1)');
sl(ax-3.1,ay+4.6,ax+6.7,ay+4.6,'rgba(0,0,0,.55)',1.2);
sl(ax-2.8,ay-3.6,ax+2.8,ay-3.4,ca,1.1);
sl(ax-2.6,ay-6.2,ax+2.6,ay-6,ca,1.1);
return[ax,ay];
}
function sqArrow(nk,hd,k){
sl(nk+3,0,hd-5,0,'#5a4128',1.5);
sl(nk+3,-.5,hd-5,-.5,'rgba(255,235,190,.4)',.5);
poly([nk+.4,0,nk+2.4,-3.3,nk+8.6,-3.3,nk+9.8,0],'#e6dcc2','rgba(0,0,0,.45)',.5);
poly([nk+.4,0,nk+2.4,3.3,nk+8.6,3.3,nk+9.8,0],'#6ff0d0','rgba(0,0,0,.45)',.5);
sl(nk+1.2,0,nk+9,0,'rgba(0,0,0,.35)',.6);
sl(nk+3.4,-1.8,nk+8,-1.8,'rgba(0,0,0,.2)',.5);
ov(nk,0,.9,1.2,'#f2ead2');
poly([hd,0,hd-6.4,-2.9,hd-4.4,0,hd-6.4,2.9],'#e6f6ec','#2a3a30',.4);
poly([hd,0,hd-6.4,-2.9,hd-4.4,0],'rgba(255,255,255,.55)');
sl(hd-8,0,hd-4.4,0,'#8a7550',2);
sl(hd-4.6,0,hd-.4,0,'#8fb8a0',.5);
gl('g',hd-3,0,8+k*10,.3+k*.5);
}
function dAr(s,sn,ph,id,sw,hy,cs,cw){
const c=s.c,aa=s.aa,dr=M.max(0,-sw),rl=M.max(0,sw);
const bb=M.abs(M.cos(ph))*sn*1.1+M.sin(T*2.3+s.id)*.4*(1-sn),hx=3+sn*.6,hh=-30+id*.3+(M.abs(M.cos(ph))-M.abs(M.cos(ph-.7)))*sn*.5,shy=-19+id*.3,hp=hy-5;
hLeg(ph+PI,sn,-2.2,hp,'#1a2316','#212b1c','#17120e','#9a8a62',1);
hLeg(ph,sn,2.2,hp,'#243020','#2b3925','#241b14','#b8a878',1);
g.save();g.translate(0,hp-bb);g.rotate(sw*.025+M.sin(T*2.3)*.01);g.scale(1,1+M.sin(T*2.3+s.id)*.012);
g.lineCap='round';g.lineJoin='round';
cape(21,'#1f2a1c','rgba(0,0,0,.5)',cs,cw,1);
rbn(-3,-18,17,sn,cs,cw,'#1f2a1c','#46603a',2.4,3.8);
g.save();g.translate(-5.5,-14);g.rotate(-.42);
poly([-2.8,-9,2.8,-9,3.2,8,-3.2,8],'#2a2018','#0c0806',.7);
sl(-2.8,-3,2.8,-3.4,'rgba(0,0,0,.4)',.7);sl(-2.8,3,2.8,3,'#d9d0b8',.9);
for(let k=0;k<4;k++)poly([-1.8+k*1.2,-9,-1.2+k*1.2,-9,-2+k*1.5,-15.5-(k&1)*1.2],k==1?'#d9d0b8':'#6ff0d0');
g.restore();
poly([-6.6,-19,-1.5,-21,5.8,-19.4,7,-14,5.4,-8,4,-2.4,5.4,2.4,-5.8,2.4,-4.4,-2.4,-5.6,-8,-7.6,-14],'#1e1a1c','rgba(0,0,0,.6)',.8);
poly([-7.6,-14,-6.6,-19,-1.5,-21,-1,2.4,-5.8,2.4,-4.4,-2.4,-5.6,-8],'rgba(0,0,0,.28)');
poly([-4.8,-18,5,-18.4,5.8,-12,4.2,-6.4,-3.6,-6.8,-5.6,-12],'#33261e','rgba(0,0,0,.5)',.7);
for(let k=0;k<3;k++){sl(-3.8,-16+k*3.2,4.6,-15.6+k*3.2,'#d9d0b8',1.4);sl(-3.8,-15.6+k*3.2,4.6,-15.2+k*3.2,'rgba(0,0,0,.4)',.6)}
poly([-5,-19.4,-2.6,-20.6,6,-6.4,3.6,-5],'#14100e','#0c0806',.5);
g.fillStyle='#14100e';g.fillRect(-6,-4.4,12,3.4);
poly([-5.6,.6,-.4,.6,-.8,8.4,-5.8,7.6],'#3a2c20','rgba(0,0,0,.5)',.6);poly([.4,.6,5.6,.6,6,8,1.2,8.8],'#46362a','rgba(0,0,0,.5)',.6);
ov(2.4,-2.7,2.2,1.9,'#d9d0b8');ov(2.4,-2.7,.9,.9,'#14100e');
poly([-5.6,-3.4,-3.4,-3.4,-3.4,1.4,-5.4,1.2],'#33261e','#0c0806',.5);
poly([3.2,-1,6,-1,6.2,4.6,3.4,5],'#2a2018','#0c0806',.5);
poly([-3,-1,3.4,-1,4.2,8,.2,6.4,-3.6,8],'#26301f','rgba(0,0,0,.4)',.5);
poly([hx-2.4,hh+4.6,hx+1.8,hh+4.6,hx+2,-19.6,hx-2.6,-19.8],'#8a6548');
sqFur(1.2,-19.4,8.6,'#6b6258','#3a342e',sn);
g.save();g.translate(hx,hh);g.scale(.82,.82);g.translate(-hx,-hh);
sqFc(hx,hh,'#9a7455','#6a4a36','#7ff5da','g');
poly([hx-1.4,hh+1.8,hx+6.6,hh+1,hx+5.6,hh+6.8,hx+1.6,hh+8.4,hx-2.2,hh+5.2],'#151a1e','#07090a',.6);
sl(hx+.4,hh+3.6,hx+5.6,hh+3.2,'rgba(111,240,208,.25)',.7);
sl(hx+3,hh+2,hx+3.4,hh+7,'rgba(0,0,0,.35)',.6);
g.fillStyle='#d9d0b8';for(let k=0;k<3;k++){g.beginPath();g.moveTo(hx+2.2+k*1.4,hh+6.4);g.lineTo(hx+2.9+k*1.4,hh+8.8);g.lineTo(hx+3.6+k*1.4,hh+6.4);g.closePath();g.fill()}
g.fillStyle='#1c2620';g.beginPath();g.moveTo(hx-9.6,hh+7);g.lineTo(hx-9.8,hh-6);g.quadraticCurveTo(hx-8,hh-12.4,hx-1,hh-12);g.quadraticCurveTo(hx+5.4,hh-11.6,hx+8.2,hh-4.4);g.lineTo(hx+7.2,hh-2.2);g.quadraticCurveTo(hx+3,hh-5,hx-.4,hh-3.4);g.quadraticCurveTo(hx-3.4,hh+.2,hx-3.8,hh+6);g.closePath();g.fill();
g.strokeStyle='#07090a';g.lineWidth=.8;g.stroke();
poly([hx-9.4,hh-4,hx-18-sn*6+cw,hh+M.sin(T*5)*2.4,hx-9.8,hh+4.4],'#1c2620','#07090a',.6);
poly([hx-9.4,hh-1,hx-14-sn*4+cw,hh+4+M.sin(T*5+1)*2,hx-9.8,hh+5.4],'#151d18');
poly([hx-8,hh-6,hx-1,hh-11,hx+1,hh-7.4],'rgba(255,255,255,.08)');
sl(hx-5,hh-8,hx-5.4,hh+3,'rgba(0,0,0,.3)',.8);
sqSpk(hx-2.6,hh-11.4,-2,9,1.8,'#d9d0b8','#2a2018');sqSpk(hx-3.4,hh-14,-2.5,5,1.2,'#d9d0b8','#2a2018');
sqSpk(hx+2.6,hh-11,-1.4,7,1.6,'#cfc6ae','#2a2018');sqSpk(hx+3.6,hh-13.6,-.9,4.6,1.1,'#cfc6ae','#2a2018');
og(hx+3,hh-.6,6,'111,240,208',.3);
g.restore();
const r=sqArm('#2e2620','#a77f5c',aa-.04,20,shy,1.05);
pld(1.5,shy+.4,'#4a3a28','#8a7550',1);
sl(lr(r[0],r[2],.36),lr(r[1],r[3],.36),lr(r[0],r[2],.9),lr(r[1],r[3],.9),'#24180f',5.4);
sl(lr(r[0],r[2],.4),lr(r[1],r[3],.4),lr(r[0],r[2],.86),lr(r[1],r[3],.86),'rgba(190,160,110,.25)',.8);
ov(lr(r[0],r[2],.5),lr(r[1],r[3],.5),.8,.8,'#b49a6c');ov(lr(r[0],r[2],.74),lr(r[1],r[3],.74),.8,.8,'#b49a6c');
const bl=19,bc=11,nk=-5.2-dr*10.5+rl*2.5,hd=nk+27;
g.save();g.translate(r[2],r[3]);g.rotate(aa);
gl('g',3,0,26+dr*10+rl*14,.1+dr*.3+rl*.5);
g.save();g.translate(-4,0);
g.lineCap='round';
g.strokeStyle='#2a1c12';g.lineWidth=3.6;
g.beginPath();g.moveTo(-1,-bl);g.quadraticCurveTo(bc,0,-1,bl);g.stroke();
g.strokeStyle='#6b4a2c';g.lineWidth=2;g.stroke();
g.lineWidth=2.4;g.strokeStyle='#33261a';
g.beginPath();g.moveTo(-1,-bl);g.quadraticCurveTo(0,-bl-2.6,3.5,-bl-3.6);g.moveTo(-1,bl);g.quadraticCurveTo(0,bl+2.6,3.5,bl+3.6);g.stroke();
ov(3.8,-bl-3.7,1.3,1.3,'#d9c07a');ov(3.8,bl+3.7,1.3,1.3,'#d9c07a');
g.save();g.globalCompositeOperation='lighter';
g.strokeStyle='rgba(130,240,170,'+(.4+dr*.4+rl*.3)+')';g.lineWidth=1;
g.beginPath();g.moveTo(-1,-bl+3);g.quadraticCurveTo(bc+2,0,-1,bl-3);g.stroke();
g.restore();
sl(4.7,-5.4,4.7,5.4,'#3a2018',3.8);
for(let k=-2;k<=2;k++)sl(3.4,k*2,6,k*2,'#1c100a',.7);
sl(4.7,-5.8,4.7,-4.8,'#d9c07a',3.8);sl(4.7,4.8,4.7,5.8,'#d9c07a',3.8);
sl(6,-3.4,7,-3.4,'#8a7550',1);
g.restore();
g.strokeStyle='rgba(235,225,200,.8)';g.lineWidth=.8;
g.beginPath();g.moveTo(-5,-bl);g.lineTo(nk,0);g.lineTo(-5,bl);g.stroke();
ov(-5,-bl,1.3,1.3,'#9fe8b8');ov(-5,bl,1.3,1.3,'#9fe8b8');
if(rl<.28)sqArrow(nk,hd,dr);
ov(.2,0,2.6,2.4,'#a77f5c');
sl(-1,-1.6,2.6,-2.4,'#8e6847',1);sl(-1.2,1.5,2.4,2.2,'#8e6847',1);
sl(1,-1,1,1,'rgba(0,0,0,.25)',.6);
g.restore();
const r2=ik(-1,shy,r[2]+M.cos(aa)*nk,r[3]+M.sin(aa)*nk,11,11,1);
sqLb(-1,shy,r2[0],r2[1],r2[2],r2[3],1.05,'#2e2620');
sl(lr(r2[0],r2[2],.34),lr(r2[1],r2[3],.34),lr(r2[0],r2[2],.88),lr(r2[1],r2[3],.88),'#24180f',5);
sqHd(r2[2],r2[3],M.atan2(r2[3]-r2[1],r2[2]-r2[0]),'#a77f5c',1.05);
g.restore();
}

function dMg(s,sn,ph,id,sw,hy,cs,cw){
const c=s.c,cr=M.max(0,sw);
const bb=M.abs(M.cos(ph))*sn*1.3+M.sin(T*2.3+s.id)*.45*(1-sn),hx=3.5+sn,hh=-29+id*.3+(M.abs(M.cos(ph))-M.abs(M.cos(ph-.7)))*sn*.7,shy=-19+id*.3,hp=hy-5;
sqLeg(ph+PI,sn,-1.8,hp,'#1a2234','#2c3448',1);
sqLeg(ph,sn,1.8,hp,'#212b40','#36405a',1);
g.save();g.translate(0,hp-bb);g.rotate(sn*.1+sw*.07+M.sin(T*2.3)*.012-M.sin(ph)*sn*.035);g.scale(1,1+M.sin(T*2.3+s.id)*.012);
g.lineCap='round';g.lineJoin='round';
for(let k=0;k<3;k++){const a=T*1.6+k*2.09,ox=-4+M.cos(a)*12,oy=-24+M.sin(a)*5+k;poly([ox,oy-3.2,ox+1.4,oy,ox,oy+3.2,ox-1.4,oy],'rgba(205,232,255,.85)','rgba(80,120,170,.7)',.5);}
rbfx(rbn(-4.5,-17,28,sn,cs,cw,'#1c2a46','#355483',0,7.5),0,0);
rbfx(rbn(-6,-4,16,sn,cs,cw,'#16203a','#2a4068',1.7,5.5),0,5);
const x0=-9.6-cs*.5+cw*.5,x1=7+cw*.3;
const hm=k=>[lr(x0,x1,k/8)-sn*(1-k/8)*6-M.sin(T*4+k)*.8,6+(k&1?4.2:0)+M.sin(T*4.2+k*1.3)*(1+sn*2)];
const wv=()=>{for(let k=0;k<=8;k++){const q=hm(k);g.lineTo(q[0],q[1])}};
g.fillStyle='#24385a';
g.beginPath();g.moveTo(-5.6,-2);g.quadraticCurveTo(-8.2,2,x0,6);wv();g.quadraticCurveTo(9,2,5.8,-2);g.closePath();g.fill();
g.fillStyle='rgba(8,12,30,.3)';g.beginPath();g.moveTo(-6,-2);g.quadraticCurveTo(-8.2,2,x0,6);wv();g.lineTo(-.4,-2);g.closePath();g.fill();
g.strokeStyle='#cfe6ff';g.lineWidth=1;g.beginPath();g.moveTo(x0,6);wv();g.stroke();
for(let k=1;k<8;k+=2){const q=hm(k);poly([q[0]-1.3,q[1]-1,q[0],q[1]+3.8,q[0]+1.3,q[1]-1],'#d6ecff')}
poly([-1.8,-4,4,-4,5.6,7,-.2,8.8],'#3c5f95','rgba(10,14,30,.45)',.7);
sl(-.2,-3,.8,8,'#cfe6ff',.8);
sl(-6,0,-7+cw*.3-cs*.3,6,'rgba(12,16,30,.35)',.8);sl(-3,0,-4,7,'rgba(12,16,30,.3)',.8);
g.save();g.globalCompositeOperation='lighter';g.strokeStyle='rgba(140,210,255,.55)';g.lineWidth=.7;
g.beginPath();g.moveTo(1,-1);g.lineTo(2.4,1.4);g.lineTo(1,3.8);g.moveTo(3.4,.4);g.lineTo(3.4,5.4);g.stroke();g.restore();
poly([-6.6,-19,-1.5,-21,5.6,-19.4,7,-14,5,-8,3.8,-2.4,5.6,0,-5.6,0,-4,-2.4,-5.4,-8,-7.4,-14],'#2a4068','rgba(10,14,30,.55)',.8);
poly([-7.4,-14,-6.6,-19,-1.5,-21,-1,0,-5.6,0,-4,-2.4,-5.4,-8],'rgba(10,14,30,.28)');
poly([-4.6,-18,4.8,-18.4,5.6,-11,3.8,-6,-3.2,-6.4,-5.2,-11],'#9fb6d2','rgba(10,14,30,.5)',.7);
for(let k=0;k<3;k++)sl(-3.4,-16+k*3.2,4.4,-15.6+k*3.2,'rgba(10,14,30,.35)',.7);
poly([-5,-18,-3,-18.8,6,-5,4,-3.6],'#cfe6ff','rgba(10,14,30,.4)',.5);
poly([.2,-14,2.2,-11,.2,-8,-1.8,-11],'#bfeaff');og(.2,-11,6,'150,220,255',.4);
g.fillStyle='#16203a';g.fillRect(-5.8,-4.2,11.6,2.2);
ov(3.6,-3.1,2.2,2.2,'#d8d1bf');ov(3.2,-3.4,.5,.6,'#16121a');ov(4.2,-3.4,.5,.6,'#16121a');
sl(-6,-3.2,-8-cs*.3+cw*.6,3,'#6a5a3c',1.4);poly([-8.6-cs*.3+cw*.6,3,-6.6-cs*.3+cw*.6,3,-7.6-cs*.3+cw*.6,6.4],'#bfeaff');
poly([hx-2.4,hh+4.6,hx+1.8,hh+4.6,hx+2,-19.6,hx-2.6,-19.8],'#a8998a');
sqFur(1.2,-19.6,9,'#e4edf6','#9fb2c8',sn);
g.save();g.translate(hx,hh);g.scale(.82,.82);g.translate(-hx,-hh);
rbfx(rbn(hx-5,hh-3,16,sn,cs,cw,'#8fa9cf','#e4f0ff',3.1,4.8),0,3);
sqFc(hx,hh,'#dcd0c8','#9d9096','#e6faff','c');
sl(hx+2.6,hh+1.8,hx+4.2,hh+5.4,'rgba(120,200,255,.8)',.8);sl(hx+1.4,hh+2,hx+2.6,hh+6.4,'rgba(120,200,255,.5)',.6);
poly([hx-6.4,hh-3.4,hx-4,hh-9.4,hx+3,hh-9,hx+6.4,hh-3.8,hx+1.6,hh-5.6,hx-2.8,hh-3.6],'#a9c3e6','rgba(40,60,100,.5)',.6);
poly([hx-5.8,hh-6.8,hx+5.8,hh-6.4,hx+5.2,hh-4.8,hx-5.6,hh-5.2],'#cfe6ff','#4a6a96',.5);
for(let k=0;k<5;k++)sqSpk(hx-4.4+k*2.3,hh-6.8,-1.9+k*.28,6.5+(k==2?6:0)-(k&1)*1.6,1.5,'#d6ecff','#4a6a96');
og(hx+3,hh-.4,6,'150,230,255',.3);
g.restore();
const th=.35-sw*.3;
const r=sqArm('#233a5c','#d9ccc2',th,11,shy,1.1);
pld(1.5,shy+.4,'#2f3852','#9fb6d2',1);
sl(lr(r[0],r[2],.4),lr(r[1],r[3],.4),lr(r[0],r[2],.92),lr(r[1],r[3],.92),'#26272e',4.8);
sl(lr(r[0],r[2],.5),lr(r[1],r[3],.5),lr(r[0],r[2],.8),lr(r[1],r[3],.8),'rgba(150,170,210,.3)',.8);
g.save();g.translate(r[2],r[3]);g.rotate(-1.5+sw*.2);
sl(-14,0,25,0,'#3c2e22',2.6);
sl(-14,-.7,25,-.7,'rgba(255,230,190,.12)',.7);
for(let k=0;k<3;k++)sl(-6+k*9,-1.6,-6+k*9,1.6,'#6a5a3c',1.2);
sl(5,-1.6,5,1.6,'#6a5a3c',2);
g.strokeStyle='#5a5a66';g.lineWidth=1.8;g.beginPath();g.moveTo(23,-2);g.quadraticCurveTo(28,-8.4,36,-5.4);g.moveTo(23,2);g.quadraticCurveTo(28,8.4,36,5.4);g.stroke();
poly([35,-5.4,40,-3,36.6,-3.6],'#a8a8b6');poly([35,5.4,40,3,36.6,3.6],'#a8a8b6');
poly([28,0,33,-3.6,45,0,33,3.6],'#9fb6d2','rgba(225,235,250,.75)',.6);
poly([30,-1.4,34,-8.6,37,-2],'#86a0c4','rgba(225,235,250,.6)',.5);
poly([30,1.4,33,7.6,36,2],'#86a0c4','rgba(225,235,250,.6)',.5);
poly([32,0,34,-1.9,39,0],'rgba(255,255,255,.55)');
gl('c',36,0,16+M.max(0,sw)*10,.16+M.max(0,sw)*.35+.04*M.sin(T*3));
const sy=M.sin(T*2.2)*1.4;
sl(17,0,17+sy*.3,3.4,'#8a7a58',.6);
ov(17+sy*.4,5.6,2,2.3,'#ddd7c6');
ov(16.4+sy*.4,5.2,.5,.6,'#16121a');ov(18+sy*.4,5.2,.5,.6,'#16121a');
for(let k=0;k<3;k++){const a=T*1.7+k*2.09,ax=37+M.cos(a)*11,ay=M.sin(a)*6;poly([ax,ay-2.4,ax+1.2,ay,ax,ay+2.4,ax-1.2,ay],'rgba(205,225,245,.9)')}
g.restore();
g.restore();
}

function dEl(s,sn,ph,id,sw,hy,cs,cw){
const c=s.c,aa=s.aa,ch=M.max(0,-sw),rl=M.max(0,sw),fl=M.floor(T*20)*7.3;
const bb=M.abs(M.cos(ph))*sn*1.1+M.sin(T*2.3+s.id)*.45*(1-sn),hx=3+sn*.6,hh=-30+id*.3+(M.abs(M.cos(ph))-M.abs(M.cos(ph-.7)))*sn*.5,shy=-19+id*.3,hp=hy-5;
hLeg(ph+PI,sn,-2.2,hp,'#120d1e','#1b1332','#0e0820','#a678ff',1);
hLeg(ph,sn,2.2,hp,'#17102a','#241a44','#140c28','#c8a0ff',1);
g.save();g.translate(0,hp-bb);g.rotate(sw*.025+M.sin(T*2.3)*.01);g.scale(1,1+M.sin(T*2.3+s.id)*.012);
g.lineCap='round';g.lineJoin='round';
rbfx(rbn(-4.5,-17,28,sn,cs,cw,'#120b2a','#3e2a8a',0,8),1,0);
rbfx(rbn(-6,-4,17,sn,cs,cw,'#0e0820','#2e2070',1.7,6),1,7);
const x0=-9-cs*.5+cw*.5,x1=7.4+cw*.3;
const wv=()=>{for(let k=0;k<=8;k++)g.lineTo(lr(x0,x1,k/8)-sn*(1-k/8)*6-M.sin(T*4+k)*.8,6+(k&1?5.6:0)+M.sin(T*4.2+k*1.3)*(1+sn*2))};
g.fillStyle='#1a1236';
g.beginPath();g.moveTo(-5.6,-2);g.quadraticCurveTo(-8,2,x0,6);wv();g.quadraticCurveTo(9,2,5.8,-2);g.closePath();g.fill();
g.fillStyle='rgba(4,2,14,.35)';g.beginPath();g.moveTo(-6,-2);g.quadraticCurveTo(-8,2,x0,6);wv();g.lineTo(-.4,-2);g.closePath();g.fill();
g.strokeStyle='#a678ff';g.lineWidth=1.1;g.beginPath();g.moveTo(x0,6);wv();g.stroke();
for(let k=0;k<3;k++){const bx=-5+k*5.6,a=fl+k*2.7;g.save();g.globalCompositeOperation='lighter';g.strokeStyle='rgb(255,244,170)';g.lineWidth=.8;g.globalAlpha=.75;g.beginPath();zig(bx,8,bx+(hs(a)-.5)*8,17,2.6,a);g.stroke();g.restore()}
poly([-9.8,-18,-5.4,-18.4,-5,-7,-10,-6.6],'#1a1236','rgba(4,2,14,.6)',.7);
for(let k=0;k<3;k++){const a=.5+.5*M.sin(T*6+k*2);sl(-8.6,-16+k*3.6,-6.4,-16+k*3.6,'rgba(255,243,160,'+(.45+a*.5)+')',1.6)}
poly([-6.6,-19,-1.5,-21,5.6,-19.4,7,-14,5,-8,3.8,-2.4,5.6,0,-5.6,0,-4,-2.4,-5.4,-8,-7.4,-14],'#17102c','rgba(4,2,14,.6)',.8);
poly([-7.4,-14,-6.6,-19,-1.5,-21,-1,0,-5.6,0,-4,-2.4,-5.4,-8],'rgba(4,2,14,.35)');
poly([-4.4,-18.4,4.6,-18.6,5.6,-12,3.6,-6,-3,-6.4,-5,-12],'#2a1f52','rgba(4,2,14,.5)',.7);
for(let k=0;k<3;k++)sl(-3.4,-16+k*3.2,4.4,-15.6+k*3.2,'#6a44c0',.8);
poly([-5,-19,-3,-19.8,6,-5.4,4,-4],'#0e0820','#a678ff',.5);
poly([.4,-15.4,3,-11.6,.4,-7.8,-2.2,-11.6],'#fff3a0');og(.4,-11.6,9,'255,230,120',.45);
g.save();g.globalCompositeOperation='lighter';g.strokeStyle='rgba(255,244,170,.85)';g.lineWidth=.8;
g.beginPath();g.moveTo(.4,-7.8);g.lineTo(-.8,-5);g.lineTo(.8,-2);g.moveTo(3,-11.6);g.lineTo(4.6,-9);g.lineTo(3.4,-6.6);g.moveTo(-2.2,-11.6);g.lineTo(-4,-14);g.lineTo(-3,-17);g.stroke();g.restore();
g.fillStyle='#0e0820';g.fillRect(-5.8,-4.2,11.6,2.2);
for(let k=0;k<4;k++)sl(-4.6+k*3,-4.2,-4.6+k*3,-2,'#a678ff',.7);
poly([2.2,-5,3.8,-2.6,5.4,-5,3.8,-1],'#fff3a0');
poly([-3,-1,3.4,-1,4,7,.2,5.6,-3.4,7.4],'#241a46','rgba(4,2,14,.5)',.5);
for(let k=0;k<3;k++)sqSpk(-4+k*3.6,-19.8,-1.57,4.6+(k==1?2.4:0),1.4,'#0e0820','#a678ff');
poly([hx-2.4,hh+4.6,hx+1.8,hh+4.6,hx+2,-19.6,hx-2.6,-19.8],'#b3a2b0');
poly([-4.4,-21,-1,-22.4,3.6,-21.6,3.2,-18.6,-3.8,-18.6],'#2a1f52','#a678ff',.5);
g.save();g.translate(hx,hh);g.scale(.82,.82);g.translate(-hx,-hh);
sqSpk(hx-3,hh-5,-2.3,13,2.5,'#0e0820','#a678ff');
sqSpk(hx+2.4,hh-5.6,-1.2,10.4,2.1,'#140c28','#a678ff');
for(let k=0;k<7;k++){const bx=hx-6.4+k*2.1,w=M.sin(T*8+k*1.7)*1.2;poly([bx-1.8,hh-4.6,bx+w,hh-13-(k&1)*3.4-ch*2.5-(k==3?4:0),bx+1.8,hh-4.6],'#7b4ee0');poly([bx-.6,hh-5,bx+w,hh-11.6-(k&1)*2.6-(k==3?3:0),bx+.8,hh-5],'#fff3a0')}
sqFc(hx,hh,'#cdbcc9','#9a8696','#fff3a0','z');
poly([hx-6.2,hh-3.6,hx-3,hh-8,hx+3,hh-7.4,hx+6.4,hh-3.8,hx+1.4,hh-4.6,hx-2.4,hh-3.2],'#1a1236','rgba(4,2,14,.5)',.6);
poly([hx+1.8,hh+3.6,hx+6.4,hh+3.2,hx+6.2,hh+5.8,hx+2.6,hh+6.2],'#0c0618');
g.fillStyle='#f2ecf8';for(let k=0;k<4;k++){g.beginPath();g.moveTo(hx+2.4+k*1.1,hh+3.5);g.lineTo(hx+3+k*1.1,hh+5.8);g.lineTo(hx+3.6+k*1.1,hh+3.5);g.closePath();g.fill()}
og(hx+3,hh-.4,6,'255,235,140',.35);
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.globalAlpha=M.min(1,.6+ch*.3);g.strokeStyle='rgb(255,244,170)';g.lineWidth=.9;
g.beginPath();zig(hx-3,hh-12,hx-11,hh-6+hs(fl)*6,5,fl);g.stroke();
g.beginPath();zig(hx+3,hh-12,hx+11,hh-9+hs(fl+3)*6,5,fl+5);g.stroke();
g.restore();
g.restore();
const th=aa-ch*.06,AL=15,rx=1.5+M.cos(th)*AL,ry=shy+M.sin(th)*AL,bx=rx-M.cos(aa)*5.5,by=ry-M.sin(aa)*5.5,ex=rx-M.cos(aa)*9,ey=ry-M.sin(aa)*9;
g.strokeStyle='#0c0818';g.lineWidth=1.8;
g.beginPath();g.moveTo(-8,-9);g.quadraticCurveTo((ex-8)*.5-2,M.max(ey,-9)+9,ex,ey);g.stroke();
g.save();g.globalCompositeOperation='lighter';
for(let k=0;k<2;k++){const t=(T*1.3+k*.5)%1,u=1-t,qx=u*u*-8+2*u*t*((ex-8)*.5-2)+t*t*ex,qy=u*u*-9+2*u*t*(M.max(ey,-9)+9)+t*t*ey;ov(qx,qy,1.1,1.1,'rgba(255,243,160,.9)')}
g.restore();
const r=sqArm('#1b1430','#cdbcc9',th,AL,shy,1.05);
pld(1.5,shy+.4,'#1a1238','#8f5cf0',1.1);
sl(lr(r[0],r[2],.38),lr(r[1],r[3],.38),lr(r[0],r[2],.92),lr(r[1],r[3],.92),'#150f2c',4.8);
sl(lr(r[0],r[2],.42),lr(r[1],r[3],.42),lr(r[0],r[2],.86),lr(r[1],r[3],.86),'rgba(170,120,255,.45)',.8);
g.save();g.translate(r[2],r[3]);g.rotate(aa);
sl(-9,0,12,0,'#1a1236',3.4);
sl(-9,-1,12,-1,'rgba(200,170,255,.22)',.8);
for(let k=0;k<4;k++)sl(-6.4+k*2.6,-1.8,-6.4+k*2.6,1.8,'#5a3aa8',1);
ov(-9.4,0,1.9,1.9,'#a678ff');
poly([4.2,-3.4,6.2,-2.6,6.2,2.6,4.2,3.4],'#a678ff','#0e0820',.5);
sl(6.4,0,12.8,0,'#2a1f52',4);
for(let k=0;k<4;k++){const a=.5+.5*M.sin(T*9+k*1.3+ch*3);sl(7+k*1.6,-2.4,7+k*1.6,2.4,'rgba(232,200,96,'+(.7+a*.3)+')',1.2)}
ov(13,0,1.5,2.6,'#cfc6e8');
g.strokeStyle='#cfc6e8';g.lineWidth=1.5;g.lineCap='round';
g.beginPath();g.moveTo(12.8,-1.6);g.quadraticCurveTo(15.8,-4.8,19.8,-3.6);g.moveTo(12.8,1.6);g.quadraticCurveTo(15.8,4.8,19.8,3.6);g.stroke();
ov(19.9,-3.7,1.2,1.2,'#fff3a0');ov(19.9,3.7,1.2,1.2,'#fff3a0');
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.strokeStyle='rgb(255,244,170)';g.lineWidth=.9;g.globalAlpha=M.min(1,.55+ch*.45+rl*.4);
g.beginPath();zig(19.9,-3.7,19.9,3.7,3.2,fl);zig(19.9,-3.7,17.4,0,2,fl+3);zig(19.9,3.7,17.4,0,2,fl+6);g.stroke();
const nn=1+M.floor(ch*3+rl*3);
g.beginPath();
for(let k=0;k<nn;k++){const a=(hs(fl+k*4.1)-.5)*2.4,ln=7+ch*9+rl*12;zig(17.4,0,17.4+M.cos(a)*ln,M.sin(a)*ln,3,fl+k*7)}
g.stroke();
g.restore();
og(17.4,0,8+ch*8,'255,230,120',.3+ch*.3+rl*.4);
gl('z',17.4,0,10+ch*14+rl*22,.35+ch*.4+rl*.6);
orb(17.4,0,2+ch*2.6,.3+ch*.4+rl*.4,fl+31);
ov(0,0,2.6,2.3,'#251a46');
sl(-1.2,-1.6,2.4,-2.4,'#1a1236',1);sl(-1.2,1.5,2.2,2.3,'#1a1236',1);
sl(-1.4,0,2.2,0,'rgba(170,120,255,.5)',.6);
g.restore();
const r2=ik(-1,shy,bx,by,11,11,1);
sqLb(-1,shy,r2[0],r2[1],r2[2],r2[3],1.05,'#1b1430');
sl(lr(r2[0],r2[2],.4),lr(r2[1],r2[3],.4),lr(r2[0],r2[2],.9),lr(r2[1],r2[3],.9),'#150f2c',4.6);
sqHd(r2[2],r2[3],M.atan2(r2[3]-r2[1],r2[2]-r2[0]),'#cdbcc9',1);
g.restore();
}

function dGk(s,sn,ph,id,sw,hy,cs,cw){
const c=s.c,bs=M.max(0,sw),wb=M.max(0,-sw),pu=.5+.25*M.sin(T*2.3+s.id),qx=15-wb*5+bs*9,qy=-17,bb=M.abs(M.cos(ph))*sn*1.8+M.sin(T*1.9+s.id)*.5*(1-sn),hp=hy-3,sy=M.sin(ph)*sn*3;
g.save();g.scale(.98,.98);
const k1=sqLeg(ph+PI,sn,-3.4,hp,'#34323a','#26242b',1.7);
const k2=sqLeg(ph,sn,3.4,hp,'#403e47','#2e2c34',1.7);
for(const k of[k1,k2]){
poly([k[0]-3.8,k[1]-2.8,k[0]+4,k[1]-3,k[0]+4.6,k[1]+2.6,k[0]-4,k[1]+2.8],'#4b4953','#16151a',.7);
poly([k[0]-3.8,k[1]-2.8,k[0]+4,k[1]-3,k[0]+1,k[1]-.6],'rgba(255,255,255,.09)');
sqSpk(k[0]+4,k[1]-.4,-.3,4.6,1.5,'#5a5862','#16151a');
sl(k[0]-2,k[1]-1,k[0]+2,k[1]+1,'rgba(255,130,40,'+(.4+pu*.5)+')',.9);
sqSpk(k[2]+5,k[3]+1,-.1,4.2,1.5,'#6a6872','#16151a');
}
g.save();g.translate(0,hp-bb);g.rotate(sn*.05+sw*.04);
g.lineCap='round';g.lineJoin='round';
sqLb(-13,-22,-17+sy,-12,-16+sy*1.3,-3,2.6,'#34323a');
ov(-16+sy*1.3,-1.4,6.2,5.6,'#4a4852');g.strokeStyle='#16151a';g.lineWidth=.9;g.beginPath();g.ellipse(-16+sy*1.3,-1.4,6.2,5.6,0,0,TAU);g.stroke();
for(let k=0;k<3;k++)sqSpk(-18.4+sy*1.3+k*2.4,2.8,1.57,3.4,1.2,'#5a5862','#16151a');
poly([-9,2,9,2,8,-4,-8,-4],'#2a2830','#16151a',.8);
for(let k=0;k<4;k++)ov(-6+k*4,-1,.9,.9,'#8a8792');
for(let k=0;k<3;k++){const y0=-4-k*4.6;poly([-8.6+k*.5,y0,8.6-k*.5,y0,8.9-k*.5,y0-4.8,-8.9+k*.5,y0-4.8],k&1?'#38363f':'#32303a','#16151a',.7)}
const gr=g.createLinearGradient(-14,-30,14,-4);gr.addColorStop(0,'#5c5a64');gr.addColorStop(1,'#26242b');
g.fillStyle=gr;g.beginPath();g.moveTo(-9,-17);g.lineTo(9,-17);g.lineTo(13,-22);g.lineTo(14,-29);g.lineTo(9,-34);g.lineTo(-9,-34);g.lineTo(-15,-29);g.lineTo(-13.4,-22);g.closePath();g.fill();
g.strokeStyle='#16151a';g.lineWidth=1.1;g.stroke();
poly([-13.4,-22,-15,-29,-9,-34,-4,-24],'rgba(255,255,255,.1)');
poly([13,-22,14,-29,9,-34,5,-24],'rgba(0,0,0,.25)');
poly([-9,-26,-1,-25,-1,-18,-10,-19],'rgba(255,255,255,.06)');
poly([1,-26,9,-26,10,-19,1,-18],'rgba(255,255,255,.06)');
sl(0,-33,0,-18,'#16151a',1);
og(0,-25,11,'255,120,40',.3+pu*.2);
poly([0,-30,3.6,-25,0,-20,-3.6,-25],'#ffb25a','#7a2a08',.7);poly([0,-28,1.8,-25,0,-22,-1.8,-25],'#fff0c0');
g.save();g.globalCompositeOperation='lighter';g.strokeStyle='rgba(255,140,50,'+(.5+pu*.5)+')';g.lineWidth=1;
g.beginPath();g.moveTo(-3.6,-25);g.lineTo(-7,-28);g.lineTo(-8,-33);g.moveTo(3.6,-25);g.lineTo(7,-23);g.lineTo(9,-18);g.moveTo(0,-20);g.lineTo(-2,-16);g.lineTo(-1,-12);g.moveTo(-3,-22);g.lineTo(-8,-21);g.lineTo(-11,-24);g.moveTo(-12,-26);g.lineTo(-14,-22);g.moveTo(11,-27);g.lineTo(13,-24);g.stroke();g.restore();
g.fillStyle='rgba(84,120,60,.45)';g.beginPath();g.ellipse(-8,-31,5,2,.3,0,TAU);g.fill();g.beginPath();g.ellipse(7,-19,3.6,1.6,0,0,TAU);g.fill();
for(let k=0;k<3;k++){const t=(T*.7+k*.33)%1;ov(-8+k*8,-12+t*12,.9,1.5*(1-t*.5),'rgba(255,140,40,'+(1-t)+')')}
ov(-14,-30,8.4,6.6,'#4e4c56');ov(13.4,-31,8.8,6.8,'#5a5862');
g.strokeStyle='#16151a';g.lineWidth=.9;g.beginPath();g.ellipse(-14,-30,8.4,6.6,0,0,TAU);g.stroke();g.beginPath();g.ellipse(13.4,-31,8.8,6.8,0,0,TAU);g.stroke();
poly([-18,-33,-12,-35,-10,-30],'rgba(255,255,255,.1)');
sqSpk(-17.4,-34,-2.1,10,2.3,'#6a6872','#16151a');sqSpk(-12,-36,-1.8,7,1.8,'#5a5862','#16151a');
sqSpk(11,-37,-1.2,11,2.4,'#6a6872','#16151a');sqSpk(16.6,-35,-.6,7.6,2,'#5a5862','#16151a');
sl(-16,-31,-13,-27,'rgba(255,140,50,'+(.5+pu*.4)+')',.9);sl(12,-32,15,-28,'rgba(255,140,50,'+(.5+pu*.4)+')',.9);
g.fillStyle='#575560';g.beginPath();g.moveTo(-5,-34);g.lineTo(-6,-43);g.lineTo(1,-47);g.lineTo(9,-44);g.lineTo(10.4,-36);g.lineTo(6,-33);g.closePath();g.fill();
g.strokeStyle='#16151a';g.lineWidth=1.1;g.stroke();
poly([-5,-34,-6,-43,1,-47,-1,-37],'rgba(255,255,255,.12)');
poly([1,-47,9,-44,10.4,-36,6,-33,3,-37],'rgba(0,0,0,.25)');
sqSpk(-3,-44.4,-1.8,9,2.2,'#6a6872','#16151a');sqSpk(3,-46.4,-1.3,7.4,1.8,'#5a5862','#16151a');sqSpk(8,-43,-.8,6,1.6,'#5a5862','#16151a');
poly([2.6,-41.6,11,-43.8,10.8,-41.2,3.6,-39],'#1c1b20','#0e0d10',.5);
poly([4,-40.6,10.4,-42.4,10,-39.4,5,-38.4],'#2a0c04');
poly([4.8,-40,10,-41.4,9.8,-39.6,5.6,-39],'#ffb25a');
og(7.6,-40.2,7,'255,140,40',.4+bs*.3);
g.fillStyle='#0c0706';g.fillRect(3.6,-37,7.4,3.4);
g.fillStyle='rgba(255,120,40,'+(.4+pu*.4)+')';g.fillRect(4.2,-36.4,6.2,2);
g.fillStyle='#d8cfb8';for(let k=0;k<4;k++){g.beginPath();g.moveTo(3.8+k*1.8,-37);g.lineTo(4.7+k*1.8,-34.2);g.lineTo(5.6+k*1.8,-37);g.closePath();g.fill()}
sl(-1,-40,1.4,-35,'rgba(255,140,50,.6)',.9);
sqLb(12,-26,lr(12,qx,.5),lr(-26,qy,.5)+3.6,qx,qy,2.4,'#3d3b44');
ov(qx,qy,5.2,4.8,'#4e4c56');
for(let k=0;k<3;k++)sqSpk(qx+2.8,qy-2.6+k*2.6,-.1,3.8,1.1,'#6a6872','#16151a');
g.save();g.translate(qx+4,qy-1);
const sg=g.createLinearGradient(-8,-21,8,21);sg.addColorStop(0,'#74717a');sg.addColorStop(1,'#2a282f');
g.fillStyle=sg;g.beginPath();g.moveTo(-6,-21);g.lineTo(6,-21);g.lineTo(8,2);g.quadraticCurveTo(7,15,0,21);g.quadraticCurveTo(-7,15,-8,2);g.closePath();g.fill();
g.strokeStyle='#16151a';g.lineWidth=1.5;g.stroke();
for(let k=0;k<4;k++)sqSpk(-5.4+k*3.6,-21,-1.57,4.8,1.5,'#7e7b84','#16151a');
g.strokeStyle='rgba(255,140,50,.35)';g.lineWidth=1;
g.beginPath();g.moveTo(-4.4,-18);g.lineTo(4.4,-18);g.lineTo(5.6,2);g.quadraticCurveTo(4.8,12,0,17);g.quadraticCurveTo(-4.8,12,-5.6,2);g.closePath();g.stroke();
g.strokeStyle='rgba(10,10,12,.7)';g.lineWidth=.9;
g.beginPath();g.moveTo(-3,-18);g.lineTo(-1,-10);g.lineTo(-4,-5);g.moveTo(3,12);g.lineTo(1,6);g.lineTo(4,2);g.stroke();
poly([-1.6,-8,0,-14,1.6,-8],'#8a8792','#16151a',.5);
ov(0,-2,3.8,4.6,'#2a282f');ov(0,-2,1.9,2.5,'rgba(255,150,50,'+(pu+bs*.3)+')');
g.restore();
g.restore();
g.restore();
}

const SD=[dAr,dMg,dEl,dGk];
