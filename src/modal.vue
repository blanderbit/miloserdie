<template>
    <div class="modal" :class="{active_modal:container}">
        <div style="position:relative">
            <ion-icon name="close" class="close" @click="close"></ion-icon>
            <h1>Как нам можно помочь?</h1>
            <p>
                Любая ваша помощь уже ценется, помочь нам можно финансово, продуктово, материально
                <a href="#" @click.prevent="toHelp">Подробнее...</a>
            </p>
            <p>

            </p>
        </div>
    </div>
</template>
<style lang="scss">
    .modal{z-index: 1000;
        position: fixed;
        color:white;
        padding: 0;
        width: 0;
        height: 0;
        font-size: 0;
        top:50%;
        left: 50%;
        transition: all 1s;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .modal{
        div{
            transition: all 1s;
            background: rgb(237, 17, 197);
            padding: 0;
            width:0;
            font-size: 0;
        }
    }
    .active_modal{
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.56);
        top:0;
        left: 0;
        margin: 0 0 0 0;
    }
    .active_modal{
        div{
            padding: 20px;
            width:40vw;
            font-size: 14px;
        }
    }
    .close{
        position: absolute;
        right: 1em;
        top:1em;
        cursor: pointer;
    }
    .close:hover{
        color:darkred;
    }

    @media screen and (max-width: 720px){
        .active_modal{
            div{
                font-size: 10px;
                width:70vw;
            }
        }
    }
</style>
<script>
    export default {
        name: 'app',
        props:['valueDot'],
        data () {
            return {
                container:false,
            }
        },
        methods: {
            close:function(){
                let overlow =  document.body
                let margin = document.body.querySelector('.modal')
                overlow.style.overflowY = 'scroll';
                this.container = false;
                this.$emit('modal',false)
            },
            toHelp:function(){
                this.close()
                this.$router.push({name:'helps'})
            },
        },
        watch: {
            valueDot:function(value){
                this.container = value
            }
        }
    }

</script>