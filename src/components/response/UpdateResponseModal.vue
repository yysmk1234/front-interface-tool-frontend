<template>
    <div>
        <Modal
            v-model="innerisShowModal"
            title="修改response属性"
            @on-ok="ok"
            @on-cancel="cancel">
            <Form :label-width="80">
                <FormItem label="method">
                    <Select v-model="responseData.method" style="width:100px">
                        <Option value="GET">GET</Option>
                        <Option value="POST">POST</Option>
                        <Option value="PUT">PUT</Option>
                        <Option value="DELETE">DELETE</Option>
                    </Select>
                </FormItem>

                <FormItem label="url">
                    <Input v-model="responseData.url" placeholder="请输入请求路径" style="width:300px" />
                </FormItem>
                
                <FormItem label="dalyTime">
                    <Input type="number" v-model="responseData.delayTime" placeholder="请输入延时时长（ms）" style="width:300px" />
                </FormItem>

                <FormItem label="statusCode">
                    <Input type="number" v-model="responseData.statusCode" placeholder="请输返回码" style="width:300px" />
                </FormItem>

                <FormItem label="body">
                    <Input v-model="responseData.body" type="textarea" :rows="8" placeholder="请输入body返回" style="width:300px" />
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>

<script>
import { Modal , Form ,  FormItem , Input , Select , Option } from 'view-design'

export default {
    props:['isShowModal',"data"],
    name:"UpdateResponseModal",
    components:{
        Modal , Form ,  FormItem , Input , Select , Option
    },
    data() {
        return {
            innerisShowModal:this.isShowModal,
            responseData:{
                id:this.data._id,
                method:this.data.method,
                url:this.data.url,
                delayTime:this.data.delayTime,
                statusCode:this.data.statusCode,
                body:this.data.body
            }
        }
    },
    methods: {
        ok () {
            this.innerisShowModal = false;
            console.log(this.responseData);
            this.$emit("update-response",this.responseData);
            this.$emit("show-modal-update",this.innerisShowModal);
            this.responseData = {
                method:"",
                url:"",
                delayTime:0,
                statusCode:200,
                body:''
            }
        },
        cancel () {
            this.innerisShowModal = false;
            this.$emit("show-modal-update",this.innerisShowModal);
        }
    },
    watch:{
        isShowModal(newValue,oldValue){
            this.innerisShowModal = newValue;
        },
        data:{
            handler(newValue){
                this.responseData = {
                    id:newValue._id,
                    method:newValue.method,
                    url:newValue.url,
                    delayTime:newValue.delayTime,
                    statusCode:newValue.statusCode,
                    body:newValue.body
                }
            },
            deep:true
        }
           
    }
}
</script>

<style lang="scss">
    
</style>