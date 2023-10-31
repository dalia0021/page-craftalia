<script setup>
import { reactive, ref } from "vue";
import AppInputAmount from "@components/AppInputAmount.vue";
import AppInputDesign from "@components/AppInputDesign.vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const form = reactive({
  cantidad: 1,
  diseno:""
});
</script>

<template>
  <div class="text-start">
    <span v-if="product.featured" class="bg-lila rounded text-white px-3 py-1">
      <small><i class="bi bi-star-fill"></i> Producto Destacado</small>
    </span>
    <h2 class="text-cafe mt-4">{{ product.name }}</h2>
    <p class="text-muted">{{ product.description }}</p>
    <h4 class="mt-4 text-muted">${{ product.price }}</h4>
    <br />
    <div class="row">
      <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
        <AppInputAmount v-model="form.cantidad"/>
      </div>
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <AppInputDesign v-model="form.diseno"/>
      </div>
    </div>
    <br />
    <router-link :to="{ name: 'productsDetail' }" custom v-slot="{ navigate }">
      <button @click="navigate" class="btn btn-lila btn-sm w-100">
        <i class="bi bi-cart-plus"></i> Agergar al carrito
      </button>
    </router-link>
    <hr />
    <p class="text-muted"><b>Detalles del artículo</b></p>
    <ul class="list-unstyled ms-4">
      <li class="mb-2">
        <i class="bi bi-check-circle text-lila"></i> Hecho a mano
      </li>
      <li class="mb-2">
        <i class="bi bi-check-circle text-lila"></i> Tamaño:
        {{ product.size }} cm
      </li>
      <li
        class="mb-2"
        v-for="(item, idx) in product.characteristics"
        :key="idx"
      >
        <i class="bi bi-check-circle text-lila"></i> {{ item }}
      </li>
    </ul>
  </div>
</template>

<style></style>
