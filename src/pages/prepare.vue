<script setup lang="ts">
import { setupModal, ModalPathView } from '@vmrh/core'
import PageSection from '~/components/PageSection.vue'
import { ElButton, ElLoading } from 'element-plus'
import { computed, onMounted, ref } from 'vue'
import PageTitle from '~/components/PageTitle.vue'

const userData = ref({
    name: '',
    age: 0,
})

const fetchUserData = async () => {
    const loading = ElLoading.service({
        fullscreen: true,
        text: 'Fetch user...',
    })
    await new Promise(resolve => setTimeout(resolve, 2000))
    userData.value = {
        name: 'Jane Doe',
        age: 25,
    }
    loading.close()
}

const modalProps = computed(() => {
    return {
        ...userData.value,
        onUpdate: (payload: any) => {
            userData.value.name = payload.name
            userData.value.age = payload.age
        },
    }
})
const { open, unlock } = setupModal('ModalPrepareA', {
    manual: true,
    props: modalProps,
})

onMounted(async () => {
    await fetchUserData()
    unlock()
})
</script>
<template>
    <PageTitle
        title="Prepare then open"
        description="A situation that API data is required before opening the modal."
    />
    <PageSection title="Modal" description="test useModal">
        <div class="max-w-500px">
            <ElDescriptions
                class="my-4"
                title="User Info"
                direction="vertical"
                :column="4"
                border
            >
                <ElDescriptionsItem label="Username">
                    {{ userData.name }}
                </ElDescriptionsItem>
                <ElDescriptionsItem label="Age">
                    {{ userData.age }}
                </ElDescriptionsItem>
            </ElDescriptions>
        </div>
        <div class="grid gap-3">
            <div>
                <ElButton type="primary" icon="check" @click="open()">
                    Open Modal
                </ElButton>
            </div>
        </div>
    </PageSection>
    <ModalPathView />
</template>
<style></style>
