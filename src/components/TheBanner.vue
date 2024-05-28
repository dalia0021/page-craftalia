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
                        src="../assets/cuadro-peonia.png"
                        alt="banner-cerezo"
                        class="img-fluid mx-auto d-block"
                        id="img-banner"
                    />
                </div>
                <div class="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-10">
                    <div class="text-right">
                        <h1 class="text-cafe" id="titulo">
                            Cuadros Perzonalizados
                        </h1>
                        <h5 class="text-cafe bg-white p-1">
                            Artículos y Papelería Personalizadas
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
/*#banner {
    margin-top: 122px;
    background-image: url(../assets/baner-principal.png);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding: 0;
    height: calc(100vh - 122px);
} */

 #banner {
    margin-top: 114px;
    background-image: url(../assets/banner-principal-3.png);
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding: 0;
    height: calc(80vh - 114px);

}  

#img-banner {
    width: auto;
    max-height: 60vh;
}
</style>
