import React from "react";
import {AllTasksButton} from "./AllTasksButton/AllTasksButton";
import {ITasksListItem, TasksListItem} from "./TasksListItem/TasksListItem";
import {ReactComponent as CloseIcon} from '../../assets/icons/close.svg';
import {ReactComponent as CloseWithoutBg} from '../../assets/icons/closeWithoutBg.svg';
import {ReactComponent as AddIcon} from '../../assets/icons/add.svg';

export function SideBar() {
    const testListsData: ITasksListItem[] = [
        {
            id: 1,
            iconType: "black",
            listName: "List 1",
            listCount: 1
        },
        {
            id: 2,
            iconType: "blue",
            listName: "List 2",
            listCount: 10
        }
    ]


    return (
        <div className="todo__sidebar">
            <ul className="list">
                <AllTasksButton/>

                {testListsData.map(({id, iconType, listName, listCount}: ITasksListItem) => (
                    <TasksListItem key={id} id={id} iconType={iconType} listName={listName} listCount={listCount}/>
                ))}

                <li className="list__add-button">
                    <AddIcon/>
                    <span className="list__item--left_indent">Добавить список</span>
                </li>

            </ul>

            <div className="add-list">
                <div className="add-list__popup">
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
                </div>
            </div>
        </div>
    )
}

