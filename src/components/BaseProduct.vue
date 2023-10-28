<script setup>
import { useUtils } from "@composables/useUtils";
import { reactive } from "vue";

const appUseUtils = reactive(useUtils());

defineProps({
    id:{
        type: Number,
        required: true,
    },
    image: {
        type: String,
        default: "",
    },

    category: {
        type: String,
        default: "",
    },
    name: {
        type: String,
        default: "",
    },

    size: {
        type: String,
        default: "Detalle",
    },

    price: {
        type: String,
        default: "0.00",
    },
});
</script>

<template>
    <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-9 text-center">
        <div class="card border-light shadow-sm h-100">
            <img
                :src="appUseUtils.getImgUrl(image)"
                class="card-img-top"
                alt="..."
            />
            <div class="card-body d-flex flex-column justify-content-between text-start">
                <div class="">
                    <div class="text-muted"><small>{{ category }}</small></div>
                    <div class="fw-bold">{{ name }}</div>
                    <div class="text-muted fw-semibold">${{ price }}</div>
                </div>
                <div>
                    <p class="text-cafe">
                        
                    </p>
                    <router-link
                        :to="{ name: 'productsDetail', params: {id: id} }"
                        custom
                        v-slot="{ navigate }"
                    >
                        <button
                            @click="navigate"
                            class="btn btn-lila btn-sm w-100"
                        >
                            <i class="bi bi-eye"></i> Ver Detalle
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
