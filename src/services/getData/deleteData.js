import * as httpRequest from "../../uliti/htppRequest";

export const deleteDataUser= async(id,accessToken,refresh_token)=>{
    try {
        const results= await httpRequest.detete(`/user/admin/delete/${id}`,{headers:{'refresh_token':`${refresh_token}`,"authorization":`${accessToken}`}});
        return results;
    } catch (error) {
        console.log("not found !!!")
    }
}
export const deleteDataOrder= async(id,accessToken,refresh_token)=>{
    try {
        const results= await httpRequest.detete(`/order/delete/${id}`,{headers:{'refresh_token':`${refresh_token}`,"authorization":`${accessToken}`}});
        return results;
    } catch (error) {
        console.log("not found !!!")
    }
}
export const deleteDataCourse= async(id,accessToken,refresh_token)=>{
    try {
        const results= await httpRequest.detete(`/admin/course/delete/${id}`,{headers:{'refresh_token':`${refresh_token}`,"authorization":`${accessToken}`}});
        return results;
    } catch (error) {
        console.log("not found !!!")
    }
}
export const deleteDataLocation= async(id,accessToken,refresh_token)=>{
    try {
        const results= await httpRequest.detete(`/location/delete/${id}`,{headers:{'refresh_token':`${refresh_token}`,"authorization":`${accessToken}`}});
        return results;
    } catch (error) {
        console.log("not found !!!")
    }
}
export const deleteDataBenefit= async(id,accessToken)=>{
    try {
        const results= await httpRequest.detete(`/admin/benefit/delete/${id}`,{headers:{"authorization":`${accessToken}`}});
        return results;
    } catch (error) {
        console.log("not found !!!")
    }
}