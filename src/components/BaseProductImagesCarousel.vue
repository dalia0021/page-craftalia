<script setup>
import { ref, reactive } from "vue";
import { useUtils } from "@composables/useUtils";

const props = defineProps({
  thumbnails: {
    type: Array,
    default: [],
  },
});

const appUseUtils = reactive(useUtils());
const imageActive = ref(0);

const setActive = (index) => {
  let active = index;

  if (index === props.thumbnails.length) active = 0;
  else if (index === -1) active = props.thumbnails.length - 1;

  imageActive.value = active;
};
</script>

<template>
  <div>
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div
          v-for="(item, idx) in thumbnails"
          class="carousel-item"
          :class="{ active: idx === 0 }"
          :key="idx"
        >
          <img
            :src="appUseUtils.getImgUrl(item)"
            class="rounded d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <div v-if="thumbnails.length > 1">
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          @click="setActive(imageActive - 1)"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          @click="setActive(imageActive + 1)"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div class="row g-3 py-4">
      <div v-for="(item, idx) in thumbnails" class="col-3" :key="idx">
        <img
          @click="setActive(idx)"
          :src="appUseUtils.getImgUrl(item)"
          data-bs-target="#carouselExample"
          :data-bs-slide-to="idx"
          class="rounded img-fluid"
          :class="{
            'border border-lila-subtle border-4': idx === imageActive,
          }"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
