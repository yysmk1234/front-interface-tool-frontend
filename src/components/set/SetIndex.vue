<template>
     <Row style="background:#eee;padding:20px">
        <div style="margin: 0 0 20px;">
            <h2>系统设置</h2>
        </div>
        <Col span="11">
            <Card :bordered="false">
                <p slot="title" style="font-weight:600;">front-server</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card shadow>
                <p slot="title" style="font-weight:600;">interface-server</p>
                <Form label-position="left" :label-width="100">
                    <FormItem label="服务状态">
                        <StatusLight :light-status="interfaceServer.status" style="width:10px;height:10px;margin-top: 9px;"/>
                    </FormItem>
                    <FormItem label="端口">
                    </FormItem>
                    <FormItem label="操作">
                        <Button type="success" @click="startServer" style="margin-right:10px;">开启</Button>
                        <Button type="error" @click="shutdownServer">关闭</Button>
                    </FormItem>
                </Form>
            </Card>
        </Col>
    </Row>
</template>

<script>

import {Row , Col , Card , Form , FormItem , Switch , Button} from 'view-design'
import StatusLight from '../set/StatusLight';

export default {
    name:"SetIndex",
    components:{Row , Col , Card , Form , FormItem , Switch , Button , StatusLight},
    data() {
        return {
            interfaceServer:{
                status:0
            }
        }
    },
    methods: {
        startServer(){
            var _this = this;
            this.axios.get("http://localhost:9000/manager/restartInterfaceServer").then((res)=>{
                console.log("startRes",res);
                _this.interfaceServer.status = res.data.data.serverStatus;
            }).catch((err)=>{
                console.log(err);
            })
        },
        shutdownServer(){
            var _this = this;
            this.axios.get("http://localhost:9000/manager/shutDownInterfaceServer").then((res)=>{
                console.log("shutdownRes",res);
                _this.interfaceServer.status = res.data.data.serverStatus;
            }).catch((err)=>{
                console.log(err);
            })
        }
    },
}
</script>

<style scoped>

</style>