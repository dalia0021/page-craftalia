<script setup>
import BaseSection from "@components/BaseSection.vue";
import BaseFeaturedProduct from "@components/BaseFeaturedProduct.vue";

const listProductos = [
    {
        image: "pd1.png",
        name: "Llaveros de acrílico",
        size: "5x5",
        price: "120.00",
    },
    {
        image: "pd2.png",
        name: "Llaveros de shrink",
        size: "5",
        price: "100.00",
    },
    {
        image: "pd3.png",
        name: "Colguijes para celular",
        size: "4",
        price: "85.00",
    },
    {
        image: "pd4.png",
        name: "Pines para ropa",
        size: "2 a 3",
        price: "60.00",
    },
];
</script>

<template>
    <BaseSection
        title="Productos destacados"
        subTitle="Descubre la magia de lo hecho a mano y personalizado en cada detalle"
        bgColor="bg-white"
        frames
    >
        <div class="row gy-5 justify-content-center align-items-center">
            <BaseFeaturedProduct
                v-for="(item, idx) in listProductos"
                :key="idx"
                :image="item.image"
                :name="item.name"
                :size="item.size"
                :price="item.price"
            />
        </div>
    </BaseSection>
</template>
