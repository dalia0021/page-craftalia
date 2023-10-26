<script setup>
import BaseSection from "@components/BaseSection.vue";
</script>

<template>
    <BaseSection bgColor="bg-white" frames>
        <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <div class="text-center">
                    <div class="mb-4">
                        <h2 class="text-cafe">
                            Haz que tu Creatividad Despegue
                        </h2>
                        <p>
                            <i
                                >Descubre nuestros productos personalizados
                                únicos y da vida a tus ideas</i
                            >
                        </p>
                    </div>
                    <router-link
                        :to="{ name: 'products' }"
                        custom
                        v-slot="{ navigate }"
                    >
                        <button
                            @click="navigate"
                            type="button"
                            class="btn btn-cafe text-center w-75"
                        >
                            <i class="bi bi-stars"></i> ¡Ver Catálogo Completo!
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </BaseSection>
</template>
