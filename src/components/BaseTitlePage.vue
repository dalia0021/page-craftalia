<script setup>
defineProps({
    title: {
        type: String,
        default: "Titulo",
    },

    subtitle: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <section id="banner-titulo">
        <div
            class="container-fluid d-flex justify-content-center align-items-center h-100"
        >
            <div class="py-5">
                <div class="text-center">
                    <h1 class="text-cafe display-5">{{ title }}</h1>
                    <h5 class="text-lila" v-if="subtitle != ''">
                        {{ subtitle }}
                    </h5>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#banner-titulo {
    margin-top: 122px;
    background-image: url(../assets/banner-craft.png);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 20vh;
    padding: 0;
}
</style>
