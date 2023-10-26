export const useUtils = () => {
    const getImgUrl = (image) => {
        const imageUrl = new URL(`/src/assets/${image}`, import.meta.url);
        return imageUrl;
    };

    return {
        getImgUrl,
    };
};
