<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },

  subTitle: {
    type: String,
    default: "",
  },

  bgColor: {
    type: String,
    default: "bg-crema",
  },
  fluid: {
    type: Boolean,
    default: false,
  }
});
</script>

<template>
  <section :class="bgColor">
    <div class="py-5" :class="[fluid ? 'container-fluid' : 'container']">
      <div class="text-center" v-if="title != '' && subTitle != ''">
        <h1 class="text-cafe">{{ title }}</h1>
        <h6>
          <i>{{ subTitle }}</i>
        </h6>
      </div>
      <div class="py-5">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<style></style>
