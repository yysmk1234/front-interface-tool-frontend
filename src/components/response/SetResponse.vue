<template>
    <div class="response-container">
        <div class="button-group">
            <Button type="info" @click="showModal">新增</Button>
        </div>
        <Table :columns="tableData.columns" :data="tableData.data">
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
                <Button type="error" size="small" @click="remove(index)">Delete</Button>
            </template>
        </Table>
        <SetResponseModal :is-show-modal="modalData.isShow"/>
    </div>
</template>

<script>
import { Button , Table } from 'view-design'
import SetResponseModal from './SetResponseModal'
export default {
    name:"SetResponse",
    components:{
        Table ,Button , SetResponseModal
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
                    title: 'response',
                    key: 'response'
                },
                {
                    title: 'delayTime',
                    key: 'delayTime'
                },
                {
                    title: 'Action',
                    slot: 'action',
                    width: 150,
                    align: 'center'
                }
            ],
            data:[
                {
                    method: 'post',
                    url: '/data',
                    response: '{code:0}',
                    delayTime: 3000
                },
                {
                    method: 'post',
                    url: '/data',
                    response: '{code:0}',
                    delayTime: 3000
                },
            ]
            },
            modalData:{
                isShow:false
            }
        }
    },
    methods: {
        showModal () {
            this.modalData.isShow = true;
        },
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `${this.tableData[index].url}`
            })
        },
        remove (index) {
            this.tableData.splice(index, 1);
        }
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