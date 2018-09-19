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
                dog:dogArr,
                cat:catsArr,
            }
        },
        created:function(){
            sessionStorage.setItem('path',this.$router.history.current.name)
        },
        components:{
            navbar:navbar,
            footer_my:footer,
            containarMainPhoto:containarMainPhoto,
            catalog:catalog,
            message:message,
            help:help
        },

    }
</script>