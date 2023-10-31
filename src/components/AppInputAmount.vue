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

const restCantidad = () => {
  if (value.value == 0) return;

  value.value = value.value - 1;
};

const sumCantidad = () => {
  if (value.value == 10) return;
  value.value = value.value + 1;
};
</script>

<template>
  <div class="input-group mb-3">
    <button @click="restCantidad()" class="btn btn-light border" type="button">
      <i class="bi bi-dash-lg"></i>
    </button>

    <div class="form-floating">
      <input type="text" class="form-control mx-auto" v-model="value" />
      <label>Cantidad</label>
    </div>
    <button @click="sumCantidad()" class="btn btn-light border" type="button">
      <i class="bi bi-plus-lg"></i>
    </button>
  </div>
</template>

<style></style>
