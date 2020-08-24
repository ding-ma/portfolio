import React, {Component} from 'react';
import "./Footer.css"
import Contact from "./Contact";

interface IProps {
}

interface IState {
}

class Footer extends Component<IProps, IState> {

    render() {


        return (
            <footer className="footer">

                <div className="d-flex justify-content-center">
                    <ul className="social">
                        <li>
                            <a href="#about">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-up"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M3.204 11L8 5.519 12.796 11H3.204zm-.753-.659l4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                <Contact/>

            </footer>
        );
    }
}

export default Footer;
