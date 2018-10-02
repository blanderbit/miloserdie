<template>
    <header>
        <div class="head">
            <img src="../src/assets/main/logo.jpg" width="100px">
            <div>
                <div>Приют для животных</div>
                <span style="font-weight: bold;margin-top: 20px;display: inline-block">"Милосердие"</span>
            </div>
            <div class="right_head">
                <div style="display:inline-block;width: 25px;height: 12px"
                      :style="{background:'url('+photo+')',backgroundSize:'cover'}">
                </div> 0637063585
                <ul>
                    <li>
                        <a href="https://vk.com/miloserdie_zp">
                            <ion-icon name="logo-vk"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/GrupaMiloserdie/">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                </ul>
                <div class="clear"></div>
            </div>
        </div>
        <menu_main></menu_main>
    </header>
</template>
<script>
    import menu from './menu.vue'
    export default {
        data(){
            return{
                photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Life_Ukraine_logo.svg/1200px-Life_Ukraine_logo.svg.png'
            }
        },
        metods:{

        },
        components:{
            menu_main:menu
        }
    }
</script>