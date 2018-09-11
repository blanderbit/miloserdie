<template>
    <div id="list" @resize="hendleResize($event)">
        <div class="m-container">
            <ion-icon name="menu" class="icon pointer" @click="open"></ion-icon>
            <ul class="lists " @click="open">
                <li><a href="#">Главная</a></li>
                <li><a href="#">Рубрики</a></li>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Как помочь</a></li>
                <li><a href="#">Контакты</a></li>
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

            }
        },
        methods:{
            open:function(){
                let target = event.target
                let elem = event.target.nextElementSibling
                let style = getComputedStyle(elem).left
                let position = style.indexOf('p')
                let number = style.substr(0,position)
                if(number < 0){
                    target.style.transform = 'rotate(90deg)'
                    elem.style.left = '0px'
                }
                else{
                    target.style.transform = 'rotate(180deg)'
                    elem.style.left = '-725px'
                }
            },
            hendleResize:function(){
                let elem = document.querySelector('.lists')
                if(window.innerWidth > 720){
                    elem.style.display = 'block'
                    elem.style.borderBottom = 'none'
                }
                else{
                    elem.style.borderBottom = '1px solid lightgray'
                }
            }
        },
        mounted(){
            window.addEventListener('resize',this.hendleResize)
        }
    }
</script>