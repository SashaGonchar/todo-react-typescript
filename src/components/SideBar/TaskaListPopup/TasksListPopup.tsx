import React from 'react';
import {ReactComponent as CloseIcon} from "../../../assets/icons/close.svg";

export const AddListPopup = () => {
    return (<div className="add-list__popup">
        <CloseIcon className="add-list__popup-close-btn"/>
        <input className="field" type="text" placeholder="Название списка" value=""/>
        <div className="add-list__popup-colors">
            <i className="badge badge--grey active"></i>
            <i className="badge badge--green"></i>
            <i className="badge badge--blue"></i>
            <i className="badge badge--pink"></i>
            <i className="badge badge--lime"></i>
            <i className="badge badge--purple"></i>
            <i className="badge badge--black"></i>
            <i className="badge badge--red"></i>
        </div>
        <button className="button">Добавить</button>
    </div>);
};
