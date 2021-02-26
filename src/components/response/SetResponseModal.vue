<template>
    <div>
        <Modal
            v-model="innerisShowModal"
            title="response属性"
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
                
                <FormItem label="delayTime">
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
import { Modal , Form ,  FormItem , Input , Select , Option} from 'view-design'

export default {
    props:['isShowModal'],
    name:"SetResponseModal",
    components:{
        Modal , Form ,  FormItem , Input , Select , Option
    },
    data() {
        return {
            innerisShowModal:this.isShowModal,
            responseData:{
                method:"",
                url:"",
                delayTime:0,
                statusCode:200,
                body:''
            }
        }
    },
    methods: {
        ok () {
            this.innerisShowModal = false;
            this.$emit("add-response",this.responseData);
            this.$emit("show-modal-add",this.innerisShowModal);
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
            this.$emit("show-modal",this.innerisShowModal);
        }
    },
    watch:{
        isShowModal(newValue,oldValue){
            this.innerisShowModal = newValue;
        }
    }
}
</script>

<style lang="scss">
    
</style>