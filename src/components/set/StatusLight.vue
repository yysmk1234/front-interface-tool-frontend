<template>
    <div>
        <div :class="[{is_normal:isNormal},{is_closed:isClosed},{is_running:isRunning},light]"></div>
    </div>
</template>

<script>
export default {
    props:['lightStatus'],
    name:"StatusLight",
    data() {
        return {
            innerStatus:this.lightStatus,        // 0 error 1 success 2 warning
            isNormal:true,
            isClosed:false,
            isRunning:false,
            light:'light'
        }
    },
    mounted() {
        this.changeLightColor(this.innerStatus);
    },
    methods: {
        changeLightColor( status ){
            switch(status){
                case 0  :
                case "0" :
                    this.isNormal = false;
                    this.isClosed = true;
                    this.isRunning = false;
                    break;
                case 1  :
                case "1" :
                case 2  :
                case "2" :
                    this.isNormal = true;
                    this.isClosed = false;
                    this.isRunning = false;
                    break;
            }
        }
    },
    watch:{
        lightStatus(newValue,oldValue){
            this.innerStatus = newValue;
            this.changeLightColor(this.innerStatus);
        }
    }
}
</script>

<style scoped>
    .light{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .is_normal{
        background: #19be6b;
    }
    .is_closed{
        background: #ed4014;
    }
    .is_running{
        background: #ff9900;
    }
</style>