<template>
    <section id="help_main">
        <div class="help_main_container_width">
            <div class="help_main_container">
                <div class="help_main_text">
                    <h4>Как помочь?</h4>
                    <div>{{container.one}}</div>
                    <p>{{container.two}}</p>
                    <p style="font-family: 'Times New Roman'">{{container.three}}</p>
                    <h4 style="margin-bottom: 20px">{{container.four}}</h4>
                    <a href="#" class="button_to">{{container.a}}</a>
                </div>
            </div>
        </div>
        <div class="help_main_container_width" style="background: white">
            <div class="help_person_container">
                <h4>Нам помогают</h4>
                <div class="block_with_person" v-for="arrOne in persons">
                    <div class="img_with_person" :style="{background:'url('+arrOne.image+')',order:arrOne.float_img}"></div>
                    <div class="text_with_person">
                        <h4 style="text-align: center">{{arrOne.name}}</h4>
                        <p>
                            {{arrOne.inf}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>

</style>
<script>
    export default {
        data(){
            return{
                container:helps.main,
                persons:helps.person
            }
        },
    }
</script>