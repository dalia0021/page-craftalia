import productsJson from "@assets/bd-productos.json"

export const useApi = () => {
    const getProductsList = () => {
        return productsJson
    };

    const getProductById = (id) => {
        const product = productsJson.find((item) => item.id == id);
        return product
    };

    return {
        getProductsList,
        getProductById
    };
};
