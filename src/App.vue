<script setup lang="ts">
import { ModalGlobalView, ModalQueryView, useModalRoute } from '@vmrh/core'
// import { ElButton } from 'element-plus'

const navs = [
    {
        name: 'PageSingleModal',
        title: 'Single Modal',
        path: '/',
    },
    {
        name: 'Cross',
        title: 'Cross Page',
    },
    // {
    //     name: 'PageNestedModal',
    //     title: 'Nested',
    // },
    {
        name: 'Prepare',
        title: 'API Required',
    },
]

const { openModal } = useModalRoute()
const onOpenGlobalModal = () => {
    openModal('Login', {
        // Hash should be ignore
        // hash: '#hash',
    }).then(v => {
        console.log('ModalHashA return', v)
    })
}
</script>
<template>
    <div>
        <nav
            class="flex flex-wrap items-center justify-between gap-2 p-4 border-b grid-auto-rows-[max-content]"
        >
            <div>
                <RouterLink
                    v-for="navItem in navs"
                    :key="navItem.name"
                    class="p-2 hover:bg-gray-800 hover:text-white rounded-xl text-center"
                    :to="
                        navItem.name
                            ? { name: navItem.name }
                            : { path: navItem.path }
                    "
                >
                    {{ navItem.title }}
                </RouterLink>
            </div>
            <div>
                <ElButton round plain icon="User" @click="onOpenGlobalModal">
                    Login
                </ElButton>
            </div>
            <!-- <ElButton type="primary" @click="onOpenGlobalModal">
                OpenGlobalModal
            </ElButton> -->
            <!-- <ElButton type="primary" @click="onOpenQueryModal">
                OpenQueryModal
            </ElButton> -->
        </nav>
        <div class="p-4">
            <RouterView />
        </div>
    </div>
    <ModalQueryView />
    <ModalGlobalView />
</template>
<style>
:root {
    color-scheme: dark;
}
body {
    color: #a3a3a3;
}
</style>
