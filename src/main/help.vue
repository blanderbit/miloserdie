<template>
    <section id="help_main">
        <div class="help_main_container_width">
            <div class="help_main_container">
                <div class="help_main_text">
                    <h4>Как помочь?</h4>
                    <div>{{container.one}}</div>
                    <p>{{container.two}}</p>
                    <p style="font-family: 'Times New Roman'">{{container.three}}</p>
                    <h4 style="margin-bottom: 20px">{{container.four}}</h4>
                    <a href="#" class="button_to">{{container.a}}</a>
                </div>
            </div>
        </div>
        <div class="help_main_container_width" style="background: white">
            <div class="help_person_container">
                <h4>Нам помогают</h4>
                <div class="block_with_person" v-for="arrOne in persons">
                    <div class="img_with_person"
                         :class="{left:arrOne.float_img == 0?true:false,right:arrOne.float_img == 1?true:false}"
                         :style="{background:'url('+photos(arrOne.image)+')',order:arrOne.float_img}">
                    </div>
                    <div class="text_with_person"
                         :class="{left:arrOne.float_img == 0?false:true,right:arrOne.float_img == 1?false:true}">
                        <h4 style="text-align: center">{{arrOne.name}}</h4>
                        <p>
                            {{arrOne.inf}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
    .left{
        left:-200%;
        opacity: 0;
    }.right{
        left:200%;
        opacity: 0;
    }
    .activeLeft{
        left:0;
        opacity: 1;
    }.activeright{
        left:0;
        opacity: 1
    }
    @media screen and (max-width: 650px){
        .left{
            left:0;
            opacity: 1;
        }.right{
             left:0;
             opacity: 1;
         }
    }
</style>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                container:helps.main,
                persons:helps.person
            }
        },

        methods:{
            photos:function(url){
                let main_url = url.indexOf('https://')
                let main_url2 = url.indexOf('http://')
                return main_url == 0 || main_url2 == 0 ? url: window.location.origin + url.substr(2,url.length)
            },
            percent:function(){
                let centerX = document.documentElement.clientWidth / 2
                let centerY = document.documentElement.clientHeight / 1.5
                let elem = document.elementFromPoint(centerX,centerY)
                let nameclass = elem.className
                if(nameclass == 'block_with_person'){
                    let children = elem.children
                    for(let i = 0;i < children.length;i++){
                        if(children[i].classList.contains('left')){
                            children[i].classList.add('activeLeft')
                        } else {
                            children[i].classList.add('activeright')
                        }
                    }
                }

            },
        },
        mounted:function(){
            window.addEventListener('scroll',this.percent)
            window.addEventListener('wheel',this.percent)
        },
    }
</script>