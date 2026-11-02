const xzB={d:0,s:0,m:0,h:0,v:0,c:0,r:0};
const xzT={dm:0,cd:0};
const XI=[];
let xzF=0,xzW=0;
const xzEl=document.createElement('div');
xzEl.id='xz';
document.body.appendChild(xzEl);
const XBD=[
{k:'d',n:'Damage Panah',d:'+12% damage',o:'#ffb34f',p:'M12 3l2.2 5.3 5.6.5-4.3 3.7 1.3 5.5L12 15l-4.8 3 1.3-5.5L4.2 8.8l5.6-.5z'},
{k:'s',n:'Panah Cepat',d:'+10% kecepatan panah',o:'#6fd0ff',p:'M4 12h14M13 7l5 5-5 5M4 8h5M4 16h5'},
{k:'m',n:'Panah Ganda',d:'+8% peluang 2 panah',o:'#c9a45c',p:'M3 8h14M13 4l4 4-4 4M3 16h14M13 12l4 4-4 4'},
{k:'h',n:'Tebal HP',d:'+15% HP maksimal dan pulih 30%',o:'#e0405a',p:'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z'},
{k:'v',n:'Lincah',d:'+6% kecepatan gerak',o:'#9fd6c2',p:'M5 12h10M11 7l5 5-5 5M3 8h4M3 16h4'},
{k:'c',n:'Pemburu Koin',d:'+25% koin dari musuh',o:'#f6d77a',p:'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM9.5 12h5'},
{k:'r',n:'Regenerasi',d:'Pulihkan 1% HP per detik',o:'#7fd48a',p:'M12 5v14M5 12h14'},
{k:'f',n:'Pemulihan',d:'Pulihkan 50% HP sekarang',o:'#ff8fa3',p:'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z'}
];
const XIT={
h:{n:'Darah pulih',c:'255,110,130',pa:new Path2D('M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z')},
s:{n:'Perisai 5 detik',c:'150,200,255',pa:new Path2D('M12 3.5 18.5 6v5.2c0 4.3-2.7 7.4-6.5 9.3-3.8-1.9-6.5-5-6.5-9.3V6z')},
d:{n:'Damage x1.5 selama 10 detik',c:'255,190,90',pa:new Path2D('M12 3l2.2 5.3 5.6.5-4.3 3.7 1.3 5.5L12 15l-4.8 3 1.3-5.5L4.2 8.8l5.6-.5z')},
c:{n:'Koin x2 selama 10 detik',c:'255,225,110',pa:new Path2D('M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM9.5 12h5')}
};
const xzCm=()=>(1+.25*xzB.c)*(xzT.cd>0?2:1);
function xzCn(b){const v=b*xzCm(),f=M.floor(v);return f+(M.random()<v-f?1:0)}
const XSK='pemanah_misi_v1';
const XST=['k','b','w','c','i','f'];
const xs={d:0,p:{},cl:[],t:{},a:[0,0,0,0,0,0,0,0]};
for(const k of XST){xs.p[k]=0;xs.t[k]=0}
try{
const o=JSON.parse(localStorage.getItem(XSK)||'null');
if(o){
xs.d=o.d|0;
if(o.p)for(const k of XST)xs.p[k]=M.max(0,+o.p[k]||0);
if(o.t)for(const k of XST)xs.t[k]=M.max(0,+o.t[k]||0);
if(Array.isArray(o.cl))xs.cl=o.cl.filter(v=>v>=0&&v<3);
if(Array.isArray(o.a))for(let i=0;i<xs.a.length;i++)xs.a[i]=M.max(0,o.a[i]|0);
}
}catch(x){}
function xzSave(){try{localStorage.setItem(XSK,JSON.stringify(xs))}catch(x){}}
setInterval(xzSave,4000);
addEventListener('pagehide',xzSave);
document.addEventListener('visibilitychange',()=>{if(document.hidden)xzSave()});
const xzDay=()=>{const t=new Date();return t.getFullYear()*10000+(t.getMonth()+1)*100+t.getDate()};
const xzDi=()=>M.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5);
function xzRoll(){
if(xs.d!=xzDay()){
xs.d=xzDay();
for(const k of XST)xs.p[k]=0;
xs.cl=[];
xzSave();
}
}
function xzAdd(k,n){
xzRoll();
xs.p[k]+=n;xs.t[k]+=n;
}
const XDP=[
{s:'k',n:60,r:120,t:'Kalahkan 60 musuh'},
{s:'k',n:150,r:250,t:'Kalahkan 150 musuh'},
{s:'b',n:1,r:150,t:'Kalahkan 1 boss'},
{s:'w',n:5,r:150,t:'Selesaikan 5 gelombang'},
{s:'w',n:12,r:300,t:'Selesaikan 12 gelombang'},
{s:'c',n:300,r:120,t:'Kumpulkan 300 koin dari musuh'},
{s:'i',n:5,r:120,t:'Ambil 5 item jatuhan'},
{s:'f',n:3,r:150,t:'Pilih 3 buff'}
];
const xzDl=()=>{const a=xzDi()%XDP.length;return[a,(a+3)%XDP.length,(a+5)%XDP.length].map(i=>XDP[i])};
const XAC=[
{n:'Pembasmi',u:'musuh',v:()=>xs.t.k,l:[[100,100],[500,300],[2000,800],[10000,2000]]},
{n:'Pemburu Boss',u:'boss',v:()=>xs.t.b,l:[[1,150],[5,400],[20,1000],[50,2500]]},
{n:'Penjelajah',u:'gelombang rekor',v:()=>sv.hi,l:[[5,150],[15,400],[30,1000],[60,2500]]},
{n:'Kolektor Item',u:'item',v:()=>xs.t.i,l:[[10,100],[50,300],[200,800]]},
{n:'Pemilih Buff',u:'buff',v:()=>xs.t.f,l:[[10,100],[50,300],[150,800]]},
{n:'Pasukan Lengkap',u:'anggota squad',v:()=>sv.sq.length,l:[[2,200],[4,600]]},
{n:'Kolektor Karakter',u:'karakter',v:()=>sv.own.length,l:[[3,300],[6,1000]]},
{n:'Bersayap',u:'sayap',v:()=>sv.wg.length,l:[[1,200],[2,500]]}
];
function xzMisi(){
xzRoll();
const st=plEl.scrollTop;
plEl.className='mi';
let h='<div class="pq">Misi harian</div>';
xzDl().forEach((q,i)=>{
const v=M.min(q.n,xs.p[q.s]),done=xs.cl.includes(i),ok=v>=q.n;
const b=done?'<div class="bt ds">Diklaim</div>':ok?'<div class="bt" data-xm="'+i+'">Klaim '+coinTag+q.r+'</div>':'<div class="bt ds no">'+coinTag+q.r+'</div>';
h+='<div class="ms"><b>'+q.t+'</b><span>'+v+' / '+q.n+'</span><div class="xp"><i style="width:'+(v/q.n*100)+'%"></i></div>'+b+'</div>';
});
h+='<div class="pq">Pencapaian</div>';
XAC.forEach((a,i)=>{
const c=xs.a[i],t=a.l[c];
if(!t){h+='<div class="ms"><b>'+a.n+'</b><span>Semua tingkat selesai</span><div class="bt ds">Selesai</div></div>';return}
const val=a.v(),v=M.min(t[0],val),ok=val>=t[0];
const b=ok?'<div class="bt" data-xa="'+i+'">Klaim '+coinTag+t[1]+'</div>':'<div class="bt ds no">'+coinTag+t[1]+'</div>';
h+='<div class="ms"><b>'+a.n+'  '+(c+1)+'/'+a.l.length+'</b><span>'+v+' / '+t[0]+' '+a.u+'</span><div class="xp"><i style="width:'+(v/t[0]*100)+'%"></i></div>'+b+'</div>';
});
plEl.innerHTML=h;
plEl.scrollTop=st;
cnEl.textContent=sv.coins;
}
function xzClaimD(i){
xzRoll();
const q=xzDl()[i];
if(!q||xs.cl.includes(i)||xs.p[q.s]<q.n)return;
xs.cl.push(i);sv.coins+=q.r;save();xzSave();xzMisi();
}
function xzClaimA(i){
const a=XAC[i],t=a&&a.l[xs.a[i]];
if(!t||a.v()<t[0])return;
xs.a[i]++;sv.coins+=t[1];save();xzSave();xzMisi();
}
function xzReset(){
for(const k in xzB)xzB[k]=0;
xzT.dm=0;xzT.cd=0;
XI.length=0;xzF=0;xzW=0;
xzEl.classList.remove('on');
}
function xzOpen(){
const pool=XBD.filter(b=>b.k=='f'||xzB[b.k]<5),pick=[];
while(pick.length<3&&pool.length)pick.push(pool.splice(M.floor(M.random()*pool.length),1)[0]);
xzF=1;
xzEl.innerHTML='<div class="xh"><b>Pilih Buff</b><span>Gelombang '+(WV.n-1)+' selesai</span></div><div class="xr">'+pick.map(b=>'<div class="xc" data-x="'+b.k+'"><svg viewBox="0 0 24 24" style="stroke:'+b.o+'"><path d="'+b.p+'"/></svg><b>'+b.n+'</b><small>'+b.d+'</small><i>'+(b.k=='f'?'Sekali pakai':'Lv '+xzB[b.k]+' \u2192 '+(xzB[b.k]+1))+'</i></div>').join('')+'</div>';
xzEl.classList.add('on');
}
function xzChoose(k){
if(!xzF)return;
if(k=='f')p.hp=M.min(p.mh,p.hp+p.mh*.5);
else if(k in xzB){
xzB[k]++;
if(k=='h'){const o=p.mh;p.mh=M.round(p.mh*1.15);p.hp=M.min(p.mh,p.hp+(p.mh-o)+p.mh*.3)}
}else return;
xzAdd('f',1);
xzF=0;
xzEl.classList.remove('on');
wake();
}
xzEl.addEventListener('click',e=>{
const c=e.target.closest('[data-x]');
if(c)xzChoose(c.dataset.x);
});
function xzKill(e,cn){
xzAdd('k',1);
if(e.boss)xzAdd('b',1);
xzAdd('c',cn);
const n=e.boss?3:(M.random()<.14?1:0),z=e.sz||1;
for(let i=0;i<n&&XI.length<12;i++){
const r=M.random(),hr=p.hp<p.mh*.6?.5:.35,rs2=(1-hr)/3;
const k=r<hr?'h':r<hr+rs2?'s':r<hr+rs2*2?'d':'c';
XI.push({k,x:e.x+rnd(-24,24)*z,y:e.y-40*z,vy:-240,g:0,l:14,t:0});
}
}
function xzPick(o){
const c=XIT[o.k];
if(o.k=='h')p.hp=M.min(p.mh,p.hp+p.mh*.3);
else if(o.k=='s')p.inv=M.max(p.inv,5);
else if(o.k=='d')xzT.dm=10;
else xzT.cd=10;
ring(o.x,o.y,c.c,34);
for(let j=0;j<8;j++)sp(3,o.x,o.y,rnd(-120,120),rnd(-200,-40),rnd(.3,.6),2,c.c,500,1.5);
ban(c.n);
xzAdd('i',1);
}
function xzUp(dt){
for(const k in xzT)if(xzT[k]>0)xzT[k]=M.max(0,xzT[k]-dt);
if(!p.dead&&xzB.r&&p.hp<p.mh)p.hp=M.min(p.mh,p.hp+p.mh*.01*xzB.r*dt);
for(let i=XI.length-1;i>=0;i--){
const o=XI[i];
o.l-=dt;o.t+=dt;
if(!o.g){o.vy+=900*dt;o.y+=o.vy*dt;if(o.y>=GY-8&&o.vy>0){o.y=GY-8;o.g=1;o.vy=0}}
if(o.l<=0){XI.splice(i,1);continue}
if(!p.dead&&M.abs(p.x-o.x)<34&&p.y>GY-90){xzPick(o);XI.splice(i,1)}
}
if(WV.n!==xzW){
const o=xzW;
xzW=WV.n;
if(o>0&&WV.n==o+1&&!p.dead){
xzAdd('w',1);
if(o%3==0)xzOpen();
}
}
}
function xzDraw(){
for(const o of XI){
if(o.l<3&&M.floor(T*8)%2)continue;
const c=XIT[o.k],y=o.y+(o.g?M.sin(T*4+o.x)*3:0);
g.save();
g.translate(o.x,y);
g.globalCompositeOperation='lighter';
const gr=g.createRadialGradient(0,0,2,0,0,20);
gr.addColorStop(0,'rgba('+c.c+',.55)');gr.addColorStop(1,'rgba('+c.c+',0)');
g.fillStyle=gr;g.beginPath();g.arc(0,0,20,0,TAU);g.fill();
g.globalCompositeOperation='source-over';
g.fillStyle='rgba(14,18,30,.85)';g.beginPath();g.arc(0,0,10,0,TAU);g.fill();
g.strokeStyle='rgb('+c.c+')';g.lineWidth=1.4;g.stroke();
g.translate(-7,-7);g.scale(.58,.58);
g.lineWidth=2.2;g.lineCap='round';g.lineJoin='round';
g.stroke(c.pa);
g.restore();
}
if(p.inv>1&&!p.dead){
g.save();
g.globalCompositeOperation='lighter';
g.strokeStyle='rgba(150,200,255,'+(.25+.15*M.sin(T*8))+')';
g.lineWidth=2;
g.beginPath();g.arc(p.x,p.y-30,30,0,TAU);g.stroke();
g.restore();
}
}
function xzHud(){
const L=[];
if(xzT.dm>0)L.push(['Damage x1.5  '+M.ceil(xzT.dm)+' dtk','255,190,90']);
if(xzT.cd>0)L.push(['Koin x2  '+M.ceil(xzT.cd)+' dtk','255,225,110']);
if(p.inv>1)L.push(['Perisai  '+M.ceil(p.inv)+' dtk','150,200,255']);
const bl=XBD.filter(b=>xzB[b.k]).map(b=>b.n+' '+xzB[b.k]).join('  ');
if(!L.length&&!bl)return;
g.textAlign='center';
g.font='600 11px system-ui,sans-serif';
for(let i=0;i<L.length;i++){g.fillStyle='rgb('+L[i][1]+')';g.fillText(L[i][0],VW/2,112+i*16)}
if(bl){
g.font='10px system-ui,sans-serif';
g.fillStyle='rgba(220,228,245,.6)';
g.fillText(bl,VW/2,112+L.length*16,VW-40);
}
g.textAlign='left';
}
