<template>
    <div id="rubric" @scroll="close($event)">
        <section id="catalog">
            <div class="search">
                <ul class="searchList">
                    <li class="list1" v-for="(list,index) in list" >
                        <span>{{list.name}}</span>
                        <ul class="searchList2">
                            <li class="list2" v-for="(list1,ind) in list.list1" @click="change(index,list1,ind)">
                                {{list1}}
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="searchListHidden" >
                    <li class="list1Hidden" v-for="(list,index) in list" @click="open">
                        <span>{{list.name}}</span>
                        <ul class="searchList2Hidden">
                            <li class="list2Hidden" v-for="(list1,ind) in list.list1" @click="change(index,list1,ind)">
                                {{list1}}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="containe_catalog_width containe_catalog_width_rubriks" >
                <div v-for="(one,index) in filterBy(filterBy(filterBy(filterBy(all_main,gender),sizes),about_old),types)"
                     class="containar_one" :id="index" @click="toOne(index,one.type,
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
        <section v-if="this.page = null?false:true">
            <div class="arrows">
                <div class="arrow-prev" tabindex="1" role="button" @click="minus()"></div>
                <div v-for="indexp in pageActive" class="center" :class="{activeCenter:indexp == number?true:false}">
                    {{indexp}}
                </div>
                <div class="arrow-next" tabindex="2" role="button" @click="plus()"></div>
            </div>
        </section>
    </div>
</template>

<script>
    import Vue from 'vue'
    import help from '../main/help.vue'
    import filter from 'vue2-filters'
    Vue.use(filter)
    export default {
        name: 'app',
        data () {
            return {
                all:all,
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
                all_main:null,
                types:null,
                sizes:null,
                about_old:null,
                gender:null,
                page:null,
                pageActive:null,
                number:1,
                step:20,
                pages:null,
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
                    if(index2 == 0){
                        this.types= null
                    }else{
                        this.types = name
                    }
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
            },
            minus:function( simvol ){
                window.scrollTo(0,0)
                this.all_main = null
                if(this.number == 1){
                    this.all_main = this.all.slice((this.number - 1),this.step)
                    return this.number = 1
                }
                this.number--
                if(this.number == 1){
                    this.all_main = this.all.slice((this.number - 1),this.step)
                    return this.number = 1
                }
                this.pageActive = this.pages.slice(this.number - 2,this.number + 1)
                this.all_main = this.all.slice((this.number - 1) * this.step,this.number * this.step)
            },
            plus:function(){
                window.scrollTo(0,0)
                this.all_main = null
                if(this.number == this.pages.length){
                    this.number = this.pages.length
                    this.pageActive = this.pages.slice((this.number - 3),this.number + 1)
                    this.all_main = this.all.slice((this.number - 1) * this.step,this.all.length)
                    return
                }
                this.number++
                if(this.number == this.pages.length){
                    this.number = this.pages.length
                    this.pageActive = this.pages.slice((this.number - 3),this.number + 1)
                    this.all_main = this.all.slice((this.number - 1) * this.step,this.all.length)
                    return
                }
                this.pageActive = this.pages.slice(this.number - 2,this.number + 1)
                this.all_main = this.all.slice((this.number - 1) * this.step,this.number * this.step)
            },
        },
        created(){
//            page
            this.page = []
            let page = Math.ceil(this.all.length / this.step)
            for(let i = 1;i <= page;i++){
                this.page.push(i)
            }
            if(this.page.length >= 3){
                this.all_main = this.all.slice(this.number - 1,this.step)
                this.pageActive = this.page.slice(this.number - 1,this.number + 2)
            } else {
                this.page = []
                this.all_main = this.all
            }
            this.pages = this.page
        },
        mounted(){
            window.addEventListener('scroll',this.close)
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