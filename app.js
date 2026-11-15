const $ = (q, root=document) => root.querySelector(q);
const $$ = (q, root=document) => [...root.querySelectorAll(q)];
const asset = name => `assets/${name}`;
const eyebrow = text => `<p class="eyebrow reveal">${text}</p>`;
const figure = (name, alt, caption='', extra='') => `<figure class="visual ${extra}" style="margin:0"><img class="photo photo-zoom" src="${asset(name)}" alt="${alt}" loading="eager">${caption?`<figcaption>${caption}</figcaption>`:''}</figure>`;
function scene(label='Шаурма на грилі з овочами, які розлітаються навколо') {
  const items=[
    ['0% 0%',-255,-190,-28,.93,'0s'],['50% 0%',60,-245,15,.91,'.22s'],['100% 0%',105,-75,-14,.88,'.12s'],
    ['0% 100%',-265,65,-22,.8,'.4s'],['50% 100%',95,130,25,.72,'.3s'],['100% 100%',-70,-290,28,.72,'.5s']
  ];
  return `<div class="scene photo-scene" role="img" aria-label="${label}"><div class="halo"></div><div class="neon-corner"></div><img class="hero-wrap real-hero" src="${asset('shawarma-hand.jpg')}" alt="" aria-hidden="true">${items.map(v=>`<div class="ingredient" aria-hidden="true" style="--pos:${v[0]};--x:${v[1]}px;--y:${v[2]}px;--r:${v[3]}deg;--scale:${v[4]};--delay:${v[5]}"><div class="sprite"></div></div>`).join('')}</div>`;
}
const recipes=[
 {title:'Хрусткий лаваш',text:'Фінальний контакт із грилем дає виразний хрускіт та характерні смужки.'},
 {title:'Свіжа капуста',text:'Свіжість і легка хрустка текстура в кожному шматочку.'},
 {title:'Морква по-корейськи',text:'Соковитий, пряний акцент — частина нашого українського смаку.'},
 {title:'Авторські соуси',text:'Власні поєднання соусів доповнюють м’ясо та овочі.'}
];
const menus=[
 ['Класична','€12','Основна шаурма на грилі'],['Подвійна','€17','Для більшого апетиту'],['Міні','€8','Компактний формат'],['Веганська','€11','Рослинна альтернатива']
];
const slides=[
 {title:'Смак у русі',cls:'hero',duration:16000,
 html:`<div class="hero-grid"><div class="hero-copy">${eyebrow('Український street food · Brussels-Central')}<h1 class="reveal delay">Смак.<br>Хрускіт.<br><span class="accent">Рух.</span></h1><p class="lead reveal delay2">Українська шаурма на грилі.<br>Гаряча зупинка у вашому маршруті.</p><div class="hero-foot reveal delay2"><span>М’ЯСО НА ГРИЛІ</span><i class="line"></i><span>ХРУСТКИЙ ЛАВАШ</span><i class="line"></i><span>ІЗ СОБОЮ</span></div><div class="callout"><i></i>Концепція для вокзалу Brussels-Central</div></div>${scene()}</div>`,
 notes:'Ми представляємо Shaurmania — українську шаурму для людей у русі. М’ясо готується на грилі, лаваш отримує хрустку скоринку, а свіжа капуста, морква по-корейськи та авторські соуси формують наш смак. Наше завдання — дати пасажиру гарячу, ситну страву у зручному пакуванні.'},
 {title:'Фірмова рецептура',cls:'recipe',duration:17000,
 html:`<div class="split">${scene('Анімована шаурма: свіжі овочі та м’ясо розлітаються й повертаються')}<div>${eyebrow('01 / Продукт')}<h2 class="reveal delay">Хрускіт,<br>який <span class="accent">чути.</span></h2><div class="recipe-choice">${recipes.map((r,i)=>`<button class="recipe-chip ${i===0?'active':''}" data-recipe="${i}" aria-pressed="${i===0}"><span>0${i+1}</span>${r.title}</button>`).join('')}</div><div class="recipe-description"><h3 id="recipe-title">${recipes[0].title}</h3><p id="recipe-text">${recipes[0].text}</p></div></div></div>`,
 notes:'Наші головні відмінності — хрусткий лаваш, авторські соуси, свіжа капуста та морква по-корейськи. М’ясо готуємо на контактному грилі. Після зборки підсмажуємо лаваш, щоб отримати характерну текстуру. Цю комбінацію хочемо зробити впізнаваною причиною повернутися саме до нас.'},
 {title:'Маршрут пасажира',cls:'transit',duration:15000,
 html:`<div class="split"><div>${eyebrow('02 / Вокзал')}<h2 class="reveal delay">Помітив.<br>Обрав.<br><span class="accent">Взяв із собою.</span></h2><p class="lead">Виразна вивіска. Зрозуміле меню.<br>Гаряча страва для короткої зупинки.</p><div class="route">${[['01','Помітність','Неон і фото продукту'],['02','Рішення','Ціна й порція одразу'],['03','Зручність','Пакування для дороги']].map((r,i)=>`<div class="route-stop ${i===0?'active':''}"><i></i><b>${r[1]}</b><p>${r[2]}</p></div>`).join('')}</div></div>${figure('station-hall-2026.jpg','Справжній зал Bruxelles-Central із пасажирами та табло відправлень','Bruxelles-Central · Sneeuwvlakte / CC BY-SA 4.0','transit-photo station-photo')}</div>`,
 notes:'На вокзалі рішення приймається швидко. Спочатку пасажир бачить назву та продукт, потім — зрозуміле меню й ціну, і далі отримує страву із собою. Нас можуть обрати люди перед поїздом, під час пересадки або дорогою з роботи. Точний потік біля нашого входу ще потрібно виміряти; потік усієї станції не дорівнює кількості потенційних покупців.'},
 {title:'Чому оберуть нас',cls:'value-slide',duration:15000,
 html:`<div class="split">${figure('shawarma-real.jpg','Фотографія шаурми з підсмаженим лавашем і овочевою начинкою','','real-food')}<div>${eyebrow('03 / Цінність')}<h2 class="reveal delay">Гаряча страва.<br><span class="accent">Щедра порція.</span></h2><div class="values">${[['01','Щойно з гриля','Готуємо та збираємо після замовлення.'],['02','Ситний обід','Повноцінна порція за зрозумілою ціною.'],['03','Зручно в дорозі','Фольга й зовнішнє пакування для їжі із собою.']].map(r=>`<div class="value-row"><span>${r[0]}</span><div><h3>${r[1]}</h3><p>${r[2]}</p></div></div>`).join('')}</div></div></div>`,
 notes:'За нашим спостереженням, значна частина пропозицій на вокзалі — готові позиції з вітрини. Ми хочемо доповнити цей вибір гарячою шаурмою, яку готуємо після замовлення. Основні аргументи — щедра порція, справедлива ціна і зручність для пасажира. Швидкість видачі підтвердимо під час відпрацювання процесу.'},
 {title:'Меню',cls:'menu-slide',duration:18000,
 html:`${eyebrow('04 / Меню')}<h2 class="reveal delay">Компактне меню.<br><span class="accent">Великий смак.</span></h2><div class="menu-layout"><div class="menu-photo real-menu"><img src="${asset('shawarma-menu.jpg')}" alt="Шаурма з хрустким лавашем"><img src="${asset('shawarma-double.jpg')}" alt="Шаурма зі щедрою м’ясною начинкою"><div class="menu-badge">4 ВАРІАНТИ · ОДНА ІДЕЯ</div></div><div><div class="menu-options">${menus.map((m,i)=>`<button class="menu-option ${i===0?'active':''}" data-menu="${i}" aria-pressed="${i===0}"><span class="option-top"><b>${m[0]}</b><strong>${m[1]}</strong></span><small>${m[2]}</small></button>`).join('')}</div><div class="extras"><div><span>Хот-дог</span><b>€5,50</b></div><div><span>Напої</span><b>€3</b></div><div><span>Вафельний торт</span><b>€4,50</b></div><div><span>Сирники · 3 шт.</span><b>€4</b></div></div><p class="small" style="margin-top:20px">Попереднє меню та ціни</p></div></div>`,
 notes:'Шаурма — головний продукт: класична за 12 євро, подвійна за 17, міні за 8 і веганська за 11. Додаткові позиції — хот-дог, напої та два десерти. Меню залишаємо компактним, щоб не перевантажувати кухню. Перед запуском перевіримо собівартість, комплектацію кожної позиції та швидкість її приготування.'},
 {title:'Досвід команди',cls:'team-slide',duration:17000,
 html:`<div class="experience"><div>${eyebrow('05 / Команда')}<h2 class="reveal delay">Досвід,<br>що працює<br><span class="accent">на старті.</span></h2><div class="exp-block"><span class="city">БРЮССЕЛЬ</span><h3>Sushi Garden</h3><p>Повний супровід відкриття: обладнання, закупівлі продуктів, меню та пошук працівників.</p></div><div class="exp-block"><span class="city">АНТВЕРПЕН</span><h3>Vishnya House</h3><p>Досвід роботи шеф-кухарем і щоденної організації ресторанної кухні.</p></div></div>${figure('unit-angle-real.jpg','Реальне приміщення під майбутню Shaurmania у Bruxelles-Central','Місце майбутнього запуску · фото приміщення','unit-photo')}</div>`,
 notes:'Наша команда вже консультувала й повністю підтримувала відкриття Sushi Garden у Брюсселі: від обладнання та продуктів до створення меню і пошуку працівників. Також маємо досвід шеф-кухаря у Vishnya House в Антверпені. Цей досвід допоможе нам організувати закупівлі, робочі місця, навчання та щоденну роботу закладу.'},
 {title:'Приміщення: до / концепт',cls:'site-slide',duration:17000,
 html:`<div class="site-heading"><div>${eyebrow('06 / Простір')}<h2 class="reveal delay">Місце, яке<br><span class="accent">зупиняє погляд.</span></h2></div><p>Графіт. Метал. Холодний сірий.<br>Неонова вивіска ззовні ролети.</p></div><div class="comparison" id="comparison"><img src="${asset('before.jpg')}" alt="Реальне приміщення на вокзалі до облаштування"><img class="after-image" src="${asset('angle.png')}" alt="Концептуальна візуалізація Shaurmania у цьому приміщенні"><span class="compare-label before">ЗАРАЗ</span><span class="compare-label after">НАША КОНЦЕПЦІЯ</span><div class="compare-separator"></div><input id="compare-range" type="range" min="5" max="95" value="50" aria-label="Порівняти реальне приміщення з концепцією"></div><div class="compare-footer"><p>Перетягніть розділювач, щоб роздивитися деталі.</p><p>Концептуальна візуалізація · фасад погоджується з SNCB</p></div>`,
 notes:'Це реальне приміщення, яке ми розглядаємо, і концептуальне зображення майбутньої Shaurmania. Фасад бачимо в графітових тонах, із металом та тонким неоновим підсвічуванням. Вивіска має залишатися помітною ззовні ролети. Після огляду уточнимо розміри, конструкцію фасаду, технічні можливості й погодження SNCB.'},
 {title:'Пакування',cls:'package-slide',duration:15000,
 html:`<div class="pack-layout">${figure('foil-real.jpg','Справжня шаурма, загорнута у фольгу: фотографічний приклад пакування','','foil-photo')}<div class="pack-text">${eyebrow('07 / Пакування')}<h2 class="reveal delay">Гаряча.<br><span class="accent">З собою.</span></h2><div class="stack"><div class="stack-item"><p class="number-label">01 / ФОЛЬГА</p><h3>Тепло всередині</h3><p>Кожну шаурму загортаємо у фольгу — це частина фірмового стилю й спосіб довше зберегти температуру.</p></div><div class="stack-item"><p class="number-label">02 / ЗОВНІШНЯ ОБГОРТКА</p><h3>Зручно тримати</h3><p>Впізнаваний графітовий дизайн. Матеріали та вимоги до сталості узгоджуємо з SNCB.</p></div></div></div></div>`,
 notes:'Кожна шаурма буде загорнута у фольгу. Для нас це і фірмовий стиль, і спосіб довше зберегти температуру гарячої страви. Зовні — зручна обгортка або тримач, за потреби пакет. Остаточні матеріали підберемо з урахуванням вимог вокзалу до пакування й поводження з відходами.'},
 {title:'Приготування на грилі',cls:'process-slide',duration:17000,
 html:`${eyebrow('08 / Приготування')}<h2 class="process-heading reveal delay">Два контакти<br><span class="accent">з грилем.</span></h2><div class="process-body">${`<div class="process-photos">${figure('shawarma-grill.webp','Фотографія лаваша на контактному грилі','Лаваш на грилі · фото «Сільпо»','grill-action')}${figure('shawarma-assemble.webp','Фотографія складання шаурми зі свіжою начинкою','Збірка · фото «Сільпо»','assembly-action')}</div>`}<div class="process-list">${[['М’ясо на грилі','Приготування м’яса.'],['Збірка','Овочі, м’ясо та авторські соуси.'],['Лаваш на грилі','Фінальний хрускіт і підсмажена поверхня.'],['Фольга та видача','Загортаємо й передаємо гостю.']].map((r,i)=>`<div class="process-step ${i===0?'active':''}"><b><span>0${i+1}</span>${r[0]}</b><p>${r[1]}</p></div>`).join('')}</div></div>`,
 notes:'У нас немає вертикального вертела. М’ясо готуємо на грилі, далі збираємо шаурму зі свіжими овочами й соусами, а потім підсмажуємо лаваш на контактному грилі. Після цього загортаємо страву у фольгу. Організацію робочих місць і послідовність відпрацюємо так, щоб підтримувати стабільний результат і швидкість.'},
 {title:'Обладнання',cls:'equipment-slide',duration:16000,
 html:`${eyebrow('09 / Кухня')}<h2 class="reveal delay">Компактна кухня.<br><span class="accent">Точний процес.</span></h2><div class="equipment-grid">${[['01','Контактний гриль','Професійний формат, більший за побутовий OptiGrill.'],['02','Холодильне зберігання','Холодильники та охолоджувані ємності для начинки.'],['03','Робоча зона','Стіл, мийка, рукомийник та інвентар.'],['04','Інженерія','Витяжка, електрика, вода й каналізація.']].map(r=>`<div class="equipment-item"><p class="number-label">${r[0]}</p><h3>${r[1]}</h3><p>${r[2]}</p></div>`).join('')}</div><div class="equipment-banner"><img src="${asset('unit-front-real.jpg')}" alt="Реальний фасад приміщення з ролетом до облаштування"><div>Комплектація під реальні<br>можливості приміщення.</div><span class="equipment-photo-credit">Ваше фото · приміщення до облаштування</span></div>`,
 notes:'Основне обладнання — великий професійний контактний гриль, холодильники, робочі поверхні, мийка та рукомийник. Окремо перевіряємо витяжку, доступну електричну потужність, воду і каналізацію. Позначення 16 А потрібно розшифрувати разом із технічним представником. Моделі, габарити та електричне навантаження остаточно визначимо після огляду.'},
 {title:'Щоденна робота',cls:'operations-slide',duration:17000,
 html:`<div class="split"><div>${eyebrow('10 / Робота закладу')}<h2 class="reveal delay">Сервіс у ритмі<br><span class="accent">станції.</span></h2><div class="schedule"><div class="hours-row"><b>ПН–ПТ</b><strong>07:00–19:00</strong></div><div class="hours-row"><b>СУБОТА</b><strong>08:00–18:00</strong></div><div class="hours-row"><b>НЕДІЛЯ</b><strong>11:00–17:00</strong></div></div><p class="small">Попередній графік — узгоджується з SNCB.</p></div><div class="operation-panel"><div class="stack"><div class="stack-item"><p class="number-label">ДО ВІДКРИТТЯ</p><h3>Запаси та підготовка</h3><p>Продукти, робочі місця й готовність команди.</p></div><div class="stack-item"><p class="number-label">ПІД ЧАС ЗМІНИ</p><h3>Темп і стабільна якість</h3><p>Зрозумілі ролі, навчання, чистота та контроль процесу.</p></div><div class="stack-item"><p class="number-label">ПІСЛЯ ЗМІНИ</p><h3>Порядок і облік</h3><p>Прибирання, запаси, сортування відходів.</p></div></div><div class="language-bar"><span>FR</span><span>NL</span><span>EN</span></div><p class="small">Мовне обслуговування після підготовки команди.</p></div></div>`,
 notes:'Робота будується навколо чітких ролей у зміні: підготовка, сервіс і закриття. Запропонований графік попередній — його узгодимо з вимогами вокзалу та попитом. Плануємо меню французькою і нідерландською та готуємо команду до обслуговування також англійською. Навчання, чистота й облік запасів мають працювати щодня.'},
 {title:'План на 8 років',cls:'finance-slide',duration:15000,
 html:`${eyebrow('11 / Горизонт планування')}<h2 class="reveal delay">Плануємо<br><span class="accent">на 8 років.</span></h2><div class="runway">${Array.from({length:8},(_,i)=>`<div class="year"><small>РІК</small><b>${i+1}</b></div>`).join('')}</div><div class="finance-points"><div><h3>Запуск</h3><p>Обладнання, ремонт, команда та резерв.</p></div><div><h3>Стабільна робота</h3><p>Продажі, собівартість, персонал і концесійна плата.</p></div><div><h3>Оновлення</h3><p>Обслуговування техніки й розвиток асортименту.</p></div></div><p class="finance-note">Фінансову пропозицію визначаємо після технічної оцінки та отримання повних умов. Розрахунок має включати обережний сценарій.</p>`,
 notes:'Ми плануємо роботу на весь восьмирічний період. Фінансова модель має врахувати запуск, усі поточні витрати, ремонт і заміну обладнання, а також слабкий сценарій продажів. Поки немає повних умов приміщення та кошторису, ми не обіцяємо непрораховану плату. Відсоток від обороту, гарантований мінімум і забезпечення визначимо на основі моделі.'},
 {title:'План запуску',cls:'launch-slide',duration:16000,
 html:`<div class="launch-top"><div>${eyebrow('12 / Запуск')}<h2 class="reveal delay">Від приміщення<br>до першого<br><span class="accent">замовлення.</span></h2></div><div class="launch-number"><strong>3–6</strong><span>тижнів*</span></div></div><div class="launch-list">${[['01','Огляд','Технічні можливості й стан приміщення.'],['02','Погодження','План, фасад і кошторис.'],['03','Облаштування','Роботи, обладнання й підготовка команди.'],['04','Відкриття','Відпрацювання процесу та запуск.']].map(r=>`<div><span>${r[0]}</span><h3>${r[1]}</h3><p>${r[2]}</p></div>`).join('')}</div><p class="launch-caveat">*Орієнтир після отримання приміщення. Строк уточнюємо після огляду, залежно від стану приміщення, необхідних робіт та погоджень.</p>`,
 notes:'Орієнтуємося на запуск через три–шість тижнів після отримання приміщення. Це попередній строк: його потрібно уточнити після огляду залежно від стану приміщення, обсягу робіт і погоджень. Спочатку підтверджуємо технічні можливості, далі плануємо ремонт, установку обладнання, навчання та відпрацювання процесу. Дедлайн заявки за наданими умовами — 12 січня 2027 року о 12:00; підтверджуємо його в конкурсному пакеті.'},
 {title:'Shaurmania',cls:'hero closing',duration:16000,
 html:`<div class="hero-grid"><div class="hero-copy">${eyebrow('Shaurmania · Brussels-Central')}<h1 class="reveal delay">Часу мало.<br><span class="accent">Смаку багато.</span></h1><p class="lead reveal delay2">Українська шаурма з хрустким лавашем, зручним пакуванням і швидким приготуванням — для залізничної станції, де часу завжди обмаль.</p><button class="restart" id="restart">Почати спочатку <span>↗</span></button><div class="hero-foot"><span>ДЯКУЄМО ЗА ЗУСТРІЧ</span></div></div>${scene()}</div>`,
 notes:'Shaurmania — це гаряча українська страва з м’ясом на грилі, хрустким лавашем, авторськими соусами, свіжими овочами та зручним пакуванням. Головне — чітко організоване швидке приготування, яке підходить для залізничної станції, де часу завжди обмаль. Ми готові обговорити приміщення, технічні вимоги та наступні кроки.'}
];

$('#deck').innerHTML=slides.map((s,i)=>`<section class="slide ${s.cls}" id="slide-${i+1}" data-slide="${i}" aria-label="Слайд ${i+1}: ${s.title}" aria-hidden="true" inert><div class="slide-inner">${s.html}</div></section>`).join('');
$('#rail').innerHTML=slides.map((s,i)=>`<button data-goto="${i}" aria-label="Слайд ${i+1}: ${s.title}" title="${s.title}"></button>`).join('');
$('#overview-grid').innerHTML=slides.map((s,i)=>`<button data-goto="${i}" class="overview-option"><span>${String(i+1).padStart(2,'0')}</span>${s.title}</button>`).join('');

const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
let current=0, elapsed=0, lastTime=performance.now(), running=!reduced, recipeIndex=-1, menuIndex=-1, compareManual=false;
let touchStart=null, wasVisible=true;
const sections=$$('.slide');
const pause=()=>setRunning(false);
function setRunning(value){
  running=value; document.body.classList.toggle('paused',!value);
  $('#play-button').setAttribute('aria-pressed',String(value));
  $('#play-button').setAttribute('aria-label',value?'Призупинити автопоказ':'Увімкнути автопоказ');
  $('#play-icon').textContent=value?'Ⅱ':'▷'; $('#play-label').textContent=value?'Пауза':'Показ';
  lastTime=performance.now();
}
function go(index,manual=false){
  index=Math.max(0,Math.min(slides.length-1,index));current=index;elapsed=0;recipeIndex=-1;menuIndex=-1;compareManual=false;
  sections.forEach((el,i)=>{const active=i===index;el.classList.toggle('is-active',active);el.setAttribute('aria-hidden',String(!active));el.inert=!active;if(active)el.scrollTop=0;});
  $$('#rail button').forEach((b,i)=>{b.classList.toggle('active',i===index);b.setAttribute('aria-current',i===index?'step':'false');});
  $$('.overview-option').forEach((b,i)=>b.classList.toggle('active',i===index));
  $('#current-page').textContent=String(index+1).padStart(2,'0');$('#chapter-name').textContent=slides[index].title;
  $('#previous').disabled=index===0;$('#next').disabled=index===slides.length-1;
  $('#timer-fill').style.width='0%';document.title=`${index+1}. ${slides[index].title} — Shaurmania`;
  try{history.replaceState(null,'',`#${index+1}`)}catch{}
  if(manual)$('#live-status').textContent=`Слайд ${index+1} із 14. ${slides[index].title}`;
  updateScene(0);
}
function setRecipe(i){
  if(i===recipeIndex)return;recipeIndex=i;
  $$('.recipe-chip').forEach((b,j)=>{b.classList.toggle('active',i===j);b.setAttribute('aria-pressed',String(i===j));});
  $('#recipe-title').textContent=recipes[i].title;$('#recipe-text').textContent=recipes[i].text;
}
function setMenu(i){if(i===menuIndex)return;menuIndex=i;$$('.menu-option').forEach((b,j)=>{b.classList.toggle('active',i===j);b.setAttribute('aria-pressed',String(i===j));});}
function updateScene(time){
  if(current===1)setRecipe(Math.floor(time/3900)%4);
  if(current===2)$$('.route-stop').forEach((el,i)=>el.classList.toggle('active',i===Math.floor(time/4200)%3));
  if(current===4)setMenu(Math.floor(time/4000)%4);
  if(current===6&&!compareManual&&!reduced){const value=50+36*Math.cos(time/2200);$('#comparison').style.setProperty('--reveal',`${value}%`);$('#compare-range').value=value;}
  if(current===8)$$('.process-step').forEach((el,i)=>el.classList.toggle('active',i===Math.floor(time/3600)%4));
  if(current===11)$$('.year').forEach((el,i)=>el.classList.toggle('lit',i<=Math.floor(time/1100)%8));
}
function tick(now){
  const dt=Math.min(now-lastTime,100);lastTime=now;
  if(running&&!document.hidden){elapsed+=dt;updateScene(elapsed);$('#timer-fill').style.width=`${Math.min(elapsed/slides[current].duration,1)*100}%`;if(elapsed>=slides[current].duration){if(current===slides.length-1)elapsed=0;else go(current+1);}}
  requestAnimationFrame(tick);
}
$('#play-button').addEventListener('click',()=>{if(current===13&&!running){go(0);setRunning(true);}else setRunning(!running);});
$('#previous').addEventListener('click',()=>go(current-1,true));$('#next').addEventListener('click',()=>go(current+1,true));
$$('[data-goto]').forEach(b=>b.addEventListener('click',()=>{go(Number(b.dataset.goto),true);$('#overview-dialog').close();}));
$('.wordmark').addEventListener('click',e=>{e.preventDefault();go(0,true);});
$('#restart').addEventListener('click',()=>{go(0,true);setRunning(true);});
$$('[data-recipe]').forEach(b=>b.addEventListener('click',()=>{pause();setRecipe(Number(b.dataset.recipe));}));
$$('[data-menu]').forEach(b=>b.addEventListener('click',()=>{pause();setMenu(Number(b.dataset.menu));}));
$('#compare-range').addEventListener('input',e=>{pause();compareManual=true;$('#comparison').style.setProperty('--reveal',`${e.target.value}%`);});
function openNotes(){pause();$('#notes-kicker').textContent=`СЛАЙД ${current+1} / 14`;$('#notes-title').textContent=slides[current].title;$('#notes-content').innerHTML=`<p>${slides[current].notes}</p>`;$('#notes-dialog').showModal();}
$('#notes-button').addEventListener('click',openNotes);$('#overview-button').addEventListener('click',()=>{pause();$('#overview-dialog').showModal();});
$$('.close-dialog').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
$$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const b=d.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)d.close();}}));
$('#fullscreen-button').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();else document.body.classList.toggle('focus-mode');}catch{document.body.classList.toggle('focus-mode');}});
document.addEventListener('keydown',e=>{
  if($('dialog[open]')||['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName))return;
  if(['ArrowRight','PageDown'].includes(e.key)){e.preventDefault();go(current+1,true);}
  if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(current-1,true);}
  if(e.key===' '&&!['BUTTON','A','SUMMARY'].includes(document.activeElement.tagName)){e.preventDefault();setRunning(!running);}
  if(e.key==='Home'){e.preventDefault();go(0,true);}if(e.key==='End'){e.preventDefault();go(13,true);}if(e.key.toLowerCase()==='n')openNotes();
});
$('#deck').addEventListener('touchstart',e=>{if(e.target.closest('button,input,dialog'))return;touchStart={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};},{passive:true});
$('#deck').addEventListener('touchend',e=>{if(!touchStart)return;const dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.5)go(current+(dx<0?1:-1),true);touchStart=null;},{passive:true});
document.addEventListener('visibilitychange',()=>{document.body.classList.toggle('paused',document.hidden||!running);lastTime=performance.now();});
const requested=parseInt(location.hash.slice(1),10);go(Number.isFinite(requested)?requested-1:0);setRunning(!reduced);requestAnimationFrame(tick);
