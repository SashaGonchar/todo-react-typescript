import React from "react";

export const NewTaskPopup = () => {
    return (
        <div className="tasks__form">
            <div className="tasks__form-block">
                <input className="field" type="text" placeholder="Текст задачи" value=""/>
                <button className="button">Добавить задачу</button>
                <button className="button button--grey">Отмена</button>
            </div>
        </div>
    )
}