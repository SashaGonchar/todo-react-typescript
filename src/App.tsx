import React from "react";

import {SideBar} from "./components/SideBar/SideBar";
import {Main} from "./components/Main/Main";

export const App = () => {
    return (
        <div className="todo">
            <SideBar/>
            <Main/>
        </div>
    )
}