import React, {Component} from 'react';
import Typed from 'react-typed';
import {FormattedMessage} from 'react-intl';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faChevronCircleDown} from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
import {IntlContext, IntlProviderWrapper} from "../translations/IntlContext";
import LanguageSwitch from "../translations/LanguageSwitch";

interface IProps {
}

interface IState {
}

class Header extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    render() {

        const networks: JSX.Element[] = [
            {
                "name": "linkedin",
                "url": "https://www.linkedin.com/in/ding--ma/",
                "icon": faLinkedin
            },
            {
                "name": "github",
                "url": "https://github.com/ding-ma",
                "icon": faGithub
            }
        ].map(function (network) {
            return <li key={network.name}><a href={network.url} target="_blank"><FontAwesomeIcon
                icon={network.icon}/></a>
            </li>;
        });


        return (

            <header id="home">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#home">Home <span
                                className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#about"><FormattedMessage id="header.about"/></a>
                            <a className="nav-item nav-link" href="#resume"><FormattedMessage id="header.resume"/></a>
                            <a className="nav-item nav-link" href="#portfolio"><FormattedMessage id="header.portfolio"/></a>
                        </div>
                    </div>
                </nav>

                <div className="row">
                    <div className="col-10 d-flex justify-content-center">

                    <h1 className="responsive-headline" >
                            <Typed
                                strings={[
                                    'Hi, I\'m',
                                    'Bonjour, je suis',
                                    '你好, 我是'
                                ]}
                                typeSpeed={80}
                                backSpeed={50}
                                showCursor={false}
                                loop
                            /> Ding<span className="yellowText">.</span></h1>
                    </div>
                    <hr/>
                    <div className="col-10 d-flex">
                        <h3 ><FormattedMessage id="header.introduction" values={{province: <i>belle province</i>}}/></h3>
                    </div>
                        <hr/>
                    <div className="col-10 d-flex justify-content-center">
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>

                </div>

                <div className="col-10 d-flex justify-content-center">
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><FontAwesomeIcon icon={faChevronCircleDown}/></a>
                </p>
                </div>

            </header>

        )
    }
}

export default Header;