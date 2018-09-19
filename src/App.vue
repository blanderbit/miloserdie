<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

  export default {
     name: 'app',
         data () {
             return {
         }
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

