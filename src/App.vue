<template>
  <div id="app" style="overflow-x: hidden;">
      <div class="button_modal" @click="open">
          <span>{{spans}}</span>{{button_text}}
      </div>
      <modal :valueDot="values" @modal="modal($event)"></modal>
      <router-view></router-view>
  </div>
</template>
<script>
  import modal from './modal.vue'
  export default {
     name: 'app',
         data () {
             return {
                 container:false,
                 values:false,
                 button_text:'?',
                 spans:'Как помочь'
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
          }
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
     }
}
</script>

