<script setup>
import BaseSection from "@components/BaseSection.vue";
import BaseFeaturedProduct from "@components/BaseFeaturedProduct.vue";
import { useApi } from "@composables/useApi";
import { reactive, ref, computed } from "vue";

const appApi = reactive(useApi());

const listProductos = ref([]);

const fetchListProducts = () => {
  listProductos.value = appApi.getProductsList();
};

const featuredProducts = computed(() => {
   let filterList = listProductos.value.filter((item) => item.featured == true);

   return filterList.slice(0, 4);
});

fetchListProducts();
</script>

<template>
  <BaseSection
    title="Productos destacados"
    subTitle="Descubre la magia de lo hecho a mano y personalizado en cada detalle"
    bgColor="bg-white"
    frames
  >
    <div class="row gy-5 justify-content-center align-items-center">
      <div
        v-for="(item, idx) in featuredProducts"
        :key="idx"
        class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-10 text-center"
      >
        <BaseFeaturedProduct
          :image="item.imageFeatured"
          :name="item.name"
          :size="item.size"
          :price="item.price"
        />
      </div>
    </div>
  </BaseSection>
</template>
