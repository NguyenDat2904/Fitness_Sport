import axios from 'axios';
export const httpRequest = axios.create({
    baseURL: 'https://fitness-sport.onrender.com',
});
export const get = async (path, option = {}) => {
    const response = await httpRequest.get(path, option);
    return response;
};
export const post = async (path, option = {}) => {
    try {
        const response = await httpRequest.post(path, option);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('Lỗi:', error.response.status);
            console.error('Thông tin lỗi:', error.response.data);
        } else if (error.request) {
            console.error('Không nhận được phản hồi từ máy chủ.');
        } else {
            console.error('Lỗi:', error.message);
        }
        return error.response;
    }
};
export const put = async (path, option = {}) => {
    const response = await httpRequest.put(path, option);
    return response;
};
export const remove = async (path, option = {}) => {
    const response = await httpRequest.delete(path, option);
    return response;
};
