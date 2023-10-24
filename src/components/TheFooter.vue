<script setup>
import logo from "../assets/luharud-500.png";
</script>

<template>
    <footer id="footer">
        <div class="container py-5">
            <div class="row g-5 justify-content-center align-items-center">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img
                        :src="logo"
                        alt="banner-cerezo"
                        class="img-fluid mx-auto d-block"
                        width="130"
                    />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <p>Síguenos en nuestras redes sociales</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
#footer {
    background-image: url(../assets/baner-principal.png);
    background-position: top right;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
</style>
