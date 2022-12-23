/* Вопросы с ответами и изменение счета */
const questions = [
    [
        "Где бы вы воздвигли замок?",
        ["Степь", "Лес", "Вершины гор", "Жерло вулкана", "Мёртвая пустошь", "Подземная пещера", "Пустыня", "Топь"],
        [
            "this.score.castle++",
            "this.score.rampart++",
            "this.score.tower++",
            "this.score.inferno++",
            "this.score.necropolis++",
            "this.score.dungeon++",
            "this.score.stronghold++",
            "this.score.fortress++",
        ]
    ],
    [
        "Смысл существования в...",
        ["созидании", "познании", "разрушении", "порабщении", "выживании"],
        [
            "this.score.castle++; this.score.rampart++",
            "this.score.tower++",
            "this.score.dungeon++",
            "this.score.inferno++; this.score.necropolis++",
            "this.score.stronghold++; this.score.fortress++",
        ]
    ],
    [
        "Как настичь убегающего противника?",
        ["Скакать по лучшим трактам", "Тайными тропами", "Через подземные ходы", "Загнать до изнеможения"],
        [
            "this.score.castle++; this.score.tower++",
            "this.score.rampart++; this.score.fortress++",
            "this.score.dungeon++",
            "this.score.inferno++; this.score.stronghold++; this.score.necropolis++",
        ]
    ],

    [
        "Перед вами укреплённый город с гарнизоном",
        ["Я сокрушу врата и стены", "Я перебью гарнизон стрелковыми атаками", "Летающим войскам стены не помеха", "Я окружу город и возьму измором"],
        [
            "this.score.stronghold++; this.score.fortress--", 
            "this.score.tower++; this.score.stronghold--", 
            "this.score.inferno++; this.score.dungeon++",
            "this.score.fortress++; this.score.necropolis++",
        ]
    ],
    [
        "Насколько важна магия на поле боя?",
        ["Только как поддержка воинов", "Очень важна. Магия - наше всё", "На магию расчитывай, но и о войсках не забывай",],
        [
            "this.score.fortress++; this.score.stronghold++",
            "this.score.tower++; this.score.inferno++; this.score.dungeon++",
            "this.score.castle++; this.score.rampart++; this.score.necropolis++",
        ]
    ],
    [
        "На вас напали",
        ["Выйдем и дадим бой лицом к лицу", "Стены замка нас уберегут", "Испепелим наглецов заклинаниями", "Утыкаем их стрелами", "Их ждёт смерть"],
        [
            "this.score.stronghold++", 
            "this.score.fortress++", 
            "this.score.tower++; this.score.inferno++; this.score.dungeon++",
            "this.score.castle++; this.score.rampart++",
            "this.score.necropolis++"
        ]
    ],
    [
        "Воин должен быть...",
        ["сильным", "одержимым", "устойчивым к магии", "доблестным", "хорошо защищённым", "мёртвым, ибо нельзя умереть дважды", "наёмником либо рабом", "магом"],
        [
            "this.score.stronghold++",
            "this.score.inferno++; this.score.castle--", 
            "this.score.rampart++; this.score.tower--; this.score.dungeon--", 
            "this.score.castle++; this.score.necropolis--",
            "this.score.fortress++; this.score.stronghold--",
            "this.score.necropolis++; this.score.castle--; this.score.rampart--",
            "this.score.dungeon++",
            "this.score.tower++"
        ]
    ],
    [
        "Самое важное в стрельбе - это...",
        ["зоркий глаз", "надёжность механизмов", "желание убить врага", "магические навыки", "Стрельба для слабаков"],
        [
            "this.score.rampart++", 
            "this.score.castle++",
            "this.score.necropolis++",
            "this.score.inferno++; this.score.tower++; this.score.dungeon++", 
            "this.score.fortress++; this.score.stronghold+=2"
        ]
    ],
    [
        "Добро, зло или печеньки?",
        ["Добро", "Зло", "Печеньки", "Не могу определиться"],
        [
            "this.score.rampart++; this.score.castle++; this.score.tower++; this.score.necropolis-=2; this.score.inferno-=2", 
            "this.score.necropolis++; this.score.inferno++; this.score.rampart-=2; this.score.castle-=2; this.score.tower-=2",
            "this.score.fortress++; this.score.stronghold++",
            "this.score.dungeon++"
        ]
    ],
    [
        "Больше всего вас привлекают прогулки по...",
        ["пещерам", "болотам", "пескам", "снегу", "лавовым потокам", "траве", "лесу", "кладбищам"],
        [
            "this.score.dungeon++", 
            "this.score.fortress++", 
            "this.score.stronghold++",
            "this.score.tower++; this.score.inferno--",
            "this.score.inferno++; this.score.tower--",
            "this.score.castle++; this.score.rampart++",
            "this.score.rampart++; this.score.fortress++",
            "this.score.necropolis++; this.score.rampart--; this.score.castle--"
        ]
    ],
    [
        "Альнс Ангелов",
        ["Даёт всеобщую молитву", "Свяыня и опора", "Ненавижу больше жизни", "Презренное оружие", "Собирать, потом разбираь :("],
        [
            "this.score.dungeon++; this.score.fortress++; this.score.tower++; this.score.rampart++",
            "this.score.castle++; this.score.necropolis--",
            "this.score.necropolis++",
            "this.score.inferno++; this.score.castle--", 
            "this.score.stronghold++"
        ]
    ],
    [
        "Ваша стихия?",
        ["Земля", "Вода", "Огонь", "Воздух", "Топор и дубина"],
        [
            "this.score.dungeon++; this.score.necropolis++; this.score.rampart++", 
            "this.score.fortress++; this.score.castle++; this.score.inferno--",
            "this.score.inferno++; this.score.fortress--",
            "this.score.tower++",
            "this.score.stronghold++"
        ]
    ],
    [
        "Перед вами лампа джина",
        ["Уничтожу", "Пополню армию новым воином", "Потру и загадаю желание", "Пройду мимо"],
        [
            "this.score.stronghold++; this.score.inferno++; this.score.tower--", 
            "this.score.tower++; this.score.inferno--", 
            "this.score.castle++; this.score.rampart++; this.score.tower--",
            "this.score.dungeon++; this.score.necropolis++; this.score.fortress++"
        ]
    ],
    [
        "Вы напали на нейральный отряд существ, которые хотят избежать битвы.",
        ["Отпустить", "Уничтожить и получить опыт", "Пополнить армию их трупами"],
        [
            "this.score.castle++; this.score.rampart++; this.score.tower++; this.score.fortress++", 
            "this.score.stronghold++; this.score.inferno++; this.score.dungeon++; this.score.castle--; this.score.rampart--; this.score.tower--", 
            "this.score.necropolis++; this.score.castle--; this.score.rampart--", 
        ]
    ],
    [
        "Вам необходимо преодолеть реку",
        ["Буду искать верфь", "Построю корабль в городе", "Использую полёт/дверь измерений", "Попытаюсь призваь корабль, заем буду искать верфь", "Я избегаю воду"],
        [
            "this.score.stronghold++;", 
            "this.score.castle++; this.score.necropolis++; this.score.fortress++",
            "this.score.tower++; this.score.dungeon++",
            "this.score.rampart++",
            "this.score.inferno++"
        ]
    ],
    [
        "Как вы защиите городские стены от осады",
        ["Выкопаю ров", "Установлю частокол", "Засыплю костями и черепами врагов", "Пущу потоки лавы", "Установлю ловушки", "Выкопаю гиганский ров"],
        [
            "this.score.dungeon++; this.score.castle++; this.score.stronghold++", 
            "this.score.rampart++", 
            "this.score.necropolis++; this.score.castle--; this.score.rampart--",
            "this.score.inferno++",
            "this.score.tower++; this.score.stronghold--",
            "this.score.fortress++"
        ]
    ],
    [
        "Каких стрелков посадить на башни при осаде города?",
        ["Лучников! Стрелы - наше всё!", "Чародеев! Заклинания - наше всё!", "Магических существ! Магия - наше всё", "Стрельба для слабаков"],
        [
            "this.score.castle++; this.score.rampart++; this.score.fortress++", 
            "this.score.tower++; this.score.necropolis++", 
            "this.score.inferno++; this.score.dungeon++",
            "this.score.stronghold+=2"
        ]
    ],
    [
        "Варвар - ",
        ["злодей", "герой", "должен служить", "должен умереть", "хорош под соусом из семян плотоядного растения"],
        [
            "this.score.castle++; this.score.rampart++; this.score.tower++", 
            "this.score.stronghold+=2", 
            "this.score.dungeon++", 
            "this.score.necropolis++; this.score.inferno++",
            "this.score.fortress++; this.score.stronghold-=2"
        ]
    ],
    [
        "Как провести досуг?",
        ["Посетить храм в горах", "Отправиться в особняк на бал в полночь", "Посетить рыцарский турнир", "Принести жертву на кровавом обелиске", "Принять участие в скачках на волках", "Заплетать гривы единорогам", "Принять ванну в кипящих серных озёрах", "Исследовать катакомбы"],
        [
            "this.score.tower++", 
            "this.score.necropolis++", 
            "this.score.castle++",
            "this.score.fortress++",
            "this.score.stronghold++",
            "this.score.rampart++",
            "this.score.inferno++",
            "this.score.dungeon++",
        ]
    ],
    [
        "Во что вы верите?",
        ["Во Всевышнего", "В науку и прогресс", "В золото", "В то, что все рано или поздно умирают", "В духов луны и леса", "В дьявола", "В духов предков", "В свою дубину"],
        [
            "this.score.castle++; this.score.inferno--",
            "this.score.tower++; this.score.stronghold--",
            "this.score.dungeon++",
            "this.score.necropolis++",
            "this.score.rampart++; this.score.fortress--",
            "this.score.inferno++; this.score.castle--",
            "this.score.fortress++; this.score.rampart--",
            "this.score.stronghold++; this.score.tower++",
        ]
    ],
    [
        "Как победить врага в битве?",
        ["Сокрушить в стремительной атаке", "Терпеиво держать оборону", "Засыпать стрелами и обойти с фоангов", "Залететь в тыл", "Вести огонь из всех доступных средств", "Позволить Смерти забрать их жизни", "Окружить и сжечь"],
        [
            "this.score.stronghold++; this.score.fortress--", 
            "this.score.fortress++; this.score.stronghold--",
            "this.score.castle++; this.score.rampart++",
            "this.score.dungeon++",
            "this.score.tower++",
            "this.score.necropolis++",
            "this.score.inferno++",
        ]
    ],
    [
        "Лучшее скаковое животное?",
        ["Конь из имперской конюшни", "Дикий единорог", "Лошадь горной породы", "Бешеный волк", "Адская гончая", "Пещерный ящер", "Болотный змей", "Оживлённый конский труп"],
        [
            "this.score.castle++", 
            "this.score.rampart++", 
            "this.score.tower++",
            "this.score.stronghold++",
            "this.score.inferno++; this.score.castle--",
            "this.score.dungeon++",
            "this.score.fortress++",
            "this.score.necropolis++; this.score.rampart--",
        ]
    ],
    [
        "Вы отправляетесь в монастырь что бы...",
        ["его сжечь", "преклониться перед алтарём", "поживиться золотом", "посетить библиотеку", "разграбить и разрушить его", "сломать алтарь", "осквернить земли и убить монахов", "насладться красивым видом"],
        [
            "this.score.inferno++; this.score.castle--", 
            "this.score.castle++; this.score.inferno--", 
            "this.score.dungeon++",
            "this.score.tower++; this.score.stronghold--",
            "this.score.stronghold++; this.score.tower--",
            "this.score.fortress++",
            "this.score.necropolis++; this.score.castle--",
            "this.score.rampart++",
        ]
    ],
    [
        "Ваш город штурмуют превосходящие силы врага",
        ["Дать бой!", "Им не посилам одолеть стены крепости", "Завязать бой и сбежать через чёрный ход", "Наша магия уравняет шансы","Они сгорят в адском пламени", "Лучники не подпустят их к воротам", "Их ждёт смерть"],
        [
            "this.score.castle++",
            "this.score.fortress++", 
            "this.score.stronghold++; this.score.castle--", 
            "this.score.tower++; this.score.dungeon++",
            "this.score.inferno++",
            "this.score.rampart++",
            "this.score.necropolis++",
        ]
    ],
    [
        "Династия Айронфист возраждает королевсво Эрафия",
        ["Принять участие", "Пресечь попытку в зародыше", "Помочь с выращиванием лесов и рощ", "Пока не буду их грабить", "Помочь технологиями и знаниями", "Найти способ обогащения за их счёт", "Сжечь их города", "Лиж бы не совались в болота"],
        [
            "this.score.castle++; this.score.necropolis--", 
            "this.score.necropolis++; this.score.castle--", 
            "this.score.rampart++; this.score.inferno--",
            "this.score.stronghold++",
            "this.score.tower++",
            "this.score.dungeon++",
            "this.score.inferno++; this.score.rampart--",
            "this.score.fortress++",
        ]
    ],
    [
        "Эльфы выращивают леса на пустошах",
        ["Помочь ресурсами", "Пресечь попытку в зародыше", "Принять участие", "Разграбить их города, пока никто не видит", "Помочь технологиями и знаниями", "Сжечь все деревья", "Лиж бы не совались в болота", "Лиж бы не совались в пещеры"],
        [
            "this.score.castle++", 
            "this.score.necropolis++; this.score.rampart--", 
            "this.score.rampart++",
            "this.score.stronghold++",
            "this.score.tower++",
            "this.score.inferno++; this.score.rampart--",
            "this.score.fortress++",
            "this.score.dungeon++",
        ]
    ],
    
];
/* Данные для экранов результата для каждой расы */
const results = {
    'castle': {
        name: "За́мок",
        description: "Ваш дом в HoMM3 — Замок, «рыцарский» город, в котором присутствуют юниты, наиболее близкие к реальным средневековым воинам и монахам, вместе с мифическими грифонами и ангелами. У города хорошо оснащённая армия, включая двух стрелков и двух летающих воинов, при быстрой доступности для найма. Этот тип города ассоциируется с королевством Эрафия",
        quote1: "Герои-воины Замка зовутся рыцарями, герои-маги клириками, а родной землёй его существ является трава.",
        quote2: "Юниты замка умеренно сильны как в обороне, так и в атаке, поэтому универсальны в бою. Кроме ангелов, способных воскрешать павших союзников, они не имеют магических способностей, зато обладают рядом тактических преимуществ – сдвоенная атака арбалетчиков и крестоносцев, постоянный отпор грифонов и т.п",
        points: "100"
    },
    'rampart': {
        name: "Опло́т",
        description: "Ваш дом в HoMM3 — Опло́т — город, представляющий собой гармоничное сосуществование цивилизации и дикой природы и населённый лесными созданиями (эльфами, гномами, единорогами, дендроидами), а также зелёными и золотыми драконами. Благодаря особым постройкам, город обладает самой мощной экономикой в игре. Родной землёй города является трава. Оплот ассоциируется с эльфийским королевством АвЛи",
        quote1: "Герои-воины Оплота зовутся рейнджерами, герои-маги друидами.",
        quote2: "Юниты Оплота умеренно сильны как в атаке, так и в защите, многие из них очень мобильны и обладают высокими показателями скорости. Также они обладают способностями к сопротивлению магии противника – сопротивление магии гномов, подавление магии пегасами, антимагическая аура единорогов.",
        points: "100"
    },
    'tower': {
        name: "Ба́шня",
        description: "Ваша вочина — это Ба́шня, магический город с высокой башенной архитектурой, больше других в игре ориентированный на волшебство. Особое строение Башни добавляет больше заклинаний в Гильдию магов. Их родной землёй является снег. Город Башня ассоциируется с государством Бракада",
        quote1: "Герои-воины, называемые алхимиками, по умолчанию обладают книгой заклинаний, а герои-маги имеют большу́ю вероятность развить все магические навыки.",
        quote2: "Среди армий города присутствуют существа, призванные на службу благодаря сильному колдовству (гаргульи и големы), а так же наги, джинны и титаны, заключившие с городом древний союз.",
        points: "100"
    },
    'inferno': {
        name: "Инфе́рно",
        description: "В HoMM3 вам понравится Инфе́рно — город со «злым» мировоззрением, выполненный в классическом представлении Ада и населённый соответствующими тварями — бесами, церберами, демонами, дьяволами. Сам город ориентирован на использование огненной магии. Родной землёй существ Инферно является лава. Инферно ассоциируется с расой демонов Криган, которые обитают в Эофоле, Земле Гигантов",
        quote1: "Герои-воины Инферно называются демонами, герои-маги — еретиками.",
        quote2: "Существа Инферно самые слабые в игре, но при этом одни из самых быстрых. Сильнейшие существа Дьяволы и Ифриты - летают, а единственные срелки (Магоги) могут поражать сразу несколько врагов",
        points: "120"
    },
    'necropolis': {
        name: "Некро́полис",
        description: "В мире HoMM3 Вам подойдёт Некро́полис — город смерти, воины которого состоят из живых мертвецов, привидений и вампиров. Родным типом земли для нежити является грязь. Некрополис ассоциируется с гильдиями некромантов, которые обитают в пустыне Дейя",
        quote1: "Герои Некрополиса (рыцари смерти и некроманты) отличаются от остальных, поскольку у них изначально имеется навык «Некромантия», позволяющий создавать скелетов из погибших в бою существ.",
        quote2: "Существа Некрополиса, называемые нежитью, отличаются необычными свойствами. На них не действует параметр морали; при этом, присутствие нежити в армии героя понижает мораль живых существ. На нежить также не действует ряд заклинаний, например «Благословление» или «Проклятие».",
        points: "120"
    },
    'dungeon': {
        name: "Подземелье",
        description: "Вы достигните успеха в Подземелье. Города фракции располагаются в гигантских пещерах, куда никогда не проникает солнечный свет, что серьёзно влияет как на образ жизни местных жителей, так и на архитектуру их построек. Подземный ландшафт является родным для существ этого города. Город ассоциируется с воинствующими владыками обширных подземелий острова Нигон",
        quote1: "Герои-чернокнижники специализируются на использовании магии, особенно на разрушительных заклинаниях",
        quote2: "Их армии состоят из союзных и порабощённых обитателей подземелий: троглодитов, гарпий, медуз, минотавров, красных и чёрных драконов.",
        points: "140"
    },
    'stronghold': {
        name: "Цитадель",
        description: "В мире HoMM3 ваше присанище - это Цитадель, город варваров больше всего ориентированный на атаку, в то время как магия в нём играет очень слабую роль. У юнитов Цитадели самый высокий общий показатель атаки. Родная земля Цитадели — камни. Цитадель ассоциируется с разрозненными варварскими племенами, населяющими королевство Крюлод",
        quote1: "Герои-варвары поддерживают войска своими навыками нападения и тренировки бойцов. Среди героев немало боевых магов, но эффективных в бою, сильных магов – единицы",
        quote2: "Армию Цитадели составляют гоблиноподобные существа (гоблины, орки, огры) и огромные монстры, такие как птицы-рух и циклопы, хорошо подходящие для штурма вражеских городов.",
        points: "140"
    },
    'fortress': {
        name: "Кре́пость",
        description: "В HoMM3 вы полюбите Кре́пость — город, населённый жителями болот. Крепость не специализируется на магии, но целиком посвящён защите. В Крепости есть ряд строений, улучшающих защиту героев и гарнизона, а ров города — единственный из всех имеет ширину в 2 клетки, что существенно замедляет продвижение вражеских войск при осаде. Город ассоциируется с болотным государством Таталия",
        quote1: "Герои-звероловы усиливают армию оборонными навыками, мастерством приручения животных и ориентированием в диких краях. Ведьмы помогают различными заклинаниями – атакующими и поддерживающими, а также умением первой помощи в бою.",
        quote2: "Юниты крепости сильны в обороне, однако атакующие навыки их сравнительно низки. Магических способностей не имеют, зато обладают рядом природных преимуществ – ослабление атаки врага змиев, смертельный взгляд василисков и горгон, круговая атака гидр.",
        points: "150"
    },
}