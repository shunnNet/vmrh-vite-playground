<script setup lang="ts">
import { ModalLayout, useCurrentModal } from '@vmrh/core'

const { closeThenReturn } = useCurrentModal()
withDefaults(
    defineProps<{
        title?: string
        message?: string
    }>(),
    {
        title: 'Confirm',
        message: 'Are you sure you want to confirm this action?',
    },
)
</script>
<template>
    <ModalLayout :title class="!max-w-500px">
        <div>
            <p>
                {{ message }}
            </p>
        </div>
        <template #footer>
            <ElButton
                icon="CircleClose"
                type="info"
                @click="closeThenReturn(false)"
            >
                Cancel
            </ElButton>
            <ElButton
                icon="CircleCheck"
                type="primary"
                @click="closeThenReturn(true)"
            >
                Confirm
            </ElButton>
        </template>
    </ModalLayout>
</template>
<style></style>
