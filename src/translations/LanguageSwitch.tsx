import React from "react";
import {IntlContext} from "./IntlContext";

const LanguageSwitch = () => {
    const {switchToEnglish, switchToFrench} = React.useContext(IntlContext);
    return (
        <div>
            <a className="nav-item nav-link" onClick={switchToEnglish} href={"#"}>English</a>
            <a className="nav-item nav-link" onClick={switchToFrench} href={"#"}>French</a>
        </div>
    );
};
export default LanguageSwitch;
