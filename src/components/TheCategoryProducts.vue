<script setup>
import BaseSection from "@components/BaseSection.vue";

</script>

<template>
  <BaseSection
    bgColor="bg-white"
  >
    <div class="row gy-5 justify-content-center align-items-center">
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-10">
        <div class="card">
            
            <div class="card-body">
                <div class="text-center">
                    <img src="../assets/llavero.png" class="img-fluid" style="max-width: 100px;" alt="...">
                    <br>
                    <div class="mt-4">
                        <b>LLAVEROS Y PINES</b>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-10">
        <div class="card">
            <div class="card-body">
                Cuadros
            </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-10">
        <div class="card">
            <div class="card-body">
                Papeleria
            </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-10">
        <div class="card">
            <div class="card-body">
                Otros
            </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>
