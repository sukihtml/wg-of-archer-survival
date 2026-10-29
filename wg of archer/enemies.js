function mkE(t,x){
const c=ET[t],m=(1+(WV.n-1)*.2)*pdm();
E.push({t,x,y:GY,vx:0,f:x<p.x?1:-1,hp:c.hp*m,mh:c.hp*m,sp:c.sp*rnd(.9,1.1),dm:c.dm*gDm(),rg:c.rg,cd:rnd(.3,.8),wu:0,mw:c.wu,sw:0,ph:rnd(0,TAU),hf:0,dd:0,sz:1,boss:0,id:rnd(0,9),fx:rnd(0,1),stp:0});
if(t==4){const e=E[E.length-1];e.fl=1;e.ha=rnd(95,140);e.al=e.ha+rnd(20,50);e.st=0;e.tm=0}
}
function mkBoss(n){
const k5=n%5,gm=k5==3,rb=k5==4,hp=(1000+n*600)*(gm?1.25:rb?.9:1)*pdm(),x=M.random()<.5?cam-140:cam+VW+140;
E.push({t:gm?6:rb?7:3,boss:1,sz:gm?2.4:rb?2.2:2.3,x,y:GY,vx:0,f:x<p.x?1:-1,hp,mh:hp,sp:50+M.min(24,n*2.5),dm:(30+n*4)*gDm(),rg:90,cd:0,wu:0,mw:1,sw:0,ph:0,hf:0,dd:0,id:3,st:0,tm:1.6,n:0,cf:1,hl:[],nm:BN[k5],fx:0,stp:0});
ban(BN[k5]);
}
function mmGo(){
mmOn=1;mmTi=0;mmBs=0;mmCn=0;WV.n=M.max(3,M.min(8,sv.hi));WV.q=0;WV.bs=0;WV.bt=0;spT=0;
ban('Mode Monster');
}
function mmSp(dt){
mmTi+=dt;
const mn=M.floor(mmTi/60),nb=!mmBs&&mmTi>=20;
if(nb){
mmBs=1;
for(let k=0;k<3;k++){mkBoss(k);const b=E[E.length-1];b.x=k%2?cam-140-k*70:cam+VW+140+k*70;b.f=b.x<p.x?1:-1}
}
if(mn>mmCn){mmCn=mn;sv.coins+=50;save();ban('+50 koin  -  Menit '+mn+' selesai  -  Musuh makin kuat')}
spT-=dt;
if(spT>0)return;
spT=.5;
const cap=M.min(60,30+mn*4),hm=6*(1+mmTi/60*.6),dmk=3*(1+mmTi/120);
for(let n=0;n<3&&E.length<cap;n++){
const r=M.random(),t=r<.4?0:r<.7?1:r<.82?2:r<.92?4:5,s=M.random()<.5?-1:1;
mkE(t,s<0?cam-70-rnd(0,380):cam+VW+70+rnd(0,380));
const ne=E[E.length-1];ne.hp*=hm;ne.mh=ne.hp;ne.dm*=dmk;
}
}
function brGo(){
mmOn=1;brOn=1;brK=0;brN=0;brT=2;WV.n=1;WV.q=0;WV.bs=0;WV.bt=0;spT=0;
ban('Boss Rush');
}
function brSp(dt){
if(E.some(e=>e.boss&&!e.dd))return;
brT-=dt;
if(brT>0)return;
const c=1+M.min(2,M.floor(brN/6));
for(let k=0;k<c;k++){
mkBoss(brN+k);
const b=E[E.length-1];
b.hp*=1+brN*.18;b.mh=b.hp;b.dm*=1+brN*.08;
if(k){b.x=k%2?cam-140-k*70:cam+VW+140+k*70;b.f=b.x<p.x?1:-1}
}
brN+=c;brT=2;
}
function waveGo(n){
WV.n=n;sv.cw=n;if(n>sv.hi)sv.hi=n;save();WV.q=3+n*2;WV.bs=n%5==0?1:0;WV.bt=0;spT=2;
ban('Gelombang '+n);
}
function spw(dt){
if(duOn){duSp(dt);return}
if(p.dead||!WV.n)return;
if(mmOn){if(brOn)brSp(dt);else mmSp(dt);return}
if(WV.bt>0){WV.bt-=dt;if(WV.bt<=0)waveGo(WV.n+1);return}
if(WV.q<=0&&!WV.bs){
if(!E.some(e=>!e.dd)){WV.bt=3;if(WV.n%5)ban('Gelombang '+WV.n+' selesai')}
return;
}
spT-=dt;
if(spT>0)return;
if(WV.q<=0){mkBoss(WV.n/5-1);WV.bs=0;spT=3;return}
const mx=5+M.min(10,WV.n-1);
if(E.length>=mx){spT=.5;return}
spT=M.max(.6,2.6-WV.n*.1)*rnd(.8,1.2);
const w=WV.n,r=M.random();
let t=r<.45||w<2?0:(r<.78||w<3?1:2);
if(w>=4&&M.random()<.25)t=4;else if(w>=6&&M.random()<.2)t=5;
WV.q--;
mkE(t,M.random()<.5?cam-70:cam+VW+70);
}

function strikeE(e,t){
if(!t)return;
if(M.abs(t.x-e.x)>e.rg+16)return;
if(t===p&&p.y<GY-34)return;
const dm=e.dm*(1+(WV.n-1)*.06);
arc(e.x+e.f*16,e.y-30,e.f,24,ET[e.t].pc);
if(t===p)hurtP(dm,e.x);else hurtS(t,dm,e.x);
}
function slam(e){
const hx=e.x+e.f*97;
shake=M.max(shake,11);
dust(hx,GY,14,170);ring(hx,GY,'200,190,175',60);ring(hx,GY,'200,190,175',34);
for(let k=0;k<14;k++)sp(3,hx+rnd(-30,30),GY-2,rnd(-220,220),rnd(-380,-90),rnd(.4,.8),2.2,'170,165,160',900,1);
Pr.push({t:'q',x:hx,y:GY,vx:-330,l:0,dm:e.dm*.8,hpl:0,hs:[]});
Pr.push({t:'q',x:hx,y:GY,vx:330,l:0,dm:e.dm*.8,hpl:0,hs:[]});
if(!p.dead&&M.abs(p.x-hx)<80&&p.y>GY-30)hurtP(e.dm,hx);
for(const s of S){if(!s.dead&&M.abs(s.x-hx)<80)hurtS(s,e.dm,hx)}
e.sw=1;e.st=2;e.tm=.8;
}
function upBoss(e,dt){
const t=near(e),p2=e.hp<e.mh*.5?1:0,dx=t?t.x-e.x:0,ad=M.abs(dx);
e.tm-=dt;
if(e.st==0){
if(t)e.f=sgn(dx);
const want=t&&ad>80?e.f*e.sp*(1+p2*.3):0;
e.vx+=(want-e.vx)*M.min(1,dt*4);
e.sw*=M.exp(-dt*6);
if(e.tm<=0&&t&&ad<460){e.n++;if(e.n%3==0){e.st=3;e.tm=.9}else{e.st=1;e.tm=p2?.8:1}}
}else if(e.st==1){
e.vx*=M.exp(-dt*6);e.sw=-(1-M.max(0,e.tm)/(p2?.8:1));
if(e.tm<=0)slam(e);
}else if(e.st==2){
e.vx*=M.exp(-dt*6);e.sw*=M.exp(-dt*3);
if(e.tm<=0){e.st=0;e.tm=p2?.8:1.4}
}else if(e.st==3){
e.vx*=M.exp(-dt*6);if(t)e.f=sgn(dx);e.sw=.2;
if(M.random()<.5)dust(e.x-e.f*30,GY,1,50);
if(e.tm<=0){e.st=4;e.tm=.8;e.cf=e.f;e.hl=[]}
}else{
e.vx=e.cf*(430+p2*80);e.sw=.35;
dust(e.x-e.cf*30,GY,1,60);
if(!p.dead&&!e.hl.includes(p)&&M.abs(p.x-e.x)<52&&p.y>GY-44){e.hl.push(p);hurtP(e.dm*1.3,e.x)}
for(const s of S){if(s.dead||e.hl.includes(s)||M.abs(s.x-e.x)>52)continue;e.hl.push(s);hurtS(s,e.dm*1.3,e.x)}
if(e.tm<=0){e.st=2;e.tm=.9}
}
e.x+=e.vx*dt;
e.ph+=M.abs(e.vx)*dt*.05;
}

function ambE(e,dt){
e.fx-=dt;
const mv=M.abs(e.vx)>14,z=e.sz,f=e.f,x=e.x,y=e.y;
const st=M.floor(e.ph/PI);
if(st!==e.stp){
e.stp=st;
if(mv){
if(e.boss){dust(x-f*8*z,GY,5,100);shake=M.max(shake,1.6)}
else if(e.t==2){dust(x-f*6,GY,3,60);ring(x,GY,'150,150,150',14)}
else if(e.t==0&&M.random()<.5)dust(x-f*5,GY,1,40);
}
}
if(e.fx>0)return;
if(e.t==0){
if(mv){e.fx=.2;sp(5,x-f*8,GY-rnd(2,10),-f*rnd(10,30),rnd(-20,-6),rnd(.4,.7),1.6,'150,160,140',90,2)}
else{e.fx=rnd(.7,1.2);sp(0,x+f*16,y-38,f*rnd(8,22),rnd(-12,-5),.9,rnd(2,3.2),'150,165,150',-6,1.4)}
}else if(e.t==1){
if(mv){e.fx=.16;sp(5,x-f*5,y-rnd(2,24),rnd(-14,14),rnd(-30,-6),rnd(.4,.7),1.3,'200,194,176',160,2)}
else{e.fx=rnd(.5,.9);sp(0,x+f*4,y-54,rnd(-3,3),rnd(-14,-7),1.2,rnd(2.4,3.4),'165,180,185',-4,1.2)}
}else if(e.t==2){
e.fx=mv?.2:.32;
sp(5,x+rnd(-10,10),y-rnd(12,42),rnd(-6,6),rnd(-24,-10),rnd(.9,1.6),1.6,'214,134,76');
if(M.random()<.4)sp(5,x+rnd(-12,12),y-rnd(34,50),rnd(-4,4),10,rnd(.5,.8),1.4,'120,122,128',160,0);
}else if(e.t==4){
e.fx=.12;
sp(5,x+rnd(-10,10),y-rnd(18,46),rnd(-8,8),rnd(10,30),rnd(.4,.8),1.3,'150,125,190',40,1.5);
}else if(e.t==5){
e.fx=mv?.14:.22;
sp(5,x+f*rnd(14,28),y-rnd(52,76),rnd(-6,6),rnd(-20,-8),rnd(.6,1.1),1.4,'190,160,235',0,.6);
}else if(e.t==7){
e.fx=mv?.07:.1;
sp(5,x+rnd(-18,18),y-rnd(20,100),rnd(-8,8),rnd(-30,-12),rnd(.9,1.6),2,'215,70,95');
if(M.random()<.35)sp(0,x+f*8,y-96,rnd(-6,6),rnd(-18,-8),1.5,rnd(4,7),'50,30,60',-6,1);
}else{
e.fx=mv?.06:.09;
sp(5,x+rnd(-26,26),y-rnd(20,110),rnd(-8,8),rnd(-36,-14),rnd(1,1.8),2.2,'214,134,76');
if(M.random()<.4)sp(0,x+f*8,y-104,rnd(-6,6),rnd(-20,-10),1.6,rnd(5,8),'70,64,74',-6,1);
}
}
function upFly(e,dt){
const t=near(e);
let dx=0,ad=1e9,want=0,ta=e.ha+M.sin(T*2.4+e.id)*9;
if(t){dx=t.x-e.x;ad=M.abs(dx)}
if(e.st==0){
if(t){e.f=sgn(dx);if(ad>90)want=e.f*e.sp;else if(ad<50)want=-e.f*e.sp*.5}
if(t&&e.cd<=0&&ad<190){e.st=1;e.tm=.32}
}else if(e.st==1){
ta=e.ha+34;e.tm-=dt;
if(t)e.f=sgn(dx);
if(e.tm<=0){e.st=2;e.vx=M.max(-380,M.min(380,dx/.32))}
}else if(e.st==3){
ta=e.ha+10;e.tm-=dt;
want=e.f*e.sp*.2;
if(e.tm<=0&&e.al>=e.ha-12)e.st=0;
}
if(e.st==2){
e.al-=460*dt;
if(e.al<=24){
e.al=24;
strikeE(e,near(e));
e.cd=ET[4].cd;e.st=3;e.tm=.55;e.vx*=.4;
}
}else{
e.al+=(ta-e.al)*M.min(1,dt*(e.st==1?9:3));
e.vx+=(want-e.vx)*M.min(1,dt*(e.st==1?10:5));
}
e.x+=e.vx*dt;
e.ph+=M.abs(e.vx)*dt*.1;
}
function cast(e,t){
if(!t)return;
const ox=e.x+e.f*24,oy=e.y-68,tx=t.x,ty=t===p?p.y-28:t.y-28,a=M.atan2(ty-oy,tx-ox);
Pr.push({t:'m',x:ox,y:oy,vx:M.cos(a)*300,vy:M.sin(a)*300,dm:e.dm*(1+(WV.n-1)*.06),l:0});
ring(ox,oy,'175,150,220',18);
sp(1,ox,oy,0,0,.2,40,'v');
}
function upMage(e,dt){
const t=near(e);
let want=0;
if(e.wu>0){
e.wu-=dt;e.sw=-(1-M.max(0,e.wu)/e.mw);
if(t)e.f=sgn(t.x-e.x);
if(e.wu<=0){cast(e,t);e.sw=1}
}else{
e.sw*=M.exp(-dt*7);
if(t){
const dx=t.x-e.x,ad=M.abs(dx);
e.f=sgn(dx);
if(ad>e.rg*.9)want=e.f*e.sp;else if(ad<e.rg*.5)want=-e.f*e.sp*.9;
if(ad<=e.rg+40&&e.cd<=0){e.wu=e.mw;e.cd=ET[5].cd}
}
}
e.vx+=(want-e.vx)*M.min(1,dt*8);
e.x+=e.vx*dt;
e.ph+=M.abs(e.vx)*dt*.1;
}
function upE(dt){
for(let i=E.length-1;i>=0;i--){
const e=E[i];e.y=GY-(e.al||0);
if(e.dd){if(e.al>0)e.al=M.max(0,e.al-520*dt);e.dd+=dt;e.x+=e.vx*dt;e.vx*=M.exp(-dt*6);if(e.dd>(e.boss?2:1))E.splice(i,1);continue}
e.hf-=dt;e.cd-=dt;
if(e.bot){upBot(e,dt);continue}
if(e.bq){upBq(e,dt);continue}
ambE(e,dt);
if(e.boss){if(e.t==7)upBossR(e,dt);else upBoss(e,dt);continue}
if(e.fl){upFly(e,dt);continue}
if(e.t==5){upMage(e,dt);continue}
const t=near(e);
let want=0;
if(e.wu>0){
e.wu-=dt;e.sw=-(1-M.max(0,e.wu)/e.mw);
if(e.wu<=0){strikeE(e,t);e.sw=1}
}else{
e.sw*=M.exp(-dt*7);
if(t){
const dx=t.x-e.x,ad=M.abs(dx);
e.f=sgn(dx);
if(ad>e.rg*.75)want=e.f*e.sp;
if(ad<=e.rg&&e.cd<=0){e.wu=e.mw;e.cd=ET[e.t].cd}
}
}
for(const o of E){if(o===e||o.dd)continue;const dx=e.x-o.x;if(M.abs(dx)<20)want+=sgn(dx||rnd(-1,1))*26}
e.vx+=(want-e.vx)*M.min(1,dt*8);
e.x+=e.vx*dt;
e.ph+=M.abs(e.vx)*dt*.1;
}
}

