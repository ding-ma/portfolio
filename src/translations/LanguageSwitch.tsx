import React from "react";
import {IntlContext} from "./IntlContext";

const LanguageSwitch = () => {
    const {switchToEnglish, switchToFrench} = React.useContext(IntlContext);
    return (
        <div>
            <a className="nav-item nav-link" onClick={switchToEnglish}>English</a>
            <a className="nav-item nav-link" onClick={switchToFrench}>French</a>
        </div>
    );
};
export default LanguageSwitch;
