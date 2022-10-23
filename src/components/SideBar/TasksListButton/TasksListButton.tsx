import React from 'react';
import {ReactComponent as AddIcon} from "../../../assets/icons/add.svg";

export const TasksListButton = () => {
    return (
        <li className="list__add-button">
            <AddIcon/>
            <span className="list__item--left_indent">Добавить список</span>
        </li>
    );
};