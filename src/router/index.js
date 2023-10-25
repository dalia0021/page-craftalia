import { createRouter, createWebHashHistory } from "vue-router";
import ViewHome from "../views/ViewHome.vue";
import ViewProducts from "../views/products/View.vue";
import ViewProcesses from "../views/processes/View.vue";
import ViewFAQ from "../views/faq/View.vue";

const router = createRouter({
    linkActiveClass:"fw-bold active",
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: { name: "home" },
        },
        {
            path: "/inicio",
            name: "home",
            component: ViewHome,
        },
        {
            path: "/productos",
            name: "products",
            component: ViewProducts,
        },
        {
            path: "/procesos",
            name: "processes",
            component: ViewProcesses,
        },
        {
            path: "/preguntas-frecuentes",
            name: "FAQ",
            component: ViewFAQ,
        },
        
    ],
});

export default router;
