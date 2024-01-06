<script setup>
import TheNavbar from "@components/TheNavbar.vue";
import TheFooter from "@components/TheFooter.vue";
import { useApi } from "@composables/useApi";
import { reactive, ref } from "vue";
import BaseProductImagesCarousel from "@components/BaseProductImagesCarousel.vue";
import BaseProductDetail from "@components/BaseProductDetail.vue";

const appApi = reactive(useApi());

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const listProductos = ref([]);
const producto = reactive({
    image: "",
    category: "",
    name: "",
    size: "",
    price: "",
    featured: false,
});

const initComponents = () => {
    fetchListProducts();
    loadData();
};

const loadData = () => {
    let data = appApi.getProductById(props.id);

    producto.image = data.image;
    producto.category = data.category;
    producto.name = data.name;
    producto.description = data.description;
    producto.size = data.size;
    producto.price = data.price;
    producto.featured = data.featured;
    producto.customizable = data.customizable;
    producto.thumbnails = data.thumbnails;
    producto.characteristics = data.characteristics;
};

const fetchListProducts = () => {
    listProductos.value = appApi.getProductsList();
};

initComponents();
</script>

<template>
    <TheNavbar />
    <div class="container p-5" style="margin-top: 122px">
        <div class="row g-5 justify-content-center">
            <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                <BaseProductImagesCarousel :thumbnails="producto.thumbnails" />
            </div>

            <div
                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center ps-xl-5 ps-lg-5 ps-md-5"
            >
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <router-link
                                class="text-decoration-none"
                                :to="{ name: 'home' }"
                            >
                                <small>Inicio</small>
                            </router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link
                                class="text-decoration-none"
                                :to="{ name: 'products' }"
                            >
                                <small>Productos</small>
                            </router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <small>{{ producto.category }}</small>
                        </li>
                    </ol>
                </nav>
                <BaseProductDetail :product="producto" />
            </div>
        </div>
    </div>
    <TheFooter />
</template>
