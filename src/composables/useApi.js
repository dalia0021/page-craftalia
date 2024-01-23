import productsCustomJson from "@assets/bd-productos-custom.json"
import productsJson from "@assets/bd-productos.json"
import accesoriosJson from "@assets/bd-accesorios.json"

export const useApi = () => {
    const getKeychainsStyles = () => {
        return accesoriosJson.keychains
    };

    const getProductsCustomList = () => {
        return productsCustomJson
    };

    const getProductCustomById = (id) => {
        const product = productsCustomJson.find((item) => item.id == id);
        return product
    };

    const getProductsList = () => {
        return productsJson
    };

    const getProductById = (id) => {
        const product = productsJson.find((item) => item.id == id);
        return product
    };

    return {
        getKeychainsStyles,
        getProductsCustomList,
        getProductCustomById,
        getProductsList,
        getProductById
    };
};
