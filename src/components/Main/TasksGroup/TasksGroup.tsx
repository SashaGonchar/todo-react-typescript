import React from "react";
import {ListName} from "./ListName/ListName";
import {TasksWrapper} from "./TasksWrapper/TasksWrapper";

export const TasksGroup = () => {
    return (
        <div className="tasks">
            <ListName/>
            <TasksWrapper/>
        </div>
    )
}