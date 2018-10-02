<template>
    <section id="catalog">
        <div class="containe_catalog_width" >
            <div v-for="(one,index) in container" class="containar_one" @click="toOne(index,one.type,
            one.name,
            one.old,
            one.photo,
            one.gender,
            one.about_old,
            one.size,
            one.information,
            one.tx,
            one.allPhoto)">
                <div class="containe_catalog_photo" :style="{background:'url('+one.photo+')'}">
                </div>
                <div>
                    <span>{{one.name}}</span>
                    <span>/</span>
                    <span>{{one.old}}</span>
                </div>
            </div>
        </div>
        <div class="in_button">
            <a href="#" class="button_to" @click.prevent="toRubriks">
                <slot></slot>
            </a>
        </div>
    </section>
</template>

<script>
    export default {
        props:['container'],
        data(){
            return{
            }
        },
        methods:{
            toOne:function(id,type,name,old,photo,gender,about_old,size,information,tx,allPhoto){
                sessionStorage.setItem('type',type)
                sessionStorage.setItem('name',name)
                sessionStorage.setItem('old',old)
                sessionStorage.setItem('photo',photo)
                sessionStorage.setItem('gender',gender)
                sessionStorage.setItem('about_old',about_old)
                sessionStorage.setItem('size',size)
                sessionStorage.setItem('information',information)
                sessionStorage.setItem('tx',tx)
                sessionStorage.setItem('allPhoto',allPhoto)
                this.$router.push({name:'catalog',params:{id:id,name:type}})
            },
            toRubriks:function(){
                this.$router.push({name:'catalog'})
            }
        }
    }
</script>