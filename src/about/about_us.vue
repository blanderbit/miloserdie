<template>
    <div class="main">
        <navbar></navbar>
        <section id="about_us">
            <div class="containet_about">
                <h3>{{inf.h1}}</h3>
                <img :src="img.i1" style="width: 70%;">
                <p>{{inf.p1}}</p>
                <img :src="img.i2" style="width: 40%;">
                <p>{{inf.p2}}</p>
                <img :src="img.i3" style="width: 40%; float: left;">
                <p>{{inf.p3}}</p>
                <p>{{inf.p4}}</p>
                <img :src="img.i4" style="width: 40%; float: right">
                <p>{{inf.p5}}</p>
                <img :src="img.i5" style="width: 40%;">
                <p>{{inf.p6}}</p>
                <img :src="img.i6" style="width: 40%;">
                <p>{{inf.p7}}</p>
            </div>
        </section>
        <footer_my></footer_my>
    </div>
</template>
<style>
</style>
<script>
    console.log(dogArr)
    import navbar from '../navbar.vue'
    import footer from '../footer.vue'
    import help from '../main/help.vue'
    export default {
        name: 'app',
        data () {
            return {
                inf:{
                    h1:'О нас',
                    p1:' Приют для бездомных животных благотворительного фонда «Сириус» был создан в 2000 году в с.' +
                    ' Ясногородка, затем переехал в с. Федоровка, Киевской области. С первых дней приют существует ' +
                    'на средства основателей фонда и любителей животных из Киева, Днепропетровска, Николаева, Черкасс.',
                    p2:'С 2000 года мы стерилизуем и пристраиваем собак и котов, помогая гуманно решать проблему' +
                    ' огромного количества бездомных животных. За годы существования приюта нашли дом более 4500 животных.' +
                    ' Фонд бесплатно вакцинирует, стерилизует и помогает в содержании питомцев малообеспеченных семей.',
                    p3:' Сейчас в приюте фонда «Сириус» проживает около 2400 собак и котов. Все животные привиты, ' +
                    'у них есть крыша над головой, еда и необходимое лечение. Ежедневное питание обеспечивает поставщик' +
                    ' кормов для животных в Украину «Марс», а также производители продуктов питания, продовольственные ' +
                    'магазины и склады Киева. Коммунальные ветеринарные клиники Киева оказывают животным необходимую ' +
                    'медицинскую помощь.',
                    p4:'За период существования приют "Сириус" дважды переезжал из-за продажи арендуемой нами территории.' +
                    ' Каждый раз мы перевозили все больше и больше животных. В 2014 году приют наконец-то обосновался на' +
                    ' собственном участке в с. Федоровка.',
                    p5:'Сейчас на территории приюта построено здание для проживания котов, одно крыло для собак с внутренними'+
                    'и выгульными вольерами и ветеринарное здание. Основная часть собак живет во временных наружных вольерах.'+
                    'При надлежащем спонсировании мы планируем построить вольеры с теплой и выгульной частью для всех'+
                    'наших питомцев и карантинный блок.',
                    p6:'К сожалению, наш приют не может принять всех бездомных животных, поэтому мы призываем всех к'+
                     'ответственному отношению к своим питомцам, своевременной стерилизации собак и кошек, не подлежащих'+
                    'племенному разведению, а также усыновлению животных из приютов, вместо покупки.',
                    p7:'Сейчас нам очень нужна помощь как в содержании наших питомцев и уходе за ними, так' +
                    ' и финансировании дальнейшего строительства приюта.'
                },
                img:{
                    i1:'http://katyaburg.ru/sites/default/files/pictures/prikoly/prikoly_pro_sobak_i_koshek_smeshnye_foto_31_glavnaya.jpg',
                    i2:'http://udivitelno.com/images/2/O_druzhbe_kotov_i_sobak/28.jpg',
                    i3:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdr7NrbJ-PLcETqarFvyHwk9W1S08fxDk4-TsN_t4G8MuLbMU1',
                    i4:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpuTg3Go_qIZgOanNKPoRUtZxFqTSjCR4rlKoNadF93lQsPhy',
                    i5:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGRkYGBgXGRogGBgaGBkfGBgYGBcbIiggGBol' +
                    'GxgXITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGhAQFy0dHR0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0rNzctNy0rK' +
                    '//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xAA/EAABAgQDBgQEBAQGAgMBAAABAhEAAyExQVFhBBJxgZHwBaGx' +
                    'wRMi0eEGMkLxBxRSYhUjcpKywoLiotLyFv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEAAwEBAQEBAAAAAAAAAAERAhIhMUFRYQP/2gAMAwE' +
                    'AAhEDEQA/AOLkIoLWy7a0GQzuwFctfv5wOWaDvyhKIIplhyjzuuIr3RbTDSMvZ5IM+v8ASCeRMXpsyjA5jnhFTw5R+Mo47oHrFiVtplpdmFdMhB9wMaCpyGX' +
                    '3iMuXXnxiaSA/E6RUDMsMzDhzEQKOHJtTaDqIFeLdftA2Na8OmfOJVQSkPbDThCSA9sa0GsTQ4OrZa+djDTB23D6xFVpjZDDKITkBgG0tBFpcls/fLGHVZueW' +
                    'Lt0iKLs6AGp5QVW61h0iujvvkOkSGWPbQMMoh2YQloBBoK6QxbvvjDJVEMNLDgBh07ziaUJyHL7dIHvMe+/3h0Y1OMXTEigZeQhiBkBDqNO+/wBoYecAkgWYQk' +
                    'oGXlEaecTT0gIlAyBhgwu2VhEgS/p30iN7RFRS2X7xApGV9IkEViO7fvpABnSQpJBAbuvF4yZCgklKkhxG833jM8Rkn84woeGBiypYsSWpSLgSGoIzdmn+0XUzqP' +
                    'GrEGQdBSHYZDpAQrvUwQq7b1jOKBNAf7aQ8RnqO8aHzyhRuM1YLgAaD0H3iLUbT7ekWJiAQOX39TFUmrGrD2YxlYprJ7zgPhVZijmpuhA9oLta91KlZAmK3gQLg9' +
                    'Y1PiV1Ms45+WFoIfc4cOsDC6Y4aecT3jRufmYCKkO2WPmcOLxFNPTm7GCYDplwiKk0716xANKmD92OEJQv35RIp76feIqNde/rEUNIAPP2+sNuV5/YwVIGOmWB+0Ld6' +
                    'N35mACAw1z8/WHlJbGJlNenbcBAlAO/H0eIqSxfvugiBHS/19oIz46e31gQL493tygGI775Qkird9tDpF+vWvfGFu2+vWIp1JpTPv3h0DtodYdq9n1hSh1ihl6cvQQ31E' +
                    'EKe/KIlOHekRDzL69v5NEGyiarcIiTFUKZn2IjY8u27xg+8/SK6V5mvdIAotaK8zLCoPfWLCpjF9YCli7RKRi1QopJsW+kaclb490il4vKqlY4H2gmyTaZRv7GWjv9s37w' +
                    '4P19oGg6VgpLkxFVZ77xb10hQ8xNfv8AaFGojRwGo+30itPF7/uIsFdBjYU8/SATFP33rGaRl7eBuKf+kjyp0pFrwOSzHn+0UfFVeZSPONXw4EML27bGNT4l+tPdYBxl9fY' +
                    'QwXwqOeQhInOGpj6/tElivPH0EUMo4m3ftCVy9ch7wiPSCP33wiCuonsY1pCIppo0TXDLJ79+sRTBJcjy9KvrDovo/fpEEh6vr3TSJhqZ5+XfCAHUKZ7h/JvWEsMb58gT9o' +
                    'IsY94wMHDiOLfvEWEAe+cCI4XgwNYiqx7wiASVenflEgcew8LcYu/doZdjXu0FMsW0p1+0SRd9f2aGQeGHpSJKT9ejQBGwgcw2rBXsfTrEVJPfvBCWnzvyr3wgT/TrBlimtveI' +
                    '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' +
                    'RMO9c/lOP+mBIWcz2qFCgJhRzwHoYiuYczjjwhQoCaFmlTY+ogMxRpU3H/aHhQElKNtD/AMRC3y5qb/8A2hQoIZJ+UcR6QwUa1y/7QoUADfL3PahECovfL0hQoBkmFChRUf/Z',
                    i6:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJAsuTGyHXz1SXCfISejnurfBDRtr3uVopV2RshV1-zA7FvL9c'
                }
            }
        },
        methods:{
            photos:function(url){
                let main_url = url.indexOf('https://')
                let main_url2 = url.indexOf('http://')
                return main_url == 0 || main_url2 == 0 ? url: window.location.origin + url.substr(1,url.length)
            }
        },
        created(){
            window.scrollTo(0,0)
            sessionStorage.setItem('path',this.$router.history.current.name)
        },
        components:{
            navbar:navbar,
            footer_my:footer,
        }
    }

</script>