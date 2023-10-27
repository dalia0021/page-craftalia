import productsJson from "@assets/bd-productos.json"

export const useApi = () => {
    const getListProducts = () => {
        return productsJson
    };

    return {
        getListProducts,
    };
};
