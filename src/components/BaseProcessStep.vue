<script setup>
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
  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-10 text-center">
    <img :src="image" alt="banner-cerezo" class="img-fluid mx-auto d-block" />
    <h5 class="text-cafe my-4">
      {{ step }}
    </h5>
    <p>
      <slot>
        {{ desc }}
      </slot>
    </p>
  </div>
</template>

<style></style>
