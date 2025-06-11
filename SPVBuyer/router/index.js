import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '@/components/NotFound.vue'
import Dashboard from '../views/Dashboard.vue'
import projectRoutes from '../../common/Project/buyer'

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
        ...projectRoutes
    ]
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
});

export default router;