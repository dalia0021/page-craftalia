<script setup>
import { useUtils } from "@composables/useUtils";
import { reactive } from "vue";

const appUseUtils = reactive(useUtils());

defineProps({
  product: {
    type: Object,
    required: true,
  },
  productCustom:{
    type: Boolean,
    default: false,
  }
});
</script>

<template>
  <div class="card border-light shadow-sm h-100">
    <img
      :src="appUseUtils.getImgUrl(product.image)"
      class="card-img-top"
      alt="..."
    />
    <div
      class="card-body d-flex flex-column justify-content-between text-start"
    >
      <div class="">
        <div class="text-muted">
          <small>{{ product.category }}</small>
        </div>
        <div class="fw-bold">{{ product.name }}</div>
        <div class="text-muted fw-semibold">${{ product.price }}</div>
      </div>
      <div>
        <p class="text-cafe"></p>
        <router-link 
            v-if="productCustom"
          :to="{ name: 'productsCustomDetail', params: { id: product.id } }"
          custom
          v-slot="{ navigate }"
        >
          <button @click="navigate" class="btn btn-lila btn-sm w-100">
            <span><i class="bi bi-brush"></i> Personalizar</span>
          </button>
        </router-link>
        <router-link 
            v-else
          :to="{ name: 'productsDetail', params: { id: product.id } }"
          custom
          v-slot="{ navigate }"
        >
          <button @click="navigate" class="btn btn-lila btn-sm w-100">
            <span><i class="bi bi-cart-plus"></i> Comprar</span>
          </button>
        </router-link>
        
      </div>
    </div>
  </div>
</template>

<style></style>
