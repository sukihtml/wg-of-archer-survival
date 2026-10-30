const PVK='pemanah_pvp_v1';
const pvRN=['Perunggu','Perak','Kapten','Hunter','Raja','Juara','WG'];
const pvRT=[0,120,300,520,800,1150,1600];
const pvRK=[
['#c98a4b','#6b3d17','#f0b87a','255,170,90'],
['#cfd8e6','#6e7b92','#ffffff','190,215,255'],
['#4f8fe0','#1d3f7a','#a9d0ff','110,170,255'],
['#3fbf8a','#0f5a3e','#9af0c8','90,230,170'],
['#a45be0','#4a1f7a','#e2bdff','190,120,255'],
['#e5503f','#7a1410','#ffb09a','255,110,80'],
['#ffd45a','#a8610a','#fff6c8','255,225,120']
];
const pvBN=[['#12306b','#3aa0e8'],['#4a0f1c','#e0643d'],['#0f4a3a','#4be0a8'],['#3a1a6b','#b46bff'],['#5a3a08','#ffd45a'],['#143a4a','#7fe0e8'],['#4a1040','#ff7ac0'],['#222a38','#8fa0c0']];
const pvNL=['Ngawi empire','ell sebelum before','ell sesudah after','amba disini','suki','detektif Suki','wg tukang','objektif-_-','lighting skill','negatif71','WG GW','Madiun squad','Kediri kuat','Solo balapan','Jogja istimewa','Bandung lautan','Malang kota','Surabaya panas','Cirebon udang','Tegal warteg','Banyuwangi','Pacitan','Ponorogo reog','Magetan','Nganjuk','Blitar','Tulungagung','Sragen','Klaten','Purwokerto','Brebes','Medan bos','Palembang','Pontianak','Makassar','Kupang','Ambon manise','Papua','Bali santai','Lombok','Aceh','Kalimantan','Sumatra','Sunda empire','Betawi','Batak','Minang','Japan','Korea','Brazil','Turki','Mesir','Norway','Chile','Peru','Kenya','Nepal','Laos','Vietnam','Thailand','Qatar','Swiss','Finland','Argentina','Maroko','Kuba','Yunani','bahasa alien','bahasa kalbu','english please','hola amigo','konnichiwa','annyeong','bonjour','danke','gracias','namaste','salam kenal','sugeng enjang','matur nuwun','piye kabare','mboh','wes ngantuk','nyuwun sewu','monggo','jangkrik','ora ngerti','kilat biru','petir hitam','bayangan suki','api biru','es krim','roti bakar','mie ayam','seblak','bakso urat','warkop','angkringan','kopi hitam','teh manis','motor tua','sepeda ontel','tukang parkir','tukang las','tukang bakso','tukang kayu','wg kuli','wg santuy','wg jaya','wg pemula','wg bocil','wg kecil','wg ngantuk','wg lapar','wg gabut','wg sepi','positif12','subjektif^^','absolut:v','random:)','~anak hilang~','x_x','._.','o_O','-_-','=_=','zzz','???','!!!','404','null','void','error','admin','guest','anak_senja','si_paling','kang_ojek','mas_bro','om_jago','pak_ketu','bang_toyib','dek_gemes','mbak_kece','abang_ijo','cah_ngawi','cah_solo','cah_jogja','arek_suroboyo','wong_cilik','kuli_panah','raja_iseng','ratu_gabut','bocil_epep','pemula_nih','pemanah malas','panah patah','busur kayu','busur emas','anak panah','panah bengkok','sasaran','tameng retak','perisai kayu','ksatria sepi','raja kecil','pangeran kodok','putri tidur','penyihir lupa','kurcaci','naga ompong','elang laut','macan kemarin','kucing garong','kucing mager','ayam goreng','bebek bakar','ikan asin','kodok ngorek','semut merah','lebah madu','kupu kupu','laba laba','malam jumat','hari senin','jam tiga','pagi buta','sore hari','tengah malam','subuh','dini hari','akhir bulan','tanggal tua','libur dulu','lagi rebahan','baru bangun','belum mandi','lupa pw','sinyal jelek','lag parah','hp kentang','kuota habis','baterai 1%','suki fans','suki kecil','suki ijo','suki merah','suki biru','suki tua','suki muda','suki gaming','ell fans','ell lama','ell baru','ell kembar','amba sini','amba situ','amba aja','amba tukang','negatif','positif','netral','objektif','subjektif','relatif','absolut','kreatif','aktif','pasif','reaktif','defensif','ofensif','detektif','eksklusif','Nol','Satu dua','Tiga','Empat lima','Enam','Tujuh','Delapan','Sembilan','Sepuluh','Seratus','Seribu','Sejuta'];
const pvPk=a=>a[M.floor(M.random()*a.length)];
const pvRn=n=>M.floor(M.random()*n);
const pvNM=pvNL.slice();
const PVC=[
{dg:.18,r0:.28,r1:.5,er:.04,eb:.35,em:.12,c0:.7,c1:1.3,ct:.85,sp:240,fl:.12,sh:0,hp:420,dm:.04,qc:16,uc:95,hu:1,ug:.55,hb:.55,u0:1.5,u1:5},
{dg:.55,r0:.1,r1:.22,er:.02,eb:.2,em:.09,c0:.35,c1:.7,ct:.7,sp:285,fl:.35,sh:1,hp:700,dm:.055,qc:10,uc:70,hu:1,ug:.9,hb:.35,u0:.8,u1:2.5},
{dg:.9,r0:.02,r1:.08,er:.01,eb:.1,em:.07,c0:.12,c1:.3,ct:.65,sp:320,fl:.55,sh:1,hp:900,dm:.065,qc:6,uc:50,hu:1,ug:1.2,hb:.2,u0:.2,u1:1.1}
];
const pvTier=r=>{let t=0;for(let i=1;i<7;i++)if(r>=pvRT[i])t=i;return t};
const pvS={rp:0,w:0,l:0,nm:'',bn:0,pd:-1};
try{
const o=JSON.parse(localStorage.getItem(PVK)||'null');
if(o){pvS.rp=M.max(0,o.rp|0);pvS.w=M.max(0,o.w|0);pvS.l=M.max(0,o.l|0);pvS.nm=String(o.nm||'').slice(0,14);pvS.bn=M.max(0,o.bn|0)%pvBN.length;pvS.pd=o.pd==null?-1:M.max(-1,M.min(6,o.pd|0))}
}catch(x){}
if(!pvS.nm){pvS.nm='Pemanah'+(1000+M.floor(rnd(0,9000)));pvS.bn=M.floor(rnd(0,pvBN.length))}
if(pvS.pd>=0){const t0=pvTier(pvS.rp);pvS.rp=M.max(0,pvS.rp-(14+(pvS.pd<t0?4:0)));pvS.l++;pvS.pd=-1;pvSave()}
let pvR=null,pvEd=0,pvMo=0,pvUc=0,pvFb=.6,pvAb=0;
const pvFm=()=>M.max(.1,M.min(1,pvFb-.1*pvMo+rnd(-.08,.08)));
function pvMd(w,b){
pvUc=M.min(1,b.uch);
pvMo=w?(M.random()<.7?1:0):(M.random()<.6?-1:0);
}
const pvSn=k=>{if(window.pvSfx)window.pvSfx(k)};
function pvSave(){try{localStorage.setItem(PVK,JSON.stringify(pvS))}catch(x){}}
const pvLv=t=>t<2?0:t<5?1:2;
const pvLN=['Noob','Sedang','Pro'];
function pvOpp(){
const tp=pvTier(pvS.rp),r=M.random();
let tr=r<.35?tp-1-(M.random()<.4?1:0):r<.7?tp+(M.random()<.5?0:(M.random()<.5?-1:1)):tp+1+(M.random()<.3?1:0);
tr=M.max(0,M.min(6,tr));
const lv=pvLv(tr),vt=lv==0?M.floor(rnd(0,2)):lv==1?M.floor(rnd(1,4)):M.floor(rnd(3,6)),sqn=lv==0?(M.random()<.4?1:0):lv==1?1:(M.random()<.6?2:1),w=M.floor(rnd(20,400));
return{nm:pvNM[M.floor(rnd(0,pvNM.length))],tr,bn:M.floor(rnd(0,pvBN.length)),lv,vt,sq:[0,1,2].sort(()=>M.random()-.5).slice(0,sqn),cf:PVC[lv],rp:pvRT[tr]+M.floor(rnd(0,(pvRT[tr+1]||2000)-pvRT[tr])),w,l:M.floor(rnd(10,w))};
}
function pvGo(){
duCf=pvO.cf;duVt=pvO.vt;pvOn=1;pvD='';pvEd=0;pvMo=0;pvUc=0;pvFb=[rnd(.25,.5),rnd(.45,.72),rnd(.7,.92)][pvO.lv];pvAb=rnd(-.025,.025);pvS.pd=pvO.tr;pvSave();
mmOn=1;duOn=1;duR=1;duP=0;duB=0;duF=0;WV.n=1;WV.q=0;WV.bs=0;WV.bt=0;spT=0;
skSync();
duNew();
}
function pvRes(w){
const o=pvTier(pvS.rp),d=w?24+(pvO.tr>o?8:0):-(14+(pvO.tr<o?4:0)),c=w?M.round(20*(1+.2*o)):0;
pvS.rp=M.max(0,pvS.rp+d);
if(w){pvS.w++;sv.coins+=c;save()}else pvS.l++;
const n=pvTier(pvS.rp);
pvS.pd=-1;
pvSave();
pvR={w,o,n,d,c,rp:pvS.rp,s:duP+' - '+duB,nm:pvO.nm};
pvD=(d>0?'+':'')+d+' RP'+(w?'  -  +'+c+' koin':'')+(n>o?'  -  Naik pangkat: '+pvRN[n]:n<o?'  -  Turun pangkat: '+pvRN[n]:'');
}
function pvQ(l,i){
const c=SC[i],h=c.hp*gDm()*(l.cf.hp>600?1.3:1);
E.push({t:0,bq:1,ld:l,id:i,c,x:l.x+c.of,y:GY,vx:0,f:l.f,hp:h,mh:h,sp:c.sp,dm:0,rg:0,cd:0,wu:0,mw:1,sw:0,ph:0,hf:0,dd:0,sz:1,boss:0,fx:0,stp:0,al:0,aa:0,ac:rnd(.8,1.6)});
}
function rkSt(x,cx,cy,r){
x.beginPath();
for(let i=0;i<10;i++){const a=-PI/2+i*PI/5,d=i%2?r*.45:r;x[i?'lineTo':'moveTo'](cx+M.cos(a)*d,cy+M.sin(a)*d)}
x.closePath();
}
function rkAr(x,x1,y1,x2,y2){
const a=M.atan2(y2-y1,x2-x1);
x.beginPath();x.moveTo(x1,y1);x.lineTo(x2,y2);x.stroke();
x.beginPath();x.moveTo(x2,y2);x.lineTo(x2-9*M.cos(a-.45),y2-9*M.sin(a-.45));x.lineTo(x2-9*M.cos(a+.45),y2-9*M.sin(a+.45));x.closePath();x.fill();
}
function rkSh(x){
x.beginPath();x.moveTo(48,12);x.lineTo(76,22);x.lineTo(74,52);x.quadraticCurveTo(70,74,48,87);x.quadraticCurveTo(26,74,22,52);x.lineTo(20,22);x.closePath();
}
function rkGl(x,cx,cy,r){
x.beginPath();x.moveTo(cx,cy-r);x.quadraticCurveTo(cx,cy,cx+r,cy);x.quadraticCurveTo(cx,cy,cx,cy+r);x.quadraticCurveTo(cx,cy,cx-r,cy);x.quadraticCurveTo(cx,cy,cx,cy-r);x.closePath();x.fill();
}
function rkDraw(c,t,tm){
const x=c.getContext('2d'),P=pvRK[t],pu=.5+.5*M.sin(tm*2.2+t),k=t/6;
x.setTransform(c.width/96,0,0,c.width/96,0,0);
x.clearRect(0,0,96,96);
x.lineJoin='round';x.lineCap='round';x.globalAlpha=1;
x.globalCompositeOperation='lighter';
let q=x.createRadialGradient(48,50,6,48,50,48);
q.addColorStop(0,'rgba('+P[3]+','+(.18+.3*pu*(.3+k))+')');q.addColorStop(1,'rgba('+P[3]+',0)');
x.fillStyle=q;x.fillRect(0,0,96,96);
x.globalCompositeOperation='source-over';
if(t==3){
x.strokeStyle=P[2];x.fillStyle=P[2];x.lineWidth=3;
rkAr(x,22,86,74,16);rkAr(x,74,86,22,16);
}
if(t==5){
for(const s of[-1,1])for(let i=0;i<7;i++){
const th=.5+i*.35,px=48+s*35*M.sin(th),py=50+35*M.cos(th),an=M.atan2(-M.sin(th)*35,s*M.cos(th)*35);
x.save();x.translate(px,py);x.rotate(an+s*.5);
x.beginPath();x.ellipse(0,0,7,2.8,0,0,TAU);x.fillStyle=i%2?P[0]:P[2];x.fill();x.strokeStyle=P[1];x.lineWidth=1;x.stroke();
x.restore();
}
}
if(t==6){
for(const s of[-1,1]){
x.save();x.translate(48+s*10,46);x.scale(s,1);x.rotate(M.sin(tm*2.4)*.07);
for(let i=0;i<5;i++){
x.save();x.rotate(-1.1+i*.36);
x.beginPath();x.ellipse(17-i,0,16-i*1.5,4.2,0,0,TAU);
q=x.createLinearGradient(0,0,34,0);q.addColorStop(0,P[0]);q.addColorStop(1,P[2]);
x.fillStyle=q;x.fill();x.strokeStyle=P[1];x.lineWidth=1.1;x.stroke();
x.restore();
}
x.restore();
}
}
q=x.createLinearGradient(20,12,76,87);q.addColorStop(0,P[2]);q.addColorStop(.45,P[0]);q.addColorStop(1,P[1]);
rkSh(x);x.fillStyle=q;x.fill();x.strokeStyle=P[1];x.lineWidth=2.4;x.stroke();
x.save();x.translate(48,50);x.scale(.82,.82);x.translate(-48,-50);rkSh(x);x.globalAlpha=.55;x.strokeStyle=P[2];x.lineWidth=1.6;x.stroke();x.restore();
x.save();rkSh(x);x.clip();
const n=[1,2,2,1,2,1,2][t],y0=[44,38,50,66,52,62,56][t];
for(let i=0;i<n;i++){
const y=y0+i*11;
x.strokeStyle=P[1];x.lineWidth=7;x.beginPath();x.moveTo(30,y);x.lineTo(48,y+11);x.lineTo(66,y);x.stroke();
x.strokeStyle=P[2];x.lineWidth=4;x.stroke();
}
x.fillStyle=P[2];x.strokeStyle=P[1];x.lineWidth=1.6;
if(t==2){rkSt(x,48,32,10);x.fill();x.stroke()}
if(t==3){x.strokeStyle=P[2];x.lineWidth=3.2;rkAr(x,48,62,48,26)}
if(t>=4){
const r=[0,0,0,0,9,11,13][t],cy=t==5?38:36;
x.fillStyle=P[2];rkGl(x,48,cy,r);
x.fillStyle='#fff';rkGl(x,48,cy,r*.45);
if(t==6){
x.globalCompositeOperation='lighter';x.strokeStyle='rgba('+P[3]+',.7)';x.lineWidth=1.6;
for(let i=0;i<8;i++){const a=tm*.6+i*PI/4;x.beginPath();x.moveTo(48+M.cos(a)*r*1.3,cy+M.sin(a)*r*1.3);x.lineTo(48+M.cos(a)*r*2.3,cy+M.sin(a)*r*2.3);x.stroke()}
x.globalCompositeOperation='source-over';
}
}
x.globalCompositeOperation='lighter';
const sx=((tm*.45)%1)*150-30,gs=x.createLinearGradient(sx-14,0,sx+14,0);
gs.addColorStop(0,'rgba(255,255,255,0)');gs.addColorStop(.5,'rgba(255,255,255,.38)');gs.addColorStop(1,'rgba(255,255,255,0)');
x.fillStyle=gs;x.fillRect(sx-14,0,28,96);
x.globalCompositeOperation='source-over';
x.restore();
if(t==4){
x.save();x.translate(0,M.sin(tm*2));
x.beginPath();x.moveTo(28,22);x.lineTo(30,6);x.lineTo(40,14);x.lineTo(48,2);x.lineTo(56,14);x.lineTo(66,6);x.lineTo(68,22);x.closePath();
q=x.createLinearGradient(0,2,0,22);q.addColorStop(0,'#fff0b0');q.addColorStop(1,'#d9a020');
x.fillStyle=q;x.fill();x.strokeStyle='#6b4a08';x.lineWidth=1.8;x.stroke();
for(const j of[[30,6],[48,2],[66,6]]){x.beginPath();x.arc(j[0],j[1],2.4,0,TAU);x.fillStyle=P[2];x.fill()}
x.restore();
}
x.globalCompositeOperation='lighter';
if(t==5){
for(let i=0;i<6;i++){
const fx=24+i*9.6,fl=9+6*M.sin(tm*9+i*1.7)+3*M.sin(tm*13+i),w=M.sin(tm*7+i)*2;
x.fillStyle='rgba(255,'+(110+i*22)+',60,.5)';
x.beginPath();x.moveTo(fx-4,90);x.quadraticCurveTo(fx-3+w,90-fl*.6,fx+w*1.4,90-fl);x.quadraticCurveTo(fx+3+w,90-fl*.5,fx+4,90);x.closePath();x.fill();
}
}
if(t==6){x.strokeStyle='hsla('+((tm*70)%360|0)+',90%,65%,.55)';x.lineWidth=2;x.beginPath();x.arc(48,50,45,0,TAU);x.stroke()}
x.fillStyle='#fff';
for(let i=0;i<t;i++){
const a=tm*(.8+i*.13)+i*2.4,sx2=48+M.cos(a)*(38+(i%2)*5),sy2=50+M.sin(a)*34,z=M.abs(M.sin(tm*3+i));
x.globalAlpha=.35+.65*z;
rkGl(x,sx2,sy2,2.5+2.5*z);
}
x.globalAlpha=1;x.globalCompositeOperation='source-over';
}
let rkOn=0;
function rkLoop(now){
let v=0;
for(const c of document.querySelectorAll('canvas[data-rk]'))if(c.offsetParent!==null){v=1;rkDraw(c,+c.dataset.rk,now/1000)}
if(v)requestAnimationFrame(rkLoop);else rkOn=0;
}
function rkStart(){if(!rkOn){rkOn=1;requestAnimationFrame(rkLoop)}}
function pvCardH(nm,tr,bn,rp,w,l,lv){
const b=pvBN[bn];
return '<div class="pb" style="background:repeating-linear-gradient('+(135+bn*20)+'deg,rgba(255,255,255,.08) 0 6px,transparent 6px 12px),linear-gradient(110deg,'+b[0]+','+b[1]+')"></div><div class="pa"><canvas data-rk="'+tr+'" width="144" height="144"></canvas></div><div class="pn">'+esc(String(nm))+'</div><div class="pk" style="color:rgb('+pvRK[tr][3]+')">'+pvRN[tr]+'  -  '+rp+' RP</div>'+(lv==null?'':'<div class="pl"><span class="lv l'+lv+'">'+pvLN[lv]+'</span></div>')+'<div class="ps">Menang '+w+'  Kalah '+l+'</div>';
}
function pvCard(){
const c=document.querySelector('#md .m4');
if(!c)return;
const tr=pvTier(pvS.rp);
c.querySelector('canvas').dataset.rk=tr;
document.getElementById('mdp').textContent=pvRN[tr]+'  -  '+pvS.rp+' RP  -  Menang '+pvS.w+'  Kalah '+pvS.l;
rkStart();
}
function pvRanks(){
if(document.getElementById('pvr'))return;
const r=pvS.rp,cur=pvTier(r),el=document.createElement('div');
el.id='pvr';
let h='<div class="pt">Pangkat PvP</div><div class="pi">'+(cur<6?'RP kamu '+r+'  -  '+(pvRT[cur+1]-r)+' RP lagi menuju '+pvRN[cur+1]:'RP kamu '+r+'  -  Pangkat tertinggi')+'</div><div class="rl">';
for(let i=0;i<7;i++)h+='<div class="rw'+(i==cur?' cu':'')+'" style="border-color:'+(i==cur?'rgb('+pvRK[i][3]+')':'rgba(255,255,255,.15)')+'"><canvas data-rk="'+i+'" width="112" height="112"></canvas><div class="rt"><b style="color:rgb('+pvRK[i][3]+')">'+pvRN[i]+'</b><span>'+pvRT[i]+(i<6?' - '+(pvRT[i+1]-1):'+')+' RP</span></div>'+(i==cur?'<i class="rc">KAMU</i>':'')+'</div>';
el.innerHTML=h+'</div><button id="pvc">Tutup</button>';
document.body.appendChild(el);
el.addEventListener('click',e=>{if(e.target.closest('#pvc'))el.remove()});
rkStart();
}
function pvFind(){
if(document.getElementById('pvo'))return;
const o=pvOpp(),dur=3+45*M.pow(M.random(),2.4),el=document.createElement('div');
el.id='pvo';
el.innerHTML='<div class="pt" id="pvt">Mencari lawan</div><div class="pr"><div class="pc" id="pvm"></div><div class="pv">VS</div><div class="pc" id="pvp"><div class="pb" style="background:#1a2238"></div><div class="pa"><div class="rd"></div></div><div class="pn" id="pvq">...</div><div class="pk">Mencari...</div><div class="ps">&nbsp;</div></div></div><div class="pi" id="pvi"></div><button id="pvx">Batal</button>';
document.body.appendChild(el);
const me=el.querySelector('#pvm'),op=el.querySelector('#pvp'),tt=el.querySelector('#pvt'),inf=el.querySelector('#pvi'),nq=el.querySelector('#pvq');
const rm=()=>{
const tr=pvTier(pvS.rp);
me.style.borderColor='rgb('+pvRK[tr][3]+')';
me.innerHTML=pvCardH(pf.nm.trim()||'Pemain',tr,pvS.bn,pvS.rp,pvS.w,pvS.l);
};
rm();
rkStart();
let t0=performance.now(),done=0,to=0;
const stop=()=>{clearInterval(iv);clearTimeout(to);el.remove()};
const iv=setInterval(()=>{
const s=(performance.now()-t0)/1000;
if(s<dur){
nq.textContent=pvNM[M.floor(rnd(0,pvNM.length))];
tt.textContent='Mencari lawan'+'...'.slice(0,1+M.floor(s*2)%3);
inf.textContent='Mencari lawan sepadan  '+M.floor(s/60)+':'+('0'+M.floor(s%60)).slice(-2);
}else if(!done){
done=1;
op.style.borderColor='rgb('+pvRK[o.tr][3]+')';
op.innerHTML=pvCardH(o.nm,o.tr,o.bn,o.rp,o.w,o.l,o.lv);
tt.textContent='Lawan ditemukan!';
pvSn('pvFound');
inf.textContent='Pertandingan dimulai...';
to=setTimeout(()=>{stop();pvO=o;runStart(4)},2200);
}
},90);
el.addEventListener('click',e=>{
if(e.target.closest('#pvx')){stop();return}
if(done)return;
if(e.target.closest('#pvm .pn')){
const n=prompt('Nama kamu',pf.nm);
if(n&&n.trim().length>=3){pf.nm=n.trim().slice(0,14);pfSave();pfDraw();rm()}
}else if(e.target.closest('#pvm .pb')){
pvS.bn=(pvS.bn+1)%pvBN.length;pvSave();rm();
}
});
}
function pvEnd(){
if(pvEd||!pvR)return;
pvEd=1;
if(pvR.w&&pvR.n>pvR.o)pvUp();else pvZ(0);
}
function pvUp(){
if(document.getElementById('pvu'))return;
const r=pvR,el=document.createElement('div');
el.id='pvu';
el.style.setProperty('--rc',pvRK[r.n][3]);
let sh='';
for(let i=0;i<26;i++)sh+='<i class="us" style="--a:'+M.round(i*360/26+rnd(-5,5))+'deg;--d:'+M.round(rnd(110,300))+'px;--s:'+rnd(0,.18).toFixed(2)+'s"></i>';
el.innerHTML='<div class="ur"></div><i class="uq" style="--i:0"></i><i class="uq" style="--i:1"></i><i class="uq" style="--i:2"></i>'+sh+'<div class="ub"><canvas data-rk="'+r.o+'" width="288" height="288"></canvas></div><div class="u1">NAIK PANGKAT</div><div class="u2">'+pvRN[r.n]+'</div><div class="u3">'+pvRN[r.o]+'  -  '+pvRN[r.n]+'  |  '+r.rp+' RP</div><button id="pvn" disabled>Lanjut</button><div class="fl"></div>';
document.body.appendChild(el);
const b=el.querySelector('.ub').getBoundingClientRect();
el.style.setProperty('--cx',(b.left+b.width/2)+'px');
el.style.setProperty('--cy',(b.top+b.height/2)+'px');
pvSn('pvRank');
rkStart();
setTimeout(()=>{if(!el.isConnected)return;el.querySelector('canvas').dataset.rk=r.n;el.classList.add('go')},1050);
setTimeout(()=>{const n=el.querySelector('#pvn');if(n)n.disabled=false},2100);
el.addEventListener('click',e=>{
const n=e.target.closest('#pvn');
if(n&&!n.disabled){pvSn('tap');el.remove();pvZ(1)}
});
}
function pvZ(q){
if(document.getElementById('pvz'))return;
const r=pvR,el=document.createElement('div');
el.id='pvz';el.className=r.w?'w':'l';
el.style.setProperty('--rc',pvRK[r.n][3]);
const nx=r.n<6?pvRT[r.n+1]-pvRT[r.n]:1,pg=r.n<6?M.max(0,M.min(1,(r.rp-pvRT[r.n])/nx)):1,p0=r.n<6?M.max(0,M.min(1,(r.rp-r.d-pvRT[r.n])/nx)):1;
el.innerHTML='<div class="zt">'+(r.w?'MENANG':'KALAH')+'</div><div class="zs">'+r.s+'  -  lawan '+r.nm+'</div><div class="zc"><canvas data-rk="'+r.n+'" width="168" height="168"></canvas><div class="zk"><b>'+pvRN[r.n]+'</b><span>'+r.rp+' RP'+(r.n<6?'  -  '+(pvRT[r.n+1]-r.rp)+' RP lagi':'')+'</span><div class="zp"><i style="width:'+p0*100+'%"></i></div></div></div><div class="zr"><div class="zd '+(r.d>0?'up':'dn')+'">'+(r.d>0?'+':'')+r.d+' RP</div>'+(r.w?'<div class="zq"><em></em>+'+r.c+' koin</div>':'')+'</div>'+(r.n<r.o?'<div class="zx">Turun pangkat ke '+pvRN[r.n]+'</div>':'')+'<button id="pvg">Cari Lawan Lagi</button><button id="pvh">Menu</button>';
document.body.appendChild(el);
rkStart();
if(!q)pvSn(r.w?'pvWin':'pvLose');
if(r.w)setTimeout(()=>pvSn('pvCoin'),q?500:900);
setTimeout(()=>{const i=el.querySelector('.zp i');if(i)i.style.width=pg*100+'%'},60);
el.addEventListener('click',e=>{
if(e.target.closest('#pvg')){pvSn('tap');el.remove();menuGo();pvFind();return}
if(e.target.closest('#pvh')){pvSn('tap');el.remove();menuGo()}
});
}
if(typeof document!='undefined'){
const st=document.createElement('style');
st.textContent=`
#pvo{position:fixed;inset:0;z-index:99;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:12px;box-sizing:border-box;background:radial-gradient(ellipse at 50% 30%,#1c2a5a,#070b18 70%);color:#fff;font-family:system-ui,sans-serif;animation:pvi .35s ease}
@keyframes pvi{from{opacity:0}to{opacity:1}}
#pvo .pt{font-size:18px;font-weight:700;letter-spacing:.04em}
#pvo .pr{display:flex;align-items:center;justify-content:center;gap:10px;width:100%}
#pvo .pc{width:min(40vw,190px);border-radius:14px;overflow:hidden;border:2px solid rgba(255,255,255,.35);background:#0b1224;text-align:center;box-shadow:0 6px 24px rgba(0,0,0,.5)}
#pvo .pb{height:64px}
#pvo .pa{width:72px;height:72px;margin:-38px auto 0;position:relative}
#pvo .pa canvas{width:72px;height:72px;display:block}
#pvo .pn{font-size:15px;font-weight:700;margin-top:4px;padding:0 6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#pvo .pk{font-size:12px;margin:2px 0}
#pvo .ps{font-size:11px;opacity:.6;margin-bottom:10px}
#pvo .pv{font-size:26px;font-weight:800;color:#ffd45a;text-shadow:0 0 12px rgba(255,200,80,.8)}
#pvo .rd{width:64px;height:64px;margin:4px auto;border-radius:50%;background:conic-gradient(from 0deg,rgba(120,180,255,0),rgba(120,180,255,.9));animation:pvr 1s linear infinite;-webkit-mask:radial-gradient(circle,transparent 46%,#000 48%);mask:radial-gradient(circle,transparent 46%,#000 48%)}
@keyframes pvr{to{transform:rotate(360deg)}}
#pvo .pi,#pvr .pi{font-size:13px;opacity:.85}
#pvr{position:fixed;inset:0;z-index:99;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:12px;box-sizing:border-box;background:radial-gradient(ellipse at 50% 20%,#1c2a5a,#070b18 70%);color:#fff;font-family:system-ui,sans-serif;animation:pvi .3s ease}
#pvr .pt{font-size:18px;font-weight:700}
#pvr .rl{width:min(92vw,420px);max-height:66vh;overflow-y:auto;display:flex;flex-direction:column;gap:6px}
#pvr .rw{display:flex;align-items:center;gap:12px;padding:6px 10px;border:1.5px solid;border-radius:12px;background:rgba(255,255,255,.05)}
#pvr .rw.cu{background:rgba(255,224,130,.12)}
#pvr canvas{width:52px;height:52px;flex:none}
#pvr .rt{display:flex;flex-direction:column;flex:1;min-width:0}
#pvr .rt b{font-size:15px}
#pvr .rt span{font-size:11px;opacity:.7}
#pvr .rc{font-style:normal;font-size:10px;font-weight:800;padding:2px 8px;border-radius:8px;background:#ffd45a;color:#4a3a0c}
#pvr button{padding:8px 22px;border-radius:20px;border:1px solid rgba(255,255,255,.4);background:rgba(255,255,255,.08);color:#fff;font-size:13px}
.mdc .rkb{display:inline-block;align-self:flex-start;margin-top:6px;margin-right:6px;padding:3px 9px;border-radius:10px;background:rgba(255,224,130,.25);border:1px solid rgba(255,224,130,.7);font-size:10px;font-style:normal;font-weight:700;color:#ffe09a}
#pvo button{padding:8px 22px;border-radius:20px;border:1px solid rgba(255,255,255,.4);background:rgba(255,255,255,.08);color:#fff;font-size:13px}
.mdc.m4{background:repeating-linear-gradient(135deg,rgba(255,255,255,.07) 0 6px,transparent 6px 12px),linear-gradient(110deg,#1a2a6c,#7b3fe4)}
.mdc canvas{width:58px;height:58px;flex:none}
.mdc .lb{display:inline-block;align-self:flex-start;margin-top:6px;padding:3px 9px;border-radius:10px;background:rgba(0,0,0,.35);border:1px dashed rgba(255,255,255,.45);font-size:10px;font-style:normal;color:rgba(255,255,255,.75)}
.mdc .lb.sh{animation:pvk .4s}
@keyframes pvk{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
#pvo .pl{margin:2px 0 6px}
.lv{display:inline-block;padding:2px 10px;border-radius:9px;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
.lv.l0{background:rgba(90,220,150,.16);color:#8ff0b8;border:1px solid rgba(90,220,150,.5)}
.lv.l1{background:rgba(255,200,80,.16);color:#ffd77a;border:1px solid rgba(255,200,80,.5)}
.lv.l2{background:rgba(255,100,80,.18);color:#ff9a8a;border:1px solid rgba(255,100,80,.55)}
@keyframes pvt{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
#pvu{position:fixed;inset:0;z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px;box-sizing:border-box;background:radial-gradient(ellipse at 50% 45%,rgba(var(--rc),.22),#05070f 68%);color:#fff;font-family:system-ui,sans-serif;overflow:hidden;animation:pvi .4s ease}
#pvu .ur{position:absolute;left:var(--cx,50%);top:var(--cy,45%);width:150vmax;height:150vmax;margin:-75vmax 0 0 -75vmax;background:repeating-conic-gradient(from 0deg,rgba(var(--rc),.17) 0 5deg,transparent 5deg 15deg);-webkit-mask:radial-gradient(circle,#000 0,transparent 55%);mask:radial-gradient(circle,#000 0,transparent 55%);opacity:0;animation:pvsp 26s linear infinite;pointer-events:none}
#pvu.go .ur{opacity:1;transition:opacity .9s}
@keyframes pvsp{to{transform:rotate(360deg)}}
#pvu .ub{position:relative;width:min(56vw,34vh,240px);height:min(56vw,34vh,240px);animation:pvch 1.05s ease-in forwards}
#pvu .ub canvas{width:100%;height:100%;display:block}
@keyframes pvch{0%{transform:scale(.84);filter:brightness(.8)}35%{transform:scale(.9) translateX(-2px);filter:brightness(1)}70%{transform:scale(.96) translateX(2px);filter:brightness(1.2)}100%{transform:scale(1.03);filter:brightness(1.7) drop-shadow(0 0 20px rgba(var(--rc),.9))}}
#pvu.go .ub{animation:pvpo .9s cubic-bezier(.2,1.4,.4,1) both}
@keyframes pvpo{0%{transform:scale(1.8);filter:brightness(3)}100%{transform:scale(1);filter:brightness(1) drop-shadow(0 0 22px rgba(var(--rc),.7))}}
#pvu .fl{position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none}
#pvu.go .fl{animation:pvfl .8s ease-out}
@keyframes pvfl{0%{opacity:.9}100%{opacity:0}}
#pvu .uq{position:absolute;left:var(--cx,50%);top:var(--cy,45%);width:40px;height:40px;margin:-20px 0 0 -20px;border-radius:50%;border:2px solid rgba(var(--rc),.9);opacity:0;pointer-events:none}
#pvu.go .uq{animation:pvq 1.5s ease-out both;animation-delay:calc(var(--i)*.2s)}
@keyframes pvq{0%{opacity:.95;transform:scale(.5)}100%{opacity:0;transform:scale(15)}}
#pvu .us{position:absolute;left:var(--cx,50%);top:var(--cy,45%);width:4px;height:16px;margin:-8px 0 0 -2px;border-radius:2px;background:linear-gradient(rgba(255,255,255,.95),rgba(var(--rc),.9));opacity:0;pointer-events:none}
#pvu.go .us{animation:pvs 1.4s cubic-bezier(.1,.7,.3,1) both;animation-delay:var(--s)}
@keyframes pvs{0%{opacity:0;transform:rotate(var(--a)) translateY(0) scaleY(.4)}12%{opacity:1}100%{opacity:0;transform:rotate(var(--a)) translateY(calc(var(--d)*-1)) scaleY(1.5)}}
#pvu .u1,#pvu .u2,#pvu .u3{opacity:0;text-align:center;position:relative}
#pvu .u1{font-size:13px;font-weight:700;letter-spacing:.42em;margin-right:-.42em;color:rgb(var(--rc))}
#pvu .u2{font-size:clamp(26px,8vh,40px);font-weight:800;letter-spacing:.08em;text-transform:uppercase;text-shadow:0 0 26px rgba(var(--rc),.9)}
#pvu .u3{font-size:13px;opacity:0;color:rgba(255,255,255,.75)}
#pvu.go .u1{animation:pvt .7s .15s ease-out both}
#pvu.go .u2{animation:pvt .7s .3s ease-out both}
#pvu.go .u3{animation:pvt .7s .5s ease-out both}
#pvu button{position:relative;margin-top:8px;min-width:180px;padding:11px 28px;border-radius:22px;border:1px solid rgba(var(--rc),.85);background:rgba(var(--rc),.16);color:#fff;font-size:14px;font-weight:700;opacity:0}
#pvu.go button{animation:pvt .6s 1.4s ease-out both}
#pvz{position:fixed;inset:0;z-index:99;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:12px;box-sizing:border-box;background:radial-gradient(ellipse at 50% 28%,rgba(var(--rc),.2),#070b18 70%);color:#fff;font-family:system-ui,sans-serif;animation:pvi .4s ease}
#pvz .zt{font-size:34px;font-weight:800;letter-spacing:.16em;margin-right:-.16em;animation:pvt .6s ease-out both}
#pvz.w .zt{color:#ffe09a;text-shadow:0 0 22px rgba(255,200,80,.55)}
#pvz.l .zt{color:#b9c4dc}
#pvz .zs{font-size:13px;opacity:.7;margin-top:-6px;animation:pvt .6s .08s ease-out both}
#pvz .zc{display:flex;align-items:center;gap:14px;padding:12px 18px;width:min(88vw,330px);box-sizing:border-box;border:1.5px solid rgba(var(--rc),.7);border-radius:16px;background:rgba(255,255,255,.05);animation:pvt .6s .15s ease-out both}
#pvz canvas{width:78px;height:78px;flex:none}
#pvz .zk{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}
#pvz .zk b{font-size:20px;color:rgb(var(--rc))}
#pvz .zk span{font-size:12px;opacity:.75}
#pvz .zp{height:6px;border-radius:3px;background:rgba(255,255,255,.12);overflow:hidden;margin-top:4px}
#pvz .zp i{display:block;height:100%;border-radius:3px;background:linear-gradient(90deg,rgba(var(--rc),.6),rgb(var(--rc)));transition:width 1s .5s cubic-bezier(.2,.8,.2,1)}
#pvz .zr{display:flex;gap:10px;align-items:center;animation:pvt .6s .3s ease-out both}
#pvz .zd{font-size:15px;font-weight:700;padding:6px 14px;border-radius:12px;background:rgba(255,255,255,.07)}
#pvz .zd.up{color:#8ff0b8}
#pvz .zd.dn{color:#ff9a8a}
#pvz .zq{display:flex;align-items:center;gap:7px;font-size:15px;font-weight:700;padding:6px 14px;border-radius:12px;background:rgba(255,214,90,.14);border:1px solid rgba(255,214,90,.45);color:#ffe09a}
#pvz .zq em{width:14px;height:14px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff3b8,#e0a323 70%);box-shadow:0 0 8px rgba(255,200,80,.7)}
#pvz .zx{font-size:12px;opacity:.75}
#pvz button{min-width:210px;padding:11px 24px;border-radius:22px;font-size:14px;font-weight:700;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.08);color:#fff;animation:pvt .6s .45s ease-out both}
#pvz #pvg{background:linear-gradient(110deg,#2f6bd8,#7b3fe4);border-color:rgba(255,255,255,.5)}
@media(max-height:420px){#pvz{gap:7px}#pvz .zt{font-size:26px}#pvz button{padding:8px 24px}}
`;
document.head.appendChild(st);
const mr=document.querySelector('#md .mdr');
if(mr)mr.insertAdjacentHTML('beforeend','<div class="mdc m4" data-d="4"><canvas data-rk="0" width="116" height="116"></canvas><div class="mdt"><b>Mode PvP</b><span>Cari lawan, menang untuk naik pangkat dari Perunggu sampai WG. Skill dan squad boleh dipakai. 3 babak.</span><em id="mdp"></em><i class="rkb">Lihat Pangkat</i><i class="lb">Leaderboard PvP  -  Coming Soon</i></div></div>');
const mdE=document.getElementById('md');
if(mdE)mdE.addEventListener('click',e=>{
const rb=e.target.closest('.rkb');
if(rb){e.stopPropagation();pvRanks();return}
const l=e.target.closest('.lb');
if(l){e.stopPropagation();l.classList.add('sh');setTimeout(()=>l.classList.remove('sh'),400)}
},true);
}
