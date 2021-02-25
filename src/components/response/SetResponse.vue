<template>
    <div class="response-container">
        <div class="button-group">
            <Button type="info" @click="showAddModal">新增</Button>
        </div>
        <Table :columns="tableData.columns" :data="tableData.data">
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
                <Button type="warning" size="small" style="margin-right: 5px" @click="showUpdateModal(index)">编辑</Button>
                <!-- <Button type="error"   size="small" @click="remove(index)">删除</Button> -->
            </template>
        </Table>
        <SetResponseModal 
        :is-show-modal="modalData.isShow" 
        @add-response="handleAddResponse" 
        @show-modal-add="showModel"/>

        <UpdateResponseModal 
        :is-show-modal="modalData.updateShow" 
        :data="modalData.data"
        @update-response="handleUpdateResponse" 
        @show-modal-update="showModelUpdate"/>
    </div>
</template>

<script>
import { Button , Table } from 'view-design'
import SetResponseModal from './SetResponseModal'
import UpdateResponseModal from './UpdateResponseModal'
import {addResponse , getResponse , updateResponseById } from '../../api/setResponse'
import { RESPONSE_CODE_SUCCESS , RESPONSE_CODE_FAIL } from '../../api/responseCode'
export default {
    name:"SetResponse",
    components:{
        Table ,Button , SetResponseModal , UpdateResponseModal
    },
    data() {
        return {
            tableData:{
                columns:[
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'method',
                    key: 'method'
                },
                {
                    title: 'url',
                    key: 'url'
                },
                {
                    title: 'delayTime',
                    key: 'delayTime'
                },
                {
                    title: 'statusCode',
                    key: 'statusCode'
                },
                {
                    title: 'body',
                    key: 'body'
                },
                {
                    title: 'Action',
                    slot: 'action',
                    width: 200,
                    align: 'center'
                }
            ],
            data:[
            ]
            },
            modalData:{
                isShow:false,
                updateShow:false,
                data:{}
            }
        }
    },
    mounted() {
        this.getResponseList();
    },
    methods: {
        showAddModal () {
            this.modalData.isShow = true;
        },
        showUpdateModal ( index ) {
            this.modalData.updateShow = true;
            this.modalData.data = this.tableData.data[index];
        },
        handleAddResponse(data){
            addResponse(data).then(res=>{
                if(res.data.code == RESPONSE_CODE_SUCCESS.INSERT){
                    this.$Message.success('添加成功');
                    this.getResponseList();
                }else {
                    this.$Message.error('添加失败');
                }
            })
        },
        handleUpdateResponse(data){
            updateResponseById(data).then(res=>{
                if(res.data.code == RESPONSE_CODE_SUCCESS.UPDATE){
                    this.$Message.success('修改成功');
                    this.getResponseList();
                }else {
                    this.$Message.error('修改失败');
                }
            })
        },
        getResponseList(){
            var _this = this;
            getResponse().then(res=>{
                console.log(res);
                if(res.data.code = RESPONSE_CODE_SUCCESS.SELECT){
                    _this.tableData.data = res.data.data;
                }
            })
        },
        showModel(data){
            this.modalData.isShow = false;
        },
        showModelUpdate(data){
            this.modalData.updateShow = false;
        },
        show (index) {
            this.$Modal.info({
                title: 'Response Info',
                content: `
                method: ${this.tableData.data[index].method} 
                url: ${this.tableData.data[index].url} 
                delayTime: ${this.tableData.data[index].delayTime} 
                body: ${this.tableData.data[index].body} 
                `
            })
        },
        remove (index) {
            this.tableData.data.splice(index, 1);
        },
        
    }
}
</script>

<style scoped lang="scss">
    .response-container
    {
        padding: 15px;
        .button-group{
            margin-bottom: 10px;
        }
    }
</style>