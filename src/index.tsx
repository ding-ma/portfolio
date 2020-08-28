import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import {IntlProviderWrapper} from "./Translations/IntlContext";

ReactDOM.render(
    <React.StrictMode>
        <IntlProviderWrapper>
            <App/>
        </IntlProviderWrapper>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
