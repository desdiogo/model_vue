import { RouteRecordRaw } from 'vue-router';
import { path } from './path';

const routes: RouteRecordRaw[] = [
  {
    path: path.index,
    meta: {
      requireAuth: false,
    },
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: path.index,
        component: () => import('@/pages/PageIndex.vue'),
      },
    ],
  },
  {
    path: path.notFound,
    component: () => import('@/pages/PageNotFound.vue'),
  },
];

export default routes;
