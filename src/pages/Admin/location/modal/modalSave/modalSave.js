import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./modalSave.module.scss";
import { AppContext } from "~/hook/context/AppContext";
const cx=classNames.bind(styles)
const ModalSaveLocation=()=>{
    const {handleSaveLocation}=useContext(AppContext)
    return (
        <div className={cx("modalSave")}>
            <h2>Thành công</h2>
            <div className={cx("buttonAddNew")}>
            
            <button onClick={handleSaveLocation} className={cx("buttonCal")}>OK</button>
          </div>
        </div>
    )
}
export default ModalSaveLocation;