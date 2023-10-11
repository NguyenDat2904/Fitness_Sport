import * as httpRequest from "../../uliti/htppRequest";

export const getUserData= async()=>{
    try {
        const results= await httpRequest.get("/user/admin",{});
        return results.data;
    } catch (error) {
        console.log("not found !!!")
    }
}