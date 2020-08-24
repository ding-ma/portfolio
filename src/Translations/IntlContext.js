import React from "react";
import { IntlProvider } from "react-intl";

import en_local from "./en.json"
import fr_local from "./fr.json"


const Context = React.createContext();

class IntlProviderWrapper extends React.Component {
    constructor(...args) {
        super(...args);

        this.switchToEnglish = () =>
            this.setState({ locale: "en", messages: en_local });

        this.switchToFrench = () =>
            this.setState({ locale: "fr", messages: fr_local });

        // pass everything in state to avoid creating object inside render method (like explained in the documentation)
        this.state = {
            locale: "en",
            messages: en_local,
            switchToEnglish: this.switchToEnglish,
            switchToFrench: this.switchToFrench
        };
    }

    render() {
        const { children } = this.props;
        const { locale, messages } = this.state;
        return (
            <Context.Provider value={this.state}>
                <IntlProvider
                    key={locale}
                    locale={locale}
                    messages={messages}
                    defaultLocale="en"
                >
                    {children}
                </IntlProvider>
            </Context.Provider>
        );
    }
}

export { IntlProviderWrapper, Context as IntlContext };
