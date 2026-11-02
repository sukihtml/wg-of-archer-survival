function mk(c){
const o=document.createElement('canvas');o.width=o.height=64;
const x=o.getContext('2d'),r=x.createRadialGradient(32,32,0,32,32,32);
r.addColorStop(0,'rgba('+c+',1)');r.addColorStop(.35,'rgba('+c+',.35)');r.addColorStop(1,'rgba('+c+',0)');
x.fillStyle=r;x.fillRect(0,0,64,64);return o;
}
const GL={a:mk('255,196,110'),c:mk('150,190,225'),w:mk('255,255,255'),g:mk('176,226,176'),r:mk('205,100,88'),p:mk('236,214,170'),v:mk('160,140,195'),f:mk('255,130,70'),e:mk('190,170,245'),z:mk('150,80,255'),s:mk('170,215,255')};
function gl(k,x,y,r,a){
if(slA)return;
g.globalCompositeOperation='lighter';g.globalAlpha=M.max(0,M.min(1,a));
g.drawImage(GL[k],x-r,y-r,r*2,r*2);
g.globalAlpha=1;g.globalCompositeOperation='source-over';
}

function ik(x0,y0,x1,y1,a,b,s){
const dx=x1-x0,dy=y1-y0;
const d=M.min(M.hypot(dx,dy)||.001,a+b-.01);
const an=M.atan2(dy,dx);
const ck=(a*a+d*d-b*b)/(2*a*d);
const ak=M.acos(M.max(-1,M.min(1,ck)))*s;
return[x0+M.cos(an+ak)*a,y0+M.sin(an+ak)*a,x0+M.cos(an)*d,y0+M.sin(an)*d];
}

function sl(x0,y0,x1,y1,c,w){g.strokeStyle=c;g.lineWidth=w;g.beginPath();g.moveTo(x0,y0);g.lineTo(x1,y1);g.stroke()}
function ov(x,y,rx,ry,c,r){g.fillStyle=c;g.beginPath();g.ellipse(x,y,rx,ry,r||0,0,TAU);g.fill()}
function poly(a,f,s,w){
g.beginPath();g.moveTo(a[0],a[1]);
for(let i=2;i<a.length;i+=2)g.lineTo(a[i],a[i+1]);
g.closePath();
if(f){g.fillStyle=f;g.fill()}
if(s){g.strokeStyle=s;g.lineWidth=w||1;g.stroke()}
}
function claws(x,y,a,c,l){
g.strokeStyle=c;g.lineWidth=1.1;g.lineCap='round';
for(let k=-1;k<=1;k++){const b=a+k*.38;g.beginPath();g.moveTo(x,y);g.lineTo(x+M.cos(b)*l,y+M.sin(b)*l);g.stroke()}
}
function limb(hx,hy,fx,fy,kb,c1,c2,w){
const dx=fx-hx,dy=fy-hy,d=M.hypot(dx,dy)||1;
let nx=dy/d,ny=-dx/d;
if(nx<0){nx=-nx;ny=-ny}
const kx=(hx+fx)*.5+nx*kb,ky=(hy+fy)*.5+ny*kb;
g.lineCap='round';g.lineJoin='round';
g.strokeStyle=c1;g.lineWidth=6.2*w;g.beginPath();g.moveTo(hx,hy);g.lineTo(kx,ky);g.stroke();
g.lineWidth=4.8*w;g.beginPath();g.moveTo(kx,ky);g.lineTo(fx,fy);g.stroke();
g.strokeStyle=c2;g.lineWidth=5.4*w;g.beginPath();g.moveTo(lr(kx,fx,.55),lr(ky,fy,.55));g.lineTo(fx,fy);g.stroke();
g.lineWidth=4.6*w;g.beginPath();g.moveTo(fx-1,fy);g.lineTo(fx+4.5*w,fy);g.stroke();
return[kx,ky];
}
function stepLeg(q,sn,hx,hy,c1,c2,w){
const x=M.sin(q)*12*sn+(hx<0?-3:3)*(1-sn),y=-M.max(0,M.cos(q))*5.5*sn-2.3;
return limb(hx,hy,x,y,.6+M.max(0,-2.3-y)*.3,c1,c2,w);
}
function cape(len,c,e,cs,cw,fr){
g.fillStyle=c;g.beginPath();g.moveTo(-3,-20);
g.quadraticCurveTo(-8-cs*.6,-8,-9-cs+cw,len);
if(fr){
for(let k=1;k<=4;k++){const t=k/4;g.lineTo(lr(-9-cs+cw,3,t),len+(k&1?-2.4:1.2)+M.sin(T*3+k)*.8)}
}else g.quadraticCurveTo(-2+cw*.5,len+2.5,3,len-.5);
g.lineTo(4.5,-17);g.closePath();g.fill();
g.strokeStyle=e;g.lineWidth=.9;g.stroke();
}
function sarm(col,hand,th,L,shy){
const r=ik(1.5,shy,1.5+M.cos(th)*L,shy+M.sin(th)*L,11,11,1);
g.lineCap='round';g.lineJoin='round';g.strokeStyle=col;g.lineWidth=4.6;
g.beginPath();g.moveTo(1.5,shy);g.lineTo(r[0],r[1]);g.lineTo(r[2],r[3]);g.stroke();
g.fillStyle=hand;g.beginPath();g.arc(r[2],r[3],2.4,0,TAU);g.fill();
return r;
}

const P=[],A=[],FXA={fl:0,fc:'255,255,255',sa:0};
function sp(t,x,y,vx,vy,l,r,c,gv,dg){
if(P.length>160&&t!=2&&t!=4)return;
P.push({t,x,y,vx,vy,l,m:l,r,c,gv:gv||0,dg:dg||0});
}
const ring=(x,y,c,r)=>sp(2,x,y,0,0,.4,r,c);
const arc=(x,y,d,r,c)=>P.push({t:4,x,y,vx:d,vy:0,l:.2,m:.2,r,c,gv:0,dg:0});
function dust(x,y,n,s){for(let i=0;i<n;i++)sp(0,x+rnd(-4,4),y-1,rnd(-1,1)*s,rnd(-.5,-.1)*s,rnd(.35,.7),rnd(2,4),'150,160,175',-20,2.5)}
function upP(dt){
for(let i=P.length-1;i>=0;i--){
const q=P[i];q.l-=dt;
if(q.l<=0){P.splice(i,1);continue}
q.vx-=q.vx*q.dg*dt;q.vy-=q.vy*q.dg*dt;q.vy+=q.gv*dt;
q.x+=q.vx*dt;q.y+=q.vy*dt;
if(q.t==3&&q.y>GY){q.y=GY;q.vy*=-.3;q.vx*=.6}
}
}
function drawPt(){
for(const q of P){
const k=q.l/q.m;
if(q.t==0){
g.globalAlpha=k*.3;g.fillStyle='rgb('+q.c+')';
g.beginPath();g.arc(q.x,q.y,q.r*(1+(1-k)*1.3),0,TAU);g.fill();
}else if(q.t==1){
gl(q.c,q.x,q.y,q.r*(.5+k*.5),k*.9);
}else if(q.t==2){
g.globalCompositeOperation='lighter';g.globalAlpha=k*.6;
g.strokeStyle='rgb('+q.c+')';g.lineWidth=.6+k*2;
g.beginPath();g.arc(q.x,q.y,q.r*(1-k*k),0,TAU);g.stroke();
g.globalCompositeOperation='source-over';
}else if(q.t==4){
g.save();g.translate(q.x,q.y);g.scale(q.vx<0?-1:1,1);
g.globalAlpha=k*.8;g.strokeStyle='rgb('+q.c+')';g.lineCap='round';
g.lineWidth=.8+k*3.4;
g.beginPath();g.arc(-q.r*.35,0,q.r*(1.05-k*.12),-1.05,1.05);g.stroke();
g.restore();
}else if(q.t==5){
g.globalAlpha=k*.75;g.fillStyle='rgb('+q.c+')';
g.beginPath();g.arc(q.x,q.y,q.r*(.5+k*.5),0,TAU);g.fill();
}else if(q.t==6){
g.save();g.translate(q.x,q.y);g.rotate(q.an);
g.globalCompositeOperation='lighter';g.lineCap='round';
const bl=q.ln*(1.15-k*.35);
g.globalAlpha=k*.55;g.strokeStyle='rgb('+q.c+')';g.lineWidth=q.r*k+1;
g.beginPath();g.moveTo(0,0);g.lineTo(bl,0);g.stroke();
g.globalAlpha=k*.9;g.strokeStyle='rgb(255,250,235)';g.lineWidth=(q.r*k+1)*.35;
g.beginPath();g.moveTo(0,0);g.lineTo(bl*.8,0);g.stroke();
g.restore();
}else if(q.t==7){
const w=q.r*(.35+(1-k)*.65),g1=g.createLinearGradient(0,GY-q.ln,0,GY),g2=g.createLinearGradient(0,GY-q.ln,0,GY);
g1.addColorStop(0,'rgba('+q.c+',0)');g1.addColorStop(1,'rgba('+q.c+','+.6*k+')');
g2.addColorStop(0,'rgba(255,250,235,0)');g2.addColorStop(1,'rgba(255,250,235,'+.7*k+')');
g.save();g.globalCompositeOperation='lighter';
g.fillStyle=g1;g.fillRect(q.x-w/2,GY-q.ln,w,q.ln);
g.fillStyle=g2;g.fillRect(q.x-w*.12,GY-q.ln,w*.24,q.ln);
g.restore();
}else if(q.t==8){
const ag=q.an+q.sp*(q.m-q.l),fw=q.r*(.3+.7*M.abs(M.sin(ag*1.6)));
g.save();g.translate(q.x,q.y);g.rotate(ag);
g.globalAlpha=M.min(1,k*1.8)*.92;
g.fillStyle='rgb('+q.c+')';g.strokeStyle='rgba(255,255,255,.7)';g.lineWidth=.6;
g.beginPath();g.moveTo(-q.r,0);g.quadraticCurveTo(0,-fw,q.r,0);g.quadraticCurveTo(0,fw,-q.r,0);g.closePath();g.fill();g.stroke();
g.restore();
gl('p',q.x,q.y,q.r*2.2,k*.35);
}else if(q.t==9){
const sd=q.sd+M.floor(q.l*40)*5.3;
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.globalAlpha=k*.5;g.strokeStyle='rgb(255,200,90)';g.lineWidth=9*k+1;
g.beginPath();zig(q.x+q.ox,-80,q.x,GY,26,sd);g.stroke();
g.globalAlpha=k;g.strokeStyle='rgb(255,236,170)';g.lineWidth=3*k+.6;
g.beginPath();zig(q.x+q.ox,-80,q.x,GY,26,sd);g.stroke();
g.strokeStyle='rgb(255,255,255)';g.lineWidth=k+.3;
g.beginPath();zig(q.x+q.ox,-80,q.x,GY,26,sd);g.stroke();
g.restore();
}else if(q.t==10){
const ag=q.an+q.sp*(q.m-q.l),cs=M.cos(ag*1.7),w=q.r*.55*M.abs(cs),r=q.r*(.6+.4*k),sd=cs<0?-1:1;
g.save();g.translate(q.x,q.y);g.rotate(ag*.5);
g.globalAlpha=M.min(1,k*1.8)*.95;
g.fillStyle='rgba(255,255,255,.95)';
g.beginPath();g.moveTo(0,-r);g.lineTo(w*sd,0);g.lineTo(0,r);g.closePath();g.fill();
g.fillStyle='rgb('+q.c+')';
g.beginPath();g.moveTo(0,-r);g.lineTo(-w*sd,0);g.lineTo(0,r);g.closePath();g.fill();
g.strokeStyle='rgba(255,255,255,.7)';g.lineWidth=.5;
g.beginPath();g.moveTo(0,-r);g.lineTo(w,0);g.lineTo(0,r);g.lineTo(-w,0);g.closePath();g.stroke();
g.restore();
gl('s',q.x,q.y,q.r*2.4,k*.32);
}else{
g.globalCompositeOperation='lighter';g.globalAlpha=k;
g.strokeStyle='rgb('+q.c+')';g.lineWidth=q.r*k+.4;g.lineCap='round';
g.beginPath();g.moveTo(q.x,q.y);g.lineTo(q.x-q.vx*.035,q.y-q.vy*.035);g.stroke();
g.globalCompositeOperation='source-over';
}
}
g.globalAlpha=1;
}

