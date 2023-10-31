<script setup>
import { useUtils } from "@composables/useUtils";
import { reactive } from "vue";

const appUseUtils = reactive(useUtils());

defineProps({
  image: {
    type: String,
    default: "",
  },

  step: {
    type: String,
    default: "",
  },

  description: {
    type: String,
    default: "Detalle",
  },
});
</script>

<template>
  <img
    :src="appUseUtils.getImgUrl(image)"
    alt="banner-cerezo"
    class="img-fluid mx-auto d-block"
  />
  <h5 class="text-cafe my-4">
    {{ step }}
  </h5>
  <p>
    <slot>
      {{ desc }}
    </slot>
  </p>
</template>

<style></style>
