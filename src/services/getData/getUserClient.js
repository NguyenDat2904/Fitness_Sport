import * as httpRequest from '../../uliti/htppRequest';

export const getUserClien = async (accessToken, refresh_token) => {
    try {
        const results = await httpRequest.get('/user/admin', {
            headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` },
        });
        return results;
    } catch (error) {
        console.log('not found !!!');
    }
};
export const getBenefit = async () => {
    try {
        const results = await httpRequest.get('/admin/benefit', {});
        return results;
    } catch (error) {
        console.log('not found !!!');
    }
};
export const getCourse = async () => {
    try {
        const results = await httpRequest.get('/admin/course?limit=30', {});
        return results;
    } catch (error) {
        console.log('not found !!!');
    }
};
export const getCourseDetail = async (id, accessToken, refresh_token) => {
    try {
        const result = await httpRequest.get(`/trainer/${id}`, {
            headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` },
        });
        return result;
    } catch (error) {
        console.log('not found !!!');
    }
};
export const getOrder = async (accessToken, refresh_token) => {
    try {
        const results = await httpRequest.get('/order', {
            headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` },
        });
        return results;
    } catch (error) {
        console.log('not found !!!');
    }
};
export const getLocation = async () => {
    try {
        const results = await httpRequest.get('/location?limit=100', {});
        return results;
    } catch (error) {
        console.log('not found !!!');
    }
};
export const getTrainer = async (refresh_token, accessToken) => {
    try {
        const result = await httpRequest.get('/trainer/admin', {
            headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` },
        });
        return result;
    } catch (error) {
        console.log('not found !!!');
    }
};
