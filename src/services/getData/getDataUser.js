import * as httpRequest from "../../uliti/htppRequest";

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
        console.log("not found !!!")
    }
}