import React, {Component} from 'react';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

interface IState {

}

interface IProps {

}

class Contact extends Component<IProps, IState> {

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
            },
            {
                "name": "email",
                "url": "mailto:ding.ma@mail.mcgill.ca",
                "icon": faEnvelope
            }
        ].map(function (network) {
            return <li key={network.name}><a href={network.url} target="_blank"
                                             rel="noopener noreferrer"><FontAwesomeIcon
                icon={network.icon}/></a>
            </li>;
        });

        return (
            <div className="d-flex justify-content-center">
                <ul className="social">
                    {networks}
                </ul>
            </div>
        )
    }
}

export default Contact;
