<script setup lang="ts">
import PageSection from '~/components/PageSection.vue'
import PageTitle from '~/components/PageTitle.vue'
import { useModalRoute, ModalPathView } from '@vmrh/core'

const { openModal } = useModalRoute()
</script>
<template>
    <PageTitle
        title="Cross Page OpenModal"
        description="open modal from/in another page"
    />
    <PageSection
        title="CrossPageA"
        description="open nested modal in another page, then check if the history is correct."
    >
        <ElButton type="success" @click="openModal('ModalCrossA')">
            Open ModalCrossA
        </ElButton>
    </PageSection>
    <ModalPathView />
</template>
<style></style>
