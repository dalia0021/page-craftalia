<script setup>
import BaseSection from "./BaseSection.vue";
import BaseFeaturedProduct from "./BaseFeaturedProduct.vue";
import pd1 from "../assets/pd1.png";
import pd2 from "../assets/pd2.png";
import pd3 from "../assets/pd3.png";
import pd4 from "../assets/pd4.png";

</script>

<template>
  <BaseSection
    title="Productos destacados"
    subTitle="Descubre la magia de lo hecho a mano y personalizado en cada detalle"
    bgColor="bg-white"
  >
    <div class="row gy-5 justify-content-center align-items-center">
      <BaseFeaturedProduct
        :image="pd1"
        name="Llaveros de acrílico"
        size="5x5"
        price="120.00"
      />
      <BaseFeaturedProduct
        :image="pd2"
        name="Llaveros shrink"
        size="5"
        price="90.00"
      />
      <BaseFeaturedProduct
        :image="pd3"
        name="Colguijes para celular"
        size="4"
        price="80.00"
      />
      <BaseFeaturedProduct
        :image="pd4"
        name="Pines para ropa"
        size="2 a 3"
        price="60.00"
      />
    </div>
  </BaseSection>
</template>

<style></style>
