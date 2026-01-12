import api from "./axios";

export const getCart = () => api.get("/cart");
export const addToCart = (data) => api.post("/cart-add", data);
export const editCart = (data) => api.post("/cart/edit", data);
export const removeCart = (data) => api.post("/cart/delete", data);
