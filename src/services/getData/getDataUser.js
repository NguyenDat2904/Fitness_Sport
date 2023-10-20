import * as httpRequest from '../../uliti/htppRequest';

export const getUserData = async () => {
    try {
        const results = await httpRequest.get('/user/admin', {});
        return results.data;
    } catch (error) {
        console.log('not found !!!');
    }
};

export const getLocationData = async (city, district) => {
    try {
        const results = await httpRequest.get(`/location?city=${city}&district=${district}`, {});
        return results.data.locations;
    } catch (error) {
        console.error(error);
    }
};

export const getLocationDataById = async (id) => {
    try {
        const results = await httpRequest.get(`/location?${id}`, {});
        return results.data.locations;
    } catch (error) {
        console.error(error);
    }
};
