import {ReactComponent as AddIcon} from "../../../../assets/icons/add.svg";
import React from "react";

export const NewTaskButton = () => {
    return (
        <div className="tasks__form">
            <div className="tasks__form-new">
                <AddIcon/>
                <span>Новая задача</span>
            </div>
        </div>
    )
}