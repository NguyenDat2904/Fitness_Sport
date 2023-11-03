import * as httpRequest from '../../uliti/htppRequest';

export const postDataCourse = async (
    idLocation,
    name,
    price,
    start,
    end,
    status,
    schedule,
    img,
    accessToken,
    refresh_token,
) => {
    try {
        const results = await httpRequest.post(
            '/admin/course/post',
            {
                name: name,
                price: price,
                start: start,
                end: end,
                status: status,
                schedule: schedule,
                locationID: idLocation,
                img: img,
            },
            { headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` } },
        );
        return results;
    } catch (error) {
        console.log('not found !!!');
    }
};

export const postDataLocation = async (
    name,
    city,
    district,
    ward,
    street,
    phone,
    img,
    desc,
    times_days,
    accessToken,
    refresh_token,
) => {
    try {
        const result = await httpRequest.post(
            '/location/post',
            {
                name,
                city,
                district,
                ward,
                street,
                phone,
                desc,
                img,
                times_days,
            },
            { headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` } },
        );
        return result;
    } catch (error) {
        console.log('not found location !!!');
    }
};
export const postDataBenefit = async (name, rank, accessToken, refresh_token) => {
    try {
        const result = await httpRequest.post(
            '/admin/benefit/post',
            {
                name,
                rank,
            },
            { headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` } },
        );
        return result;
    } catch (error) {
        console.log('not found benefits !!!');
    }
};
