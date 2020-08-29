import React, {Component} from 'react';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {injectIntl} from 'react-intl'


interface IProps {
    intl:any
}

interface IState {
}

class Contact extends Component<IProps, IState> {

    render() {
        const networks: JSX.Element[] = [
            {
                "name": "linkedin",
                "url": "LinkedIn",
                "icon": faLinkedin
            },
            {
                "name": "github",
                "url": "Github",
                "icon": faGithub
            },
            {
                "name": "email",
                "url": "Email",
                "icon": faEnvelope
            }
        ].map((network) => {
            return (
                <li key={network.name}>
                    <a href={this.props.intl.formatMessage({id: network.url})} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={network.icon}/>
                    </a>
                </li>
            )
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

export default injectIntl(Contact);
