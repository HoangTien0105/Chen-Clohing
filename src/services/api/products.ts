import fakeProducts from "@/mocks/products";

const fetchProducts = async (): Promise<typeof fakeProducts> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(fakeProducts), 500); // Giả lập delay 500ms
    });
};