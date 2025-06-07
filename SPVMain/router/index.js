import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '@/components/NotFound.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'

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
            path: '/login',
            name: 'Login',
            component: Login,
            meta: { title: "Login" }
        },
        {
            path: '/registration',
            name: 'Registration',
            component: Registration,
            meta: { title: "Create Account" }
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
});

export default router;