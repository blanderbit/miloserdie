<template>
    <div class="main">
        <navbar></navbar>
        <section id="catalog">
            <div class="containe_catalog_width" >
                <div class="one_of_the_catalog">
                    <div class="containe_catalog_photo" :style="{background:'url('+photos(photo)+')'}">

                    </div>
                    <div class="information">
                        <span>{{ 'Имя - ' + name}} / {{old}}</span>
                        <div>{{'Размер - '+size}}</div>
                        <div>{{'Информация - '+information}}</div>
                        <div>{{'История -'+tx}}</div>
                    </div>
                    <div class="in_button">
                        <a href="#" class="button_to">
                            Как помочь {{name}}?
                        </a>
                    </div>
                </div>

            </div>
            <h4>Фотографии с {{name}}</h4>
            <div class="albums">
                <div class="one_photo" v-for="one in allPhoto" :style="{background:'url('+photos(one)+')'}"></div>
            </div>
        </section>
        <help></help>
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
                index:null,
                name:null,
                old:null,
                photo:null,
                gender:null,
                about_old:null,
                size:null,
                information:null,
                type:null,
                tx:null,
                allPhoto:null
            }
        },
        methods:{
            photos:function(url){
                let main_url = url.indexOf('https://')
                let main_url2 = url.indexOf('http://')
                return main_url == 0 || main_url2 == 0 ? url: window.location.origin + url.substr(1,url.length)
            },
            cssPadding:function(){
                let bodyOffsetWidth = document.body.offsetWidth
                let bodyScrollWidth = window.innerWidth
                if(bodyScrollWidth - bodyOffsetWidth < 16){
                    let head_footer = document.querySelector('footer .head_footer')
                    let help_person_container = document.querySelector('.help_person_container')
                    let help_main_container = document.querySelector('.help_main_container')
                    help_person_container.style.padding = '0 20px 0 20px'
                    head_footer.style.padding = '0'
                    help_main_container.style.padding = '0 20px 30px 20px'
                }
            }
        },
        created(){
            sessionStorage.setItem('path',this.$router.history.current.path)
            window.scrollTo(0,0)
            this.type =  sessionStorage.getItem('type')
            this.name =  sessionStorage.getItem('name')
            this.old =  sessionStorage.getItem('old')
            this.photo =  sessionStorage.getItem('photo')
            this.gender =  sessionStorage.getItem('gender')
            this.about_old =  sessionStorage.getItem('about_old')
            this.size =  sessionStorage.getItem('size')
            this.information =  sessionStorage.getItem('information')
            this.tx =  sessionStorage.getItem('tx')
            this.allPhoto =  sessionStorage.getItem('allPhoto').split(',')
        },
        mounted(){
            //            css
            this.cssPadding()
        },
        components:{
            navbar:navbar,
            footer_my:footer,
            help:help
        }
    }

</script>