<script setup>
import BaseSection from "@components/BaseSection.vue";
import BaseProcessStep from "@components/BaseProcessStep.vue";
</script>

<template>
  <BaseSection
    title="Proceso de personalización"
    subTitle="Desde tu Idea hasta un Producto Único y Hecho a Mano"
  >
    <div class="row g-5 justify-content-center">
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-10 text-center">
        <BaseProcessStep image="p1-b.png" step="Paso 1: Elige tu Producto">
          En el primer paso, selecciona el producto que más te guste de nuestra
          colección de papelería y accesorios.
        </BaseProcessStep>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-10 text-center">
        <BaseProcessStep image="p2-b.png" step="Paso 2: Personaliza a tu Gusto"
          >Luego, personaliza tu producto a tu gusto. Puedes elegir colores,
          patrones, tamaños y añadir detalles especiales.
        </BaseProcessStep>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-10 text-center">
        <BaseProcessStep image="p3-b.png" step="Paso 3: Crea tu Producto Único"
          >Una vez que hayas definido el diseño del producto, nuestro equipo se
          pondrá manos a la obra.
          <br />
          <br />
          <small>(El tiempo de elaboración es de 5 a 10 dias)</small>
        </BaseProcessStep>
      </div>
    </div>
    <br />
    <div class="row justify-content-center">
      <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
        <router-link :to="{ name: 'processes' }" custom v-slot="{ navigate }">
          <button
            @click="navigate"
            type="button"
            class="btn btn-cafe text-center w-100"
          >
            <i class="bi bi-card-checklist"></i> Conocer mas sobre el proceso
          </button>
        </router-link>
      </div>
    </div>
  </BaseSection>
</template>

<style></style>
