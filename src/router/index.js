import VueRouter from 'vue-router';
const Index = () => import('@/components/Index')
const SetIndex = () => import('@/components/set/SetIndex')
const LotteryDraw = () => import('@/components/LotteryDraw')
const SetResponse = () => import('@/components/response/SetResponse')
var router = new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/',
            component:Index,
            children:[
                {
                    path:"setServer",
                    component:SetIndex,
                },
                {   
                    path : "setResponse" , 
                    component : SetResponse 
                },
                {
                    path:"lotteryDraw",
                    component:LotteryDraw
                },
            ]
        }
    ]
})

export default router;