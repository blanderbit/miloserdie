let amount = [
    {
        inf:'В нашей безе зарегистрировано',
        amounts:200
    },
    {
        inf:'Уже в семье',
        amounts:44
    },
]
let messages = {
    about_us:{
        one:'** Статистика ведется начиная с 27.12.2017',
        two:'ВАЖНО - На данный момент приют переполнен, не хватает ....'
    },
    what_do:{
        h4:'Приютить друга',
        p:'Прежде чем покупать собаку или кота - загляните к нам. У нас есть друзья любому по душе - большие, маленькие,' +
        ' охранники, компаньоны, лежебоки и непоседы. Когда мы берем животное из приюта, то спасаем сразу троих: животное,' +
        ' которое приютили, бездомное животное, которое заберут с улицы в приют на его место, и, конечно же, Человека в себе.' +
        ' Не покупай - приюти, ведь настоящая дружба не продается!'
    }
}
let helps = {
    main:{
        one:'Сейчас нам нужна помощь как никогда',
        two:'Приют ежедневно заботится о почти 3 тысячах животных. Самый лучший способ помочь нашим'+
        ' хвостикам - пожертвовать любую сумму на корм, лечение и обеспечение работы приюта.',
        three:'на карту ПБ приюта: 5169 3305 1043 1114, Благотворительный фонд Милосердие',
        four:'Помочь Иначе?',
        a:'Больше информации'
    },
    person:[
        {
            name:'Дже́йсон Сте́йтем',
            image:'data:image/jpeg;base64,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',
            float_img:'1',
            inf:'Джейсон Стейтем родился 26 июля 1967 года в Шайрбруке, графство Дербишир. Он был вторым сыном в ' +
            'семье лаунж-певца и портнихи, ставшей танцовщицей. Позже переехал в Грейт-Ярмут, графство Норфолк, и рос, ' +
            'следуя стопам своих родителей, овладевая искусством уличного театра. Он также играл в футбол в местной средней школе' +
            ' (1978-83), но его настоящей страстью были прыжки в воду. На протяжении 12 лет Стейтем входил в состав британской ' +
            'национальной сборной по прыжкам в воду. В одном из интервью актёр отметил,' +
            ' что спорт был его хобби, а деньги приходилось зарабатывать, торгуя на улице парфюмерией и украшениями',
            float_inf:''
        },
        {
            name:'Том Круз ',
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/TomCruiseDec08MTV_cropped.jpg/230px-TomCruiseDec08MTV_cropped.jpg',
            float_img:'0',
            inf:'Том — третий ребёнок в семье, у него есть три сестры: Ли Энн, Мариан и Касс.[4]. Ли Энн (англ. Lee Anne Devette)[5]' +
            ' сейчас скрывается от популярности брата в Океании. Мать Тома Мэри Ли Пфайффер была актрисой, ' +
            'а отец Томас Круз Мапотер III — инженером. В поисках работы семья часто переезжала, ' +
            'что стало одной из причин трудного детства актёра. Когда Тому было 12 лет, его родители развелись. ' +
            'К 14 годам он сменил 15 школ в США и Канаде. Окончательно семья Тома осела в Глен Ридж, штат Нью-Джерси' +
            ', где будущий актёр закончил среднюю школу. В детстве у него были кривые, неправильно растущие зубы',
            float_inf:''
        },
        // {
        //     name:'',
        //     image:'',
        //     float_img:'',
        //     inf:'',
        //     float_inf:''
        // }
    ],
    all:{
        one:'Сейчас нам нужна помощь как никогда',
        two:'Приют ежедневно заботится о почти 3 тысячах животных. Самый лучший способ помочь нам '+
        'и нашим хвостикам - пожертвовать любую сумму на корм, лечение и обеспечение работы приюта.',
        three:'на карту ПБ приюта: 5169 3305 1043 1114, Благотворительный фонд Милосердие',
        four:'Помочь Иначе?',
        a:'Больше информации'
    }
}

let dataDog = [
    // это блок для одной особи каждый блок в {} скобках и каждый блок записывается после запятой
            {
                //все данніе пишем в середине одинарніх скобочек
                name:'Mary',
                photo:'./assets/1.jpg',/*все фотографии занести в папку assets,
                 и подписать правильно под каждым номером это будет главная фотография*/
                allPhoto:['./assets/Mary/2.jpg','./assets/Mary/3.jpg','./assets/Mary/4.jpg'],/*если у особи больше одной фотки то в середине
                папки assets добовляем новую папку с именем особи  */
                gender:'male',
                type:'female',
                old:'2 years',
                size:'1 m',
                information:'this is very good dog',
                tx:'',/*сюда вписываем еслиесть у особи проблемы со здоровьем */
            },
    // если у особи нету каких то данных то оставляете null
]

let dataCat = [
    {
        name:null,
        photo:null,
        allPhoto:[],
        gender:null,
        type:null,
        old:null,
        size:null,
        information:null,
        tx:null
    },
]