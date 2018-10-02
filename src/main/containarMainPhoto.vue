<template>
    <section id="container_main_photo">
        <div class="container_photo" :style="{background:'url('+photo[index]+')'}">
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
<style>
    .container_photo_text{
        transform-style: preserve-3d;
        transition: all 2s;
    }
</style>
<script>
    export default {
        data(){
            return{
                photo: ['https://tvaryny.com/sites/default/files/styles/' +
                'thumb-1000px-zaokruglennya/public/images/breed/148121/gallery-148121_3.jpg?itok=zWWrZVjC',
                'https://the-na.me/wp-content/uploads/2017/02/IMG_2462.jpg',
                'https://www.herebird.com/wp-content/uploads/cat-parrot-cage-840x420.jpg'],
                container:amount,
                index:0,
                mainInterval:null
            }
        },
        created:function(){
            let its = this
            this.mainInterval = setInterval(function () {
                let elem = document.querySelector('.container_photo')
                elem.style.backgroundPositionX = '-2000%'
                elem.style.opacity = '0'
                setTimeout(function () {elem.style.opacity = '1'
                    its.index++
                    if(its.index == its.photo.length ){
                        its.index = 0
                    }
                    elem.style.backgroundPositionX = '0'

                },1000)
            },20000)
        },
        beforeDestroy(){
            clearInterval(this.mainInterval)

        }
    }
</script>