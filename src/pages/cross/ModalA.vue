<script setup lang="ts">
import { ElButton } from 'element-plus'
import HighlightText from '~/components/HighlightText.vue'
import { useModalRoute, ModalLayout } from '@vmrh/core'

defineProps({
    message: {
        type: String,
        default: '',
    },
})
const { openModal } = useModalRoute()
</script>
<template>
    <ModalLayout title="Cross Page Modal A">
        <p v-if="message" class="mb-2">
            Message:
            <HighlightText :message="message" />
        </p>
        <ElButton type="primary" @click="openModal('ModalANestedChild')">
            Open Modal A Nested Child in Page Index
        </ElButton>
    </ModalLayout>
</template>
<style></style>
