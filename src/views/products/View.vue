<script setup>
import TheNavbar from "@components/TheNavbar.vue";
import BaseTitlePage from "@components/BaseTitlePage.vue";
import BaseProduct from "@components/BaseProduct.vue";
import BaseSection from "@components/BaseSection.vue";
import TheFooter from "@components/TheFooter.vue";
import { useApi } from "@composables/useApi";
import { reactive, ref } from "vue";

const appApi = reactive(useApi());

const listProductos = ref([]);

const initComponents = () => {
    scrollToTop();
    fetchListProducts();
};

const fetchListProducts = () => {
    listProductos.value = appApi.getProductsList();
};

const scrollToTop = () => {
    window.scrollTo(0, 0);
};

initComponents();
</script>

<template>
    <TheNavbar />
    <BaseTitlePage
        title="Explora Nuestra Colección"
        subtitle="Papelería y Accesorios Personalizados para Capturar Tu Estilo Único"
    />
    <BaseSection bgColor="bg-white" frames>
        <div class="row gy-5 gx-xl-4 gx-lg-4 gx-md-4 justify-content-center">
            <div
                v-for="(item, idx) in listProductos"
                :key="idx"
                class="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-10 text-center"
            >
                <BaseProduct :product="item" />
            </div>
        </div>
    </BaseSection>
    <TheFooter />
</template>
