<script setup>
defineProps({
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
});
</script>

<template>
    <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-9 text-center">
        <div class="card border-light shadow h-100">
            <img :src="image" class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <p class="mb-2">
                        {{ name }}<br />
                        <small>{{ size }} cm</small>
                    </p>
                </div>
                <div>
                    <p>
                        <b>${{ price }} <small>mxn</small></b>
                    </p>
                    <a href="#" class="btn btn-lila btn-sm w-100">Añadir al carrito</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
