import productsJson from "@assets/bd-productos.json"
import accesoriosJson from "@assets/bd-accesorios.json"

export const useApi = () => {
    const getKeychainsStyles = () => {
        return accesoriosJson.keychains
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
        getProductsList,
        getProductById
    };
};
