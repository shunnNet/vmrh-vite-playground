import { createModalRoute } from '@vmrh/core'
import { defineAsyncComponent } from 'vue'
import { canModalADirect } from './utils'

export const router = createModalRoute({
  layout: {
    default: defineAsyncComponent(() => import('~/modals/layout/default')),
    drawer: defineAsyncComponent(() => import('~/modals/layout/drawer')),
    // default: LayoutDialog,
  },

  routes: [
    {
      name: 'PageSingleModal',
      path: '/',
      component: () => import('~/pages/index.vue'),
      children: [
        {
          name: 'ModalA',
          path: 'modal-a',
          component: () => import('~/pages/index/ModalA.vue'),
          meta: {
            modal: true,
            direct: canModalADirect.get() // true or false
          },
          children: [
            {
              name: 'ModalAChild1',
              path: 'modal-a-child-1',
              component: () => import('~/pages/index/ModalA/ModalAChild1.vue'),
            },
            {
              name: 'ModalAChild2',
              path: 'modal-a-child-2',
              component: () => import('~/pages/index/ModalA/ModalAChild2.vue'),
            },
            {
              name: 'ModalANestedChild',
              path: 'modal-a-nested-child',
              component: () => import('~/pages/index/ModalA/ModalANestedChild.vue'),
              meta: {
                modal: true,
              },
            },
          ]
        },
      ],
    },
    {
      name: 'Prepare',
      path: '/prepare',
      component: () => import('~/pages/prepare.vue'),
      children: [
        {
          name: 'ModalPrepareA',
          path: 'modal-a',
          component: () => import('~/pages/prepare/ModalA.vue'),
          meta: {
            modal: true,
            direct: true,
          },
        },
      ],
    },
    {
      name: 'Cross',
      path: '/cross',
      component: () => import('~/pages/cross.vue'),
      children: [
        {
          name: 'ModalCrossA',
          path: 'modal-a',
          component: () => import('~/pages/cross/ModalA.vue'),
          meta: {
            modal: true,
          },
        },
      ],
    },
  ],
  global: [
    {
      name: 'Login',
      path: 'login',
      component: () => import('~/modals/global/login.vue'),
      meta: {
        modal: true,
        // direct: true,
      },
    },
  ],
  query: [
    {
      name: 'Confirm',
      component: () => import('~/modals/utils/Confirm.vue'),
    },
  ],
})
