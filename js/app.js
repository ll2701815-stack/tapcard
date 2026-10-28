// TapCard — логика сайта
const PL={google:'Google Maps',gis:'2GIS',telegram:'Telegram',instagram:'Instagram',menu:'Menu',trip:'TripAdvisor'};
const PC={google:'#4285f4',gis:'#19aa1e',telegram:'#229ed9',instagram:'#e1306c',menu:'#d4a017',trip:'#00a680'};
const TH={onyx:{bg:'radial-gradient(circle at 30% 0%,#2a2a30,#09090b)',tx:'#fff',ac:'#b8892b',bd:'#d4a017',ic:'#d4a017',dk:1},ivory:{bg:'linear-gradient(135deg,#fffaf0,#e8dcc2)',tx:'#2a2118',ac:'#b8892b',ic:'#b8892b',dk:0},espresso:{bg:'radial-gradient(circle at 70% 20%,#8a4a22,#2a1208)',tx:'#fff',ac:'#c8703a',ic:'#fff',dk:1},carbon:{bg:'linear-gradient(135deg,#1c1c20 60%,#7a1018)',tx:'#fff',ac:'#e02020',ic:'#ef3030',dk:1},forest:{bg:'linear-gradient(135deg,#6f8f6a,#2d4a33)',tx:'#fff',ac:'#5e7c5a',ic:'#efe2b4',dk:1},rose:{bg:'linear-gradient(135deg,#ffd5dc,#f2a7b5)',tx:'#6b2535',ac:'#d9798a',ic:'#a8475a',dk:0},ocean:{bg:'linear-gradient(135deg,#2a78c7,#0f3a6b)',tx:'#fff',ac:'#1f78e0',ic:'#fff',dk:1},sky:{bg:'linear-gradient(180deg,#5aa0e6,#1d4a7a 70%,#0f2c4a)',tx:'#fff',ac:'#1f78e0',ic:'#fff',dk:1}};
const PR={rest:['onyx','google'],hotel:['ivory','trip'],cafe:['espresso','google'],gym:['carbon','instagram'],spa:['forest','gis'],salon:['rose','instagram'],store:['ocean','telegram'],travel:['sky','trip']};
const CATS=Object.keys(PR);
const ICO={rest:'<path d="M7 3v8a2 2 0 0 0 2 2v8M11 3v8M7 7h4M17 3c-2 2-3 5-3 8h3v10"/>',hotel:'<path d="M5 21V5l7-2 7 2v16M3 21h18M9 9h2M13 9h2M9 13h2M13 13h2M11 21v-4h2v4"/>',cafe:'<path d="M5 9h11v5a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V9zM16 10h2a2 2 0 0 1 0 4h-2M8 3c0 2 2 2 2 4M12 3c0 2 2 2 2 4"/>',gym:'<path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12"/>',spa:'<path d="M12 20c-4 0-7-3-7-7 3 0 5 1 7 4 2-3 4-4 7-4 0 4-3 7-7 7zM12 17c-2-3-2-7 0-11 2 4 2 8 0 11z"/>',salon:'<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8 7.5L20 18M8 16.5L20 6"/>',store:'<path d="M5 8h14l-1 13H6L5 8zM9 8V6a3 3 0 0 1 6 0v2"/>',travel:'<path d="M2 14l20-9-7 16-3-7z"/>'};
const XT={
sushi:{bg:'#0e0e10',tx:'#fff',ac:'#c8102e',ic:'#fff',dk:1,lay:'b',f:'Georgia,serif',deco:'<div class="dc" style="background:radial-gradient(circle at 85% 18%,#c8102e 0 20%,transparent 21%),repeating-radial-gradient(circle at 15% 110%,transparent 0 .9em,rgba(255,255,255,.07) .9em 1em)"></div>'},
roma:{bg:'#f6f0e1',tx:'#2a2a2a',ac:'#2e7d32',ic:'#c62828',dk:0,lay:'l',f:'Georgia,serif',deco:'<div class="dc" style="background:linear-gradient(90deg,#2e7d32 33.3%,#fff 33.3% 66.6%,#c62828 66.6%) 0 0/100% .9em no-repeat,linear-gradient(90deg,#2e7d32 33.3%,#fff 33.3% 66.6%,#c62828 66.6%) 0 100%/100% .9em no-repeat"></div>'},
nordic:{bg:'linear-gradient(160deg,#eef3f6,#cdd9e2)',tx:'#14263a',ac:'#14263a',ic:'#14263a',dk:0,lay:'x',f:'"Arial Narrow",Impact,sans-serif',deco:'<div class="dc" style="background:repeating-linear-gradient(90deg,transparent 0 2.2em,rgba(20,38,58,.08) 2.2em calc(2.2em + 1px))"></div>'},
royal:{bg:'radial-gradient(circle at 50% 0%,#7a1a33,#35091a)',tx:'#f3d98b',ac:'#c9a227',ic:'#f3d98b',bd:'#c9a227',dk:1,lay:'m',f:'Georgia,serif',deco:''},
morning:{bg:'#f7efe2',tx:'#3b2616',ac:'#7a4a24',ic:'#7a4a24',dk:0,lay:'s',f:'Georgia,serif',deco:''},
sweet:{bg:'radial-gradient(circle,#fff 0 .22em,transparent .25em) 0 0/1.6em 1.6em,linear-gradient(135deg,#ffd6e7,#bff0e0)',tx:'#8a2c55',ac:'#ec6aa6',ic:'#ec6aa6',dk:0,lay:'r',f:'"Trebuchet MS",sans-serif',deco:''},
iron:{bg:'#f5d90a',tx:'#111',ac:'#111',ic:'#111',dk:0,lay:'x',f:'Impact,"Arial Narrow",sans-serif',deco:'<div class="dc" style="background:repeating-linear-gradient(-45deg,#111 0 .8em,transparent .8em 1.6em) 0 100%/100% 1.1em no-repeat"></div>'},
flex:{bg:'radial-gradient(circle at 20% 10%,#ec4899,transparent 50%),radial-gradient(circle at 90% 90%,#22d3ee,transparent 45%),#2a0a5e',tx:'#fff',ac:'#ec4899',ic:'#fff',dk:1,lay:'g',f:'"Trebuchet MS",sans-serif',deco:''},
zen:{bg:'#efe6d6',tx:'#2f4a3a',ac:'#4b6b55',ic:'#4b6b55',dk:0,lay:'b',f:'Georgia,serif',deco:'<div class="dc" style="background:repeating-radial-gradient(circle at 50% 42%,transparent 0 2.2em,rgba(75,107,85,.14) 2.2em 2.3em)"></div>'},
aqua:{bg:'linear-gradient(180deg,#5ad1e6,#1b7fb5)',tx:'#fff',ac:'#0e5f8f',ic:'#fff',dk:1,lay:'c',f:'"Trebuchet MS",sans-serif',deco:'<div class="dc" style="background:radial-gradient(ellipse 60% 40% at 20% 105%,rgba(255,255,255,.28) 98%,transparent),radial-gradient(ellipse 70% 40% at 75% 112%,rgba(255,255,255,.2) 98%,transparent)"></div>'},
glam:{bg:'#0b0b0d',tx:'#f5d6c6',ac:'#d9a58f',ic:'#e8b9a5',bd:'#d9a58f',dk:1,lay:'m',f:'Georgia,serif',deco:''},
luna:{bg:'linear-gradient(135deg,#d8c8ff,#f3b5e6)',tx:'#3d2466',ac:'#7a4fd1',ic:'#7a4fd1',dk:0,lay:'l',f:'Georgia,serif',deco:'<div class="dc" style="background:radial-gradient(circle at 88% 22%,#fff 0 3.4em,transparent 3.5em),radial-gradient(circle at 93% 18%,#e4d3ff 0 3em,transparent 3.1em)"></div>'},
urban:{bg:'#f2f2f2',tx:'#111',ac:'#111',ic:'#111',dk:0,lay:'s',f:'Impact,"Arial Narrow",sans-serif',deco:''},
tech:{bg:'#07162b',tx:'#d6f6ff',ac:'#06b6d4',ic:'#22d3ee',bd:'#06b6d4',dk:1,lay:'l',f:'"Courier New",monospace',deco:'<div class="dc" style="background:linear-gradient(rgba(34,211,238,.1) 1px,transparent 1px) 0 0/1.6em 1.6em,linear-gradient(90deg,rgba(34,211,238,.1) 1px,transparent 1px) 0 0/1.6em 1.6em"></div>'},
horizon:{bg:'linear-gradient(180deg,#2b1055,#c2410c 62%,#fbbf24)',tx:'#fff',ac:'#7c2d12',ic:'#fff',dk:1,lay:'c',f:'Georgia,serif',deco:'<div class="dc" style="background:radial-gradient(circle at 50% 72%,#fde68a 0 3em,transparent 3.1em),linear-gradient(transparent 72%,rgba(0,0,0,.35) 72%)"></div>'},
safari:{bg:'#5b6b3a',tx:'#f4ecd2',ac:'#3a4423',ic:'#f4ecd2',dk:1,lay:'r',f:'"Courier New",monospace',deco:'<div class="dc" style="inset:.9em;border:.14em dashed rgba(244,236,210,.55);border-radius:3%"></div>'}};
const TC=c=>XT[c[3]]||TH[c[3]];
const frv=(c,lg,pt)=>{const T=XT[c[3]],tr='<div class="flex justify-between items-start"><span style="color:#f5b301;letter-spacing:.12em;font-size:1.05em">★★★★★</span>'+NFC+'</div>',
bt='<div class="flex justify-between items-end"><span class="pill" style="background:'+T.ac+';color:'+(T.ac==='#111'?'#f5d90a':'#fff')+'">'+(pt||TY[S.lang][c[0]])+'</span><span class="sb">TAP · SCAN · REVIEW</span></div>',
ic=w=>lg?'<img src="'+lg+'" style="height:'+(w||'3.3em')+';max-width:6em;object-fit:contain;display:block;margin-inline:auto" alt="">':'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="color:'+T.ic+(w?';width:'+w+';height:'+w+';margin:0':'')+'">'+ICO[c[0]]+'</svg>',
nm=st=>'<div class="srf" style="font-family:'+T.f+';'+st+'">'+esc(c[1])+'</div>',sb=esc(c[2]);let m;
switch(T.lay){
case 'l':m='<div style="text-align:left"><div style="width:3.4em;height:3.4em;border-radius:50%;border:.1em solid '+T.ic+';display:grid;place-items:center">'+ic('1.9em')+'</div>'+nm('font-size:1.7em;margin-top:.45em;letter-spacing:.04em')+'<div class="sb" style="margin-top:.35em;letter-spacing:.25em">'+sb+'</div></div>';break;
case 'm':m='<div style="position:absolute;right:-.05em;bottom:-.35em;font:italic 700 13em/1 Georgia,serif;opacity:.13;color:'+T.ic+'">'+esc(c[1][0])+'</div><div class="text-center" style="position:relative">'+ic('2.2em').replace('margin:0','margin:0 auto')+nm('font-size:1.9em;font-style:italic;text-transform:none;letter-spacing:.04em')+'<div class="sb" style="margin-top:.5em;letter-spacing:.35em">'+sb+'</div></div>';break;
case 's':m='<div style="position:absolute;left:0;top:0;bottom:0;width:13%;background:'+T.ac+';display:grid;place-items:center"><span style="writing-mode:vertical-rl;transform:rotate(180deg);font-size:.7em;letter-spacing:.4em;color:#fff;white-space:nowrap">'+sb+'</span></div><div style="margin-left:13%;text-align:left">'+ic('2.4em')+nm('font-size:1.8em;margin-top:.3em')+'</div>';break;
case 'x':m='<div style="text-align:left">'+nm('font-size:2.7em;font-weight:900;line-height:.92;letter-spacing:-.01em')+'<div style="display:flex;align-items:center;gap:.6em;margin-top:.6em">'+ic('1.8em')+'<span class="sb" style="letter-spacing:.3em">'+sb+'</span></div></div>';break;
case 'b':m='<div class="text-center"><div style="width:5.6em;height:5.6em;border:.12em solid '+T.ic+';border-radius:50%;display:grid;place-items:center;margin:0 auto .5em">'+ic('2.8em')+'</div>'+nm('font-size:1.4em;letter-spacing:.2em')+'<div class="sb" style="margin-top:.4em;letter-spacing:.35em">'+sb+'</div></div>';break;
case 'g':m='<div style="display:flex;gap:.9em;align-items:center;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.35);border-radius:1em;padding:.9em"><div style="width:3.4em;height:3.4em;border-radius:50%;background:rgba(255,255,255,.2);display:grid;place-items:center;flex:none">'+ic('2em')+'</div><div style="text-align:left">'+nm('font-size:1.5em')+'<div class="sb" style="letter-spacing:.25em;margin-top:.3em">'+sb+'</div></div></div>';break;
case 'r':m='<div class="text-center">'+ic('2.4em').replace('margin:0','margin:0 auto')+nm('font-size:2em;font-weight:900;text-shadow:.05em .05em 0 '+T.ac)+'<div style="display:inline-block;margin-top:.6em;padding:.25em 1em;background:'+T.ac+';color:#fff;font-size:.68em;letter-spacing:.3em;transform:rotate(-2deg)">'+sb+'</div></div>';break;
default:m='<div class="text-center">'+ic()+nm('')+'<div class="sub2"><i></i><span>'+sb+'</span><i></i></div></div>'}
return (T.deco||'')+'<div class="ct" style="color:'+T.tx+'">'+tr+m+bt+'</div>'};
const IMG={"rest": "assets/img/rest-front.webp", "hotel": "assets/img/hotel-front.webp", "cafe": "assets/img/cafe-front.webp", "gym": "assets/img/gym-front.webp", "spa": "assets/img/spa-front.webp", "salon": "assets/img/salon-front.webp", "store": "assets/img/store-front.webp", "travel": "assets/img/travel-front.webp"};
const IMGB={"rest": "assets/img/rest-back.webp", "hotel": "assets/img/hotel-back.webp", "cafe": "assets/img/cafe-back.webp", "gym": "assets/img/gym-back.webp", "spa": "assets/img/spa-back.webp", "salon": "assets/img/salon-back.webp", "store": "assets/img/store-back.webp", "travel": "assets/img/travel-back.webp"};
const CARDS=[['rest','La Fontaine','RESTAURANT','onyx',1],['rest','Sakura Sushi','JAPANESE KITCHEN','sushi',0],['rest','Trattoria Roma','ITALIAN RESTAURANT','roma',0],['hotel','Grand View','HOTEL','ivory',1],['hotel','Nordic Stay','BOUTIQUE HOTEL','nordic',0],['hotel','Royal Palace','HOTEL & SPA','royal',0],['cafe','City Beans','CAFÉ','espresso',1],['cafe','Morning Brew','COFFEE ROASTERS','morning',0],['cafe','Sweet Corner','BAKERY & CAFÉ','sweet',0],['gym','Power Zone','GYM','carbon',1],['gym','Iron Gym','FITNESS CLUB','iron',0],['gym','Flex Studio','CROSSFIT','flex',0],['spa','Harmony','SPA & WELLNESS','forest',1],['spa','Zen Garden','SPA CENTER','zen',0],['spa','Aqua Relax','WELLNESS','aqua',0],['salon','Belle','BEAUTY SALON','rose',1],['salon','Glam Studio','HAIR & MAKEUP','glam',0],['salon','Luna Nails','NAIL BAR','luna',0],['store','Style Shop','CLOTHING STORE','ocean',1],['store','Urban Look','FASHION BOUTIQUE','urban',0],['store','Tech Hub','ELECTRONICS','tech',0],['travel','Explore','TRAVEL AGENCY','sky',1],['travel','Blue Horizon','TOUR OPERATOR','horizon',0],['travel','Safari Go','ADVENTURE TRAVEL','safari',0]];
const TY={ru:{rest:'Ресторан',hotel:'Отель',cafe:'Кофейня',gym:'Фитнес-клуб',spa:'Спа',salon:'Салон красоты',store:'Магазин',travel:'Турагентство'},ro:{rest:'Restaurant',hotel:'Hotel',cafe:'Cafenea',gym:'Sală fitness',spa:'Spa',salon:'Salon de frumusețe',store:'Magazin',travel:'Agenție de turism'},en:{rest:'Restaurant',hotel:'Hotel',cafe:'Café',gym:'Gym',spa:'Spa',salon:'Beauty salon',store:'Store',travel:'Travel agency'}};
const frx=o=>{const T=TH[o.th];return '<div class="flex justify-between items-start"><span style="color:#f5b301;letter-spacing:.12em;font-size:1.05em">★★★★★</span>'+NFC+'</div><div class="text-center">'+(o.logo?'<img src="'+o.logo+'" style="height:3.4em;margin:0 auto .3em;object-fit:contain" alt="">':'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="color:'+T.ic+'">'+ICO[o.cat]+'</svg>')+'<div class="srf">'+esc(o.n)+'</div><div class="sub2"><i></i><span>'+esc(o.sub)+'</span><i></i></div></div><div class="flex justify-between items-end"><span class="pill" style="background:'+T.ac+'">'+esc(o.p)+'</span><span class="sb">TAP · SCAN · REVIEW</span></div>'};
function frontEl(c,cls,st){const T=TC(c);return c[4]?'<img class="'+cls+'" src="'+IMG[c[0]]+'" alt="" style="'+st+'">':'<div class="'+cls+' face" style="background:'+T.bg+';color:'+T.tx+';--bd:'+(T.bd||'transparent')+';'+st+'">'+(XT[c[3]]?frv(c):frx({cat:c[0],th:c[3],n:c[1],sub:c[2],p:TY[S.lang][c[0]]}))+'</div>'}
function backH(c){if(c[4])return '<img src="'+IMGB[c[0]]+'" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">';const T=TC(c),q=qrcode(0,'M');q.addData('https://example.com/'+c[1].replace(/ /g,'-').toLowerCase());q.make();
 const bg=c[4]?'<img src="'+IMG[c[0]]+'" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:blur(12px) brightness('+(T.dk?.5:1.08)+');transform:scale(1.2)"><div style="position:absolute;inset:0;background:'+(T.dk?'rgba(0,0,0,.25)':'rgba(255,255,255,.4)')+'"></div>':'<div style="position:absolute;inset:0;background:'+T.bg+'"></div>'+(T.deco||'');
 return bg+'<div style="position:absolute;inset:0;padding:5.5cqw;display:flex;flex-direction:column;justify-content:space-between;color:'+T.tx+'"><div class="flex justify-between items-start"><span style="color:#f5b301;letter-spacing:.12em">★★★★★</span>'+NFC+'</div><div class="flex items-center gap-[1.2em]"><div class="qrb" style="width:40%"><div class="qr">'+q.createSvgTag(4,0)+'</div></div><div><div class="ttl" style="font-size:1.2em;font-family:'+(T.f||'inherit')+'">'+esc(c[1])+'</div><div class="sb mt-1">'+TY[S.lang][c[0]]+'</div><div class="sb mt-2">TAP · SCAN · REVIEW</div></div></div><div class="flex justify-between items-end"><span class="pill" style="background:'+T.ac+'">'+TY[S.lang][c[0]]+'</span><span class="sb">NFC ▸)))</span></div></div>'}
const backBox=c=>'<div class="cq"><div style="position:relative;aspect-ratio:1.15;border-radius:7%;overflow:hidden;font-size:4.6cqw">'+backH(c)+'</div></div>';
const IC={tg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65L10.06 14.42L17.74 7.5C18.08 7.19 17.67 7.04 17.22 7.31L7.74 13.3L3.64 12C2.76 11.75 2.75 11.14 3.84 10.7L19.81 4.54C20.54 4.21 21.24 4.72 20.96 5.84L18.24 18.65C18.05 19.56 17.5 19.78 16.74 19.36L12.6 16.3L10.61 18.23C10.38 18.46 10.19 18.65 9.78 18.65Z"/></svg>',ph:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5A1 1 0 0 1 21 16.5V20A1 1 0 0 1 20 21A17 17 0 0 1 3 4A1 1 0 0 1 4 3H7.5A1 1 0 0 1 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/></svg>',ml:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 8L12 13L4 8V6L12 11L20 6M20 4H4C2.89 4 2 4.89 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6C22 4.89 21.1 4 20 4Z"/></svg>'};
function goOrder(){tab('contacts')}
function ct(){
 const tg='https://t.me/'+CFG.tg,tel='tel:'+CFG.phone;
 ['#hTg'].forEach(q=>{const a=$(q);a.href=tg;a.innerHTML=IC.tg});['#hPh'].forEach(q=>{const a=$(q);a.href=tel;a.innerHTML=IC.ph});
 $('#sTgi').innerHTML=IC.tg;$('#sMli').innerHTML=IC.ml;
 const tl=(ic,bg,lb,v,h,ext)=>'<a href="'+h+'"'+(ext?' target="_blank" rel="noopener"':'')+' class="glass p-4 flex items-center gap-3 hover:-translate-y-1 transition"><span class="ib" style="background:'+bg+'">'+ic+'</span><span class="min-w-0"><span class="block text-xs opacity-60">'+lb+'</span><b class="break-all">'+v+'</b></span></a>';
 $('#ctiles').className='grid gap-3 mt-6 '+(CFG.mail?'sm:grid-cols-3':'sm:grid-cols-2');
 $('#ctiles').innerHTML=tl(IC.tg,'#229ed9',t('ttg'),'@'+CFG.tg,tg,1)+tl(IC.ph,'#22c55e',t('tcall'),CFG.phoneShow,tel)+(CFG.mail?tl(IC.ml,'#f59e0b',t('tml'),CFG.mail,'mailto:'+CFG.mail):'');
 const fl=(ic,v,h,ext)=>'<a href="'+h+'"'+(ext?' target="_blank" rel="noopener"':'')+' class="inline-flex items-center gap-2 opacity-80 hover:opacity-100"><span class="inline-block w-4 h-4">'+ic+'</span>'+v+'</a>';
 $('#fct').innerHTML=fl(IC.tg,'@'+CFG.tg,tg,1)+fl(IC.ph,CFG.phoneShow,tel)+(CFG.mail?fl(IC.ml,CFG.mail,'mailto:'+CFG.mail):'');
}
const TB=[['home','🏠','n1'],['builder','🎨','n2'],['gallery','🖼️','n3'],['calc','🧮','n4'],['contacts','💬','n5']];
const S={lang:'ru',th:'onyx',pl:'google',pr:'rest',edit:false,logo:'',flipped:false,rx:6,ry:-8,tab:'home',phone:'live',links:['menu','instagram','wifi'],tpl:'',gf:'all'};
const $=s=>document.querySelector(s),t=k=>L[S.lang][k]||k;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ls=(a,b)=>{try{return b===undefined?localStorage.getItem(a):localStorage.setItem(a,b)}catch(e){return null}};
const NFC='<svg class="nfc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 8c2.5 2.5 2.5 5.5 0 8"/><path d="M10 5c4.5 4 4.5 10 0 14"/><path d="M14 3c6 5.5 6 12.5 0 18"/></svg>';
const fr=o=>'<div class="flex justify-between items-start"><div>'+(o.logo?'<img src="'+o.logo+'" style="height:2.4em;max-width:7em;object-fit:contain" alt="">':'<span style="color:#f5b301;letter-spacing:.12em;font-size:1.1em">★★★★★</span>')+'</div>'+NFC+'</div><div><div class="ttl">'+esc(o.t)+'</div><div class="sb mt-1">'+esc(o.s)+'</div></div><div class="flex justify-between items-end"><span class="pill" style="background:'+o.c+'">'+esc(o.p)+'</span><span class="sb">TAP ▸)))</span></div>';
function bk(o){const q=qrcode(0,'H');q.addData(o.u||'https://example.com/'+encodeURIComponent(o.n));q.make();
 return '<div class="flex items-center gap-[1.2em] h-full"><div class="qrb"><div class="qr">'+q.createSvgTag(4,0)+'</div>'+(o.logo?'<img src="'+o.logo+'" style="position:absolute;inset:0;margin:auto;width:22%;height:22%;object-fit:contain;background:#fff;border-radius:.3em" alt="">':'')+'</div><div><div class="ttl" style="font-size:1.15em">'+esc(o.b)+'</div><div class="sb mt-2">SCAN · TAP</div><div class="sb">'+esc(o.n)+'</div></div></div>'}
const W=(m,inner,st)=>'<div class="cq" style="'+(st||'')+'"><div class="face m-'+m+'" style="aspect-ratio:1.586">'+inner+'</div></div>';
const ptxt=()=>S.pl==='menu'?t('menu'):PL[S.pl];

function chips(el,arr,on,fn){el.innerHTML='';arr.forEach(([id,label])=>{const b=document.createElement('button');b.className='chip'+(on===id?' on':'');b.textContent=label;b.onclick=()=>fn(id);el.appendChild(b)})}
function card(){
 const n=$('#iName').value||'Brand',T=XT[S.tpl]||TH[S.th];
 [['#fr',''],['#bk','back']].forEach(([id,c])=>{const e=$(id);e.className='face '+c;e.style.background=T.bg;e.style.color=T.tx;e.style.setProperty('--bd',T.bd||'transparent')});
 $('#fr').innerHTML=S.tpl?frv([S.pr,n,$('#iF').value,S.tpl,0],S.logo,ptxt()):frx({cat:S.pr,th:S.th,n:n,sub:$('#iF').value,p:ptxt(),logo:S.logo});
 $('#bk').innerHTML=(S.tpl&&T.deco||'')+'<div style="position:relative;z-index:1;height:100%">'+bk({b:$('#iB').value,n:n,logo:S.logo,u:$('#iUrl').value.trim()})+'</div>';
 $('#logoRow').classList.toggle('hidden',!S.logo);$('#logoRow').classList.toggle('flex',!!S.logo);if(S.logo)$('#logoTh').src=S.logo;
 $('#sF').classList.toggle('on',!S.flipped);$('#sB').classList.toggle('on',S.flipped);
 $('#card').style.transform='rotateX('+S.rx+'deg) rotateY('+(S.ry+(S.flipped?180:0))+'deg)';
 mini();
}
function fillTexts(){if(S.edit)return;$('#iF').value=TY[S.lang][S.pr].toUpperCase();$('#iB').value=t('b'+(1+CATS.indexOf(S.pr)%4))}
function ui(){
 $('#mats').innerHTML=Object.keys(TH).map(k=>'<button class="sw'+(S.th===k&&!S.tpl?' on':'')+'" data-k="'+k+'" style="background:'+TH[k].bg+'" aria-label="'+k+'"></button>').join('');
 $('#mats').querySelectorAll('.sw').forEach(b=>b.onclick=()=>{S.th=b.dataset.k;S.tpl='';ui()});
 chips($('#plats'),Object.keys(PL).map(k=>[k,k==='menu'?t('menu'):PL[k]]),S.pl,k=>{S.pl=k;ui()});
 chips($('#presets'),CATS.map(k=>[k,TY[S.lang][k]]),S.pr,k=>{S.pr=k;S.tpl='';S.edit=false;S.th=PR[k][0];S.pl=PR[k][1];fillTexts();ui()});

 chips($('#tpls'),CARDS.filter(c=>!c[4]).map(c=>[c[3],c[1]]),S.tpl,k=>{const c=CARDS.find(x=>x[3]===k);S.tpl=k;S.pr=c[0];S.pl=PR[c[0]][1];S.edit=true;$('#iF').value=c[2];ui()});
 $('#lks').innerHTML=Object.keys(PL).concat('wifi').map(k=>'<button class="chip'+(S.links.includes(k)?' on':'')+'" data-k="'+k+'">'+(k==='menu'?t('menu'):k==='wifi'?'Wi-Fi':PL[k])+'</button>').join('');
 $('#lks').querySelectorAll('button').forEach(b=>b.onclick=()=>{const k=b.dataset.k;S.links=S.links.includes(k)?S.links.filter(x=>x!==k):S.links.concat(k);ui()});
 card();orderUpd();
}
function mini(){
 const n=$('#iName').value||'Brand',st=S.phone;let h='';
 if(st==='scan')h='<div class="h-full grid place-items-center relative bg-zinc-100"><div class="ring"></div><span class="text-3xl">📲</span></div>';
 else if(st==='done'||st==='live')h='<div class="p-5 text-center"><div class="w-14 h-14 rounded-2xl mx-auto grid place-items-center text-white text-xl font-bold" style="background:linear-gradient(135deg,#6366f1,#a855f7)">'+esc(n[0].toUpperCase())+'</div><div class="font-extrabold mt-3">'+esc(n)+'</div><div class="text-xs" style="color:#f5b301">★★★★★</div><a class="pb text-white" style="background:'+PC[S.pl]+'">'+(S.pl==='menu'?t('menu'):'★ '+PL[S.pl])+'</a>'+S.links.filter(k=>k!==S.pl).map(k=>'<a class="pb bg-zinc-100">'+(k==='menu'?t('menu'):k==='wifi'?'Wi-Fi':PL[k])+'</a>').join('')+'</div>';
 else h='<div class="h-full grid place-items-center text-center p-6 bg-zinc-100 text-sm opacity-70">📱<br>'+t('tap')+'</div>';
 $('#scr').innerHTML=h;
}
function scan(){S.phone='scan';mini();setTimeout(()=>{S.phone='done';mini()},1600)}
function hero(){
 $('#steps').innerHTML=[1,2,3].map(i=>'<div class="glass p-5"><div class="stp">'+i+'</div><div class="font-bold mt-3">'+t('hw'+i+'t')+'</div><div class="text-sm opacity-70 mt-1">'+t('hw'+i+'d')+'</div></div>').join('');
 $('#faqs').innerHTML=[1,2,3,4].map(i=>'<details class="glass p-4"><summary class="font-semibold cursor-pointer">'+t('fq'+i)+'</summary><p class="mt-2 text-sm opacity-80">'+t('fa'+i)+'</p></details>').join('');
 $('#stack').innerHTML=[['rest','left:0;top:30%;transform:rotate(-10deg)'],['cafe','left:19%;top:0;transform:rotate(3deg);z-index:2'],['salon','right:0;top:38%;transform:rotate(12deg);z-index:3']].map(x=>'<div class="hc" style="'+x[1]+'"><img src="'+IMG[x[0]]+'" style="width:100%;border-radius:7%;box-shadow:0 25px 40px -15px rgba(0,0,0,.6)" alt=""></div>').join('');
 $('#feats').innerHTML=[['⚡','a1'],['🎨','a2'],['⭐','a3']].map(f=>'<div class="glass p-5"><div class="text-2xl">'+f[0]+'</div><div class="font-bold mt-2">'+t(f[1]+'t')+'</div><div class="text-sm opacity-70 mt-1">'+t(f[1]+'d')+'</div></div>').join('');
}
function grid(){
 chips($('#gf'),[['all',t('all')]].concat(CATS.map(k=>[k,TY[S.lang][k]])),S.gf,k=>{S.gf=k;grid()});
 S.ml=CARDS.map((c,i)=>i).filter(i=>S.gf==='all'||CARDS[i][0]===S.gf);
 $('#grid').innerHTML=S.ml.map(i=>{const c=CARDS[i];return '<div class="glass p-3 gcard"><div class="cq"><div class="flipw" data-i="'+i+'"><div class="fl3">'+frontEl(c,'ff','')+'<div class="fb">'+backH(c)+'</div></div></div></div><div class="flex items-center justify-between mt-3"><div><div class="text-sm font-semibold">'+c[1]+'</div><div class="text-xs opacity-60">'+TY[S.lang][c[0]]+'</div></div><button class="chip zm" data-i="'+i+'" aria-label="zoom">🔍</button></div></div>'}).join('');
 $('#grid').querySelectorAll('.flipw').forEach(f=>f.onclick=()=>f.classList.toggle('on'));
 $('#grid').querySelectorAll('.zm').forEach(b=>b.onclick=()=>openM(+b.dataset.i));
}
function closeM(){$('#modal').classList.replace('flex','hidden')}
function stepM(d){const n=S.ml.length,j=S.ml.indexOf(S.mi);openM(S.ml[(j+d+n)%n])}
function openM(i){
 const c=CARDS[i];S.mi=i;const j=S.ml.indexOf(i)+1;
 $('#mbox').innerHTML='<div class="flex items-center justify-between mb-2"><div class="font-bold">'+c[1]+' · '+TY[S.lang][c[0]]+'</div><button id="mx" class="chip !py-1" aria-label="close">✕</button></div><div class="text-xs opacity-60 mb-1">'+t('fl')+'</div><div class="cq">'+frontEl(c,'','aspect-ratio:1.15;position:relative;width:100%;border-radius:7%;display:flex')+'</div><div class="text-xs opacity-60 mt-4 mb-1">'+t('bl')+'</div>'+backBox(c)+'<p class="mt-4 text-sm opacity-90">'+t('dsc')+'</p><div class="grid grid-cols-2 gap-2 mt-4"><button id="useb" class="btn !px-3 text-sm">'+t('use')+'</button><button id="ordb" class="btn g2 !px-3 text-sm">'+t('ordr')+'</button></div><div class="flex justify-between items-center mt-3"><button id="mp" class="chip" aria-label="prev">‹</button><span class="text-xs opacity-60">'+j+' / '+S.ml.length+'</span><button id="mn" class="chip" aria-label="next">›</button></div>';
 $('#mx').onclick=closeM;$('#mp').onclick=()=>stepM(-1);$('#mn').onclick=()=>stepM(1);
 $('#useb').onclick=()=>{S.pr=c[0];S.tpl=XT[c[3]]?c[3]:'';S.th=TH[c[3]]?c[3]:PR[c[0]][0];S.pl=PR[c[0]][1];S.edit=true;$('#iName').value=c[1];$('#iF').value=c[2];$('#iB').value=t('b'+(1+CATS.indexOf(c[0])%4));closeM();tab('builder');ui();calc()};
 $('#ordb').onclick=()=>{const w=$('#oC');if(!w.value)w.value='Дизайн как «'+c[1]+'» ('+TY.ru[c[0]]+')';$('#oT').value='1';closeM();tab('contacts');orderUpd()};
 $('#modal').classList.replace('hidden','flex');
}
function calc(){
 S.n=S.n||5;const n=S.n,big=n>10,p=big?80:60,tg=n*p,st=big?0:200,tot=tg+st;
 $('#tiers').innerHTML=[[0,'tr1','r1',60,'s1'],[1,'tr2','r2',80,'s2']].map(([i,a,r,pr,sx])=>{const on=(i===1)===big;return '<button class="tier'+(on?' on':'')+'" data-i="'+i+'"><div class="flex justify-between items-center"><span class="font-extrabold text-lg">'+t(a)+'</span><span class="chip !py-1'+(on?' on':'')+'">'+t(r)+'</span></div><div class="mt-3 flex items-end gap-2"><span class="text-5xl font-extrabold gt">'+pr+'</span><span class="opacity-70 pb-1">'+t('pc')+'</span></div><div class="mt-3 text-sm '+(i?'text-emerald-500 font-semibold':'opacity-70')+'">'+(i?'✓ ':'+ ')+t(sx)+'</div>'+(on?'<div class="text-xs mt-2 text-violet-500 font-semibold">● '+t('cur')+'</div>':'')+'</button>'}).join('');
 $('#tiers').querySelectorAll('.tier').forEach(b=>b.onclick=()=>{const i=+b.dataset.i;if(i===0&&S.n>10)setN(5);if(i===1&&S.n<11)setN(11)});
 chips($('#qk'),[1,5,10,11,20,50].map(v=>[v,v]),n,v=>setN(v));
 const dn=Math.min(n,20),pn=S.pn||0;
 $('#dots').innerHTML=Array.from({length:dn},(_,i)=>'<span class="mc'+(big?' g':'')+'" style="'+(i>=pn?'animation-delay:'+(i-pn)*25+'ms':'animation:none')+'"></span>').join('')+(n>20?'<span class="text-sm font-bold opacity-70 self-center ml-1">+'+(n-20)+'</span>':'');S.pn=dn;
 $('#sum').innerHTML='<div class="flex justify-between"><span>'+t('tags')+' · '+n+' × '+p+'</span><b>'+tg+' MDL</b></div><div class="flex justify-between"><span>'+t('site')+'</span><b class="'+(big?'text-emerald-500':'')+'">'+(big?'✓ '+t('free'):st+' MDL')+'</b></div>';
 $('#eff').textContent=(tot/n).toFixed(1)+' MDL';
 const from=+$('#tot').textContent||0,t0=performance.now(),id=S.at=(S.at||0)+1;
 (function f(now){if(id!==S.at)return;const k=Math.min(1,(now-t0)/450);$('#tot').textContent=Math.round(from+(tot-from)*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(t0);
 orderUpd();
}
function ordText(){
 const n=S.n||5,big=n>10,p=big?80:60,st=big?0:200,tot=n*p+st,tp=S.tpl?CARDS.find(c=>c[3]===S.tpl)[1]:S.th;
 return ['🧾 Заказ таблички NFC','Клиент: '+$('#oN').value.trim(),'Телефон: '+$('#oP').value.trim(),'','Тип таблички: '+L.ru['pt'+$('#oT').value],'Размеры: '+($('#oS').value.trim()||'—'),'Количество: '+n+' шт','Расчёт по калькулятору: '+n+' × '+p+' MDL'+(big?' (сайт бесплатно)':' + сайт 200 MDL')+' = '+tot+' MDL','','Дизайн из конструктора:','Заведение: '+$('#iName').value,'Ниша: '+TY.ru[S.pr],'Стиль: '+tp,'Платформа: '+PL[S.pl],'Лицевая сторона: '+$('#iF').value,'Оборот: '+$('#iB').value,'Логотип: '+(S.logo?'есть (пришлю отдельно)':'нет'),'Ссылка для QR: '+($('#iUrl').value||'—'),'Ссылки на мини-сайте: '+S.links.join(', '),'','Пожелания: '+($('#oC').value.trim()||'—')].join('\n');
}
function orderUpd(){
 const x=ordText();$('#ord').value=x;if(document.activeElement!==$('#oQ'))$('#oQ').value=S.n||5;
 $('#sMl').style.display=CFG.mail?'':'none';
 $('#sMl').href=CFG.mail?'mailto:'+CFG.mail+'?subject='+encodeURIComponent('Заказ таблички — '+$('#oN').value)+'&body='+encodeURIComponent(x):'#';
}
function valid(){const ph=$('#oP').value.replace(/\D/g,'');let m='';if(!$('#oN').value.trim()){m=t('e1');$('#oN').focus()}else if(ph.length<8){m=t('e2');$('#oP').focus()}$('#err').textContent=m;return !m}
function copySync(txt){let ok=false;const a=document.createElement('textarea');a.value=txt;a.style.cssText='position:fixed;top:0;left:0;opacity:0';document.body.appendChild(a);a.select();try{ok=document.execCommand('copy')}catch(x){}a.remove();return ok}
function note(k,good){const e=$('#toast');e.textContent=t(k);e.className='text-sm '+(good?'text-emerald-500':'text-amber-500')}
const setN=v=>{S.n=Math.max(1,Math.min(500,Math.round(+v||1)));$('#num').value=S.n;$('#rng').value=Math.min(20,S.n);calc()};
function nav(){
 $('#fnav').innerHTML=TB.map(x=>'<button class="opacity-80 hover:opacity-100" onclick="tab(\''+x[0]+'\')">'+t(x[2])+'</button>').join('');
 $('#nav').innerHTML=TB.map(x=>'<button class="nb'+(S.tab===x[0]?' on':'')+'" onclick="tab(\''+x[0]+'\')">'+t(x[2])+'</button>').join('');
 $('#bnav').innerHTML=TB.map(x=>'<button class="'+(S.tab===x[0]?'on':'')+'" onclick="tab(\''+x[0]+'\')"><span class="text-lg">'+x[1]+'</span>'+t(x[2]).split(' ')[0]+'</button>').join('');
}
function tab(id){S.tab=id;document.querySelectorAll('.tab').forEach(e=>{const on=e.id===id;e.hidden=!on;if(on){e.style.animation='none';void e.offsetWidth;e.style.animation=''}});nav();scrollTo({top:0})}
function lang(l){
 S.lang=l;ls('tc_lang',l);document.documentElement.lang=l;
 document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));document.querySelectorAll('[data-ph]').forEach(e=>e.placeholder=t(e.dataset.ph));
 chips($('#langs'),['ru','ro','en'].map(x=>[x,x.toUpperCase()]),l,lang);
 $('#langs').querySelectorAll('button').forEach(b=>{b.style.padding='.3rem .7rem'});
 fillTexts();ui();hero();grid();calc();nav();ct();
}
$('#num').oninput=e=>{S.n=Math.max(1,Math.min(500,Math.round(+e.target.value||1)));$('#rng').value=Math.min(20,S.n);calc()};
$('#num').onchange=()=>setN($('#num').value);$('#rng').oninput=e=>setN(e.target.value);$('#minus').onclick=()=>setN(S.n-1);$('#plus').onclick=()=>setN(S.n+1);
['#iName','#iF','#iB'].forEach(s=>$(s).oninput=()=>{if(s!=='#iName')S.edit=true;card();calc()});
$('#iLogo').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{S.logo=r.result;card()};r.readAsDataURL(f)};
$('#logoDel').onclick=()=>{S.logo='';$('#iLogo').value='';card()};
['#iUrl','#oN','#oP','#oC','#oS'].forEach(q=>$(q).oninput=()=>{if(q==='#iUrl')card();if(q==='#oN'||q==='#oP')$('#err').textContent='';orderUpd()});
$('#oT').onchange=orderUpd;$('#oQ').oninput=e=>setN(e.target.value);$('#oQ').onchange=()=>{$('#oQ').value=S.n};
$('#sTg').onclick=()=>{if(!valid())return;orderUpd();const ok=copySync($('#ord').value);note(ok?'tc2':'tc3',ok);if(!ok&&navigator.clipboard)navigator.clipboard.writeText($('#ord').value).then(()=>note('tc2',true)).catch(()=>{});window.open('https://t.me/'+CFG.tg,'_blank','noopener')};
$('#sMl').onclick=e=>{if(!valid()||!CFG.mail)e.preventDefault()};
$('#sCp').onclick=()=>{if(!valid())return;orderUpd();note(copySync($('#ord').value)?'tc4':'tc3',true)};
$('#sF').onclick=()=>{S.flipped=false;card()};$('#sB').onclick=()=>{S.flipped=true;card()};
$('#dl').onclick=()=>{const s=$('#bk .qr svg');if(!s)return;const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([s.outerHTML.replace('<svg','<svg xmlns="http://www.w3.org/2000/svg"')],{type:'image/svg+xml'}));a.download='qr.svg';a.click()};
$('#scene').onmousemove=e=>{const r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;S.ry=(x-.5)*30;S.rx=-(y-.5)*20;$('#card').style.transform='rotateX('+S.rx+'deg) rotateY('+(S.ry+(S.flipped?180:0))+'deg)';document.querySelectorAll('#card .face').forEach(f=>{f.style.setProperty('--mx',x*100+'%');f.style.setProperty('--my',y*100+'%')})};
$('#scan').onclick=scan;
$('#modal').onclick=e=>{if(e.target.id==='modal')closeM()};
document.addEventListener('keydown',e=>{if($('#modal').classList.contains('flex')){if(e.key==='Escape')closeM();if(e.key==='ArrowLeft')stepM(-1);if(e.key==='ArrowRight')stepM(1)}});
$('#order').onclick=()=>{calc();tab('contacts')};
$('#theme').onclick=()=>{const d=document.documentElement.classList.toggle('dark');$('#theme').textContent=d?'🌙':'☀️';ls('tc_theme',d?'dark':'light')};
