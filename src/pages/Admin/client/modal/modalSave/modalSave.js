import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./modalSave.module.scss";
import { AppContext } from "~/hook/context/AppContext";
const cx=classNames.bind(styles)
const ModalSave=()=>{
    const {handleModelSave}=useContext(AppContext)
    return (
        <div className={cx("modalSave")}>
            <h2>Bạn đã sửa thông tin khách hàng thành công</h2>
            <div className={cx("buttonAddNew")}>
            
            <button onClick={handleModelSave} className={cx("buttonCal")}>OK</button>
          </div>
        </div>
    )
}
export default ModalSave;