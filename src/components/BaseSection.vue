<script setup>
defineProps({
    title:{
        type: String,
        default: ""
    },

    subTitle:{
        type: String,
        default: ""
    },

    bgColor:{
        type: String,
        default: "bg-crema"
    }    
})

</script>

<template>
    <section :class="bgColor">
        <div class="container py-5">
            <div class="text-center" v-if="title != '' && subTitle != ''">
                <h1 class="text-cafe">{{ title }}</h1>
                <h6><i>{{ subTitle }}</i></h6>
            </div>
            <div class="py-5">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<style>

</style>
