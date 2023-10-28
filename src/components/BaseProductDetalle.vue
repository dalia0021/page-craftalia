<script setup>
import { useUtils } from "@composables/useUtils";
import { reactive, ref } from "vue";

const appUseUtils = reactive(useUtils());

const props = defineProps({
    category: {
        type: String,
        default: "Sin Categoria",
    },
    image: {
        type: String,
        default: "",
    },

    name: {
        type: String,
        default: "",
    },

    size: {
        type: String,
        default: "Detalle",
    },

    price: {
        type: String,
        default: "0.00",
    },
    featured: {
        type: Boolean,
        default: false,
    },
    thumbnails: {
        type: Array,
        default: [],
    },
});

const imageActive = ref(0) 

const setActive = (index) => {
    let active = index;

    if(index === props.thumbnails.length) active = 0;
    else if(index === -1) active = props.thumbnails.length - 1;

    imageActive.value = active;
}


</script>

<template>
    <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div
                        v-for="(item, idx) in thumbnails"
                        class="carousel-item"
                        :class="{ 'active': idx === 0}"
                        :key="idx"
                    >
                        <img
                            :src="appUseUtils.getImgUrl(item)"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                    @click="setActive(imageActive-1)"
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
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                    @click="setActive(imageActive+1)"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="row g-3 py-4">
                <div v-for="(item, idx) in thumbnails" class="col-3" :key="idx">
                    <img
                        :src="appUseUtils.getImgUrl(item)"
                        data-bs-target="#carouselExample"
                        :data-bs-slide-to="idx"
                        class="rounded img-fluid"
                        :class="{ 'border border-success-subtle border-4': idx === imageActive}"
                    />
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-9 text-center">
        <div class=""></div>
    </div>
</template>

<style></style>
