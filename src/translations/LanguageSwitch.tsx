import React from "react";
import {IntlContext} from "./IntlContext";

const LanguageSwitch = () => {
    const {switchToEnglish, switchToFrench} = React.useContext(IntlContext);
    return (
        <div>
            <button onClick={switchToEnglish}>English</button>
            <button onClick={switchToFrench}>French</button>
        </div>
    );
};
export default LanguageSwitch;
