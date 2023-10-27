import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./modalSave.module.scss";
import { AppContext } from "~/hook/context/AppContext";
const cx=classNames.bind(styles)
const ModalSaveCourse=()=>{
    const {handleModelSaveCourse}=useContext(AppContext)
    return (
        <div className={cx("modalSave")}>
            <h2>Thành công</h2>
            <div className={cx("buttonAddNew")}>
            
            <button onClick={handleModelSaveCourse} className={cx("buttonCal")}>OK</button>
          </div>
        </div>
    )
}
export default ModalSaveCourse;