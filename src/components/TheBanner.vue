<script setup></script>

<template>
    <section id="banner">
        <div class="container-fluid d-flex align-items-center h-100">
            <div class="row gy-5 justify-content-center align-items-center w-100">
                <div class="col-lg-4 col-md-6 col-sm-6 col-10"> 
                    <img src="../assets/banner-cerezo.png" alt="banner-cerezo" class="img-fluid">
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="text-center">
                        <h1 class="text-cafe">Tus Ideas, Nuestra Creatividad</h1>
                        <h6 class="text-lila"><i> Accesorios y Papelería Personalizadas</i></h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#banner {
  background-image: url(../assets/baner-principal.jpg);
  background-position: bottom,50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 0;
  height: 100vh ;
  padding-top: 68px;
  margin-top: -68px;
}

#img-banner{
    max-width: 301;
}

</style>
