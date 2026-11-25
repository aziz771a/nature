(function(){
var D={
ru:{logo:"Дикий бордо",n1:"Леса",n2:"Горы",n3:"Океаны",foot:"© 2026 Дикий бордо · Маленький гимн природе",
fh:"Леса",ftag:"Тихие соборы из листвы, коры и света.",fq:"Лес — это не набор деревьев, а сообщество, которое дышит вместе.",
f1t:"Древние великаны",f1p:"Секвойи и дубы живут веками, накапливая углерод и давая приют тысячам видов в своих ветвях.",
f2t:"Лесной интернет",f2p:"Подземные грибные сети соединяют корни деревьев, позволяя лесу делиться водой, питательными веществами и сигналами об опасности.",
f3t:"Огонь осени",f3p:"Когда хлорофилл исчезает, проступают красные, янтарные и золотые оттенки, окрашивая леса в тёплые бордовые тона.",
mh:"Горы",mtag:"Камень, снег и небо над облаками.",mq:"Горы учат терпению: каждая вершина покоряется шаг за шагом.",
m1t:"Рождённые столкновением",m1p:"Великие хребты медленно растут, когда тектонические плиты сталкиваются и миллионы лет поднимают породу вверх.",
m2t:"Жизнь на высоте",m2p:"Снежные барсы, козероги и стойкие альпийские цветы живут там, где воздух разрежен, а зимы долгие.",
m3t:"Истоки рек",m3p:"Ледники и талые воды питают реки, несущие пресную воду миллиардам людей ниже по течению.",
oh:"Океаны",otag:"Глубокий, неспокойный мир, покрывающий большую часть планеты.",oq:"О поверхности Луны мы знаем больше, чем о дне наших океанов.",
o1t:"Коралловые города",o1p:"Рифы занимают крошечную часть морского дна, но дают приют примерно четверти всех морских видов.",
o2t:"Тёмные глубины",o2p:"Ниже солнечного света под огромным давлением живут светящиеся медузы, удильщики и гигантские кальмары.",
o3t:"Двигатель климата",o3p:"Океанские течения переносят тепло по планете, а море производит значительную часть кислорода, которым мы дышим."},
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
o3t:"Iqlim harakatlantiruvchisi",o3p:"Okean oqimlari issiqlikni sayyora bo‘ylab tashiydi, dengiz esa biz nafas oladigan kislorodning katta qismini ishlab chiqaradi."}
};
var els=[].slice.call(document.querySelectorAll('[data-i18n]'));
els.forEach(function(e){e.setAttribute('data-en',e.textContent)});
var btns=[].slice.call(document.querySelectorAll('.lang button'));
function set(l){
els.forEach(function(e){var t=l==='en'?null:D[l][e.getAttribute('data-i18n')];e.textContent=t||e.getAttribute('data-en')});
document.documentElement.lang=l;
document.title=document.querySelector('h1').textContent+' – '+document.querySelector('.logo').textContent;
btns.forEach(function(b){b.className=b.getAttribute('data-l')===l?'on':''});
try{localStorage.setItem('lang',l)}catch(x){}}
btns.forEach(function(b){b.onclick=function(){set(b.getAttribute('data-l'))}});
var s=null;try{s=localStorage.getItem('lang')}catch(x){}
if(!s){var n=(navigator.language||'en').slice(0,2);s=(n==='ru'||n==='uz')?n:'en'}
set(s);
})();
