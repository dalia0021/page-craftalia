<script setup>
import { computed } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

</script>

<template>
  <div v-for="(item, idx) in thumbnails" class="col-3" :key="idx">
    <img
      @click="setActive(idx)"
      :src="appUseUtils.getImgUrl(item)"
      data-bs-target="#carouselExample"
      :data-bs-slide-to="idx"
      class="rounded-circle img-fluid"
      :class="{
        'border border-lila-subtle border-4': idx === imageActive,
      }"
    />
  </div>
</template>

<style></style>
