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
  <img
    :src="appUseUtils.getImgUrl(image)"
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
    alt="califiaciones"
    class="img-fluid mx-auto d-block"
  />
</template>

<style></style>
