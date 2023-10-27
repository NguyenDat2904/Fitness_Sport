import * as httpRequest from '../../uliti/htppRequest';

export const getUserData= async(email,password)=>{
    try {
        const results= await httpRequest.post("/auth/login",{
            email,
            password
        });
        console.log(results)
        return results;
    } catch (error) {
        console.log("not found !!!")
    }
}
export const logOut=async(id)=>{
    try {
        const result =await httpRequest.patch(`/auth/logout/${id}`,{})
        return result
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
