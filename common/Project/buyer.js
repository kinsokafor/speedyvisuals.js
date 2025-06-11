import All from "./All.vue";
import Post from "./Post.vue";
import Assign from "./Assign.vue";

const shared = [
    {
        path: '/projects/new',
        name: 'Projects | New',
        component: Post,
        meta: { title: "Projects | New" }
    },
    {
        path: '/projects/assign/:id',
        name: 'Projects | Assign',
        component: Assign,
        meta: { title: "Projects | Assign" }
    }
]

export default [
    ...shared
]

export {shared}