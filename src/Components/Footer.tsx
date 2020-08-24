import React, {Component} from 'react';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleUp} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"

interface IProps {
}

interface IState {
}

class Footer extends Component<IProps, IState> {

    render() {
        const networks = [
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
            return <li key={network.name}><a href={network.url} target="_blank">
                <FontAwesomeIcon
                    icon={network.icon}/>
            </a>
            </li>
        });

        return (
            <footer className="footer footer-color">

                <div className="d-flex justify-content-center">
                    <ul className="social">
                        <li>
                            <a href="#about"><FontAwesomeIcon icon={faChevronCircleUp}/></a>
                        </li>
                    </ul>
                </div>

                <div className="d-flex justify-content-center">
                    <ul className="social">
                        {networks}
                    </ul>
                </div>

            </footer>
        );
    }
}

export default Footer;
