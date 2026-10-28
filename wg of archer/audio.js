(function(){
const AUK='pemanah_audio_v1',AUL=[0,.32,.6,1];
if(ST.am==null)ST.am=2;
if(ST.as==null)ST.as=2;
try{const o=JSON.parse(localStorage.getItem(AUK)||'null');if(o){if(o.am!=null)ST.am=M.max(0,M.min(3,o.am|0));if(o.as!=null)ST.as=M.max(0,M.min(3,o.as|0))}}catch(x){}
const auSave=()=>{try{localStorage.setItem(AUK,JSON.stringify({am:ST.am,as:ST.as}))}catch(x){}};
const AU={c:null,mu:null,sx:null,dk:null,lp:null,rv:null,nz:null,bn:null,th:{}};
const MU={gm:-1,bs:0,it:0,t:0,st:0,bar:0,ch:0,r:73.42,ml:0,am:0,hb:0,xl:0,wb:0,fl:0,n:null};
const SX={};
const MR=[[73.42,58.27,87.31,65.41],[73.42,58.27,49,55]];
const MS=[146.83,164.81,174.61,196,220,233.08,261.63,293.66];
const MM=[[0,2,4],[4,2,1,0],[2,4,5,4],[7,5,4],[0,1,2,4,2],[4,5,7,5]];
const BP=[1,0,0,1,1,0,1,0];
const ct=()=>AU.c.currentTime;
const auRun=()=>!!AU.c&&AU.c.state=='running';
const auOn=()=>auRun()&&ST.as>0;
const auOk=(k,ms)=>{const n=performance.now();if(n-(AU.th[k]||0)<ms)return 0;AU.th[k]=n;return 1};
const auPn=x=>M.max(-.75,M.min(.75,(x-p.x)/(VW*.7)));
const auDs=x=>M.max(.2,1-M.abs(x-p.x)/(VW*1.2));

function auIR(c,len,dec){
const n=M.floor(c.sampleRate*len),b=c.createBuffer(2,n,c.sampleRate);
for(let ch=0;ch<2;ch++){
const d=b.getChannelData(ch);let lp=0;
for(let i=0;i<n;i++){
const t=i/n,k=.5+.45*t;
lp+=((M.random()*2-1)*M.pow(1-t,dec)-lp)*(1-k);
d[i]=lp*(i<240?i/240:1);
}
}
return b;
}
function auE(ga,t,a,pk,d){
const q=ga.gain;
q.setValueAtTime(.0001,t);
q.linearRampToValueAtTime(pk,t+a);
q.exponentialRampToValueAtTime(.0001,t+a+d);
}
function auO(n,pn,wet,bus){
const c=AU.c,b=bus||AU.sx;
let o=n;
if(pn&&c.createStereoPanner){const s=c.createStereoPanner();s.pan.value=M.max(-1,M.min(1,pn));o.connect(s);o=s}
o.connect(b);
if(wet>0&&b!==AU.mu){const w=c.createGain();w.gain.value=wet;o.connect(w);w.connect(AU.rv)}
}
function auT(o){
const c=AU.c,t=o.t||c.currentTime,a=o.a||.004,os=c.createOscillator(),ga=c.createGain();
os.type=o.ty||'sine';
os.frequency.setValueAtTime(o.f,t);
if(o.f2)os.frequency.exponentialRampToValueAtTime(o.f2,t+(o.fd||o.d));
if(o.dt)os.detune.value=o.dt;
let n=os;
if(o.lp){const f=c.createBiquadFilter();f.type='lowpass';f.frequency.value=o.lp;f.Q.value=o.q||.7;os.connect(f);n=f}
n.connect(ga);
auE(ga,t,a,o.v,o.d);
os.start(t);os.stop(t+a+o.d+.05);
auO(ga,o.p,o.w,o.b);
}
function auN(o){
const c=AU.c,t=o.t||c.currentTime,a=o.a||.002,s=c.createBufferSource(),f=c.createBiquadFilter(),ga=c.createGain();
s.buffer=o.br?AU.bn:AU.nz;s.loop=true;
f.type=o.ft||'bandpass';f.Q.value=o.q||1;
f.frequency.setValueAtTime(o.f,t);
if(o.f2)f.frequency.exponentialRampToValueAtTime(o.f2,t+(o.fd||o.d));
s.connect(f);f.connect(ga);
auE(ga,t,a,o.v,o.d);
s.start(t,M.random()*1.4);s.stop(t+a+o.d+.05);
auO(ga,o.p,o.w,o.b);
}
function auDuck(l,h,r){
if(!auRun())return;
const q=AU.dk.gain,t=ct();
q.cancelScheduledValues(t);
q.setValueAtTime(q.value,t);
q.linearRampToValueAtTime(l,t+.03);
q.setValueAtTime(l,t+.03+h);
q.linearRampToValueAtTime(1,t+.03+h+r);
}
function auTint(ev,t,j){
if(ev==1)auT({t:t+.005,f:3300*j,f2:2700,d:.3,v:.025,a:.002,w:.4});
else if(ev==2){
auN({t,ft:'lowpass',f:520,f2:160,d:.24,v:.1,a:.01});
for(let i=0;i<3;i++)auN({t:t+.02+i*.03*rnd(.7,1.3),ft:'highpass',f:4500,q:.7,d:.02,v:.05,a:.0004});
}else if(ev==3){
auT({t,f:523*j,d:.5,v:.03,a:.03,w:.5});
auT({t,f:526*j,d:.5,v:.03,a:.03,w:.5});
}else if(ev==4){
auT({t,f:988*j,d:.7,v:.035,a:.005,w:.5});
auT({t,f:1480*j,d:.5,v:.02,a:.005,w:.5});
}else if(ev==5){
auT({t,f:1760*j,f2:1320,d:.4,v:.03,a:.004,w:.5});
auT({t,f:110,f2:70,d:.3,v:.18,a:.003});
}
}

SX.shoot=(c,ev)=>{
if(!auOk('sh',45))return;
const t=ct(),j=rnd(.94,1.07),k=.55+c*.45;
auT({t,ty:'triangle',f:210*j,f2:170*j,d:.16,v:.1*k,a:.001,lp:1500,w:.05});
auT({t,f:150*j,f2:58,d:.1+c*.06,v:.2+c*.22,a:.002});
auN({t,ft:'bandpass',f:3400*j,f2:1300,q:1.6,d:.045,v:.13,a:.0008});
auN({t:t+.01,ft:'bandpass',f:2300*j,f2:620,q:1.2,d:.2+c*.16,v:.07+c*.1,a:.03,w:.08});
if(c>.7)auN({t,ft:'lowpass',f:380,f2:120,q:.7,d:.16,v:.2*c,a:.001});
auTint(ev,t,j);
};
SX.draw=()=>{
if(!auOk('dr',120))return;
const t=ct();
auN({t,ft:'bandpass',f:260,f2:420,q:5,d:.28,v:.04,a:.06});
auT({t,ty:'sawtooth',f:150,f2:210,d:.3,v:.015,a:.08,lp:500});
auN({t:t+.05,ft:'bandpass',f:1700,f2:2400,q:8,d:.12,v:.012,a:.03});
};
SX.full=()=>{
const t=ct();
auT({t,f:660,d:.16,v:.03,a:.002,w:.3});
auN({t,ft:'bandpass',f:2800,q:3,d:.02,v:.05,a:.0005});
};
SX.skill=ev=>{
const t=ct(),j=rnd(.97,1.03);
auN({t,ft:'bandpass',f:3600,f2:600,q:1.2,d:.36,v:.2,a:.015,w:.15});
for(let i=0;i<5;i++)auT({t:t+i*.012,ty:'triangle',f:(190+i*16)*rnd(.97,1.03),f2:150,d:.14,v:.045,a:.001,lp:1500});
auT({t,f:140,f2:44,d:.28,v:.42,a:.002});
auN({t,ft:'lowpass',f:420,f2:110,d:.22,v:.26,a:.001});
auTint(ev,t,j);
};
SX.ult=ev=>{
const t=ct();
auT({t,f:70,f2:24,d:1.5,v:.7,a:.004,w:.25});
auN({t,ft:'lowpass',f:1600,f2:80,d:1.2,v:.5,a:.003,br:1,w:.3});
auN({t,ft:'bandpass',f:300,f2:3000,q:1.4,d:.5,v:.18,a:.6,w:.3});
for(const f of[440,659.25,880])auT({t,f,d:2.2,v:.035,a:.5,w:.6});
auTint(ev,t,1);
auDuck(.4,.5,1.2);
};
SX.rain=()=>{
if(!auOk('rn',55))return;
const t=ct(),pn=rnd(-.8,.8);
auN({t,ft:'highpass',f:rnd(3500,6000),d:.025,v:.04,a:.0006,p:pn});
auT({t:t+.01,f:rnd(180,260),f2:90,d:.05,v:.07,a:.001,p:pn});
};
SX.zapCharge=()=>{
const t=ct();
auT({t,ty:'sawtooth',f:90,f2:1100,fd:.8,d:.08,v:.1,a:.72,lp:2600,w:.2});
auN({t,ft:'bandpass',f:1500,f2:6000,q:2,fd:.8,d:.08,v:.1,a:.72,w:.2});
auT({t,f:50,f2:120,fd:.8,d:.08,v:.15,a:.72});
};
SX.zap=()=>{
const t=ct();
auN({t,ft:'highpass',f:1200,q:.7,d:.18,v:.55,a:.0004,w:.2});
auT({t,ty:'sawtooth',f:1400,f2:60,d:.5,v:.26,a:.001,lp:3000,w:.25});
auT({t,f:62,f2:30,d:.8,v:.6,a:.002,w:.15});
auN({t,ft:'lowpass',f:800,f2:90,d:.7,v:.4,a:.002,br:1,w:.2});
for(let i=0;i<8;i++)auN({t:t+.05+i*.07*rnd(.7,1.3),ft:'bandpass',f:rnd(2500,7000),q:3,d:.04,v:rnd(.06,.15),a:.0005,p:rnd(-.5,.5)});
auDuck(.4,.4,.8);
};
SX.crackle=()=>{
if(!auOk('cr',45))return;
auN({t:ct(),ft:'bandpass',f:rnd(2500,7500),q:3,d:.035,v:rnd(.04,.09),a:.0005,p:rnd(-.5,.5)});
};
SX.dom=()=>{
const t=ct();
auT({t,f:60,f2:26,d:2,v:.65,a:.004,w:.3});
auN({t,ft:'lowpass',f:900,f2:60,d:2,v:.45,a:.003,br:1,w:.3});
auT({t,ty:'sawtooth',f:55,d:3.4,v:.1,a:.9,lp:260,w:.6});
auT({t,ty:'sawtooth',f:58.27,d:3.4,v:.08,a:.9,lp:260,w:.6});
auN({t,ft:'bandpass',f:200,f2:2200,q:1.5,d:.9,v:.18,a:.8,w:.4});
auDuck(.3,1.2,1.5);
};
SX.slash=()=>{
if(!auOk('sl',50))return;
auN({t:ct(),ft:'bandpass',f:rnd(2500,5200),f2:rnd(900,1600),q:2.5,d:.1,v:.07,a:.001,p:rnd(-.8,.8),w:.1});
};
SX.domFin=()=>{
const t=ct();
auN({t,ft:'highpass',f:900,d:.3,v:.5,a:.0005,w:.3});
auT({t,f:70,f2:24,d:1.4,v:.75,a:.002,w:.25});
auN({t,ft:'lowpass',f:1500,f2:70,d:1.2,v:.5,a:.002,br:1,w:.3});
auT({t:t+.05,ty:'sawtooth',f:880,f2:110,d:.6,v:.12,a:.002,lp:2800,w:.3});
auDuck(.3,.6,1.2);
};
SX.hit=e=>{
if(!auOk('ht',28))return;
const t=ct(),pn=auPn(e.x),k=auDs(e.x),j=rnd(.92,1.08),ty=e.boss?9:e.t;
if(ty==9){
auT({t,f:95*j,f2:42,d:.24,v:.4*k,a:.002,p:pn});
auN({t,ft:'lowpass',f:520,f2:140,d:.18,v:.28*k,a:.001,p:pn});
auN({t,ft:'bandpass',f:1900*j,q:1.5,d:.04,v:.11*k,a:.0006,p:pn,w:.1});
}else if(ty==2){
for(const r of[[1,.2,.1],[2.27,.13,.07],[3.44,.09,.05]])auT({t,ty:'triangle',f:560*j*r[0],d:r[1],v:r[2]*k,a:.0006,p:pn,w:.12});
auN({t,ft:'highpass',f:3200,d:.025,v:.12*k,a:.0005,p:pn});
auT({t,f:120*j,f2:62,d:.1,v:.2*k,a:.001,p:pn});
}else if(ty==1){
auT({t,ty:'triangle',f:820*j,f2:560,d:.06,v:.12*k,a:.0006,p:pn});
auN({t,ft:'bandpass',f:2400*j,q:2.2,d:.035,v:.14*k,a:.0006,p:pn});
auT({t,f:140*j,f2:80,d:.08,v:.16*k,a:.001,p:pn});
}else if(ty==4||ty==5){
auN({t,ft:'bandpass',f:2100*j,f2:900,q:4,d:.14,v:.1*k,a:.004,p:pn,w:.3});
auT({t,f:700*j,f2:430,d:.16,v:.05*k,a:.004,p:pn,w:.3});
auT({t,f:110,f2:60,d:.08,v:.12*k,a:.001,p:pn});
}else{
auT({t,f:135*j,f2:58,d:.11,v:.26*k,a:.001,p:pn});
auN({t,ft:'lowpass',f:700,f2:200,d:.1,v:.24*k,a:.001,p:pn});
auN({t,ft:'bandpass',f:1100*j,q:1,d:.05,v:.09*k,a:.002,p:pn,w:.05});
}
};
SX.kill=e=>{
if(e.boss){SX.bossDie(e);return}
if(!auOk('kl',60))return;
const t=ct(),pn=auPn(e.x),k=auDs(e.x),j=rnd(.93,1.07);
if(e.t==1){
for(let i=0;i<5;i++)auN({t:t+i*.035*rnd(.6,1.4),ft:'bandpass',f:rnd(1500,3200),q:3,d:.03,v:rnd(.06,.11)*k,a:.0006,p:pn});
auT({t,f:100,f2:48,d:.22,v:.22*k,a:.002,p:pn});
}else if(e.t==2){
for(const r of[[1,.5,.09],[2.27,.3,.06]])auT({t,ty:'triangle',f:330*r[0],d:r[1],v:r[2]*k,a:.001,p:pn,w:.2});
auT({t:t+.03,f:90,f2:32,d:.4,v:.38*k,a:.002,p:pn});
auN({t:t+.03,ft:'lowpass',f:700,f2:100,d:.4,v:.25*k,a:.003,p:pn});
}else if(e.t==4||e.t==5){
auN({t,ft:'bandpass',f:1400,f2:300,q:3,d:.5,v:.12*k,a:.01,p:pn,w:.4});
auT({t,f:500,f2:150,d:.45,v:.05*k,a:.01,p:pn,w:.4});
}else{
auT({t,f:105*j,f2:36,d:.3,v:.34*k,a:.002,p:pn});
auN({t,ft:'lowpass',f:600,f2:110,d:.32,v:.2*k,a:.003,p:pn});
}
};
SX.bossDie=e=>{
const t=ct(),pn=auPn(e.x);
auT({t,f:80,f2:24,d:1.6,v:.65,a:.004,p:pn,w:.2});
auN({t,ft:'lowpass',f:1100,f2:70,d:1.6,v:.5,a:.003,br:1,p:pn,w:.3});
auN({t:t+.05,ft:'bandpass',f:1800,f2:300,q:1,d:.6,v:.22,a:.002,p:pn,w:.3});
for(let i=0;i<7;i++)auN({t:t+.15+i*.11*rnd(.7,1.3),ft:'bandpass',f:rnd(500,1400),q:2,d:.07,v:rnd(.08,.16),a:.001,p:pn});
auT({t:t+.35,ty:'sawtooth',f:73.42,d:2.4,v:.06,a:.5,lp:300,w:.6});
auT({t:t+.35,ty:'sawtooth',f:110.13,d:2.4,v:.045,a:.5,lp:300,w:.6});
auDuck(.35,.9,1.2);
};
SX.coin=()=>{
if(!auOk('cn',70))return;
const t=ct(),b=rnd(.97,1.04);
auT({t,f:2093*b,d:.14,v:.06,a:.001,w:.2});
auT({t,f:3136*b,d:.08,v:.035,a:.001,w:.2});
auT({t:t+.055,f:2794*b,d:.22,v:.06,a:.001,w:.25});
auT({t,f:5200*b,d:.04,v:.015,a:.0005});
};
SX.hurt=()=>{
if(!auOk('hp',90))return;
const t=ct();
auT({t,f:105,f2:46,d:.24,v:.5,a:.001});
auN({t,ft:'lowpass',f:1000,f2:180,d:.22,v:.36,a:.001});
auN({t,ft:'bandpass',f:2600,q:1.4,d:.035,v:.1,a:.0006,w:.08});
auT({t:t+.02,f:310,f2:230,d:.35,v:.025,a:.004,w:.4});
auDuck(.5,.18,.5);
};
SX.block=()=>{
if(!auOk('bk',80))return;
const t=ct(),j=rnd(.95,1.05);
for(const r of[[1,.4,.12],[2.32,.26,.08],[3.7,.16,.05]])auT({t,ty:'triangle',f:620*j*r[0],d:r[1],v:r[2],a:.0005,w:.18});
auN({t,ft:'highpass',f:2800,d:.03,v:.14,a:.0004});
auT({t,f:170,f2:80,d:.1,v:.22,a:.001});
};
SX.sq=s=>{
if(!auOk('sq',70))return;
const t=ct(),pn=auPn(s.x),k=auDs(s.x)*.7;
auT({t,f:120,f2:55,d:.1,v:.2*k,a:.001,p:pn});
auN({t,ft:'lowpass',f:800,f2:200,d:.1,v:.16*k,a:.001,p:pn});
};
SX.sqDown=s=>{
const t=ct(),pn=auPn(s.x),k=auDs(s.x);
auT({t,f:100,f2:36,d:.35,v:.3*k,a:.002,p:pn});
auN({t,ft:'lowpass',f:700,f2:100,d:.35,v:.2*k,a:.003,p:pn});
};
SX.swing=e=>{
if(!auOk('sw',90))return;
const t=ct(),pn=auPn(e.x),k=auDs(e.x),h=e.boss||e.t==2;
auN({t,ft:'bandpass',f:h?520:900,f2:h?160:320,q:1.1,d:h?.26:.15,v:(h?.18:.1)*k,a:.03,p:pn});
if(h)auT({t:t+.08,f:80,f2:44,d:.2,v:.18*k,a:.004,p:pn});
};
SX.slam=e=>{
const t=ct(),x=e.x+e.f*97,pn=auPn(x),k=auDs(x);
auT({t,f:90,f2:28,d:1,v:.75*k,a:.002,p:pn,w:.2});
auN({t,ft:'lowpass',f:1400,f2:90,d:.9,v:.55*k,a:.002,br:1,p:pn,w:.25});
for(let i=0;i<6;i++)auN({t:t+.03+i*.05*rnd(.6,1.4),ft:'bandpass',f:rnd(700,2600),q:2,d:.06,v:rnd(.05,.12)*k,a:.0008,p:pn});
auDuck(.45,.3,.7);
};
SX.cast=e=>{
if(!auOk('cs',150))return;
const t=ct(),pn=auPn(e.x),k=auDs(e.x);
auT({t,f:280,f2:760,d:.3,v:.08*k,a:.02,p:pn,w:.4});
auN({t,ft:'bandpass',f:900,f2:2600,q:3,d:.28,v:.06*k,a:.03,p:pn,w:.4});
};
SX.eArrow=e=>{
const t=ct(),pn=auPn(e.x),k=auDs(e.x);
auT({t,ty:'triangle',f:150,f2:120,d:.2,v:.1*k,a:.001,lp:1000,p:pn});
auN({t,ft:'bandpass',f:2600,f2:500,q:1.2,d:.28,v:.12*k,a:.01,p:pn,w:.2});
auT({t,f:90,f2:40,d:.18,v:.25*k,a:.002,p:pn});
};
SX.squad=(id,x)=>{
if(!auOk('sd'+id,70))return;
const t=ct(),pn=auPn(x),k=auDs(x)*.7,j=rnd(.94,1.06);
if(id<2){
auT({t,ty:'triangle',f:(id?260:200)*j,f2:170,d:.12,v:.07*k,a:.001,lp:1400,p:pn});
auN({t,ft:'bandpass',f:2800*j,f2:900,q:1.4,d:.12,v:.08*k,a:.005,p:pn});
auT({t,f:130,f2:60,d:.08,v:.12*k,a:.001,p:pn});
}else if(id==2){
auN({t,ft:'highpass',f:2500,d:.09,v:.1*k,a:.0006,p:pn,w:.1});
auT({t,ty:'sawtooth',f:1200*j,f2:160,d:.14,v:.05*k,a:.001,lp:2400,p:pn});
auT({t,f:90,f2:50,d:.1,v:.15*k,a:.001,p:pn});
}else{
auN({t,ft:'bandpass',f:700,f2:220,q:1,d:.2,v:.14*k,a:.035,p:pn});
auT({t:t+.06,f:75,f2:40,d:.2,v:.22*k,a:.002,p:pn});
auN({t:t+.06,ft:'lowpass',f:700,f2:150,d:.16,v:.16*k,a:.001,p:pn});
}
};
SX.wave=n=>{
const t=ct(),b=n%5==0;
auT({t,f:105,f2:40,d:.9,v:.55,a:.003,w:.3});
auN({t,ft:'lowpass',f:700,f2:70,d:.6,v:.35,a:.003,br:1,w:.3});
auT({t:t+.3,f:92,f2:38,d:.8,v:.38,a:.003,w:.3});
auT({t,ty:'sawtooth',f:b?55:73.42,d:2.4,v:.07,a:.45,lp:b?240:320,w:.6});
auT({t,ty:'sawtooth',f:b?58.27:110.13,d:2.4,v:.05,a:.45,lp:b?240:320,w:.6});
if(b)auN({t:t+.2,ft:'bandpass',f:140,f2:600,q:1,d:1.2,v:.15,a:.9,w:.4});
};
SX.clear=()=>{
const t=ct();
for(const r of[[293.66,0],[440,.12],[587.33,.24]])auT({t:t+r[1],f:r[0],d:1.4,v:.04,a:.01,w:.6});
auT({t,ty:'triangle',f:146.83,d:1.6,v:.05,a:.02,w:.5});
};
SX.bossIn=()=>{
const t=ct();
auT({t,ty:'sawtooth',f:41,f2:58,fd:1.8,d:.1,a:1.7,v:.14,lp:200,w:.5});
auT({t,ty:'sawtooth',f:43.5,f2:61.5,fd:1.8,d:.1,a:1.7,v:.12,lp:200,w:.5});
auN({t,ft:'lowpass',f:120,f2:500,fd:1.8,d:.1,a:1.7,v:.4,br:1,w:.3});
auT({t:t+1.7,f:70,f2:26,d:1.4,v:.6,a:.003,w:.3});
auDuck(.5,1.8,.8);
};
SX.bstep=e=>{
if(!auOk('bs',160))return;
const t=ct(),k=auDs(e.x),pn=auPn(e.x);
auT({t,f:70,f2:34,d:.3,v:.4*k,a:.002,p:pn,w:.1});
auN({t,ft:'lowpass',f:500,f2:120,d:.22,v:.25*k,a:.002,br:1,p:pn});
};
SX.jump=()=>{
if(!auOk('jp',90))return;
const t=ct();
auN({t,ft:'bandpass',f:500,f2:1100,q:.9,d:.12,v:.05,a:.02});
auT({t,f:170,f2:110,d:.1,v:.08,a:.003});
};
SX.land=k=>{
const t=ct();
auT({t,f:100,f2:48,d:.14,v:.14+.2*k,a:.001});
auN({t,ft:'lowpass',f:800,f2:200,d:.1,v:.1+.14*k,a:.001});
};
SX.step=h=>{
const t=ct();
auN({t,ft:'lowpass',f:rnd(650,950),f2:260,q:.8,d:.06,v:h?.07:.05,a:.001});
auN({t,ft:'bandpass',f:rnd(2600,3600),q:2,d:.02,v:.015,a:.0006});
auT({t,f:rnd(95,120),f2:60,d:.05,v:.05,a:.001});
};
SX.flap=()=>{
if(!auOk('fl',180))return;
auN({t:ct(),ft:'bandpass',f:380,f2:950,q:.8,d:.18,v:.06,a:.05,w:.12});
};
SX.shield=()=>{
const t=ct();
auN({t,ft:'bandpass',f:700,f2:1700,q:1.5,d:.1,v:.06,a:.01});
auT({t,ty:'triangle',f:330,f2:260,d:.12,v:.05,a:.002,lp:1600});
};
SX.heart=()=>{
const t=ct();
auT({t,f:64,f2:40,d:.16,v:.42,a:.002});
auT({t:t+.2,f:58,f2:38,d:.2,v:.3,a:.002});
auN({t,ft:'lowpass',f:200,d:.08,v:.12,a:.002});
};
SX.death=()=>{
const t=ct();
auT({t,f:90,f2:30,d:1.4,v:.6,a:.003,w:.3});
auN({t,ft:'lowpass',f:900,f2:70,d:1.2,v:.4,a:.003,br:1,w:.3});
auT({t:t+.1,ty:'sawtooth',f:55,f2:36,d:2.2,v:.08,a:.3,lp:220,w:.6});
auDuck(.2,1,1.5);
};
SX.drop=()=>{
if(!auOk('dp',150))return;
const t=ct();
auT({t,f:1568,d:.28,v:.035,a:.002,w:.5});
auT({t:t+.04,f:2349,d:.3,v:.025,a:.002,w:.5});
};
SX.item=k=>{
const t=ct();
if(k=='h'){
auT({t,f:392,d:.5,v:.07,a:.005,w:.4});
auT({t:t+.08,f:587.33,d:.7,v:.07,a:.005,w:.4});
auT({t,ty:'triangle',f:196,d:.5,v:.08,a:.01});
}else if(k=='s'){
auT({t,f:1174,d:.7,v:.045,a:.02,w:.5});
auT({t,f:1760,d:.7,v:.035,a:.02,w:.5});
auN({t,ft:'bandpass',f:5000,f2:9000,q:2,d:.4,v:.04,a:.05,w:.4});
}else if(k=='d'){
auT({t,ty:'sawtooth',f:200,f2:700,d:.3,v:.07,a:.01,lp:1800,w:.2});
auT({t,f:880,d:.4,v:.05,a:.005,w:.3});
auT({t,f:100,f2:60,d:.15,v:.2,a:.002});
}else{
auT({t,f:2093,d:.14,v:.06,a:.001,w:.2});
auT({t:t+.06,f:2794,d:.22,v:.06,a:.001,w:.25});
auT({t:t+.12,f:3136,d:.3,v:.05,a:.001,w:.3});
}
};
SX.open=()=>{
const t=ct();
auT({t,f:392,f2:523,d:.6,a:.1,v:.04,w:.5});
auT({t,f:587,d:.7,a:.12,v:.03,w:.5});
auN({t,ft:'bandpass',f:900,f2:2400,q:1.2,d:.25,v:.04,a:.08,w:.2});
};
SX.pick=()=>{
const t=ct();
for(const r of[[293.66,0],[440,.05],[587.33,.1]])auT({t:t+r[1],f:r[0],d:.8,v:.05,a:.004,w:.5});
auT({t,f:90,f2:55,d:.15,v:.2,a:.002});
};
SX.pz=on=>{
const t=ct();
auT({t,f:on?420:560,f2:on?300:760,d:.12,v:.05,a:.002,lp:1800});
};
SX.tap=()=>{
if(!auOk('tp',40))return;
const t=ct();
auT({t,ty:'triangle',f:540*rnd(.97,1.03),f2:380,d:.06,v:.07,a:.001,lp:2000});
auN({t,ft:'bandpass',f:2000,q:2,d:.02,v:.05,a:.0005});
};
SX.buy=()=>{
const t=ct();
auT({t,f:2093,d:.12,v:.06,a:.001,w:.2});
auT({t,f:3136,d:.07,v:.035,a:.001,w:.2});
auT({t:t+.06,f:2794,d:.25,v:.06,a:.001,w:.25});
auT({t,f:5200,d:.05,v:.02,a:.0005});
auT({t,f:120,f2:70,d:.12,v:.14,a:.001});
};
SX.claim=()=>{
const t=ct();
for(const r of[[587.33,0],[880,.09],[1174.66,.18]])auT({t:t+r[1],f:r[0],d:.6,v:.05,a:.003,w:.5});
auT({t,f:2093,d:.1,v:.03,a:.001,w:.2});
};
SX.deny=()=>{
const t=ct();
auT({t,f:170,f2:140,d:.1,v:.08,a:.001,lp:600});
auT({t:t+.1,f:150,f2:120,d:.14,v:.08,a:.001,lp:600});
};
SX.start=()=>{
const t=ct();
auN({t,ft:'bandpass',f:200,f2:1600,q:1,d:.1,v:.14,a:.4,w:.3});
auT({t,f:70,f2:44,d:.6,v:.28,a:.004,w:.3});
};
for(const k in SX){
const f=SX[k];
SX[k]=function(){
if(!auOn())return;
try{return f.apply(null,arguments)}catch(x){}
};
}

function auCello(f,t,d,v){
const c=AU.c,ga=c.createGain(),lp=c.createBiquadFilter(),vb=c.createOscillator(),vg=c.createGain();
lp.type='lowpass';lp.Q.value=1.2;
lp.frequency.setValueAtTime(500,t);
lp.frequency.linearRampToValueAtTime(1500,t+d*.45);
lp.frequency.linearRampToValueAtTime(600,t+d);
vb.frequency.value=5.1;
vg.gain.setValueAtTime(0,t);
vg.gain.linearRampToValueAtTime(5,t+d*.6);
vb.connect(vg);
for(const dt of[-6,6]){
const o=c.createOscillator();
o.type='sawtooth';o.frequency.value=f;o.detune.value=dt;
vg.connect(o.detune);o.connect(lp);
o.start(t);o.stop(t+d+.8);
}
vb.start(t);vb.stop(t+d+.8);
ga.gain.setValueAtTime(.0001,t);
ga.gain.linearRampToValueAtTime(v,t+.5);
ga.gain.setValueAtTime(v,t+d*.6);
ga.gain.exponentialRampToValueAtTime(.0001,t+d+.6);
lp.connect(ga);ga.connect(AU.mu);
}
const mDr=(t,v,f)=>{
auT({t,f,f2:f*.38,d:.4,v:.9*v,a:.002,b:AU.mu});
auN({t,ft:'lowpass',f:420,f2:120,d:.12,v:.5*v,a:.001,b:AU.mu});
auN({t,ft:'bandpass',f:600,q:2,d:.05,v:.3*v,a:.0008,b:AU.mu});
};
const mTk=(t,v)=>{
auN({t,ft:'bandpass',f:2400,q:4,d:.03,v:.5*v,a:.0005,b:AU.mu});
auT({t,f:900,f2:700,d:.04,v:.3*v,a:.0005,b:AU.mu});
};
const mTm=(t,v,f)=>{
auT({t,f,f2:f*.55,d:.45,v:.7*v,a:.002,b:AU.mu});
auN({t,ft:'bandpass',f:900,q:2,d:.05,v:.2*v,a:.0008,b:AU.mu});
};
const mSh=(t,v)=>auN({t,ft:'highpass',f:7000,d:.06,v,a:.002,b:AU.mu});
const mSb=(t,v,r)=>{
for(const dt of[-9,9])auT({t,ty:'sawtooth',f:r*2,dt,d:.7,v,a:.012,lp:700,q:1.8,b:AU.mu});
auT({t,f:r,d:.9,v:v*1.2,a:.01,b:AU.mu});
};
const mGl=(f,t,v)=>{
auT({t,f,d:3,v,a:.01,b:AU.mu});
auT({t,f:f*2.01,d:1.6,v:v*.4,a:.01,b:AU.mu});
};

function auMu(){
const c=AU.c,n={};
const mk=(ty,f,dt,v,dst)=>{
const o=c.createOscillator(),ga=c.createGain();
o.type=ty;o.frequency.value=f;o.detune.value=dt;ga.gain.value=v;
o.connect(ga);ga.connect(dst);o.start();
return o;
};
const dl=c.createBiquadFilter();dl.type='lowpass';dl.frequency.value=360;dl.Q.value=.9;
const dg=c.createGain();dg.gain.value=0;
dl.connect(dg);dg.connect(AU.mu);
n.a=mk('sawtooth',73.42,0,.22,dl);
n.b=mk('sawtooth',73.42,8,.2,dl);
n.c=mk('sawtooth',110.13,-6,.12,dl);
n.e=mk('triangle',146.84,4,.1,dl);
n.x=mk('triangle',220.26,-3,.05,dl);
const lf=c.createOscillator(),lg=c.createGain();
lf.frequency.value=.06;lg.gain.value=80;lf.connect(lg);lg.connect(dl.frequency);lf.start();
const sg=c.createGain();sg.gain.value=0;sg.connect(AU.mu);
n.s=mk('sine',73.42,0,1,sg);
const tg=c.createGain();tg.gain.value=0;tg.connect(AU.mu);
n.t=mk('sine',155.6,0,1,tg);
const ws=c.createBufferSource(),wf=c.createBiquadFilter(),wg=c.createGain();
ws.buffer=AU.bn;ws.loop=true;wf.type='bandpass';wf.frequency.value=520;wf.Q.value=.5;wg.gain.value=0;
ws.connect(wf);wf.connect(wg);wg.connect(AU.mu);ws.start();
const wl=c.createOscillator(),wlg=c.createGain();
wl.frequency.value=.045;wlg.gain.value=260;wl.connect(wlg);wlg.connect(wf.frequency);wl.start();
const wl2=c.createOscillator(),wl2g=c.createGain();
wl2.frequency.value=.11;wl2g.gain.value=.012;wl2.connect(wl2g);wl2g.connect(wg.gain);wl2.start();
const bl=c.createBiquadFilter();bl.type='lowpass';bl.frequency.value=1500;bl.Q.value=.6;
const bt=c.createGain();bt.gain.value=.5;
const bg=c.createGain();bg.gain.value=0;
bl.connect(bt);bt.connect(bg);bg.connect(AU.mu);
n.f=mk('sawtooth',293.66,0,.2,bl);
n.g=mk('sawtooth',440,6,.15,bl);
n.h=mk('sawtooth',311.13,-4,.1,bl);
const tl=c.createOscillator(),tlg=c.createGain();
tl.frequency.value=7.5;tlg.gain.value=.45;tl.connect(tlg);tlg.connect(bt.gain);tl.start();
n.dl=dl;n.dg=dg;n.sg=sg;n.tg=tg;n.wg=wg;n.bg=bg;
MU.n=n;
}
function auCh(i,tc){
const n=MU.n,r=MR[MU.gm?1:0][i%4],t=ct();
n.a.frequency.setTargetAtTime(r,t,tc);
n.b.frequency.setTargetAtTime(r,t,tc);
n.c.frequency.setTargetAtTime(r*1.5,t,tc);
n.e.frequency.setTargetAtTime(r*2,t,tc);
n.x.frequency.setTargetAtTime(r*3,t,tc);
n.s.frequency.setTargetAtTime(r,t,tc);
n.t.frequency.setTargetAtTime(r*2.119,t,tc);
n.f.frequency.setTargetAtTime(r*4,t,tc);
n.g.frequency.setTargetAtTime(r*6,t,tc);
n.h.frequency.setTargetAtTime(r*4.238,t,tc);
MU.r=r;
}
function auStp(t,s,sd){
const it=MU.it,gm=MU.gm,bs=MU.bs;
if(s==0&&t>=MU.ml){
if(!gm||(it<.55&&!bs)){
const m=MM[M.floor(M.random()*MM.length)];
let to=t+.1;
m.forEach((k,i)=>{const d=i?rnd(1.8,2.6):rnd(2.6,3.6);auCello(MS[k],to,d,.09);to+=d*.78});
MU.ml=to+(gm?rnd(14,26):rnd(9,16));
}else MU.ml=t+8;
}
if(!gm){
if(s==0&&MU.bar%2==0)mDr(t,.14,96);
return;
}
if(p.dead)return;
if(bs){
if(BP[s])mDr(t,s==0?.46:.34,s==0?112:104);
if(s==0&&MU.bar%2==0)mSb(t,.11,MU.r);
if(MU.bar%2==1&&s>=6)mTm(t,.3,s==7?128:150);
mSh(t,.02+.012*(s&1));
return;
}
if(s==0&&(it>.2||MU.bar%2==0))mDr(t,.2+.22*it,108);
if(s==4&&it>.22)mDr(t,.12+.2*it,100);
if(s==5&&it>.55)mDr(t,.1+.1*it,96);
if((s==2||s==6)&&it>.4&&M.random()<.8)mTk(t,.07+.06*it);
if((s&1)&&it>.65)mSh(t,.016+.016*it);
if(s==7&&MU.bar%4==3&&it>.75){mTm(t,.22,150);mTm(t+sd*.5,.2,128)}
}
function auSch(now){
const sd=60/(MU.gm?(MU.bs?92:64+MU.it*22):58)/2;
if(MU.t<now-.5)MU.t=now+.05;
while(MU.t<now+.4){
auStp(MU.t,MU.st,sd);
MU.t+=sd;MU.st++;
if(MU.st>=8){MU.st=0;MU.bar++;if(MU.bar%4==0){MU.ch=(MU.ch+1)%4;auCh(MU.ch,.9)}}
}
}
function auAmb(now){
if(now<MU.am)return;
MU.am=now+rnd(9,20);
if(MU.gm&&p.dead)return;
const r=M.random(),t=now+.05,pn=rnd(-.7,.7);
if(r<.4){
for(let i=0;i<2;i++)auN({t:t+i*.32,ft:'bandpass',f:rnd(150,220),q:2,d:.25,v:.25,a:.002,b:AU.mu,p:pn});
}else if(r<.75&&(!MU.gm||MU.it<.6)){
mGl([587.33,698.46,880,1046.5][M.floor(M.random()*4)],t,.03);
}else{
auN({t,ft:'bandpass',f:300,f2:900,q:.7,d:2,v:.08,a:1.5,br:1,b:AU.mu,p:pn});
}
}
function auPoll(){
const c=AU.c;
if(!c||c.state!='running'||!MU.n)return;
const now=c.currentTime,n=MU.n,gm=inMenu?0:1;
if(gm!==MU.gm){
MU.gm=gm;MU.ch=0;MU.bar=0;MU.st=0;MU.it=0;
auCh(0,1.2);
MU.ml=now+(gm?10:3);MU.am=now+(gm?6:5);
}
MU.bs=gm&&E.some(e=>e.boss&&!e.dd)?1:0;
let tg=0;
if(gm&&!p.dead)tg=MU.bs?1:M.min(1,(WV.n-1)/14)*.75+M.min(1,E.length/9)*.2;
MU.it+=(tg-MU.it)*.12;
const it=MU.it,dead=gm&&p.dead>0,ps=gm&&paused,hp=gm&&!dead&&p.mh>0?p.hp/p.mh:1;
AU.mu.gain.setTargetAtTime(AUL[ST.am]*.85*(dead?.25:ps?.55:1),now,.35);
let cut=16000;
if(dead)cut=320;else if(ps)cut=650;else if(hp<.35)cut=900*M.pow(17,M.max(0,hp)/.35);
AU.lp.frequency.setTargetAtTime(cut,now,.3);
n.dg.gain.setTargetAtTime(.34+.14*it,now,.8);
n.sg.gain.setTargetAtTime(.22+.1*it,now,.8);
n.tg.gain.setTargetAtTime(.05*it,now,.8);
n.wg.gain.setTargetAtTime(gm?.05-.02*it:.06,now,1.5);
n.bg.gain.setTargetAtTime(MU.bs?.1:0,now,.6);
n.dl.frequency.setTargetAtTime(gm?330+520*it+(MU.bs?220:0):360,now,.8);
if(ST.am>0&&!ps){auSch(now);auAmb(now)}
if(gm&&!dead&&!ps&&hp<.3&&now>=MU.hb){SX.heart();MU.hb=now+.55+hp*3}
if(gm){
if(XI.length>MU.xl)SX.drop();
MU.xl=XI.length;
const w=WV.bt>0&&!p.dead?1:0;
if(w&&!MU.wb)SX.clear();
MU.wb=w;
}else{MU.xl=0;MU.wb=0}
}
function auApply(){
if(!AU.c)return;
AU.sx.gain.setTargetAtTime(.9*AUL[ST.as],AU.c.currentTime,.05);
}
function auInit(){
let c=AU.c;
if(c){
if(c.state!='running'&&c.resume){try{const r=c.resume();if(r&&r.catch)r.catch(()=>{})}catch(x){}}
return;
}
const C=window.AudioContext||window.webkitAudioContext;
if(!C)return;
try{c=new C({latencyHint:'interactive'})}catch(x){try{c=new C()}catch(y){return}}
AU.c=c;
const ms=c.createGain();ms.gain.value=.9;
const cp=c.createDynamicsCompressor();
cp.threshold.value=-14;cp.knee.value=16;cp.ratio.value=5;cp.attack.value=.004;cp.release.value=.2;
ms.connect(cp);cp.connect(c.destination);
AU.sx=c.createGain();AU.sx.gain.value=.9*AUL[ST.as];AU.sx.connect(ms);
AU.mu=c.createGain();AU.mu.gain.value=0;
AU.dk=c.createGain();
AU.lp=c.createBiquadFilter();AU.lp.type='lowpass';AU.lp.frequency.value=16000;AU.lp.Q.value=.5;
AU.mu.connect(AU.dk);AU.dk.connect(AU.lp);AU.lp.connect(ms);
const rv=c.createConvolver();rv.buffer=auIR(c,2.4,2.6);
const rh=c.createBiquadFilter();rh.type='highpass';rh.frequency.value=180;
const rg=c.createGain();rg.gain.value=.7;
rv.connect(rh);rh.connect(rg);rg.connect(ms);
AU.rv=rv;
const mw=c.createGain();mw.gain.value=.45;AU.lp.connect(mw);mw.connect(rv);
AU.nz=c.createBuffer(1,c.sampleRate*2,c.sampleRate);
{const d=AU.nz.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=M.random()*2-1}
AU.bn=c.createBuffer(1,c.sampleRate*4,c.sampleRate);
{const d=AU.bn.getChannelData(0);let l=0;for(let i=0;i<d.length;i++){l=(l+.02*(M.random()*2-1))/1.02;d[i]=l*3.5}}
auMu();
auPoll();
if(c.resume&&c.state!='running'){try{const r=c.resume();if(r&&r.catch)r.catch(()=>{})}catch(x){}}
}
function hk(n,pre,post){
const o=window[n];
if(typeof o!='function')return;
window[n]=function(){
let s;
try{if(pre)s=pre.apply(null,arguments)}catch(x){}
const r=o.apply(this,arguments);
try{if(post)post(s||{},r,arguments)}catch(x){}
return r;
};
}

hk('fire',()=>({c:M.max(.18,p.ch),v:p.vt}),s=>SX.shoot(s.c,s.v));
hk('skill',null,()=>SX.skill(p.vt));
hk('ult',null,()=>SX.ult(p.vt));
for(const id of['T','B']){
const o=window['dx'+id],f=o.Sk3,q=()=>dxS.act===id?p.s3:dxS.O[id].s3;
o.Sk3=function(){
const a=q();
const r=f.apply(this,arguments);
try{if(!(a>=0)&&q()>=0)SX.skill(p.vt)}catch(x){}
return r;
};
}
hk('gw',null,()=>SX.zapCharge());
hk('hurtP',()=>({h:p.hp,u:p.hu,d:p.dead}),s=>{
if(s.d)return;
if(p.hu>s.u+.05)SX.hurt();
else if(p.hp<s.h)SX.block();
});
hk('killP',null,()=>SX.death());
hk('hurtS',s=>({h:s.hp,d:s.dead}),(s,r,a)=>{
const q=a[0];
if(s.d)return;
if(q.dead)SX.sqDown(q);
else if(q.hp<s.h)SX.sq(q);
});
hk('hurtE',e=>({d:e.dd,h:e.hp}),(s,r,a)=>{
const e=a[0];
if(s.d||e.dd)return;
if(e.hp<s.h)SX.hit(e);
});
hk('killE',()=>({c:sv.coins}),(s,r,a)=>{
SX.kill(a[0]);
if(sv.coins>s.c)SX.coin();
});
hk('waveGo',null,(s,r,a)=>SX.wave(a[0]));
hk('mkBoss',null,()=>SX.bossIn());
hk('slam',null,(s,r,a)=>SX.slam(a[0]));
hk('cast',()=>({n:Pr.length}),(s,r,a)=>{if(Pr.length>s.n)SX.cast(a[0])});
hk('fireB',null,(s,r,a)=>SX.eArrow(a[0]));
hk('strikeE',null,(s,r,a)=>{if(a[1])SX.swing(a[0])});
hk('atkS',null,(s,r,a)=>{const q=a[0];if(q.id==3||a[1])SX.squad(q.id,q.x)});
hk('xzOpen',null,()=>SX.open());
hk('xzChoose',()=>({f:xzF}),s=>{if(s.f)SX.pick()});
hk('xzPick',null,(s,r,a)=>SX.item(a[0].k));
hk('domGo',null,()=>SX.dom());
hk('domSl',null,()=>SX.slash());
hk('domFin',null,()=>SX.domFin());
hk('tp',null,()=>{if(!inMenu)SX.pz(paused)});
hk('upd',()=>({o:p.on,v:p.vy,f:p.fy,d:p.dr,c:p.ch,w:p.ws,g:p.gf,s:M.floor(p.wk/PI)}),(s,r,a)=>{
const dt=a[0];
if(s.o&&!p.on&&p.vy<-300)SX.jump();
else if(!s.o&&p.on&&s.v>260)SX.land(M.min(1,s.v/900));
if(!s.f&&p.fy)SX.flap();
if(p.fy){MU.fl-=dt;if(MU.fl<=0){MU.fl=.3;SX.flap()}}else MU.fl=0;
if(!s.d&&p.dr)SX.draw();
if(p.dr&&s.c<1&&p.ch>=1)SX.full();
if(!s.w&&p.ws)SX.shield();
if(p.on&&M.floor(p.wk/PI)!==s.s&&M.abs(p.vx)>60)SX.step(p.sh>.5);
if(!s.g&&p.gf)SX.zap();
if(p.ut>0&&M.random()<dt*22)SX.rain();
if(p.gf&&p.go>0){if(M.random()<dt*26)SX.crackle()}
else if(p.go>0&&p.go<GCH&&M.random()<dt*(6+p.go/GCH*34))SX.crackle();
});
const bst=new WeakMap();
hk('upE',null,()=>{
for(const e of E){
if(!e.boss||e.dd)continue;
const v=bst.get(e);
if(v===undefined)bst.set(e,e.stp);
else if(v!==e.stp){bst.set(e,e.stp);if(M.abs(e.vx)>14)SX.bstep(e)}
}
});

SX.cmRdy=()=>{
const t=ct();
auT({t,f:880,d:.4,v:.05,a:.004,w:.5});
auT({t:t+.09,f:1318.5,d:.6,v:.05,a:.004,w:.5});
auT({t:t+.18,f:1760,d:.8,v:.04,a:.004,w:.6});
};
SX.cmGo=()=>{
const t=ct();
auT({t,f:60,f2:220,fd:.5,d:.6,v:.4,a:.04,w:.3});
auN({t,ft:'bandpass',f:300,f2:4500,q:1.2,d:.5,v:.22,a:.35,w:.3});
for(const f of[392,587.33,783.99])auT({t,f,d:1.8,v:.03,a:.3,w:.6});
auDuck(.5,.8,1);
};
SX.cmDash=()=>{
const t=ct();
auN({t,ft:'bandpass',f:5200,f2:700,q:1.4,d:.14,v:.2,a:.001,p:rnd(-.5,.5),w:.1});
auT({t,ty:'sawtooth',f:1000,f2:110,d:.12,v:.07,a:.001,lp:2800});
auN({t:t+.1,ft:'highpass',f:1800,d:.07,v:.2,a:.0004});
auT({t:t+.1,f:130,f2:60,d:.12,v:.22,a:.002});
};
SX.cmShot=()=>{
const t=ct();
auT({t,f:140,f2:50,d:.22,v:.45,a:.002});
auN({t,ft:'bandpass',f:2600,f2:500,q:1.2,d:.25,v:.16,a:.01,w:.15});
auN({t,ft:'lowpass',f:500,f2:120,d:.2,v:.25,a:.001});
};
SX.cmCharge=()=>{
const t=ct();
auT({t,ty:'sawtooth',f:80,f2:1500,fd:.8,d:.08,v:.12,a:.8,lp:3200,w:.2});
auN({t,ft:'bandpass',f:700,f2:7000,q:2,fd:.8,d:.08,v:.12,a:.8,w:.2});
auT({t,f:50,f2:130,fd:.8,d:.08,v:.16,a:.8});
};
SX.cmFuse=()=>{
const t=ct();
auN({t,ft:'highpass',f:1400,d:.3,v:.5,a:.0004,w:.25});
auT({t,ty:'sawtooth',f:1100,f2:70,d:.5,v:.26,a:.001,lp:3500,w:.2});
auT({t,f:70,f2:30,d:.8,v:.5,a:.002,w:.2});
auDuck(.4,.3,.6);
};
SX.cmBoom=()=>{
const t=ct();
auN({t,ft:'highpass',f:900,d:.35,v:.6,a:.0004,w:.3});
auT({t,f:76,f2:20,d:2,v:.85,a:.003,w:.3});
auN({t,ft:'lowpass',f:1700,f2:60,d:1.8,v:.6,a:.002,br:1,w:.35});
auT({t:t+.04,ty:'sawtooth',f:900,f2:90,d:.8,v:.14,a:.002,lp:2600,w:.3});
for(let i=0;i<9;i++)auN({t:t+.06+i*.06*rnd(.7,1.3),ft:'bandpass',f:rnd(600,3000),q:2,d:.08,v:rnd(.06,.14),a:.0008,p:rnd(-.7,.7)});
auDuck(.25,.9,1.6);
};
SX.cmBolt=()=>{
if(!auOk('cb',70))return;
const t=ct();
auN({t,ft:'highpass',f:1500,q:.7,d:.2,v:.35,a:.0004,p:rnd(-.7,.7),w:.2});
auT({t,ty:'sawtooth',f:1200,f2:70,d:.3,v:.14,a:.001,lp:3000,w:.2});
auT({t,f:60,f2:30,d:.5,v:.4,a:.002,w:.15});
};
SX.cmBlast=()=>{
if(!auOk('cl',80))return;
const t=ct();
auT({t,f:90,f2:28,d:.8,v:.6,a:.002,w:.2});
auN({t,ft:'lowpass',f:1400,f2:90,d:.7,v:.45,a:.002,br:1,w:.25});
auDuck(.5,.2,.5);
};
window.cmbSfx=k=>{
if(!auOn())return;
const f=SX['cm'+k];
if(f)try{f()}catch(x){}
};

SO.push(['am','Musik',['Mati','Rendah','Sedang','Tinggi']],['as','Efek suara',['Mati','Rendah','Sedang','Tinggi']]);
const ss=window.stSet;
window.stSet=function(k,v){
if(k=='am'||k=='as'){
ST[k]=v;auSave();auApply();auPoll();SX.tap();mSt();
return;
}
return ss.apply(this,arguments);
};

const gs=()=>auInit();
for(const ev of['pointerdown','pointerup','touchend','keydown'])addEventListener(ev,gs,{capture:true,passive:true});
document.addEventListener('click',e=>{
auInit();
const t=e.target;
if(!t||!t.closest||!t.closest('#mn,#nm,#fs,#bm')||t.closest('#xz,input'))return;
const c0=sv.coins,pl=t.closest('[data-a="p"]'),bt=t.closest('.bt');
setTimeout(()=>{
if(pl){SX.start();return}
if(bt&&bt.textContent.indexOf('Koin kurang')>=0){SX.deny();return}
if(sv.coins<c0){SX.buy();return}
if(sv.coins>c0){SX.claim();return}
SX.tap();
},0);
},true);
document.addEventListener('visibilitychange',()=>{
const c=AU.c;
if(!c)return;
try{
if(document.hidden){if(c.suspend){const r=c.suspend();if(r&&r.catch)r.catch(()=>{})}}
else if(c.resume){const r=c.resume();if(r&&r.catch)r.catch(()=>{})}
}catch(x){}
});
setInterval(()=>{try{auPoll()}catch(x){}},100);
})();
