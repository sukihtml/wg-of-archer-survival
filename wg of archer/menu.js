let inMenu=1,mView='h',mPrev=sv.sel;
const CP=[0,200,550,1300,4200,5500];
const mnEl=document.getElementById('mn'),mhEl=document.getElementById('mh'),pnEl=document.getElementById('pn'),plEl=document.getElementById('pl'),ptEl=document.getElementById('pt'),cnEl=document.getElementById('cn');
const tbEl=document.getElementById('tb');
let shT='e';
const coinImg=new Image();
coinImg.src='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">'+document.getElementById('coin').innerHTML+'</svg>');
const coinTag='<svg class="ci" viewBox="0 0 24 24"><use href="#coin"/></svg>';
const GIM=[[],[]];
const gearImg=(i,t)=>GIM[i][t]||(GIM[i][t]=GRC[i][t].toDataURL());
const PFK='pemanah_profil_v1';
const pf={nm:'Pemain',av:0,bn:0,cl:[],ok:0};
try{const o=JSON.parse(localStorage.getItem(PFK)||'null');if(o){if(typeof o.nm=='string')pf.nm=o.nm.slice(0,14);pf.av=M.max(0,M.min(2,o.av|0));pf.bn=M.max(0,M.min(2,o.bn|0));if(Array.isArray(o.cl))pf.cl=o.cl.filter(v=>v>=0&&v<4);if(o.ok||(pf.nm.trim()&&pf.nm!='Pemain'))pf.ok=1}}catch(x){}
const pfSave=()=>{try{localStorage.setItem(PFK,JSON.stringify(pf))}catch(x){}};
const pfEl=document.getElementById('pf');
const avTag=i=>'<svg viewBox="0 0 48 48"><use href="#av'+i+'"/></svg>';
function pfDraw(){
const n=pf.nm.trim()||'Pemain';
pfEl.className='bn'+pf.bn;
pfEl.querySelector('.av').innerHTML=avTag(pf.av);
pfEl.querySelector('span').textContent=n;
const pv=plEl.querySelector('.pv');
if(pv){pv.className='pv bn'+pf.bn;pv.querySelector('.av').innerHTML=avTag(pf.av);pv.querySelector('span').textContent=n}
}
function mPf(){
const st=plEl.scrollTop;
plEl.className='pf';
const bn=[0,1,2].map(i=>'<div class="po bn'+i+(pf.bn==i?' on':'')+'" data-o="bn:'+i+'"></div>').join('');
const av=[0,1,2].map(i=>'<div class="po av'+(pf.av==i?' on':'')+'" data-o="av:'+i+'">'+avTag(i)+'</div>').join('');
plEl.innerHTML='<div class="pv"><div class="av"></div><span></span></div><div class="pq">Nama</div><input id="pi" maxlength="14" autocomplete="off" spellcheck="false" placeholder="Pemain"><div class="pq">Banner</div><div class="pr">'+bn+'</div><div class="pq">Profil</div><div class="pr">'+av+'</div>';
plEl.querySelector('#pi').value=pf.nm;
plEl.scrollTop=st;
cnEl.textContent=sv.coins;
pfDraw();
}
plEl.addEventListener('input',e=>{if(e.target.id=='pi'){const v=e.target.value.slice(0,14);if(v.trim().length>=3){pf.nm=v;pfSave();pfDraw()}}});
plEl.addEventListener('focusout',e=>{if(e.target.id=='pi')e.target.value=pf.nm});
plEl.addEventListener('keydown',e=>{if(e.target.id=='pi'){e.stopPropagation();if(e.key=='Enter')e.target.blur()}});
const LB=[["Wangsaf Gaming",3210],["Vikri",2765],["kucing_garong",2555],["WG • Rizal",2492],["cahyoo",2430],["Yusuf Alfa",2324],["bayu_aja",2125],["Rendi_gg",2072],["Ilham",2021],["reza_ganteng",1893],["Putra",1725],["dims",1682],["Salsa",1630],["bang ucup",1515],["ayam bakar",1470],["tobat_main",1434],["Alif",1399],["ujang",1352],["Reno",1319],["Dodi",1218],["kopi_sachet",1188],["Nanda_",1055],["Gilang",1029],["Zainal",1004],["Jaka",942],["mr.kevin",919],["Fahri",897],["ZR Dimas",874],["Umar",839],["Opik",819],["Lukman",777],["vino_",758],["kanjeng",687],["riski_yt",654],["Satria99",633],["Naufal",583],["Kevin Jr",545],["si botak",522],["Kiki",509],["Anwar",480],["lutfi",468],["bocil_epep",457],["Eka",421],["agus",411],["Maulana",401],["Tomi",370],["Oka",361],["Dinda",352],["Iqbal_",326],["Surya",303],["FikriXD",285],["n4ufal",278],["Mulyadi",272],["Zaki",262],["mas_bro_12",238],["si_paling_jago",233],["chandra",221],["dari_nol",209],["pak_haji",204],["Kris",199],["galih.ofc",179],["Aldo_14",175],["Putri Ayu",171],["hanif_09",159],["sultan_rawa",156],["alvinnn",153],["Yanto",149],["Tio",138],["Bima",133],["indra",120],["Nurul",116],["Tegar",111],["Kak Nanda",109],["ojan",107],["Mas Pur",98],["yoga_27",96],["Budi_",88],["Wahyu_",84],["farhan.id",82],["Widi",80],["wibu_kampung",73],["Danu",70],["Hendra",66],["gamau_kalah",65],["Rafli",64],["Arya",63],["rynz",59],["Bagas Prasetyo",57],["Kenzo",52],["Hafiz",51],["Fadil",50],["anak.kos",49],["ando",46],["Rangga",43],["Syahrul",42],["Qori",41],["nopal",37],["raffi_77",35],["ELL Fan",34],["tuan_kentang",33]];
const LT=[{a:1,b:3,n:'Top 1-3',c:2000},{a:4,b:10,n:'Top 4-10',c:1000},{a:11,b:50,n:'Top 11-50',c:500},{a:51,b:100,n:'Top 51-100',c:200}];
const LTT=['Legenda','Juara','Elit'];
const LCR=['#ffd45a','#d5dbe8','#d9966a'];
const crownSvg=c=>'<svg viewBox="0 0 24 24" style="color:'+c+'"><path d="M3 8l4.5 4L12 4.5 16.5 12 21 8l-2 11H5z" fill="currentColor" stroke="#2a2010" stroke-width="1.2" stroke-linejoin="round"/><circle cx="12" cy="4.2" r="1.7" fill="currentColor" stroke="#2a2010" stroke-width="1"/><circle cx="3" cy="8" r="1.4" fill="currentColor" stroke="#2a2010" stroke-width="1"/><circle cx="21" cy="8" r="1.4" fill="currentColor" stroke="#2a2010" stroke-width="1"/><path d="M5 19h14" stroke="#2a2010" stroke-width="1.6" stroke-linecap="round"/></svg>';
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function lbRank(){
let n=0;
for(const q of LB)if(q[1]>=sv.hi)n++;
return n+1;
}
function mLb(){
const st=plEl.scrollTop;
plEl.className='lb';
const h=sv.hi,rk=lbRank(),inn=rk<=100,nm=esc(pf.nm.trim()||'Pemain');
let ms;
if(inn){
const up=rk>1?LB[rk-2]:null;
ms='<div class="ms me"><b>Peringkatmu #'+rk+'</b><span>Rekor gelombang '+h+(up?'. Capai gelombang '+(up[1]+1)+' untuk melewati '+esc(up[0])+'.':'. Kamu di puncak leaderboard!')+'</span></div>';
}else ms='<div class="ms"><b>Rekormu: Gelombang '+h+'</b><span>Capai rekor gelombang '+(LB[99][1]+1)+' untuk masuk top 100 leaderboard.</span></div>';
const rw=LT.map((t,i)=>{
const mine=inn&&rk>=t.a&&rk<=t.b,done=pf.cl.includes(i);
const b=done?'<div class="bt ds">Diklaim</div>':mine?'<div class="bt" data-r="'+i+'">Klaim</div>':'<div class="bt ds no">Terkunci</div>';
return '<div class="rw'+(mine&&!done?' on':'')+'"><small>'+t.n+'</small><div class="rc">'+coinTag+t.c+'</div>'+b+'</div>';
}).join('');
const m=LB.slice(0,inn?rk-1:100).map(q=>({n:esc(q[0]),w:q[1]}));
if(inn){m.push({n:nm,w:h,me:1});for(const q of LB.slice(rk-1,99))m.push({n:esc(q[0]),w:q[1]})}
const rows=m.map((q,i)=>{
const t=i<3;
return '<div class="lr'+(t?' r'+(i+1):'')+(q.me?' me':'')+'"><b>'+(t?crownSvg(LCR[i]):'')+'<i>'+(i+1)+'</i></b><div class="nm"><span>'+q.n+'</span>'+(t?'<small style="color:'+LCR[i]+'">'+LTT[i]+(q.me?' - Kamu':'')+'</small>':q.me?'<small>Kamu</small>':'')+'</div><em>'+q.w+'<small>gelombang</small></em></div>';
}).join('');
plEl.innerHTML=ms+'<div class="pq">Hadiah koin</div><div class="rg">'+rw+'</div><div class="pq">Top 100</div>'+rows;
plEl.scrollTop=st;
cnEl.textContent=sv.coins;
}
pfDraw();
let rb=sv.hi;
sv.sk=[];
try{const o=JSON.parse(localStorage.getItem(SK)||'null');if(o&&Array.isArray(o.sk))for(const v of o.sk)if(SKN.includes(v)&&!sv.sk.includes(v))sv.sk.push(v)}catch(x){}
const SKD=[
{k:'q',n:'Skill',d:'Lima panah sekaligus',c:200,o:'#c9a45c',p:'M4 12h14M4 12l13-6M4 12l13 6M15.5 9.5 18.5 12l-3 2.5'},
{k:'v',n:'Gelombang Elektrik',d:'Sambaran listrik di depan',c:4000,o:'#a06bff',p:'M13.5 3 6.5 13.5h5L10.5 21l7-10.5h-5z'},
{k:'u',n:'Skill Hujan Panah',d:'Hujan panah',c:1000,o:'#e6c987',p:'M6 3v11M6 14l-2.2-2.2M6 14l2.2-2.2M12 6v15M12 21l-2.2-2.2M12 21l2.2-2.2M18 3v11M18 14l-2.2-2.2M18 14l2.2-2.2'},
{k:'m',n:'WG ULTIMATE',d:'Serang semua musuh di layar',c:12000,o:'#e0405a',p:'M2.5 8.5c6 2.2 13 2.2 19 0M5 12h14M7 12v8.5M17 12v8.5M12 3.5v5M9.5 20.5h5'}
];
function skSync(){for(const k of SKN)document.getElementById(k).classList.toggle('lc',!hasSk(k)&&!(SPC&&k=='v'))}
function skHtml(){
let h='';
for(const s of SKD){
const ow=sv.sk.includes(s.k);
h+='<div class="cd sk" data-s="'+s.k+'"><div class="ic"><svg viewBox="0 0 24 24" style="stroke:'+s.o+'"><path d="'+s.p+'"/></svg></div><b>'+s.n+'</b><small>'+s.d+'</small>'+(ow?'<div class="bt ds">Dimiliki</div>':'<div class="bt'+(sv.coins>=s.c?'':' no')+'">'+coinTag+s.c+'</div>')+'</div>';
}
return h;
}
function buySk(k){
if(sv.sk.includes(k))return;
const s=SKD.find(q=>q.k==k);
if(sv.coins<s.c){
const b=plEl.querySelector('[data-s="'+k+'"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=s.c;sv.sk.push(k);save();mList();skSync();
}
sv.cw=1;
try{const o=JSON.parse(localStorage.getItem(SK)||'null');if(o)sv.cw=M.max(1,M.min(sv.hi,o.cw|0))}catch(x){}
skSync();
const niEl=document.getElementById('ni'),neEl=document.getElementById('ne');
function nmGo(){
const v=niEl.value.trim();
if(v.length<3){neEl.textContent='Nama minimal 3 huruf';return}
pf.nm=v.slice(0,14);pf.ok=1;pfSave();pfDraw();
document.body.classList.remove('nn');
}
document.getElementById('nb').addEventListener('click',nmGo);
document.getElementById('nm').addEventListener('keydown',e=>{e.stopPropagation();if(e.key=='Enter')nmGo()});
niEl.addEventListener('input',()=>{neEl.textContent=''});
if(!pf.ok)document.body.classList.add('nn');
let ofOn=0,ofFail=0;
function ofSet(v){
if(v==ofOn)return;
ofOn=v;
document.body.classList.toggle('of',!!v);
if(v&&!inMenu&&!paused)tp();
}
function ofChk(){
if(!/^https?:/.test(location.protocol)){ofFail=0;ofSet(navigator.onLine?0:1);return}
if(!navigator.onLine)ofFail=M.max(ofFail,1);
fetch(location.pathname,{method:'HEAD',cache:'no-store'}).then(()=>{ofFail=0;ofSet(0)}).catch(()=>{ofFail++;if(ofFail>=2)ofSet(1)});
}
addEventListener('online',ofChk);
addEventListener('offline',ofChk);
setInterval(ofChk,4000);
ofChk();
const TB=[['e','Evolusi','M3 12h16M14 7l5 5-5 5M3 12l3-3M3 12l3 3'],['s','Skill','M13.5 3 6.5 13.5h5L10.5 21l7-10.5h-5z'],['u','Tingkatkan','M12 20V5M6 11l6-6 6 6'],['w','Sayap','M3 18c3-1 5-5 6-11 2 3 3 7 3 11M12 18c0-4 1-8 3-11 1 6 3 10 6 11'],['q','Squad','M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM5 20c0-4 3-6.5 7-6.5s7 2.5 7 6.5']];
function tbDraw(){tbEl.innerHTML=TB.map(q=>'<div class="tbb'+(shT==q[0]?' on':'')+'" data-t="'+q[0]+'"><svg viewBox="0 0 24 24"><path d="'+q[2]+'"/></svg><span>'+q[1]+'</span></div>').join('')}
const UC=[100,300,700,1200,1800,2500,3300,4200,5200,6300];
const UP=[
{n:'Tebal HP',d:'Tambah HP maksimal',o:'#e0405a',p:'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z',v:l=>'+'+l*10+'%'},
{n:'Damage Panah',d:'Tambah damage',o:'#ffb34f',p:'M12 3l2.2 5.3 5.6.5-4.3 3.7 1.3 5.5L12 15l-4.8 3 1.3-5.5L4.2 8.8l5.6-.5z',v:l=>'+'+l*10+'%'},
{n:'Kecepatan Panah',d:'Panah lebih cepat',o:'#6fd0ff',p:'M4 12h14M13 7l5 5-5 5M4 8h5M4 16h5',v:l=>'+'+l*5+'%'},
{n:'Panah Ganda',d:'Peluang 2 panah',o:'#c9a45c',p:'M3 8h14M13 4l4 4-4 4M3 16h14M13 12l4 4-4 4',v:l=>l*10+'%'}
];
function upHtml(){
let h='';
for(let i=0;i<UP.length;i++){
const s=UP[i],l=sv.up[i];
let pv='';
for(let j=0;j<10;j++)pv+='<i'+(j<l?' class="on"':'')+'></i>';
h+='<div class="cd up" data-u="'+i+'"><div class="ic"><svg viewBox="0 0 24 24" style="stroke:'+s.o+'"><path d="'+s.p+'"/></svg></div><b>'+s.n+'</b><small>'+s.d+'</small><small>'+s.v(l)+(l<10?' \u2192 '+s.v(l+1):'')+'</small><div class="lv">'+pv+'</div><small>Lv '+l+'/10</small>'+(l>=10?'<div class="bt ds">Maks</div>':'<div class="bt'+(sv.coins>=UC[l]?'':' no')+'">'+coinTag+UC[l]+'</div>')+'</div>';
}
return h;
}
function buyUp(i){
const l=sv.up[i];
if(l>=10)return;
if(sv.coins<UC[l]){
const b=plEl.querySelector('[data-u="'+i+'"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=UC[l];sv.up[i]=l+1;save();mList();
}
const WND=[
{k:1,n:'Sayap Emas',d:'Bisa dipakai semua karakter',c:3000,o:'#e6c987',p:'M3 18c3-1 5-5 6-11 2 3 3 7 3 11M12 18c0-4 1-8 3-11 1 6 3 10 6 11'},
{k:2,n:'Sayap Biru',d:'Bisa dipakai semua karakter',c:3000,o:'#8fd0ff',p:'M3 18c3-1 5-5 6-11 2 3 3 7 3 11M12 18c0-4 1-8 3-11 1 6 3 10 6 11'}
];
const SQP=[300,800,1300,2500];
function wnHtml(){
let h='';
for(const s of WND){
const ow=sv.wg.includes(s.k),on=sv.ws==s.k;
const b=!ow?'<div class="bt'+(sv.coins>=s.c?'':' no')+'">'+coinTag+s.c+'</div>':on?'<div class="bt">Lepas</div>':'<div class="bt">Pakai</div>';
h+='<div class="cd wn'+(on?' on':'')+'" data-y="'+s.k+'"><div class="ic"><svg viewBox="0 0 24 24" style="stroke:'+s.o+'"><path d="'+s.p+'"/></svg></div><b>'+s.n+'</b><small>'+s.d+'</small>'+b+'</div>';
}
if(sv.wg.length||sv.own.includes(4)||sv.own.includes(5)){
const l=sv.wl;
h+='<div class="cd wn" data-y="u"><div class="ic"><svg viewBox="0 0 24 24" style="stroke:#c9e6a8"><path d="M12 20V5M6 11l6-6 6 6"/></svg></div><b>Kekuatan Sayap</b><small>+'+l*8+'% kecepatan terbang, lebih tinggi'+(l<5?' \u2192 +'+(l+1)*8+'%':'')+'</small>'+lvPips(l)+'<small>Lv '+l+'/5</small>'+(l>=5?'<div class="bt ds">Maks</div>':'<div class="bt'+(sv.coins>=WLU[l]?'':' no')+'">'+coinTag+WLU[l]+'</div>')+'</div>';
}
return h;
}
function buyWn(k){
if(k=='u'){
const l=sv.wl;
if(l>=5)return;
if(sv.coins<WLU[l]){
const b=plEl.querySelector('[data-y="u"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=WLU[l];sv.wl=l+1;save();mList();
return;
}
k=+k;
const s=WND.find(q=>q.k==k);
if(sv.wg.includes(k)){sv.ws=sv.ws==k?0:k;save();mList();return}
if(sv.coins<s.c){
const b=plEl.querySelector('[data-y="'+k+'"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=s.c;sv.wg.push(k);sv.ws=k;save();mList();
}
const SQU=[250,500,900,1400,2000],WLU=[300,600,1000,1600,2400];
function lvPips(l){let pv='';for(let j=0;j<5;j++)pv+='<i'+(j<l?' class="on"':'')+'></i>';return '<div class="lv">'+pv+'</div>'}
function sqHtml(){
let h='';
for(let i=0;i<SC.length;i++){
const ow=sv.sq.includes(i),l=sv.sl[i];
let b,d;
if(!ow){d='Rekan bertarung';b='<div class="bt'+(sv.coins>=SQP[i]?'':' no')+'">'+coinTag+SQP[i]+'</div>'}
else{d='+'+l*15+'% HP dan damage'+(l<5?' \u2192 +'+(l+1)*15+'%':'');b=lvPips(l)+'<small>Lv '+l+'/5</small>'+(l>=5?'<div class="bt ds">Maks</div>':'<div class="bt'+(sv.coins>=SQU[l]?'':' no')+'">'+coinTag+SQU[l]+'</div>')}
h+='<div class="cd sq" data-z="'+i+'"><div class="ic"><svg viewBox="0 0 24 24" style="stroke:#9fd6c2"><path d="M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM5 20c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/></svg></div><b>'+SC[i].n+'</b><small>'+d+'</small>'+b+'</div>';
}
return h;
}
function buySq(i){
if(sv.sq.includes(i)){
const l=sv.sl[i];
if(l>=5)return;
if(sv.coins<SQU[l]){
const b=plEl.querySelector('[data-z="'+i+'"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=SQU[l];sv.sl[i]=l+1;save();mList();
return;
}
if(sv.coins<SQP[i]){
const b=plEl.querySelector('[data-z="'+i+'"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=SQP[i];sv.sq.push(i);save();mList();
}
const FLT=['none','brightness(1.12) contrast(1.08) saturate(1.25)','sepia(.35) saturate(1.3) hue-rotate(-8deg)','contrast(1.25) saturate(1.15)','grayscale(1)','none'];
const SO=[['gq','Grafik',['Rendah','Sedang','Tinggi']],['fp','FPS',['30','60','Maks']],['fl','Filter',['Normal','Cerah','Hangat','Kontras','Hitam Putih','Shadow']],['ly','Tata letak tombol',['Standar','Tukar sisi']]];
const WAL='https://www.mediafire.com/file/oncv6b55oniqapy/A.+WOAS_1.apk/file';
let waP=0;
function stApply(){
cv.style.filter=FLT[ST.fl];
document.body.classList.toggle('sx',!!ST.ly);
}
function stSave(){try{localStorage.setItem(STK,JSON.stringify(ST))}catch(x){}}
function stSet(k,v){
ST[k]=v;stSave();stApply();
if(k=='gq')rs();
mSt();
}
function stShare(){
if(ST.wa)return;
waP=1;
window.open('https://api.whatsapp.com/send?text='+encodeURIComponent('Ayo main WG of Archer Survival! Download game-nya di sini: '+WAL),'_blank');
}
function stWa(){
if(waP!=2||ST.wa)return;
waP=0;ST.wa=1;sv.coins+=100;save();stSave();
if(mView=='g')mGf();
}
document.addEventListener('visibilitychange',()=>{if(document.hidden){if(waP==1)waP=2}else stWa()});
addEventListener('blur',()=>{if(waP==1)waP=2});
addEventListener('focus',stWa);
addEventListener('pageshow',stWa);
const BK='pemanah_bonus_v1';
const BL=[{k:'c',c:50,t:'Follow Saluran',u:'https://whatsapp.com/channel/0029Vb6t3YqIXnluSByJvh1g',d:'Follow saluran WhatsApp, lalu kembali ke game untuk mendapat bonus. Hanya bisa diklaim sekali.'},{k:'y',c:70,t:'Buka YouTube',u:'https://youtu.be/xq3DUQa4JTs?si=rEoFRHZmSkbQRKQI',d:'Like dan subscribe di YouTube, lalu kembali ke game untuk mendapat bonus. Hanya bisa diklaim sekali.'},{k:'u',c:30,t:'Follow Woas Update',u:'https://whatsapp.com/channel/0029VbE0SuKGZNCyxMgAf702',d:'Follow saluran WhatsApp Woas Update, lalu kembali ke game untuk mendapat bonus. Hanya bisa diklaim sekali.'}];
const bnD={};
try{const o=JSON.parse(localStorage.getItem(BK)||'null');if(o)for(const q of BL)if(o[q.k])bnD[q.k]=1}catch(x){}
let bnK='',bnP=0;
function bnSave(){try{localStorage.setItem(BK,JSON.stringify(bnD))}catch(x){}}
function bnOpen(k){
if(bnD[k])return;
bnK=k;bnP=1;
window.open(BL.find(q=>q.k==k).u,'_blank');
}
function bnClaim(){
if(bnP!=2||!bnK||bnD[bnK])return;
const q=BL.find(z=>z.k==bnK);
bnP=0;bnK='';
bnD[q.k]=1;sv.coins+=q.c;save();bnSave();
if(mView=='g')mGf();
}
document.addEventListener('visibilitychange',()=>{if(document.hidden){if(bnP==1)bnP=2}else bnClaim()});
addEventListener('blur',()=>{if(bnP==1)bnP=2});
addEventListener('focus',bnClaim);
addEventListener('pageshow',bnClaim);
function mSt(){
const st=plEl.scrollTop;
plEl.className='st';
let h='';
for(const q of SO)h+='<div class="pq">'+q[1]+'</div><div class="sr">'+q[2].map((n,i)=>'<div class="so'+(ST[q[0]]==i?' on':'')+'" data-g="'+q[0]+':'+i+'">'+n+'</div>').join('')+'</div>';
plEl.innerHTML=h;
plEl.scrollTop=st;
cnEl.textContent=sv.coins;
}
function mGf(){
plEl.className='st';
plEl.innerHTML='<div class="ms"><b>Bonus 100 koin</b><span>Bagikan link game ke WhatsApp, lalu kembali ke game untuk mendapat bonus. Hanya bisa diklaim sekali.</span>'+(ST.wa?'<div class="bt ds">Diklaim</div>':'<div class="bt" data-w="1">Bagikan ke WhatsApp</div>')+'</div>'+BL.map(q=>'<div class="ms"><b>Bonus '+q.c+' koin</b><span>'+q.d+'</span>'+(bnD[q.k]?'<div class="bt ds">Diklaim</div>':'<div class="bt" data-n="'+q.k+'">'+q.t+'</div>')+'</div>').join('');
cnEl.textContent=sv.coins;
}
const RDK='pemanah_redeem_v1';
const RDL=[{k:'a',n:'VIP777',c:400},{k:'b',n:'VIP888',c:700},{k:'c',n:'WOASXWG',c:200},{k:'d',n:'X25CDX89IVHJK1M',c:9999999999}];
const rdD={};
try{const o=JSON.parse(localStorage.getItem(RDK)||'null');if(o)for(const q of RDL)if(o[q.k])rdD[q.k]=1}catch(x){}
function rdSave(){try{localStorage.setItem(RDK,JSON.stringify(rdD))}catch(x){}}
function rdMsg(t,k){const m=plEl.querySelector('#rdm');if(m){m.textContent=t;m.className=k}}
function mRd(){
plEl.className='st';
plEl.innerHTML='<div class="ms"><b>Kode Redeem</b><span>Masukkan kode untuk mendapat hadiah koin. Setiap kode hanya bisa dipakai sekali.</span><input id="rdi" maxlength="20" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="Masukkan kode"><div id="rdm"></div><div class="bt" data-rd="1">Klaim</div></div>';
cnEl.textContent=sv.coins;
}
function rdClaim(){
const inp=plEl.querySelector('#rdi');
if(!inp)return;
const v=inp.value.trim().toUpperCase();
if(!v){rdMsg('Masukkan kode dulu','er');return}
const q=RDL.find(z=>z.n==v);
if(!q){rdMsg('Kode tidak valid','er');return}
if(rdD[q.k]){rdMsg('Kode sudah dipakai','er');return}
rdD[q.k]=1;sv.coins+=q.c;save();rdSave();
inp.value='';
cnEl.textContent=sv.coins;
rdMsg('Berhasil! +'+q.c.toLocaleString('id-ID')+' koin','ok');
}
plEl.addEventListener('keydown',e=>{if(e.target.id=='rdi'){e.stopPropagation();if(e.key=='Enter'){e.preventDefault();rdClaim();e.target.blur()}}});
stApply();
function mList(){
if(mView=='s'){mSt();return}
if(mView=='g'){mGf();return}
if(mView=='r'){mRd();return}
if(mView=='b'){mLb();return}
if(mView=='f'){mPf();return}
if(mView=='m'){xzMisi();return}
plEl.className='';
const k=mView=='k',a=[],st=plEl.scrollTop;
for(let i=0;i<AE.length;i++){
if(!k&&shT!='e')break;
const ow=sv.own.includes(i);
if(k&&!ow)continue;
let b;
if(k)b=i==sv.sel&&!SPC?'<div class="bt ds">Dipilih</div>':'<div class="bt">Pilih</div>';
else if(ow)b='<div class="bt ds">Dimiliki</div>';
else b='<div class="bt'+(sv.coins>=CP[i]?'':' no')+'">'+coinTag+CP[i]+'</div>';
a.push('<div class="cd'+((k?i==sv.sel&&!SPC:i==mPrev)?' on':'')+'" data-i="'+i+'"><div class="ic"><svg viewBox="0 0 24 24" style="stroke:rgb('+AE[i].c+')"><path d="M3 12h16M14 7l5 5-5 5M3 12l3-3M3 12l3 3"/></svg>'+(i?'<img src="'+gearImg(0,i)+'"><img src="'+gearImg(1,i)+'">':'')+'</div><b>'+AE[i].n+'</b><small>HP x'+GRM[i]+'  Damage x'+GRM[i]+'</small>'+b+'</div>');
}
if(k)a.push(spCard());
if(!k&&shT=='s')a.push(skHtml());
if(!k&&shT=='u')a.push(upHtml());
if(!k&&shT=='w')a.push(wnHtml());
if(!k&&shT=='q')a.push(sqHtml());
plEl.innerHTML=a.join('');
plEl.scrollTop=st;
cnEl.textContent=sv.coins;
}
function mShow(v){
mView=v;mPrev=sv.sel;
mnEl.dataset.v=v;
mhEl.style.display=v=='h'?'flex':'none';
pnEl.style.display=v=='h'?'none':'flex';
ptEl.textContent=v=='k'?'Karakter':v=='b'?'Leaderboard':v=='f'?'Profil':v=='s'?'Pengaturan':v=='g'?'Bonus':v=='r'?'Redeem':v=='m'?'Misi':'Toko';
cnEl.textContent=sv.coins;
tbEl.style.display=v=='t'?'flex':'none';
if(v=='t')tbDraw();
if(v!='h')mList();
}
function buyCh(i){
if(sv.own.includes(i))return;
if(sv.coins<CP[i]){
const b=plEl.querySelector('[data-i="'+i+'"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=CP[i];sv.own.push(i);save();mList();
}
let mBusy=0;
function mFx(t,e){
t.classList.remove('fx');void t.offsetWidth;t.classList.add('fx');
const r=t.getBoundingClientRect(),d=document.createElement('i');
d.className='rp';d.style.left=(e.clientX-r.left)+'px';d.style.top=(e.clientY-r.top)+'px';
t.appendChild(d);
setTimeout(()=>{d.remove();t.classList.remove('fx')},520);
}
mnEl.addEventListener('click',e=>{
if(mBusy)return;
const t=e.target.closest('#mh .mb');
if(t)mFx(t,e);
const a=e.target.closest('[data-a]');
if(a){
const go=()=>{if(a.dataset.a=='p')mdOpen();else mShow(a.dataset.a)};
if(t){mBusy=1;setTimeout(()=>{mBusy=0;go()},a.dataset.a=='p'?280:170)}else go();
return;
}
const tb=e.target.closest('[data-t]');
if(tb&&mView=='t'){shT=tb.dataset.t;tbDraw();mList();plEl.scrollTop=0;return}
const up=e.target.closest('[data-u]');
if(up&&mView=='t'){if(e.target.closest('.bt'))buyUp(+up.dataset.u);return}
const s=e.target.closest('[data-s]');
if(s&&mView=='t'){if(e.target.closest('.bt'))buySk(s.dataset.s);return}
const wy=e.target.closest('[data-y]');
if(wy&&mView=='t'){if(e.target.closest('.bt'))buyWn(wy.dataset.y);return}
const zq=e.target.closest('[data-z]');
if(zq&&mView=='t'){if(e.target.closest('.bt'))buySq(+zq.dataset.z);return}
const xm=e.target.closest('[data-xm]');
if(xm&&mView=='m'){xzClaimD(+xm.dataset.xm);return}
const xa=e.target.closest('[data-xa]');
if(xa&&mView=='m'){xzClaimA(+xa.dataset.xa);return}
const r=e.target.closest('[data-r]');
if(r&&mView=='b'){
const i=+r.dataset.r,rk=lbRank();
if(!pf.cl.includes(i)&&rk<=100&&rk>=LT[i].a&&rk<=LT[i].b){pf.cl.push(i);sv.coins+=LT[i].c;save();pfSave();mLb()}
return;
}
const ga=e.target.closest('[data-g]');
if(ga&&mView=='s'){const z=ga.dataset.g.split(':');stSet(z[0],+z[1]);return}
const bn=e.target.closest('[data-n]');
if(bn&&mView=='g'){bnOpen(bn.dataset.n);return}
const wa=e.target.closest('[data-w]');
if(wa&&mView=='g'){stShare();return}
const rd=e.target.closest('[data-rd]');
if(rd&&mView=='r'){rdClaim();return}
const o=e.target.closest('[data-o]');
if(o){const q=o.dataset.o.split(':');pf[q[0]]=+q[1];pfSave();pfDraw();mPf();return}
const c=e.target.closest('.cd');
if(!c)return;
const i=+c.dataset.i;
if(mView=='k'){if(i==6){spSet(1);mList()}else if(sv.own.includes(i)){sv.sel=i;mPrev=i;spSet(0);save();mList()}}
else if(e.target.closest('.bt'))buyCh(i);
else{mPrev=i;mList()}
});
const MMK='pemanah_monster_v1';
const mdEl=document.getElementById('md'),mdLb=document.getElementById('mdl'),ykEl=document.getElementById('yk'),mdBr=document.getElementById('mdb');
const mdDay=()=>{const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()};
const mdOk=()=>{try{return localStorage.getItem(MMK)!=mdDay()}catch(x){return 1}};
function mdOpen(){
const ok=mdOk();
mdEl.querySelector('.m1').classList.toggle('lk',!ok);
mdLb.textContent=ok?'Tersedia hari ini  -  1x sehari':'Sudah dimainkan hari ini. Tersedia lagi besok.';
mdBr.textContent=brBest?'Rekor '+brBest+' bos':'';
mdEl.classList.add('on');
}
function mdClose(){mdEl.classList.remove('on')}
mdEl.addEventListener('click',e=>{
if(e.target===mdEl||e.target.closest('#mdx')){mdClose();return}
const c=e.target.closest('[data-d]');
if(!c)return;
const m=+c.dataset.d;
if(m==1){if(!mdOk())return;ykEl.classList.add('on');return}
mdClose();runStart(m);
});
ykEl.addEventListener('click',e=>{
if(e.target.closest('#yy')){try{localStorage.setItem(MMK,mdDay())}catch(x){}ykEl.classList.remove('on');mdClose();runStart(1);return}
if(e.target===ykEl||e.target.closest('#yn'))ykEl.classList.remove('on');
});
function resetRun(){
xzReset();cmbReset();E.length=0;S.length=0;Pr.length=0;A.length=0;P.length=0;DS.length=0;
p.x=0;p.y=GY;p.vx=0;p.vy=0;p.f=1;p.on=1;p.fy=0;p.air=0;p.sq=0;p.rc=0;p.sf=0;
p.ch=0;p.pc=0;p.dr=0;p.da=0;p.sh=0;p.cd=0;p.kc=0;p.uc=0;p.ut=0;p.us=0;
p.go=0;p.gf=0;p.gx=0;p.gc=0;p.ga=0;p.dc=0;p.dn=0;p.dw=0;p.dsp=0;p.dht=0;p.dz=0;p.dl=-1;
p.hu=0;p.inv=0;p.dead=0;p.rg=0;p.hp=p.mh;
shake=0;msg=null;GQ.l=0;FXA.fl=0;FXA.sa=0;
cam=p.x-VW*.5+50;
}
function menuGo(){
inMenu=1;WV.n=0;mmOn=0;brOn=0;
resetRun();
document.body.classList.add('mn');
mShow('h');
}
function runStart(m){
inMenu=0;
document.body.classList.remove('mn');
resetRun();
p.vt=sv.sel;
if(SPC){p.uc=1;cmbInit()}
if(p.vt>0)gearUp(p.vt);else{p.mh=100;p.hp=100}
p.mh=M.round(p.mh*gUh());p.hp=p.mh;
WV.k=0;WV.ts=T;
rb=sv.hi;
wake();
if(m==2)brGo();else if(m)mmGo();else waveGo(sv.cw);
}
function upMn(dt){
p.vt=mPrev;
p.wa+=((wgT()?.3:0)-p.wa)*M.min(1,dt*6);p.wp+=dt*1.8;
p.bl-=dt;if(p.bl<-.12)p.bl=rnd(2.2,5);
upH(dt);evFx(dt);
}
menuGo();
