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
  <div class="form-floating mb-3">
    <input
      v-model="value"
      type="text"
      class="form-control"
      id="floatingInput"
    />
    <label for="floatingInput">Diseño</label>
    <p class="text-sm text-muted">Indícanos que figura o personaje quieres</p>
  </div>
</template>

<style></style>
