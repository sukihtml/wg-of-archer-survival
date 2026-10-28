function frame(now){
requestAnimationFrame(frame);
if(now-lfr<FPI[ST.fp])return;
lfr=now;
try{step(now)}catch(x){slRs();console.error(x);cv.width=cv.width}
}
function step(now){
if(W!==innerWidth||H!==innerHeight)rs();
DT=M.max(0,M.min(.033,(now-last)/1000))||0;last=now;if(paused||xzF)DT=0;T+=DT;
if(inMenu&&cmb.on)cmbReset();
const wd=cmb.on?DT*cmb.ts:DT;
if(!paused&&!xzF){
if(inMenu){upMn(DT);upP(DT)}else{if(cmb.on)cmbUp(DT);else{upd(DT);cmbPoll(DT)}upH(wd);spw(wd);upE(wd);upS(wd);upPr(wd);upA(wd);upP(wd);xzUp(wd)}
}
if(SPC)spUpd(DT);
const cc=p.dr?p.ch:0;
if(cc!==lc){fb.style.setProperty('--c',cc.toFixed(3));lc=cc}
const qv=1-p.kc/SKC;
if(qv!==lq){qb.style.setProperty('--v',qv.toFixed(3));qb.classList.toggle('rd',qv>=1);lq=qv}
const uv=p.ut>0?p.ut/UD:p.uc;
if(uv!==lu){ub.style.setProperty('--v',uv.toFixed(3));ub.classList.toggle('rd',uv>=1);lu=uv}
const wv=p.go>0?1:1-p.gc/GCD;
if(wv!==lw){vb.style.setProperty('--v',wv.toFixed(3));vb.classList.toggle('rd',wv>=1);lw=wv}
const dv=SPC?(p.k3>0?1-p.k3/SK3:1):(p.dn>0?p.dn/DD:p.dc);
if(dv!==lx){mdb.style.setProperty('--v',dv.toFixed(3));mdb.classList.toggle('rd',dv>=1);lx=dv}
cmbBtn();
cam+=((cmb.on?cmb.fx-VW*.5:p.x-VW*(inMenu&&mView!='h'&&W>H?.2:.5)+p.f*50)-cam)*M.min(1,DT*3.2);
shake*=M.exp(-DT*14);
g.setTransform(dd*sc,0,0,dd*sc,0,0);
g.globalAlpha=1;g.globalCompositeOperation='source-over';
bg();fxDomBg();
g.save();g.translate(-cam+(M.random()-.5)*shake,(M.random()-.5)*shake);
ground();fxDomGr();
slOn();
for(const s of S)if(!s.dead)drawS(s);
for(const e of E)drawEn(e);
slOff();
const hh=M.min(1,(GY-p.y)/200);
shd(p.x,30*(1-hh*.5),.42*(1-hh));shd(p.x,16*(1-hh*.5),.5*(1-hh));
slOn();
fxGr();
fxEv();
g.save();
if(p.dead){g.translate(p.x,p.y);g.rotate(-p.f*M.min(1.45,p.dead*4));g.translate(-p.x,-p.y)}
if(SPC)spDraw();else{drawP(0);drawSf();drawP(1)}
g.restore();
if(p.hu>0)gl('r',p.x,p.y-30,34,p.hu*2.4);
drawA();drawPr();drawGw();drawPt();fxDomSl();cmbDraw();
slOff();
xzDraw();
if(ST.fl!=5)fxTop();
bars();
g.restore();
fireflies();fxDomTop();
if(!inMenu){hud();xzHud();if(cmb.on)cmbHud()}
if(paused){
shake=0;
g.fillStyle='rgba(8,10,16,.5)';g.fillRect(0,0,VW,VH);
g.textAlign='center';g.fillStyle='rgba(235,225,210,.95)';g.font='600 22px system-ui,sans-serif';
g.fillText('Jeda',VW/2,VH*.4);
g.font='13px system-ui,sans-serif';g.fillStyle='rgba(235,225,210,.6)';
g.fillText(coarse?'':'Tekan P atau tombol jeda untuk lanjut',VW/2,VH*.4+26);
}
if(!inMenu&&T-WV.ts<9&&!coarse){
g.globalAlpha=M.min(1,(9-T+WV.ts)/2)*.6;g.fillStyle='#dce4f5';g.font='13px system-ui,sans-serif';g.textAlign='center';
g.fillText('A D jalan   W lompat   J / klik tahan: panah   K / klik kanan: perisai'+(hasSk('q')?'   Q skill':'')+(hasSk('u')?'   E ultimate':'')+(hasSk('v')?'   R Gelombang Elektrik':'')+(hasSk('m')?'   T '+(SPC?spMn():'Domain'):'')+(hasSk('x')?'   X Combo Duo':''),VW/2,30);
g.globalAlpha=1;
}
}
const coarse=matchMedia('(pointer:coarse)').matches;
let last=performance.now(),lfr=0;
requestAnimationFrame(frame);
