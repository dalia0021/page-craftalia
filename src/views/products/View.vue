<script setup>
import TheNavbar from "@components/TheNavbar.vue";
import BaseTitlePage from "@components/BaseTitlePage.vue";
import BaseProduct from "@components/BaseProduct.vue";
import TheFooter from "@components/TheFooter.vue";
import { useApi } from "@composables/useApi";
import { reactive, ref } from "vue";

const appApi = reactive(useApi());

const listProductos = ref([])


const fetchListProducts = () => {
    listProductos.value =  appApi.getProductsList()
}

fetchListProducts();

</script>

<template>
    <TheNavbar />
    <BaseTitlePage
        title="Explora Nuestra Colección"
        subtitle="Papelería y Accesorios Personalizados para Capturar Tu Estilo Único"
    />
    <div class="container py-5">
        <div class="row gy-5 gx-lg-5 gx-md-5 gx-xl-5 justify-content-center">
            <BaseProduct
                v-for="(item, idx) in listProductos"
                :key="idx"
                :id="item.id"
                :image="item.image"
                :category="item.category"
                :name="item.name"
                :size="item.size"
                :price="item.price"
            />
        </div>
    </div>
    <TheFooter />
</template>
