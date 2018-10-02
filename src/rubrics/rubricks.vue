<template>
    <div id="rubric" @scroll="close($event)">
        <navbar></navbar>
       <catalog></catalog>
        <help></help>
        <footer_my></footer_my>
    </div>
</template>

<script>
    import Vue from 'vue'
    import navbar from '../navbar.vue'
    import footer from '../footer.vue'
    import catalog from './catalog.vue'
    import help from '../main/help.vue'
    import filter from 'vue2-filters'
    Vue.use(filter)
    export default {
        name: 'app',
        data () {
            return {

            }
        },
        methods:{
            cssPadding:function(){
                let bodyOffsetWidth = document.body.offsetWidth
                let bodyScrollWidth = window.innerWidth
                if(bodyScrollWidth - bodyOffsetWidth < 16){
                    let head_footer = document.querySelector('footer .head_footer')
                    let help_person_container = document.querySelector('#rubric .help_person_container')
                    let containar_one = document.querySelectorAll('#rubric .containar_one')
                    let help_main_container = document.querySelector('.help_main_container')
                    let search = document.querySelector('.search')
                    for(let i = 0; i<containar_one.length; i++){
                        containar_one[i].style.padding = '0 20px 10px 20px'
                    }
                    help_person_container.style.padding = '0 20px 0 20px'
                    search.style.padding = '0 20px 0 10px'
                    head_footer.style.padding = '0'
                    help_main_container.style.padding = '0 20px 30px 20px'
                }
            }
        },
        mounted(){
            sessionStorage.setItem('path',this.$router.history.current.name)
            window.scrollTo(0,0)
            //            css
            this.cssPadding()
        },
        components:{
            navbar:navbar,
            footer_my:footer,
            help:help,
            catalog:catalog
        },
    }
</script>
<style lang="scss">
    .arrows {
        display: flex;
        align-items: center;
    }
    .arrow-prev, .arrow-next {
        width: 50px;
        height: 50px;
        background: rgba(black,0.8);
        border-radius: 50%;
        margin: 0 4px;
        position: relative;
        cursor: pointer;
        transition: 0.3s ease;
        box-shadow: 0 0 0 0 rgba(black, 0.5);

        &:hover {
            box-shadow: 0 0 0 5px rgba(black, 0.5);
        }
        &:focus {
            box-shadow: 0 0 0 5px rgba(black, 0.5);
            outline: none;
        }
        &:active {
            box-shadow: 0 0 0 5px rgba(black, 1);
        }

        &::before, &::after {
            content: '';
            width: 40%;
            height: 4px;
            margin-top: -2px;
            background: #ffffff;
            position: absolute;
            top: 50%;
            border-radius: 4px;
        }
        &::before { transform: rotate(45deg); }
        &::after { transform: rotate(-45deg); }
    }
    .arrow-prev {
        &::before, &::after { left: 32%; }
        &::before { transform-origin: 0 0;  }
        &::after { transform-origin: 0 100%; }
    }
    .arrow-next {
        &::before, &::after { right: 32%; }
        &::before { transform-origin: 100% 100%; }
        &::after { transform-origin: 100% 0; }
    }
    .center{
        width: 40px;
        height: 40px;
        background: rgba(122, 120, 120, 0.2);
        border-radius: 50%;
        margin: 0 4px;
        position: relative;
        cursor: pointer;
        display: flex;
        color:white;
        font-size: 25px;
        justify-content: center;
        align-items: center;
        transition: 0.3s ease;
        box-shadow: 0 0 0 0 rgba(black, 0.5);}
    .activeCenter{
        background: rgba(gray,0.8);
        width: 50px;
        height: 50px;
    }
</style>