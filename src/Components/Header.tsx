import React, {Component} from 'react';
import Typed from 'react-typed';
import {FormattedMessage} from 'react-intl';
import "./Header.css"
import Contact from "./Contact";
import EnglishSwitch from "../Translations/EnglishSwitch";
import FrenchSwitch from "../Translations/FrenchSwitch";


interface IProps {
}

interface IState {
}


class Header extends Component<IProps, IState> {

    render() {

        return (

            <header id="home" className={"fullscreen"}>

                <nav className="navbar navbar-expand-lg navbar-light bg-lighter fixed-top">

                    <button className="navbar-toggler bg-lighter" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse bg-lighter" id="navbarNavAltMarkup">
                        <ul className="nav navbar-nav mr-auto">
                            <a className="nav-link active" href="#home">Home <span
                                className="sr-only">(current)</span></a>

                            <a className="nav-item nav-link" href="#about"><FormattedMessage
                                id="header.about"/></a>
                            <a className="nav-item nav-link" href="#resume"><FormattedMessage id="header.resume"/></a>
                            <a className="nav-item nav-link" href="#portfolio"><FormattedMessage id="header.portfolio"/></a>
                            <ul className={"nav navbar-nav"}>
                                <EnglishSwitch/>
                                <FrenchSwitch/>
                            </ul>

                        </ul>

                    </div>
                </nav>

                <div className={"navbarPadding"}/>
                <div className="d-flex justify-content-center ">
                    <h1 className="responsive-headline">
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
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-auto centerText">
                            <FormattedMessage id="header.introduction" values={{province: <i>belle province</i>}}/>
                        </div>
                    </div>

                </div>
                <hr/>
                <div className={"navbarPadding"}/>

                <Contact/>


                <div className="d-flex justify-content-center">
                    <ul className="social">
                        <li><a href="#about">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                            </svg>
                        </a>
                        </li>
                    </ul>
                </div>
            </header>

        )
    }
}

export default Header;
