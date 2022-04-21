
import { createWebHistory, createRouter } from 'vue-router'

import Cartillas from '@/views/Cartillas.vue'
import Eventos from '@/views/Eventos.vue'

const routes = [
    {
        path:'/Cartillas',
        name: 'Cartillas',
        component: Cartillas
    },
    {
        path: '/EventosDelDia',
        name: '/EventosDelDia',
        component: Eventos,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;