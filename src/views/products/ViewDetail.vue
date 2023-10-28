<script setup>
import TheNavbar from "@components/TheNavbar.vue";
import BaseProductDetalle from "@components/BaseProductDetalle.vue";
import TheFooter from "@components/TheFooter.vue";
import { useApi } from "@composables/useApi";
import { reactive, ref } from "vue";

const appApi = reactive(useApi());

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const producto = reactive({
    image: "",
    category: "",
    name: "",
    size: "",
    price: "",
    featured: false,
});

const loadData = () => {
    let data = appApi.getProductById(props.id);

    producto.image = data.image;
    producto.category = data.category;
    producto.name = data.name;
    producto.size = data.size;
    producto.price = data.price;
    producto.featured = data.featured;
    producto.thumbnails = data.thumbnails;
};

loadData();
</script>

<template>
    <TheNavbar />
    <div class="container py-5" style="margin-top: 122px">
        <BaseProductDetalle
            :image="producto.image"
            :category="producto.category"
            :name="producto.name"
            :size="producto.size"
            :price="producto.price"
            :featured="producto.featured"
            :thumbnails="producto.thumbnails"
        />
    </div>
    <TheFooter />
</template>
