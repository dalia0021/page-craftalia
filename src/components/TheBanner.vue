<script setup></script>

<template>
    <section id="banner">
        <div
            class="container-fluid d-flex justify-content-center align-items-center h-100"
        >
            <div
                class="row gy-5 gx-xl-5 justify-content-center align-items-center"
            >
                <div class="col-xl-4 col-lg-4 col-md-5 col-sm-5 col-9">
                    <img
                        src="../assets/banner-cerezo.png"
                        alt="banner-cerezo"
                        class="img-fluid mx-auto d-block"
                        id="img-banner"
                    />
                </div>
                <div class="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-10">
                    <div class="text-center">
                        <h1 class="text-cafe" id="titulo">
                            Tus Ideas, Nuestra Creatividad
                        </h1>
                        <h5 class="text-lila">
                            Accesorios y Papelería Personalizadas
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
