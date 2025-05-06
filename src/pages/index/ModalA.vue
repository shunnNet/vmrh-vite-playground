<script setup lang="ts">
import { ElButton } from 'element-plus'
import {
    useCurrentModal,
    useModalRoute,
    ModalLayout,
    ModalRouterView,
    setupModal,
    ModalPathView,
} from '@vmrh/core'
import { ref } from 'vue'

const { openModal } = useModalRoute()
const { closeThenReturn, close } = useCurrentModal()

defineProps<{
    layout: 'drawer' | 'default'
    message: string
}>()
defineEmits(['message'])

const { open: openNestedModal } = setupModal('ModalANestedChild')

const user = ref<null | { username: string; password: string }>(null)
const onOpenLoginModal = async () => {
    // TODO: URL Not include _modal
    // TODO: data No effect
    const v = await openModal('Login', {
        data: {
            message: 'Message from data (props)',
        },
    })
    if (v) {
        user.value = v
    }
}
// const { open: openQueryModalA } = QueryModalA.use()
const onCloseConfirm = async () => {
    const yes = await openModal('Confirm', {
        // TODO: data No effect
        data: {
            title: 'Title from data (props)',
            message: 'Are you sure you want to confirm this action?',
        },
    })
    if (yes) {
        close()
    }
}
</script>
<template>
    <ModalLayout :layout title="Page Single Modal A">
        <header v-if="$slots.header" class="mb-4">
            <h4 class="text-2xl font-bold">
                <slot name="header" />
            </h4>
        </header>
        <p class="mb-3">
            Message from data (props):
            <span v-if="message" class="text-green" v-text="message" />
        </p>
        <nav class="flex gap-2 mb-4">
            <RouterLink
                :to="{ name: 'ModalA' }"
                class="text-blue-500 hover:text-blue-600 cursor-pointer"
                >Go to /</RouterLink
            >
            <RouterLink
                :to="{ name: 'ModalAChild1' }"
                class="text-blue-500 hover:text-blue-600 cursor-pointer"
                >Go to ModalAChild1</RouterLink
            >
            <RouterLink
                :to="{ name: 'ModalAChild2' }"
                class="text-blue-500 hover:text-blue-600 cursor-pointer"
                >Go to ModalAChild2</RouterLink
            >
        </nav>

        <section class="mb-4">
            <!-- <ModalRouterView /> -->
        </section>

        <div class="mb-3">
            <ElButton
                type="success"
                icon="Message"
                @click="$emit('message', 'Emit from ModalA')"
            >
                Send Message
            </ElButton>
        </div>
        <div class="mb-3">
            <ElButton type="info" icon="close" @click="close"> Close </ElButton>
            <ElButton
                type="warning"
                icon="check"
                @click="closeThenReturn('ModalA return value')"
            >
                Close (with returnValue)
            </ElButton>
            <ElButton type="primary" icon="Message" @click="onCloseConfirm">
                Close (with Confirm)
            </ElButton>
        </div>
        <div>
            <ElButton type="primary" icon="Message" @click="onOpenLoginModal">
                Open Login Modal
            </ElButton>
            <!-- TODO: history wrong -->
            <ElButton type="success" icon="Message" @click="openNestedModal()">
                Open Nested Modal
            </ElButton>
        </div>
        <div
            v-if="user"
            class="mt-4 text-green rounded border border-green-500 p-2"
        >
            <p>Username: {{ user?.username }}</p>
            <p>Password: {{ user?.password }}</p>
        </div>
        <template #footer>
            <slot name="footer" />
        </template>
        <ModalPathView />
    </ModalLayout>
</template>
<style></style>
