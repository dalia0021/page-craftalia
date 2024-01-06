<script setup>
import { useUtils } from "@composables/useUtils";
import { reactive } from "vue";

const appUseUtils = reactive(useUtils());
</script>

<template>
    <header class="fixed-top">
        <div
            class="bg-cafe d-flex justify-content-center align-items-center py-2 text-white"
        >
            ¡Realiza hoy tu pedido!
            <router-link
                :to="{ name: 'products' }"
                custom
                v-slot="{ navigate }"
            >
                <button
                    @click="navigate"
                    type="button"
                    class="ms-4 btn btn-outline-light"
                >
                    <i class="bi bi-heart"></i> Ver Catálogo
                </button>
            </router-link>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light shadow-sm bg-crema">
            <div class="container-fluid">
                <router-link class="navbar-brand m-0" :to="{ name: 'home' }">
                    <img
                        src="../assets/luharud-500.png"
                        alt="Logo"
                        height="40"
                        class="d-inline-block align-text-top mx-4"
                    />
                </router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav justify-content-end w-100">
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :to="{ name: 'home' }"
                                @click="appUseUtils.scrollToTop()"
                            >
                                Inicio
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :to="{
                                    name: 'products',
                                }"
                                @click="appUseUtils.scrollToTop()"
                            >
                                Artículos
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :to="{
                                    name: 'products',
                                    query: { category: 'customizable' },
                                }"
                                @click="appUseUtils.scrollToTop()"
                            >
                                Productos Personalizados
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :to="{ name: 'processes' }"
                                @click="appUseUtils.scrollToTop()"
                            >
                                Proceso
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :to="{ name: 'FAQ' }"
                                @click="appUseUtils.scrollToTop()"
                            >
                                FAQ
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
