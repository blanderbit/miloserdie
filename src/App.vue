<template>
  <div id="app" style="overflow-x: hidden;">
      <div class="side">
          <ion-icon @click="scrollTo('+')" v-if="down" name="arrow-down"></ion-icon>
          <ion-icon @click="scrollTo('-')" v-if="up" name="arrow-up"></ion-icon>
      </div>
      <div class="button_modal" @click="open">
          <span>{{spans}}</span>{{button_text}}
      </div>
      <modal :valueDot="values" @modal="modal($event)"></modal>
      <router-view></router-view>
  </div>
</template>
<style>
    .side{
        position: fixed;
        right: 0;
        top:45%;
        display: flex;
        z-index: 1000;
        flex-direction: column-reverse;
    }
    .side ion-icon {
        padding: 10px;
        border: 1px solid white;
        color: black;
        border-radius: 50%;
        cursor: pointer;
        background: pink;
        opacity: 0.6;
    }
    .side ion-icon:hover{
        border: 1px solid black;
        color: deeppink;
        background: white;
        /*opacity: 1;*/
    }
</style>
<script>
  import modal from './modal.vue'
  export default {
     name: 'app',
         data () {
             return {
                 container:false,
                 values:false,
                 button_text:'?',
                 spans:'Как помочь',
                 step: 100,
                 up: false,
                 down:true,
                 downYpage:null
         }
     },
      components:{
          modal:modal
      },
      methods:{
          to:function(name,name2){
              if(name2 != undefined) {
                  this.$router.push({name:name2[0],params:{id:name2[2],name:name2[1]}})
              }else{
                  if(name == ''){
                      this.$router.push({name: 'main'})
                  }else{
                      this.$router.push({name: name})
                  }
              }
          },
          open:function(){
              let overlow =  document.body
              overlow.style.overflowY = 'hidden';
              this.values = true
              this.container= true
          },
          modal:function(value){
              this.values = value
              this.container= value
          },
          scrollTo:function (simvol) {
              let simvols = simvol
              let scroll = document.body.scrollHeight
              let pix = window.pageYOffset;
              let steps = this.step;
              requestAnimationFrame(to);
              function to(){
                  if(simvols == '+'){
                      pix = pix + steps;
                      window.scrollTo(0,pix);
                      if(pix < scroll){
                          requestAnimationFrame(to);
                      }
                  } else {
                      pix = pix - steps;
                      window.scrollTo(0,pix);
                      if(pix > 0){
                          requestAnimationFrame(to);
                      }
                  }
              }
          },
          scroller:function(){
              let scroll = window.pageYOffset
              scroll > 0?this.up = true:this.up = false
              scroll > this.downYpage? this.down = false:this.down = true
          }
      },
      mounted(){
          let down = document.querySelector('footer').getBoundingClientRect().bottom
          this.downYpage = down -  window.innerHeight
          window.scrollTo(0,0)
          window.addEventListener('wheel',this.scroller)
          window.addEventListener('scroll',this.scroller)
      },
      watch:{
          '$route'(to,from){
              localStorage.setItem('path',to.name)
          }
      },
      created:function(){
//         let location = window.location.pathname.split('/')
          if(window.location.pathname == '/'){
              this.$router.push({name: 'main'})
          }
          let ifs =  sessionStorage.getItem('path')
          if(ifs != null) {
              let location =  sessionStorage.getItem('path').split('/')
              if (location.length == 1) {
                  this.to(location)
              } else if (location.length == 4) {
                  let new_locations = location.slice(1, location.length)
                  this.to(location[1], new_locations)
              } else {
                  this.to('main')
              }
          }else{
              this.$router.push({name: 'main'})
          }
     },
}
</script>

