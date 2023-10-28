<script setup>
import { useUtils } from "@composables/useUtils";
import { reactive, ref } from "vue";

const appUseUtils = reactive(useUtils());

const props = defineProps({
    category: {
        type: String,
        default: "Sin Categoria",
    },
    image: {
        type: String,
        default: "",
    },

    name: {
        type: String,
        default: "",
    },

    description: {
        type: String,
        default: "Sin descripción",
    },

    size: {
        type: String,
        default: "Detalle",
    },

    price: {
        type: String,
        default: "0.00",
    },
    featured: {
        type: Boolean,
        default: false,
    },
    thumbnails: {
        type: Array,
        default: [],
    },
    characteristics: {
        type: Array,
        default: [],
    },
});

const imageActive = ref(0);

const setActive = (index) => {
    let active = index;

    if (index === props.thumbnails.length) active = 0;
    else if (index === -1) active = props.thumbnails.length - 1;

    imageActive.value = active;
};
</script>

<template>
    <div class="row g-5 justify-content-center">
        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12 ">
            <div id="carouselExample"
                 class="carousel slide">
                <div class="carousel-inner">
                    <div v-for="(item, idx) in thumbnails"
                         class="carousel-item"
                         :class="{ active: idx === 0 }"
                         :key="idx">
                        <img :src="appUseUtils.getImgUrl(item)"
                             class="rounded d-block w-100"
                             alt="..." />
                    </div>
                </div>
                <div v-if="thumbnails.length > 1">
                    <button class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                            @click="setActive(imageActive - 1)">
                        <span class="carousel-control-prev-icon"
                              aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                            @click="setActive(imageActive + 1)">
                        <span class="carousel-control-next-icon"
                              aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div class="row g-3 py-4">
                <div v-for="(item, idx) in thumbnails"
                     class="col-3"
                     :key="idx">
                    <img @click="setActive(idx)"
                         :src="appUseUtils.getImgUrl(item)"
                         data-bs-target="#carouselExample"
                         :data-bs-slide-to="idx"
                         class="rounded img-fluid"
                         :class="{
                            'border border-lila-subtle border-4':
                                idx === imageActive,
                        }" />
                </div>
            </div>
        </div>

        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center ps-xl-5 ps-lg-5 ps-md-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link class="text-decoration-none"
                                     :to="{ name: 'home' }">
                            <small>Inicio</small>
                        </router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link class="text-decoration-none"
                                     :to="{ name: 'products' }">
                            <small>Productos</small>
                        </router-link>
                    </li>
                    <li class="breadcrumb-item active"
                        aria-current="page">
                        <small>{{ category }}</small>
                    </li>
                </ol>
            </nav>
            <div class="text-start">
                <span v-if="featured" class="bg-lila rounded text-white px-3 py-1"><small><i class="bi bi-star-fill"></i> Producto Destacado</small> </span>
                <h2 class="text-cafe mt-4">{{ name }}</h2>
                <p class="text-muted">{{ description }}</p>
                <h4 class="mt-4 text-muted">${{ price }}</h4>
                <br>
                <div class="input-group mb-3">
                    <span class="input-group-text">-</span>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInputGroup1" placeholder="1">
                        <label for="floatingInputGroup1">Cantidad</label>
                    </div>
                    <span class="input-group-text">+</span>
                    </div>
                <br>
                <router-link
                        :to="{ name: 'productsDetail', params: {id: id} }"
                        custom
                        v-slot="{ navigate }"
                    >
                        <button
                            @click="navigate"
                            class="btn btn-lila btn-sm w-100"
                        >
                        <i class="bi bi-cart-plus"></i> Agergar al carrito
                        </button>
                    </router-link>
                <hr>
                <p class="text-muted">
                    <b>Detalles del artículo</b><br><br>
                <ul class="list-unstyled ms-4">
                    <li class="mb-2"><i class="bi bi-check-circle"></i> Hecho a mano </li>
                    <li class="mb-2"><i class="bi bi-check-circle"></i> Tamaño: {{ size }} cm</li>
                    <li class="mb-2"
                        v-for="(item,idx) in characteristics"
                        :key="idx">
                        <i class="bi bi-check-circle"></i> {{ item }}
                    </li>
                </ul>
                </p>
            </div>
        </div>
    </div>
</template>

<style></style>
