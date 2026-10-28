function bar(x,y,w,v,m,c){
g.fillStyle='rgba(8,10,16,.62)';g.fillRect(x-w/2-1,y-1,w+2,5);
g.fillStyle=c;g.fillRect(x-w/2,y,w*M.max(0,v/m),3);
}
function bars(){
g.font='10px system-ui,sans-serif';g.textAlign='center';
for(const e of E){
if(e.dd||e.boss||e.hp>=e.mh)continue;
bar(e.x,e.y-70,28,e.hp,e.mh,'#a8453f');
}
for(const s of S){
if(s.dead)continue;
g.fillStyle='rgba(220,228,245,.7)';g.fillText(s.c.n,s.x,s.y-79);
bar(s.x,s.y-74,30,s.hp,s.mh,'#6f9f8e');
}
if(!p.dead&&p.hp<p.mh)bar(p.x,p.y-76,30,p.hp,p.mh,'#d9b878');
}
function hud(){
const x=14,y=14,w=150,r=M.max(0,p.hp/p.mh);
g.globalAlpha=1;
if(p.ut>0){
g.fillStyle='rgba('+AE[evl()].c+','+(.05+.3*M.max(0,(p.ut-UD+.4)/.4))+')';
g.fillRect(0,0,VW,VH);
const sg=g.createLinearGradient(0,0,0,VH*.5),sk=M.min(1,(UD-p.ut)*4)*M.min(1,p.ut*2.5),ec=AE[evl()].c;
sg.addColorStop(0,'rgba('+ec+','+.4*sk+')');sg.addColorStop(1,'rgba('+ec+',0)');
g.fillStyle=sg;g.fillRect(0,0,VW,VH*.5);
}
if(FXA.fl>0){g.fillStyle='rgba('+FXA.fc+','+FXA.fl+')';g.fillRect(0,0,VW,VH)}
g.fillStyle='rgba(8,10,16,.55)';g.fillRect(x-1,y-1,w+2,9);
g.fillStyle='#d9b878';g.fillRect(x,y,w*r,7);
g.fillStyle='rgba(255,255,255,.14)';g.fillRect(x,y,w*r,2);
g.textAlign='left';g.font='600 12px system-ui,sans-serif';g.fillStyle='rgba(228,234,248,.92)';
g.fillText(brOn?'Boss Rush '+brK:mmOn?'Monster '+mmT():'Gelombang '+WV.n,x,y+26);
{const ae=AE[evl()];g.fillStyle='rgb('+ae.c+')';g.fillText(ae.n,x+96,y+26,w-70)}
if(coinImg.complete&&coinImg.naturalWidth)g.drawImage(coinImg,x,y+32,14,14);
g.fillStyle='rgba(228,234,248,.92)';g.fillText(sv.coins,x+19,y+43);
g.textAlign='right';g.fillStyle=WV.n>rb&&!mmOn?'#ffd45a':'rgba(228,234,248,.7)';g.fillText(brOn?'Rekor '+brBest:mmOn?'+50 dalam '+M.ceil(60-mmTi%60)+'s':'Rekor '+sv.hi,x+w,y+43);g.textAlign='left';
g.font='11px system-ui,sans-serif';
for(let i=0;i<SC.length;i++){
const c=SC[i],yy=y+66+i*20,s=S.find(q=>q.c===c);
if(!s){g.fillStyle='rgba(215,224,242,.32)';g.fillText(sv.sq.includes(i)?c.n:c.n+'  (belum dibeli)',x,yy);continue}
g.fillStyle=s.dead?'rgba(215,224,242,.4)':'rgba(215,224,242,.88)';
g.fillText(s.dead?c.n+'  '+M.ceil(s.dead)+' dtk':c.n,x,yy);
g.fillStyle='rgba(8,10,16,.55)';g.fillRect(x,yy+4,92,4);
g.fillStyle='#6f9f8e';g.fillRect(x+.5,yy+4.5,91*M.max(0,s.hp/s.mh),3);
}
if(!coarse){
const ys=y+66+SC.length*20,kr=1-p.kc/SKC,ur=p.ut>0?p.ut/UD:p.uc;
if(hasSk('q')){
g.fillStyle=kr>=1?'rgba(215,224,242,.88)':'rgba(215,224,242,.4)';
const qn=SPC?spQn():'Skill';g.fillText(kr>=1?'Q  '+qn:'Q  '+qn+'  '+M.ceil(p.kc)+' dtk',x,ys);
g.fillStyle='rgba(8,10,16,.55)';g.fillRect(x,ys+4,92,4);
g.fillStyle='#c9a45c';g.fillRect(x+.5,ys+4.5,91*kr,3);
}
if(hasSk('u')){
g.fillStyle=p.uc>=1||p.ut>0?'rgba(240,226,180,.95)':'rgba(215,224,242,.4)';
const un=SPC?spUn():'Ultimate';g.fillText(p.ut>0?'E  '+un+' aktif':p.uc>=1?'E  '+un+' siap':'E  '+un,x,ys+22);
g.fillStyle='rgba(8,10,16,.55)';g.fillRect(x,ys+26,92,4);
g.fillStyle='#e6c987';g.fillRect(x+.5,ys+26.5,91*ur,3);
}
const vr=p.go>0?1:1-p.gc/GCD;
if(hasSk('v')){
g.fillStyle=vr>=1?'rgba(200,170,255,.92)':'rgba(215,224,242,.4)';
g.fillText(p.go>0?'R  Gelombang Elektrik aktif':p.gc>0?'R  Gelombang Elektrik  '+M.ceil(p.gc)+' dtk':'R  Gelombang Elektrik',x,ys+44);
g.fillStyle='rgba(8,10,16,.55)';g.fillRect(x,ys+48,92,4);
g.fillStyle='#a06bff';g.fillRect(x+.5,ys+48.5,91*vr,3);
}
const mr=SPC?(p.k3>0?1-p.k3/SK3:1):(p.dn>0?p.dn/DD:p.dc);
if(hasSk('m')){
const my=SPC?ys+44:ys+66;
g.fillStyle=(SPC?p.k3<=0:p.dn>0||p.dc>=1)?'rgba(255,140,152,.95)':'rgba(215,224,242,.4)';
g.fillText(SPC?(p.k3>0?'T  '+spMn()+'  '+M.ceil(p.k3)+' dtk':'T  '+spMn()):(p.dn>0?'T  Domain aktif':'T  Domain: Kuil Malevolen'),x,my);
g.fillStyle='rgba(8,10,16,.55)';g.fillRect(x,my+4,92,4);
g.fillStyle='#e0405a';g.fillRect(x+.5,my+4.5,91*mr,3);
}
if(hasSk('x')){
const cy=ys+66,cr=cmb.on?M.max(0,1-cmb.t/cmb.len):cmb.g;
g.fillStyle=cmb.on||cmb.g>=1?'rgba(255,214,140,.95)':'rgba(215,224,242,.4)';
g.fillText(cmb.on?'X  Ultimate Combo aktif':cmb.g>=1?'X  Ultimate Combo siap':'X  Ultimate Combo',x,cy);
g.fillStyle='rgba(8,10,16,.55)';g.fillRect(x,cy+4,92,4);
g.fillStyle='#ffb84c';g.fillRect(x+.5,cy+4.5,91*cr,3);
}
}
gearHud(x,y,w);gearPop();
const b=E.find(e=>e.boss&&!e.dd);
if(b){
const bw=M.min(380,VW-224),bx=M.max(210,(VW-bw)/2),br=M.max(0,b.hp/b.mh);
g.fillStyle='rgba(8,10,16,.6)';g.fillRect(bx-1,y-1,bw+2,10);
g.fillStyle='#a8453f';g.fillRect(bx,y,bw*br,8);
g.fillStyle='rgba(255,255,255,.12)';g.fillRect(bx,y,bw*br,2);
g.textAlign='center';g.font='600 12px system-ui,sans-serif';g.fillStyle='rgba(232,224,208,.92)';
g.fillText(b.nm,bx+bw/2,y+25);
}
if(msg){
const k=M.max(0,M.min(1,msg.l*2,(msg.m-msg.l)*3));
g.globalAlpha=k;g.textAlign='center';g.font='600 15px system-ui,sans-serif';g.fillStyle='#e8dfcc';
g.fillText(msg.t,VW/2,86);
const mw=g.measureText(msg.t).width/2+14;
g.fillStyle='rgba(200,180,140,.5)';g.fillRect(VW/2-mw,94,mw*2,1);
g.globalAlpha=1;
}
if(p.dead>.4){
const k=M.min(1,(p.dead-.4)*1.2);
g.fillStyle='rgba(8,6,10,'+.4*k+')';g.fillRect(0,0,VW,VH);
g.textAlign='center';g.fillStyle='rgba(235,225,210,'+k+')';g.font='600 22px system-ui,sans-serif';
g.fillText('Gugur',VW/2,VH*.4);
g.font='13px system-ui,sans-serif';g.fillStyle='rgba(235,225,210,'+.6*k+')';
g.fillText(brOn?'Bos dikalahkan '+brK:mmOn?'Bertahan '+mmT():'Gelombang '+WV.n,VW/2,VH*.4+26);
g.font=WV.n>rb&&!mmOn?'600 15px system-ui,sans-serif':'13px system-ui,sans-serif';
g.fillStyle=WV.n>rb&&!mmOn?'rgba(255,212,90,'+k+')':'rgba(235,225,210,'+.6*k+')';
g.fillText(brOn?'Koin didapat '+brK*20:mmOn?'Koin didapat '+mmCn*50:WV.n>rb?'REKOR BARU!':'Rekor '+sv.hi,VW/2,VH*.4+48);
}
}

