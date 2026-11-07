const GX=(()=>{
const M=Math,PI=M.PI,TAU=PI*2;
const AW=2048,AH=2048,RW=128,RR=512,MAXV=30000,MAXI=90000,VS=10;
const F=new Float32Array(MAXV*VS),U=new Uint32Array(F.buffer),X=new Uint16Array(MAXI);
let nv=0,ni=0,gl=null,cvs=null,dead=0,prog=null,bprog=null,vbo=null,ibo=null,qbo=null,uS,uQ,aP,aT,aG,aM,aC,atTex=null,atT=null,atC=null,rampTex=null,scr=null,mainC=null,bT=null,bB=0,bX=null,bC=0,bR=null,bid=1,rN=0,rMin=1e9,rMax=-1,mnx=0,mny=0,mxx=0,mxy=0;
let tmpA=null,tmpB=null,bc=null,dtex=null;
const rampData=new Uint8Array(RW*RR*4),rowOwn=new Array(RR).fill(null),rowBid=new Int32Array(RR);
let pm=0,pg=0,pcol=0,prow=0,pk=0,popq=1,ga=0,gb=0,gc=0,gd=0,ge=0,gf=0;
const cc=new Map(),bakes=[],layers=[],imgs=[];
const shelves=[];
let sTop=0;
let tcv=null,tcx=null,ccv=null,ccx=null;
let txX=0,txY=0,txH=0,txR=null;
const tcache=new Map();
const NC={white:[255,255,255,1],black:[0,0,0,1],transparent:[0,0,0,0],red:[255,0,0,1],green:[0,128,0,1],blue:[0,0,255,1],yellow:[255,255,0,1],gray:[128,128,128,1],grey:[128,128,128,1],orange:[255,165,0,1],cyan:[0,255,255,1],magenta:[255,0,255,1],gold:[255,215,0,1],silver:[192,192,192,1],pink:[255,192,203,1],purple:[128,0,128,1]};
function clamp255(v){return v<0?0:v>255?255:v}
function hsl2(h,s,l,a){
h=((h%360)+360)%360/360;
if(!s)return[l*255,l*255,l*255,a];
const q=l<.5?l*(1+s):l+s-l*s,p=2*l-q;
const f=t=>{t=(t+1)%1;return(t<1/6?p+(q-p)*6*t:t<.5?q:t<2/3?p+(q-p)*(2/3-t)*6:p)*255};
return[f(h+1/3),f(h),f(h-1/3),a];
}
function parseCol(s){
let m;
if(s.charCodeAt(0)===35){
let h=s.slice(1);
if(h.length===3||h.length===4)h=h.replace(/./g,'$&$&');
const n=parseInt(h.slice(0,6),16),a=h.length>=8?parseInt(h.slice(6,8),16)/255:1;
return[n>>16&255,n>>8&255,n&255,a];
}
if(s.charCodeAt(0)===114){
m=/^rgba?\(([^)]*)\)/.exec(s);
if(m){const p=m[1].split(',');return[clamp255(+p[0]),clamp255(+p[1]),clamp255(+p[2]),p.length>3?M.max(0,M.min(1,+p[3])):1]}
}
if(s.charCodeAt(0)===104){
m=/^hsla?\(([^)]*)\)/.exec(s);
if(m){const p=m[1].split(',');return hsl2(parseFloat(p[0]),parseFloat(p[1])/100,parseFloat(p[2])/100,p.length>3?M.max(0,M.min(1,+p[3])):1)}
}
const n=NC[s];
if(n)return n;
if(!ccx){ccv=document.createElement('canvas');ccv.width=ccv.height=1;ccx=ccv.getContext('2d',{willReadFrequently:true})}
ccx.clearRect(0,0,1,1);ccx.fillStyle='#000';ccx.fillStyle=s;ccx.fillRect(0,0,1,1);
const d=ccx.getImageData(0,0,1,1).data;
return[d[0],d[1],d[2],d[3]/255];
}
function col(s){
let r=cc.get(s);
if(r)return r;
r=parseCol(s);
if(cc.size>3000)cc.clear();
cc.set(s,r);
return r;
}
function Grad(k,a){this.k=k;this.a=a;this.st=[];this.so=null;this.row=-1;this.dirty=1;this.opq=1}
Grad.prototype.addColorStop=function(o,c){
const q=col(c);
this.st.push([+o,q[0],q[1],q[2],q[3]]);
this.dirty=1;this.so=null;
if(q[3]<.99)this.opq=0;
};
function buildRamp(g,r){
if(!g.so){g.so=g.st.slice().sort((a,b)=>a[0]-b[0])}
const s=g.so,n=s.length,o=r*RW*4;
for(let i=0;i<RW;i++){
const t=i/(RW-1);
let R=0,G=0,B=0,A=0;
if(n){
if(t<=s[0][0]){R=s[0][1];G=s[0][2];B=s[0][3];A=s[0][4]}
else if(t>=s[n-1][0]){const e=s[n-1];R=e[1];G=e[2];B=e[3];A=e[4]}
else{
let j=1;
while(j<n-1&&s[j][0]<t)j++;
const p=s[j-1],q=s[j],d=q[0]-p[0],u=d>0?(t-p[0])/d:1;
R=p[1]+(q[1]-p[1])*u;G=p[2]+(q[2]-p[2])*u;B=p[3]+(q[3]-p[3])*u;A=p[4]+(q[4]-p[4])*u;
}
}
rampData[o+i*4]=R*A+.5;rampData[o+i*4+1]=G*A+.5;rampData[o+i*4+2]=B*A+.5;rampData[o+i*4+3]=A*255+.5;
}
}
function rampRow(g){
let r;
if(g.row>=0&&rowOwn[g.row]===g)r=g.row;
else{r=rN;rN=(rN+1)%RR}
if(rowBid[r]===bid&&rowOwn[r]!==g)flush();
else if(rowBid[r]===bid&&g.dirty)flush();
if(rowOwn[r]!==g||g.dirty){
buildRamp(g,r);
g.row=r;g.dirty=0;rowOwn[r]=g;
if(r<rMin)rMin=r;
if(r>rMax)rMax=r;
}
rowBid[r]=bid;
return r;
}
function setPaint(c,st,al){
if(typeof st==='string'){
const q=col(st),a=q[3]*al;
if(a<=.002)return 0;
pcol=((M.round(q[0]*a))|(M.round(q[1]*a))<<8|(M.round(q[2]*a))<<16|(M.round(a*255))<<24)>>>0;
popq=a>=.985;pm=0;pg=0;
return 1;
}
if(al<=.002)return 0;
const m=c.m,det=m[0]*m[3]-m[1]*m[2];
if(!det||!st.st.length)return 0;
const ia=m[3]/det,ib=-m[1]/det,ic=-m[2]/det,id=m[0]/det,ie=(m[2]*m[5]-m[3]*m[4])/det,jf=(m[1]*m[4]-m[0]*m[5])/det,a=st.a;
if(st.k===0){
const dx=a[2]-a[0],dy=a[3]-a[1],l2=dx*dx+dy*dy;
if(l2<1e-12)return 0;
ga=(ia*dx+ib*dy)/l2;gb=(ic*dx+id*dy)/l2;gc=((ie-a[0])*dx+(jf-a[1])*dy)/l2;gd=0;ge=0;gf=0;
pm=2;pk=0;
}else{
const same=a[0]===a[3]&&a[1]===a[4];
if(same&&a[5]>a[2]){
const r1=a[5];
ga=ia/r1;gb=ic/r1;gc=(ie-a[0])/r1;gd=ib/r1;ge=id/r1;gf=(jf-a[1])/r1;
pm=3;pk=a[2]/r1;
}else{
ga=ia;gb=ic;gc=ie-a[0];gd=ib;ge=id;gf=jf-a[1];
pm=6;pk=0;
}
}
const al8=M.round(al*255);
pcol=(al8|al8<<8|al8<<16|al8<<24)>>>0;
prow=(rampRow(st)+.5)/RR;
popq=st.opq&&al>=.985;pg=1;
return 1;
}
function V(x,y,u,v){
const o=nv*VS;
F[o]=x;F[o+1]=y;F[o+2]=u;F[o+3]=v;
if(pg){F[o+4]=ga*x+gb*y+gc;F[o+5]=gd*x+ge*y+gf}else{F[o+4]=0;F[o+5]=0}
F[o+6]=pm;F[o+7]=prow;F[o+8]=pk;U[o+9]=pcol;
if(x<mnx)mnx=x;
if(x>mxx)mxx=x;
if(y<mny)mny=y;
if(y>mxy)mxy=y;
return nv++;
}
function need(c,a,b,tx,rg){
const bl=c.globalCompositeOperation==='lighter'?1:0;
if(bT!==c.t||bB!==bl||bC!==c.clipL||(tx&&bX!==tx)||(rg&&bR!==rg)||nv+a>MAXV||ni+b>MAXI){
flush();
bT=c.t;bB=bl;bC=c.clipL;
}
if(tx)bX=tx;
if(rg)bR=rg;
}
function bindT(t){
gl.bindFramebuffer(gl.FRAMEBUFFER,t.fbo);
gl.viewport(0,0,t.w,t.h);
if(t.sc){gl.enable(gl.SCISSOR_TEST);gl.scissor(0,0,t.w,t.h)}else gl.disable(gl.SCISSOR_TEST);
}
function setup(){
gl.useProgram(prog);
gl.uniform2f(uS,2/bT.w,2/bT.h);
gl.bindBuffer(gl.ARRAY_BUFFER,vbo);
gl.bufferData(gl.ARRAY_BUFFER,F.subarray(0,nv*VS),gl.STREAM_DRAW);
gl.vertexAttribPointer(aP,2,gl.FLOAT,false,40,0);
gl.vertexAttribPointer(aT,2,gl.FLOAT,false,40,8);
gl.vertexAttribPointer(aG,2,gl.FLOAT,false,40,16);
gl.vertexAttribPointer(aM,3,gl.FLOAT,false,40,24);
gl.vertexAttribPointer(aC,4,gl.UNSIGNED_BYTE,true,40,36);
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ibo);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,X.subarray(0,ni),gl.STREAM_DRAW);
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D,((bT===atT&&(!bX||bX===atTex))||(bX&&bX===bT.tex))?dtex:(bX||atTex));
if(rMax>=0){
gl.activeTexture(gl.TEXTURE1);
gl.bindTexture(gl.TEXTURE_2D,rampTex);
gl.texSubImage2D(gl.TEXTURE_2D,0,0,rMin,RW,rMax-rMin+1,gl.RGBA,gl.UNSIGNED_BYTE,rampData.subarray(rMin*RW*4,(rMax+1)*RW*4));
rMin=1e9;rMax=-1;
gl.activeTexture(gl.TEXTURE0);
}
if(bR){const a=bR.a;gl.uniform4f(uQ,a[3]-a[0],a[4]-a[1],a[5]-a[2],a[2])}
if(bB)gl.blendFunc(gl.ONE,gl.ONE);else gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);
}
function cm(L){return((1<<L)-1)<<4}
function flush(){
if(!nv)return;
if(dead){nv=0;ni=0;return}
bindT(bT);
setup();
if(bC){gl.enable(gl.STENCIL_TEST);gl.stencilMask(0);gl.stencilFunc(gl.EQUAL,cm(bC),cm(bC));gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP)}else gl.disable(gl.STENCIL_TEST);
gl.drawElements(gl.TRIANGLES,ni,gl.UNSIGNED_SHORT,0);
nv=0;ni=0;bid++;
}
function stenDraw(c,mode,i1,i2){
bindT(c.t);
setup();
const L=c.clipL;
gl.enable(gl.STENCIL_TEST);
gl.stencilMask(0x0F);
gl.colorMask(false,false,false,false);
if(L)gl.stencilFunc(gl.EQUAL,cm(L),cm(L));else gl.stencilFunc(gl.ALWAYS,0,0);
if(mode===1)gl.stencilOp(gl.KEEP,gl.KEEP,gl.INVERT);
else if(mode===2)gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR_WRAP);
else{gl.stencilOpSeparate(gl.FRONT,gl.KEEP,gl.KEEP,gl.INCR_WRAP);gl.stencilOpSeparate(gl.BACK,gl.KEEP,gl.KEEP,gl.DECR_WRAP)}
gl.drawElements(gl.TRIANGLES,i1,gl.UNSIGNED_SHORT,0);
if(mode===4){
gl.stencilMask(1<<(4+L));
gl.stencilFunc(gl.NOTEQUAL,0,0x0F);
gl.stencilOp(gl.KEEP,gl.KEEP,gl.INVERT);
gl.drawElements(gl.TRIANGLES,i2-i1,gl.UNSIGNED_SHORT,i1*2);
gl.stencilMask(0x0F);
gl.stencilOp(gl.ZERO,gl.ZERO,gl.ZERO);
gl.drawElements(gl.TRIANGLES,i2-i1,gl.UNSIGNED_SHORT,i1*2);
}else{
gl.colorMask(true,true,true,true);
gl.stencilMask(0x0F);
gl.stencilFunc(gl.NOTEQUAL,0,0x0F);
gl.stencilOp(gl.ZERO,gl.ZERO,gl.ZERO);
gl.drawElements(gl.TRIANGLES,i2-i1,gl.UNSIGNED_SHORT,i1*2);
}
gl.colorMask(true,true,true,true);
gl.stencilMask(0xFF);
gl.disable(gl.STENCIL_TEST);
nv=0;ni=0;bid++;
}
function coverQuad(){
const x0=mnx-1.5,y0=mny-1.5,x1=mxx+1.5,y1=mxy+1.5,i=nv;
const sv=mnx,sw=mny,sx2=mxx,sy2=mxy;
V(x0,y0,0,0);V(x1,y0,0,0);V(x1,y1,0,0);V(x0,y1,0,0);
mnx=sv;mny=sw;mxx=sx2;mxy=sy2;
X[ni++]=i;X[ni++]=i+1;X[ni++]=i+2;X[ni++]=i;X[ni++]=i+2;X[ni++]=i+3;
}
function sten(c,mode,gen,rg){
flush();
bT=c.t;bB=c.globalCompositeOperation==='lighter'?1:0;bC=c.clipL;
if(rg)bR=rg;
mnx=1e9;mny=1e9;mxx=-1e9;mxy=-1e9;
gen();
if(mxx<mnx){nv=0;ni=0;return}
const i1=ni;
coverQuad();
stenDraw(c,mode,i1,ni);
}
function clipPop(c,L,box){
flush();
bT=c.t;
mnx=box[0];mny=box[1];mxx=box[2];mxy=box[3];
const i=nv;
V(box[0]-1.5,box[1]-1.5,0,0);V(box[2]+1.5,box[1]-1.5,0,0);V(box[2]+1.5,box[3]+1.5,0,0);V(box[0]-1.5,box[3]+1.5,0,0);
X[ni++]=i;X[ni++]=i+1;X[ni++]=i+2;X[ni++]=i;X[ni++]=i+2;X[ni++]=i+3;
bindT(c.t);
setup();
gl.enable(gl.STENCIL_TEST);
gl.colorMask(false,false,false,false);
gl.stencilMask(1<<(4+L));
gl.stencilFunc(gl.ALWAYS,0,0);
gl.stencilOp(gl.ZERO,gl.ZERO,gl.ZERO);
gl.drawElements(gl.TRIANGLES,6,gl.UNSIGNED_SHORT,0);
gl.colorMask(true,true,true,true);
gl.disable(gl.STENCIL_TEST);
nv=0;ni=0;bid++;
}
function PB(){this.x=new Float64Array(4096);this.n=0;this.s=new Int32Array(128);this.cl=new Uint8Array(128);this.ns=0;this.m=null;this.lx=0;this.ly=0;this.sx=0;this.sy=0;this.has=0;this.cs=0}
PB.prototype.reset=function(){this.n=0;this.ns=0;this.has=0;this.cs=0};
PB.prototype.grow=function(){const a=new Float64Array(this.x.length*2);a.set(this.x);this.x=a};
PB.prototype.add=function(X_,Y_){
if(this.n*2+2>this.x.length)this.grow();
const i=this.n*2;
this.x[i]=X_;this.x[i+1]=Y_;this.n++;
};
PB.prototype.pt=function(x,y){const m=this.m;this.add(m[0]*x+m[2]*y+m[4],m[1]*x+m[3]*y+m[5])};
PB.prototype.begin=function(){
if(this.ns>=this.s.length){
const a=new Int32Array(this.s.length*2);a.set(this.s);this.s=a;
const b=new Uint8Array(this.cl.length*2);b.set(this.cl);this.cl=b;
}
this.s[this.ns]=this.n;this.cl[this.ns]=0;this.ns++;
};
PB.prototype.moveTo=function(x,y){
if(this.ns>0&&!this.cl[this.ns-1]&&this.s[this.ns-1]===this.n-1){this.n--;this.ns--}
this.begin();this.pt(x,y);
this.lx=this.sx=x;this.ly=this.sy=y;this.has=1;this.cs=0;
};
PB.prototype.cont=function(x,y){
if(!this.has){this.moveTo(x,y);return 0}
if(this.cs){this.cs=0;this.begin();this.pt(this.sx,this.sy)}
return 1;
};
PB.prototype.lineTo=function(x,y){
if(!this.cont(x,y))return;
this.pt(x,y);this.lx=x;this.ly=y;
};
PB.prototype.closePath=function(){
if(!this.has)return;
if(this.ns&&!this.cl[this.ns-1])this.cl[this.ns-1]=1;
this.cs=1;this.lx=this.sx;this.ly=this.sy;
};
PB.prototype.scl=function(){const m=this.m;return M.sqrt(M.abs(m[0]*m[3]-m[1]*m[2]))};
PB.prototype.quad=function(cx,cy,x,y){
if(!this.cont(cx,cy)){}
const m=this.m,i=(this.n-1)*2,x0=this.x[i],y0=this.x[i+1],x1=m[0]*cx+m[2]*cy+m[4],y1=m[1]*cx+m[3]*cy+m[5],x2=m[0]*x+m[2]*y+m[4],y2=m[1]*x+m[3]*y+m[5];
const d=M.abs(x0-2*x1+x2)+M.abs(y0-2*y1+y2),n=M.max(1,M.min(48,M.ceil(M.sqrt(d*1.2))));
for(let k=1;k<=n;k++){
const t=k/n,u=1-t,a=u*u,b=2*u*t,c=t*t;
this.add(a*x0+b*x1+c*x2,a*y0+b*y1+c*y2);
}
this.lx=x;this.ly=y;
};
PB.prototype.bez=function(ax,ay,bx,by,x,y){
this.cont(ax,ay);
const m=this.m,i=(this.n-1)*2,x0=this.x[i],y0=this.x[i+1],x1=m[0]*ax+m[2]*ay+m[4],y1=m[1]*ax+m[3]*ay+m[5],x2=m[0]*bx+m[2]*by+m[4],y2=m[1]*bx+m[3]*by+m[5],x3=m[0]*x+m[2]*y+m[4],y3=m[1]*x+m[3]*y+m[5];
const d=M.max(M.abs(x0-2*x1+x2)+M.abs(y0-2*y1+y2),M.abs(x1-2*x2+x3)+M.abs(y1-2*y2+y3)),n=M.max(1,M.min(64,M.ceil(M.sqrt(d*2))));
for(let k=1;k<=n;k++){
const t=k/n,u=1-t,a=u*u*u,b=3*u*u*t,c=3*u*t*t,e=t*t*t;
this.add(a*x0+b*x1+c*x2+e*x3,a*y0+b*y1+c*y2+e*y3);
}
this.lx=x;this.ly=y;
};
PB.prototype.ellipse=function(cx,cy,rx,ry,rot,a0,a1,ccw){
let d=a1-a0;
if(!ccw){if(d>=TAU)d=TAU;else{d%=TAU;if(d<0)d+=TAU}}
else{if(d<=-TAU)d=-TAU;else{d%=TAU;if(d>0)d-=TAU}}
const R=M.max(rx,ry)*this.scl(),da=2*M.acos(M.max(-1,1-.18/M.max(R,.0001))),n=M.max(1,M.min(160,M.max(M.ceil(M.abs(d)/da),M.ceil(M.abs(d)/(PI/2))))),cr=M.cos(rot),sr=M.sin(rot);
let px=0,py=0;
for(let k=0;k<=n;k++){
const a=a0+d*k/n,ex=M.cos(a)*rx,ey=M.sin(a)*ry;
px=cx+ex*cr-ey*sr;py=cy+ex*sr+ey*cr;
if(k===0){if(!this.has)this.moveTo(px,py);else this.lineTo(px,py)}
else this.pt(px,py);
}
this.lx=px;this.ly=py;
};
PB.prototype.arcTo=function(x1,y1,x2,y2,r){
if(!this.has){this.moveTo(x1,y1);return}
const x0=this.lx,y0=this.ly,a1=x0-x1,b1=y0-y1,a2=x2-x1,b2=y2-y1,l1=M.hypot(a1,b1),l2=M.hypot(a2,b2),cr=a1*b2-b1*a2;
if(!r||!l1||!l2||M.abs(cr)<1e-9){this.lineTo(x1,y1);return}
const u1x=a1/l1,u1y=b1/l1,u2x=a2/l2,u2y=b2/l2,ang=M.atan2(M.abs(cr),a1*a2+b1*b2),dist=r/M.tan(ang/2);
const tx1=x1+u1x*dist,ty1=y1+u1y*dist,tx2=x1+u2x*dist,ty2=y1+u2y*dist,bx=u1x+u2x,by=u1y+u2y,bl=M.hypot(bx,by),cd=r/M.sin(ang/2),ccx_=x1+bx/bl*cd,ccy_=y1+by/bl*cd;
const s0=M.atan2(ty1-ccy_,tx1-ccx_);
let sw=M.atan2(ty2-ccy_,tx2-ccx_)-s0;
while(sw>PI)sw-=TAU;
while(sw<-PI)sw+=TAU;
this.lineTo(tx1,ty1);
this.ellipse(ccx_,ccy_,r,r,0,s0,s0+sw,sw<0);
};
PB.prototype.rect=function(x,y,w,h){
this.moveTo(x,y);this.lineTo(x+w,y);this.lineTo(x+w,y+h);this.lineTo(x,y+h);this.closePath();
};
function P2D(d){this.o=[];if(typeof d==='string')this.svg(d)}
P2D.prototype.moveTo=function(x,y){this.o.push(0,x,y)};
P2D.prototype.lineTo=function(x,y){this.o.push(1,x,y)};
P2D.prototype.quadraticCurveTo=function(a,b,x,y){this.o.push(2,a,b,x,y)};
P2D.prototype.bezierCurveTo=function(a,b,c,d,x,y){this.o.push(3,a,b,c,d,x,y)};
P2D.prototype.ellipse=function(x,y,rx,ry,rot,a0,a1,ccw){this.o.push(4,x,y,rx,ry,rot,a0,a1,ccw?1:0)};
P2D.prototype.arc=function(x,y,r,a0,a1,ccw){this.o.push(4,x,y,r,r,0,a0,a1,ccw?1:0)};
P2D.prototype.closePath=function(){this.o.push(5)};
P2D.prototype.rect=function(x,y,w,h){this.o.push(6,x,y,w,h)};
P2D.prototype.arcTo=function(a,b,c,d,r){this.o.push(7,a,b,c,d,r)};
P2D.prototype.replay=function(p){
const o=this.o,n=o.length;
let i=0;
while(i<n){
switch(o[i]){
case 0:p.moveTo(o[i+1],o[i+2]);i+=3;break;
case 1:p.lineTo(o[i+1],o[i+2]);i+=3;break;
case 2:p.quad(o[i+1],o[i+2],o[i+3],o[i+4]);i+=5;break;
case 3:p.bez(o[i+1],o[i+2],o[i+3],o[i+4],o[i+5],o[i+6]);i+=7;break;
case 4:p.ellipse(o[i+1],o[i+2],o[i+3],o[i+4],o[i+5],o[i+6],o[i+7],o[i+8]);i+=9;break;
case 5:p.closePath();i+=1;break;
case 6:p.rect(o[i+1],o[i+2],o[i+3],o[i+4]);i+=5;break;
default:p.arcTo(o[i+1],o[i+2],o[i+3],o[i+4],o[i+5]);i+=6;
}
}
};
P2D.prototype.svgArc=function(x1,y1,rx,ry,phi,fa,fs,x2,y2){
if(x1===x2&&y1===y2)return;
if(!rx||!ry){this.lineTo(x2,y2);return}
rx=M.abs(rx);ry=M.abs(ry);
const c=M.cos(phi),s=M.sin(phi),dx=(x1-x2)/2,dy=(y1-y2)/2,xp=c*dx+s*dy,yp=-s*dx+c*dy;
const l=xp*xp/(rx*rx)+yp*yp/(ry*ry);
if(l>1){const q=M.sqrt(l);rx*=q;ry*=q}
const nu=rx*rx*ry*ry-rx*rx*yp*yp-ry*ry*xp*xp,de=rx*rx*yp*yp+ry*ry*xp*xp;
let k=M.sqrt(M.max(0,nu/de));
if(fa===fs)k=-k;
const cxp=k*rx*yp/ry,cyp=-k*ry*xp/rx,cx=c*cxp-s*cyp+(x1+x2)/2,cy=s*cxp+c*cyp+(y1+y2)/2;
const ang=(ux,uy,vx,vy)=>{const a=M.atan2(ux*vy-uy*vx,ux*vx+uy*vy);return a};
const t1=ang(1,0,(xp-cxp)/rx,(yp-cyp)/ry);
let dt=ang((xp-cxp)/rx,(yp-cyp)/ry,(-xp-cxp)/rx,(-yp-cyp)/ry);
if(!fs&&dt>0)dt-=TAU;
else if(fs&&dt<0)dt+=TAU;
this.ellipse(cx,cy,rx,ry,phi,t1,t1+dt,dt<0);
};
P2D.prototype.svg=function(d){
const t=d.match(/[MmLlHhVvCcSsQqTtAaZz]|[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g)||[];
let i=0,cmd='',x=0,y=0,sx_=0,sy_=0,px=0,py=0,pc='';
const nn=()=>+t[i++];
while(i<t.length){
if(/[A-Za-z]/.test(t[i]))cmd=t[i++];
const r=cmd>='a'&&cmd<='z',C=cmd.toUpperCase();
if(C==='Z'){this.closePath();x=sx_;y=sy_;pc='Z';continue}
if(C==='M'){let a=nn(),b=nn();if(r){a+=x;b+=y}this.moveTo(a,b);x=sx_=a;y=sy_=b;cmd=r?'l':'L';pc='M';continue}
if(C==='L'){let a=nn(),b=nn();if(r){a+=x;b+=y}this.lineTo(a,b);x=a;y=b;pc='L';continue}
if(C==='H'){let a=nn();if(r)a+=x;this.lineTo(a,y);x=a;pc='L';continue}
if(C==='V'){let b=nn();if(r)b+=y;this.lineTo(x,b);y=b;pc='L';continue}
if(C==='C'){let a=nn(),b=nn(),c=nn(),e=nn(),f=nn(),g=nn();if(r){a+=x;b+=y;c+=x;e+=y;f+=x;g+=y}this.bezierCurveTo(a,b,c,e,f,g);px=c;py=e;x=f;y=g;pc='C';continue}
if(C==='S'){let c=nn(),e=nn(),f=nn(),g=nn();if(r){c+=x;e+=y;f+=x;g+=y}const a=pc==='C'?2*x-px:x,b=pc==='C'?2*y-py:y;this.bezierCurveTo(a,b,c,e,f,g);px=c;py=e;x=f;y=g;pc='C';continue}
if(C==='Q'){let a=nn(),b=nn(),f=nn(),g=nn();if(r){a+=x;b+=y;f+=x;g+=y}this.quadraticCurveTo(a,b,f,g);px=a;py=b;x=f;y=g;pc='Q';continue}
if(C==='T'){let f=nn(),g=nn();if(r){f+=x;g+=y}const a=pc==='Q'?2*x-px:x,b=pc==='Q'?2*y-py:y;this.quadraticCurveTo(a,b,f,g);px=a;py=b;x=f;y=g;pc='Q';continue}
if(C==='A'){const rx=nn(),ry=nn(),ph=nn()*PI/180,fa=nn(),fs=nn();let a=nn(),b=nn();if(r){a+=x;b+=y}this.svgArc(x,y,rx,ry,ph,fa,fs,a,b);x=a;y=b;pc='A';continue}
i++;
}
};
let dsx=new Float64Array(1024),dsy=new Float64Array(1024),dux=new Float64Array(1024),duy=new Float64Array(1024);
function growD(n){
if(n<=dsx.length)return;
let l=dsx.length;
while(l<n)l*=2;
dsx=new Float64Array(l);dsy=new Float64Array(l);dux=new Float64Array(l);duy=new Float64Array(l);
}
function tri(a,b,c){X[ni++]=a;X[ni++]=b;X[ni++]=c}
function quadV(ax,ay,bx,by,cx,cy,dx,dy){
const i=nv;
V(ax,ay,0,0);V(bx,by,0,0);V(cx,cy,0,0);V(dx,dy,0,0);
X[ni++]=i;X[ni++]=i+1;X[ni++]=i+2;X[ni++]=i;X[ni++]=i+2;X[ni++]=i+3;
}
function fanArc(cx,cy,r,a0,sw){
const da=2*M.acos(M.max(-1,1-.2/M.max(r,.25))),n=M.max(1,M.min(48,M.ceil(M.abs(sw)/da))),c=V(cx,cy,0,0);
let prev=V(cx+M.cos(a0)*r,cy+M.sin(a0)*r,0,0);
for(let k=1;k<=n;k++){
const a=a0+sw*k/n,q=V(cx+M.cos(a)*r,cy+M.sin(a)*r,0,0);
tri(c,prev,q);
prev=q;
}
}
function capsule(ax,ay,bx,by,hw){
const th=M.atan2(by-ay,bx-ax),da=2*M.acos(M.max(-1,1-.2/M.max(hw,.25))),n=M.max(2,M.min(32,M.ceil(PI/da))),hub=V((ax+bx)/2,(ay+by)/2,0,0),first=nv;
for(let k=0;k<=n;k++){const a=th+PI/2+PI*k/n;V(ax+M.cos(a)*hw,ay+M.sin(a)*hw,0,0)}
for(let k=0;k<=n;k++){const a=th-PI/2+PI*k/n;V(bx+M.cos(a)*hw,by+M.sin(a)*hw,0,0)}
const tot=(n+1)*2;
for(let k=0;k<tot;k++)tri(hub,first+k,first+(k+1)%tot);
}
function strokeLine(P,s,e,closed,hw,cap,join,ml){
let n=0;
growD(e-s+2);
for(let i=s;i<e;i++){
const x=P[i*2],y=P[i*2+1];
if(n===0||(x-dsx[n-1])*(x-dsx[n-1])+(y-dsy[n-1])*(y-dsy[n-1])>1e-8){dsx[n]=x;dsy[n]=y;n++}
}
if(closed&&n>1&&(dsx[0]-dsx[n-1])*(dsx[0]-dsx[n-1])+(dsy[0]-dsy[n-1])*(dsy[0]-dsy[n-1])<1e-8)n--;
if(n===0)return;
if(n===1){
if(cap===1)fanArc(dsx[0],dsy[0],hw,0,TAU);
else if(cap===2)quadV(dsx[0]-hw,dsy[0]-hw,dsx[0]+hw,dsy[0]-hw,dsx[0]+hw,dsy[0]+hw,dsx[0]-hw,dsy[0]+hw);
return;
}
const segs=closed?n:n-1;
if(!closed&&n===2&&cap===1){capsule(dsx[0],dsy[0],dsx[1],dsy[1],hw);return}
for(let i=0;i<segs;i++){
const j=(i+1)%n,dx=dsx[j]-dsx[i],dy=dsy[j]-dsy[i],l=M.sqrt(dx*dx+dy*dy),ux=dx/l,uy=dy/l;
dux[i]=ux;duy[i]=uy;
let ax=dsx[i],ay=dsy[i],bx=dsx[j],by=dsy[j];
if(cap===2&&!closed){
if(i===0){ax-=ux*hw;ay-=uy*hw}
if(i===segs-1){bx+=ux*hw;by+=uy*hw}
}
const nx=-uy*hw,ny=ux*hw;
quadV(ax+nx,ay+ny,bx+nx,by+ny,bx-nx,by-ny,ax-nx,ay-ny);
}
const k0=closed?0:1,k1=closed?n:n-1;
for(let k=k0;k<k1;k++){
const a=closed?(k-1+n)%n:k-1,b=k%segs,u1x=dux[a],u1y=duy[a],u2x=dux[b],u2y=duy[b],cr=u1x*u2y-u1y*u2x,dt=u1x*u2x+u1y*u2y;
if(cr*cr<2.5e-5&&dt>0)continue;
const sg=cr>0?-1:1,px=dsx[k],py=dsy[k],n1x=-u1y*hw*sg,n1y=u1x*hw*sg,n2x=-u2y*hw*sg,n2y=u2x*hw*sg;
if(join===1){
const sw=M.atan2(cr,dt);
if(M.abs(sw)<.35){const c=V(px,py,0,0),p=V(px+n1x,py+n1y,0,0),q=V(px+n2x,py+n2y,0,0);tri(c,p,q)}
else fanArc(px,py,hw,M.atan2(n1y,n1x),sw);
}else if(join===0&&M.sqrt(2/(1+dt))<=ml){
const f=1/(1+dt),c=V(px,py,0,0),p=V(px+n1x,py+n1y,0,0),t=V(px+(n1x+n2x)*f,py+(n1y+n2y)*f,0,0),q=V(px+n2x,py+n2y,0,0);
tri(c,p,t);tri(c,t,q);
}else{
const c=V(px,py,0,0),p=V(px+n1x,py+n1y,0,0),q=V(px+n2x,py+n2y,0,0);
tri(c,p,q);
}
}
if(!closed&&cap===1){
const t0=M.atan2(duy[0],dux[0]),t1=M.atan2(duy[segs-1],dux[segs-1]);
fanArc(dsx[0],dsy[0],hw,t0+PI/2,PI);
fanArc(dsx[n-1],dsy[n-1],hw,t1-PI/2,PI);
}
}
const dpb=new PB();
function dashPB(src,pat,off,dst,scl){
dst.reset();
const P=src.x,len=pat.length;
let tot=0;
for(let i=0;i<len;i++)tot+=pat[i]*scl;
if(tot<=0)return 0;
for(let k=0;k<src.ns;k++){
const s=src.s[k],e=k+1<src.ns?src.s[k+1]:src.n,closed=src.cl[k];
let idx=0,rem=pat[0]*scl,on=1,o=(off*scl)%tot;
if(o<0)o+=tot;
while(o>0){
if(o>=rem){o-=rem;idx=(idx+1)%len;rem=pat[idx]*scl;on^=1}
else{rem-=o;o=0}
}
let started=0;
const cnt=closed?e-s+1:e-s;
for(let i=0;i<cnt-1;i++){
const a=s+i,b=s+(i+1)%(e-s),x0=P[a*2],y0=P[a*2+1],x1=P[b*2],y1=P[b*2+1],sl=M.hypot(x1-x0,y1-y0);
let pos=0;
if(sl<1e-9)continue;
if(on&&!started){dst.begin();dst.add(x0,y0);started=1}
while(sl-pos>rem){
pos+=rem;
const t=pos/sl,px=x0+(x1-x0)*t,py=y0+(y1-y0)*t;
if(on){dst.add(px,py);started=0}
else{dst.begin();dst.add(px,py);started=1}
on^=1;idx=(idx+1)%len;rem=pat[idx]*scl;
if(rem<=0)rem=1e-6;
}
rem-=sl-pos;
if(on)dst.add(x1,y1);
}
}
return 1;
}
function convex(pb,k){
const P=pb.x,s=pb.s[k],e=k+1<pb.ns?pb.s[k+1]:pb.n,n=e-s;
let sg=0,cx=0,cy=0,px=0,py=0,ox=0,oy=0;
for(let i=0;i<n;i++){
const a=s+i,b=s+(i+1)%n,c=s+(i+2)%n,x0=P[a*2],y0=P[a*2+1],x1=P[b*2],y1=P[b*2+1],x2=P[c*2],y2=P[c*2+1];
const dx1=x1-x0,dy1=y1-y0,dx2=x2-x1,dy2=y2-y1,cr=dx1*dy2-dy1*dx2;
if(cr>1e-9){if(sg<0)return 0;sg=1}else if(cr<-1e-9){if(sg>0)return 0;sg=-1}
if(i>0){
if(dx1*px<0)cx++;
if(dy1*py<0)cy++;
}else{ox=dx1;oy=dy1}
if(dx1!==0)px=dx1;
if(dy1!==0)py=dy1;
}
if(ox*px<0)cx++;
if(oy*py<0)cy++;
return cx<=2&&cy<=2;
}
function fillPB(c,pb,eo){
if(!setPaint(c,c.fillStyle,c.globalAlpha)||!pb.ns)return;
const rg=pm===6?c.fillStyle:null;
if(pb.ns===1&&!eo){
const n=pb.n;
if(n<3)return;
if(convex(pb,0)){
need(c,n,(n-2)*3,null,rg);
const P=pb.x,i0=nv;
for(let i=0;i<n;i++)V(P[i*2],P[i*2+1],0,0);
for(let i=1;i<n-1;i++){X[ni++]=i0;X[ni++]=i0+i;X[ni++]=i0+i+1}
return;
}
}
let tot=0;
for(let k=0;k<pb.ns;k++){const e=k+1<pb.ns?pb.s[k+1]:pb.n;if(e-pb.s[k]>=3)tot+=e-pb.s[k]}
if(!tot)return;
if(tot>MAXV-8)return;
sten(c,eo?1:0,()=>{
const P=pb.x;
for(let k=0;k<pb.ns;k++){
const s=pb.s[k],e=k+1<pb.ns?pb.s[k+1]:pb.n;
if(e-s<3)continue;
const i0=nv;
for(let i=s;i<e;i++)V(P[i*2],P[i*2+1],0,0);
for(let i=1;i<e-s-1;i++){X[ni++]=i0;X[ni++]=i0+i;X[ni++]=i0+i+1}
}
},rg);
}
function strokePB(c,pb){
if(!setPaint(c,c.strokeStyle,c.globalAlpha)||!pb.ns)return;
const rg=pm===6?c.strokeStyle:null,m=c.m,scl=M.sqrt(M.abs(m[0]*m[3]-m[1]*m[2])),hw=c.lineWidth*scl*.5;
if(hw<=0)return;
const cap=c.lineCap==='round'?1:c.lineCap==='square'?2:0,join=c.lineJoin==='round'?1:c.lineJoin==='bevel'?2:0,ml=c.miterLimit;
let src=pb;
if(c.dash&&c.dash.length){
if(dashPB(pb,c.dash,c.lineDashOffset,dpb,scl))src=dpb;
if(!src.ns)return;
}
let tv=0,cplx=0;
for(let k=0;k<src.ns;k++){
const e=k+1<src.ns?src.s[k+1]:src.n,n=e-src.s[k];
tv+=n;
if(n>2||src.cl[k])cplx=1;
}
const est=tv*(hw>4?40:10)+64;
if(est>MAXV-16)return;
const tr=!popq||c.globalCompositeOperation==='lighter',gen=()=>{
for(let k=0;k<src.ns;k++){
const s=src.s[k],e=k+1<src.ns?src.s[k+1]:src.n;
strokeLine(src.x,s,e,src.cl[k],hw,cap,join,ml);
}
};
if(tr&&cplx){sten(c,2,gen,rg);return}
need(c,est,est*4,null,rg);
gen();
}
function Tgt(w,h,st){
this.w=w;this.h=h;this.width=w;this.height=h;this.fbo=null;this.tex=null;this.rb=null;this.sc=false;this.st=st;this.u0=0;this.v0=1;this.u1=1;this.v1=0;this.tw=w;this.th=h;this.c=null;
}
Tgt.prototype.alloc=function(w,h){
if(!gl)return;
const t=this;
if(!t.fbo)t.fbo=gl.createFramebuffer();
if(t.tex){if(bX===t.tex)bX=atTex;gl.deleteTexture(t.tex)}
t.tex=gl.createTexture();
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D,t.tex);
gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,w,h,0,gl.RGBA,gl.UNSIGNED_BYTE,null);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
gl.bindFramebuffer(gl.FRAMEBUFFER,t.fbo);
gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,t.tex,0);
if(t.st){
if(t.rb)gl.deleteRenderbuffer(t.rb);
t.rb=gl.createRenderbuffer();
gl.bindRenderbuffer(gl.RENDERBUFFER,t.rb);
gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_STENCIL,w,h);
gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_STENCIL_ATTACHMENT,gl.RENDERBUFFER,t.rb);
}
t.tw=w;t.th=h;
};
Tgt.prototype.size=function(w,h){
if(w===this.tw&&h===this.th&&this.fbo){this.w=w;this.h=h;this.width=w;this.height=h;return}
flush();
this.w=w;this.h=h;this.width=w;this.height=h;
this.alloc(w,h);
};
Tgt.prototype.clear=function(){
if(!gl||dead)return;
flush();
bindT(this);
gl.clearColor(0,0,0,0);
gl.stencilMask(0xFF);
gl.clear(gl.COLOR_BUFFER_BIT|gl.STENCIL_BUFFER_BIT);
};
function Ctx(t){
this.t=t;this.canvas=t;this.m=new Float64Array(6);this.stk=[];this.sp=0;this.cb=[];this.pb=new PB();this.pb2=new PB();this.pb.m=this.m;this.pb2.m=this.m;this.rs();
}
const CP=Ctx.prototype;
CP.rs=function(){
const m=this.m;
m[0]=1;m[1]=0;m[2]=0;m[3]=1;m[4]=0;m[5]=0;
this.sp=0;this.fillStyle='#000';this.strokeStyle='#000';this.globalAlpha=1;this.globalCompositeOperation='source-over';this.lineWidth=1;this.lineCap='butt';this.lineJoin='miter';this.miterLimit=10;this.font='10px sans-serif';this.textAlign='start';this.textBaseline='alphabetic';this.shadowBlur=0;this.shadowColor='rgba(0,0,0,0)';this.dash=null;this.lineDashOffset=0;this.clipL=0;this.cb.length=0;this.pb.reset();
};
CP.save=function(){
let f=this.stk[this.sp];
if(!f)f=this.stk[this.sp]={m:new Float64Array(6)};
this.sp++;
f.m.set(this.m);f.fs=this.fillStyle;f.ss=this.strokeStyle;f.ga=this.globalAlpha;f.gc=this.globalCompositeOperation;f.lw=this.lineWidth;f.lc=this.lineCap;f.lj=this.lineJoin;f.ml=this.miterLimit;f.fn=this.font;f.ta=this.textAlign;f.tb=this.textBaseline;f.sb=this.shadowBlur;f.sc=this.shadowColor;f.d=this.dash;f.o=this.lineDashOffset;f.cl=this.clipL;
};
CP.restore=function(){
if(!this.sp)return;
const f=this.stk[--this.sp];
this.m.set(f.m);this.fillStyle=f.fs;this.strokeStyle=f.ss;this.globalAlpha=f.ga;this.globalCompositeOperation=f.gc;this.lineWidth=f.lw;this.lineCap=f.lc;this.lineJoin=f.lj;this.miterLimit=f.ml;this.font=f.fn;this.textAlign=f.ta;this.textBaseline=f.tb;this.shadowBlur=f.sb;this.shadowColor=f.sc;this.dash=f.d;this.lineDashOffset=f.o;
while(this.clipL>f.cl){
const b=this.cb.pop();
this.clipL--;
if(!dead)clipPop(this,this.clipL,b);
}
};
CP.translate=function(x,y){const m=this.m;m[4]+=m[0]*x+m[2]*y;m[5]+=m[1]*x+m[3]*y};
CP.scale=function(x,y){const m=this.m;m[0]*=x;m[1]*=x;m[2]*=y;m[3]*=y};
CP.rotate=function(a){
const m=this.m,c=M.cos(a),s=M.sin(a),a0=m[0],b0=m[1],c0=m[2],d0=m[3];
m[0]=a0*c+c0*s;m[1]=b0*c+d0*s;m[2]=c0*c-a0*s;m[3]=d0*c-b0*s;
};
CP.transform=function(a,b,c,d,e,f){
const m=this.m,a0=m[0],b0=m[1],c0=m[2],d0=m[3];
m[0]=a0*a+c0*b;m[1]=b0*a+d0*b;m[2]=a0*c+c0*d;m[3]=b0*c+d0*d;m[4]+=a0*e+c0*f;m[5]+=b0*e+d0*f;
};
CP.setTransform=function(a,b,c,d,e,f){
const m=this.m;
if(typeof a==='object'){m[0]=a.a;m[1]=a.b;m[2]=a.c;m[3]=a.d;m[4]=a.e;m[5]=a.f;return}
m[0]=a;m[1]=b;m[2]=c;m[3]=d;m[4]=e;m[5]=f;
};
CP.resetTransform=function(){this.setTransform(1,0,0,1,0,0)};
CP.getTransform=function(){const m=this.m;return{a:m[0],b:m[1],c:m[2],d:m[3],e:m[4],f:m[5]}};
CP.setLineDash=function(a){this.dash=a&&a.length?(a.length&1?a.concat(a):a.slice()):null};
CP.createLinearGradient=function(a,b,c,d){return new Grad(0,[a,b,c,d])};
CP.createRadialGradient=function(a,b,c,d,e,f){return new Grad(1,[a,b,c,d,e,f])};
CP.beginPath=function(){this.pb.reset()};
CP.moveTo=function(x,y){this.pb.moveTo(x,y)};
CP.lineTo=function(x,y){this.pb.lineTo(x,y)};
CP.quadraticCurveTo=function(a,b,x,y){this.pb.quad(a,b,x,y)};
CP.bezierCurveTo=function(a,b,c,d,x,y){this.pb.bez(a,b,c,d,x,y)};
CP.arc=function(x,y,r,a0,a1,ccw){this.pb.ellipse(x,y,r,r,0,a0,a1,ccw)};
CP.ellipse=function(x,y,rx,ry,rot,a0,a1,ccw){this.pb.ellipse(x,y,rx,ry,rot,a0,a1,ccw)};
CP.arcTo=function(a,b,c,d,r){this.pb.arcTo(a,b,c,d,r)};
CP.rect=function(x,y,w,h){this.pb.rect(x,y,w,h)};
CP.closePath=function(){this.pb.closePath()};
CP.pathOf=function(p){
if(p instanceof P2D){this.pb2.reset();this.pb2.m=this.m;p.replay(this.pb2);return this.pb2}
return this.pb;
};
CP.fill=function(p,rule){
if(dead)return;
const pb=this.pathOf(p);
fillPB(this,pb,(p instanceof P2D?rule:p)==='evenodd');
};
CP.stroke=function(p){
if(dead)return;
strokePB(this,this.pathOf(p));
};
CP.clip=function(p){
if(dead||this.clipL>=4)return;
const pb=this.pathOf(p);
let tot=0;
for(let k=0;k<pb.ns;k++){const e=k+1<pb.ns?pb.s[k+1]:pb.n;if(e-pb.s[k]>=3)tot+=e-pb.s[k]}
if(!tot||tot>MAXV-8)return;
const c=this;
let bx=null;
sten(c,4,()=>{
const P=pb.x;
for(let k=0;k<pb.ns;k++){
const s=pb.s[k],e=k+1<pb.ns?pb.s[k+1]:pb.n;
if(e-s<3)continue;
const i0=nv;
for(let i=s;i<e;i++)V(P[i*2],P[i*2+1],0,0);
for(let i=1;i<e-s-1;i++){X[ni++]=i0;X[ni++]=i0+i;X[ni++]=i0+i+1}
}
bx=[mnx,mny,mxx,mxy];
},null);
if(bx){this.clipL++;this.cb.push(bx)}
};
CP.fillRect=function(x,y,w,h){
if(dead||!setPaint(this,this.fillStyle,this.globalAlpha))return;
const m=this.m,rg=pm===6?this.fillStyle:null;
need(this,4,6,null,rg);
const x1=x+w,y1=y+h,i=nv;
V(m[0]*x+m[2]*y+m[4],m[1]*x+m[3]*y+m[5],0,0);
V(m[0]*x1+m[2]*y+m[4],m[1]*x1+m[3]*y+m[5],0,0);
V(m[0]*x1+m[2]*y1+m[4],m[1]*x1+m[3]*y1+m[5],0,0);
V(m[0]*x+m[2]*y1+m[4],m[1]*x+m[3]*y1+m[5],0,0);
X[ni++]=i;X[ni++]=i+1;X[ni++]=i+2;X[ni++]=i;X[ni++]=i+2;X[ni++]=i+3;
};
CP.strokeRect=function(x,y,w,h){
if(dead)return;
const pb=this.pb2;
pb.reset();pb.m=this.m;pb.rect(x,y,w,h);
strokePB(this,pb);
};
CP.clearRect=function(x,y,w,h){
if(dead)return;
flush();
const m=this.m;
if(!this.clipL&&m[0]===1&&m[1]===0&&m[2]===0&&m[3]===1&&m[4]===0&&m[5]===0&&x<=0&&y<=0&&x+w>=this.t.w&&y+h>=this.t.h){
this.t.clear();
return;
}
const sv=this.globalCompositeOperation,sf=this.fillStyle,sa=this.globalAlpha;
bT=this.t;bC=this.clipL;
setPaint(this,'#000',1);
const x1=x+w,y1=y+h,i=nv;
V(m[0]*x+m[2]*y+m[4],m[1]*x+m[3]*y+m[5],0,0);
V(m[0]*x1+m[2]*y+m[4],m[1]*x1+m[3]*y+m[5],0,0);
V(m[0]*x1+m[2]*y1+m[4],m[1]*x1+m[3]*y1+m[5],0,0);
V(m[0]*x+m[2]*y1+m[4],m[1]*x+m[3]*y1+m[5],0,0);
X[ni++]=i;X[ni++]=i+1;X[ni++]=i+2;X[ni++]=i;X[ni++]=i+2;X[ni++]=i+3;
bindT(bT);
setup();
gl.blendFunc(gl.ZERO,gl.ZERO);
if(bC){gl.enable(gl.STENCIL_TEST);gl.stencilMask(0);gl.stencilFunc(gl.EQUAL,cm(bC),cm(bC));gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP)}else gl.disable(gl.STENCIL_TEST);
gl.drawElements(gl.TRIANGLES,ni,gl.UNSIGNED_SHORT,0);
nv=0;ni=0;bid++;
this.globalCompositeOperation=sv;this.fillStyle=sf;this.globalAlpha=sa;
};
function imgQuad(c,im,x,y,w,h,mode){
const al=c.globalAlpha;
if(al<=.002)return;
const a=M.round(al*255),m=c.m,tx=im.tex||atTex;
pm=mode;pg=0;prow=0;pk=0;
pcol=mode===4?((a<<24)>>>0):((a|a<<8|a<<16|a<<24)>>>0);
need(c,4,6,tx,null);
const x1=x+w,y1=y+h,i=nv;
V(m[0]*x+m[2]*y+m[4],m[1]*x+m[3]*y+m[5],im.u0,im.v0);
V(m[0]*x1+m[2]*y+m[4],m[1]*x1+m[3]*y+m[5],im.u1,im.v0);
V(m[0]*x1+m[2]*y1+m[4],m[1]*x1+m[3]*y1+m[5],im.u1,im.v1);
V(m[0]*x+m[2]*y1+m[4],m[1]*x+m[3]*y1+m[5],im.u0,im.v1);
X[ni++]=i;X[ni++]=i+1;X[ni++]=i+2;X[ni++]=i;X[ni++]=i+2;X[ni++]=i+3;
}
CP.drawImage=function(im,x,y,w,h){
if(dead||!im)return;
if(w===undefined){w=im.w;h=im.h}
imgQuad(this,im,x,y,w,h,1);
};
CP.drawSil=function(im){
if(dead)return;
imgQuad(this,im,0,0,im.w,im.h,4);
};
function fontPx(f){const r=/(\d*\.?\d+)px/.exec(f);return r?+r[1]:16}
function tctx(){
if(!tcx){tcv=document.createElement('canvas');tcx=tcv.getContext('2d')}
return tcx;
}
CP.measureText=function(s){
const x=tctx();
x.font=this.font;
return x.measureText(s);
};
function txAlloc(w,h){
if(txX+w>txR.w){txX=0;txY+=txH;txH=0}
if(txY+h>txR.h){
flush();
tcache.clear();
txX=0;txY=0;txH=0;
}
if(w>txR.w||h>txR.h)return null;
const r={x:txR.x+txX,y:txR.y+txY};
txX+=w+1;
if(h+1>txH)txH=h+1;
return r;
}
function txEntry(font,q,s,bl,stroke,lw,lj,glow){
const key=font+'|'+q+'|'+s+'|'+bl+'|'+(stroke?'s'+lw+lj:'f')+'|'+glow;
let e=tcache.get(key);
if(e)return e;
const sz=fontPx(font)*q,x=tctx(),f2=font.replace(/(\d*\.?\d+)px/,sz+'px');
x.font=f2;
const tw=x.measureText(s).width,pad=M.ceil(2+(stroke?lw*q:0)+glow*1.6),w=M.ceil(tw)+pad*2,h=M.ceil(sz*1.6)+pad*2;
const r=txAlloc(w,h);
if(!r)return null;
tcv.width=w;tcv.height=h;
x.font=f2;x.textBaseline=bl;x.textAlign='left';
const ry=bl==='middle'?h/2:bl==='top'||bl==='hanging'?pad+1:bl==='bottom'?h-pad-1:M.ceil(sz*1.15)+pad;
if(glow){
x.shadowColor='rgba(255,255,255,1)';x.shadowBlur=glow;x.shadowOffsetX=w+40;x.fillStyle='#000';
x.fillText(s,pad-w-40,ry);
}else if(stroke){
x.strokeStyle='#fff';x.lineWidth=lw*q;x.lineJoin=lj;
x.strokeText(s,pad,ry);
}else{
x.fillStyle='#fff';
x.fillText(s,pad,ry);
}
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D,atTex);
gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true);
gl.texSubImage2D(gl.TEXTURE_2D,0,r.x,r.y,gl.RGBA,gl.UNSIGNED_BYTE,tcv);
gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);
e={u0:(r.x+.5)/AW,u1:(r.x+w-.5)/AW,v0:(r.y+.5)/AH,v1:(r.y+h-.5)/AH,w:w,h:h,pad:pad,ry:ry,tw:tw};
tcache.set(key,e);
return e;
}
function drawTxt(c,s,x,y,stroke){
s=''+s;
if(!s||dead)return;
const m=c.m,scl=M.sqrt(M.abs(m[0]*m[3]-m[1]*m[2])),q=M.max(.5,M.round(scl*2)/2),bl=c.textBaseline;
const run=(isGlow)=>{
let glow=0;
if(isGlow){glow=c.shadowBlur}
const e=txEntry(c.font,q,s,bl,stroke&&!isGlow,c.lineWidth,c.lineJoin,glow);
if(!e)return;
let ax=x;
const al=c.textAlign;
if(al==='center')ax=x-e.tw/q/2;
else if(al==='right'||al==='end')ax=x-e.tw/q;
const x0=ax-e.pad/q,y0=y-e.ry/q,w=e.w/q,h=e.h/q,tex=atTex;
const a=isGlow?col(c.shadowColor):null;
let ok;
if(isGlow){
const al2=a[3]*c.globalAlpha;
if(al2<=.002)return;
pm=4;pg=0;
pcol=((M.round(a[0]*al2))|(M.round(a[1]*al2))<<8|(M.round(a[2]*al2))<<16|(M.round(al2*255))<<24)>>>0;
ok=1;
}else{
const st=stroke?c.strokeStyle:c.fillStyle;
ok=setPaint(c,st,c.globalAlpha);
if(ok){
if(pm===2)pm=5;
else if(pm!==0){pm=4;pg=0;const f=st.st[0],aa=f[4]*c.globalAlpha;pcol=((M.round(f[1]*aa))|(M.round(f[2]*aa))<<8|(M.round(f[3]*aa))<<16|(M.round(aa*255))<<24)>>>0}
else pm=4;
}
}
if(!ok)return;
need(c,4,6,tex,null);
const x1=x0+w,y1=y0+h,i=nv;
V(m[0]*x0+m[2]*y0+m[4],m[1]*x0+m[3]*y0+m[5],e.u0,e.v0);
V(m[0]*x1+m[2]*y0+m[4],m[1]*x1+m[3]*y0+m[5],e.u1,e.v0);
V(m[0]*x1+m[2]*y1+m[4],m[1]*x1+m[3]*y1+m[5],e.u1,e.v1);
V(m[0]*x0+m[2]*y1+m[4],m[1]*x0+m[3]*y1+m[5],e.u0,e.v1);
X[ni++]=i;X[ni++]=i+1;X[ni++]=i+2;X[ni++]=i;X[ni++]=i+2;X[ni++]=i+3;
};
if(!stroke&&c.shadowBlur>0)run(true);
run(false);
}
CP.fillText=function(s,x,y){drawTxt(this,s,x,y,0)};
CP.strokeText=function(s,x,y){drawTxt(this,s,x,y,1)};
function mkShader(t,s){
const o=gl.createShader(t);
gl.shaderSource(o,s);gl.compileShader(o);
return o;
}
function mkProg(v,f){
const p=gl.createProgram();
gl.attachShader(p,mkShader(gl.VERTEX_SHADER,v));
gl.attachShader(p,mkShader(gl.FRAGMENT_SHADER,f));
gl.linkProgram(p);
return p;
}
const FPR='#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n';
const VSH='attribute vec2 a_p;attribute vec2 a_t;attribute vec2 a_g;attribute vec3 a_m;attribute vec4 a_c;uniform vec2 u_s;varying vec2 v_t;varying vec2 v_g;varying vec3 v_m;varying vec4 v_c;void main(){gl_Position=vec4(a_p.x*u_s.x-1.,1.-a_p.y*u_s.y,0.,1.);v_t=a_t;v_g=a_g;v_m=a_m;v_c=a_c;}';
const FSH=FPR+'uniform sampler2D u_a;uniform sampler2D u_r;uniform vec4 u_q;varying vec2 v_t;varying vec2 v_g;varying vec3 v_m;varying vec4 v_c;vec4 rp(float t){return texture2D(u_r,vec2(clamp(t,0.,1.)*.9921875+.00390625,v_m.y));}void main(){float m=v_m.x;if(m<.5){gl_FragColor=v_c;return;}if(m<1.5){gl_FragColor=texture2D(u_a,v_t)*v_c;return;}if(m<2.5){gl_FragColor=rp(v_g.x)*v_c.a;return;}if(m<3.5){float k=v_m.z;gl_FragColor=rp((length(v_g)-k)/(1.-k))*v_c.a;return;}if(m<4.5){gl_FragColor=v_c*texture2D(u_a,v_t).a;return;}if(m<5.5){gl_FragColor=rp(v_g.x)*(v_c.a*texture2D(u_a,v_t).a);return;}vec2 cd=u_q.xy;float dr=u_q.z,r0=u_q.w;float a=dot(cd,cd)-dr*dr,b=dot(v_g,cd)+r0*dr,c=dot(v_g,v_g)-r0*r0,s;if(abs(a)<1e-5)s=c/(2.*b);else{float d=b*b-a*c;if(d<0.){gl_FragColor=vec4(0.);return;}float q=sqrt(d);s=max((b+q)/a,(b-q)/a);}gl_FragColor=rp(s)*v_c.a;}';
const BV='attribute vec2 a_q;varying vec2 v_u;void main(){v_u=a_q*.5+.5;gl_Position=vec4(a_q,0.,1.);}';
const BF=FPR+'uniform sampler2D u_a;uniform vec2 u_rs;uniform vec2 u_st;uniform float u_sg;uniform float u_w;varying vec2 v_u;void main(){vec2 o=v_u*u_rs;vec4 s=vec4(0.);float ws=0.;float R=ceil(u_sg*3.);for(int i=-24;i<=24;i++){float f=float(i);if(abs(f)>R)continue;float w=exp(-f*f/(2.*u_sg*u_sg));ws+=w;vec2 p=o+u_st*f;if(u_w>.5){p.x=mod(p.x,u_rs.x);if(p.y<0.||p.y>u_rs.y)continue;}else{if(p.x<0.||p.y<0.||p.x>u_rs.x||p.y>u_rs.y)continue;}s+=texture2D(u_a,p)*w;}gl_FragColor=s/ws;}';
function mkTex(w,h){
const t=gl.createTexture();
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D,t);
gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,w,h,0,gl.RGBA,gl.UNSIGNED_BYTE,null);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
return t;
}
function glInit(){
prog=mkProg(VSH,FSH);
bprog=mkProg(BV,BF);
gl.useProgram(prog);
aP=gl.getAttribLocation(prog,'a_p');aT=gl.getAttribLocation(prog,'a_t');aG=gl.getAttribLocation(prog,'a_g');aM=gl.getAttribLocation(prog,'a_m');aC=gl.getAttribLocation(prog,'a_c');
uS=gl.getUniformLocation(prog,'u_s');uQ=gl.getUniformLocation(prog,'u_q');
gl.uniform1i(gl.getUniformLocation(prog,'u_a'),0);
gl.uniform1i(gl.getUniformLocation(prog,'u_r'),1);
vbo=gl.createBuffer();ibo=gl.createBuffer();qbo=gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER,qbo);
gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
gl.enableVertexAttribArray(aP);gl.enableVertexAttribArray(aT);gl.enableVertexAttribArray(aG);gl.enableVertexAttribArray(aM);gl.enableVertexAttribArray(aC);
gl.enable(gl.BLEND);
gl.disable(gl.DEPTH_TEST);
gl.disable(gl.CULL_FACE);
gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);
rampTex=mkTex(RW,RR);
dtex=mkTex(1,1);
gl.activeTexture(gl.TEXTURE1);
gl.bindTexture(gl.TEXTURE_2D,rampTex);
gl.activeTexture(gl.TEXTURE0);
rowOwn.fill(null);rowBid.fill(0);rN=0;rMin=1e9;rMax=-1;
atT.fbo=null;atT.tex=null;
atT.alloc(AW,AH);
atTex=atT.tex;
bindT(atT);
gl.clearColor(0,0,0,0);
gl.clear(gl.COLOR_BUFFER_BIT);
tmpA.fbo=null;tmpA.tex=null;tmpA.rb=null;
tmpB.fbo=null;tmpB.tex=null;tmpB.rb=null;
tmpA.alloc(256,256);
bX=atTex;
tcache.clear();txX=0;txY=0;txH=0;
}
function alloc(w,h){
let b=null;
for(const s of shelves)if(s.h>=h+2&&s.x+w+2<=AW&&(!b||s.h<b.h))b=s;
if(!b){
if(sTop+h+2>AH)throw new Error('atlas penuh');
b={y:sTop,h:h+2,x:0};
shelves.push(b);
sTop+=h+2;
}
const r={x:b.x+1,y:b.y+1};
b.x+=w+2;
return r;
}
function mkSpr(x,y,w,h,flip){
const u0=(x+.5)/AW,u1=(x+w-.5)/AW,vb=(y+.5)/AH,vt=(y+h-.5)/AH;
return flip?{u0:u0,v0:vt,u1:u1,v1:vb,w:w,h:h,x:x,y:y}:{u0:u0,v0:vb,u1:u1,v1:vt,w:w,h:h,x:x,y:y};
}
function tmpFor(w,h){
const rw=M.ceil(w/128)*128,rh=M.ceil(h/128)*128;
if(w>tmpA.tw||h>tmpA.th||tmpA.tw*tmpA.th>rw*rh*4){
flush();
tmpA.alloc(rw,rh);
}
}
function bakeOne(e){
const bw=e.w*e.s,bh=e.h*e.s;
tmpFor(bw,bh);
tmpA.w=bw;tmpA.h=bh;tmpA.sc=true;tmpA.st=true;
tmpA.clear();
bc.t=tmpA;bc.canvas=tmpA;
bc.rs();
bc.setTransform(e.s,0,0,e.s,0,0);
e.fn(bc);
flush();
if(e.b){blurBake(e,bw,bh);return}
const src={tex:tmpA.tex,u0:0,v0:bh/tmpA.th,u1:bw/tmpA.tw,v1:0,w:bw,h:bh};
atC.rs();
atC.clearRect(e.x,AH-e.y-e.h,e.w,e.h);
atC.drawImage(src,e.x,AH-e.y-e.h,e.w,e.h);
flush();
}
function bpass(srcTex,sw,sh2,tw,th,dst,vx,vy,w,h,dx,dy,sg,wr){
flush();
gl.bindFramebuffer(gl.FRAMEBUFFER,dst.fbo);
gl.viewport(vx,vy,w,h);
gl.enable(gl.SCISSOR_TEST);gl.scissor(vx,vy,w,h);
gl.disable(gl.STENCIL_TEST);
gl.disable(gl.BLEND);
gl.useProgram(bprog);
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D,srcTex);
gl.uniform1i(gl.getUniformLocation(bprog,'u_a'),0);
gl.uniform2f(gl.getUniformLocation(bprog,'u_rs'),sw/tw,sh2/th);
gl.uniform2f(gl.getUniformLocation(bprog,'u_st'),dx/tw,dy/th);
gl.uniform1f(gl.getUniformLocation(bprog,'u_sg'),sg);
gl.uniform1f(gl.getUniformLocation(bprog,'u_w'),wr?1:0);
gl.bindBuffer(gl.ARRAY_BUFFER,qbo);
const a=gl.getAttribLocation(bprog,'a_q');
gl.enableVertexAttribArray(a);
gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0);
gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
gl.enable(gl.BLEND);
gl.enableVertexAttribArray(aP);gl.enableVertexAttribArray(aT);gl.enableVertexAttribArray(aG);gl.enableVertexAttribArray(aM);gl.enableVertexAttribArray(aC);
gl.useProgram(prog);
gl.bindBuffer(gl.ARRAY_BUFFER,vbo);
}
function blurBake(e,bw,bh){
tmpB.alloc(tmpA.tw,tmpA.th);
bpass(tmpA.tex,bw,bh,tmpA.tw,tmpA.th,tmpB,0,0,bw,bh,1,0,e.b[0],e.b[1]);
bpass(tmpB.tex,bw,bh,tmpB.tw,tmpB.th,atT,e.x,e.y,e.w,e.h,0,1,e.b[0],0);
if(bX===tmpB.tex)bX=atTex;
gl.deleteTexture(tmpB.tex);
tmpB.tex=null;
}
function make(w,h,fn,ss,blur){
const r=alloc(w,h),sp=mkSpr(r.x,r.y,w,h,1),e={x:r.x,y:r.y,w:w,h:h,s:ss||1,fn:fn,b:blur||null,sp:sp};
bakes.push(e);
if(gl&&!dead)bakeOne(e);
return sp;
}
function remake(sp,fn){
for(const e of bakes)if(e.sp===sp){e.fn=fn;if(gl&&!dead)bakeOne(e);return}
}
function dyn(cw,ch){
const r=alloc(cw,ch),sp=mkSpr(r.x,r.y,cw,ch,1);
sp.cw=cw;sp.ch=ch;
return sp;
}
function fill(sp,w,h,fn){
w=M.min(w,sp.cw);h=M.min(h,sp.ch);
let e=null;
for(const b of bakes)if(b.sp===sp){e=b;break}
if(!e){e={x:sp.x,y:sp.y,w:w,h:h,s:1,fn:fn,b:null,sp:sp};bakes.push(e)}
else{e.w=w;e.h=h;e.fn=fn}
sp.w=w;sp.h=h;sp.u0=(sp.x+.5)/AW;sp.u1=(sp.x+w-.5)/AW;sp.v1=(sp.y+.5)/AH;sp.v0=(sp.y+h-.5)/AH;
if(gl&&!dead){
atC.rs();
atC.clearRect(sp.x,AH-sp.y-sp.ch,sp.cw,sp.ch);
bakeOne(e);
}
}
function slot(w,h){
const r=alloc(w,h),sp=mkSpr(r.x,r.y,w,h,0);
sp.complete=false;sp.naturalWidth=0;
return sp;
}
function load(sp,url){
const im=new Image(),o={sp:sp,im:im};
imgs.push(o);
im.onload=()=>{
if(!gl||dead)return;
upImg(o);
sp.complete=true;sp.naturalWidth=sp.w;
};
im.src=url;
}
function upImg(o){
flush();
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D,atTex);
gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true);
gl.texSubImage2D(gl.TEXTURE_2D,0,o.sp.x,o.sp.y,gl.RGBA,gl.UNSIGNED_BYTE,o.im);
gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);
}
function layer(){
const t=new Tgt(0,0,true);
t.c=new Ctx(t);
layers.push(t);
return t;
}
function readT(t,x,y,w,h){
flush();
bindT(t);
const b=new Uint8Array(w*h*4);
gl.readPixels(x,y,w,h,gl.RGBA,gl.UNSIGNED_BYTE,b);
const o=new Uint8ClampedArray(w*h*4);
for(let r=0;r<h;r++){
const s=(h-1-r)*w*4,d=r*w*4;
for(let i=0;i<w;i++){
const a=b[s+i*4+3];
if(a){const k=255/a;o[d+i*4]=b[s+i*4]*k+.5;o[d+i*4+1]=b[s+i*4+1]*k+.5;o[d+i*4+2]=b[s+i*4+2]*k+.5}
o[d+i*4+3]=a;
}
}
return o;
}
const crct=(()=>{const t=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c>>>0}return t})();
function crc(b,s,e){let c=0xFFFFFFFF;for(let i=s;i<e;i++)c=crct[(c^b[i])&255]^(c>>>8);return(c^0xFFFFFFFF)>>>0}
function mkpng(w,h,px){
const rl=w*4+1,raw=new Uint8Array(rl*h);
for(let y=0;y<h;y++)raw.set(px.subarray(y*w*4,(y+1)*w*4),y*rl+1);
const nb=M.ceil(raw.length/65535)||1,zl=2+raw.length+nb*5+4,o=new Uint8Array(8+25+12+zl+12),dv=new DataView(o.buffer);
o.set([137,80,78,71,13,10,26,10],0);
dv.setUint32(8,13);o.set([73,72,68,82],12);dv.setUint32(16,w);dv.setUint32(20,h);o[24]=8;o[25]=6;
dv.setUint32(29,crc(o,12,29));
let p=33;
dv.setUint32(p,zl);o.set([73,68,65,84],p+4);
const zs=p+8;
let q=zs;
o[q++]=0x78;o[q++]=1;
for(let i=0;i<nb;i++){
const s=i*65535,e=M.min(raw.length,s+65535),l=e-s;
o[q++]=i===nb-1?1:0;o[q++]=l&255;o[q++]=l>>8;o[q++]=~l&255;o[q++]=(~l>>8)&255;
o.set(raw.subarray(s,e),q);q+=l;
}
let a=1,b=0;
for(let i=0;i<raw.length;){
const e=M.min(raw.length,i+5552);
for(;i<e;i++){a+=raw[i];b+=a}
a%=65521;b%=65521;
}
dv.setUint32(q,((b<<16)|a)>>>0);q+=4;
dv.setUint32(q,crc(o,p+4,q));q+=4;
dv.setUint32(q,0);o.set([73,69,78,68],q+4);dv.setUint32(q+8,crc(o,q+4,q+8));
let s='';
for(let i=0;i<o.length;i+=0x8000)s+=String.fromCharCode.apply(null,o.subarray(i,i+0x8000));
return'data:image/png;base64,'+btoa(s);
}
const thumbs=new Map();
function thumb(w,h){
const k=w+'x'+h;
let t=thumbs.get(k);
if(!t){t=new Tgt(w,h,true);t.c=new Ctx(t);t.size(w,h);thumbs.set(k,t)}
t.clear();
t.c.rs();
return t.c;
}
function url(c){
const t=c.t;
return mkpng(t.w,t.h,readT(t,0,0,t.w,t.h));
}
function show(c,el){
const t=c.t,px=readT(t,0,0,t.w,t.h);
if(typeof createImageBitmap!=='function')return;
createImageBitmap(new ImageData(px,t.w,t.h)).then(b=>{
if(!el.__br)el.__br=el.getContext('bitmaprenderer');
if(el.__br)el.__br.transferFromImageBitmap(b);else b.close&&b.close();
}).catch(()=>{});
}
function spriteURL(sp){
return mkpng(sp.w,sp.h,readT(atT,sp.x,sp.y,sp.w,sp.h));
}
function rebuild(){
dead=0;
nv=0;ni=0;
glInit();
for(const e of bakes)bakeOne(e);
for(const o of imgs)if(o.im.complete&&o.im.naturalWidth)upImg(o);
for(const t of layers){if(t.tw>0){t.fbo=null;t.tex=null;t.rb=null;t.alloc(t.tw,t.th)}}
thumbs.clear();
}
function init(cv){
cvs=cv;
let aa=true;
try{const o=JSON.parse(localStorage.getItem('pemanah_set_v1')||'null');if(o&&(o.gq|0)<2)aa=false}catch(e){}
const at={alpha:true,antialias:aa,stencil:true,depth:false,premultipliedAlpha:true,preserveDrawingBuffer:false,powerPreference:'high-performance'};
gl=cv.getContext('webgl',at)||cv.getContext('experimental-webgl',at);
if(!gl)throw new Error('WebGL tidak didukung');
scr={get w(){return cvs.width},get h(){return cvs.height},get width(){return cvs.width},get height(){return cvs.height},fbo:null,sc:false,tex:null};
atT=new Tgt(AW,AH,false);
tmpA=new Tgt(256,256,true);
tmpB=new Tgt(256,256,false);
tmpA.sc=true;
tmpB.sc=true;
txR={x:0,y:0,w:1024,h:256};
const tr=alloc(1024,256);
txR.x=tr.x;txR.y=tr.y;
glInit();
atC=new Ctx(atT);
bc=new Ctx(tmpA);
mainC=new Ctx(scr);
bT=scr;
cv.addEventListener('webglcontextlost',e=>{e.preventDefault();dead=1;nv=0;ni=0});
cv.addEventListener('webglcontextrestored',()=>{rebuild()});
return mainC;
}
function reset(){
nv=0;ni=0;
if(mainC)mainC.rs();
if(gl&&!dead){
bindT(scr);
gl.stencilMask(0xFF);
gl.clearStencil(0);
gl.clear(gl.STENCIL_BUFFER_BIT);
}
}
return{init:init,dyn:dyn,fill:fill,make:make,remake:remake,slot:slot,load:load,layer:layer,flush:flush,reset:reset,thumb:thumb,url:url,show:show,spriteURL:spriteURL,Path2D:P2D};
})();
window.Path2D=GX.Path2D;
