import React,{useEffect} from "react";
import * as apiUser from '~/services/getData/getUserClient';
import classNames from "classnames/bind";
import styles from "./coach.module.scss";
const cx=classNames.bind(styles)
const Coach=()=>{
    useEffect(() => {
        const callApi = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const refresh_token = localStorage.getItem('refresh_token');
            const trainer=await apiUser.getTrainer(accessToken,refresh_token);
            console.log(trainer)
        } catch (error) {
            console.log('error Api Admin');
        }
    };
        callApi();
    }, []);
    return (
        <div className={cx("coach")}>

        </div>
    )
}
export default Coach;