import React from "react";
import {ListName} from "./ListName/ListName";

import {TasksItemRow} from "./TasksItemRow/TasksItemRow";
import {NewTaskButton} from "./NewTaskButton/NewTaskButton";
import {NewTaskPopup} from "./NewTaskPopup/NewTaskPopup";

export const TasksGroup = () => {
    return (
        <div className="tasks">
            <ListName/>
            <div className="tasks__items">
                <TasksItemRow/>
                <TasksItemRow/>
                <NewTaskButton/>
                <NewTaskPopup/>
            </div>
        </div>
    )
}
