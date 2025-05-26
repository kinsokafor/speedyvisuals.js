import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '@/components/NotFound.vue'
import Dashboard from '../views/Dashboard.vue'
import adminRoutes from '@module/Main/Admin/router/shared'
import profileRoutes from '@module/Main/Main/router/shared'
import Settings from '../views/Settings.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound,
            meta: { title: "404 Not Found" }
        },
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard,
            meta: { title: "Dashboard" }
        },
        {
            path: '/configuration',
            name: 'Settings',
            component: Settings,
            meta: { title: "Configuration" }
        },
        ...adminRoutes,
        ...profileRoutes
    ]
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
});

export default router;