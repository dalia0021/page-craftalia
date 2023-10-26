<script setup>
import BaseSection from "@components/BaseSection.vue";
import polaroid from "@assets/foto-pola.png";
</script>

<template>
    <BaseSection id="seccion-nosotros">
        <div class="row gy-5 justify-content-center align-items-center">
            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12">
                <img
                    :src="polaroid"
                    alt="luharud"
                    id="img-polaroid"
                    class="img-fluid mx-auto d-block"
                />
            </div>
            <div class="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12 px-4">
                <h2 class="text-cafe mb-4">Nuestra Historia:</h2>
                <p class="text-justify">
                    Hace algunos años, en un rincón tranquilo de mi pequeño
                    taller, nació la idea de crear una marca que capturara la
                    esencia de la personalización y la artesanía. Me llamo
                    Dalia, y soy la mente y las manos detrás de Craft Luharud.
                </p>

                <p class="text-justify">
                    Así nació Craft Luharud. Desde entonces, me he dedicado
                    apasionadamente a crear productos de papelería y accesorios
                    únicos, diseñados y fabricados con cuidado artesanal. Cada
                    artículo que sale de mi taller es una obra de arte en sí
                    misma, personalizada de acuerdo con las historias y los
                    sueños de mis clientes.
                </p>

                <figure class="text-end">
                    <blockquote class="blockquote">
                        <p class="text-cafe">Con gratitud y creatividad.</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        Dalia Morales V.
                        <cite title="Source Title"
                            >Creador de Craft Luharud</cite
                        >
                    </figcaption>
                </figure>
            </div>
        </div>
    </BaseSection>
</template>

<style>
#seccion-nosotros {
    background-image: url(../assets/banner-craft.png);
    background-position: top right;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

#img-polaroid {
    width: auto;
    max-height: 50vh;
}
</style>
