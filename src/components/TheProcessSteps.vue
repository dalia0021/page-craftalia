<script setup>
import BaseSection from "./BaseSection.vue";
import BaseProcessStep from "./BaseProcessStep.vue";
import p1 from "../assets/p1-b.png";
import p2 from "../assets/p2-b.png";
import p3 from "../assets/p3-b.png";

</script>

<template>
  <BaseSection
    title="Proceso de personalización"
    subTitle="Desde tu Idea hasta un Producto Único y Hecho a Mano"
  >
    <div class="row gx-5 gy-5 justify-content-center">
      <BaseProcessStep :image="p1" step="Paso 1: Elige tu Producto">
        En el primer paso, selecciona el producto que más te guste de nuestra
        colección de papelería y accesorios.
      </BaseProcessStep>
      <BaseProcessStep :image="p2" step="Paso 2: Personaliza a tu Gusto"
        >Luego, personaliza tu producto a tu gusto. Puedes elegir colores,
        patrones, tamaños y añadir detalles especiales.
      </BaseProcessStep>
      <BaseProcessStep :image="p3" step="Paso 3: Crea tu Producto Único"
        >Una vez que hayas definido el diseño del producto, nuestro equipo se
        pondrá manos a la obra.
        <br />
        <br />
        <small>(El tiempo de elaboración es de 5 a 10 dias)</small>
      </BaseProcessStep>
    </div>
    <br />
    <div class="row justify-content-center">
      <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
        <button type="button" class="btn btn-cafe text-center w-100">
          <i class="bi bi-card-checklist"></i> Conocer mas sobre el proceso
        </button>
      </div>
    </div>
  </BaseSection>
</template>

<style></style>
