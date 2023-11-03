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
    id:0,
    name:""
});

const initComponents = () => {
    fetchListProducts();
};

const fetchListProducts = () => {
    listAccesoriesKeychain.value = appApi.getAccessoriesList().keychain;

    selectedKeychain.id = listAccesoriesKeychain.value[0].id
    selectedKeychain.name = listAccesoriesKeychain.value[0].name
};

const setSelectedKeychain = (item) => {
    selectedKeychain.id = item.id
    selectedKeychain.name = item.name
};

initComponents();
</script>

<template>
    <div class="row g-2 py-2">
        <p><b>Estilo: </b>{{ selectedKeychain.name }}</p>
        <div
            v-for="(item, idx) in listAccesoriesKeychain"
            class="col-2"
            :key="idx"
        >
            <img
                @click="setSelectedKeychain(item)"
                :src="appUseUtils.getImgUrl(item.image)"
                class="rounded-circle img-fluid"
                :class="{
                    'border border-lila-subtle border-4': item.id === selectedKeychain.id,
                }"
            />
        </div>
    </div>
</template>

<style></style>
