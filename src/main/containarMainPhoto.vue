<template>
    <section id="container_main_photo">
        <div class="container_photo" :style="{background:'url('+photo+')'}">
            <div class="container_photo_text">
                <div>
                    <div>{{container[0].amounts}}</div>
                    {{container[0].inf}}
                </div>
                <hr>
                <div>
                    <div>{{container[1].amounts}}</div>
                    {{container[1].inf}}
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data(){
            return{
                photo: 'https://tvaryny.com/sites/default/files/styles/' +
                'thumb-1000px-zaokruglennya/public/images/breed/148121/gallery-148121_3.jpg?itok=zWWrZVjC',
                container:amount
            }
        },
    }
</script>