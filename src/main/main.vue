<template>
    <div class="main">
        <navbar></navbar>
        <containarMainPhoto ></containarMainPhoto>
        <message></message>
        <catalog :container="dog">Больше собачек</catalog>
        <catalog :container="cat">Больше котиков</catalog>
        <help></help>
        <footer_my></footer_my>
    </div>
</template>
<script>
    import navbar from '../navbar.vue'
    import footer from '../footer.vue'
    import containarMainPhoto from './containarMainPhoto.vue'
    import catalog from './catalog.vue'
    import message from './massage.vue'
    import help from './help.vue'

    export default {
        name: 'app',
        data () {
            return {
                dog:dogArr.splice(0,4),
                cat:catsArr,
                standart:'',
                left:null,
                top:null,
                bottom:null,
                right:null,
            }
        },
        methods:{
            scrolls:function(){
//                паралакс
//                let elem = document.querySelector('.container_photo_text')
//                if(window.pageYOffset > 300){
//                    elem.style.top = -(window.pageYOffset * 0.6) + 'px'
//                }
//                else{
//                    elem.style.top = this.standart + 'px'
//                }
            },
            cssPadding:function(){
                let bodyOffsetWidth = document.body.offsetWidth
                let bodyScrollWidth = window.innerWidth
                if(bodyScrollWidth -bodyOffsetWidth < 16){
                    let head_footer = document.querySelector('.head_footer')
                    let help_person_container = document.querySelector('.help_person_container')
                    let help_main_container = document.querySelector('.help_main_container')
                    let containar_one = document.querySelectorAll('.containar_one')
                    let before_catalog = document.querySelector('.before_catalog')
                    let container_photo = document.querySelector('.container_photo')
                    let after_main_photo = document.querySelector('.after_main_photo')

                    for(let i = 0; i<containar_one.length; i++){
                        containar_one[i].style.padding = '0 20px 10px 20px'
                    }
                    help_person_container.style.padding = '0 20px 0 20px'
                    head_footer.style.padding = '0'
                    before_catalog.style.padding = '0 20px 0 20px'
                    after_main_photo.style.padding = '30px 20px 0 20px'
                    container_photo.style.padding = '20px 20px 0 20px'
                    help_main_container.style.padding = '0 20px 30px 20px'
                }
            }
        },
        mounted(){
            let elem = document.querySelector('.container_photo_text')
            let styles = getComputedStyle(elem).top.indexOf('p')
            this.standart = getComputedStyle(elem).top.substr(0,styles)
            sessionStorage.setItem('path',this.$router.history.current.name)
//            css
            this.cssPadding()
            window.scrollTo(0,0)
        },
        components:{
            navbar:navbar,
            footer_my:footer,
            containarMainPhoto:containarMainPhoto,
            catalog:catalog,
            message:message,
            help:help,
        },
        beforeDestroy(){
//            window.removeEventListener('scroll',this.scrolls)
//            window.removeEventListener('wheel',this.scrolls)
        }
    }
</script>