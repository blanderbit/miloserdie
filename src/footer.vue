<template>
    <footer>
        <div class="head_footer">
            <div class="contant_footer">
                <div class="list">
                    <div><a href="#">О нас</a></div>
                    <div><a href="#">История</a></div>
                    <div><a href="#">Наши друзья</a></div>
                </div>
                <div>
                    <span>
                        <span style="color: skyblue">Milos</span><span style="color: yellow">erdie</span>
                    </span>
                </div>
                <div>
                    <a href="#">
                        <ion-icon name="logo-vk"></ion-icon>
                    </a>
                    <a href="#">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </div>
            </div>
            <hr>
            <div class="contant_footer down">
                <div>
                    <span style=""> &#169 </span> Все права защищены
                </div>
                <div>
                    Запорожье 2018
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        data(){
            return{
            }
        },
        metods:{

        },
        mounted(){
            window.addEventListener('scroll',this.opysity)
        }
    }
</script>