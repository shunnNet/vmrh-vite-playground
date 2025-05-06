<script setup lang="ts">
import { canModalADirect } from '~/utils'
import { ModalPathView, setupModal, useModalRoute } from '@vmrh/core'
import { computed, h, ref } from 'vue'
import { ElMessage } from 'element-plus'
import HighlightText from '~/components/HighlightText.vue'

const layout = ref<'drawer' | 'default'>('default')
const message = ref('Message from parent')
const can = ref(canModalADirect.get())

const { openModal } = useModalRoute()
const { open, returnValue } = setupModal('ModalA', {
    props: computed(() => ({
        layout: layout.value,
        message: message.value,
        onMessage: (value: string) => {
            ElMessage.success(`ModalA emit event with value: "${value}"`)
        },
    })),
    slots: {
        footer: () =>
            h(
                'div',
                { class: 'p-8 border border-gray-300 rounded-md' },
                'Inserted from parent',
            ),
    },
})
</script>
<template>
    <div class="grid gap-2 max-w-500px">
        <ElForm label-width="120px">
            <ElFormItem label="Message">
                <ElInput v-model="message" />
            </ElFormItem>
            <ElFormItem label="Layout">
                <ElRadioGroup v-model="layout">
                    <ElRadioButton label="drawer">Drawer</ElRadioButton>
                    <ElRadioButton label="default">Default</ElRadioButton>
                </ElRadioGroup>
            </ElFormItem>
            <ElFormItem label="Allow Direct">
                <ElRadioGroup v-model="can" @change="canModalADirect.set(can)">
                    <ElRadioButton :label="true">true</ElRadioButton>
                    <ElRadioButton :label="false">false</ElRadioButton>
                </ElRadioGroup>
            </ElFormItem>
            <ElFormItem label="ReturnValue">
                <HighlightText :message="returnValue" />
            </ElFormItem>
        </ElForm>
        <ElDivider />
        <div class="grid space-y-2 justify-end">
            <ElButton type="success" icon="Message" @click="open()"
                >Open Modal</ElButton
            >
            <ElButton
                type="success"
                icon="Message"
                @click="openModal('ModalAChild1')"
                >Open Modal Child 1</ElButton
            >
        </div>
    </div>
    <ModalPathView />
</template>
<style></style>
