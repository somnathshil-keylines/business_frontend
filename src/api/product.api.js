import api from "./axios";

export const getProducts = () => api.get("/products");
export const getProductDetails = (id) => api.get(`/products/${id}`);
export const addProduct = (data) => api.post("/product-add", data);
