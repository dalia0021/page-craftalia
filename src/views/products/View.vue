<script setup>
import TheNavbar from "../../components/TheNavbar.vue";
import BaseTitlePage from "../../components/BaseTitlePage.vue";
import BaseProduct from "../../components/BaseProduct.vue";
import TheFooter from "../../components/TheFooter.vue";
import llaveroAcrilico from "../../assets/productos/llavero-acrilico-480.png";
import LlaveroShrink from "../../assets/productos/llavero-shrink-480.png";
import Colguije from "../../assets/productos/colguije-480.png";
import Pines from "../../assets/productos/pines-480.png";
import Aretes from "../../assets/productos/aretes-480.png";
import CuadernoChico from "../../assets/productos/cuaderno-chico.png";
import CINColor from "../../assets/productos/cin-color.jpg";
import CINCafe from "../../assets/productos/cin-cafe.jpg";
import CINHolograficas from "../../assets/productos/cin-holograficas.jpg";
import CEminis from "../../assets/productos/ce-minis.png";
import CEchicas from "../../assets/productos/ce-chicas.jpg";
import CEmedianas from "../../assets/productos/ce-medianas.jpg";
import CEgrandes from "../../assets/productos/ce-grandes.jpg";

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
                :image="llaveroAcrilico"
                name="Llaveros de acrílico"
                size="5x5"
                price="120.00"
            />
            <BaseProduct
                :image="LlaveroShrink"
                name="Llaveros shrink"
                size="5"
                price="90.00"
            />
            <BaseProduct
                :image="Colguije"
                name="Colguijes para celular"
                size="4"
                price="80.00"
            />
            <BaseProduct
                :image="Pines"
                name="Pines para ropa"
                size="2 a 3"
                price="60.00"
            />
            <BaseProduct
                :image="Aretes"
                name="Aretes"
                size="1.5"
                price="100.00"
            />
            <BaseProduct
                :image="CuadernoChico"
                name="Cuaderno chico"
                size="12x10"
                price="200.00"
            />
            <BaseProduct
                :image="CINColor"
                name="Stickers individuales para negocio (color)"
                size="23pzas 4x4"
                price="60.00"
            />
           
            <BaseProduct
                :image="CINCafe"
                name="Stickers individuales para negocio (cafe)"
                size="23pzas 4x4"
                price="55.00"
            />
            <BaseProduct
                :image="CINHolograficas"
                name="Stickers individuales para negocio (Holográficas)"
                size="23pzas 4x4"
                price="60.00"
            />
            <BaseProduct
                :image="CEminis"
                name="Stickers escolares minis"
                size="60pzas 3x0.5"
                price="80.00"
            />
            <BaseProduct
                :image="CEchicas"
                name="Stickers escolares chicas"
                size="45pzas 6x1"
                price="80.00"
            />
            <BaseProduct
                :image="CEmedianas"
                name="Stickers escolares medianas"
                size="40pzas 3x3"
                price="80.00"
            />
            <BaseProduct
                :image="CEgrandes"
                name="Stickers escolares grandes"
                size="20pzas 6x3"
                price="80.00"
            />
        </div>
    </div>
    <TheFooter />
</template>
