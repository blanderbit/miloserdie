<template>
    <div class="main" @scroll="close($event)">
        <navbar></navbar>
        <section id="catalog">
            <div class="search">
                <ul class="searchList">
                    <li class="list1" v-for="(list,index) in list" >
                        <span>{{list.name}}</span>
                        <ul class="searchList2">
                        <li class="list2" v-for="(list1,ind) in list.list1" @click="change(index,list1,ind)">{{list1}}</li>
                        </ul>
                    </li>
                </ul>
                <ul class="searchListHidden" >
                    <li class="list1Hidden" v-for="(list,index) in list" @click="open">
                        <span>{{list.name}}</span>
                        <ul class="searchList2Hidden">
                            <li class="list2Hidden" v-for="(list1,ind) in list.list1" @click="change(index,list1,ind)">{{list1}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="containe_catalog_width containe_catalog_width_rubriks" >
                <div v-for="(one,index) in filterBy(filterBy(filterBy(filterBy(all_main,gender),sizes),about_old),types)"
                     class="containar_one" @click="toOne(index,one.type,
                    one.name,
                    one.old,
                    one.photo,
                    one.gender,
                    one.about_old,
                    one.size,
                    one.information,
                    one.tx,
                    one.allPhoto)">
                    <div class="containe_catalog_photo" :style="{background:'url('+photos(one.photo)+')'}">

                    </div>
                    <div>
                        <span>{{one.name}}</span>
                        <span>/</span>
                        <span>{{one.old}}</span>
                        <span>{{one.type}}</span>
                    </div>
                </div>
            </div>
        </section>
        <help></help>
        <footer_my></footer_my>
    </div>
</template>
<style>

</style>
<script>
    import Vue from 'vue'
    import navbar from '../navbar.vue'
    import footer from '../footer.vue'
    import help from '../main/help.vue'
    import filter from 'vue2-filters'
    Vue.use(filter)
    export default {
        name: 'app',
        data () {
            return {
                all_main:all,
                list:[
                    {
                        name:'Все животные',
                        list1:['Все животные','Dogs','Cats']
                    },
                    {
                        name:'Любого размера',
                        list1:['Любого размера','Маленький','Средний','Большой']
                    },
                    {
                        name:'Любого возраста',
                        list1:['Любого возраста','До 1 года','1-5 лет','6 и более']
                    },
                    {
                        name:'Все животные',
                        list1:['Любого пола','Самка','Самец']
                    },
                ],
                types:null,
                sizes:null,
                about_old:null,
                gender:null
            }
        },

        methods:{
            photos:function(url){
                let main_url = url.indexOf('https://')
                let main_url2 = url.indexOf('http://')
                return main_url == 0 || main_url2 == 0 ? url: window.location.origin + url.substr(1,url.length)
            },
            change:function(index,name,index2){
                let target = event.target.parentNode.parentNode.children[0]
                target.innerText = name
                if(index == 3) {
                    if(index2 == 0){
                        this.gender= null
                    }else{
                        this.gender = name
                    }
                }else if(index == 2) {
                    if(index2 == 0){
                        this.about_old= null
                    }else{
                        this.about_old = name
                    }
                } else if(index == 1) {
                    if(index2 == 0){
                        this.sizes= null
                    }else{
                        this.sizes = name
                    }
                } if(index == 0) {
                    console.log(name,index,index2)
                    if(index2 == 0){
                        this.types= null
                    }else{
                        this.types = name
                    }
                    console.log(this.types)
                }
            },
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
            open:function(){

                let searchList2Hidden = document.querySelectorAll('.searchList2Hidden')
                for(let i = 0;i<searchList2Hidden.length;i++){
                    searchList2Hidden[i].style.display = 'none'
                }
                let target = event.currentTarget.children[1]
                target.style.display = 'block'
            },
            close:function(){
                let searchList2Hidden = document.querySelectorAll('.searchList2Hidden')
                for(let i = 0;i<searchList2Hidden.length;i++){
                    searchList2Hidden[i].style.display = 'none'
                }
            }
        },
        created(){
            localStorage.setItem('path',this.$router.history.current.name)
            window.scrollTo(0,0)
        },
        mounted(){
            window.addEventListener('scroll',this.close)
        },
        components:{
            navbar:navbar,
            footer_my:footer,
            help:help
        }
    }

</script>