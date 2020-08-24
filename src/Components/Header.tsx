import React, {Component} from 'react';
import Typed from 'react-typed';
import {FormattedMessage} from 'react-intl';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleDown} from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
import Contact from "./Contact";


interface IProps {
}

interface IState {
}


class Header extends Component<IProps, IState> {

    render() {

        return (
            <header id="home" className={"fullscreen"}>

                <nav className="navbar navbar-expand-lg navbar-light bg-lighter fixed-top">

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#home">Home <span
                                className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#about"><FormattedMessage
                                id="header.about"/></a>
                            <a className="nav-item nav-link" href="#resume"><FormattedMessage id="header.resume"/></a>
                            <a className="nav-item nav-link" href="#portfolio"><FormattedMessage id="header.portfolio"/></a>
                        </div>
                    </div>
                </nav>

                <div className={"navbarPadding"}/>
                <div className="d-flex justify-content-center ">
                    <h1 className="responsive-headline ">
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
                        <li><a href="#about"><FontAwesomeIcon icon={faChevronCircleDown}/></a>
                        </li>
                    </ul>
                </div>
            </header>

        )
    }
}

export default Header;
