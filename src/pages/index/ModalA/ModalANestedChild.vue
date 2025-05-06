<script setup lang="ts">
import { ModalLayout, useCurrentModal } from '@vmrh/core'

const { modelValue } = useCurrentModal()
</script>
<template>
    <ModalLayout title="Nested Modal" class="!max-w-400px">
        <p>ModalANestedChild</p>
    </ModalLayout>
</template>
<style></style>
