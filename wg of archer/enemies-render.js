function drawS(s){
const i=s.id,sn=M.min(1,M.abs(s.vx)/150),ph=s.ph,id=M.sin(T*1.9+i*2.1),sw=s.sw;
const hy=-26-(1-M.abs(M.sin(ph)))*2.2*sn+id*.4;
const cs=sn*5+id*.6,cw=M.sin(T*2.3+i)*1.3+M.sin(T*5.1+i)*.5*sn;
shd(s.x,18,.62);
g.save();g.translate(s.x,s.y);g.scale(s.f,1);
SD[i](s,sn,ph,id,sw,hy,cs,cw);
g.restore();
if(s.hf>0)gl('r',s.x,s.y-30,34,s.hf*2.6);
}

function bGh(e,sn,id,sw,ph){
const hy=-23-(1-M.abs(M.sin(ph)))*2*sn+id*.5;
stepLeg(ph+PI,sn,-1.5,hy,'#343d36','#26221f',.95);
stepLeg(ph,sn,1.5,hy,'#3f4a41','#2e2a26',.95);
g.save();g.translate(0,hy);g.rotate(.36+sn*.08+sw*.1);
g.lineCap='round';g.lineJoin='round';
const a=1.3+M.sin(ph)*.3,rb=ik(1,-15,1+M.cos(a)*19,-15+M.sin(a)*19,10,10,1);
g.strokeStyle='#4a554a';g.lineWidth=3.8;g.beginPath();g.moveTo(1,-15);g.lineTo(rb[0],rb[1]);g.lineTo(rb[2],rb[3]);g.stroke();
claws(rb[2],rb[3],a,'#cfc8b2',5.6);
g.fillStyle='#667262';g.beginPath();g.moveTo(-6,1);g.quadraticCurveTo(-10,-10,-5,-19);g.quadraticCurveTo(0,-24,7,-18);g.quadraticCurveTo(9,-8,6,1);g.closePath();g.fill();
g.fillStyle='rgba(10,16,10,.22)';g.beginPath();g.moveTo(-6,1);g.quadraticCurveTo(-10,-10,-5,-19);g.lineTo(-1,-18);g.quadraticCurveTo(-4,-8,-1,1);g.closePath();g.fill();
g.fillStyle='#3f4a3e';
for(let k=0;k<4;k++){const x=-8.4+k*2.1,y=-5-k*4.2;g.beginPath();g.moveTo(x,y+2.4);g.lineTo(x-4.2,y-.6);g.lineTo(x+.6,y-2.4);g.closePath();g.fill()}
g.strokeStyle='rgba(30,38,30,.55)';g.lineWidth=1;
for(let k=0;k<4;k++){g.beginPath();g.moveTo(1,-5-k*3.4);g.quadraticCurveTo(4.6,-4.2-k*3.4,6.4,-6.6-k*3.4);g.stroke()}
sl(-2,-14,2,-9,'rgba(90,40,36,.5)',.9);
g.fillStyle='#3a342f';g.beginPath();g.moveTo(-6,0);g.lineTo(7,0);
for(let k=0;k<5;k++){const x=6.4-k*3.1;g.lineTo(x-1.3,5+(k&1?3.4:0)+M.sin(T*2.2+k+e.id)*.9)}
g.lineTo(-6,1);g.closePath();g.fill();
const hx=7,hh=-20+id*.3,op=.25+.2*M.sin(T*2.4+e.id)+M.max(0,-sw)*.5;
poly([hx-5,hh-3,hx-12.5,hh-8.5,hx-6.5,hh+1.5],'#74826f');
ov(hx,hh,7,7,'#74826f');
ov(hx+3,hh-3.4,4.2,1.8,'#58654f');
ov(hx+3.6,hh-1,2.2,1.7,'#1a1411');
ov(hx+4,hh-1,1.1,.9,'#d6c98e');
gl('a',hx+4,hh-1,6,.18);
poly([hx+1,hh+3,hx+9,hh+3.4,hx+8.6,hh+6.4+op*6,hx+1.5,hh+6.2+op*3.6],'#5d6b5a');
poly([hx+1,hh+3,hx+9,hh+3.4,hx+9,hh+3.8+op*3.6,hx+1,hh+4+op*2],'#1c1512');
g.fillStyle='#d6cfb2';
for(let k=0;k<3;k++){
poly([hx+3.4+k*2,hh+3.1,hx+4.2+k*2,hh+5.2,hx+5+k*2,hh+3.1]);g.fill();
}
sl(hx+8,hh+6+op*5,hx+8.2,hh+9+op*5+M.sin(T*3+e.id),'rgba(190,205,180,.55)',.8);
const th=sw<0?1.25+sw*1.9:1.25-sw*.95,rf=ik(2,-15,2+M.cos(th)*18,-15+M.sin(th)*18,10,10,1);
g.strokeStyle='#64715f';g.lineWidth=4.2;g.beginPath();g.moveTo(2,-15);g.lineTo(rf[0],rf[1]);g.lineTo(rf[2],rf[3]);g.stroke();
claws(rf[2],rf[3],th,'#d9d2bd',6);
g.restore();
}
function bSk(e,sn,id,sw,ph){
const hy=-26-(1-M.abs(M.sin(ph)))*2.2*sn+id*.4;
const k1=stepLeg(ph+PI,sn,-1.5,hy,'#a39b86','#8f8772',.62);
const k2=stepLeg(ph,sn,1.5,hy,'#c8c0ab','#b0a892',.62);
ov(k1[0],k1[1],2,2,'#a39b86');ov(k2[0],k2[1],2.1,2.1,'#d4ccb7');
g.save();g.translate(0,hy);g.rotate(sn*.07+sw*.05);
g.lineCap='round';g.lineJoin='round';
ov(0,-1,5,3,'#c4bca6');
ov(0,-13,6.2,9.4,'#24211e');
g.strokeStyle='#cfc7b2';g.lineWidth=1.5;
for(let k=0;k<4;k++){const y=-8-k*3.6;g.beginPath();g.moveTo(-5.2+k*.4,y);g.quadraticCurveTo(1,y+2.2,5.6-k*.5,y-.2);g.stroke()}
sl(.2,-1,.2,-22,'#cfc7b2',1.8);
for(let k=0;k<6;k++)ov(.2,-3-k*3.4,1.2,.9,'#d8d0bb');
sl(-5,-1,5,-1,'#6a5547',1.4);
g.fillStyle='#4a3a2f';g.beginPath();g.moveTo(-5,-1);g.lineTo(5.5,-1);g.lineTo(5,7+M.sin(T*2+e.id)*.8);g.lineTo(1.5,4);g.lineTo(-1,8);g.lineTo(-5,5);g.closePath();g.fill();
const hx=3.5+sn,hh=-29+id*.3;
ov(hx,hh,6.8,6.8,'#d8d0bb');
ov(hx+2.4,hh+5.6,4,2.4,'#c9c1ac');
g.strokeStyle='#2a2622';g.lineWidth=.8;
for(let k=0;k<3;k++){g.beginPath();g.moveTo(hx+.6+k*2,hh+4.4);g.lineTo(hx+.6+k*2,hh+6.6);g.stroke()}
sl(hx-2,hh-6.4,hx-.5,hh-2.4,'#6a6454',.7);
ov(hx+3.4,hh-.8,1.9,2.3,'#1b1816');
ov(hx+3.8,hh-.6,.7,.7,'#a8793e');
gl('a',hx+3.8,hh-.6,6,.16);
g.fillStyle='#6d5645';g.beginPath();g.arc(hx,hh-.6,7.6,PI,TAU);g.lineTo(hx+7.4,hh-1.8);g.lineTo(hx-7.6,hh-1.8);g.closePath();g.fill();
sl(hx-7.6,hh-1.8,hx+7.4,hh-1.8,'#8a6f58',1);
sl(hx+6.6,hh-1.8,hx+6.6,hh+2.8,'#6d5645',1.6);
g.strokeStyle='#cfc7b2';g.lineWidth=2.4;g.beginPath();g.moveTo(-1,-19);g.lineTo(5,-15);g.lineTo(10,-16);g.stroke();
ov(5,-15,1.7,1.7,'#d8d0bb');
ov(11,-16,4.6,11.5,'#5a4636');
g.strokeStyle='#7b7f86';g.lineWidth=1.4;g.beginPath();g.ellipse(11,-16,4.6,11.5,0,0,TAU);g.stroke();
sl(11,-27,11,-5,'rgba(30,20,14,.5)',.7);
sl(6.8,-16,15.2,-16,'#6d7076',1.2);
sl(12,-26,10,-19,'#2a1d14',.8);
ov(11.6,-16,1.8,1.8,'#8a8f98');
const th=sw<0?.5+sw*2.4:.5+sw*.55,r=ik(1.5,-19,1.5+M.cos(th)*14,-19+M.sin(th)*14,8,8,1);
g.strokeStyle='#d3cbb6';g.lineWidth=2.6;g.beginPath();g.moveTo(1.5,-19);g.lineTo(r[0],r[1]);g.lineTo(r[2],r[3]);g.stroke();
ov(r[0],r[1],1.7,1.7,'#d8d0bb');
g.save();g.translate(r[2],r[3]);g.rotate(th);
sl(-3,0,3,0,'#3b2a1e',2.4);
sl(3,-3,3,3,'#6a5547',1.6);
poly([3.5,-1.6,20,-2.6,27,-1,24,1.6,3.5,1.4],'#8d8579');
ov(12,.4,3,.9,'rgba(122,90,68,.55)');ov(21,-.8,2,.7,'rgba(122,90,68,.55)');
sl(5,-1.2,23,-2,'rgba(230,225,210,.45)',.6);
g.restore();
g.restore();
}
function bGo(e,sn,id,sw,ph){
const hy=-25-(1-M.abs(M.sin(ph)))*1.6*sn+id*.3;
const k1=stepLeg(ph+PI,sn,-2.5,hy,'#3f4248','#303236',1.55);
const k2=stepLeg(ph,sn,2.5,hy,'#4b4e55','#383a40',1.55);
ov(k1[0],k1[1],3.4,3.2,'#4a4d54');ov(k2[0],k2[1],3.6,3.4,'#565960');
g.save();g.translate(0,hy);g.rotate(sn*.05+sw*.06);
g.lineCap='round';g.lineJoin='round';
const bx=-11+M.sin(ph)*3,by=-5+M.cos(ph);
g.strokeStyle='#44474e';g.lineWidth=7.6;g.beginPath();g.moveTo(-9,-21);g.lineTo(bx,by);g.stroke();
ov(bx,by+1,4.4,4.2,'#565960');
poly([-12,-21,-6,-26,-3,-14,-12,-9],'#5a5d64');
g.fillStyle='#62656c';g.beginPath();g.moveTo(-9,1);g.lineTo(9,1);g.lineTo(13,-9);g.lineTo(12,-22);g.lineTo(6,-26);g.lineTo(-6,-26);g.lineTo(-12,-21);g.lineTo(-13,-9);g.closePath();g.fill();
g.strokeStyle='#2c2e33';g.lineWidth=1;g.stroke();
poly([-12,-21,-6,-26,-3,-14,-12,-9],'rgba(255,255,255,.07)');
poly([4,-26,12,-21,13,-9,7,1,2,1],'rgba(0,0,0,.2)');
g.strokeStyle='rgba(30,32,36,.6)';g.lineWidth=.9;
g.beginPath();g.moveTo(-12,-13);g.lineTo(12,-13);g.moveTo(-10,-5);g.lineTo(10,-5);g.stroke();
g.fillStyle='rgba(78,104,70,.55)';
g.beginPath();g.ellipse(-8,-21,5,2.4,.3,0,TAU);g.fill();
g.beginPath();g.ellipse(7,-6,4,2,0,0,TAU);g.fill();
g.beginPath();g.ellipse(-4,-2,3.2,1.6,0,0,TAU);g.fill();
g.beginPath();g.ellipse(9,-17,2.6,1.4,0,0,TAU);g.fill();
const cr=()=>{g.beginPath();g.moveTo(-3,-24);g.lineTo(-1,-17);g.lineTo(-5,-12);g.lineTo(-2,-5);g.moveTo(-1,-17);g.lineTo(5,-14)};
g.strokeStyle='#26282c';g.lineWidth=1.1;cr();g.stroke();
const pu=.3+.18*M.sin(T*2.2+e.id);
g.strokeStyle='rgba(196,128,66,'+pu+')';g.lineWidth=.6;cr();g.stroke();
for(let k=0;k<3;k++)poly([-8+k*7,1,-6+k*7,6,-4+k*7,1],'#55585f','#2c2e33',.6);
g.fillStyle='#707379';g.beginPath();g.moveTo(-4,-26);g.lineTo(-5,-34);g.lineTo(3,-38);g.lineTo(10,-35);g.lineTo(11,-27);g.closePath();g.fill();
g.strokeStyle='#2c2e33';g.lineWidth=1;g.stroke();
poly([-1,-37,1,-43,4,-37],'#5e6168','#2c2e33',.8);
ov(5,-34.6,5,1.2,'#4c4f56');
g.fillStyle='#d9a566';g.fillRect(5.4,-33.4,5,1.8);
gl('a',8,-32.5,8,.2);
ov(9,-22,6,4.2,'#5a5d64');
g.strokeStyle='#2c2e33';g.lineWidth=1;g.beginPath();g.ellipse(9,-22,6,4.2,0,0,TAU);g.stroke();
const th=sw<0?1.35+sw*2.4:1.35-sw*.9,ax=9+M.cos(th)*16,ay=-21+M.sin(th)*16;
g.strokeStyle='#585b62';g.lineWidth=8.4;g.beginPath();g.moveTo(9,-21);g.lineTo(ax,ay);g.stroke();
g.save();g.translate(ax,ay);g.rotate(th);
g.fillStyle='#6d7077';g.beginPath();g.moveTo(-1,-6);g.lineTo(10,-5);g.lineTo(11,5);g.lineTo(-1,6.5);g.closePath();g.fill();
g.strokeStyle='#2c2e33';g.lineWidth=1;g.stroke();
sl(3,-5,3.6,5.4,'rgba(20,22,26,.6)',.8);sl(7,-4.6,7.4,4.8,'rgba(20,22,26,.6)',.8);
g.restore();
g.restore();
}
function fireB(e,t,vo,p2){
if(!t)return;
const z=e.sz,ox=e.x+e.f*26*z,oy=e.y-30*z,ty=(t===p?p.y:t.y)-28,b=M.atan2(ty-oy,t.x-ox),n=vo?5+p2*2:1,v=vo?470:600;
for(let i=0;i<n;i++){
const a=b+(i-(n-1)/2)*.15;
Pr.push({t:'b',x:ox,y:oy,vx:M.cos(a)*v,vy:M.sin(a)*v,dm:e.dm*(vo?.5:.85),l:0,bg:vo?0:1});
}
ring(ox,oy,'215,70,95',vo?44:30);
sp(1,ox,oy,0,0,.25,vo?84:60,'r');
for(let i=0;i<8;i++)sp(3,ox,oy,e.f*rnd(60,260),rnd(-120,120),rnd(.2,.4),2,'225,85,110',200,2);
shake=M.max(shake,vo?3:2);
e.sw=1;
}
function upBossR(e,dt){
const t=near(e),p2=e.hp<e.mh*.5?1:0,dx=t?t.x-e.x:0,ad=M.abs(dx),nr=M.max(180,M.min(300,VW*.3)),fr=M.max(300,M.min(520,VW*.42));
e.tm-=dt;
if(e.st==0){
if(t)e.f=sgn(dx);
const want=t?(ad<nr?-e.f*e.sp*(1.6+p2*.4):ad>fr?e.f*e.sp*(1+p2*.3):0):0;
e.vx+=(want-e.vx)*M.min(1,dt*4);
e.sw*=M.exp(-dt*6);
if(e.tm<=0&&t&&ad<fr+120){e.n++;if(e.n%3==0){e.st=3;e.tm=p2?.85:1.1}else{e.st=1;e.tm=p2?.6:.8}}
}else if(e.st==1){
e.vx*=M.exp(-dt*6);if(t)e.f=sgn(dx);e.sw=-(1-M.max(0,e.tm)/(p2?.6:.8));
if(e.tm<=0){fireB(e,t,0,p2);e.st=2;e.tm=p2?.5:.8}
}else if(e.st==3){
e.vx*=M.exp(-dt*6);if(t)e.f=sgn(dx);e.sw=-(1-M.max(0,e.tm)/(p2?.85:1.1));
if(e.tm<=0){fireB(e,t,1,p2);e.st=2;e.tm=p2?.7:1}
}else{
e.vx*=M.exp(-dt*6);e.sw*=M.exp(-dt*3);
if(e.tm<=0){e.st=0;e.tm=p2?.6:1.1}
}
e.x+=e.vx*dt;
e.ph+=M.abs(e.vx)*dt*.05;
}

function bAr(e,sn,id,sw,ph){
const hy=-26-(1-M.abs(M.sin(ph)))*2*sn+id*.4,dr=M.max(0,-sw),rl=M.max(0,sw),cw=M.sin(T*2+e.id)*1.6,pu=.5+.25*M.sin(T*2.4+e.id);
stepLeg(ph+PI,sn,-2,hy,'#1c1a26','#141220',1.2);
stepLeg(ph,sn,2,hy,'#242232','#181624',1.2);
g.save();g.translate(0,hy);g.rotate(sn*.04-dr*.07+rl*.05);
g.lineCap='round';g.lineJoin='round';
g.fillStyle='#2a1f36';g.beginPath();g.moveTo(-6,-23);g.quadraticCurveTo(-16-sn*4,-8,-15-sn*5+cw,17);
for(let k=1;k<=6;k++)g.lineTo(lr(-15-sn*5+cw,4,k/6),17+(k&1?-3.6:1.6)+M.sin(T*3+k+e.id)*1);
g.lineTo(5,-16);g.closePath();g.fill();
g.strokeStyle='rgba(220,70,100,.3)';g.lineWidth=.8;g.stroke();
g.save();g.translate(-8,-14);g.rotate(-.45);
g.fillStyle='#2e2230';g.fillRect(-3,-11,6,20);
g.fillStyle='#1a1220';g.fillRect(-3,-11,6,2.4);
g.strokeStyle='#d24a68';g.lineWidth=1.4;
for(let k=0;k<4;k++){g.beginPath();g.moveTo(-2+k*1.4,-11);g.lineTo(-2.6+k*1.8,-17);g.stroke()}
g.restore();
g.fillStyle='#3a2f4c';g.beginPath();g.moveTo(-8,1);g.lineTo(8,1);g.quadraticCurveTo(10,-10,8,-20);g.lineTo(-.5,-24);g.lineTo(-8,-20);g.quadraticCurveTo(-10,-10,-8,1);g.closePath();g.fill();
g.strokeStyle='#150f1c';g.lineWidth=1;g.stroke();
poly([-8,-20,-.5,-24,0,1,-8,1],'rgba(0,0,0,.18)');
sl(-5,-22,5.4,-4,'#241a2c',1.8);
ov(0,-12,2,3.2,'rgba(235,80,110,'+(pu+.2)+')');
gl('r',0,-12,14,.16+pu*.16);
g.fillStyle='#241a2c';g.fillRect(-8,-3,16,2.6);
ov(0,-1.7,1.8,1.4,'#c8506a');
ov(-9,-21,5.6,4,'#2a2236');ov(9,-22,5.8,4.2,'#2a2236');
g.fillStyle='#241a30';g.beginPath();g.moveTo(-5,-24);g.quadraticCurveTo(-8,-34,-3,-44);g.quadraticCurveTo(2,-52,8,-38);g.lineTo(9,-30);g.lineTo(5,-24);g.closePath();g.fill();
g.strokeStyle='#150f1c';g.lineWidth=1;g.stroke();
ov(5,-33,4.4,6,'#d8d2c4');
g.fillStyle='#0a0710';g.fillRect(4,-35,6,2.4);
g.fillStyle='#ff5a78';g.fillRect(6,-34.6,3.6,1.4);
gl('r',8,-33.8,10,.5+dr*.4);
const bx=22,by=-23,bl=26,nk=bx-1-dr*11+rl*2;
const ra=ik(3,-21,bx,by,11,11,1);
g.strokeStyle='#2c2438';g.lineWidth=5.2;g.beginPath();g.moveTo(3,-21);g.lineTo(ra[0],ra[1]);g.lineTo(ra[2],ra[3]);g.stroke();
g.strokeStyle='#1c1424';g.lineWidth=3.6;g.beginPath();g.moveTo(bx-1,by-bl);g.quadraticCurveTo(bx+14,by,bx-1,by+bl);g.stroke();
g.lineWidth=2.6;
g.beginPath();g.moveTo(bx-1,by-bl);g.quadraticCurveTo(bx,by-bl-3,bx+5,by-bl-5);g.moveTo(bx-1,by+bl);g.quadraticCurveTo(bx,by+bl+3,bx+5,by+bl+5);g.stroke();
g.save();g.globalCompositeOperation='lighter';
g.strokeStyle='rgba(235,70,100,'+(.55+dr*.4)+')';g.lineWidth=1.1;
g.beginPath();g.moveTo(bx-1,by-bl+4);g.quadraticCurveTo(bx+12,by,bx-1,by+bl-4);g.stroke();
g.restore();
sl(bx+5,by-4,bx+5,by+4,'#7a2a40',2.6);
g.strokeStyle='rgba(235,200,210,.8)';g.lineWidth=.9;
g.beginPath();g.moveTo(bx-1,by-bl);g.lineTo(nk,by);g.lineTo(bx-1,by+bl);g.stroke();
if(dr>.02){
g.strokeStyle='#3a2a3e';g.lineWidth=2;g.beginPath();g.moveTo(nk,by);g.lineTo(bx+20,by);g.stroke();
g.fillStyle='#ff7a94';g.beginPath();g.moveTo(bx+29,by);g.lineTo(bx+19,by-3.6);g.lineTo(bx+21,by);g.lineTo(bx+19,by+3.6);g.closePath();g.fill();
g.fillStyle='#8a2a44';g.beginPath();g.moveTo(nk,by);g.lineTo(nk-5,by-3.4);g.lineTo(nk+3,by-.4);g.lineTo(nk+3,by+.4);g.lineTo(nk-5,by+3.4);g.closePath();g.fill();
gl('r',bx+23,by,14+dr*16,dr*.9);
}
ov(bx,by,3,3,'#2c2438');
const rb=ik(0,-21,nk,by,11,11,1);
g.strokeStyle='#241c30';g.lineWidth=4.8;g.beginPath();g.moveTo(0,-21);g.lineTo(rb[0],rb[1]);g.lineTo(rb[2],rb[3]);g.stroke();
ov(rb[2],rb[3],2.6,2.6,'#2c2438');
g.restore();
}

function bBo(e,sn,id,sw,ph){
const hy=-26-(1-M.abs(M.sin(ph)))*2*sn+id*.4,cw=M.sin(T*2+.7)*1.6;
const k1=stepLeg(ph+PI,sn,-3,hy,'#30323a','#25272d',1.7);
const k2=stepLeg(ph,sn,3,hy,'#3a3d46','#2b2d34',1.7);
ov(k1[0],k1[1],3.6,3.4,'#3d414c');ov(k2[0],k2[1],3.8,3.6,'#484c58');
g.save();g.translate(0,hy);g.rotate(sn*.04+(e.st==4?.2:e.st==3?-.14:0));
g.lineCap='round';g.lineJoin='round';
g.fillStyle='#2a1d24';g.beginPath();g.moveTo(-6,-22);g.quadraticCurveTo(-16-sn*4,-8,-15-sn*5+cw,16);g.lineTo(-11,12);g.lineTo(-8,17);g.lineTo(-5,11);g.lineTo(-2,14);g.lineTo(2,9);g.lineTo(4,-16);g.closePath();g.fill();
g.strokeStyle='rgba(120,90,100,.25)';g.lineWidth=.8;g.stroke();
const gr=g.createLinearGradient(-13,-26,13,1);gr.addColorStop(0,'#4d515d');gr.addColorStop(1,'#2a2c34');
g.fillStyle=gr;g.beginPath();g.moveTo(-9,1);g.lineTo(9,1);g.lineTo(13,-8);g.lineTo(13,-21);g.lineTo(7,-26);g.lineTo(-7,-26);g.lineTo(-13,-21);g.lineTo(-13,-8);g.closePath();g.fill();
g.strokeStyle='#1c1d22';g.lineWidth=1;g.stroke();
g.beginPath();g.moveTo(-12,-9);g.lineTo(12,-9);g.moveTo(-11,-17);g.lineTo(11,-17);g.moveTo(0,-26);g.lineTo(0,1);g.stroke();
poly([-13,-21,-7,-26,-5,-12,-13,-9],'rgba(255,255,255,.06)');
const pu=.4+.2*M.sin(T*2.4);
g.fillStyle='rgba(196,128,66,'+pu+')';g.beginPath();g.ellipse(0,-13,2.4,3.6,0,0,TAU);g.fill();
gl('a',0,-13,14,.16+pu*.14);
g.fillStyle='#2f2a2b';g.fillRect(-9,-3,18,3);g.fillStyle='#8a6f4a';g.fillRect(-2,-3.4,4,3.8);
for(let k=0;k<6;k++)ov(-8+k*3.2,-.6+M.sin(k+T*2)*.4,1.3,.9,'#767d8c');
g.fillStyle='#585d6a';g.strokeStyle='#767d8c';g.lineWidth=1;
g.beginPath();g.ellipse(-11,-22,6.5,4.6,0,0,TAU);g.fill();g.stroke();
g.beginPath();g.ellipse(11,-23.5,7,5,0,0,TAU);g.fill();g.stroke();
g.fillStyle='#767d8c';
for(let k=0;k<3;k++){g.beginPath();g.moveTo(8+k*3.2,-27);g.lineTo(9+k*3.2,-32.5);g.lineTo(11+k*3.2,-27);g.closePath();g.fill()}
g.fillStyle='#3d414c';g.beginPath();g.moveTo(-5,-27);g.lineTo(-6,-38);g.quadraticCurveTo(2,-43,10,-38);g.lineTo(11,-30);g.lineTo(6,-26.5);g.closePath();g.fill();
g.strokeStyle='#1c1d22';g.lineWidth=1;g.stroke();
sl(-4,-37,4,-41,'rgba(255,255,255,.14)',1.2);
g.strokeStyle='#c2b79e';g.lineWidth=2.8;
g.beginPath();g.moveTo(-3,-38);g.quadraticCurveTo(-10,-41,-9,-50);g.stroke();
g.beginPath();g.moveTo(6,-40);g.quadraticCurveTo(9,-46,5,-53);g.stroke();
g.strokeStyle='rgba(60,52,44,.5)';g.lineWidth=.8;
g.beginPath();g.moveTo(-5,-41);g.quadraticCurveTo(-9.6,-43,-9.2,-49);g.stroke();
g.fillStyle='#0a0a0e';g.fillRect(3,-35,8,3);g.fillStyle='#d9a566';g.fillRect(6,-34.2,4.6,1.2);
gl('a',8.3,-33.6,8,.26);
const th=sw<0?.75+sw*2.95:.75+sw*.25,hx=9+M.cos(th)*13,hy2=-23+M.sin(th)*13;
g.strokeStyle='#383b44';g.lineWidth=7;g.beginPath();g.moveTo(9,-23);g.lineTo(hx,hy2);g.stroke();
g.save();g.translate(hx,hy2);g.rotate(th);
g.strokeStyle='#4a3a2c';g.lineWidth=3.2;g.beginPath();g.moveTo(-6,0);g.lineTo(40,0);g.stroke();
for(let k=0;k<4;k++)sl(4+k*8,-1.6,5+k*8,1.6,'#6a5a46',.9);
const hg=g.createLinearGradient(0,-9,0,9);hg.addColorStop(0,'#666a77');hg.addColorStop(1,'#33363e');
g.fillStyle=hg;g.fillRect(38,-9.5,16,19);g.strokeStyle='#1c1d22';g.lineWidth=1;g.strokeRect(38,-9.5,16,19);
g.fillStyle='#2a2c34';g.fillRect(44,-9.5,2.6,19);
g.fillStyle='rgba(196,128,66,'+(.3+.2*M.sin(T*2.4+1))+')';
g.fillRect(40,-4,2,2);g.fillRect(40,2,2,2);g.fillRect(49,-3,2,2);g.fillRect(49,3,2,2);
g.restore();
g.restore();
}
function bWg(e,sn,id,sw,ph){
const dv=e.st==2?1:0,fl=M.sin(T*(dv?15:9)+e.id*3),by=-34+id*1.6,tl=dv?.55:(e.st==1?-.25:0);
g.lineCap='round';g.lineJoin='round';
const wing=(c1,c2,s)=>{
g.save();g.translate(-1,by-4);g.rotate(-.35+fl*.75*s-dv*.6);
g.fillStyle=c1;g.beginPath();g.moveTo(0,0);g.lineTo(-3,-30);g.lineTo(-10,-22);g.lineTo(-15,-33);g.lineTo(-19,-20);g.lineTo(-27,-27);g.lineTo(-24,-8);g.lineTo(-30,-2);g.lineTo(-14,4);g.closePath();g.fill();
g.strokeStyle=c2;g.lineWidth=1.6;
g.beginPath();g.moveTo(0,0);g.lineTo(-3,-30);g.moveTo(0,0);g.lineTo(-15,-33);g.moveTo(0,0);g.lineTo(-27,-27);g.moveTo(0,0);g.lineTo(-30,-2);g.stroke();
g.restore();
};
wing('#2f2540','#1d1628',.8);
g.save();g.translate(0,by);g.rotate(tl);
g.strokeStyle='#2a2038';g.lineWidth=1.8;
g.beginPath();g.moveTo(-3,7);g.quadraticCurveTo(-8,12,-6,17+M.sin(T*4+e.id)*1.6);g.stroke();
sl(1,7,0,15,'#2a2038',1.8);
claws(0,15,1.3,'#d6cfb2',4);
ov(0,0,6.4,8.6,'#3d2f54');
ov(1,1,3.4,5,'#5b4678');
poly([4,-12,3,-19,8,-13],'#4d3c68');
poly([9,-13,12,-19,12,-11],'#4d3c68');
ov(7,-9,5.2,5,'#4d3c68');
poly([11,-8,16,-6.4,11.4,-5],'#3d2f54');
poly([12.4,-6,13,-3.6,13.8,-5.6],'#e6e0cc');
ov(9.6,-9.4,1.3,1.1,'#ffd27a');
gl('a',9.6,-9.4,6,.3);
g.restore();
wing('#4a3a63','#2a2038',1);
}
function bSt(e,sn,id,sw,ph){
const hy=-24-(1-M.abs(M.sin(ph)))*1.8*sn+id*.4,hx=3.5+sn,hh=-28+id*.3,cw=M.sin(T*2.3+e.id)*1.4,rz=M.max(0,-sw),sk=M.max(0,sw);
stepLeg(ph+PI,sn,-1.5,hy,'#1b1624','#110e17',.9);
stepLeg(ph,sn,1.5,hy,'#241d30','#161220',.9);
g.save();g.translate(0,hy);g.rotate(sn*.07+sk*.08-rz*.06);
g.lineCap='round';g.lineJoin='round';
const x0=-13-sn*4+cw;
g.fillStyle='#3a2c52';g.beginPath();g.moveTo(-6,-21);g.quadraticCurveTo(-14-sn*3,-8,x0,12);
for(let k=1;k<=5;k++)g.lineTo(lr(x0,8,k/5),12+(k&1?-2.6:1.4)+M.sin(T*3+k+e.id)*.8);
g.quadraticCurveTo(10,-6,6,-21);g.lineTo(-.5,-23);g.closePath();g.fill();
g.strokeStyle='rgba(180,150,230,.35)';g.lineWidth=.9;g.stroke();
sl(.2,-21,.4,10,'rgba(10,6,20,.4)',.9);
g.fillStyle='#8a6b45';g.fillRect(-6,-4,12,2.4);
ov(.4,-2.8,1.6,1.6,'#c9a8ff');
g.fillStyle='#2e2342';
g.beginPath();g.moveTo(hx-5,hh-6);g.quadraticCurveTo(hx-11-sn*3,hh-3,-9-sn*4+cw,-20);g.lineTo(hx-3,hh+6);g.closePath();g.fill();
g.beginPath();g.arc(hx,hh,8,0,TAU);g.fill();
poly([hx-3,hh-6,hx-1,hh-17,hx+4,hh-7],'#2e2342');
g.fillStyle='#07050b';g.beginPath();g.ellipse(hx+3.4,hh+.6,4.4,5,0,0,TAU);g.fill();
g.fillStyle='#d6bcff';
g.beginPath();g.ellipse(hx+5.6,hh-.6,1,1.4,0,0,TAU);g.fill();
g.beginPath();g.ellipse(hx+2.6,hh-.6,1,1.4,0,0,TAU);g.fill();
gl('v',hx+4.2,hh-.6,8,.4);
const ax=lr(20,25,rz),ay=lr(-12,-19,rz),r=ik(2,-19,ax,ay,10,10,1);
g.strokeStyle='#2a2040';g.lineWidth=4.2;g.beginPath();g.moveTo(2,-19);g.lineTo(r[0],r[1]);g.lineTo(r[2],r[3]);g.stroke();
g.save();g.translate(r[2],r[3]);g.rotate(sk*.35-rz*.1);
sl(0,12,0,-27,'#5a4630',2.2);
g.strokeStyle='#8a6b45';g.lineWidth=1.4;g.beginPath();g.arc(0,-29,4.6,.5,TAU-.5);g.stroke();
ov(0,-29,3.2,3.2,'#c9a8ff');
gl('v',0,-29,12+rz*12+sk*9,.5+rz*.4+sk*.2);
g.restore();
ov(r[2],r[3],2.4,2.4,'#b58d68');
g.restore();
}
function bGl(e,sn,id,sw,ph){
const hy=-25-(1-M.abs(M.sin(ph)))*1.6*sn+id*.3;
const k1=stepLeg(ph+PI,sn,-3.5,hy,'#4f4a44','#3c3833',1.9);
const k2=stepLeg(ph,sn,3.5,hy,'#5e5851','#443f39',1.9);
ov(k1[0],k1[1],4.4,4.2,'#575149');ov(k2[0],k2[1],4.6,4.4,'#67615a');
g.save();g.translate(0,hy);g.rotate(sn*.04+(e.st==4?.2:e.st==3?-.14:0));
g.lineCap='round';g.lineJoin='round';
g.strokeStyle='#4a453f';g.lineWidth=9;g.beginPath();g.moveTo(-10,-22);g.lineTo(-17+M.sin(ph)*2,-8);g.stroke();
ov(-17+M.sin(ph)*2,-5,6.4,6.2,'#5a544d');
const gr=g.createLinearGradient(-15,-30,15,2);gr.addColorStop(0,'#7a746b');gr.addColorStop(1,'#46423c');
g.fillStyle=gr;g.beginPath();g.moveTo(-11,2);g.lineTo(11,2);g.lineTo(17,-9);g.lineTo(16,-23);g.lineTo(8,-30);g.lineTo(-8,-30);g.lineTo(-16,-23);g.lineTo(-17,-9);g.closePath();g.fill();
g.strokeStyle='#26241f';g.lineWidth=1;g.stroke();
g.strokeStyle='rgba(20,18,14,.7)';g.lineWidth=1;
g.beginPath();g.moveTo(-8,-29);g.lineTo(-5,-21);g.lineTo(-10,-14);g.lineTo(-6,-6);g.moveTo(8,-28);g.lineTo(5,-19);g.lineTo(11,-11);g.stroke();
g.fillStyle='rgba(84,110,64,.55)';
g.beginPath();g.ellipse(-9,-26,5.6,2.4,.3,0,TAU);g.fill();
g.beginPath();g.ellipse(9,-5,4.4,2,0,0,TAU);g.fill();
const pu=.4+.2*M.sin(T*2.2+e.id);
ov(0,-14,3.4,4.6,'rgba(196,128,66,'+pu+')');
gl('a',0,-14,18,.18+pu*.14);
g.fillStyle='#3a362f';g.fillRect(-12,-3,24,3);
ov(-15,-24,7,5.2,'#6a645c');
ov(15,-24,7.4,5.4,'#756f66');
poly([-18,-27,-16,-34,-12,-28],'#6a645c');
poly([13,-28,16,-35,19,-27],'#756f66');
poly([-6,-30,-8,-40,-2,-46,7,-45,12,-38,10,-30],'#625c54','#26241f',1);
g.fillStyle='#0a0908';g.fillRect(2,-40,8,3);
g.fillStyle='#e8a257';g.fillRect(4,-39.2,5,1.4);
gl('a',7,-38.6,9,.3);
const th=sw<0?.75+sw*2.95:.75+sw*.25,fx=14+M.cos(th)*20,fy=-22+M.sin(th)*20;
g.strokeStyle='#5d574f';g.lineWidth=10;g.beginPath();g.moveTo(14,-22);g.lineTo(fx,fy);g.stroke();
g.save();g.translate(fx,fy);g.rotate(th);
ov(6,0,10.5,9.5,'#6a645c');
g.strokeStyle='#26241f';g.lineWidth=1;g.beginPath();g.ellipse(6,0,10.5,9.5,0,0,TAU);g.stroke();
sl(1,-6,8,-1,'rgba(20,18,14,.7)',.8);
sl(10,6,14,0,'rgba(20,18,14,.7)',.8);
g.restore();
g.restore();
}
function drawEn(e){
const z=e.sz,sn=M.min(1,M.abs(e.vx)/e.sp),id=M.sin(T*1.7+e.id),dy=e.dd>0;
shd(e.x,(e.t==2?23:18)*z,.64*(dy?M.max(0,1-e.dd):1));
g.save();g.translate(e.x,e.y);
if(dy){g.rotate(-e.f*M.min(1.5,e.dd*3.2));g.globalAlpha=M.max(0,1.15-e.dd)}
g.scale(e.f*z,z);
if(e.t==0)bGh(e,sn,id,e.sw,e.ph);else if(e.t==1)bSk(e,sn,id,e.sw,e.ph);else if(e.t==2)bGo(e,sn,id,e.sw,e.ph);else if(e.t==4)bWg(e,sn,id,e.sw,e.ph);else if(e.t==5)bSt(e,sn,id,e.sw,e.ph);else if(e.t==6)bGl(e,sn,id,e.sw,e.ph);else if(e.t==7)bAr(e,sn,id,e.sw,e.ph);else bBo(e,sn,id,e.sw,e.ph);
g.restore();
g.globalAlpha=1;
if(e.hf>0)gl('r',e.x,e.y-30*z,30*z,e.hf*2.8);
}
function drawPr(){
for(const q of Pr){
if(q.t=='o'){
gl('c',q.x,q.y,15,.6);
g.fillStyle='#dfe9f6';g.beginPath();g.arc(q.x,q.y,2.6,0,TAU);g.fill();
g.globalAlpha=.45;g.fillStyle='#8fa9c9';g.beginPath();g.arc(q.x,q.y,4.2,0,TAU);g.fill();g.globalAlpha=1;
}else if(q.t=='w'){
const fd=M.max(0,M.min(1,(.85-q.l)/.3));
g.save();g.translate(q.x,GY);g.scale(q.vx<0?-1:1,1);g.globalAlpha=fd*.9;
const gr=g.createLinearGradient(-6,0,16,0);gr.addColorStop(0,'rgba(240,226,184,0)');gr.addColorStop(1,'rgba(246,236,205,.95)');
g.fillStyle=gr;g.beginPath();g.moveTo(-6,0);g.quadraticCurveTo(24,-27,-6,-54);g.quadraticCurveTo(7,-27,-6,0);g.closePath();g.fill();
g.strokeStyle='rgba(255,245,215,.8)';g.lineWidth=1;g.beginPath();g.moveTo(-6,0);g.quadraticCurveTo(24,-27,-6,-54);g.stroke();
g.restore();g.globalAlpha=1;
}else if(q.t=='m'){
gl('v',q.x,q.y,16,.7);
g.fillStyle='#efe4ff';g.beginPath();g.arc(q.x,q.y,2.8,0,TAU);g.fill();
g.globalAlpha=.5;g.fillStyle='#a58de0';g.beginPath();g.arc(q.x,q.y,4.6,0,TAU);g.fill();g.globalAlpha=1;
}else if(q.t=='z'){
const k=1-q.l/.24,sd=q.sd+M.floor(q.l*45)*5.3,sg=q.tx>=q.x?1:-1,mx=lr(q.x,q.tx,.55),my=lr(q.y,q.ty,.55);
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.globalAlpha=k*.5;g.strokeStyle='rgb(150,80,255)';g.lineWidth=7*k+1;
g.beginPath();zig(q.x,q.y,q.tx,q.ty,16,sd);g.stroke();
g.globalAlpha=k;g.strokeStyle='rgb(200,150,255)';g.lineWidth=2.6*k+.6;
g.beginPath();zig(q.x,q.y,q.tx,q.ty,16,sd);g.stroke();
g.strokeStyle='rgb(250,240,255)';g.lineWidth=k+.3;
g.beginPath();zig(q.x,q.y,q.tx,q.ty,16,sd);g.stroke();
g.globalAlpha=k*.7;g.strokeStyle='rgb(190,130,255)';g.lineWidth=1.2;
g.beginPath();zig(mx,my,mx+sg*30,my-22,8,sd+9);g.stroke();
g.beginPath();zig(mx,my,mx-sg*18,my+20,8,sd+17);g.stroke();
g.restore();
gl('z',q.tx,q.ty,34*k+10,k);
gl('z',q.x,q.y,22*k+8,k*.8);
}else if(q.t=='r'){
const an=M.atan2(q.vy,q.vx);
gl('g',q.x,q.y,18,.55);
g.save();g.translate(q.x,q.y);g.rotate(an);
g.globalCompositeOperation='lighter';g.lineCap='round';
g.strokeStyle='rgba(150,235,180,.35)';g.lineWidth=3;g.beginPath();g.moveTo(-34,0);g.lineTo(-4,0);g.stroke();
g.globalCompositeOperation='source-over';
g.strokeStyle='#b9a07a';g.lineWidth=1.5;g.beginPath();g.moveTo(-22,0);g.lineTo(2,0);g.stroke();
g.fillStyle='#dfeee4';g.beginPath();g.moveTo(9,0);g.lineTo(1,-2.6);g.lineTo(2.5,0);g.lineTo(1,2.6);g.closePath();g.fill();
g.fillStyle='#7fd6a0';g.beginPath();g.moveTo(-22,0);g.lineTo(-27,-3);g.lineTo(-18,-.4);g.lineTo(-18,.4);g.lineTo(-27,3);g.closePath();g.fill();
g.restore();
}else if(q.t=='b'){
const an=M.atan2(q.vy,q.vx),bg=q.bg?1.5:1;
gl('r',q.x,q.y,22*bg,.6);
g.save();g.translate(q.x,q.y);g.rotate(an);g.scale(bg,bg);
g.globalCompositeOperation='lighter';g.lineCap='round';
g.strokeStyle='rgba(230,70,100,.35)';g.lineWidth=4;g.beginPath();g.moveTo(-40,0);g.lineTo(-6,0);g.stroke();
g.globalCompositeOperation='source-over';
g.strokeStyle='#2a1c2e';g.lineWidth=2.2;g.beginPath();g.moveTo(-28,0);g.lineTo(3,0);g.stroke();
g.strokeStyle='rgba(230,80,110,.8)';g.lineWidth=.8;g.beginPath();g.moveTo(-26,0);g.lineTo(2,0);g.stroke();
g.fillStyle='#ff8aa0';g.beginPath();g.moveTo(11,0);g.lineTo(2,-3.4);g.lineTo(4,0);g.lineTo(2,3.4);g.closePath();g.fill();
g.fillStyle='#5a1830';g.beginPath();g.moveTo(-28,0);g.lineTo(-34,-4);g.lineTo(-22,-.5);g.lineTo(-22,.5);g.lineTo(-34,4);g.closePath();g.fill();
g.restore();
}else{
const fd=M.max(0,M.min(1,(1.5-q.l)/.4)),d=q.vx<0?-1:1;
for(let k=0;k<6;k++){
const x=q.x-d*k*13,h=(26-k*3.6)*fd;
g.fillStyle='#555a65';g.beginPath();g.moveTo(x-6,GY);g.lineTo(x+d*2,GY-h);g.lineTo(x,GY);g.closePath();g.fill();
g.fillStyle='#33363d';g.beginPath();g.moveTo(x,GY);g.lineTo(x+d*2,GY-h);g.lineTo(x+6,GY);g.closePath();g.fill();
}
}
}
}
function drawGw(){
if(!(p.go>0))return;
const d=p.gd,ox=p.x+d*28,oy=p.y-47;
g.save();g.translate(ox,oy);g.scale(d,1);
if(p.go<GCH){
const k=p.go/GCH;
orb(2,0,5+k*17,.3+k*.7,M.floor(T*24)*7.3);
gl('z',-28,17,34+k*46,k*.5);
}else{
const f=gwF(),L=f[0],e=f[1],R=28*e*(1+.07*M.sin(T*45));
if(e>.01){
const bm=h=>{g.beginPath();g.moveTo(0,-h);g.lineTo(M.max(0,L-h),-h);g.quadraticCurveTo(L,-h*.9,L,0);g.quadraticCurveTo(L,h*.9,M.max(0,L-h),h);g.lineTo(0,h);g.closePath()};
g.save();g.globalCompositeOperation='lighter';
let gr=g.createLinearGradient(0,-R*1.9,0,R*1.9);
gr.addColorStop(0,'rgba(120,60,255,0)');gr.addColorStop(.5,'rgba(130,70,255,'+.5*e+')');gr.addColorStop(1,'rgba(120,60,255,0)');
g.fillStyle=gr;bm(R*1.9);g.fill();
gr=g.createLinearGradient(0,-R,0,R);
gr.addColorStop(0,'rgba(170,110,255,0)');gr.addColorStop(.5,'rgba(190,140,255,.85)');gr.addColorStop(1,'rgba(170,110,255,0)');
g.fillStyle=gr;bm(R);g.fill();
gr=g.createLinearGradient(0,-R*.45,0,R*.45);
gr.addColorStop(0,'rgba(255,255,255,0)');gr.addColorStop(.5,'rgba(250,240,255,.95)');gr.addColorStop(1,'rgba(255,255,255,0)');
g.fillStyle=gr;bm(R*.45);g.fill();
g.lineCap='round';g.lineJoin='round';
const sd=M.floor(T*30)*5.1;
for(let i=0;i<3;i++){
g.globalAlpha=e*(i==1?.95:.7);g.strokeStyle=i==1?'rgb(255,250,255)':'rgb(200,150,255)';g.lineWidth=i==1?1.2:1.8;
g.beginPath();zig(0,(i-1)*R*.35,L,(1-i)*R*.35,R*.7,sd+i*13);g.stroke();
}
g.restore();
gl('z',0,0,R*3.2,e*.9);gl('w',0,0,R*1.5,e*.85);
gl('z',L,0,R*2.4,e*.8);gl('w',L,0,R*1.1,e*.7);
}
}
g.restore();
}
