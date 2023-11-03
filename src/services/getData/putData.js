import * as httpRequest from "../../uliti/htppRequest";

export const putDataUser= async(
    name,age,phone,email,address,
    courseID,rank,benefitID,_id,accessToken,refresh_token)=>{
    try {
        const results= await httpRequest.put(`/user/put/${_id}`,{
            name,
            age,
            phone,
            email,
            address,
            courseID,
            rank,
            benefitID
           
        },{   headers:{'refresh_token':`${refresh_token}`,"authorization":`${accessToken}`}});
        return results;
    } catch (error) {
        console.log("not found !!!")
    }
}
export const putDataLocation= async(
    name,
    city,
    district,
    ward,
    street,
    img,
    desc,
    phone,
     times_days,idputLocation,accessToken,refresh_token)=>{
    try {
        const results= await httpRequest.put(`/location/put/${idputLocation}`,{
            name,
            city,
            district,
            ward,
            street,
            img,
            desc,
            phone,
             times_days
           
        },{   headers:{'refresh_token':`${refresh_token}`,"authorization":`${accessToken}`}});
        return results;
    } catch (error) {
        console.log("not found !!!")
    }
}

export const putDataBenefits=async(
    _id,name,rank,accessToken,refresh_token
)=>{
    try {
        const result=await httpRequest.put(`/admin/benefit/put/${_id}`,{
            name,rank
        },{   headers:{'refresh_token':`${refresh_token}`,"authorization":`${accessToken}`}})
        return result
    } catch (error) {
        console.log("not found !!!")
    }
}
export const putDataCourses=async(
   name,price,start,end,status,schedule,img,idPutCourse,loactionID,accessToken,refresh_token
)=>{
    try {
        const result=await httpRequest.put(`/admin/course/put/${idPutCourse}`,{
            name,price,start,end,status,schedule,img,loactionID,
        },{   headers:{'refresh_token':`${refresh_token}`,"authorization":`${accessToken}`}})
        return result
    } catch (error) {
        console.log("not found !!!")
    }
}