import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleUp} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"
import Contact from "./Contact";

interface IProps {
}

interface IState {
}

class Footer extends Component<IProps, IState> {

    render() {


        return (
            <footer className="footer footer-color">

                <div className="d-flex justify-content-center">
                    <ul className="social">
                        <li>
                            <a href="#about"><FontAwesomeIcon icon={faChevronCircleUp}/></a>
                        </li>
                    </ul>
                </div>

                <Contact/>

            </footer>
        );
    }
}

export default Footer;
