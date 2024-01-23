import { createRouter, createWebHashHistory } from "vue-router";
import ViewHome from "@src/views/ViewHome.vue";
import ViewProducts from "@src/views/products/View.vue";
import ViewProductsDetail from "@src/views/products/ViewDetail.vue";
import ViewProductsCustom from "@src/views/products-custom/View.vue";
import ViewProductsCustomDetail from "@src/views/products-custom/ViewDetail.vue";
import ViewProcesses from "@src/views/processes/View.vue";
import ViewFAQ from "@src/views/faq/View.vue";

const router = createRouter({
    linkActiveClass: "fw-bold text-lila",
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
            path: "/productos/:id",
            name: "productsDetail",
            props: true, 
            component: ViewProductsDetail,
          },
          {
            path: "/productos-custom",
            name: "productsCustom",
            component: ViewProductsCustom,
        },
        {
            path: "/productos-custom/:id",
            name: "productsCustomDetail",
            props: true, 
            component: ViewProductsCustomDetail,
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
