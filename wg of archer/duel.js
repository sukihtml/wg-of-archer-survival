let duG=0,duOn=0,pvOn=0,duR=1,duP=0,duB=0,duS=0,duT=0,duF=0,duVt=4,duCf=null,pvO=null,pvD='';
const DUHP=700,DUDM=.06,DUK='pemanah_duel_v1',DUMX=3;
const DUC={dg:.9993,r0:0,r1:.015,er:.012,eb:.1,em:.09,c0:.12,c1:.3,ct:.7,sp:300,fl:.55,sh:1,hp:DUHP,dm:DUDM,qc:0,uc:0};
function duDay(){const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()}
function duLeft(){
try{const o=JSON.parse(localStorage.getItem(DUK)||'null');return o&&o.d==duDay()?M.max(0,DUMX-(o.n|0)):DUMX}catch(x){return DUMX}
}
function duUse(){
try{const o=JSON.parse(localStorage.getItem(DUK)||'null'),d=duDay();localStorage.setItem(DUK,JSON.stringify({d,n:o&&o.d==d?(o.n|0)+1:1}))}catch(x){}
}
function duQ(vt){
const q=Object.assign({},p);
q.vt=vt;q.hp=1;q.mh=1;q.dead=0;q.go=0;q.ga=0;q.gf=0;q.dr=0;q.ch=0;q.pc=0;q.da=0;q.sh=0;q.sf=0;q.rc=0;q.sq=0;q.air=0;q.fy=0;q.on=1;q.vx=0;q.vy=0;q.cv=0;q.wk=0;q.st=0;q.hu=0;q.inv=0;q.ut=0;q.us=0;q.uc=0;q.dn=0;q.dw=0;q.dc=0;q.dz=0;q.dsp=0;q.dht=0;q.dl=-1;q.wa=.3;q.wp=0;q.wd=-1;q.bl=3;q.idle=0;q.wf=0;
return q;
}
function duMk(sd){
const cf=duCf,h=cf.hp*pdm();
E.push({t:0,bot:1,cf,ws:pvOn?0:1,x:p.x+sd*M.min(520,VW*.42),y:GY,vx:0,f:-sd,hp:h,mh:h,sp:cf.sp,dm:0,rg:0,cd:0,wu:0,mw:1,sw:0,ph:0,hf:0,dd:0,sz:1,boss:0,id:0,fx:0,stp:0,al:0,vz:0,fy:0,dr:0,ch:0,tg:1,sh:0,shT:0,cw:.6,jb:0,mt:0,ht:2,ft:0,dir:1,ta:0,pz:0,rj:rnd(2,5),lk:0,lm:1,qk:cf.qc*rnd(.4,.8),uct:0,ut:0,ua:0,fm:pvOn?pvFm():1,fq:rnd(1.8,4),cm:0,pd:0,uch:pvOn?pvUc:0,lh:h,lp:p.hp,ud:0,uw:0,hbm:0,hbt:0,hbc:rnd(2,5),hjt:0,wg:1,wgt:0,lw:0,mo:pvOn?pvMo:0,ab:pvOn?pvAb:0,q:duQ(duVt)});
}
function duNew(){
E.length=0;Pr.length=0;A.length=0;S.length=0;
const sd=duR%2?1:-1;
p.x=0;p.y=GY;p.vx=0;p.vy=0;p.f=sd;p.on=1;p.fy=0;p.air=0;p.dr=0;p.ch=0;p.da=0;p.sh=0;p.cd=0;p.dead=0;p.inv=0;p.hp=p.mh;p.rg=0;p.hu=0;
cam=p.x-VW*.5+50;
duMk(sd);
if(pvOn)for(const i of pvO.sq)pvQ(E[0],i);
duS=0;duT=3;duG=0;
ban('Babak '+duR);
}
function duGo(){
duCf=DUC;duVt=4;pvOn=0;pvD='';
mmOn=1;duOn=1;duR=1;duP=0;duB=0;duF=0;WV.n=1;WV.q=0;WV.bs=0;WV.bt=0;spT=0;
skSync();
duNew();
}
function duKo(w){
if(duS!=1)return;
duS=2;
if(pvOn){const bb=E.find(o=>o.bot);if(bb)pvMd(w,bb)}
if(w)duP++;else duB++;
const fin=duP>=2||duB>=2;
duF=fin?(w?1:2):0;
duT=fin&&w?4.2:2.8;
let nw=0;
if(fin){
if(pvOn)pvRes(w);
else if(w&&!sv.wg.includes(1)){sv.wg.push(1);save();nw=1}
}
ban(nw?'Kamu menang  -  Sayap Emas didapat!':fin?(w?'Kamu menang  '+duP+' - '+duB:(pvOn?'Kamu kalah  ':'Bot menang  ')+duB+' - '+duP):(w?'Babak '+duR+' untukmu':'Babak '+duR+(pvOn?' untuk lawan':' untuk bot')));
}
function duL1(){return pvOn?'Kalah  '+duB+' - '+duP:'Bot menang  '+duB+' - '+duP}
function duL2(){return pvOn?pvD:'1 vs 1'}
function duSp(dt){
if(inMenu)return;
if(duS==0){duT-=dt;if(duT<=0){duS=1;duG=.8}}
else if(duS==1){if(p.dead)duKo(0)}
else{
duT-=dt;
if(duT<=0){if(pvOn&&duF)pvEnd();else if(duF==1)menuGo();else if(!duF){duR++;duNew()}}
}
}
function duSw(e,fn,a){
const q=e.q;
q.x=e.x;q.y=e.y;q.f=e.f;q.vx=e.vx;q.dead=e.dd>0?e.dd:0;
const bk=Object.assign({},p),s0=SPC,w0=sv.ws;
Object.assign(p,q);SPC=0;sv.ws=e.ws;
try{fn(a)}finally{Object.assign(q,p);Object.assign(p,bk);SPC=s0;sv.ws=w0}
}
function duAim(ox,oy,d,s){
let a=0;
for(let i=0;i<4;i++){
const t0=M.abs(p.x-ox)/(s*M.max(.2,M.cos(a))),ex=(p.x+p.vx*t0*.9-ox)*d,ey=p.y-30+p.vy*t0*.5-oy;
a=M.atan2(ey-215*t0*t0,M.max(30,ex));
}
return M.max(-.7,M.min(.6,a));
}
function duShoot(ox,oy,d,c,dm,v,cf,xe,bi){
const s=480+c*760,a=duAim(ox,oy,d,s)+(M.random()<cf.eb?rnd(-cf.em,cf.em):rnd(-cf.er,cf.er))+(xe?rnd(-xe,xe):0)+(bi||0);
Pr.push({t:'k',x:ox,y:oy,vx:d*M.cos(a)*s,vy:M.sin(a)*s,tr:[],l:0,c,dm,v});
}
function duFire(e){
const c=M.max(.18,e.ch),d=e.f,ox=e.x+d*26,oy=e.y-45,cf=e.cf,v=e.q.vt;
duShoot(ox,oy,d,c,p.mh*(.015+(cf.dm-.015)*c),v,cf,cf.hu?(e.cm>0?.02+.07*(1-e.fm):0)+(1-e.fm)*(.03+cf.er*2):0,e.ab*(1+(1-e.fm)));
e.dr=0;e.ch=0;e.cw=rnd(cf.c0,cf.c1)*(1-.2*e.mo);e.q.rc=1;
ring(ox,oy,AE[v].c,22+c*22);
sp(1,ox,oy,0,0,.2,50,AE[v].k);
for(let i=0;i<6;i++){const b=rnd(-.5,.5);sp(3,ox,oy,d*M.cos(b)*rnd(120,360)*c+d*60,M.sin(b)*rnd(120,300)*c,rnd(.2,.4),2,AE[v].c,500,2)}
}
function duQk(e){
const d=e.f,ox=e.x+d*26,oy=e.y-45,v=e.q.vt,cf=e.cf,a=duAim(ox,oy,d,1000),dm=p.mh*.014*(cf.dm/.06);
for(let i=-2;i<=2;i++){const b=a+i*.1;Pr.push({t:'k',x:ox,y:oy,vx:d*M.cos(b)*1000,vy:M.sin(b)*1000,tr:[],l:0,c:.85,dm,v})}
e.qk=cf.qc*rnd(.9,1.2);e.dr=0;e.ch=0;e.cw=.3;e.q.rc=1;shake=M.max(shake,3);
ring(ox,oy,AE[v].c,34);
sp(1,ox,oy,0,0,.25,64,AE[v].k);
}
function duUl(e){
const v=e.q.vt;
e.ut=2.8;e.ua=0;e.uct=0;e.dr=0;e.ch=0;e.q.rc=1;shake=10;
ring(e.x,e.y-30,AE[v].c,90);ring(e.x,e.y-30,AE[v].c,50);
sp(1,e.x,e.y-30,0,0,.6,170,AE[v].k);
}
function upBot(e,dt){
const q=e.q,cf=e.cf,wg=!pvOn||q.vt>=4,act=duS==1&&!p.dead&&!e.dd,dx=p.x-e.x,ad=M.abs(dx),sd=sgn(dx),on=e.al<=0;
const hu=cf.hu;
e.cw-=dt;e.mt-=dt;e.jb-=dt;e.ht-=dt;e.shT-=dt;e.ft-=dt;
if(hu){
e.pz-=dt;e.rj-=dt;e.lk-=dt;
if(e.lk<=0){e.lk=rnd(2,5);e.lm=rnd(.8,1.25)}
if(duS==0)e.cw=M.max(e.cw,.5-e.fm*.3);
e.fq-=dt;
if(e.fq<=0){e.fq=rnd(1.8,4);e.fm=M.max(.05,M.min(1,e.fm+(pvFb-.1*e.mo-(e.lw?.08:0)-e.fm)*.35+rnd(-.28,.28)))}
e.lw=e.hp<e.mh*.3?1:0;
const ps=M.abs(p.vx)>90?sgn(p.vx):0;
if(ps&&e.pd&&ps!=e.pd)e.cm=rnd(.35,.7);
if(ps)e.pd=ps;
e.cm-=dt;
const dl=e.lh-e.hp,dp=e.lp-p.hp;
if(dl>0)e.uch+=dl/e.mh*cf.ug*1.6;
if(dp>0)e.uch+=dp/p.mh*cf.ug*1.2;
e.lh=e.hp;e.lp=p.hp;
e.uch=M.min(1,e.uch);
e.hbc-=dt;
if(e.hbm){e.hbt-=dt;if(e.hbt<=0)e.hbm=0}
else if(e.hbc<=0){e.hbc=rnd(3,7);if(act&&on&&M.random()<cf.hb){e.hbm=M.random()<.5?1:2;e.hbt=rnd(1.5,3.2)}}
if(e.hbm==1&&act&&on&&!e.dr&&!e.fy){e.hjt-=dt;if(e.hjt<=0){e.hjt=rnd(.45,.8);e.vz=560;q.sq=-.3;dust(e.x,GY,6,60)}}
if(e.hbm==2){e.wgt-=dt;if(e.wgt<=0){e.wgt=rnd(.25,.45);e.wg=-e.wg}}
if(act&&e.pz<=0&&M.random()<dt*.35)e.pz=rnd(.3,.8);
if(act&&on&&!e.dr&&e.rj<=0){e.rj=rnd(2.5,6);if(M.random()<.4){e.vz=560;q.sq=-.3;dust(e.x,GY,6,60)}}
if(e.hf>.12&&M.random()<.3){e.dr=0;e.ch=0;e.cw=M.max(e.cw,rnd(.2,.5))}
}
let th=0,tt=9;
if(act)for(const a of A){
if(a.st||a.vf||a.vx*(e.x-a.x)<=0)continue;
const tm=(e.x-a.x)/a.vx;
if(tm<0||tm>.7)continue;
if(a.bd===undefined){const fm=hu?e.fm:1;a.bd=M.random()<cf.dg*(hu?.55+.45*fm:1);a.rt=T+rnd(cf.r0,cf.r1)+(hu?.07+(1-fm)*.2+(M.random()<(1-fm)*.35?rnd(.12,.3):0):0)}
if(!a.bd||T<a.rt)continue;
const py=a.y+a.vy*tm+215*tm*tm;
if(py>e.y-76&&py<e.y+8&&tm<tt){tt=tm;th=1}
}
if(th&&tt<.65&&e.jb<=0){
if(on){e.vz=560;e.jb=.35;q.sq=-.3;dust(e.x,GY,6,60)}
else if(wg){e.fy=1;e.ta=e.al>110?M.max(0,e.al-170):M.min(300,e.al+170);e.ft=rnd(1,1.8);e.jb=.35}
}else if(cf.sh&&th&&tt<.3)e.shT=.32;
if(wg&&act&&!e.fy&&on&&e.ht<=0){
e.ht=rnd(2.5,5);
if(M.random()<cf.fl){e.fy=1;e.ta=rnd(80,230);e.ft=rnd(1.4,2.6)}
}
if(e.fy){
if(e.ft<=0)e.ta=0;
const vv=e.ta<=0?-300:M.max(-420,M.min(420,(e.ta-e.al)*5));
e.vz+=(vv-e.vz)*M.min(1,dt*8);
e.al+=e.vz*dt;
if(e.al<=0){e.al=0;e.vz=0;if(e.ta<=0)e.fy=0}
}else if(e.al>0||e.vz){
e.vz-=(e.vz>0?1700:1900)*dt;
e.al+=e.vz*dt;
if(e.al<=0){if(e.vz<-260){q.sq=M.min(.4,-e.vz/2400);dust(e.x,GY,8,90)}e.al=0;e.vz=0}
}
let want=0;
if(act){
const lo=M.max(200,VW*.26)*(hu?e.lm*(1-.2*e.mo)*(e.lw?1.3:1):1),hi=M.max(400,VW*.46)*(hu?e.lm*(1-.2*e.mo)*(e.lw?1.3:1):1);
if(ad<lo)want=-sd;
else if(ad>hi)want=sd;
else{if(e.mt<=0){e.mt=rnd(.45,1.2);e.dir=M.random()<.5?-1:1}want=e.dir}
if(hu&&e.pz>0)want=0;
else if(hu&&e.hbm==2)want=e.wg;
if((want<0&&e.x<cam+70)||(want>0&&e.x>cam+VW-70))want=0;
}
const spd=e.sp*(e.dr?.42:1)*(1-q.sh*.45)*(e.fy?1.15:1);
e.vx+=(want*spd-e.vx)*M.min(1,dt*(on?12:6));
e.x+=e.vx*dt;
if(e.x<cam+40){e.x=cam+40;e.vx=M.max(0,e.vx)}
else if(e.x>cam+VW-40){e.x=cam+VW-40;e.vx=M.min(0,e.vx)}
e.f=sd;
if(e.shT>0){e.dr=0;e.ch=0}
else if(act){
if(!e.dr){
if(e.cw<=0&&ad>130&&ad<820&&!(th&&tt<.3)&&!(p.sh>.5&&p.f==-sd)){e.dr=1;e.ch=0;e.tg=M.min(1,(ad<250?rnd(.3,.55):rnd(hu?.55:.9,1))*(1-.15*e.mo))}
}else{
e.ch=M.min(1,e.ch+dt/cf.ct);
if(th&&tt<.3&&e.ch<.6){e.dr=0;e.ch=0}
else if(e.ch>=e.tg)duFire(e);
}
}else{e.dr=0;e.ch=0}
if(cf.qc){
e.qk-=dt;
if(act&&e.ut<=0&&e.qk<=0&&!e.dr&&e.shT<=0&&ad<720&&(!hu||M.random()<dt*(.8+e.fm*1.6)))duQk(e);
if(e.ut<=0){
if(hu){
if(e.uch>=1&&act&&ad<760){
if(!e.ud){e.ud=1;e.uw=rnd(cf.u0,cf.u1)}
e.uw-=dt;
if(e.uw<=0&&(cf.u1>4||p.sh<.5||e.uw<-1.2)){duUl(e);e.uch=0;e.ud=0}
}
}else{e.uct+=dt;if(act&&e.uct>=cf.uc&&ad<760)duUl(e)}
}
else{
e.ut-=dt;e.ua-=dt;
if(e.ua<=0&&act){e.ua=.17;Pr.push({t:'k',x:p.x+rnd(-260,260),y:-60,vx:rnd(-40,40),vy:rnd(650,900),tr:[],l:0,c:.7,dm:p.mh*.012*(cf.dm/.06),v:q.vt})}
}
}
q.dr=e.dr;q.ch=e.ch;q.pc=e.ch;
q.da+=((e.dr?1:0)-q.da)*M.min(1,dt*16);
q.sh+=((e.shT>0?1:0)-q.sh)*M.min(1,dt*13);e.sh=q.sh;
q.rc*=M.exp(-dt*8);q.sf*=M.exp(-dt*3.2);q.sq*=M.exp(-dt*9);
q.cv+=(e.vx-q.cv)*M.min(1,dt*6);
q.on=on?1:0;q.fy=e.fy;q.vy=-e.vz;
q.air+=((on?0:1)-q.air)*M.min(1,dt*16);
if(on)q.wk+=M.abs(e.vx)*dt*.085;
q.wa+=((on?.3:1)-q.wa)*M.min(1,dt*8);
q.wp+=dt*(e.fy?8:(on?1.8:5));
q.wd+=(-e.f-q.wd)*M.min(1,dt*1.5);
q.bl-=dt;if(q.bl<-.12)q.bl=rnd(2.2,5);
e.y=GY-e.al;
duSw(e,evFx,dt);
}
function upBq(e,dt){
const l=e.ld,act=duS==1&&!p.dead&&!e.dd&&!l.dd,dx=l.x+e.c.of-e.x;
e.ac-=dt;
e.vx+=((M.abs(dx)>14?sgn(dx)*e.sp:0)-e.vx)*M.min(1,dt*8);
e.x+=e.vx*dt;
e.f=sgn(p.x-e.x);
e.sw*=M.exp(-dt*7);e.ph+=M.abs(e.vx)*dt*.1;
if(act&&e.ac<=0&&M.abs(p.x-e.x)<700){
e.ac=e.c.cd*rnd(2,3);e.sw=1;
duShoot(e.x+e.f*20,e.y-42,e.f,.6,p.mh*.014*(l.cf.dm/.06),0,l.cf);
}
}
function duDraw(e){
const hh=M.min(1,e.al/200),dy=e.dd>0;
shd(e.x,30*(1-hh*.5),.42*(1-hh)*(dy?M.max(0,1-e.dd):1));
shd(e.x,16*(1-hh*.5),.5*(1-hh)*(dy?M.max(0,1-e.dd):1));
duSw(e,()=>{
g.save();
if(dy){g.globalAlpha=M.max(0,1.15-e.dd);g.translate(p.x,p.y);g.rotate(-p.f*M.min(1.45,p.dead*4));g.translate(-p.x,-p.y)}
drawP(0);drawP(1);
g.restore();
});
g.globalAlpha=1;
if(e.hf>0)gl('r',e.x,e.y-30,34,e.hf*2.4);
}
function duDrawQ(e){
if(e.dd>0)g.globalAlpha=M.max(0,1.15-e.dd);
drawS(e);
g.globalAlpha=1;
}
function duAr(q,i,dt){
const a=AE[q.v];
q.tr.push({x:q.x,y:q.y});if(q.tr.length>10)q.tr.shift();
q.vy+=430*dt;q.x+=q.vx*dt;q.y+=q.vy*dt;
if(M.random()<.6)sp(1,q.x-q.vx*.01,q.y-q.vy*.01,rnd(-8,8),rnd(-8,8),.3,8+q.c*6,a.k);
if(q.c>.5&&M.random()<.5)sp(5,q.x-q.vx*.02,q.y-q.vy*.02,rnd(-24,24),rnd(-24,24),rnd(.3,.5),1.5,a.s,60,2);
let h=0;
if(!p.dead&&p.inv<=0&&M.abs(q.x-p.x)<14&&q.y>p.y-62&&q.y<p.y+2){hurtP(q.dm,q.x-sgn(q.vx)*50);h=1}
if(!h)for(const s of S){
if(s.dead)continue;
if(M.abs(q.x-s.x)<14&&q.y>s.y-62&&q.y<s.y+2){hurtS(s,q.dm,q.x);h=1;break}
}
if(h||q.l>4||q.y>GY){
if(!h)dust(q.x,GY,3,60);
ring(q.x,q.y,a.c,16);
for(let k=0;k<5;k++)sp(3,q.x,q.y,rnd(-120,120),rnd(-160,40),rnd(.2,.4),1.6,a.c,300,2);
Pr.splice(i,1);
}
}
function duAd(q){
const a=AE[q.v];
gl(a.k,q.x,q.y,17+q.c*8,.7);
const n=q.tr.length;
if(n>1){
g.save();
g.globalCompositeOperation='lighter';
g.strokeStyle='rgba('+a.c+',.5)';g.lineWidth=2+q.c*2;g.lineCap='round';
g.beginPath();g.moveTo(q.tr[0].x,q.tr[0].y);
for(let i=1;i<n;i++)g.lineTo(q.tr[i].x,q.tr[i].y);
g.lineTo(q.x,q.y);g.stroke();
g.restore();
}
g.save();
g.translate(q.x,q.y);g.rotate(M.atan2(q.vy,q.vx));
g.fillStyle=a.g;g.fillRect(-16,-1,16,2);
g.fillStyle=a.f;g.beginPath();g.moveTo(5,0);g.lineTo(-2,-3.2);g.lineTo(-2,3.2);g.closePath();g.fill();
g.fillStyle=a.h;g.fillRect(-18,-2.4,4,1.2);g.fillRect(-18,1.2,4,1.2);
g.restore();
}
function duHud(){
const e=E.find(o=>o.bot),bw=M.min(220,VW*.3),bx=VW-bw-14,by=14;
if(e){
const r=M.max(0,e.hp/e.mh);
g.fillStyle='rgba(8,10,16,.55)';g.fillRect(bx-1,by-1,bw+2,9);
g.fillStyle='#d9534f';g.fillRect(bx,by,bw*r,7);
g.fillStyle='rgba(255,255,255,.14)';g.fillRect(bx,by,bw*r,2);
g.textAlign='right';g.font='600 12px system-ui,sans-serif';g.fillStyle='rgba(228,234,248,.92)';
g.fillText(pvOn?pvO.nm+'  -  '+pvRN[pvO.tr]:'Bot  '+AE[4].n,bx+bw,by+26,bw);
g.textAlign='left';
}
if(duS==0&&!inMenu){
const n=M.ceil(duT),fr=1-(duT%1||1),z=1+.35*(1-fr);
g.textAlign='center';
g.fillStyle='rgba(232,223,204,.85)';g.font='600 14px system-ui,sans-serif';
g.fillText('Babak '+duR,VW/2,VH*.4-52);
g.globalAlpha=M.max(.25,1-fr*.6);
g.fillStyle='#ffe09a';g.font='700 '+M.round(64*z)+'px system-ui,sans-serif';
g.fillText(n,VW/2,VH*.4+16);
g.globalAlpha=1;g.textAlign='left';
}else if(duG>0){
duG-=DT;
g.textAlign='center';g.globalAlpha=M.max(0,M.min(1,duG*2.5));
g.fillStyle='#ffd45a';g.font='700 46px system-ui,sans-serif';
g.fillText('MULAI!',VW/2,VH*.4+12);
g.globalAlpha=1;g.textAlign='left';
}
if(duF==1&&duS==2){
const k=M.min(1,(4.2-duT)*1.2);
g.fillStyle='rgba(8,6,10,'+.4*k+')';g.fillRect(0,0,VW,VH);
g.textAlign='center';g.fillStyle='rgba(255,236,170,'+k+')';g.font='600 22px system-ui,sans-serif';
g.fillText('Menang',VW/2,VH*.4);
g.font='13px system-ui,sans-serif';g.fillStyle='rgba(235,225,210,'+.6*k+')';
g.fillText('Skor '+duP+' - '+duB,VW/2,VH*.4+26);
if(pvOn)g.fillText(pvD,VW/2,VH*.4+48);
g.textAlign='left';
}
}
