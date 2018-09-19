<template>
    <div class="main">
        <navs></navs>
        <section id="about_us">
            <div class="containet_about">
                <p></p>
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
            }
        },
        created(){
            window.scrollTo(0,0)
            sessionStorage.setItem('path',this.$router.history.current.name)
        },
        components:{
            navs:navbar,
            foots:footer,
        }
    }
</script>
