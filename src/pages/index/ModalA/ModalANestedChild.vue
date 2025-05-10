<script setup lang="ts">
import { ModalLayout } from '@vmrh/core'

const emit = defineEmits(['closeParent'])
</script>
<template>
    <ModalLayout title="Nested Modal" class="!max-w-400px">
        <p>ModalANestedChild</p>
        <ElButton @click="emit('closeParent')">Close Parent</ElButton>
    </ModalLayout>
</template>
<style></style>
