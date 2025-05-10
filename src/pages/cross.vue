<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'
import { useModalRoute } from '@vmrh/core'

const { openModal } = useModalRoute()
</script>
<template>
    <PageTitle
        title="Cross Page OpenModal"
        description="open modal in another page"
    />

    <p class="description my-2">
        Click the following button to open modal. <br />

        Then, click button inside it to open modal in another page, and check
        the history. <br />

        After open modal in another page, try <b>"Prev Page"</b> or
        <b>close modal by button </b>.
    </p>

    <ElDivider />

    <ElButton type="success" @click="openModal('ModalCrossA')">
        Open ModalCrossA
    </ElButton>

    <ModalRouterView />
</template>
<style></style>
