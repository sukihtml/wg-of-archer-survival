let olRole='',olOn='',olH=0,olG=0,olD=0,olSolo=0,olBusy=0,olPeer=null,olC=null,olCs=[],olMode='c',olSz=2,olCode='',olMsgT='',olMt=null,olLb={n:[],m:'c',z:2};
let olOp={r:null,a:0,w:0,v:0,n:''},olNid=0,olDt=0,olEt=0,olBn=null,olLm=null,olDx=0,olTm=1,olLt=0;
const OLK=Object.keys(p),OLX=OLK.indexOf('x'),OLF=OLK.indexOf('f'),OLV=OLK.indexOf('vx');
const OLS=new WeakSet(),OLB=new Set(['q','b','m']),OLZ=['Solo','Duo','Trio','Squad'];
const OLN=()=>String(pf.nm||'Pemanah').slice(0,14);
const olEsc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const olCss=document.createElement('style');
olCss.textContent='#olp{position:fixed;inset:0;z-index:12;display:none;align-items:center;justify-content:center;background:rgba(6,9,18,.88);font-family:system-ui,sans-serif;color:#e8dfcc;padding:calc(10px + env(safe-area-inset-top,0px)) 14px 10px;box-sizing:border-box}#olp.on{display:flex}.olc{width:min(460px,100%);max-height:100%;overflow-y:auto;display:flex;flex-direction:column;gap:8px;padding:14px;box-sizing:border-box;border-radius:14px;background:rgba(18,24,38,.97);border:1px solid rgba(220,228,244,.16)}.olc b{font-size:17px;color:#ffd45a}.olc span,.olc em{font-size:12px;font-style:normal;color:rgba(232,223,204,.75)}.olr{display:flex;gap:6px;flex-wrap:wrap}.olr>*{flex:1 1 90px}.olb{display:flex;align-items:center;justify-content:center;min-height:32px;padding:0 10px;border-radius:16px;font-size:12px;font-weight:600;background:rgba(212,176,120,.3);border:1px solid rgba(228,198,146,.45);color:#f4e8d2;cursor:pointer;text-align:center;-webkit-tap-highlight-color:transparent;box-sizing:border-box}.olb.on{background:#c9a24a;color:#2a2008}.olb.gh{background:none;border-color:rgba(220,228,244,.18);color:rgba(222,229,244,.75)}.olk{font-size:30px;font-weight:800;letter-spacing:.2em;text-align:center;color:#ffe09a;cursor:pointer}#oli{height:34px;border-radius:10px;border:1px solid rgba(220,228,244,.25);background:rgba(8,12,22,.7);color:#fff;font-size:16px;text-align:center;letter-spacing:.2em;text-transform:uppercase;outline:none;box-sizing:border-box;width:100%}.olq{display:flex;justify-content:space-between;align-items:center;padding:5px 9px;border-radius:8px;background:rgba(255,255,255,.06);font-size:13px}.mdc.mol{background:repeating-linear-gradient(135deg,rgba(255,255,255,.07) 0 6px,transparent 6px 12px),linear-gradient(110deg,#0f4a3a,#4be0a8)}';
document.head.appendChild(olCss);
const olEl=document.createElement('div');
olEl.id='olp';
document.body.appendChild(olEl);
function olBody(){
if(olMt)return '<b>'+olEsc(olMt[0])+'</b><span>'+olEsc(olMt[1])+'</span><div class="olb on" data-o="ok">Oke</div>';
let h='<b>Mabar Online</b>';
if(!olRole){
h+='<span>Nama kamu: '+olEsc(OLN())+'. Nama ini terlihat oleh temanmu.</span><div class="olb on" data-o="mk">Buat Room</div><input id="oli" maxlength="5" placeholder="KODE ROOM" autocomplete="off" spellcheck="false"><div class="olb" data-o="jn">Gabung Room</div><div class="olb" data-o="bt">Duo / Trio / Squad bareng Bot Pro</div>';
}else{
const ho=olRole=='h',nm=ho?[OLN()].concat(olCs.filter(o=>o.ok).map(o=>o.n)):(olLb.n||[]),md=ho?olMode:olLb.m,z=ho?olSz:olLb.z;
if(!olSolo)h+='<span>Kode room, kasih ke temanmu:</span><div class="olk" data-o="cp">'+olEsc(olCode)+'</div>';
h+=nm.map((n,i)=>'<div class="olq"><span>'+olEsc(n)+'</span><em>'+(i?'Teman':'Host')+'</em></div>').join('');
if(ho){
if(!olSolo)h+='<div class="olr"><div class="olb'+(md=='c'?' on':'')+'" data-o="mc">Boss Rush Co-op</div><div class="olb'+(md=='d'?' on':'')+'" data-o="md">1 vs 1</div></div>';
if(md=='c')h+='<span>Ukuran tim, slot kosong diisi Bot Pro:</span><div class="olr">'+OLZ.map((t,i)=>'<div class="olb'+(z==i+1?' on':'')+'" data-o="z" data-z="'+(i+1)+'">'+t+'</div>').join('')+'</div>';
else h+='<span>Duel 3 babak lawan temanmu. Butuh tepat 2 pemain.</span>';
h+='<div class="olb on" data-o="go">Mulai</div>';
}else h+='<span>'+(md=='d'?'Mode 1 vs 1':'Boss Rush Co-op, tim '+OLZ[(z||1)-1])+'. Menunggu host memulai...</span>';
h+='<div class="olb gh" data-o="x">Keluar</div>';
}
if(olMsgT)h+='<em>'+olEsc(olMsgT)+'</em>';
return h;
}
function olUI(){
const i=document.getElementById('oli'),v=i?i.value:'';
olEl.innerHTML='<div class="olc">'+olBody()+'</div>';
const n=document.getElementById('oli');
if(n&&v)n.value=v;
}
function olSay(t){olMsgT=t;olUI()}
function olOpen(){
if(SPC||sv.sel==6){olMt=['Belum didukung','Karakter ini belum bisa dipakai di mabar online. Pilih karakter panah lain.'];}
else olMt=null;
mdClose();olEl.classList.add('on');olUI();
}
function olModal(t,x){olMt=[t,x];olEl.classList.add('on');olUI()}
function olSend(c,m){try{if(c&&c.open)c.send(m)}catch(x){}}
function olAll(m){for(const o of olCs)if(o.ok)olSend(o.c,m)}
function olOpC(){return olRole=='g'?olC:(olCs[0]&&olCs[0].c)}
function olPc(id){const o=olCs.find(z=>z.id==id);return o&&o.c}
function olLoad(){
return new Promise((ok,no)=>{
if(window.Peer)return ok();
const s=document.createElement('script');
s.src='https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js';
s.onload=()=>window.Peer?ok():no();
s.onerror=()=>no();
document.head.appendChild(s);
});
}
function olGen(){
const a='ABCDEFGHJKMNPQRSTUVWXYZ23456789';
let s='';
for(let i=0;i<5;i++)s+=a[M.floor(M.random()*a.length)];
return s;
}
function olKill(){
const pr=olPeer;
olPeer=null;olC=null;olCs=[];olRole='';olOn='';olH=0;olG=0;olD=0;olSolo=0;olBusy=0;
for(let i=S.length-1;i>=0;i--)if(S[i].ol)S.splice(i,1);
if(pr)setTimeout(()=>{try{pr.destroy()}catch(x){}},400);
}
function olLeave(){
if(!olRole&&!olOn&&!olPeer)return;
try{
if(olRole=='g')olSend(olC,{t:'bye'});
else if(olRole=='h')olAll({t:'bye'});
}catch(x){}
olKill();
}
function olFin(t,x){
olLeave();
menuGo();
olModal(t,x);
}
function olLost(m){
if(!olRole&&!olOn)return;
if(olOn){
if(olD&&duS==2&&duF)return;
olFin('Terputus',m);
return;
}
olKill();olMsgT=m;olUI();
}
function olHostGo(){
if(olBusy)return;
olBusy=1;olSay('Menghubungkan...');
olLoad().then(()=>{
let n=0;
const t=()=>{
const code=olGen(),pr=new Peer('wgoas-'+code);
pr.on('open',()=>{olPeer=pr;olCode=code;olRole='h';olSolo=0;olMode='c';olBusy=0;olMsgT='';olUI()});
pr.on('connection',olAcc);
pr.on('disconnected',()=>{try{pr.reconnect()}catch(x){}});
pr.on('error',e=>{
if(e.type=='unavailable-id'&&n++<5){try{pr.destroy()}catch(x){}t();return}
if(olPeer===pr)return;
olBusy=0;olSay('Gagal membuat room');
});
};
t();
}).catch(()=>{olBusy=0;olSay('Gagal memuat WebRTC. Cek koneksi internet.')});
}
function olJoin(){
const i=document.getElementById('oli'),code=(i?i.value:'').trim().toUpperCase();
if(code.length<4){olSay('Masukkan kode room');return}
if(olBusy)return;
olBusy=1;olSay('Menghubungkan...');
olLoad().then(()=>{
const pr=new Peer();
olPeer=pr;
const to=setTimeout(()=>{if(!olC){olKill();olSay('Room tidak ditemukan')}},12000);
pr.on('open',()=>{
const c=pr.connect('wgoas-'+code,{reliable:true,serialization:'json'});
c.on('open',()=>{
clearTimeout(to);
olC=c;olRole='g';olCode=code;olBusy=0;olMsgT='';
c.send({t:'hi',n:OLN()});
olUI();
});
c.on('data',olGm);
c.on('close',()=>olLost('Koneksi ke host terputus'));
c.on('error',()=>olLost('Koneksi ke host terputus'));
});
pr.on('error',e=>{
clearTimeout(to);
if(olRole)return;
olKill();
olSay(e.type=='peer-unavailable'?'Room tidak ditemukan':'Gagal terhubung');
});
}).catch(()=>{olBusy=0;olSay('Gagal memuat WebRTC. Cek koneksi internet.')});
}
function olAcc(c){
if(olOn||olCs.length>=3||olSolo){
c.on('open',()=>{olSend(c,{t:'no'});setTimeout(()=>{try{c.close()}catch(x){}},400)});
return;
}
const o={c,id:c.peer,n:'',ok:0,lt:performance.now()};
olCs.push(o);
c.on('data',m=>olHm(o,m));
c.on('close',()=>olDrop(o));
c.on('error',()=>olDrop(o));
}
function olDrop(o){
const i=olCs.indexOf(o);
if(i<0)return;
olCs.splice(i,1);
for(let j=S.length-1;j>=0;j--)if(S[j].pid==o.id)S.splice(j,1);
if(olOn=='d'){
if(duS==2&&duF)return;
olFin('Lawan keluar','Kamu menang karena lawan terputus.');
return;
}
if(olOn=='c'){ban(o.n+' keluar');olTm=M.max(1,olTm-1);return}
if(olRole=='h')olLbx();
}
function olLbx(){
const n=[OLN()].concat(olCs.filter(o=>o.ok).map(o=>o.n));
olAll({t:'lb',n,m:olMode,z:olSz});
olUI();
}
function olHm(o,m){
if(!m||!m.t)return;
o.lt=performance.now();
if(m.t=='hi'){o.n=String(m.n||'Pemain').slice(0,14);o.ok=1;olLbx();return}
if(m.t=='bye'){olDrop(o);return}
if(!olOn)return;
if(m.t=='st'){
if(olOn=='d'){olOp.r=m.r;olOp.a=m.a;olOp.w=m.w;olOp.v=m.v;return}
const s=S.find(z=>z.pid==o.id);
if(s)olAp(s,m);
}else if(m.t=='ar'){
olAr(m);
if(olOn=='c')for(const x of olCs)if(x!==o&&x.ok)olSend(x.c,{t:'ar',x:m.x,y:m.y,vx:m.vx,vy:m.vy,c:m.c,e:m.e});
}else if(m.t=='he'){
const e=E.find(z=>z.nid==m.i);
if(e&&!e.dd)hurtE(e,m.d,m.x);
}else if(m.t=='hit')olHit(m.f,m.x);
}
function olGm(m){
if(!m||!m.t)return;
olLt=performance.now();
if(m.t=='lb'){olLb=m;olUI();return}
if(m.t=='go'){olRun(m.m,m.z,m.h);return}
if(m.t=='no'){olLost('Room penuh atau sedang bermain');return}
if(m.t=='bye'){olLost('Host keluar dari room');return}
if(!olOn)return;
if(m.t=='st'){olOp.r=m.r;olOp.a=m.a;olOp.w=m.w;olOp.v=m.v}
else if(m.t=='sn')olSn(m);
else if(m.t=='ar')olAr(m);
else if(m.t=='bk')olBkIn();
else if(m.t=='dmg'){olDx=1;try{hurtP(m.d,m.x)}finally{olDx=0}}
else if(m.t=='hit')olHit(m.f,m.x);
else if(m.t=='end')olFin('Boss Rush Co-op selesai','Bos dikalahkan: '+m.k+'  -  Koin didapat: '+m.k*20);
}
function olGo(){
const hs=olCs.filter(o=>o.ok);
if(olMode=='d'&&hs.length!=1){olSay('Mode 1 vs 1 butuh tepat 2 pemain');return}
olCs=hs;
const z=M.max(olSz,1+hs.length);
olAll({t:'go',m:olMode,z,h:OLN()});
olRun(olMode,z,'');
}
function olRun(m,z,hn){
olOn=m;olD=m=='d'?1:0;olH=m=='c'&&olRole!='g'?1:0;olG=m=='c'&&olRole=='g'?1:0;
olMsgT='';olMt=null;olEl.classList.remove('on');
olOp={r:null,a:0,w:0,v:VW,n:olRole=='g'?(hn||'Lawan'):((olCs[0]&&olCs[0].n)||'Lawan')};
olNid=0;olDt=0;olEt=0;olBn=null;olLm=null;olTm=M.max(1,z||1);olLt=performance.now();
for(const o of olCs)o.lt=olLt;
runStart(m=='d'?3:2);
if(olH){
olCs.forEach(o=>olMk(o.id,o.n,0,0));
for(let i=0;i<olTm-1-olCs.length;i++)olMk('b'+i,'Bot Pro '+(i+1),1,i);
}
}
function olMk(id,n,bt,i){
const q=duQ(bt?[4,5,4][i%3]:4),h=bt?M.max(p.mh,150)*1.2:100;
const s={ol:1,rm:bt?0:1,bt,pid:id,nm:n,c:{n},id:0,q,ws:bt?[1,2,1][i%3]:0,x:p.x+(bt?-60-i*50:40),y:GY,al:0,vz:0,tal:0,tx:p.x,vx:0,f:1,hp:h,mh:h,dm:0,cd:0,hf:0,dead:0,rg:0,sp:300,mt:0,dir:1,jb:0,cw:.5,dr:0,ch:0,tg:1,raw:null,aa:0,sw:0,wu:0,ph:0,fx:0,off:bt?-90-i*70:90};
S.push(s);
return s;
}
function olPk(){
const r=[];
for(let i=0;i<OLK.length;i++){const v=p[OLK[i]];r.push(typeof v=='number'?+v.toFixed(2):v)}
return r;
}
function olAp(s,m){
const q=s.q,r=m.r;
for(let i=0;i<OLK.length;i++)q[OLK[i]]=r[i];
s.raw=r;s.tx=r[OLX];s.f=r[OLF];s.vx=r[OLV];s.tal=m.a;s.ws=m.w;s.hp=q.hp;s.mh=q.mh;
s.dead=(q.dead>0||q.hp<=0)?1:0;
if(m.n)s.nm=m.n;
}
function olSnap(){
const pl=[{i:'H',n:OLN(),r:olPk(),a:M.max(0,GY-p.y),w:sv.ws,b:0}];
for(const s of S){
if(!s.ol)continue;
if(s.bt){
const q=s.q;
q.x=s.x;q.f=s.f;q.vx=s.vx;q.hp=s.hp;q.mh=s.mh;q.dead=s.dead>0?1:0;
pl.push({i:s.pid,n:s.nm,r:OLK.map(k=>q[k]),a:s.al,w:s.ws,b:1});
}else if(s.raw)pl.push({i:s.pid,n:s.nm,r:s.raw,a:s.tal,w:s.ws,b:0});
}
const en=[],pr=[];
for(const e of E){
if(e.nid==null||en.length>14)continue;
const o={};
for(const k in e){
if(k=='ps'||k=='pp'||k=='rs')continue;
const v=e[k],t=typeof v;
if(t=='number')o[k]=+v.toFixed(2);else if(t=='string'||t=='boolean')o[k]=v;
}
en.push(o);
}
for(const q of Pr){
if(!OLB.has(q.t)||pr.length>30)continue;
const o={};
for(const k in q){
const v=q[k],t=typeof v;
if(t=='number')o[k]=+v.toFixed(2);else if(t=='string'||t=='boolean')o[k]=v;
}
pr.push(o);
}
return{t:'sn',p:pl,e:en,r:pr,b:olBn};
}
function olSn(m){
const ids=new Set();
for(const d of m.p){
if(olPeer&&d.i==olPeer.id)continue;
ids.add(d.i);
let s=S.find(z=>z.pid==d.i);
if(!s){s=olMk(d.i,d.n,d.b,0);s.rm=1;s.x=d.r[OLX];s.tx=s.x}
olAp(s,d);
}
for(let i=S.length-1;i>=0;i--)if(S[i].ol&&!ids.has(S[i].pid))S.splice(i,1);
const seen=new Set();
for(const d of m.e){
let e=E.find(z=>z.nid==d.nid);
if(!e){e={hl:[]};e.x=d.x;E.push(e)}
for(const k in d)if(k!='x')e[k]=d[k];
e.tx=d.x;
seen.add(d.nid);
}
for(let i=E.length-1;i>=0;i--)if(!seen.has(E[i].nid))E.splice(i,1);
for(let i=Pr.length-1;i>=0;i--)if(OLB.has(Pr[i].t))Pr.splice(i,1);
for(const o of m.r){o.hs=[];o.tr=[];Pr.push(o)}
if(m.b)ban(m.b);
}
function olUpE(dt){
const k=M.min(1,dt*15);
for(const e of E){
e.y=GY-(e.al||0);
e.hf-=dt;
if(e.tx!=null)e.x+=(e.tx-e.x)*k;
}
}
function olAr(m){
const a={x:m.x,y:m.y,vx:m.vx,vy:m.vy,tr:[],st:0,l:0,c:m.c,an:M.atan2(m.vy,m.vx),dm:0,pr:0,hit:[],ev:m.e,vf:1};
OLS.add(a);
A.push(a);
}
function olHit(f,x){
if(p.dead>0||duS!=1)return;
const dr=x>p.x?1:-1;
p.hp-=f*p.mh;p.hu=.3;p.rg=4;p.vx-=dr*220;shake=M.max(shake,4);
for(let i=0;i<5;i++)sp(0,p.x+rnd(-5,5),p.y-rnd(20,50),-dr*rnd(20,70),rnd(-60,-10),rnd(.3,.5),rnd(2,3.5),'150,70,62',200,2);
if(p.hp<=0)killP();
}
function olBkIn(){
sv.coins+=20;save();brK++;
if(brK>brBest){brBest=brK;try{localStorage.setItem(BRK,brBest)}catch(x){}}
if(!p.dead)p.hp=M.min(p.mh,p.hp+35*gDm());
ban('Boss tumbang  -  +20 koin');
}
function olHum(){
if(!(p.dead>0))return p;
return S.find(s=>s.ol&&s.rm&&!(s.dead>0))||null;
}
function olAlive(){return S.some(s=>s.ol&&!(s.dead>0))}
function olRv(){
p.dead=0;p.hp=p.mh*.6;p.inv=2.5;p.hu=0;p.vx=0;p.vy=0;p.y=GY;p.on=1;p.air=0;p.fy=0;p.rg=0;olDt=0;
const t=S.find(s=>s.ol&&!(s.dead>0));
if(t)p.x=t.x;
ring(p.x,GY-30,'230,210,170',44);
ban('Kamu bangkit kembali');
}
function olFire(s,en){
const c=M.max(.3,s.ch),d=s.f,ox=s.x+d*26,oy=s.y-45,sp2=480+c*760,ty=en.y-30*en.sz,v=s.q.vt;
let a=0;
for(let i=0;i<4;i++){
const t0=M.abs(en.x-ox)/(sp2*M.max(.2,M.cos(a))),ex=(en.x+(en.vx||0)*t0*.8-ox)*d,ey=ty-oy;
a=M.atan2(ey-215*t0*t0,M.max(30,ex));
}
a=M.max(-.9,M.min(.7,a))+rnd(-.012,.012);
A.push({x:ox,y:oy,vx:d*M.cos(a)*sp2,vy:M.sin(a)*sp2,tr:[],st:0,l:0,c,an:d>0?a:PI-a,dm:(16+c*44)*AE[v].d*gDm()*gUd()*.8,pr:(c>.85?2:0)+AE[v].pr,hit:[],ev:v,bt:1});
s.dr=0;s.ch=0;s.cw=rnd(.35,.7);s.q.rc=1;
ring(ox,oy,AE[v].c,22+c*22);
}
function olBot(s,dt){
const q=s.q;
s.cd-=dt;s.cw-=dt;s.jb-=dt;s.mt-=dt;s.rg-=dt;
if(s.dead>0){
s.dead-=dt;
if(s.dead<=0){const h=olHum();s.dead=0;s.hp=s.mh;s.x=h?h.x:p.x;s.tx=s.x;s.vx=0;s.al=0;s.vz=0;ring(s.x,GY-30,'230,210,170',34)}
return;
}
if(s.rg<=0&&s.hp<s.mh)s.hp=M.min(s.mh,s.hp+s.mh*.02*dt);
let en=null,bd=1e9;
for(const e of E){
if(e.dd||e.nid==null)continue;
const d=M.abs(e.x-s.x)*(e.boss?.7:1);
if(d<bd){bd=d;en=e}
}
const ad=en?M.abs(en.x-s.x):0,sd=en?sgn(en.x-s.x):s.f,on=s.al<=0;
let want=0,th=0;
if(en&&ad<1100){
s.f=sd;
if(ad<250)want=-sd*s.sp;
else if(ad>440)want=sd*s.sp;
else{if(s.mt<=0){s.mt=rnd(.5,1.4);s.dir=M.random()<.5?-1:1}want=s.dir*s.sp*.45}
}else{
const h=olHum(),tx=(h?h.x:p.x)+s.off,dx=tx-s.x;
if(M.abs(dx)>VW*.9){s.x=tx;s.vx=0}
else if(M.abs(dx)>50){want=sgn(dx)*s.sp*1.1;s.f=sgn(dx)}
}
for(const e of E){if(!e.dd&&e.boss&&M.abs(e.x-s.x)<170&&(e.st==1||e.st==3))th=1}
for(const r of Pr){
if(!OLB.has(r.t))continue;
const dx=s.x-r.x;
if(M.abs(dx)<190&&dx*r.vx>0&&r.y>GY-110)th=1;
}
if(th&&on&&s.jb<=0){s.vz=560;s.jb=.7}
if(!on||s.vz){s.vz-=(s.vz>0?1700:1900)*dt;s.al+=s.vz*dt;if(s.al<=0){s.al=0;s.vz=0}}
s.vx+=(want-s.vx)*M.min(1,dt*9);s.x+=s.vx*dt;s.tx=s.x;s.tal=s.al;
if(en&&ad>150&&ad<780&&!th){
if(!s.dr){if(s.cw<=0){s.dr=1;s.ch=0;s.tg=rnd(.75,1)}}
else{s.ch=M.min(1,s.ch+dt/.62);if(s.ch>=s.tg)olFire(s,en)}
}else{s.dr=0;s.ch=0}
const o2=s.al<=0;
q.dr=s.dr;q.ch=s.ch;q.pc=s.ch;
q.da+=((s.dr?1:0)-q.da)*M.min(1,dt*16);
q.rc*=M.exp(-dt*8);q.sf*=M.exp(-dt*3.2);q.sq*=M.exp(-dt*9);
q.cv+=(s.vx-q.cv)*M.min(1,dt*6);
q.on=o2?1:0;q.vy=-s.vz;q.fy=0;q.sh=0;
q.air+=((o2?0:1)-q.air)*M.min(1,dt*16);
if(o2)q.wk+=M.abs(s.vx)*dt*.085;
q.wa+=((o2?.3:1)-q.wa)*M.min(1,dt*8);
q.wp+=dt*(o2?1.8:5);
q.wd+=(-s.f-q.wd)*M.min(1,dt*1.5);
q.bl-=dt;if(q.bl<-.12)q.bl=rnd(2.2,5);
}
function olUpS(s,dt){
if(olG||s.rm){
const k=M.min(1,dt*14);
s.x+=(s.tx-s.x)*k;s.al+=(s.tal-s.al)*k;
s.hf-=dt;
}else olBot(s,dt);
s.y=GY-(s.al||0);
if(!(s.dead>0))duSw(s,evFx,dt);
}
function olDrawS(s){
const hh=M.min(1,(s.al||0)/200);
shd(s.x,30*(1-hh*.5),.42*(1-hh));shd(s.x,16*(1-hh*.5),.5*(1-hh));
duSw(s,()=>{g.save();drawP(0);drawP(1);g.restore()});
g.globalAlpha=1;
if(s.hf>0)gl('r',s.x,s.y-30,34,s.hf*2.4);
}
function olUpG(e,dt){
const o=olOp,q=e.q;
if(o.r){
for(let i=0;i<OLK.length;i++)q[OLK[i]]=o.r[i];
const k=M.min(1,dt*14);
e.x+=(o.r[OLX]-e.x)*k;e.al+=(o.a-e.al)*k;
e.f=o.r[OLF];e.vx=o.r[OLV];e.sh=q.sh;e.dr=q.dr;e.ch=q.ch;e.ws=o.w;e.mh=q.mh;
if(duS==1&&!e.dd){
e.hp=q.hp;
if(q.dead>0||q.hp<=0){e.hp=0;killE(e)}
}else if(duS!=1&&!e.dd)e.hp=q.hp;
}
e.y=GY-e.al;
duSw(e,evFx,dt);
}
function olTick(dt){
if(!olOn)return;
for(const a of A){
if(OLS.has(a))continue;
OLS.add(a);
if(a.vf||a.ul)continue;
const m={t:'ar',x:a.x,y:a.y,vx:a.vx,vy:a.vy,c:a.c,e:a.ev};
if(olOn=='d')olSend(olOpC(),m);
else if(olH)olAll(m);
else olSend(olC,m);
}
if(olOn=='d'){
const o=olOp;
if(o.r){
const L=M.min(VW,o.v||VW)*.46,ox=o.r[OLX];
p.x=M.max(ox-L,M.min(ox+L,p.x));
}
return;
}
if(p.dead>0){if(!olDt)olDt=performance.now();if(performance.now()-olDt>10000&&olAlive())olRv()}else olDt=0;
if(!olH)return;
for(const e of E){
if(e.nid==null){
e.nid=++olNid;
if(e.boss&&olTm>1){e.hp*=1+.6*(olTm-1);e.mh=e.hp}
}
}
if(msg&&msg!==olLm){olLm=msg;olBn=msg.t}
if(p.dead>0&&!olAlive()){olEt+=dt;if(olEt>2.5){olEt=0;const k=brK;olAll({t:'end',k});olFin('Boss Rush Co-op selesai','Bos dikalahkan: '+k+'  -  Koin didapat: '+k*20)}}
else olEt=0;
}
function olLoop(){
if(!olOn||inMenu)return;
const nw=performance.now();
if(olRole=='h'){
for(const o of olCs.slice())if(o.ok&&nw-o.lt>10000){try{o.c.close()}catch(x){}olDrop(o)}
if(!olOn)return;
}else if(olRole=='g'&&nw-olLt>10000){olLost('Koneksi ke host terputus');return}
if(olH){olAll(olSnap());olBn=null;return}
const m={t:'st',r:olPk(),a:M.max(0,GY-p.y),w:sv.ws,v:VW};
olSend(olOn=='d'?olOpC():olC,m);
}
setInterval(olLoop,66);
function olHud(){
if(!olOn)return;
g.save();
g.font='600 11px system-ui,sans-serif';g.textAlign='center';
if(!(p.dead>0)){g.fillStyle='rgba(255,224,154,.92)';g.fillText(OLN(),p.x-cam,p.y-92)}
if(olOn=='d'){
const e=E.find(o=>o.ol);
if(e&&!e.dd){g.fillStyle='rgba(255,150,130,.95)';g.fillText(olOp.n,e.x-cam,e.y-92)}
}else{
let y=84;
g.textAlign='right';g.font='600 11px system-ui,sans-serif';
for(const s of S){
if(!s.ol)continue;
const r=M.max(0,M.min(1,s.hp/s.mh)),dd=s.dead>0;
g.fillStyle=dd?'rgba(215,224,242,.4)':s.bt?'rgba(255,224,154,.92)':'rgba(170,235,255,.95)';
g.fillText(s.nm+(dd?'  gugur':''),VW-14,y);
g.fillStyle='rgba(8,10,16,.55)';g.fillRect(VW-14-92,y+4,92,4);
g.fillStyle=dd?'#555':'#6f9f8e';g.fillRect(VW-14-92,y+4,92*(dd?0:r),4);
y+=22;
}
}
g.restore();
}
const olDn=duNew;
duNew=function(){
olDn();
if(!olD)return;
const sd=duR%2?1:-1,D=300,e=E.find(o=>o.bot),ho=olRole!='g';
if(!e)return;
p.x=ho?0:sd*D;p.f=ho?sd:-sd;
e.x=ho?sd*D:0;e.f=ho?-sd:sd;
e.ol=1;e.nm=olOp.n;e.al=0;e.vx=0;
cam=p.x-VW*.5+50;
};
const olUb=upBot;
upBot=function(e,dt){
if(e.ol){olUpG(e,dt);return}
olUb(e,dt);
};
const olHe=hurtE;
hurtE=function(e,d,dx){
if(olG&&e.nid!=null){
if(e.dd)return;
olSend(olC,{t:'he',i:e.nid,d,x:dx});
e.hf=.14;
return;
}
if(e.ol){
if(e.dd||duS!=1)return;
const s=e.sh>.6&&dx==-e.f?d*.15:d,h0=e.hp;
olSend(olOpC(),{t:'hit',f:s/e.mh,x:p.x});
e.hp=h0+1e6;olHe(e,d,dx);e.hp=M.max(1,h0-s);
return;
}
olHe(e,d,dx);
};
const olHs=hurtS;
hurtS=function(s,d,fx){
if(s.ol){
if(olG||s.dead>0)return;
s.hf=.2;
if(s.rm){olSend(olPc(s.pid),{t:'dmg',d,x:fx});return}
s.hp-=d;s.rg=4;s.vx+=(s.x>fx?1:-1)*140;
for(let i=0;i<4;i++)sp(0,s.x+rnd(-5,5),s.y-rnd(20,50),rnd(-40,40),rnd(-60,-10),rnd(.3,.5),rnd(2,3.5),'150,70,62',200,2);
if(s.hp<=0){s.hp=0;s.dead=12;dust(s.x,GY,8,80)}
return;
}
olHs(s,d,fx);
};
const olHp=hurtP;
hurtP=function(d,fx){
if(olG&&!olDx)return;
olHp(d,fx);
};
const olKe=killE;
killE=function(e){
const w=e.dd;
olKe(e);
if(olH&&e.boss&&!w)olAll({t:'bk'});
};
const olUs=upS;
upS=function(dt){
olTick(dt);
if(!olOn){olUs(dt);return}
const hid=[],eq=sv.eq;
for(let i=S.length-1;i>=0;i--)if(S[i].ol)hid.push(S.splice(i,1)[0]);
sv.eq=[];
try{olUs(dt)}finally{sv.eq=eq;for(const s of hid)S.push(s)}
for(const s of hid)olUpS(s,dt);
};
const olSw=spw;
spw=function(dt){
if(olG)return;
if(olH&&p.dead>0){const d=p.dead;p.dead=0;try{olSw(dt)}finally{p.dead=d}return}
olSw(dt);
};
const olUe=upE;
upE=function(dt){
if(olG){olUpE(dt);return}
olUe(dt);
};
const olUh=upH;
upH=function(dt){
if(olOn=='c'&&p.dead>3)p.dead=3;
olUh(dt);
};
const olDs=drawS;
drawS=function(s){
if(s.ol){olDrawS(s);return}
olDs(s);
};
const olHd=hud;
hud=function(){
olHd();
olHud();
};
const olSp=duSp;
duSp=function(dt){
if(olD&&!inMenu&&duS==2&&duF){
duT-=dt;
if(duT<=0)olFin(duF==1?'Kamu menang!':'Kamu kalah','Skor '+duP+' - '+duB+'  lawan  '+olOp.n);
return;
}
olSp(dt);
};
const olMg=menuGo;
menuGo=function(){
olLeave();
olEl.classList.remove('on');
olMg();
};
olEl.addEventListener('click',e=>{
const t=e.target.closest('[data-o]');
if(!t)return;
const k=t.dataset.o;
if(k=='mk')olHostGo();
else if(k=='jn')olJoin();
else if(k=='bt'){olRole='h';olSolo=1;olMode='c';olSz=2;olCode='';olCs=[];olMsgT='';olUI()}
else if(k=='mc'||k=='md'){olMode=k=='mc'?'c':'d';olLbx()}
else if(k=='z'){olSz=+t.dataset.z;olLbx()}
else if(k=='go')olGo();
else if(k=='cp'){try{navigator.clipboard.writeText(olCode)}catch(x){}olSay('Kode disalin')}
else if(k=='x'){olLeave();olEl.classList.remove('on');mdOpen()}
else if(k=='ok'){olMt=null;olEl.classList.remove('on');mdOpen()}
});
['keydown','keyup','keypress','pointerdown','touchstart','mousedown'].forEach(n=>olEl.addEventListener(n,e=>e.stopPropagation()));
(function(){
const r=document.querySelector('#md .mdr'),b=r&&r.querySelector('.m5');
if(!r||!b)return;
const c=b.cloneNode(true);
c.removeAttribute('data-d');
c.className='mdc mol';
c.querySelector('b').textContent='Mabar Online';
c.querySelector('span').textContent='1 vs 1 lawan teman atau Boss Rush bareng 1-4 pemain lewat WebRTC. Bisa duo bareng Bot Pro.';
c.querySelector('svg').innerHTML='<circle cx="8" cy="8" r="2.8"/><circle cx="16.5" cy="9" r="2.4"/><path d="M3 19c0-3.2 2.3-5 5-5s5 1.8 5 5M13.5 15.2c.9-.8 2-1.2 3-1.2 2.4 0 4.2 1.6 4.2 4.6"/>';
r.appendChild(c);
c.addEventListener('click',e=>{e.stopPropagation();olOpen()});
})();
