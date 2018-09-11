<template>
    <section id="catalog">
        <div class="containe_catalog_width" >
            <div v-for="one in container" class="containar_one" >
                <div class="containe_catalog_photo" :style="{background:'url('+one+')'}">

                </div>
                <div>
                    <span>Алиса</span>
                    <span>/</span>
                    <span>1 год</span>
                </div>
            </div>
        </div>
        <div class="in_button">
            <a href="#" class="button_to">
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

        }
    }
</script>