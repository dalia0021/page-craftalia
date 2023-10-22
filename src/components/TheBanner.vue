<script setup></script>

<template>
  <section id="banner">
    <div class="container-fluid d-flex align-items-center h-100">
      <div
        class="row gx-0 gy-5 justify-content-center align-items-center w-100"
      >
        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-10">
          <img
            src="../assets/banner-cerezo.png"
            alt="banner-cerezo"
            class="img-fluid mx-auto d-block"
            id="img-banner"
          />
        </div>
        <div class="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-10">
          <div class="text-center">
            <h1 class="text-cafe display-5">Tus Ideas, Nuestra Creatividad</h1>
            <h5 class="text-lila">
              <i> Accesorios y Papelería Personalizadas</i>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#banner {
  margin-top: 122px;
  background-image: url(../assets/baner-principal.png);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 0;
  height: calc(100vh - 122px);
}

#img-banner {
  width: auto;
  max-height: 60vh;
}
</style>
