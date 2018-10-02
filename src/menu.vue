<template>
    <div id="list" @resize="hendleResize($event)">
        <div class="m-container">
            <ion-icon name="menu" class="icon pointer" @click="open"></ion-icon>
            <ul class="lists ">
                <li><a href="#" @click.prevent="to('main')" :class="{activeLiNav:active('main')}">Главная</a></li>
                <li><a href="#" @click.prevent="to('catalogs')" :class="{activeLiNav:active('catalogs')}">Рубрики</a></li>
                <li><a href="#" @click.prevent="to('about-us')" :class="{activeLiNav:active('about-us')}">О нас</a></li>
                <li><a href="#" @click.prevent="to('helps')" :class="{activeLiNav:active('helps')}">Как помочь</a></li>
            </ul>
            <div class="clear"></div>
            <div class="icon two-icon"></div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                pathTo:localStorage.getItem('path')
            }
        },
        methods:{
            open:function(){
                if(window.innerWidth < 720) {
                    let target = event.target
                    let elem = event.target.nextElementSibling
                    let style = getComputedStyle(elem).left
                    let position = style.indexOf('p')
                    let number = style.substr(0, position)
                    if (number < 0) {
                        target.style.transform = 'rotate(90deg)'
                        elem.style.left = '0px'
                    }
                    else {
                        target.style.transform = 'rotate(180deg)'
                        elem.style.left = '-725px'
                    }
                }
            },
            active:function(value){
                return this.pathTo == value?true:false
            },
            hendleResize:function(){
                let elem = document.querySelector('.lists')
                if(window.innerWidth > 720){
                    elem.style.display = 'flex'
                    elem.style.borderBottom = 'none'
                }
                else{
                    elem.style.borderBottom = '1px solid lightgray'
                }
            },
            to:function(name){
                this.$router.push({name:name})
            },
        },
        mounted(){
            window.addEventListener('resize',this.hendleResize)
        },
    }
</script>