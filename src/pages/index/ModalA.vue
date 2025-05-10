<script setup lang="ts">
import { ElButton } from 'element-plus'
import { useCurrentModal, useModalRoute, setupModal } from '@vmrh/core'
import { ref } from 'vue'

const { openModal } = useModalRoute()
const { closeThenReturn, close } = useCurrentModal()

defineProps<{
    layout: 'drawer' | 'default'
    message: string
}>()
defineEmits(['message'])

const user = ref<null | { username: string; password: string }>(null)
const onOpenLoginModal = async () => {
    const v = await openModal('Login', {
        data: {
            message: 'Message from data (props)',
        },
    })
    if (v) {
        user.value = v
    }
}
const onCloseConfirm = async () => {
    const yes = await openModal('Confirm', {
        data: {
            title: 'Title from data (props)',
            message:
                'Are you sure you want to confirm this action (from data)?',
        },
    })
    if (yes) {
        close()
    }
}

const { open: openNestedModal } = setupModal('ModalANestedChild', {
    props: {
        onCloseParent: () => {
            close()
        },
    },
})
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
                >Index</RouterLink
            >
            <RouterLink
                :to="{ name: 'ModalAChild1' }"
                class="text-blue-500 hover:text-blue-600 cursor-pointer"
                >Child 1</RouterLink
            >
            <RouterLink
                :to="{ name: 'ModalAChild2' }"
                class="text-blue-500 hover:text-blue-600 cursor-pointer"
                >Child 2</RouterLink
            >
        </nav>

        <section class="mb-4">
            <RouterView />
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
        <div class="mt-4">
            <ModalRouterView>
                <template #default="{ Component }">
                    <Transition name="fade" mode="out-in">
                        <component :is="Component" />
                    </Transition>
                </template>
            </ModalRouterView>
        </div>
        <template #footer>
            <slot name="footer" />
        </template>
    </ModalLayout>
</template>
<style></style>
