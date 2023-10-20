import axios from 'axios';
export const httpRequest = axios.create({
    baseURL: 'https://fitness-sport.onrender.com',
});
export const get = async (path, option = {}) => {
    const response = await httpRequest.get(path, option);
    return response;
};
export const post = async (path, option = {}) => {
    const response = await httpRequest.post(path, option);
    return response;
};
export const put = async (path, option = {}) => {
    const response = await httpRequest.put(path, option);
    return response;
};
export const detete = async (path, option = {}) => {
    const response = await httpRequest.delete(path, option);
    return response;
};
