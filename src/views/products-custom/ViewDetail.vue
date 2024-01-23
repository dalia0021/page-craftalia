<script setup>
import TheNavbar from "@components/TheNavbar.vue";
import TheFooter from "@components/TheFooter.vue";
import { useApi } from "@composables/useApi";
import { reactive, ref } from "vue";
import BaseProductImagesCarousel from "@components/BaseProductImagesCarousel.vue";
import AppInputAmount from "@components/AppInputAmount.vue";
import AppInputDesign from "@components/AppInputDesign.vue";
import AppInputKeychainStyle from "@components/AppInputKeychainStyle.vue";

const appApi = reactive(useApi());

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const form = reactive({
    cantidad: 1,
    diseno: "",
});

const producto = reactive({
    image: "",
    category: "",
    name: "",
    size: "",
    price: "",
    featured: false,
});

const initComponents = () => {
    loadData();
};

const loadData = () => {
    let data = appApi.getProductCustomById(props.id);

    producto.image = data.image;
    producto.category = data.category;
    producto.name = data.name;
    producto.description = data.description;
    producto.size = data.size;
    producto.price = data.price;
    producto.featured = data.featured;
    producto.thumbnails = data.thumbnails;
    producto.characteristics = data.characteristics;
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
                                :to="{ name: 'productsCustom' }"
                            >
                                <small>Regalos Personalizables</small>
                            </router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <small>{{ producto.category }}</small>
                        </li>
                    </ol>
                </nav>
                <div class="text-start">
                    <span
                        v-if="producto.featured"
                        class="bg-lila rounded text-white px-3 py-1"
                    >
                        <small
                            ><i class="bi bi-star-fill"></i> Producto
                            Destacado</small
                        >
                    </span>
                    <h2 class="text-cafe mt-4">{{ producto.name }}</h2>
                    <p class="text-muted">{{ producto.description }}</p>
                    <h4 class="mt-4 text-muted">${{ producto.price }}</h4>
                    <br />
                    <div class="row">
                        <div
                            class="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12"
                        >
                            <AppInputAmount v-model="form.cantidad" />
                        </div>
                        <div class="text-body-tertiary">
                            <hr />
                        </div>
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                        >
                            <AppInputDesign v-model="form.diseno" />
                        </div>
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                        >
                            <AppInputKeychainStyle />
                        </div>
                    </div>
                    <br />
                    <router-link
                        :to="{ name: 'productsDetail' }"
                        custom
                        v-slot="{ navigate }"
                    >
                        <button
                            @click="navigate"
                            class="btn btn-lila btn-sm w-100"
                        >
                            <i class="bi bi-cart-plus"></i> Agregar al carrito
                        </button>
                    </router-link>
                    <hr />
                    <p class="text-muted"><b>Detalles del artículo</b></p>
                    <ul class="list-unstyled ms-4">
                        <li class="mb-2">
                            <i class="bi bi-check-circle text-lila"></i> Hecho a
                            mano
                        </li>
                        <li class="mb-2">
                            <i class="bi bi-check-circle text-lila"></i> Tamaño:
                            {{ producto.size }} cm
                        </li>
                        <li
                            class="mb-2"
                            v-for="(item, idx) in producto.characteristics"
                            :key="idx"
                        >
                            <i class="bi bi-check-circle text-lila"></i>
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <TheFooter />
</template>
