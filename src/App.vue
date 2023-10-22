<script setup>
import TheNavbar from "./components/TheNavbar.vue";
import TheBanner from "./components/TheBanner.vue";
import BaseSection from "./components/BaseSection.vue";
import BaseFeaturedArt from "./components/BaseFeaturedArt.vue";
import BaseProcessSteps from "./components/BaseProcessSteps.vue";

//Prodructos destacados
import pd1 from "./assets/pd1.png";
import pd2 from "./assets/pd2.png";
import pd3 from "./assets/pd3.png";
import pd4 from "./assets/pd4.png";

//Pasos del proceso
import p1 from "./assets/p1-b.png";
import p2 from "./assets/p2-b.png";
import p3 from "./assets/p3-b.png";
</script>

<template>
  <TheNavbar />
  <TheBanner />
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
  <BaseSection
    title="Proceso de personalización"
    subTitle="Desde tu Idea hasta un Producto Único y Hecho a Mano"
  >
    <div class="row gx-5 gy-5 justify-content-center">
      <BaseProcessSteps 
        :image="p1" 
        step="Paso 1: Elige tu Producto"
      >
        En el primer paso, selecciona el producto que más te guste de nuestra
        colección de papelería y accesorios.
      </BaseProcessSteps>
      <BaseProcessSteps 
        :image="p2" 
        step="Paso 2: Personaliza a tu Gusto"
        >Luego, personaliza tu producto a tu gusto. Puedes elegir colores,
        patrones, tamaños y añadir detalles especiales.
      </BaseProcessSteps>
      <BaseProcessSteps 
        :image="p3" 
        step="Paso 3: Crea tu Producto Único"
        >Una vez que hayas definido el diseño del producto, nuestro equipo se
        pondrá manos a la obra.
        <br>
        <br>
        <small>(El tiempo de elaboración es de 5 a 10 dias)</small>
      </BaseProcessSteps>
    </div>
  </BaseSection>
</template>
