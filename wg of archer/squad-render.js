function upH(dt){
p.inv-=dt;p.hu-=dt;p.rg-=dt;GQ.l=M.max(0,GQ.l-dt);
FXA.fl=M.max(0,FXA.fl-dt*1.6);FXA.sa=M.max(0,FXA.sa-dt);
if(p.dead){p.dead+=dt;if(p.dead>3.2)menuGo()}
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

function dAr(s,sn,ph,id,sw,hy,cs,cw){
const c=s.c,hx=3.5+sn,hh=-28+id*.3,shy=-19+id*.3,aa=s.aa,dr=M.max(0,-sw),rl=M.max(0,sw);
stepLeg(ph+PI,sn,-1.5,hy,'#151a17','#241d15',1);
stepLeg(ph,sn,1.5,hy,'#1d2520','#2d251a',1);
g.save();g.translate(0,hy);g.rotate(sn*.1+sw*.07);
g.lineCap='round';g.lineJoin='round';
cape(12,c.cp,'rgba(0,0,0,.4)',cs,cw,0);
g.save();g.translate(-5.5,-13);g.rotate(-.38);
g.fillStyle='#4a3826';g.fillRect(-2.6,-9,5.2,17);
g.fillStyle='#2e2216';g.fillRect(-2.6,-9,5.2,2);
g.strokeStyle='#7fd6a0';g.lineWidth=1.3;
for(let k=0;k<3;k++){g.beginPath();g.moveTo(-1.5+k*1.5,-9);g.lineTo(-2+k*1.8,-14.5);g.stroke()}
g.restore();
g.fillStyle=c.t;g.beginPath();g.moveTo(-5.5,1);g.lineTo(5.5,1);g.quadraticCurveTo(7,-9,6,-18);g.lineTo(-.5,-21.5);g.lineTo(-6,-18);g.quadraticCurveTo(-6.5,-9,-5.5,1);g.closePath();g.fill();
g.strokeStyle='rgba(0,0,0,.35)';g.lineWidth=.9;g.stroke();
poly([-6,-18,-.5,-21.5,0,1,-5.5,1],'rgba(0,0,0,.16)');
sl(-3.4,-20,3.2,-3.6,'#222c26',1.2);
sl(2.4,-20.2,3.2,-3.6,'#222c26',1);
g.strokeStyle='rgba(190,215,195,.15)';g.lineWidth=.8;g.beginPath();g.moveTo(5.8,-17);g.quadraticCurveTo(6.8,-9,5.4,0);g.stroke();
g.fillStyle='#6a392f';g.fillRect(-6,-4.2,12,3.4);
ov(2,-2.5,1.5,1.4,'#7fd6a0');
ov(-6,-2.6,2.4,2,'#80463a');
sl(-6,-2.6,-10-cs*.4+cw,3+M.sin(T*3)*.8,'#6a392f',1.8);
sl(-6,-2.6,-8-cs*.3+cw,6.4,'#6a392f',1.6);
poly([-3,-22,3.4,-21.6,2.8,-18.6,-3.6,-19.4],'#6a392f');
g.strokeStyle='#2a2018';g.lineWidth=2.6;g.beginPath();g.moveTo(hx-5,hh-1);g.quadraticCurveTo(hx-9,hh-2,-9-sn*3+cw,-20+M.sin(T*2.6)*1.6);g.stroke();
ov(hx,hh,7,7.2,'#b58d68');
g.fillStyle='rgba(30,16,8,.35)';g.beginPath();g.ellipse(hx,hh-3,7.2,4,0,0,TAU);g.fill();
g.fillStyle='#2a1f18';g.fillRect(hx+3,hh-.2,1.8,1.9);
sl(hx+2.8,hh-1.6,hx+5.8,hh-1.9,'#4a3626',.8);
poly([hx+6.6,hh+.4,hx+8.4,hh+2.6,hx+6.4,hh+2.8],'#a67f5c');
sl(hx+3.4,hh+4.6,hx+6,hh+4.4,'#6b4a38',.8);
g.fillStyle='#8a7650';g.beginPath();g.moveTo(hx-14,hh-5);g.quadraticCurveTo(hx-5,hh-7.6,hx+.5,hh-19);g.quadraticCurveTo(hx+6,hh-7.6,hx+14,hh-5);g.quadraticCurveTo(hx,hh-2.4,hx-14,hh-5);g.closePath();g.fill();
g.strokeStyle='#5a4a30';g.lineWidth=.8;g.stroke();
g.strokeStyle='rgba(60,48,28,.5)';g.lineWidth=.7;
for(let k=-2;k<=2;k++){g.beginPath();g.moveTo(hx+.5,hh-19);g.lineTo(hx+k*5.6,hh-4.6);g.stroke()}
sl(hx-10,hh-5.6,hx-2,hh-12,'rgba(255,240,200,.18)',1.2);
g.strokeStyle='#3a2c1e';g.lineWidth=1;g.beginPath();g.moveTo(hx+6,hh-3.6);g.quadraticCurveTo(hx+5.4,hh+5,hx+1,hh+7);g.stroke();
const r=sarm(c.a,'#b88f6b',aa-.04,18,shy);
const bl=17,bc=9,nk=-1.2-dr*9+rl*2;
g.save();g.translate(r[2],r[3]);g.rotate(aa);
gl('g',3,0,24+dr*10+rl*14,.14+dr*.3+rl*.5);
g.strokeStyle='#5d4430';g.lineWidth=2.8;g.lineCap='round';
g.beginPath();g.moveTo(-1,-bl);g.quadraticCurveTo(bc,0,-1,bl);g.stroke();
g.lineWidth=2.2;
g.beginPath();g.moveTo(-1,-bl);g.quadraticCurveTo(0,-bl-2.6,3.5,-bl-3.6);g.moveTo(-1,bl);g.quadraticCurveTo(0,bl+2.6,3.5,bl+3.6);g.stroke();
g.save();g.globalCompositeOperation='lighter';
g.strokeStyle='rgba(130,240,170,'+(.45+dr*.4+rl*.3)+')';g.lineWidth=1;
g.beginPath();g.moveTo(-1,-bl+3);g.quadraticCurveTo(bc+2,0,-1,bl-3);g.stroke();
g.restore();
ov(-1,-bl,1.5,1.5,'#9fe8b8');ov(-1,bl,1.5,1.5,'#9fe8b8');
g.strokeStyle='rgba(235,225,200,.8)';g.lineWidth=.8;
g.beginPath();g.moveTo(-1,-bl);g.lineTo(nk,0);g.lineTo(-1,bl);g.stroke();
if(dr>.02){
g.strokeStyle='#b8a07a';g.lineWidth=1.3;g.beginPath();g.moveTo(nk,0);g.lineTo(13,0);g.stroke();
g.fillStyle='#dff3e6';g.beginPath();g.moveTo(19,0);g.lineTo(12,-2.4);g.lineTo(13,0);g.lineTo(12,2.4);g.closePath();g.fill();
g.strokeStyle='#7fd6a0';g.lineWidth=1.1;g.beginPath();g.moveTo(nk+1,0);g.lineTo(nk-2,-2.2);g.moveTo(nk+1,0);g.lineTo(nk-2,2.2);g.stroke();
gl('g',17,0,8+dr*10,dr*.8);
}
g.restore();
const r2=ik(-1,shy,r[2]+M.cos(aa)*nk,r[3]+M.sin(aa)*nk,11,11,1);
g.lineCap='round';g.lineJoin='round';g.strokeStyle=c.a;g.lineWidth=4.4;
g.beginPath();g.moveTo(-1,shy);g.lineTo(r2[0],r2[1]);g.lineTo(r2[2],r2[3]);g.stroke();
g.fillStyle='#b88f6b';g.beginPath();g.arc(r2[2],r2[3],2.2,0,TAU);g.fill();
g.restore();
}

function dMg(s,sn,ph,id,sw,hy,cs,cw){
const c=s.c,hx=3.5+sn,hh=-28+id*.3,shy=-19+id*.3;
stepLeg(ph+PI,sn,-1.5,hy,c.l1,c.l2,1);
stepLeg(ph,sn,1.5,hy,c.l1,c.l2,1);
g.save();g.translate(0,hy);g.rotate(sn*.1+sw*.07);
g.lineCap='round';g.lineJoin='round';
const x0=-10-cs*.5+cw*.5,x1=8+cw*.3;
const wv=()=>{for(let k=0;k<=6;k++)g.lineTo(lr(x0,x1,k/6),13+M.sin(T*3+k*1.3)*(.5+sn*1.1))};
g.fillStyle='#4b5877';
g.beginPath();g.moveTo(-5,-20);g.quadraticCurveTo(-9-cs*.3,-4,x0,13);wv();g.quadraticCurveTo(7,-4,5.5,-19);g.lineTo(-.5,-21.5);g.closePath();g.fill();
g.fillStyle='rgba(10,14,30,.22)';
g.beginPath();g.moveTo(-8-cs*.2,2);g.lineTo(x0,13);wv();g.lineTo(x1,2);g.closePath();g.fill();
g.strokeStyle='#a89464';g.lineWidth=1.2;g.beginPath();g.moveTo(x0,13);wv();g.stroke();
sl(-.3,-18,.4,12,'rgba(12,16,30,.4)',.9);
sl(5.4,-18,6.6,-4,'rgba(200,215,240,.18)',.8);
poly([-6.2,-18.4,5.8,-19.2,7.2,-13,-7.2,-12.2],'#62708f','rgba(10,14,30,.4)',.8);
g.fillStyle='#8c7a58';g.fillRect(-6.4,-4,12.8,2.2);
ov(3.8,-.4,2.6,3.2,'#6b5a42');
sl(-6,-3,-8-cs*.3+cw*.6,3,'#8c7a58',1.4);
g.fillStyle='#39435e';
g.beginPath();g.moveTo(hx-2,hh-8);g.quadraticCurveTo(hx-11-sn*3,hh-4,-8-sn*4-cs*.5+cw,-8);g.quadraticCurveTo(hx-8,hh+8,hx-1,hh+6);g.closePath();g.fill();
ov(hx,hh,7.6,8,'#39435e');
poly([hx-3,hh-7,hx-8-sn*2,hh-12,hx+1,hh-8],'#39435e');
ov(hx+1.6,hh+.8,5.4,6.2,'#d9c9b8');
g.fillStyle='rgba(40,30,50,.25)';g.beginPath();g.ellipse(hx+1.6,hh-2.4,5.4,3,0,0,TAU);g.fill();
g.strokeStyle='#d8dce6';g.lineWidth=1.4;g.beginPath();g.moveTo(hx+3.4,hh-5);g.quadraticCurveTo(hx+6.4,hh-3.6,hx+6.6,hh-.6);g.stroke();
g.fillStyle='#4a5f82';g.fillRect(hx+3.6,hh-.2,1.7,1.9);
sl(hx+3,hh-1.5,hx+6,hh-1.8,'#7b6a60',.8);
g.strokeStyle='#5a678a';g.lineWidth=1.2;g.beginPath();g.arc(hx,hh,7.8,-2.7,-.2);g.stroke();
const th=.35-sw*.3;
const r=sarm('#3f4a68','#d9c9b8',th,11,shy);
g.save();g.translate(r[2],r[3]);g.rotate(-1.5+sw*.2);
sl(-14,0,25,0,'#52402f',2.4);
sl(-14,-.6,25,-.6,'rgba(255,230,190,.14)',.7);
for(let k=0;k<3;k++)sl(-6+k*9,-1.4,-6+k*9,1.4,'#8c7a58',1);
g.strokeStyle='#a89a78';g.lineWidth=1.3;g.beginPath();g.moveTo(24,-2.4);g.quadraticCurveTo(29,-7.4,35,-4);g.moveTo(24,2.4);g.quadraticCurveTo(29,7.4,35,4);g.stroke();
poly([30,0,34,-4,41,0,34,4],'#a3b4cc','rgba(225,232,245,.7)',.6);
poly([32,0,34,-1.9,37,0],'rgba(255,255,255,.5)');
gl('c',35,0,14+M.max(0,sw)*10,.14+M.max(0,sw)*.35+.04*M.sin(T*3));
for(let k=0;k<3;k++){const a=T*1.7+k*2.09;ov(35+M.cos(a)*10,M.sin(a)*5.6,1.1,1.1,'rgba(205,218,236,.85)')}
g.restore();
g.restore();
}

function dEl(s,sn,ph,id,sw,hy,cs,cw){
const c=s.c,hx=3.5+sn,hh=-28+id*.3,shy=-19+id*.3,aa=s.aa,ch=M.max(0,-sw),rl=M.max(0,sw),fl=M.floor(T*20)*7.3;
stepLeg(ph+PI,sn,-1.5,hy,c.l1,c.l2,1);
stepLeg(ph,sn,1.5,hy,c.l1,c.l2,1);
g.save();g.translate(0,hy);g.rotate(sn*.1+sw*.07);
g.lineCap='round';g.lineJoin='round';
const x0=-10-cs*.5+cw*.5,x1=8+cw*.3;
const wv=()=>{for(let k=0;k<=6;k++)g.lineTo(lr(x0,x1,k/6),13+M.sin(T*3+k*1.3)*(.5+sn*1.1))};
g.fillStyle=c.t;
g.beginPath();g.moveTo(-5,-20);g.quadraticCurveTo(-9-cs*.3,-4,x0,13);wv();g.quadraticCurveTo(7,-4,5.5,-19);g.lineTo(-.5,-21.5);g.closePath();g.fill();
g.fillStyle='rgba(8,4,22,.28)';
g.beginPath();g.moveTo(-8-cs*.2,2);g.lineTo(x0,13);wv();g.lineTo(x1,2);g.closePath();g.fill();
g.strokeStyle='#a06bff';g.lineWidth=1.2;g.beginPath();g.moveTo(x0,13);wv();g.stroke();
g.strokeStyle='rgba(205,160,255,.75)';g.lineWidth=.9;
g.beginPath();g.moveTo(-.5,-18);g.lineTo(1.8,-12);g.lineTo(-.9,-9);g.lineTo(1.6,-2);g.lineTo(-.2,4);g.stroke();
poly([-6.2,-18.4,5.8,-19.2,7.2,-13,-7.2,-12.2],'#43328a','rgba(8,4,22,.4)',.8);
g.fillStyle='#1e1640';g.fillRect(-6.4,-4,12.8,2.2);
ov(3.8,-2.9,1.9,1.9,'#d2adff');
gl('z',3.8,-2.9,9,.4);
g.fillStyle='#35286a';
g.beginPath();g.moveTo(hx-2,hh-8);g.quadraticCurveTo(hx-11-sn*3,hh-4,-8-sn*4-cs*.5+cw,-8);g.quadraticCurveTo(hx-8,hh+8,hx-1,hh+6);g.closePath();g.fill();
ov(hx,hh,7.6,8,'#35286a');
for(let k=0;k<5;k++){
const bx=hx-5+k*2.6,w=M.sin(T*8+k*1.7)*1.1;
poly([bx-1.8,hh-5.6,bx+w,hh-13.5-(k&1)*3.2-ch*2.5,bx+1.8,hh-5.6],'#8a5cf0');
}
ov(hx+1.6,hh+.8,5.4,6.2,'#d9c9b8');
g.fillStyle='rgba(40,20,70,.25)';g.beginPath();g.ellipse(hx+1.6,hh-2.4,5.4,3,0,0,TAU);g.fill();
g.fillStyle='#ecd8ff';g.fillRect(hx+3.6,hh-.2,1.7,1.9);
gl('z',hx+4.4,hh+.7,8,.5+ch*.3);
sl(hx+3,hh-1.5,hx+6,hh-1.8,'#5a4a7a',.8);
g.strokeStyle='#8a5cf0';g.lineWidth=1.2;g.beginPath();g.arc(hx,hh,7.8,-2.7,-.2);g.stroke();
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.globalAlpha=M.min(1,.55+ch*.3);g.strokeStyle='rgb(200,150,255)';g.lineWidth=.9;
g.beginPath();zig(hx-3,hh-12,hx-11,hh-6+hs(fl)*6,5,fl);g.stroke();
g.beginPath();zig(hx+3,hh-12,hx+11,hh-9+hs(fl+3)*6,5,fl+5);g.stroke();
g.restore();
const th=aa-ch*.06;
const r=sarm(c.a,'#d9c9b8',th,17,shy);
const r2=sarm('#231a45','#d9c9b8',1.2,12,shy);
orb(r2[2],r2[3],2.6+ch*1.5,.3+ch*.3,fl+31);
orb(r[2]+M.cos(th)*4,r[3]+M.sin(th)*4,5+ch*5+rl*4,M.min(1,.5+ch*.5+rl*.5),fl);
g.restore();
}

function dGk(s,sn,ph,id,sw,hy,cs,cw){
const c=s.c,bs=M.max(0,sw),wb=M.max(0,-sw),pu=.5+.25*M.sin(T*2.3+s.id),qx=15-wb*5+bs*9,qy=-17;
g.save();g.scale(1.25,1.25);
const k1=stepLeg(ph+PI,sn,-2.5,hy,c.l1,c.l2,1.5);
const k2=stepLeg(ph,sn,2.5,hy,c.l1,c.l2,1.5);
ov(k1[0],k1[1],3.4,3.2,'#625e53');ov(k2[0],k2[1],3.6,3.4,'#726e63');
g.save();g.translate(0,hy);g.rotate(sn*.04+sw*.04);
g.lineCap='round';g.lineJoin='round';
g.strokeStyle='#5f5b50';g.lineWidth=8.6;g.beginPath();g.moveTo(-10,-21);g.lineTo(-15+M.sin(ph)*2,-8);g.stroke();
ov(-15+M.sin(ph)*2,-5,5.4,5.2,'#6a665a');
const gr=g.createLinearGradient(-14,-28,14,2);gr.addColorStop(0,'#a09b8f');gr.addColorStop(1,'#5a564c');
g.fillStyle=gr;g.beginPath();g.moveTo(-10,2);g.lineTo(10,2);g.lineTo(14,-9);g.lineTo(13,-22);g.lineTo(7,-27);g.lineTo(-7,-27);g.lineTo(-13,-22);g.lineTo(-14,-9);g.closePath();g.fill();
g.strokeStyle='#2a2820';g.lineWidth=1;g.stroke();
g.strokeStyle='rgba(20,18,14,.6)';g.lineWidth=.9;
g.beginPath();g.moveTo(-6,-26);g.lineTo(-3,-18);g.lineTo(-8,-11);g.lineTo(-4,-4);g.moveTo(7,-25);g.lineTo(4,-16);g.lineTo(9,-9);g.stroke();
g.fillStyle='rgba(84,110,64,.5)';
g.beginPath();g.ellipse(-8,-24,5,2.2,.3,0,TAU);g.fill();
g.beginPath();g.ellipse(8,-4,4,1.8,0,0,TAU);g.fill();
ov(0,-14,3,4.2,'rgba(120,230,200,'+pu+')');
gl('g',0,-14,16,.14+pu*.2);
g.fillStyle='#3d3a31';g.fillRect(-11,-3,22,3);
ov(-12,-23,6.4,4.8,'#7e7a6e');ov(12,-24,6.8,5,'#8a867a');
g.strokeStyle='#2a2820';g.lineWidth=.9;
g.beginPath();g.ellipse(-12,-23,6.4,4.8,0,0,TAU);g.stroke();
g.beginPath();g.ellipse(12,-24,6.8,5,0,0,TAU);g.stroke();
g.fillStyle='#8f8a7e';g.beginPath();g.moveTo(-4,-27);g.lineTo(-5,-36);g.lineTo(2,-40);g.lineTo(9,-37);g.lineTo(10,-29);g.lineTo(6,-26.5);g.closePath();g.fill();
g.strokeStyle='#2a2820';g.lineWidth=1;g.stroke();
sl(-3,-35,3,-38,'rgba(255,255,255,.14)',1.2);
g.fillStyle='#0a0a08';g.fillRect(3,-34,7,2.6);
g.fillStyle='#8ff0d4';g.fillRect(5,-33.4,4,1.2);
gl('g',7,-32.8,8,.35+bs*.3);
g.strokeStyle='#6a665a';g.lineWidth=8.4;g.beginPath();g.moveTo(9,-21);g.lineTo(qx,qy);g.stroke();
ov(qx,qy,3.6,3.6,'#77736a');
g.save();g.translate(qx+4,qy-1);
const sg=g.createLinearGradient(-8,-21,8,21);sg.addColorStop(0,'#928d80');sg.addColorStop(1,'#46423a');
g.fillStyle=sg;g.beginPath();g.moveTo(-6,-21);g.lineTo(6,-21);g.lineTo(8,2);g.quadraticCurveTo(7,15,0,21);g.quadraticCurveTo(-7,15,-8,2);g.closePath();g.fill();
g.strokeStyle='#2a2820';g.lineWidth=1.4;g.stroke();
g.strokeStyle='rgba(205,220,210,.25)';g.lineWidth=1;
g.beginPath();g.moveTo(-4.4,-18);g.lineTo(4.4,-18);g.lineTo(5.6,2);g.quadraticCurveTo(4.8,12,0,17);g.quadraticCurveTo(-4.8,12,-5.6,2);g.closePath();g.stroke();
g.strokeStyle='rgba(20,18,14,.55)';g.lineWidth=.9;
g.beginPath();g.moveTo(-3,-18);g.lineTo(-1,-10);g.lineTo(-4,-5);g.moveTo(3,12);g.lineTo(1,6);g.lineTo(4,2);g.stroke();
ov(0,-2,3.8,4.6,'#5a564c');
ov(0,-2,1.9,2.5,'rgba(130,240,210,'+(pu+bs*.3)+')');
g.restore();
gl('g',qx+4,qy-3,22+bs*20,.12+pu*.12+bs*.5);
g.restore();
g.restore();
}

const SD=[dAr,dMg,dEl,dGk];
