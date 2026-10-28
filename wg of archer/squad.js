function atkS(s,en){
const c=s.c,i=s.id,f=s.f;
if(i==0){
if(!en)return;
const ox=s.x+f*26,oy=s.y-42,ty=en.y-30*en.sz,a=M.atan2(ty-oy,en.x-ox);
Pr.push({t:'r',x:ox,y:oy,vx:M.cos(a)*760,vy:M.sin(a)*760,dm:s.dm,l:0});
ring(ox,oy,'150,235,180',20);
sp(1,ox,oy,0,0,.2,44,'g');
for(let k=0;k<5;k++){const b=a+rnd(-.5,.5);sp(3,ox,oy,M.cos(b)*rnd(80,260),M.sin(b)*rnd(80,260),rnd(.15,.3),1.5,'170,240,195',200,2)}
}else if(i==1){
if(!en)return;
const ox=s.x+f*22,oy=s.y-40,ty=en.y-30*en.sz,a=M.atan2(ty-oy,en.x-ox);
Pr.push({t:'o',x:ox,y:oy,vx:M.cos(a)*580,vy:M.sin(a)*580,dm:s.dm,l:0});
ring(ox,oy,'150,185,225',16);
}else if(i==2){
if(!en)return;
const ox=s.x+f*(1.5+M.cos(s.aa)*21),oy=s.y-45+M.sin(s.aa)*21,tx=en.x,ty=en.y-30*en.sz;
hurtE(en,s.dm,f);
Pr.push({t:'z',x:ox,y:oy,tx,ty,l:0,sd:rnd(0,500)});
ring(tx,ty,'175,105,255',30);
sp(1,tx,ty,0,0,.25,76,'z');
sp(1,ox,oy,0,0,.2,40,'z');
for(let k=0;k<8;k++){const b=rnd(0,TAU),v=rnd(80,260);sp(3,tx,ty,M.cos(b)*v,M.sin(b)*v,rnd(.15,.35),1.6,'205,150,255',200,2)}
shake=M.max(shake,1.2);
}else{
let h=0;
for(const e of E){if(e.dd||e.al>46)continue;const d=(e.x-s.x)*f;if(d>-14&&d<c.rg+e.sz*14){hurtE(e,s.dm,f);h=1}}
arc(s.x+f*30,s.y-34,f,56,'170,200,185');
ring(s.x+f*34,s.y-30,'150,205,185',h?32:20);
shake=M.max(shake,h?2.2:.6);
}
}
function ambS(s,dt){
s.fx-=dt;
if(s.fx>0)return;
const i=s.id,mv=M.abs(s.vx)>45,x=s.x,y=s.y,f=s.f;
if(i==0){
if(mv){s.fx=.1;dust(x-f*5,GY,2,46);sp(5,x-f*8+rnd(-4,4),y-rnd(6,40),-f*rnd(10,26),rnd(-12,-3),rnd(.4,.7),1.4,'150,225,175')}
else{s.fx=rnd(.5,.9);sp(5,x+f*rnd(8,18),y-rnd(18,48),rnd(-3,3),rnd(-9,-4),rnd(1.2,2),1.3,'150,225,175')}
}else if(i==1){
if(mv){s.fx=.08;sp(5,x-f*8+rnd(-6,6),y-rnd(6,42),-f*rnd(10,30),rnd(-14,-4),rnd(.5,.9),1.5,'190,208,230');if(M.random()<.4)dust(x-f*5,GY,1,36)}
else{s.fx=.2;sp(5,x+f*15+rnd(-9,9),y-72+rnd(-6,6),rnd(-4,4),rnd(-14,-6),rnd(1,1.6),1.4,'190,208,230')}
}else if(i==2){
if(mv){s.fx=.06;sp(5,x-f*8+rnd(-6,6),y-rnd(6,50),-f*rnd(10,30),rnd(-16,-4),rnd(.4,.7),1.5,'190,130,255');if(M.random()<.4)dust(x-f*5,GY,1,36)}
else{s.fx=.1;sp(5,x+rnd(-14,14),y-rnd(4,58),rnd(-8,8),rnd(-24,-8),rnd(.4,.8),1.4,'190,130,255');if(M.random()<.3)sp(1,x+f*rnd(10,20),y-rnd(20,50),0,0,.18,rnd(14,24),'z')}
}else{
if(mv){s.fx=.12;dust(x-f*7,GY,3,70);if(M.random()<.5)sp(5,x-f*8+rnd(-6,6),y-rnd(4,40),-f*rnd(6,20),rnd(-14,-4),rnd(.4,.7),1.5,'150,150,135')}
else{s.fx=rnd(.3,.6);sp(5,x+rnd(-14,14),y-rnd(0,56),rnd(-4,4),rnd(-12,-5),rnd(1.2,2),1.5,'140,220,195')}
}
}
function upS(dt){
SC.forEach((c,i)=>{
if(sv.sq.includes(i)&&!S.some(s=>s.c===c)){
S.push({c,id:i,x:p.x+c.of,y:GY,vx:0,f:p.f,hp:c.hp*gDm()*(1+.15*sv.sl[i]),mh:c.hp*gDm()*(1+.15*sv.sl[i]),dm:c.dm*pdm()*(1+.15*sv.sl[i]),cd:1,wu:0,sw:0,ph:0,hf:0,dead:0,rg:0,fx:0,aa:0});
ring(p.x+c.of,GY-30,'230,210,170',40);ring(p.x,p.y-30,AE[S.length].c,50);ban('Gelombang '+WV.n+'  -  '+c.n+' bergabung');
}
});
for(const s of S){
const c=s.c;
s.y=GY;s.hf-=dt;s.cd-=dt;
if(s.dead>0){s.dead-=dt;if(s.dead<=0){s.dead=0;s.hp=s.mh;s.x=p.x+c.of;s.vx=0;s.rg=0;ring(s.x,GY-30,'230,210,170',34)}continue}
s.rg-=dt;
if(s.rg<=0&&s.hp<s.mh)s.hp=M.min(s.mh,s.hp+2.5*gDm()*dt);
let en=null,bd=1e9;
for(const e of E){if(e.dd||(e.al>46&&!c.hd))continue;const d=M.abs(e.x-s.x);if(d<bd){bd=d;en=e}}
const ta=en&&bd<c.sg?M.max(-.7,M.min(.6,M.atan2(en.y-30*en.sz-(s.y-45),M.abs(en.x-s.x)||1))):0;
s.aa+=(ta-s.aa)*M.min(1,dt*10);
const tx=p.x+c.of;
let want=0;
if(s.wu>0){
s.wu-=dt;s.sw=-(1-M.max(0,s.wu)/c.wu);
if(en)s.f=sgn(en.x-s.x);
if(s.wu<=0){atkS(s,en);s.sw=1;s.cd=c.cd}
}else{
s.sw*=M.exp(-dt*7);
if(en&&bd<c.sg&&M.abs(en.x-p.x)<c.sg+200){
s.f=sgn(en.x-s.x);
if(c.hd){
if(bd>c.at*.92)want=s.f*c.sp;else if(bd<c.hd*.55)want=-s.f*c.sp*.8;
}else if(bd>c.at*.78)want=s.f*c.sp;
if(s.cd<=0&&bd<=c.at)s.wu=c.wu;
}else{
const dx=tx-s.x;
if(M.abs(dx)>VW*.8){s.x=tx;s.vx=0}
else if(M.abs(dx)>12)want=sgn(dx)*M.min(M.max(c.sp*1.25,330),M.abs(dx)*3);
s.f=M.abs(dx)>12?sgn(dx):p.f;
}
}
if(s.wu>0)want*=.25;
s.vx+=(want-s.vx)*M.min(1,dt*9);
s.x+=s.vx*dt;
s.ph+=M.abs(s.vx)*dt*.085;
ambS(s,dt);
}
}
function upPr(dt){
for(let i=Pr.length-1;i>=0;i--){
const q=Pr[i];q.l+=dt;
if(q.t=='o'){
q.x+=q.vx*dt;q.y+=q.vy*dt;
if(M.random()<.6)sp(1,q.x,q.y,rnd(-10,10),rnd(-10,10),.3,9,'c');
let h=0;
for(const e of E){if(e.dd)continue;if(M.abs(q.x-e.x)<14*e.sz&&q.y>e.y-64*e.sz&&q.y<e.y+4){hurtE(e,q.dm,q.vx<0?-1:1);h=1;break}}
if(h||q.l>1.8||q.y>GY){
ring(q.x,q.y,'150,185,225',18);
for(let k=0;k<6;k++)sp(3,q.x,q.y,rnd(-160,160),rnd(-160,160),rnd(.2,.4),1.6,'170,200,235',300,2);
Pr.splice(i,1);
}
}else if(q.t=='w'){
q.x+=q.vx*dt;
for(const e of E){if(e.dd||e.al>46||q.hit.includes(e))continue;if(M.abs(q.x-e.x)<16*e.sz+10){q.hit.push(e);hurtE(e,q.dm,q.vx<0?-1:1)}}
if(M.random()<.7)sp(0,q.x,GY-2,rnd(-20,20),rnd(-50,-10),.4,rnd(3,5),'225,205,160',0,2);
if(q.l>.85)Pr.splice(i,1);
}else if(q.t=='m'){
q.x+=q.vx*dt;q.y+=q.vy*dt;
if(M.random()<.6)sp(1,q.x,q.y,rnd(-10,10),rnd(-10,10),.3,9,'v');
let h=0;
if(!p.dead&&M.abs(q.x-p.x)<14&&q.y>p.y-62&&q.y<p.y+2){hurtP(q.dm,q.x);h=1}
if(!h)for(const s of S){if(s.dead)continue;if(M.abs(q.x-s.x)<14&&q.y>s.y-62&&q.y<s.y+2){hurtS(s,q.dm,q.x);h=1;break}}
if(h||q.l>3||q.y>GY){
ring(q.x,q.y,'175,150,220',18);
for(let k=0;k<6;k++)sp(3,q.x,q.y,rnd(-160,160),rnd(-160,160),rnd(.2,.4),1.6,'190,165,230',300,2);
Pr.splice(i,1);
}
}else if(q.t=='z'){
if(q.l>.24)Pr.splice(i,1);
}else if(q.t=='r'){
q.x+=q.vx*dt;q.y+=q.vy*dt;
if(M.random()<.7)sp(1,q.x-q.vx*.015,q.y-q.vy*.015,rnd(-10,10),rnd(-10,10),.28,9,'g');
if(M.random()<.5)sp(5,q.x-q.vx*.02,q.y-q.vy*.02,rnd(-20,20),rnd(-20,20),rnd(.25,.45),1.4,'150,235,180',60,2);
let h=0;
for(const e of E){if(e.dd)continue;if(M.abs(q.x-e.x)<14*e.sz&&q.y>e.y-64*e.sz&&q.y<e.y+4){hurtE(e,q.dm,q.vx<0?-1:1);h=1;break}}
if(h||q.l>1.6||q.y>GY){
ring(q.x,q.y,'150,235,180',20);
sp(1,q.x,q.y,0,0,.2,36,'g');
for(let k=0;k<6;k++)sp(3,q.x,q.y,rnd(-160,160),rnd(-160,160),rnd(.2,.4),1.6,'170,240,195',300,2);
Pr.splice(i,1);
}
}else if(q.t=='b'){
q.x+=q.vx*dt;q.y+=q.vy*dt;
if(M.random()<.7)sp(1,q.x,q.y,rnd(-10,10),rnd(-10,10),.3,q.bg?16:11,'r');
if(M.random()<.5)sp(5,q.x-q.vx*.02,q.y-q.vy*.02,rnd(-18,18),rnd(-18,18),rnd(.3,.5),1.6,'215,70,95',40,2);
let h=0;
if(!p.dead&&M.abs(q.x-p.x)<14&&q.y>p.y-62&&q.y<p.y+2){hurtP(q.dm,q.x);h=1}
if(!h)for(const s of S){if(s.dead)continue;if(M.abs(q.x-s.x)<14&&q.y>s.y-62&&q.y<s.y+2){hurtS(s,q.dm,q.x);h=1;break}}
if(h||q.l>3.2||q.y>GY){
ring(q.x,q.y,'215,70,95',q.bg?28:20);
for(let k=0;k<7;k++)sp(3,q.x,q.y,rnd(-170,170),rnd(-170,170),rnd(.2,.4),1.6,'230,90,115',300,2);
Pr.splice(i,1);
}
}else{
q.x+=q.vx*dt;
if(M.random()<.8)sp(0,q.x,GY-2,rnd(-30,30),rnd(-70,-20),.5,rnd(3,6),'130,125,120',0,2);
if(!p.dead&&!q.hpl&&M.abs(q.x-p.x)<16&&p.y>GY-22){q.hpl=1;hurtP(q.dm,q.x)}
for(const s of S){if(s.dead||q.hs.includes(s))continue;if(M.abs(q.x-s.x)<16){q.hs.push(s);hurtS(s,q.dm,q.x)}}
if(q.l>1.5)Pr.splice(i,1);
}
}
}
