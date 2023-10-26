<script setup>
import BaseSection from "@components/BaseSection.vue";
import rec1 from "@assets/rec-1.png";
import rec2 from "@assets/rec-2.png";
import rec3 from "@assets/rec-3.png";
import rec4 from "@assets/rec-4.png";
</script>

<template>
    <BaseSection
        id="seccion-reseñas"
        title="Testimonios y Reseñas de Nuestros Clientes"
        subTitle="Lo que alguno de nuestros clientes dicen:"
    >
        <div class="row gy-5 justify-content-center align-items-center">
            <div class="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12">
                <div
                    id="carouselExampleIndicators"
                    class="carousel slide"
                    data-bs-ride="true"
                >
                    <div class="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                        ></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img :src="rec1" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img :src="rec2" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img :src="rec3" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img :src="rec4" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </BaseSection>
</template>

<style>
#seccion-reseñas {
    background-image: url(../assets/banner-craft.png);
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
</style>
