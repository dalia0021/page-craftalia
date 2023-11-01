<script setup>
import { reactive, ref, computed } from "vue";
import { useApi } from "@composables/useApi";
import { useUtils } from "@composables/useUtils";

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

const appApi = reactive(useApi());
const appUseUtils = reactive(useUtils());

const listAccesoriesKeychain = ref([]);
const  selectedKeychain = reactive({
    value:0,
    desc:""
});

const initComponents = () => {
    fetchListProducts();
};

const fetchListProducts = () => {
    listAccesoriesKeychain.value = appApi.getAccessoriesList().keychain;
    console.log(appApi.getAccessoriesList().keychain);
};

const setSelectedKeychain = (item) => {
    selectedKeychain.value = item.id
    selectedKeychain.desc = item.name
};

initComponents();
</script>

<template>
    <div class="row g-2 py-2">
        <p>{{ selectedKeychain.desc }}</p>
        <div
            v-for="(item, idx) in listAccesoriesKeychain"
            class="col-2"
            :key="idx"
        >
            <img
                @click="setSelectedKeychain(item)"
                :src="appUseUtils.getImgUrl(item.image)"
                class="rounded-circle img-fluid"
            />
        </div>
    </div>
</template>

<style></style>
