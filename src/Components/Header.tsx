import React, {Component} from 'react';
import Typed from 'react-typed';
import { FormattedMessage } from 'react-intl';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faArrowAltCircleDown} from '@fortawesome/free-regular-svg-icons'
import './Header.css'

interface IProps {
}

interface IState {
}

class Header extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    render() {

        const networks = [
            {
                "name": "linkedin",
                "url": "https://www.linkedin.com/in/ding--ma/",
                "icon": faLinkedinIn
            },
            {
                "name": "github",
                "url": "https://github.com/ding-ma",
                "icon": faGithubSquare
            }
        ].map(function (network) {
            return <li key={network.name}><a href={network.url} target="_blank"><FontAwesomeIcon icon={network.icon}/></a>
            </li>;
        });

        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">
                            <FormattedMessage id="header.about"/>
                        </a></li>
                        <li><a className="smoothscroll" href="#resume">
                            <FormattedMessage id="header.resume"/>
                        </a></li>
                        <li><a className="smoothscroll" href="#portfolio">
                            <FormattedMessage id="header.portfolio"/>
                        </a></li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
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
                        <hr/>
                        <h3><FormattedMessage id="header.introduction" values={{province: <i>belle province</i>}}/></h3>
                        <hr/>
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><FontAwesomeIcon icon={faArrowAltCircleDown}/></a>
                </p>

            </header>
        )
    }
}

export default Header;