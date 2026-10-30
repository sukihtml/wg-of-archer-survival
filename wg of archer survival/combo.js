const cmb={on:0,t:0,ts:1,g:0,rd:0,wx:0,d:1,cx:0,tx:0,fx:0,op:0,ph:-1,len:5.87,ah:175,or:0,b2:-9,T:null,B:null,gh:[],zg:[],sk:[],tr:[],q:[],pr:null,fu:null,sw:null,vis:[],dn:0,dc:0,sx:0,sy:0,ex:0,ey:0,hf:0,bf:0,bk:0};
const CMS=[0,.55,1.85,2.7,3.32,5.32,5.87];
const xcb=document.getElementById('x');
let lxg=-1,lxr=-1;
const cmE=t=>t<0?0:t>1?1:t*t*(3-2*t);
const cmO=t=>{t=t<0?0:t>1?1:t;return 1-(1-t)*(1-t)*(1-t)};
const cmI=t=>{t=t<0?0:t>1?1:t;return t*t};
const cmPp=(t,x,y,vx,vy,l,r,c,gv,dg)=>{if(P.length<420)P.push({t,x,y,vx,vy,l,m:l,r,c,gv:gv||0,dg:dg||0})};
const cmHp=id=>dxS.act==id?p.x:dxS.O[id].x;
const cmDm=()=>AE[p.vt].d*gDm()*gUd();
const cmSf=k=>{if(window.cmbSfx)window.cmbSfx(k)};

function cmbCh(v){
if(!SPC||inMenu||cmb.on)return;
cmb.g=M.min(1,cmb.g+v);
}
function cmbInit(){
cmb.g=.5;cmb.rd=0;
}
function cmbReset(){
cmb.on=0;cmb.t=0;cmb.ts=1;cmb.op=0;cmb.g=0;cmb.rd=0;cmb.wx=0;cmb.ph=-1;
cmb.gh.length=0;cmb.zg.length=0;cmb.sk.length=0;cmb.tr.length=0;cmb.q.length=0;
cmb.pr=null;cmb.fu=null;cmb.sw=null;
if(typeof dxT!='undefined'){dxT.CmEnd();dxB.CmEnd()}
}
function cmbPoll(dt){
if(!SPC||inMenu||p.dead){cmb.wx=0;return}
if(cmb.g<1)cmb.g=M.min(1,cmb.g+dt/55);
else if(!cmb.rd){cmb.rd=1;ban('Ultimate Combo siap');ring(p.x,p.y-30,'255,210,110',60);cmSf('Rdy')}
const X=inp('x');
if(X&&!cmb.wx)cmbTry();
cmb.wx=X?1:0;
}
function cmbTry(){
if(!SPC||inMenu||p.dead||cmb.on||cmb.g<1)return;
const oi=dxS.act=='T'?'B':'T',o=dxS.O[oi];
if(p.ut>0||o.ut>0)return;
let ne=null,nd=1e9;
for(const e of E){if(e.dd)continue;const dx=M.abs(e.x-p.x);if(dx<nd&&dx<1100){nd=dx;ne=e}}
const d=ne?sgn(ne.x-p.x):p.f,D=ne?M.max(300,M.min(nd+90,VW*.5,560)):380;
cmb.on=1;cmb.t=0;cmb.ts=1;cmb.op=0;cmb.g=0;cmb.rd=0;cmb.d=d;cmb.ph=-1;
cmb.cx=p.x;cmb.tx=p.x+d*D;cmb.fx=(cmb.cx+cmb.tx)/2;
cmb.ah=M.max(110,M.min(175,GY-130));cmb.or=0;cmb.b2=-9;
cmb.T={x:cmHp('T'),y:GY,f:d,k:'ready',t:0};
cmb.B={x:cmHp('B'),y:GY,f:d,k:'ready',t:0};
cmb.gh.length=0;cmb.zg.length=0;cmb.sk.length=0;cmb.tr.length=0;cmb.q.length=0;cmb.vis.length=0;
cmb.pr=null;cmb.fu=null;cmb.sw=null;
for(const h of[p,o]){h.at=-1;h.sk1=-1;h.s3=-1;h.rl=-1}
p.dr=0;p.ch=0;p.pc=0;msg=null;
cmSf('Go');
}
function cmbEnd(){
cmb.on=0;cmb.ts=1;cmb.op=0;cmb.ph=-1;
cmb.gh.length=0;cmb.zg.length=0;cmb.sk.length=0;cmb.tr.length=0;cmb.q.length=0;
cmb.pr=null;cmb.fu=null;cmb.sw=null;
dxT.CmEnd();dxB.CmEnd();
p.cd=.3;p.inv=M.max(p.inv,.8);p.y=GY;p.vx=0;p.vy=0;p.on=1;p.f=cmb.d;
}
function cmbBtn(){
const v=cmb.on?M.max(0,1-cmb.t/cmb.len):cmb.g,r=!cmb.on&&cmb.g>=1?1:0;
if(v!==lxg){xcb.style.setProperty('--v',v.toFixed(3));lxg=v}
if(r!==lxr){xcb.classList.toggle('rd',!!r);lxr=r}
}

function cmMotes(x,y,dt,n){
if(M.random()<dt*n){const a=rnd(0,TAU),r=rnd(30,64);cmPp(1,x+M.cos(a)*r,y-28+M.sin(a)*r*1.2,-M.cos(a)*r*3.6,-M.sin(a)*r*3.6,.3,rnd(6,10),'a')}
}
function cmPick(skip){
let b=null,bd=1e9;
for(const e of E){
if(e.dd||(skip&&cmb.vis.includes(e))||e.x<cam+40||e.x>cam+VW-40)continue;
const dd=M.abs(e.x-cmb.T.x);
if(dd<bd){bd=dd;b=e}
}
return b;
}
function cmDashStart(){
const hT=cmb.T,d=cmb.d,i=cmb.dn;
let tg=cmPick(1);
if(!tg&&cmb.vis.length){cmb.vis.length=0;tg=cmPick(1)}
let ex;
if(tg){
cmb.vis.push(tg);
const dir=M.abs(tg.x-hT.x)<24?(i&1?-1:1):sgn(tg.x-hT.x);
ex=tg.x+dir*46;
}else ex=cmb.tx+d*[90,-110,30,-150,120][i%5];
ex=M.max(cam+36,M.min(cam+VW-36,ex));
cmb.sx=hT.x;cmb.sy=hT.y;cmb.ex=ex;cmb.ey=GY-(i==1||i==3?70:0);
hT.f=M.abs(ex-hT.x)<2?d:sgn(ex-hT.x);
cmb.hf=0;
cmb.sk.push({y:cmb.sy-30,l:.22,m:.22});
cmb.zg.push({x0:cmb.sx,y0:cmb.sy-30,x1:ex,y1:cmb.ey-30,l:.26,m:.26,s:rnd(0,99)});
cmSf('Dash');
}
function cmSlash(){
const sx=cmb.sx,ex=cmb.ex,dir=sgn(ex-sx),lo=M.min(sx,ex)-28,hi=M.max(sx,ex)+28,dm=58*cmDm();
let n=0;
for(const e of E){
if(e.dd||e.x<lo||e.x>hi)continue;
hurtE(e,dm,dir);n++;
arc(e.x-dir*6,e.y-34*e.sz,dir,52,'255,236,170');
cmPp(1,e.x,e.y-30*e.sz,0,0,.18,70,'w');
}
ring(ex,cmb.ey-30,'255,236,170',40);ring(ex,cmb.ey-30,'255,255,255',22);
for(let i=0;i<10;i++)cmPp(3,ex,cmb.ey-30,dir*rnd(60,320),rnd(-200,120),rnd(.15,.32),2,'255,226,140',400,2);
shake=M.max(shake,n?5:2.5);
}
function cmBolt(){
const al=E.filter(e=>!e.dd&&e.x>cam-20&&e.x<cam+VW+20);
const x=al.length&&M.random()<.75?al[M.floor(M.random()*al.length)].x+rnd(-20,20):cam+rnd(30,VW-30);
if(P.length<420)P.push({t:9,x,y:0,vx:0,vy:0,l:.34,m:.34,r:1,c:'255,236,170',gv:0,dg:0,sd:rnd(0,999),ox:rnd(-120,120)});
ring(x,GY-3,'255,236,170',90);ring(x,GY-3,'255,255,255',50);
cmPp(1,x,GY-4,0,0,.3,110,'p');dust(x,GY,3,90);
const dm=140*cmDm();
for(const e of E){if(!e.dd&&M.abs(e.x-x)<110)hurtE(e,dm,sgn(e.x-x))}
shake=M.max(shake,4);
cmSf('Bolt');
}
function cmBoom(x,s){
ring(x,GY-4,'255,236,170',150*s);ring(x,GY-4,'255,150,60',96*s);ring(x,GY-30,'255,255,255',70*s);
if(P.length<420)P.push({t:7,x,y:GY,vx:0,vy:0,l:.75,m:.75,r:96*s,c:'255,190,90',gv:0,dg:0,ln:GY+30});
cmPp(1,x,GY-30,0,0,.45,230*s,'f');cmPp(1,x,GY-30,0,0,.22,120*s,'w');
for(let i=0;i<14;i++)cmPp(3,x+rnd(-20,20),GY-6,rnd(-300,300)*s,rnd(-460,-90)*s,rnd(.35,.8),2,'255,200,100',800,1);
dust(x,GY,10,170*s);
const dm=170*cmDm();
for(const e of E){if(!e.dd&&M.abs(e.x-x)<130*s)hurtE(e,dm,sgn(e.x-x))}
shake=M.max(shake,11*s);
cmSf('Blast');
}
function cmImpact(){
const x=cmb.tx,d=cmb.d,dm=cmDm();
cmb.fu=null;
FXA.fl=.8;FXA.fc='255,244,210';shake=30;
ring(x,GY-4,'255,255,255',480);ring(x,GY-4,'255,206,110',360);ring(x,GY-4,'255,140,60',240);ring(x,GY-30,'255,255,255',200);
cmPp(1,x,GY-40,0,0,.9,420,'w');cmPp(1,x,GY-40,0,0,1.2,300,'f');cmPp(1,x,GY-30,0,0,1.5,520,'a');
if(P.length<420){
P.push({t:7,x,y:GY,vx:0,vy:0,l:1.5,m:1.5,r:300,c:'255,196,96',gv:0,dg:0,ln:GY+40});
P.push({t:7,x,y:GY,vx:0,vy:0,l:1.1,m:1.1,r:140,c:'255,250,230',gv:0,dg:0,ln:GY+40});
}
for(let i=0;i<18;i++)if(P.length<420)P.push({t:6,x,y:GY-24,vx:0,vy:0,l:.7,m:.7,r:7,c:'255,226,150',gv:0,dg:0,an:-PI*(i+.5)/18+rnd(-.08,.08),ln:rnd(180,520)});
for(let i=0;i<44;i++)cmPp(3,x+rnd(-40,40),GY-4,rnd(-460,460),rnd(-660,-120),rnd(.5,1.1),2.2,'255,190,100',900,1);
dust(x,GY,24,280);
cmb.sw={x,r:0,m:VW*1.05,hit:[]};
for(const e of E){if(!e.dd&&M.abs(e.x-x)<130)hurtE(e,300*dm,sgn(e.x-x))}
const t0=cmb.t;
for(let i=0;i<12;i++)cmb.q.push({t:t0+.14+i*.1+rnd(0,.04),f:cmBolt});
cmb.q.push({t:t0+.38,f:()=>cmBoom(x+d*150,.8)},{t:t0+.62,f:()=>cmBoom(x-d*170,.9)},{t:t0+.86,f:()=>cmBoom(x+d*300,1)});
cmb.T.us=0;cmb.B.us=0;
cmSf('Boom');
}
function cmEnter(ph){
const hT=cmb.T,hB=cmb.B;
if(ph==0){
FXA.fl=.3;FXA.fc='255,214,140';shake=M.max(shake,4);
for(const h of[hT,hB]){
ring(h.x,GY-4,'255,210,110',90);ring(h.x,h.y-30,'255,255,255',50);
if(P.length<420)P.push({t:7,x:h.x,y:GY,vx:0,vy:0,l:.6,m:.6,r:46,c:'255,210,110',gv:0,dg:0,ln:GY+30});
}
}else if(ph==1){
cmb.dn=0;cmb.dc=0;cmb.bf=0;cmb.bk=0;cmb.vis.length=0;
cmDashStart();
}else if(ph==2){
cmSf('Charge');
}else if(ph==3){
const b=dxB.Tip();
cmb.pr={sx:b[0],sy:b[1],x:b[0],y:b[1],a:-1.1};
ring(b[0],b[1],'255,226,122',40);ring(b[0],b[1],'255,255,255',22);
cmPp(1,b[0],b[1],0,0,.2,110,'w');cmPp(1,b[0],b[1],0,0,.3,80,'f');
for(let i=0;i<14;i++){const a=rnd(-1.8,-.4);cmPp(3,b[0],b[1],M.cos(a)*rnd(120,420),M.sin(a)*rnd(120,420),rnd(.15,.3),2,'255,226,122',200,2)}
hB.x-=cmb.d*9;shake=M.max(shake,5);
cmSf('Shot');
}else if(ph==4){
cmImpact();
}
}
function cmMerge(){
const b=dxT.Tip(),d=cmb.d;
cmb.pr=null;
cmb.fu={sx:b[0],sy:b[1],x:b[0],y:b[1],a:M.atan2(GY-6-b[1],cmb.tx-b[0])};
FXA.fl=.55;FXA.fc='255,244,210';shake=M.max(shake,8);
ring(b[0],b[1],'255,255,255',90);ring(b[0],b[1],'255,200,90',60);ring(b[0],b[1],'255,140,60',34);
cmPp(1,b[0],b[1],0,0,.4,260,'w');cmPp(1,b[0],b[1],0,0,.5,180,'a');
for(let i=0;i<22;i++){const a=rnd(0,TAU),v=rnd(120,460);cmPp(3,b[0],b[1],M.cos(a)*v,M.sin(a)*v,rnd(.2,.4),2,'255,226,140',300,2)}
cmb.b2=cmb.t;
cmSf('Fuse');
}
function cmbUp(dt){
cmb.t+=dt;
const t=cmb.t,d=cmb.d,hT=cmb.T,hB=cmb.B,fT=cmb.cx+d*34,fB=cmb.cx-d*30;
if(t>=CMS[6]){cmbEnd();return}
p.inv=M.max(p.inv,.5);
FXA.fl=M.max(0,FXA.fl-dt*2.4);
cmb.fx=(cmb.cx+cmb.tx)/2;
let ph=0;
while(ph<5&&t>=CMS[ph+1])ph++;
if(ph!==cmb.ph){cmb.ph=ph;cmEnter(ph)}
const u=t-CMS[ph];
const kx=M.min(1,dt*14);
if(ph==0){
cmb.op=cmE(t/.35);
cmb.ts=1-.78*cmE(u/.3);
hT.x+=(fT-hT.x)*M.min(1,dt*16);hB.x+=(fB-hB.x)*M.min(1,dt*16);
hT.f=d;hB.f=d;hT.k='ready';hB.k='ready';
cmMotes(hT.x,hT.y,dt,55);cmMotes(hB.x,hB.y,dt,55);
}else if(ph==1){
cmb.op=1;cmb.ts=.3;
hB.x+=(fB-hB.x)*M.min(1,dt*10);hB.f=d;
if(cmb.bf<3&&u>=[.12,.6,1.08][cmb.bf]){
cmb.bf++;hB.k='fire';cmb.bk=.2;hB.x-=d*7;dxB.Shoot(1);cmSf('Shot');
}
if(cmb.bk>0){cmb.bk-=dt;if(cmb.bk<=0)hB.k='ready'}
cmb.dc+=dt;
while(cmb.dc>=.26&&cmb.dn<4){cmb.dc-=.26;cmb.dn++;cmDashStart()}
if(cmb.dc<.12){
const k=cmO(cmb.dc/.12);
hT.x=lr(cmb.sx,cmb.ex,k);hT.y=lr(cmb.sy,cmb.ey,k);hT.k='dash';
cmb.gh.push({id:'T',x:hT.x,y:hT.y,f:hT.f,l:.3,m:.3});
}else{
if(!cmb.hf){cmb.hf=1;hT.x=cmb.ex;hT.y=cmb.ey;cmSlash()}
hT.k='slash';
}
}else if(ph==2){
cmb.op=1;cmb.ts=.3-.22*cmE(u/.6);
hT.x+=(fT-hT.x)*kx;hB.x+=(fB-hB.x)*kx;
hT.f=d;hB.f=d;
if(u<.22){hT.k='ready';hT.y+=(GY-hT.y)*M.min(1,dt*20)}
else{hT.k='leap';hT.y=GY-cmb.ah*cmO((u-.22)/.5)}
hB.k=u>.1?'aimup':'ready';
cmb.or=u>.25?6+30*cmE((u-.25)/.55):0;
if(u>.25){const tp=dxT.Tip();cmMotes(tp[0],tp[1]+28,dt,70)}
if(u>.2){const bt=dxB.Tip();cmMotes(bt[0],bt[1]+28,dt,40)}
}else if(ph==3){
cmb.op=1;cmb.ts=.12;
hT.f=d;hB.f=d;
hB.x+=(fB-hB.x)*M.min(1,dt*10);
if(!cmb.fu&&cmb.pr){
const pr=cmb.pr,b=dxT.Tip(),k=cmI(u/.2);
pr.x=lr(pr.sx,b[0],k);pr.y=lr(pr.sy,b[1],k);pr.a=M.atan2(b[1]-pr.sy,b[0]-pr.sx);
cmPp(0,pr.x,pr.y,rnd(-20,20),rnd(-20,20),.4,rnd(5,9),'210,205,200',-10,1);
if(M.random()<.8)cmPp(1,pr.x,pr.y,0,0,.14,rnd(20,34),'f');
if(u>=.2)cmMerge();
}
if(cmb.fu){
const fu=cmb.fu,k=cmI((u-.2)/.4);
fu.x=lr(fu.sx,cmb.tx,k);fu.y=lr(fu.sy,GY-6,k);
cmb.tr.push({x:fu.x,y:fu.y,l:.3,m:.3});
cmPp(5,fu.x,fu.y,rnd(-30,30),rnd(-30,30),rnd(.3,.5),rnd(3,6),'255,200,110',0,2);
if(M.random()<.9)cmPp(1,fu.x,fu.y,rnd(-10,10),rnd(-10,10),.16,rnd(30,50),'f');
cmb.or=0;
}
hT.k=u<.2?'leap':u<.45?'throw':'fall';
hT.y=u<.24?GY-cmb.ah:GY-cmb.ah+cmb.ah*cmE((u-.24)/.4);
hB.k=u<.15?'fireup':'ready';
}else if(ph==4){
cmb.op=1;cmb.ts=.1+.9*cmE((u-.28)/1.3);
hT.y+=(GY-hT.y)*M.min(1,dt*18);
hT.x+=(fT-hT.x)*M.min(1,dt*6);hB.x+=(fB-hB.x)*M.min(1,dt*6);
hT.k=u<.2?'fall':u<.95?'ready':'pose';
hB.k=u<.25?'fire':u<.95?'ready':'pose';
if(u>1){hT.f=-d;hB.f=-d}
if(u>.12&&u<1.45){dxT.Rain(dt);dxB.Rain(dt)}
}else{
cmb.ts=1;cmb.op=1-cmE(u/.5);
hT.y=GY;hT.k=u>.25?'ready':'pose';hB.k=u>.25?'ready':'pose';
if(u>.25){hT.f=d;hB.f=d}
hT.x+=(fT-hT.x)*M.min(1,dt*5);hB.x+=(fB-hB.x)*M.min(1,dt*5);
}
for(let i=cmb.q.length-1;i>=0;i--){
const e=cmb.q[i];
if(t>=e.t){cmb.q.splice(i,1);e.f()}
}
if(cmb.sw){
const w=cmb.sw;
w.r+=dt*1500;
for(const e of E){
if(e.dd||w.hit.includes(e)||M.abs(e.x-w.x)>w.r)continue;
w.hit.push(e);
hurtE(e,520*cmDm(),sgn(e.x-w.x));
cmb.zg.push({x0:e.x+rnd(-30,30),y0:-60,x1:e.x,y1:e.y-24*e.sz,l:.3,m:.3,s:rnd(0,99)});
ring(e.x,e.y-30*e.sz,'255,236,170',46);
cmPp(1,e.x,e.y-30*e.sz,0,0,.25,90,'w');
}
if(w.r>=w.m)cmb.sw=null;
}
for(const a of[cmb.gh,cmb.zg,cmb.sk,cmb.tr])for(let i=a.length-1;i>=0;i--){a[i].l-=dt;if(a[i].l<=0)a.splice(i,1)}
hT.t=u;hB.t=u;
dxT.Cm(hT);dxB.Cm(hB);
delete hT.us;delete hB.us;
}

function cmAura(x,y,k){
gl('a',x,y-28,60+20*k,.3+.3*k);
g.save();g.globalCompositeOperation='lighter';g.fillStyle='rgb(255,226,140)';
for(let i=0;i<12;i++){
const a=T*4+i*TAU/12,r=24+8*M.sin(T*6+i*1.7);
g.globalAlpha=(.5+.4*M.sin(T*9+i))*k;
g.fillRect(M.round(x+M.cos(a)*r),M.round(y-28+M.sin(a)*r*1.5),2,2);
}
g.restore();
}
function cmOrb(x,y,r,sd){
gl('a',x,y,r*3.2,.75);gl('w',x,y,r*1.5,.95);
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.strokeStyle='rgb(255,226,140)';g.lineWidth=1.3;g.globalAlpha=.85;
for(let i=0;i<7;i++){
const a=hs(sd+i*1.7)*TAU,l=r*(1+hs(sd+i*2.9)*1.3);
g.beginPath();zig(x,y,x+M.cos(a)*l,y+M.sin(a)*l,r*.5,sd+i*11);g.stroke();
}
g.restore();
}
function cmbDraw(){
if(!cmb.on)return;
const ph=cmb.ph,hT=cmb.T,hB=cmb.B,sd=M.floor(T*20)*7.3;
g.save();
g.globalCompositeOperation='lighter';
for(const s of cmb.sk){
const k=s.l/s.m,gr=g.createLinearGradient(cam,0,cam+VW,0);
gr.addColorStop(0,'rgba(255,240,200,0)');gr.addColorStop(.5,'rgba(255,244,214,'+.55*k+')');gr.addColorStop(1,'rgba(255,240,200,0)');
g.fillStyle=gr;g.fillRect(cam,s.y-1.5,VW,3);
}
for(const h of cmb.gh){
g.globalAlpha=h.l/h.m*.55;
dxT.Ghost(h.x,h.y,h.f,'#ffdf8a');
}
g.globalAlpha=1;
g.lineCap='round';g.lineJoin='round';
for(const z of cmb.zg){
const k=z.l/z.m,s2=z.s+M.floor(z.l*40)*5.3;
g.globalAlpha=k*.5;g.strokeStyle='rgb(255,200,90)';g.lineWidth=9*k+1;
g.beginPath();zig(z.x0,z.y0,z.x1,z.y1,14,s2);g.stroke();
g.globalAlpha=k;g.strokeStyle='rgb(255,236,170)';g.lineWidth=3*k+.6;
g.beginPath();zig(z.x0,z.y0,z.x1,z.y1,14,s2);g.stroke();
g.strokeStyle='rgb(255,255,255)';g.lineWidth=k+.3;
g.beginPath();zig(z.x0,z.y0,z.x1,z.y1,14,s2);g.stroke();
}
g.restore();
if(ph==0){const k=cmE((cmb.t-.05)/.4);cmAura(hT.x,hT.y,k);cmAura(hB.x,hB.y,k)}
else if(ph==2){cmAura(hT.x,hT.y,1);cmAura(hB.x,hB.y,1)}
else if(ph==3&&!cmb.fu){cmAura(hB.x,hB.y,1)}
if((ph==2&&cmb.or>0)||(ph==3&&!cmb.fu)){
const tp=dxT.Tip();
cmOrb(tp[0],tp[1],M.max(cmb.or,36),sd);
}
if((ph==2&&cmb.t-CMS[2]>.2)||(ph==3&&cmb.pr&&cmb.t-CMS[3]<.03)){
const bt=dxB.Tip(),k=ph==2?cmE((cmb.t-CMS[2]-.2)/.5):1;
gl('f',bt[0],bt[1],12+34*k,.5+.4*k);gl('w',bt[0],bt[1],6+16*k,.6+.3*k);
}
if(cmb.pr){
const pr=cmb.pr;
gl('f',pr.x,pr.y,60,.7);
dxB.Rocket(pr.x,pr.y,pr.a,28,1.7);
}
for(const q of cmb.tr){
const k=q.l/q.m;
gl('f',q.x,q.y,70*k+20,k*.6);gl('a',q.x,q.y,40*k+10,k*.5);
}
if(cmb.fu){
const fu=cmb.fu,ca=M.cos(fu.a),sa=M.sin(fu.a);
gl('a',fu.x,fu.y,170,.8);gl('f',fu.x-ca*30,fu.y-sa*30,110,.8);
dxB.Rocket(fu.x,fu.y,fu.a,28,2.3);
dxT.Spear(fu.x,fu.y,fu.a,2.3);
gl('w',fu.x+ca*70,fu.y+sa*70,70,.9);
}
if(cmb.sw){
const w=cmb.sw,k=M.max(0,1-w.r/w.m);
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';
g.strokeStyle='rgba(255,226,150,'+.8*k+')';g.lineWidth=10*k+2;
g.beginPath();g.ellipse(w.x,GY-6,w.r,w.r*.14,0,0,TAU);g.stroke();
g.strokeStyle='rgba(255,255,255,'+k+')';g.lineWidth=3*k+1;
g.beginPath();g.ellipse(w.x,GY-6,w.r*.98,w.r*.135,0,0,TAU);g.stroke();
for(const sg of[-1,1]){
const fx=w.x+sg*w.r,gr=g.createLinearGradient(fx-sg*46,0,fx,0);
gr.addColorStop(0,'rgba(255,214,120,0)');gr.addColorStop(1,'rgba(255,236,180,'+.45*k+')');
g.fillStyle=gr;g.fillRect(M.min(fx,fx-sg*46),GY-150,46,150);
}
g.restore();
}
}
function cmTx(s,x,y,sz,sp,a,gold){
g.save();
g.font='800 '+sz+'px system-ui,sans-serif';g.textAlign='left';g.textBaseline='alphabetic';
let w=0;const ws=[];
for(const c of s){const m=g.measureText(c).width;ws.push(m);w+=m+sp}
w-=sp;
let cx=x-w/2;
g.globalAlpha=a;
if(gold){
const gr=g.createLinearGradient(0,y-sz,0,y+sz*.15);
gr.addColorStop(0,'#fff8dc');gr.addColorStop(.55,'#ffd36a');gr.addColorStop(1,'#e2932c');
g.fillStyle=gr;g.shadowColor='rgba(255,176,60,.75)';g.shadowBlur=sz*.5;
}else g.fillStyle='rgba(240,232,214,.92)';
g.lineWidth=sz*.08;g.strokeStyle='rgba(30,16,4,.55)';g.lineJoin='round';
let i=0;
for(const c of s){g.strokeText(c,cx,y);g.fillText(c,cx,y);cx+=ws[i++]+sp}
g.restore();
return w;
}
function cmbHud(){
const o=cmb.op,t=cmb.t;
if(o<=0)return;
const bh=VH*.115*o;
const dk=cmb.ph<4?.26:.26*(1-cmE((t-CMS[4])/1.2));
g.fillStyle='rgba(8,8,20,'+dk*o+')';g.fillRect(0,0,VW,VH);
const vg=g.createRadialGradient(VW/2,VH/2,VH*.35,VW/2,VH/2,M.max(VW,VH)*.8);
vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(10,5,0,'+.55*o+')');
g.fillStyle=vg;g.fillRect(0,0,VW,VH);
g.fillStyle='#000';g.fillRect(0,0,VW,bh);g.fillRect(0,VH-bh,VW,bh);
const sz=M.max(20,M.min(40,VH*.075));
const a1=cmE((t-.12)/.25)*(1-cmE((t-1.55)/.35));
if(a1>0){
const sc=1+.28*(1-cmO((t-.12)/.3)),y=VH*.27;
g.save();g.translate(VW/2,y);g.scale(sc,sc);
const w=cmTx('ULTIMATE COMBO',0,0,sz,sz*.2,a1,1);
g.globalAlpha=a1*.8;g.fillStyle='rgba(255,214,140,.9)';
const lw=M.min(90,VW*.12)*cmO((t-.2)/.4);
g.fillRect(-w/2-lw-14,-sz*.32,lw,1);g.fillRect(w/2+14,-sz*.32,lw,1);
cmTx('LEMBING GUNTUR  ×  ROKET KLUSTER',0,sz*.95,M.max(10,sz*.32),M.max(2,sz*.1),a1*.85,0);
g.restore();
}
const a2=cmE((t-cmb.b2)/.15)*(1-cmE((t-cmb.b2-.9)/.35));
if(cmb.b2>0&&a2>0){
const sc=1+.2*(1-cmO((t-cmb.b2)/.25));
g.save();g.translate(VW/2,VH*.27);g.scale(sc,sc);
cmTx('TOMBAK  ×  RUDAL',0,0,sz*.8,sz*.16,a2,1);
g.restore();
}
}
