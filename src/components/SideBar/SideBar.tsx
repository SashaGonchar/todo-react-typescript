import React from "react";
import {AllTasksButton} from "./AllTasksButton/AllTasksButton";
import {ITasksListItem, TasksListItem} from "./TasksListItem/TasksListItem";
import {TasksListButton} from "./TasksListButton/TasksListButton";
import {AddListPopup} from "./TasksListPopup/TasksListPopup";

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
                <TasksListButton/>
            </ul>

            <div className="add-list">
                <AddListPopup/>
            </div>
        </div>
    )
}

