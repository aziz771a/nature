(function(){
var D={
uz:{logo:"Yovvoyi Bordo",n1:"O‘rmonlar",n2:"Tog‘lar",n3:"Okeanlar",foot:"© 2026 Yovvoyi Bordo · Tabiatga kichik ehtirom",
fh:"O‘rmonlar",ftag:"Barg, po‘stloq va nurdan yaralgan sokin soborlar.",fq:"O‘rmon — daraxtlar to‘plami emas, birgalikda nafas oladigan jamiyatdir.",
f1t:"Qadimiy gigantlar",f1p:"Sekvoya va eman daraxtlari asrlar davomida yashab, uglerodni to‘playdi va shoxlarida minglab turlarga boshpana beradi.",
f2t:"O‘rmon interneti",f2p:"Yer osti zamburug‘ tarmoqlari daraxt ildizlarini bog‘lab, o‘rmonga suv, oziq moddalar va xavf signallarini ulashish imkonini beradi.",
f3t:"Kuzning olovi",f3p:"Xlorofill so‘nganda yashirin qizil, amber va oltin ranglar ochilib, o‘rmonlarni iliq bordo tuslarga bo‘yaydi.",
mh:"Tog‘lar",mtag:"Bulutlardan yuqorida turgan tosh, qor va osmon.",mq:"Tog‘lar sabrga o‘rgatadi: har bir cho‘qqiga qadamma-qadam erishiladi.",
m1t:"To‘qnashuvdan tug‘ilgan",m1p:"Buyuk tog‘ tizmalari tektonik plitalar to‘qnashib, jinslarni millionlab yillar davomida ko‘targani sari sekin o‘sadi.",
m2t:"Balandlikdagi hayot",m2p:"Qor qoplonlari, tog‘ echkilari va chidamli alp gullari havo siyrak va qish uzoq davom etadigan joylarda yashaydi.",
m3t:"Daryolar boshlanishi",m3p:"Muzliklar va erigan qor suvi daryolarni to‘ldirib, quyi oqimdagi milliardlab odamlarga chuchuk suv yetkazadi.",
oh:"Okeanlar",otag:"Sayyoramizning katta qismini qoplagan chuqur va notinch olam.",oq:"Biz Oy yuzasi haqida okeanlar tubidan ko‘ra ko‘proq bilamiz.",
o1t:"Marjon shaharlari",o1p:"Rifler dengiz tubining juda kichik qismini egallaydi, biroq dengiz turlarining taxminan to‘rtdan biriga makon bo‘ladi.",
o2t:"Qorong‘u tubsizlik",o2p:"Quyosh nuridan pastda, ulkan bosim ostida nur taratuvchi meduzalar, qarmoqbaliqlar va ulkan kalmarlar yashaydi.",
o3t:"Iqlim harakatlantiruvchisi",o3p:"Okean oqimlari issiqlikni sayyora bo‘ylab tashiydi, dengiz esa biz nafas oladigan kislorodning katta qismini ishlab chiqaradi.",eyebrow:"Tabiat",next:"Keyingisi"}
};
var els=[].slice.call(document.querySelectorAll('[data-i18n]'));
els.forEach(function(e){e.setAttribute('data-ru',e.textContent)});
var btn=document.querySelector('.langbtn');
function set(l){
els.forEach(function(e){var t=l==='uz'?D.uz[e.getAttribute('data-i18n')]:null;e.textContent=t||e.getAttribute('data-ru')});
document.documentElement.lang=l;
document.title=document.querySelector('h1').textContent+' – '+document.querySelector('.logo').textContent;
btn.textContent=l==='ru'?'O‘zbekcha':'Русский';
btn.setAttribute('aria-label',l==='ru'?'O‘zbek tiliga o‘tish':'Переключить на русский');
try{localStorage.setItem('lang',l)}catch(x){}}
btn.onclick=function(){set(document.documentElement.lang==='ru'?'uz':'ru')};
var s='ru';try{s=localStorage.getItem('lang')==='uz'?'uz':'ru'}catch(x){}
set(s);
})();
