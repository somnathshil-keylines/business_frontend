import api from "./axios";

export const loginApi = (data) => api.post("/login", data);
export const signupApi = (data) => api.post("/signup", data);
