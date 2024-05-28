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
           <small><b>¡Envios a todo mexico!</b></small>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light shadow-sm bg-white">
            <div class="container-fluid">
                <router-link class="navbar-brand m-0" :to="{ name: 'home' }">
                    <img
                        src="../assets/logo-craftalia.png"
                        alt="Logo"
                        height="50"
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
                                Productos
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :to="{
                                    name: 'productsCustom',
                                }"
                                @click="appUseUtils.scrollToTop()"
                            >
                                Personalizables
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
