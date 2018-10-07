<template>
    <div class="main">
        <navs></navs>
        <section id="helps">
            <h3>Просто посмотрите &#8595</h3>
            <slide></slide>
            <div class="helps">
                <h4>Как помочь?</h4>
                <p>{{inf.one}}</p>
                <p>{{inf.two}}</p>
            </div>
            <div class="help_main_container_width helpsflex">
                <h4>Банки</h4>
                <h5>{{inf.banks.organization}}</h5>
                <tabs :banks="inf.banks"></tabs>
            </div>
            <div class="helps">
                <p style="font-family: 'Times New Roman'">{{inf.three}}</p>
                <ul>
                    <li v-for="four in inf.four">{{four}}</li>
                </ul>
            </div>
            <div class="help_main_container_width">
                <div class="helps">
                    <p>{{inf.actual}}</p>
                </div>
            </div>
        </section>
        <foots></foots>
    </div>
</template>
<style>
</style>
<script>
import navbar from '../navbar.vue'
import footer from '../footer.vue'
import tabs from './tabs.vue'
import slide from './transitionSlider.vue'
export default {
    name: 'app',
    data () {
        return {
            inf:helps.all
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
                let helps = document.querySelectorAll('.helps')
                let help_main_container_width = document.querySelector('.help_main_container_width .helps')
                let helpsflex = document.querySelector('.helpsflex h5')
                head_footer.style.padding = '0'
                for(let i = 0; i<helps.length;i++){
                    helps[i].style.padding = '0 20px 0 20px'
                }
                helpsflex.style.padding = '20px'
                help_main_container_width.style.padding = '0'
            }
        }
    },
    created(){
        window.scrollTo(0,0)
        sessionStorage.setItem('path',this.$router.history.current.name)
    },
    mounted(){
        //            css
        this.cssPadding()
    },
    components:{
        navs:navbar,
        foots:footer,
        tabs:tabs,
        slide:slide
    }
}
</script>
