import * as httpRequest from '../../uliti/htppRequest';

export const getCourse = async () => {
    try {
        const results = await httpRequest.get('/admin/course', {});
        return results.data;
    } catch (error) {
        console.log('not found !!!');
    }
};
