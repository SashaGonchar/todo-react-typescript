import React from 'react';
import {ReactComponent as ListIcon} from '../../../assets/icons/list.svg';

export const AllTasksButton = () => {
    return (
        <li className="active" style={{marginBottom: "10px"}}>
            <ListIcon />
            <span className="list__item--left_indent">Все задачи</span>
        </li>
    );
};
