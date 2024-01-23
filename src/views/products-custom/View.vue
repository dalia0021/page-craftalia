<script setup>
import TheNavbar from "@components/TheNavbar.vue";
import BaseTitlePage from "@components/BaseTitlePage.vue";
import BaseProduct from "@components/BaseProduct.vue";
import BaseSection from "@components/BaseSection.vue";
import TheFooter from "@components/TheFooter.vue";
import { useApi } from "@composables/useApi";
import { reactive, ref, watch, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const appApi = reactive(useApi());;

const query = reactive({
    search: "",
    type: "",
    category: "customizable"
});
const listProductos = ref([]);

watch(
    () => route.query,
    (newValue) => {
        loadQueryParams();
        fetchListProducts();
    }
);

const initComponents = () => {
    loadQueryParams();
    fetchListProducts();
};

const loadQueryParams = () =>{
    if (route.query.type) {
        query.type = route.query.type;
    }

}

const fetchListProducts = () => {
    listProductos.value = appApi.getProductsCustomList();
};

const title = computed(() => {
  if (query.customizable) {
    return "Explora Nuestras Opciones para Perzonalizar";
  }
  return "Explora Nuestra Colección de Productos";
});

const subTitle = computed(() => {
    if (query.customizable) {
    return "Papelería y Accesorios Personalizados para Capturar Tu Estilo Único";
  }
  return "Papelería y Accesorios hechos a mano";
});


initComponents();
</script>

<template>
    <TheNavbar />
    <BaseTitlePage
        :title="title"
        :subtitle="subTitle"
    />
    <BaseSection bgColor="bg-white" frames>
        <div class="row gy-5 gx-xl-4 gx-lg-4 gx-md-4 justify-content-center">
            <div
                v-for="(item, idx) in listProductos"
                :key="idx"
                class="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-10 text-center"
            >
                <BaseProduct :productCustom="true" :product="item" />
            </div>
        </div>
    </BaseSection>
    <TheFooter />
</template>
