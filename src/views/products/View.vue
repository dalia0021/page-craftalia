<script setup>
import TheNavbar from "@components/TheNavbar.vue";
import BaseTitlePage from "@components/BaseTitlePage.vue";
import BaseProduct from "@components/BaseProduct.vue";
import TheFooter from "@components/TheFooter.vue";

const BaseImages = "productos/";

const listProductos = [
    {
        image: "llavero-acrilico-480.png",
        name: "Llaveros de acrílico",
        size: "5x5",
        price: "120.00",
    },
    {
        image: "llavero-shrink-480.png",
        name: "Llaveros shrink",
        size: "5",
        price: "100.00",
    },
    {
        image: "colguije-480.png",
        name: "Colguijes para celular",
        size: "4",
        price: "85.00",
    },
    {
        image: "pines-480.png",
        name: "Pines para ropa",
        size: "2 a 3",
        price: "60.00",
    },
    {
        image: "aretes-480.png",
        name: "Aretes",
        size: "1.5",
        price: "100.00",
    },
    {
        image: "cuaderno-chico.png",
        name: "Cuaderno chico",
        size: "12x10",
        price: "200.00",
    },
    {
        image: "cin-color.jpg",
        name: "Stickers individuales para negocio (color)",
        size: "23pzas 4x4",
        price: "60.00",
    },
    {
        image: "cin-cafe.jpg",
        name: "Stickers individuales para negocio (cafe)",
        size: "23pzas 4x4",
        price: "55.00",
    },
    {
        image: "cin-holograficas.jpg",
        name: "Stickers individuales para negocio (Holográficas)",
        size: "23pzas 4x4",
        price: "60.00",
    },
    {
        image: "ce-minis.png",
        name: "Stickers escolares minis",
        size: "60pzas 3x0.5",
        price: "80.00",
    },
    {
        image: "ce-chicas.jpg",
        name: "Stickers escolares chicas",
        size: "45pzas 6x1",
        price: "80.00",
    },
    {
        image: "ce-medianas.jpg",
        name: "Stickers escolares medianas",
        size: "40pzas 3x3",
        price: "80.00",
    },
    {
        image: "ce-grandes.jpg",
        name: "Stickers escolares grandes",
        size: "20pzas 6x3",
        price: "80.00",
    },
];
</script>

<template>
    <TheNavbar />
    <BaseTitlePage
        title="Explora Nuestra Colección"
        subtitle="Papelería y Accesorios Personalizados para Capturar Tu Estilo Único"
    />
    <div class="container py-5">
        <div class="row gy-5 gx-lg-5 gx-md-5 gx-xl-5 justify-content-center">
            <BaseProduct
                v-for="(item, idx) in listProductos"
                :key="idx"
                :image="BaseImages + item.image"
                :name="item.name"
                :size="item.size"
                :price="item.price"
            />
        </div>
    </div>
    <TheFooter />
</template>
