import { post } from "./Axios";
export const signup = async (data) => {
    return await post("signup", data);
}

export const login = async (data) => {
    return await post("login", data);
}