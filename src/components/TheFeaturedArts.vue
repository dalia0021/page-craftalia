<script setup>
import BaseSection from "./BaseSection.vue";
import BaseFeaturedArt from "./BaseFeaturedArt.vue";
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
      <BaseFeaturedArt
        :image="pd1"
        name="Llaveros de acrílico"
        size="5x5"
        price="150.00"
      />
      <BaseFeaturedArt
        :image="pd2"
        name="Llaveros Shrink"
        size="5"
        price="100.00"
      />
      <BaseFeaturedArt
        :image="pd3"
        name="Colguijes para celular"
        size="4"
        price="90.00"
      />
      <BaseFeaturedArt
        :image="pd4"
        name="Pines para ropa"
        size="1.5"
        price="70.00"
      />
    </div>
  </BaseSection>
</template>

<style></style>
