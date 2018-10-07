<template>
    <div class="slider">
        <div class="containarS">
            <div class="buttonS">
                <ion-icon @click="minus" name="arrow-round-back"></ion-icon>
                <ion-icon @click="plus" name="arrow-round-forward"></ion-icon>
            </div>
            <div class="containarSlider">
                <div class="slide" v-for="(infOne,index) in inf"
                     :class="{activeSlide:number == index?true:false,activePassive: number == index+ 1?true:false}"
                :style="{backgroundImage:'url('+infOne.background+')'}">
                    <div>{{infOne.text}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .slider{
        margin-bottom: 30px;
        height: 300px;
    }
    .containarS{
        width: 500px;
    }
    .containarSlider{
        position: relative;
    }
    .slide{
        border-radius: 10px;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
        width: 500px;
        height: 300px;
        position: absolute;
        left: -100%;
        transition: all 0.5s;
        opacity: 0;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .buttonS ion-icon{
        color:black;
        padding: 5px;
        background: pink;
    }
    .buttonS ion-icon:hover{
        color:blue;
        background: pink;
        cursor: pointer;
    }
    .slide div{
        width: 90%;
        color: white;
        padding: 10px;
        background: rgba(0, 0, 0, 0.6);
    }
    .activeSlide{
        left: 0;
        opacity: 1;
    }
    .activePassive{
        left: 100%;
    }
    @media screen and (max-width: 550px){
        .containarS{
            width: 100vw;
        }
        .slide{
            width: 100%;
            border-radius: 0;
            box-shadow: none;
        }
        .slide div {
            width: 100%;
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                number:0,
                inf:[
                    {
                        text:'Почему мы должны погомать животным?'
                        +
                        ' Потому мы люди, сильные помогают слабым Это мой друг, который меня понимает и чувствует когда мне ' +
                        'плохо. Который не предаст никогда, и всегда рядом.',
                        background:'data:image/jpeg;base64,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'
                    } ,
                    {
                        text:'Мы в ответе за тех, кого приручили.',
                        background:'data:image/jpeg;base64,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'
                    } ,
                    {
                        text:'Более половины' +
                        ' бездомных животных-результат человеческой безответственности.все они брошены,как надоевшая игрушка.их ' +
                            'сбивают машины,калечат дети(и не только),они замерзают или умирают от истощения.',
                        background:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOEZqY5FAn7RoDV0xX6O-s6SbLz-v1d8jMMrTELCKeLdjWyfF'

                    }
                ]
            }
        },
        methods:{
            plus:function(){
                this.number++
                clearInterval(this.interval)
                this.intervales()
                if(this.number == 3){
                    let it= this
                    setTimeout(function(){
                        it.number = 0
                    },300)
                }
            },
            minus(){
                this.number--
                clearInterval(this.interval)
                this.intervales()
                if(this.number == -1){
                    let it= this
                    it.number = 3
                    setTimeout(function(){
                        it.number = 2
                    },200)
                }
            },
            intervales:function(){
                let it = this
                this.interval =
                    setInterval(function(){
                        it.number++
                        if(it.number == 3){
                            setTimeout(function(){
                                it.number = 0
                            },300)
                        }
                    },8000)
            }
        },
        mounted(){
            this.intervales()
        },
        beforeDestroy(){
            clearInterval(this.interval)
        }
    }
</script>