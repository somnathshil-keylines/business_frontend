import api from "./axios";

export const addWishlist = (data) => api.post("/wishlist-add", data);
export const getWishlist = () => api.get("/wishlist");
export const removeWishlist = (data) => api.post("/wishlist/remove", data);
