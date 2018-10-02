<template>
    <div id="tabs" >
        <ul class="tabs">
            <li :class="{activeTabs:number==1?true:false}" @click="changeNumber(1)">
                {{banks.mono.name}}
            </li>
            <li :class="{activeTabs:number==2?true:false}" @click="changeNumber(2)">
                {{banks.privat.name}}
            </li>
            <li :class="{activeTabs:number==3?true:false}" @click="changeNumber(3)">
                {{banks.oshad.name}}
            </li>
        </ul>
        <div class="infTabs">
            <div v-if="number==1?true:false">
                <h3>{{banks.mono.name}}</h3>
                <p>{{banks.mono.number}}</p>
            </div>
            <div v-if="number==2?true:false">
                <h3>{{banks.privat.name}}</h3>
                <p>{{banks.privat.number}}</p>
            </div>
            <div class="oshad" v-if="number==3?true:false">
                <h3>{{banks.oshad.name}}</h3>
                <p>{{banks.oshad.number}}</p>
                <div>{{banks.oshad.nom}}</div>
                <div>{{banks.oshad.kode}}</div>
                <div>{{banks.oshad.mfo}}</div>
                <div>{{banks.oshad.banks}}</div>
            </div>
        </div>
    </div>
</template>
<style>
    .oshad {
        padding: 10px;
    }
</style>
<script>
    export default {
        props:['banks'],
        data(){
            return{
                number:1
            }
        },
        methods:{
            changeNumber:function(number){
                this.number = number
            }
        }
    }
</script>