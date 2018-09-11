<template>
    <section id="massage">
        <div class="massage_after_main_photo">
            <div class="after_main_photo">
                <div>{{container.about_us.one}}</div>
                <div>{{container.about_us.two}}</div>
            </div>
        </div>
        <div class="massage_before_catalog">
            <div class="before_catalog">
                <h4>{{container.what_do.h4}}</h4>
                <p>{{container.what_do.p}}</p>
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
                container:messages
            }
        },
    }
</script>