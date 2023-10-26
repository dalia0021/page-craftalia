<script setup>
defineProps({
    idItem: {
        type: String,
        default: "",
    },

    title: {
        type: String,
        default: "",
    },

});
</script>

<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse'+idItem"
                aria-expanded="false"
                :aria-controls="'collapse'+idItem"
            >
            <i class="bi bi-patch-question-fill text-lila"></i>&nbsp;  {{ title }}
            </button>
        </h2>
        <div
            :id="'collapse'+idItem"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
        >
            <div class="accordion-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style></style>
