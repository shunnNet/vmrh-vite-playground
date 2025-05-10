<script setup lang="ts">
import { useCurrentModal } from '@vmrh/core'
import { ElMessage } from 'element-plus'
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HighlightText from '~/components/HighlightText.vue'
const { closeThenReturn } = useCurrentModal()

defineProps<{
    message?: string
}>()

const form = reactive({
    username: '',
    password: '',
})
const login = () => {
    ElMessage.success('Login success !')
    closeThenReturn({
        username: form.username,
        password: form.password,
    })
}

const router = useRouter()
const routes = useRoute()

onMounted(() => {
    console.log(router.getRoutes())
    console.log(routes)
})
</script>
<template>
    <ModalLayout title="Login" class="!max-w-400px">
        <ElForm>
            <ElFormItem label="Username">
                <ElInput
                    v-model="form.username"
                    placeholder="Please input username.."
                />
            </ElFormItem>
            <ElFormItem label="Password">
                <ElInput
                    v-model="form.password"
                    placeholder="Please input password.."
                    type="password"
                />
            </ElFormItem>

            <div class="mb-4">
                <HighlightText :message="message" />
            </div>

            <div class="mt-10 w-full">
                <ElButton
                    class="w-100%"
                    type="primary"
                    icon="CircleCheck"
                    @click="login"
                    >Login</ElButton
                >
            </div>
        </ElForm>
    </ModalLayout>
</template>
<style></style>
