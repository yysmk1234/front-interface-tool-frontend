<template>
    <div>
        <Modal
            v-model="innerisShowModal"
            title="Common Modal dialog box title"
            @on-ok="ok"
            @on-cancel="cancel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>
    </div>
</template>

<script>
import { Modal } from 'view-design'

export default {
    props:['isShowModal'],
    name:"SetResponseModal",
    components:{
        Modal
    },
    data() {
        return {
            innerisShowModal:this.isShowModal
        }
    },
    methods: {
        ok () {
            this.$Message.info('Clicked ok');
        },
        cancel () {
            this.$Message.info('Clicked cancel');
        }
    },
    watch:{
        isShowModal(newValue){
            this.innerisShowModal = newValue;
        }
    }
}
</script>

<style lang="scss">
    
</style>