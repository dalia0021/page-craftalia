<script setup>
import BaseSection from "@components/BaseSection.vue";
</script>

<template>
    <BaseSection bgColor="bg-white" frames>
        <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <div class="text-center">
                    <div class="mb-4">
                        <h2 class="text-cafe">¿Tienes dudas?</h2>
                        <p>
                            <i
                                >Encuentra Respuestas a tus Dudas sobre Nuestros
                                Productos Personalizados</i
                            >
                        </p>
                    </div>
                    <router-link
                        :to="{ name: 'FAQ' }"
                        custom
                        v-slot="{ navigate }"
                    >
                        <button
                            @click="navigate"
                            type="button"
                            class="btn btn-cafe text-center w-75"
                        >
                            <i class="bi bi-patch-question"></i> Preguntas
                            Frecuentes
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </BaseSection>
</template>
