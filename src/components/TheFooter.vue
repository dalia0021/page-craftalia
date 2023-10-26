<script setup>
import logo from "@assets/luharud-500.png";
import logoInsta from "@assets/instagram.png";
import logoTiktok from "@assets/tik-tok.png";
</script>

<template>
    <footer id="footer">
        <div class="container py-5">
            <div class="row gy-5 justify-content-center align-items-center">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <img
                        :src="logo"
                        alt="banner-cerezo"
                        class="img-fluid mx-auto d-block"
                        width="130"
                    />
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="d-flex justify-content-center">
                        <a href="#">
                            <img
                                :src="logoInsta"
                                alt="Logo"
                                height="25"
                                class="d-inline-block mx-2"
                            />
                        </a>
                        <a href="#">
                            <img
                                :src="logoTiktok"
                                alt="Logo"
                                height="25"
                                class="d-inline-block mx-2"
                            />
                        </a>
                    </div>
                    <p class="mt-4 text-center">
                        Síguenos en nuestras redes sociales
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
#footer {
    background-image: url(../assets/baner-principal.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
</style>
