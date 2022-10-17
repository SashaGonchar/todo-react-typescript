import React, {FC} from 'react';
import {ReactComponent as CloseWithoutBg} from "../../../assets/icons/closeWithoutBg.svg";

export interface ITasksListItem {
    id: number;
    iconType: string;
    listName: string;
    listCount: number;
}

export const TasksListItem: FC<ITasksListItem> = (props) => {
    return (
        <li>
            <i className={`badge badge--${props.iconType}`}></i>
            <span>{props.listName} ({props.listCount})</span>
            <CloseWithoutBg/>
        </li>
    )
};
