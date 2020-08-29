import React from "react";
import {IntlContext} from "./IntlContext";

const FrenchSwitch = () => {
    const {switchToFrench} = React.useContext(IntlContext);
    return (
        <li className={"nav-item"} >
            <a className="nav-link" onClick={switchToFrench} href="# ">Français</a>
        </li>
    );
};
export default FrenchSwitch;
