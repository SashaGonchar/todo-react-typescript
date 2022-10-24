import React from "react";
import {ReactComponent as EditIcon} from "../../../../assets/icons/edit.svg";

export const ListName = () => {
    return (
            <a className="tasks__title_wrapper tasks__items-row" href="/lists/1">
                <i className="badge badge--black tasks__title_color"></i>
                <h2 className="tasks__title">Продажи</h2>

                <div className="tasks__items-row-actions">
                    <div>
                        <EditIcon/>
                    </div>
                </div>
            </a>
    )
}

