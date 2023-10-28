<script setup>
import TheNavbar from "@components/TheNavbar.vue";
import BaseProductDetalle from "@components/BaseProductDetalle.vue";
import BaseProduct from "@components/BaseProduct.vue";
import TheFooter from "@components/TheFooter.vue";
import { useApi } from "@composables/useApi";
import { reactive, ref, computed } from "vue";

const appApi = reactive(useApi());

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const listProductos = ref([])
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
    producto.description = data.description;
    producto.size = data.size;
    producto.price = data.price;
    producto.featured = data.featured;
    producto.thumbnails = data.thumbnails;
    producto.characteristics = data.characteristics;
};

const fetchListProducts = () => {
    listProductos.value =  appApi.getProductsList()
}

const featuredProducts = computed(() => {
  return listProductos.value.filter((item) => item.featured == true)
})


fetchListProducts();

loadData();
</script>

<template>
    <TheNavbar />
    <div class="container p-5" style="margin-top: 122px">
        <BaseProductDetalle
            :image="producto.image"
            :category="producto.category"
            :name="producto.name"
            :description="producto.description"
            :size="producto.size"
            :price="producto.price"
            :featured="producto.featured"
            :thumbnails="producto.thumbnails"
            :characteristics="producto.characteristics"
        />
    </div>
    <TheFooter />
</template>
