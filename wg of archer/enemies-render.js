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

function uxSm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
function uxT(x0,y0,x1,y1,r0,r1,c){
const dx=x1-x0,dy=y1-y0,d=M.hypot(dx,dy)||1,nx=-dy/d,ny=dx/d;
g.fillStyle=c;g.beginPath();
g.moveTo(x0+nx*r0,y0+ny*r0);g.lineTo(x1+nx*r1,y1+ny*r1);g.lineTo(x1-nx*r1,y1-ny*r1);g.lineTo(x0-nx*r0,y0-ny*r0);g.closePath();
g.moveTo(x0+r0,y0);g.arc(x0,y0,r0,0,TAU,true);g.moveTo(x1+r1,y1);g.arc(x1,y1,r1,0,TAU,true);g.fill();
}
function uxM(e,sn,ph,id,sw,hb){
return{y:(1-M.abs(M.sin(ph)))*hb*sn+id*.35,pt:M.sin(ph*2-.5)*.03*sn,ct:M.sin(ph-.6)*.08*sn,hd:M.sin(ph*2-1.3)*.04*sn,br:M.sin(T*2.1+e.id*2)*(1-sn*.7),ar:-M.sin(ph-.55)*sn};
}
function uxFt(q,sn,sa){
const w=(((q+PI/2)/TAU)%1+1)%1;let x,l,a;
if(w<.5){const u=w*2,s=uxSm(u);x=lr(-sa,sa,s);l=M.sin(u*PI)+.75*(1-u);a=lr(.7,-.38,s)}
else{const u=(w-.5)*2;x=lr(sa,-sa,u);l=u>.78?(u-.78)*3.4:0;a=u<.14?lr(-.3,0,u/.14):u>.78?(u-.78)*3.2:0}
return[x*sn,l*sn,a*sn,w<.5?0:1];
}
let uxLn=22;
function uxH(ph,sn,sa,L){
uxLn=L;
const a=uxFt(ph,sn,sa),b=uxFt(ph+PI,sn,sa);
const dx=a[3]&&b[3]?M.min(M.abs(a[0]),M.abs(b[0])):a[3]?M.abs(a[0]):M.abs(b[0]);
return M.sqrt(L*L-dx*dx)+2.6;
}
function uxLeg(q,sn,hx,hy,sa,lh,fl,w,c1,c2){
const f=uxFt(q,sn,sa),fx=hx+f[0]+(hx<0?-1.6:1.6)*(1-sn),ay=-2.6-f[1]*lh*.45,dx=fx-hx,dy=ay-hy,d=M.hypot(dx,dy)||1;
const kb=M.min(1.8+.8*w,M.sqrt(M.max(0,uxLn*uxLn/4-d*d/4))),kx=hx+dx*.5+dy/d*kb,ky=hy+dy*.5-dx/d*kb,fr=1.1+.9*w;
uxT(hx,hy,kx,ky,3.4*w,2.7*w,c1);
uxT(kx,ky,fx,ay,2.6*w,1.9*w,c1);
uxT(fx,ay,fx+M.cos(f[2])*fl,ay+M.sin(f[2])*fl,fr,fr*.72,c2);
return[kx,ky,fx,ay];
}
function uxArm(sx,sy,th,L,s,w,a,b,c,hc,hr){
const r=ik(sx,sy,sx+M.cos(th)*L,sy+M.sin(th)*L,a,b,s);
uxT(sx,sy,r[0],r[1],2.7*w,2.2*w,c);uxT(r[0],r[1],r[2],r[3],2.1*w,1.7*w,c);
if(hc){g.fillStyle=hc;g.beginPath();g.arc(r[2],r[3],hr||2,0,TAU);g.fill()}
return r;
}
function uxW(e,x,y,k,n,h,r,a,s){
if(slA||(!e.boss&&E.length>14))return;
for(let i=0;i<n;i++){const u=(T*s+i/n+e.id*.37)%1;gl(k,x+M.sin(T*2.1+i*2.3+e.id)*r*.7,y-u*h,r*(.5+u*.8),a*M.sin(u*PI))}
}
function uxSl(cx,cy,r,a0,a1,k,c){
if(k<.04||slA)return;
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';
g.strokeStyle='rgba('+c+','+k*.55+')';g.lineWidth=2+k*5;g.beginPath();g.arc(cx,cy,r,a0,a1);g.stroke();
g.strokeStyle='rgba(255,255,255,'+k*.8+')';g.lineWidth=1.2;g.beginPath();g.arc(cx,cy,r,lr(a0,a1,.35),a1);g.stroke();
g.restore();
}
function bGh(e,sn,id,sw,ph){
const m=uxM(e,sn,ph,id,sw,2),wu=M.max(0,-sw),sk=M.max(0,sw),hy=-uxH(ph,sn,13,19)-id*.35+wu*1.5;
uxLeg(ph+PI,sn,-1.6,hy,13,5,6,.82,'#29322b','#1f1b18');
uxLeg(ph,sn,1.6,hy,13,5,6,.9,'#374239','#28231f');
g.save();g.translate(0,hy);g.lineCap='round';g.lineJoin='round';
const pp=.03+m.pt+sk*.08-wu*.1;g.rotate(pp);
const cl=M.sin(ph*2-.8)*1.4*sn+M.sin(T*2.6+e.id)*.7-sn*3.2;
g.fillStyle='#3a2f27';g.beginPath();g.moveTo(-6,-1);g.lineTo(7,-1);
for(let k=0;k<5;k++)g.lineTo(6.5-k*3.1+cl*(k+1)*.07-1.2,6+(k&1?3.6:0)+M.sin(T*2.2+k+e.id)*.9);
g.lineTo(-6,2);g.closePath();g.fill();
ov(0,-1,5.8,3.8,'#55604f');
g.save();g.translate(0,-4);
const cp=.08+m.ct+m.br*.03-wu*.3+sk*.3,tp=pp+cp;g.rotate(cp);
const arm=(sx,sy,th,c,w,L)=>{const r=uxArm(sx,sy,th-tp,L,1,w,9,9.5,c,'#5d6a58',2.1*w);claws(r[2],r[3],th-tp+.3,'#d6cfb6',5*w);return r};
arm(-1,-11,1.3+m.ar*.55-wu*.5,'#445041',.9,16);
g.fillStyle='#667262';g.beginPath();g.moveTo(-5,5);g.quadraticCurveTo(-11,-4,-7,-13);g.quadraticCurveTo(-1,-17,6,-12.5);g.quadraticCurveTo(8.5,-4,5.5,5);g.closePath();g.fill();
g.fillStyle='rgba(12,20,12,.22)';g.beginPath();g.moveTo(-5,5);g.quadraticCurveTo(-11,-4,-7,-13);g.lineTo(-3,-13);g.quadraticCurveTo(-5,-4,-1,5);g.closePath();g.fill();
ov(3,2,3.4,2.4,'rgba(20,30,20,.25)');
g.strokeStyle='rgba(30,38,30,.55)';g.lineWidth=.9;
for(let k=0;k<4;k++){const y=-2-k*3;g.beginPath();g.moveTo(-1,y);g.quadraticCurveTo(3.5,y-1.4,6.6-k*.3,y-.2);g.stroke()}
g.fillStyle='#7d8a77';
for(let k=0;k<5;k++){const y=2-k*3.2;ov(-6.2-M.sin((y+14)/19*PI)*2.4,y,1.5,1.3,'#7d8a77')}
sl(-2,-9,2,-4,'rgba(100,40,36,.55)',.9);
const hx=3.2,hh=-21,hp=-tp*.7+m.hd-wu*.5+sk*.2+id*.03;
uxT(1,-12,hx-1,hh+4,3.2,2.7,'#5f6b5a');
g.save();g.translate(hx,hh);g.rotate(hp);
poly([-1,-3.5,-9.5,-7,-4.5,1.5],'#6a7866');
ov(0,0,5.7,5.3,'#718070');
ov(-1.6,-1.6,3.2,2.2,'rgba(255,255,255,.08)');
ov(2.8,-2.9,3.5,1.4,'#4d5a49');
ov(1.6,2.2,2.6,1.5,'rgba(30,40,30,.35)');
ov(3.4,-1,2,1.6,'#120e0b');ov(3.7,-1,1,.8,'#e2d68c');
gl('a',3.8,-1,6,.22+.1*M.sin(T*5+e.id));
const jw=.1+wu*.55+sk*.4+M.sin(T*3+e.id)*.03,jy=jw*8;
poly([-1,2.8,6.8,3,6.5,3.6+jy,-.5,5+jy],'#16100d');
g.fillStyle='#d9d2b6';
for(let k=0;k<3;k++){g.beginPath();g.moveTo(1+k*2,3);g.lineTo(2+k*2,5.1);g.lineTo(3+k*2,3);g.fill()}
poly([-1.5,3.6+jy*.6,6.2,3.8+jy,5.4,6.4+jy,-.8,6.8+jy*.8],'#5b6757');
sl(5.4,5.8+jy,5.8,9+jy+M.sin(T*3+e.id)*1.2,'rgba(190,215,180,.55)',.8);
g.restore();
let th=1.3-m.ar*.55;th=lr(th,-1.75,wu);th=lr(th,.45,sk);
arm(2.5,-12,th,'#566350',1,16+sk*4);
g.restore();g.restore();
uxSl(5,hy-10,26,-1.4,.85,sk,'170,225,150');
uxW(e,0,-2,'g',3,16,8,.12,.45);
}
function bSk(e,sn,id,sw,ph){
const m=uxM(e,sn,ph,id,sw,2),wu=M.max(0,-sw),sk=M.max(0,sw),hy=-uxH(ph,sn,13,22.4)-id*.35+wu*1.2,BN='#d6cdb6',BD='#a99f88';
const k1=uxLeg(ph+PI,sn,-1.6,hy,13,5.5,6.5,.46,BD,'#8a8270');ov(k1[0]+.5,k1[1],1.8,1.8,BD);
const k2=uxLeg(ph,sn,1.6,hy,13,5.5,6.5,.5,BN,'#b0a892');ov(k2[0]+.5,k2[1],1.9,1.9,'#e0d8c3');
g.save();g.translate(0,hy);g.lineCap='round';g.lineJoin='round';
const pp=m.pt-wu*.05+sk*.08;g.rotate(pp);
const cl=M.sin(ph*2-.9)*1.3*sn+M.sin(T*2+e.id)*.7-sn*2.4;
g.fillStyle='#4a3a2f';g.beginPath();g.moveTo(-5,-1);g.lineTo(5.5,-1);g.lineTo(5+cl*.5,7+M.sin(T*2+e.id)*.8);g.lineTo(1.5+cl*.3,4);g.lineTo(-1+cl*.3,8);g.lineTo(-5+cl*.2,5);g.closePath();g.fill();
poly([-5,-1,5,-1,6,3,2.5,5,-2.5,5,-6,3],'#cfc6af','#8f8772',.7);
ov(0,2.4,1.4,1.1,'#2a2622');
g.save();g.translate(0,-3);
const cp=m.ct-wu*.12+sk*.14+m.br*.02,tp=pp+cp;g.rotate(cp);
const sh=M.sin(ph-1.4)*sn*1.2;
const fr=uxArm(-2.5,-16.5,M.atan2(3.5+sh,12),M.hypot(12,3.5+sh),1,.5,9.5,9.5,BD,BN,1.7);
ov(fr[0],fr[1],1.4,1.4,BN);
g.strokeStyle='#cfc7b2';g.lineWidth=1.8;g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(-1.2,-8,.4,-17);g.stroke();
ov(2,-9.5,5.2,8.4,'#1c1916');
gl('s',2,-9.5,9,.1+.05*M.sin(T*3+e.id));
g.strokeStyle='#d3cbb6';g.lineWidth=1.3;
for(let k=0;k<5;k++){const y=-3.2-k*3.1,ln=5.4-M.abs(k-1.5)*.5;g.beginPath();g.moveTo(.2,y);g.quadraticCurveTo(3.4,y-1.6,ln,y+2.4);g.stroke()}
g.strokeStyle='#a99f88';g.lineWidth=1;
for(let k=0;k<4;k++){const y=-3.6-k*3.1;g.beginPath();g.moveTo(-.2,y);g.quadraticCurveTo(-3.4,y-1.2,-4.2,y+1.8);g.stroke()}
sl(5.4,-15.4,5.2,-4.6,'#e0d8c3',1.2);
sl(-3,-16.8,5,-16.8,'#d3cbb6',1.6);
for(let k=0;k<5;k++)ov(-.3+k*.1,-3-k*3.3,1.2,.9,'#e0d8c3');
sl(.4,-17,1,-21,'#cfc7b2',1.8);
const hx=2.5+sn*.5,hh=-26.5,hp=-tp*.8+m.hd-wu*.1+id*.025;
g.save();g.translate(hx,hh);g.rotate(hp);
ov(0,0,5.3,5.1,'#d8d0bb');ov(-1.4,-1.8,3,2,'rgba(255,255,255,.14)');
ov(2.6,-.6,1.8,2.1,'#0f0d0b');ov(2.9,-.3,.9,.9,'#a9dcff');gl('s',3,-.4,7,.3+.12*M.sin(T*6+e.id));
poly([4.4,1.6,5.6,3.2,3.6,3.4],'#1b1816');
ov(.8,2.6,1.7,1.2,'rgba(150,140,120,.6)');
const jw=.05+sn*.12*M.abs(M.sin(T*13+e.id))+wu*.5+sk*.3,jy=jw*7;
g.save();g.translate(-1,3.6);
poly([0,0,7,.4,6.6,2.8+jy,.6,3.2+jy*.7],'#c9c1ac');
g.strokeStyle='#2a2622';g.lineWidth=.8;
for(let k=0;k<3;k++){g.beginPath();g.moveTo(2+k*1.9,.4);g.lineTo(2+k*1.9,2.2+jy*.5);g.stroke()}
g.restore();
g.fillStyle='#6d5645';g.beginPath();g.arc(0,-.6,6.8,PI,TAU);g.lineTo(6.6,-1.8);g.lineTo(-6.8,-1.8);g.closePath();g.fill();
sl(-6.8,-1.8,6.6,-1.8,'#8a6f58',1);sl(5.8,-1.8,5.8,2.6,'#6d5645',1.5);
sl(-3,-5.6,2,-6.4,'rgba(255,255,255,.18)',.9);
g.restore();
g.save();g.translate(11,-13+sh);g.rotate(-tp*.5-wu*.08);
ov(0,0,4.6,11.5,'#5a4636');
g.strokeStyle='#7b7f86';g.lineWidth=1.4;g.beginPath();g.ellipse(0,0,4.6,11.5,0,0,TAU);g.stroke();
sl(0,-11,0,11,'rgba(30,20,14,.5)',.7);sl(-4.2,0,4.2,0,'#6d7076',1.2);ov(.6,0,1.8,1.8,'#8a8f98');
g.restore();
let th=1.15-m.ar*.5;th=lr(th,-1.7,wu);th=lr(th,.5,sk);
const r=uxArm(4.5,-16.5,th-tp,17.5,1,.5,9.5,9.5,'#d3cbb6',BN,1.7);
ov(r[0],r[1],1.5,1.5,BN);
const ang=M.atan2(r[3]-r[1],r[2]-r[0])+(-.2-wu*.45+sk*.25);
g.save();g.translate(r[2],r[3]);g.rotate(ang);
sl(-3,0,3,0,'#3b2a1e',2.4);sl(3,-3,3,3,'#6a5547',1.6);
poly([3.5,-1.6,20,-2.4,28,-.4,20,1.8,3.5,1.5],'#98938a');
sl(5,-.3,24,-.3,'rgba(60,56,50,.6)',.7);
sl(5,-1.2,23,-1.8,'rgba(240,238,225,.55)',.6);
g.restore();
g.restore();g.restore();
uxSl(5,hy-16,28,-1.9,.8,sk,'200,230,255');
uxW(e,1,hy-34,'s',2,12,5,.14,.6);
}
function bGo(e,sn,id,sw,ph){
const m=uxM(e,sn,ph,id,sw,2),wu=M.max(0,-sw),sk=M.max(0,sw),hy=-uxH(ph,sn,12,21.4)-id*.35+wu*2.2-sk*1.2;
const k1=uxLeg(ph+PI,sn,-2.8,hy,12,4.5,8,1.55,'#3a3d43','#2a2c31');ov(k1[0]+1,k1[1],3.4,3.1,'#4a4d54');
const k2=uxLeg(ph,sn,2.8,hy,12,4.5,8,1.6,'#474a51','#33353b');ov(k2[0]+1,k2[1],3.6,3.3,'#565960');
g.save();g.translate(0,hy);g.lineCap='round';g.lineJoin='round';
const pp=m.pt+sk*.1-wu*.08;g.rotate(pp);
g.fillStyle='#4b4e55';g.beginPath();g.moveTo(-8.5,1);g.lineTo(8.5,1);g.lineTo(9.5,-5);g.lineTo(-9.5,-5);g.closePath();g.fill();
for(let k=0;k<3;k++)poly([-8+k*7,1,-6+k*7+m.pt*20,7+k%2,-4+k*7,1],'#55585f','#2c2e33',.6);
g.save();g.translate(0,-5);
const cp=.04+m.ct*.8-wu*.32+sk*.36+m.br*.02,tp=pp+cp;g.rotate(cp);
const fa=uxArm(-9,-17,1.42+m.ar*.4-wu*.5-tp,18,1,1.6,10,10,'#4a4d54','#5a5d64',3.6);
g.fillStyle='#62656c';g.beginPath();g.moveTo(-8,5);g.lineTo(8,5);g.lineTo(12.5,-10);g.lineTo(11,-19);g.lineTo(5,-23);g.lineTo(-5,-23);g.lineTo(-11,-19);g.lineTo(-12.5,-10);g.closePath();g.fill();
g.strokeStyle='#2c2e33';g.lineWidth=1;g.stroke();
poly([-11,-19,-5,-23,-3,-10,-12.5,-10],'rgba(255,255,255,.07)');
poly([4,-23,11,-19,12.5,-10,8,5,2,5],'rgba(0,0,0,.2)');
g.strokeStyle='rgba(30,32,36,.6)';g.lineWidth=.9;
g.beginPath();g.moveTo(-11,-10);g.lineTo(11,-10);g.moveTo(-9,-2);g.lineTo(9,-2);g.stroke();
g.fillStyle='rgba(78,104,70,.55)';
g.beginPath();g.ellipse(-8,-17,5,2.4,.3,0,TAU);g.fill();
g.beginPath();g.ellipse(7,-1,4,2,0,0,TAU);g.fill();
g.beginPath();g.ellipse(-4,2,3.2,1.6,0,0,TAU);g.fill();
const cr=()=>{g.beginPath();g.moveTo(-3,-21);g.lineTo(-1,-14);g.lineTo(-5,-9);g.lineTo(-2,-2);g.moveTo(-1,-14);g.lineTo(5,-11)};
const pu=.3+.18*M.sin(T*2.2+e.id)+wu*.3+sk*.3;
g.strokeStyle='#26282c';g.lineWidth=1.1;cr();g.stroke();
g.strokeStyle='rgba(224,140,70,'+pu+')';g.lineWidth=.7;cr();g.stroke();
gl('f',-3,-10,12,pu*.35);
ov(-9,-19,6.2,4.4,'#5a5d64');
g.strokeStyle='#2c2e33';g.lineWidth=1;g.beginPath();g.ellipse(-9,-19,6.2,4.4,0,0,TAU);g.stroke();
const hp=-tp*.7+m.hd-wu*.25+sk*.18;
g.save();g.translate(3,-24);g.rotate(hp);
uxT(0,3,0,-1,4.2,3.8,'#4c4f56');
g.fillStyle='#707379';g.beginPath();g.moveTo(-7,3);g.lineTo(-8,-5);g.lineTo(0,-9);g.lineTo(7,-6);g.lineTo(8,2);g.lineTo(2,4);g.closePath();g.fill();
g.strokeStyle='#2c2e33';g.lineWidth=1;g.stroke();
poly([-4,-8,-2,-14,1,-8],'#5e6168','#2c2e33',.8);
ov(2,-5.6,5,1.2,'#4c4f56');
g.fillStyle='#e0a560';g.fillRect(2.4,-4.6,5,1.8);
gl('a',5,-3.7,8,.24+wu*.3+sk*.3);
sl(-6,-1,6,-1.2,'rgba(30,32,36,.5)',.8);
g.restore();
ov(10,-19,6.4,4.6,'#62656c');
g.strokeStyle='#2c2e33';g.lineWidth=1;g.beginPath();g.ellipse(10,-19,6.4,4.6,0,0,TAU);g.stroke();
sl(5,-20,15,-21,'rgba(255,255,255,.12)',1);
let th=1.42-m.ar*.4;th=lr(th,-1.2,wu);th=lr(th,.95,sk);
const r=uxArm(9,-17,th-tp,19,1,1.7,10,10.5,'#585b62','#6d7077',0);
const fa2=M.atan2(r[3]-r[1],r[2]-r[0]);
g.save();g.translate(r[2],r[3]);g.rotate(fa2);
g.fillStyle='#6d7077';g.beginPath();g.moveTo(-3,-6.2);g.lineTo(9,-5.4);g.lineTo(11,0);g.lineTo(9,5.6);g.lineTo(-3,6.4);g.closePath();g.fill();
g.strokeStyle='#2c2e33';g.lineWidth=1;g.stroke();
sl(3,-5,3.6,5.4,'rgba(20,22,26,.6)',.8);sl(7,-4.6,7.4,4.8,'rgba(20,22,26,.6)',.8);
sl(-1,-5,8,-4.5,'rgba(255,255,255,.14)',.9);
g.restore();
g.restore();g.restore();
uxSl(8,hy-14,30,-1.2,1.1,sk,'255,170,90');
uxW(e,4,hy-38,'w',2,14,5,.07,.5);
uxW(e,-2,hy-12,'f',2,18,6,.1,.7);
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
const m=uxM(e,sn,ph,id,sw,1.8),rz=M.max(0,-sw),sk=M.max(0,sw),hy=-uxH(ph,sn,12,21.4)-id*.35,cw=M.sin(T*2.3+e.id)*1.4;
if(rz>.02&&!slA){g.save();g.globalCompositeOperation='lighter';g.strokeStyle='rgba(180,150,235,'+rz*.5+')';g.lineWidth=1;g.beginPath();g.ellipse(2,-1,16+rz*6,3.6+rz*1.2,0,0,TAU);g.stroke();
for(let k=0;k<6;k++){const a=T*1.6+k*PI/3;sl(2+M.cos(a)*(16+rz*6),-1+M.sin(a)*(3.6+rz*1.2),2+M.cos(a)*(19+rz*6),-1+M.sin(a)*(4.4+rz*1.2),'rgba(210,190,255,'+rz*.6+')',1)}g.restore()}
uxLeg(ph+PI,sn,-1.5,hy,12,5,6,.85,'#1b1624','#110e17');
uxLeg(ph,sn,1.5,hy,12,5,6,.9,'#241d30','#161220');
g.save();g.translate(0,hy);g.lineCap='round';g.lineJoin='round';
const pp=m.pt+sk*.08-rz*.06;g.rotate(pp);
const x0=-13-sn*4+cw+M.sin(ph-1.1)*2*sn;
g.fillStyle='#3a2c52';g.beginPath();g.moveTo(-6,-6);g.quadraticCurveTo(-14-sn*3,0,x0,12);
for(let k=1;k<=5;k++)g.lineTo(lr(x0,8,k/5),12+(k&1?-2.6:1.4)+M.sin(T*3+k+e.id)*.8);
g.quadraticCurveTo(10,2,6,-6);g.closePath();g.fill();
g.strokeStyle='rgba(180,150,230,.35)';g.lineWidth=.9;g.stroke();
sl(.3,-4,.4,10,'rgba(10,6,20,.4)',.9);
g.save();g.translate(0,-5);
const cp=m.ct*.8+sk*.1-rz*.1+m.br*.02,tp=pp+cp;g.rotate(cp);
const fa=uxArm(-3,-15,lr(1.25-m.ar*.3,-.7,rz)-tp,14,1,.9,9,9.5,'#2a2040','#b58d68',2.2);
g.fillStyle='#3a2c52';g.beginPath();g.moveTo(-6,5);g.quadraticCurveTo(-9,-6,-6,-15);g.lineTo(.5,-18);g.lineTo(6,-15);g.quadraticCurveTo(9,-6,6,5);g.closePath();g.fill();
g.strokeStyle='rgba(180,150,230,.3)';g.lineWidth=.8;g.stroke();
g.fillStyle='#8a6b45';g.fillRect(-6,1,12,2.4);ov(.4,2.2,1.6,1.6,'#c9a8ff');
const hp=-tp*.8+m.hd-rz*.15+sk*.1+id*.03;
g.save();g.translate(3.5+sn,-23);g.rotate(hp);
g.fillStyle='#2e2342';
g.beginPath();g.moveTo(-5,-1);g.quadraticCurveTo(-9-sn*3,3,-8,10);g.lineTo(-2,6);g.closePath();g.fill();
g.beginPath();g.arc(0,0,8,0,TAU);g.fill();
poly([-3,-6,-1,-17,4,-7],'#2e2342');
g.fillStyle='#07050b';g.beginPath();g.ellipse(3.4,.6,4.4,5,0,0,TAU);g.fill();
g.fillStyle='#d6bcff';
g.beginPath();g.ellipse(5.6,-.6,1,1.4,0,0,TAU);g.fill();
g.beginPath();g.ellipse(2.6,-.6,1,1.4,0,0,TAU);g.fill();
gl('v',4.2,-.6,8,.4+rz*.3);
g.restore();
g.restore();g.restore();
const cs=(x,y)=>{const a=M.cos(cp),c=M.sin(cp),X=x*a-y*c,Y=x*c+y*a-5,c2=M.cos(pp),d2=M.sin(pp);return[X*c2-Y*d2,X*d2+Y*c2+hy]};
const ax=lr(20,25,rz),ay=hy+lr(-12,-19,rz),sp0=cs(3,-15),r=uxArm(sp0[0],sp0[1],M.atan2(ay-sp0[1],ax-sp0[0]),M.hypot(ax-sp0[0],ay-sp0[1]),1,1,10,10,'#2a2040','#b58d68',2.4);
g.save();g.translate(r[2],r[3]);
const sr=sk*.35-rz*.1+(rz>0?M.sin(T*3)*.03:0);g.rotate(sr);
sl(0,12,0,-27,'#5a4630',2.2);
g.strokeStyle='#8a6b45';g.lineWidth=1.4;g.beginPath();g.arc(0,-29,4.6,.5,TAU-.5);g.stroke();
ov(0,-29,3.2,3.2,'#c9a8ff');
gl('v',0,-29,12+rz*12+sk*9,.5+rz*.4+sk*.2);
if(rz>.05||sk>.05)gl('w',0,-29,6+sk*14,.3+sk*.5);
for(let k=0;k<3;k++){const a=T*(2.2+k*.4)+k*2.1,rr=7+rz*5;g.save();g.translate(M.cos(a)*rr,-29+M.sin(a)*rr*.45);g.rotate(a);poly([0,-2,1.4,0,0,2,-1.4,0],'rgba(215,190,255,'+(.4+rz*.5)+')');g.restore();if(!slA)gl('v',M.cos(a)*rr,-29+M.sin(a)*rr*.45,3,.35)}
g.restore();
uxSl(r[2]*.5+8,hy-30,24,-.6,.6,sk*.7,'200,170,255');
}
function bBo(e,sn,id,sw,ph){
const ch=e.st==3,rc=e.st==4,wu=ch||rc?0:M.max(0,-sw),sk=ch||rc?0:M.max(0,sw),p2=e.hp<e.mh*.5?1:0,vi=M.max(0,BN.indexOf(e.nm))%3,m=uxM(e,sn,ph,id,sw,2.4);
const K=[['#6f7d5e','#4a5640','#8d9c78'],['#86837b','#5a5750','#a7a49a'],['#8c5349','#5e332d','#ae7164']][vi];
const hy=-uxH(ph,sn,11,20)-id*.35+wu*3+(ch?3:0)-sk*2.5,pu=.4+.2*M.sin(T*2.4)+wu*.3+sk*.4+p2*.25,gk=p2?'r':'a';
gl(p2?'r':'f',0,hy-14,56,.06+pu*.06);
if(vi==2){
const cw=M.sin(T*2+.7)*1.6-sn*5-(rc?11:0)-sk*3+M.sin(ph-1.2)*2*sn;
g.save();g.translate(0,hy);g.fillStyle='#6a1f2a';g.beginPath();g.moveTo(-8,-26);g.quadraticCurveTo(-18-sn*4,-10,-17-sn*5+cw,16);
for(let k=1;k<=5;k++)g.lineTo(lr(-17-sn*5+cw,-1,k/5),16+(k&1?-3:2)+M.sin(T*2.6+k)*.8);
g.lineTo(2,-18);g.closePath();g.fill();g.restore();
}
const k1=uxLeg(ph+PI,sn,-4,hy,11,5,10,2.4,K[1],'#2c2622');
const k2=uxLeg(ph,sn,4,hy,11,5,10,2.5,K[0],'#352e28');
g.save();g.translate(0,hy);g.lineCap='round';g.lineJoin='round';
const pp=m.pt+(rc?.1:ch?-.08:0)+sk*.1-wu*.1;g.rotate(pp);
g.fillStyle='#4a3a2c';g.beginPath();g.moveTo(-11,-2);g.lineTo(11,-2);
for(let k=0;k<6;k++)g.lineTo(10-k*4+m.pt*18,5+(k&1?4:0)+M.sin(T*2+k+e.id)*.7);
g.closePath();g.fill();
g.fillStyle='#2a2320';g.fillRect(-11,-5,22,3.4);
const ts0=M.sin(ph*2-.9)*1.5*sn+M.sin(T*2.4+e.id)*.6;
sl(-7,-2,-7+ts0*.5,3,'#6a5a46',.8);ov(-7+ts0,5.4,2.4,2.1,'#d4cdb6');ov(-7.8+ts0,5,.7,.7,'#1a1512');ov(-6.2+ts0,5,.7,.7,'#1a1512');
g.save();g.translate(0,-4);
const cp=m.ct*.8+(rc?.1:ch?-.08:0)-wu*.3+sk*.36+m.br*.025,tp=pp+cp;g.rotate(cp);
if(vi<2){
g.save();g.translate(-12,-24);g.rotate(-.3+M.sin(ph*2-1)*.04*sn-sk*.12+wu*.1);
if(vi==0){
g.strokeStyle='#34343a';g.lineWidth=2.6;g.strokeRect(-8,-19,16,38);
g.lineWidth=1.8;for(let k=0;k<4;k++){g.beginPath();g.moveTo(-4.8+k*3.2,-19);g.lineTo(-4.8+k*3.2,19);g.stroke()}
g.beginPath();g.moveTo(-8,-6);g.lineTo(8,-6);g.moveTo(-8,8);g.lineTo(8,8);g.stroke();
g.fillStyle='#34343a';for(let k=0;k<4;k++)poly([-8+k*5.4,-19,-6+k*5.4,-27+(k&1)*2,-4.4+k*5.4,-19]),g.fill();
g.fillStyle='rgba(110,70,48,.7)';g.fillRect(-8,-4,5,3);g.fillRect(2,9,6,3);
for(let k=0;k<3;k++)ov(-6.4+k*6.4,-6,.9,.9,'#7a7a82');
}else{
poly([-8,-18,-2,-22,3,-17,8,-20,9,18,-9,18],'#8a877e','#4a4740',1);
sl(-3,-17,0,-6,'#4a4740',1);sl(0,-6,-4,4,'#4a4740',1);sl(2,-14,5,2,'#4a4740',.9);
ov(-3,10,3.4,2,'rgba(84,110,64,.55)');
}
g.restore();
}
const fth=lr(1.5+m.ar*.45-sk*.4,-1.6,wu)+(rc?-.9:0),fa=uxArm(-14,-22,fth-tp,25,1,2.3,15,16,K[1],K[1],6.2);
g.strokeStyle='#4a4a50';g.lineWidth=1.8;g.beginPath();g.ellipse(fa[2]-1,fa[3]+4.5,4,1.8,0,0,TAU);g.stroke();
for(let k=1;k<=5;k++){const cx=fa[2]-1-sn*1.6*k+M.sin(ph*2-.9*k)*.8*k*sn+M.sin(T*2.2+k)*.5,cy=fa[3]+5+k*3.3;ov(cx,cy,1.5,2.1,'#6a6a72');ov(cx,cy,.7,1.2,K[1])}
const gr=g.createLinearGradient(-18,-29,14,5);gr.addColorStop(0,K[2]);gr.addColorStop(.5,K[0]);gr.addColorStop(1,K[1]);
g.fillStyle=gr;g.beginPath();g.moveTo(-9,5);g.lineTo(10,5);g.lineTo(14,-6);g.lineTo(18,-18);g.lineTo(14,-27);g.lineTo(0,-29);g.lineTo(-14,-27);g.lineTo(-18,-18);g.lineTo(-14,-6);g.closePath();g.fill();
poly([-14,-27,-18,-18,-14,-6,-9,5,-6,5,-9,-10,-9,-24],'rgba(0,0,0,.2)');
const bl=M.sin(ph*2-1.5)*1.1*sn+m.br*.8;
ov(2,-1+bl,10,8,K[0]);ov(2,1+bl,9,5.4,'rgba(0,0,0,.14)');
g.strokeStyle='rgba(0,0,0,.35)';g.lineWidth=1;g.beginPath();g.moveTo(-8,-10);g.quadraticCurveTo(2,-6,12,-12);g.stroke();
g.beginPath();g.moveTo(1,-24);g.lineTo(2,-10);g.stroke();
sl(-6,-14,8,-3+bl,'#3a2020',1.2);
for(let k=0;k<4;k++){const t=(k+.5)/4,x=lr(-6,8,t),y=lr(-14,-3+bl,t);sl(x-1.2,y-1.6,x+1.2,y+1.6,'#3a2020',.9)}
if(p2){g.strokeStyle='rgba(255,90,60,'+(.35+pu*.4)+')';g.lineWidth=.8;g.beginPath();g.moveTo(-10,-20);g.lineTo(-6,-14);g.lineTo(-8,-9);g.moveTo(12,-22);g.lineTo(9,-15);g.lineTo(11,-9);g.stroke()}
for(let k=0;k<9;k++){const t=k/8,x=lr(13,-8,t),y=lr(-25,2,t)+bl*t;g.save();g.translate(x,y);g.rotate(.9+(k&1?1.57:0));ov(0,0,2.4,1.5,'#6a6a72');ov(0,0,1.2,.6,K[0]);g.restore()}
g.fillStyle='#7a5a3a';g.fillRect(2.6,-12+bl*.5,4.4,4.2);g.strokeStyle='#4a3524';g.lineWidth=.8;g.strokeRect(2.6,-12+bl*.5,4.4,4.2);
ov(-14,-22,7.4,5.6,K[1]);
const sb=M.sin(T*1.8+e.id)*.8+m.ct*10;
ov(15,-22+sb,8.4,6.4,K[0]);ov(14,-24+sb,5,2.6,'rgba(255,255,255,.1)');
for(let k=0;k<3;k++)poly([10+k*4.4,-26+sb,11.6+k*4.4,-33+sb-(k==1)*3,13.4+k*4.4,-26+sb],'#e0d8c2','#8f8874',.6);
const hp=-tp*.6+m.hd-wu*.4+sk*.3+(rc?.32:0)+id*.03;
g.save();g.translate(5,-29);g.rotate(hp);
uxT(-1,6,-1,-1,6.6,6,K[1]);
poly([-5,-3,-9.5,-7,-6,1],K[1]);
ov(0,-2,6.4,5.6,K[0]);ov(-1.8,-3.8,3.4,2.2,'rgba(255,255,255,.1)');
poly([-5,-5.4,3,-6.8,7.8,-3.6,6,-2,-5,-2.6],K[1]);
const jw=.1+wu*.8+sk*.45+(ch?.5:0)+M.sin(T*2.6+e.id)*.03,jy=jw*9;
poly([-2,2.4,7.6,2.4,8,4+jy,-1,4+jy],'#2a0f0f');
poly([-3,2.4,7,2.2,10.5,4.6+jy,7,9+jy,-1,8+jy],K[1],'#1c1612',.8);
poly([6.2,5+jy,7.4,-1.4,8.8,5+jy],'#e4dcc6','#9a937f',.6);
poly([2.6,5+jy*.9,3.3,.4,4.3,5+jy*.9],'#e4dcc6','#9a937f',.6);
ov(7.2,0,1.5,1.1,'#2a1c18');
ov(3.8,-2.4,1.5,1.2,'#0b0807');ov(4,-2.4,.7,.6,p2?'#ff7a5a':'#ffcf80');gl(gk,4,-2.4,7,.4+p2*.3+wu*.2);
if(vi==0){poly([-6.4,-5,-.4,-6.6,.8,.4,-2.4,3.6,-6.8,1.6],'#3f3f45','#1c1c20',.8);sl(-3.6,-2.6,.2,-2.8,'#0a0a0c',1);ov(-5,-3.6,.6,.6,'#8a8a92');ov(-1.4,.8,.6,.6,'#8a8a92')}
if(vi==1)for(let k=0;k<4;k++)poly([-5+k*3.2,-7,-4+k*3.2,-12-(k&1)*2.6,-2.4+k*3.2,-7],K[2],'#3a3832',.7);
if(vi==2){g.fillStyle='#c79a3a';g.fillRect(-5.6,-8.4,11.2,2.6);for(let k=0;k<3;k++)poly([-5.6+k*5.6,-8.4,-3.6+k*5.6,-13.4,-1.6+k*5.6,-8.4],'#c79a3a');ov(.2,-7.1,1,1,'#d03040')}
g.restore();
const thW=lr(lr(rc?.3:ch?.2:.45-m.ar*.1,-2.2,wu),.78,sk),tsW=lr(lr(rc?.75:1.45-m.ar*.45,-1.9,wu),1.1,sk),th=thW-tp,ts=tsW-tp,p0=[15+M.cos(ts)*26,-22+sb+M.sin(ts)*26];
g.save();g.translate(p0[0],p0[1]);g.rotate(th);
poly([-8,-3.6,14,-4.6,36,-9,36,9,14,4.6,-8,3.6],'#77716a','#2c2824',1);
poly([14,-4.6,36,-9,36,-6,14,-3],'rgba(255,255,255,.1)');
g.fillStyle='#2e2a28';for(let k=0;k<3;k++)g.fillRect(2+k*12,-7.4+k*1.2,3.6,14.8-k*2.4);
for(let k=0;k<3;k++){ov(3.8+k*12,-4.4+k*.6,.8,.8,'#8a8078');ov(3.8+k*12,4.4-k*.6,.8,.8,'#8a8078')}
poly([30,-9,34,-12,36,-8],'#77716a','#2c2824',.8);
sl(24,-2,29,3,'rgba(30,26,22,.8)',.9);
ov(31,5,2.6,1.4,'rgba(84,110,64,.55)');
if(sk>.4)gl('w',29,0,34,(sk-.4)*1.3);
g.restore();
uxArm(15,-22+sb,ts,26,1,2.7,15,16,K[0],K[0],6.6);
g.restore();g.restore();
uxW(e,10,hy-50,'w',2,16,6,.08,.5);
uxW(e,0,hy-4,p2?'r':'f',3,48,9,.08+p2*.06,.4);
uxSl(24,hy-26,36,-1.9,1.2,sk*.6,'255,170,90');
}
function bGl(e,sn,id,sw,ph){
const ch=e.st==3,rc=e.st==4,wu=ch||rc?0:M.max(0,-sw),sk=ch||rc?0:M.max(0,sw),p2=e.hp<e.mh*.5?1:0,m=uxM(e,sn,ph,id,sw,1.6);
const hy=-uxH(ph,sn,10.5,21)-id*.3+wu*3+(ch?3:0)-sk*2,pu=.45+.25*M.sin(T*2.4+e.id)+wu*.25+sk*.4+p2*.2,gk=p2?'f':'s',gc=p2?'255,120,70':'120,235,215';
const S0='#7d766a',S1='#5c564c',S2='#9a9285',S3='#3c3832';
gl(gk,0,hy-14,60,.05+pu*.06);
const blk=(x,y,w,h,r,c)=>{g.save();g.translate(x,y);g.rotate(r);g.fillStyle=c;g.fillRect(-w/2,-h/2,w,h);g.strokeStyle=S3;g.lineWidth=1;g.strokeRect(-w/2,-h/2,w,h);g.fillStyle='rgba(255,255,255,.08)';g.fillRect(-w/2,-h/2,w,2);g.restore()};
const k1=uxLeg(ph+PI,sn,-4.4,hy,10.5,4,9,2.3,S1,S3);blk(k1[0]+1,k1[1],8.4,7,.1,S1);blk(k1[2],k1[3]-2,8.6,6,0,S1);
const k2=uxLeg(ph,sn,4.4,hy,10.5,4,9,2.4,S0,S3);blk(k2[0]+1,k2[1],9,7.4,-.08,S0);blk(k2[2],k2[3]-2,9,6.4,0,S0);
ov(k2[0]+3,k2[1]+2,2.6,1.6,'rgba(84,120,64,.6)');
g.save();g.translate(0,hy);g.lineCap='round';g.lineJoin='round';
const pp=m.pt+(rc?.1:ch?-.08:0)+sk*.08-wu*.1;g.rotate(pp);
g.fillStyle=S1;g.beginPath();g.moveTo(-13,0);g.lineTo(13,0);g.lineTo(11,-6.4);g.lineTo(-11,-6.4);g.closePath();g.fill();g.strokeStyle=S3;g.lineWidth=1;g.stroke();
sl(-4,-6,-2,0,S3,1);
gl(gk,0,-7.2,13,.2+pu*.35);
g.save();g.translate(0,-10);
const cp=m.ct*.7+(rc?.1:ch?-.08:0)-wu*.3+sk*.34+m.br*.02,tp=pp+cp;g.rotate(cp);
const arm=(sx,sy,ts,th,w,c,L,fk)=>{
const r=uxArm(sx,sy,ts-tp,L,1,w,11,12,c,0,0),a=th-tp;
g.save();g.translate(r[2],r[3]);g.rotate(a);
g.fillStyle=c;g.beginPath();g.moveTo(-4,-8);g.lineTo(11,-9);g.lineTo(14,-3);g.lineTo(14,6);g.lineTo(9,10);g.lineTo(-4,9);g.closePath();g.fill();
g.strokeStyle=S3;g.lineWidth=1;g.stroke();
for(let k=0;k<3;k++)sl(5+k*3.2,-8.4+k*.6,5+k*3.2,9.6,'rgba(30,26,20,.65)',.8);
sl(-3,-7,10,-7.8,'rgba(255,255,255,.14)',1);
if(fk)sl(0,-2,10,3,'rgba(30,26,20,.7)',.9);
g.restore();return r;
};
const fts=lr(1.4+m.ar*.4,-1.4,wu*.8)+(rc?-1:0),fth=lr(fts,fts,0);
const fs=uxArm(-17,-17,fts-tp,15,1,1.7,8,9,S1,0,0);
const fh=[fs[2]+M.sin(T*1.9+e.id)*1.2+4,fs[3]+4+M.cos(T*1.7)*1.3];
g.save();g.translate(fh[0],fh[1]);g.rotate(fts-tp);poly([-5,-6,6,-6.4,8,0,5,6.4,-5,6],S1,S3,1);sl(0,-6,0,6,'rgba(30,26,20,.6)',.8);g.restore();
gl(gk,fs[2]+1.5,fs[3]+2,6,.3+pu*.3);
const gr=g.createLinearGradient(-18,-28,16,3);gr.addColorStop(0,S2);gr.addColorStop(.55,S0);gr.addColorStop(1,S1);
g.fillStyle=gr;g.beginPath();g.moveTo(-11,3);g.lineTo(11,3);g.lineTo(17,-6);g.lineTo(19,-18);g.lineTo(13,-26);g.lineTo(2,-28);g.lineTo(-6,-27);g.lineTo(-10,-23);g.lineTo(-14,-19);g.lineTo(-17,-13);g.lineTo(-16,-5);g.closePath();g.fill();
g.strokeStyle=S3;g.lineWidth=1;g.stroke();
poly([-10,-23,-14,-19,-17,-13,-16,-5,-11,3,-8,3,-11,-8,-8,-20],'rgba(0,0,0,.18)');
g.strokeStyle='rgba(24,20,14,.75)';g.lineWidth=1.1;
g.beginPath();g.moveTo(6,-27);g.lineTo(4,-19);g.lineTo(9,-12);g.lineTo(6,-4);g.moveTo(-4,-9);g.lineTo(2,-4);g.lineTo(-1,2);g.stroke();
g.strokeStyle='rgba('+gc+','+(.3+pu*.5)+')';g.lineWidth=.7;
g.beginPath();g.moveTo(6,-27);g.lineTo(4,-19);g.lineTo(9,-12);g.lineTo(6,-4);g.moveTo(-4,-9);g.lineTo(2,-4);g.lineTo(-1,2);g.stroke();
g.save();g.globalCompositeOperation='lighter';g.strokeStyle='rgba('+gc+','+(.35+pu*.55)+')';g.lineWidth=1;
g.beginPath();g.moveTo(-6,-16);g.lineTo(-6,-8);g.moveTo(-9,-12);g.lineTo(-3,-12);g.moveTo(-6,-16);g.lineTo(-9,-19);g.moveTo(-6,-16);g.lineTo(-3,-19);
g.moveTo(10.6,-18);g.arc(8,-18,2.6,0,TAU);g.moveTo(8,-15);g.lineTo(8,-8);g.stroke();g.restore();
ov(-5,-1,4.4,2,'rgba(84,120,64,.55)');ov(12,-22,3.4,1.6,'rgba(84,120,64,.5)');
g.save();g.globalCompositeOperation='lighter';
poly([-15,-21,-17,-30,-12.6,-24],'rgba('+gc+',.85)');poly([-12,-23,-11,-33,-8.6,-24],'rgba('+gc+',.7)');poly([-17,-17,-22,-24,-15,-21],'rgba('+gc+',.6)');
g.restore();gl(gk,-14,-24,14,.2+pu*.3);
const bob=M.sin(T*1.8+e.id)*1.1+m.ct*14;
ov(17,-20-bob*.6,7.4,5.6,S0);ov(15,-22-bob*.6,4,2,'rgba(255,255,255,.1)');
poly([16,-24-bob*.6,19,-31-bob*.6,22,-22-bob*.6],S0,S3,.8);
const sw1=M.sin(T*2.3+e.id),sw2=M.sin(T*2.3+e.id-.8)+M.sin(ph-1)*sn*.6;
g.strokeStyle='#4f6a3c';g.lineWidth=1.3;g.beginPath();g.moveTo(17,-25-bob*.6);g.quadraticCurveTo(17+sw1*2,-34,18+sw2*4,-41);g.stroke();
for(let k=0;k<3;k++){const t=(k+1)/3.4,x=17+lr(0,sw2*4,t)+sw1*2*t*(1-t)*2,y=lr(-25,-41,t)-bob*.6*(1-t);g.save();g.translate(x,y);g.rotate((k&1?-.9:.9)+sw2*.2);ov(3,0,3.4,1.5,'#5f8a48');g.restore()}
const hp=-tp*.6+m.hd-wu*.2+sk*.15+(rc?.2:0);
g.save();g.translate(2,-27);g.rotate(hp);
poly([-8,3,-9,-8,-4,-11,5,-11,9,-6,8,3],S0,S3,1);
poly([-9,-8,-4,-11,5,-11,2,-8],'rgba(255,255,255,.1)');
poly([-5,-6,7,-6.4,7.6,-3.8,-5,-3.4],S1);
g.fillStyle='#0b0a08';g.fillRect(-1,-3.2,8,2.2);
g.save();g.globalCompositeOperation='lighter';g.fillStyle='rgba('+gc+','+(.7+pu*.3)+')';g.fillRect(1,-2.8,4.6,1.2);g.restore();
gl(gk,3.6,-2.2,8,.3+pu*.3);
sl(-3,.6,6,.6,'rgba(24,20,14,.7)',1);sl(-1,2.2,5,2.2,'rgba(24,20,14,.6)',.9);sl(2,-11,0,-6,'rgba(24,20,14,.6)',.8);
ov(-5,-10,3,1.3,'rgba(84,120,64,.6)');
g.restore();
const ths=lr(lr(rc?.45:1.35-m.ar*.4,-2.1,wu),1.15,sk),thf=lr(lr(rc?.3:.5,-2.1,wu),.85,sk);
arm(16,-17+bob*-.6,ths,thf,2.7,S0,25,1);
g.restore();g.restore();
if(!slA)for(let i=0;i<4;i++){const a=T*(.6+i*.17)+i*1.9+e.id,rr=26+i*6,y=hy-26+M.sin(a)*10-i*3;if(M.cos(a)>-.2)ov(M.cos(a)*rr,y,2+i*.5,1.6+i*.4,S1)}
if(sk>.4)gl('w',30,hy-4,30,(sk-.4)*1.2);
uxW(e,-14,hy-34,gk,2,12,5,.1,.5);
uxW(e,0,hy-2,'f',2,34,8,.05,.35);
}
function bAr(e,sn,id,sw,ph){
const m=uxM(e,sn,ph,id,sw,1.8),dr=M.max(0,-sw),rl=M.max(0,sw),p2=e.hp<e.mh*.5?1:0,pu=.5+.25*M.sin(T*2.4+e.id);
const hy=-uxH(ph,sn,12,27)-id*.3+dr*1.2,bk=e.vx*e.f<-8?3:0,sc=M.sin(T*2.2+e.id)*1.2+M.sin(ph-.9)*sn*3;
const BKc='#1f1b2a',B2='#3a3548',BN2='#d2c9b2';
uxLeg(ph+PI,sn,-2,hy,12,6,8,.62,'#262234','#17141f');
uxLeg(ph,sn,2,hy,12,6,8,.68,'#322e42','#1c1826');
g.save();g.translate(0,hy);g.lineCap='round';g.lineJoin='round';
gl('z',-8,-10,34,.05+pu*.04+p2*.08);
const hx0=-9-sn*5-bk+sc;
for(let k=0;k<5;k++){const l=14+(k%3)*6+k,bx=-8+k*3.4,lx=bx-3-sn*(4+k)-bk*.6+M.sin(T*2.4+k*1.3+e.id)*1.4+M.sin(ph-.8-k*.3)*sn*2.4,ly=l+M.sin(T*3+k)*1;
g.fillStyle=k&1?'#211c2a':BKc;g.beginPath();g.moveTo(bx-2,-6);g.lineTo(bx+2.4,-6);g.quadraticCurveTo(bx+1+(lx-bx)*.4,l*.5,lx+.6,ly);g.quadraticCurveTo(bx+(lx-bx)*.5,l*.5,bx-2,-6);g.fill()}
const pp=m.pt-dr*.07+rl*.05;g.save();g.rotate(pp);
g.fillStyle=B2;g.fillRect(-6,-5,12,3.4);ov(0,-3.3,1.6,1.3,'#8a2a3a');
const cp=m.ct-dr*.1+rl*.1+m.br*.02,tp=pp+cp;
g.save();g.translate(0,-5);g.rotate(cp);
g.fillStyle=BKc;g.beginPath();g.moveTo(-6,5);g.lineTo(6,5);g.lineTo(7,-8);g.lineTo(9,-20);g.lineTo(-.5,-23);g.lineTo(-9,-20);g.lineTo(-7,-8);g.closePath();g.fill();
g.strokeStyle='#4f4962';g.lineWidth=1;g.stroke();
ov(.5,-12,4.4,9,'#0d0b12');
g.strokeStyle=BN2;g.lineWidth=1.2;
for(let k=0;k<5;k++){const y=-4.4-k*3.2;g.beginPath();g.moveTo(.6,y);g.quadraticCurveTo(5,y-1.4,5.8-k*.3,y+2.4);g.stroke()}
g.strokeStyle='#8f8770';g.lineWidth=1;
for(let k=0;k<4;k++){const y=-5-k*3.2;g.beginPath();g.moveTo(.2,y);g.quadraticCurveTo(-3.6,y-1.2,-4.4,y+1.8);g.stroke()}
sl(.4,5,.4,-21,BN2,1.6);for(let k=0;k<6;k++)ov(.4,2-k*3.8,1.1,.8,'#e6dec9');
ov(.6,-11,2,3,'rgba(220,60,86,'+(pu+.15+dr*.3)+')');gl('r',.6,-11,13,.14+pu*.14+dr*.2);
ov(-8,-20,4.6,3.4,B2);ov(8,-21,5.2,3.6,B2);
const nec=[2,-22,9+dr*-1.5,-31];
uxT(nec[0],nec[1],nec[2],nec[3],2.4,1.9,B2);
const hp=-tp*.5+m.hd*1.4-dr*.12+id*.04+M.sin(T*.9+e.id)*.04;
g.save();g.translate(nec[2]+1,nec[3]-1);g.rotate(hp);
poly([-1,-2.8,8,-1.8,15.5,1.4,15.8,3.6,8,4.2,-1.4,3.6],BN2,'#7d7660',.8);
poly([-5,-4,-1,-4.6,0,3.6,-4,3],BN2);ov(-1.5,-.4,4.8,4.4,BN2);
sl(4,-1.4,14,2.2,'rgba(120,112,90,.55)',.8);
ov(4.2,-.8,2,1.9,'#0a0810');ov(4.4,-.6,.9,.9,'#ff5a78');gl('r',4.4,-.6,9,.45+dr*.3+p2*.3);
ov(15.6,2.2,1,.8,'#1c1620');
g.fillStyle='#9a927a';for(let k=0;k<4;k++)poly([8+k*1.8,3.8,8.7+k*1.8,5.6,9.4+k*1.8,3.8]),g.fill();
g.strokeStyle='#cfc6ad';g.lineWidth=1.6;
const an=(x,y,s,len)=>{const sw0=M.sin(T*1.2+e.id+s)*.5;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x-2*s,y-len*.5,x-3*s+sw0,y-len);g.stroke();g.beginPath();g.moveTo(x-1.2*s,y-len*.4);g.lineTo(x+2.5*s,y-len*.62);g.moveTo(x-2.2*s,y-len*.7);g.lineTo(x-6*s+sw0,y-len*.88);g.moveTo(x-3*s+sw0,y-len);g.lineTo(x-1*s+sw0,y-len-5);g.stroke()};
an(-1,-3,1,17);
g.beginPath();g.moveTo(1.6,-3.4);g.quadraticCurveTo(1,-8,3,-11);g.stroke();sl(3,-11,4.6,-12.6,'#8f8770',1.4);
g.strokeStyle='#8f8770';g.lineWidth=1.2;g.beginPath();g.moveTo(-4,-10);g.lineTo(-8,-12);g.moveTo(-7,-16);g.lineTo(-10,-17);g.stroke();
const rb1=M.sin(T*2.6+e.id)*1.4+sn*2.4,rb2=M.sin(T*2.6+e.id-.9)*1.8+sn*3.4;
g.fillStyle='#b8344a';g.beginPath();g.moveTo(-3,-14);g.quadraticCurveTo(-7-rb1,-11,-11-rb2,-8+rb1*.3);g.lineTo(-10-rb2,-6+rb1*.3);g.quadraticCurveTo(-6-rb1,-9,-2.4,-12);g.fill();
g.beginPath();g.moveTo(0,-17);g.quadraticCurveTo(-4-rb2*.5,-14,-8-rb1,-13+rb2*.2);g.lineTo(-7-rb1,-11+rb2*.2);g.quadraticCurveTo(-3,-13,0,-15);g.fill();
g.restore();
g.restore();
g.restore();
g.restore();
const cs=(x,y)=>{const a=M.cos(cp),b=M.sin(cp),X=x*a-y*b,Y=x*b+y*a-5,c2=M.cos(pp),d2=M.sin(pp);return[X*c2-Y*d2,X*d2+Y*c2]};
g.save();g.translate(0,hy);g.lineCap='round';g.lineJoin='round';
const bx=26-rl*3,by=-20,bl=27,nk=bx-1-dr*14+rl*2,bw=dr*3.5,bt=bx-1-bw*.4;
const s2=cs(-6,-20),fr=uxArm(s2[0],s2[1],M.atan2(by-s2[1],nk-s2[0]),M.hypot(nk-s2[0],by-s2[1]),-1,.75,13,13,B2,'#241f2e',2);
const s1=cs(7,-20),ra=uxArm(s1[0],s1[1],M.atan2(by-s1[1],bx-s1[0]),M.hypot(bx-s1[0],by-s1[1]),1,.85,13,13,'#2c2838','#2c2838',2.2);
sl(ra[0],ra[1],ra[0]-1.6,ra[1]-3.2,BN2,.9);
g.fillStyle=B2;poly([ra[0]-1.4,ra[1]-1,ra[0]+.2,ra[1]-4.4,ra[0]+1.6,ra[1]-.4],B2);
g.strokeStyle='#cfc6ad';g.lineWidth=4.2;g.beginPath();g.moveTo(bt,by-bl);g.quadraticCurveTo(bx+13-bw,by,bt,by+bl);g.stroke();
g.strokeStyle='#8f8770';g.lineWidth=2;g.beginPath();g.moveTo(bt,by-bl+2);g.quadraticCurveTo(bx+12-bw,by,bt,by+bl-2);g.stroke();
for(let k=0;k<5;k++){const t=(k+1)/6,yy=lr(by-bl,by+bl,t),xx=bt+(bx+13-bw-bt)*2*t*(1-t)*.5*2;sl(xx-2.4,yy,xx+2.4,yy-.6,'#e6dec9',1.2)}
sl(bx+7-bw*.5,by-3.6,bx+7-bw*.5,by+3.6,'#5a3a30',3);
g.strokeStyle='rgba(235,200,205,.75)';g.lineWidth=.8;g.beginPath();g.moveTo(bt,by-bl);g.lineTo(nk,by);g.lineTo(bt,by+bl);g.stroke();
const cm=M.sin(T*2.1+e.id)*1.4+sn*(-2)+M.sin(ph-1)*sn;
sl(bt,by+bl,bt+cm*.4,by+bl+5,'#7a5a4a',.8);ov(bt+cm*.4,by+bl+6.5,1.5,1.7,BN2);ov(bt+cm*.4-.5,by+bl+6.2,.4,.5,'#1a1512');ov(bt+cm*.4+.5,by+bl+6.2,.4,.5,'#1a1512');
if(dr>.02){
g.strokeStyle='#2a2430';g.lineWidth=1.8;g.beginPath();g.moveTo(nk,by);g.lineTo(bx+22,by);g.stroke();
g.fillStyle='#ff7a94';g.beginPath();g.moveTo(bx+31,by);g.lineTo(bx+21,by-3.4);g.lineTo(bx+23,by);g.lineTo(bx+21,by+3.4);g.closePath();g.fill();
g.fillStyle='#8a2a44';g.beginPath();g.moveTo(nk,by);g.lineTo(nk-5,by-3.2);g.lineTo(nk+3,by-.4);g.lineTo(nk+3,by+.4);g.lineTo(nk-5,by+3.2);g.closePath();g.fill();
gl('r',bx+25,by,14+dr*16,dr*.9);
}
ov(fr[2],fr[3],2,2,B2);
g.restore();
uxSl(28,hy-20,30,-.9,.9,rl*.6,'255,90,120');
uxW(e,-6,hy+2,'r',3,26,6,.1+p2*.08,.55);
uxW(e,-8,hy-6,'z',2,18,8,.09,.4);
}
function drawEn(e){
if(e.bot){duDraw(e);return}
if(e.bq){duDrawQ(e);return}
const z=e.sz,sn=M.min(1,M.abs(e.vx)/e.sp),id=M.sin(T*1.7+e.id),dy=e.dd>0;
if(e.ps==null){e.ps=e.ph;e.pp=e.ph;e.rs=e.sw}
const dp=e.ph-e.pp;e.pp=e.ph;e.ps+=e.vx*e.f<-8?-dp:dp;
e.rs+=(e.sw-e.rs)*M.min(1,DT*(e.sw>e.rs?24:14));
const hk=e.t==4?0:M.min(1,M.max(0,e.hf)*7);
shd(e.x,(e.t==2?23:18)*z,.64*(dy?M.max(0,1-e.dd):1));
g.save();g.translate(e.x,e.y);
if(dy){g.rotate(-e.f*M.min(1.5,e.dd*3.2));g.globalAlpha=M.max(0,1.15-e.dd)}
g.scale(e.f*z,z);
if(hk>0){g.translate(-hk*(e.boss?1.4:3.2),0);g.rotate(-hk*(e.boss?.035:.1))}
const ph=e.ps,sw=e.rs;
if(e.t==0)bGh(e,sn,id,sw,ph);else if(e.t==1)bSk(e,sn,id,sw,ph);else if(e.t==2)bGo(e,sn,id,sw,ph);else if(e.t==4)bWg(e,sn,id,sw,ph);else if(e.t==5)bSt(e,sn,id,sw,ph);else if(e.t==6)bGl(e,sn,id,sw,ph);else if(e.t==7)bAr(e,sn,id,sw,ph);else bBo(e,sn,id,sw,ph);
g.restore();
g.globalAlpha=1;
if(e.hf>0)gl('r',e.x,e.y-30*z,30*z,e.hf*2.8);
}
function drawPr(){
for(const q of Pr){
if(q.t=='k'){duAd(q);continue}
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
