<template>
    <div>
        <div class="header-set">
            设置人数：
            <Input v-model="num_people" placeholder="输入参加游戏的人数" type="number" style="width: 100px" />
            <Button type="primary" style="margin-left:10px;" @click="start">开始</Button>
        </div>
        <div class="game-space">
            <ul class="game-ul">
                <li v-for="(item) in switchArr" :key="item.id">
                    <Button 
                    :class="{'active':item.checked,'lucky':item.lucky}" 
                    type="warning" 
                    style="margin:10px;width:200px;height:100px;font-size:70px;" 
                    @click="showLuckDog(item.id)">{{item.id}}</Button>
                </li>
            </ul>
            <!-- <i-switch /> -->
        </div>
    </div>
</template>

<script>
import { Input , Button  } from 'view-design'

export default {
    name:"LotteryDraw",
    components:{ Input , Button },
    data() {
        return {
            num_people:0,
            switchArr:[],
            luckyDog:0,
        }
    },
    methods: {
        start(){
            this.createGameSpace();
        },
        createGameSpace(){
            this.switchArr = [];
            this.luckyDog = this.getLuckyDogIndex();
            for(let i = 0 ; i < this.num_people ; i++){
                if( this.luckyDog == i){
                    this.switchArr.push({
                        id:i,
                        lucky:1,
                        checked:false,
                        lucky:false
                    });
                }else{
                    this.switchArr.push({
                        id:i,
                        lucky:0,
                        checked:false
                    });
                }
            }
        },
        getLuckyDogIndex(){
            return Math.floor(Math.random()*this.num_people);
        },
        showLuckDog( index ){
            this.switchArr[index].checked = true;
            if(this.luckyDog == index){
                this.switchArr[index].lucky = true;
                this.$Message.error({
                    background: true,
                    content:'恭喜这位玩家'
                });
            }else{
                this.$Message.info('可惜不是你');
            }
        }
    },
}
</script>

<style>
    .header-set, .game-ul{
        margin: 20px 30px;
    }
    .game-ul li{
        list-style: none;
        float: left;
    }
    .game-ul li .active{
        background: #19be6b;
        border: #19be6b;
    }
    .game-ul li .active.lucky{
        background: #ed4014;
        border: #ed4014;
    }
</style>