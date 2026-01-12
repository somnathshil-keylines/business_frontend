import api from "./axios";

export const placeOrder = (data) => api.post("/orders-add", data);
export const myOrders = () => api.get("/orders");
