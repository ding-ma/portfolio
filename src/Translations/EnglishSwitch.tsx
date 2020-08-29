import React from "react";
import {IntlContext} from "./IntlContext";

const EnglishSwitch = () => {
    const {switchToEnglish} = React.useContext(IntlContext);
    return (
        <li className={"nav-item"}>
            <a className="nav-link" onClick={switchToEnglish} href="# ">English</a>
        </li>
    );
};
export default EnglishSwitch;
