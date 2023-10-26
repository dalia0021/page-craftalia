<script setup>
import { useUtils } from "@composables/useUtils";
import { reactive } from "vue";

const appUseUtils = reactive(useUtils());

defineProps({
    image: {
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
    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-10 text-center">
        <img
            :src="appUseUtils.getImgUrl(image)"
            alt="banner-cerezo"
            class="img-fluid mx-auto d-block px-3"
        />
        <p class="mb-2">
            {{ name }}<br />
            <small>{{ size }} cm</small>
        </p>
        <p>
            <b>${{ price }} <small>mxn</small></b>
        </p>
        <img
            src="../assets/estrellas.png"
            alt="banner-cerezo"
            class="img-fluid mx-auto d-block"
        />
    </div>
</template>

<style></style>
