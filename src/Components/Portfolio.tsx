import React, {Component} from 'react';
import aide from "../Images/AIDE.jpg"
import ecse223 from "../Images/ecse223.png"
import bird from "../Images/McGillBird.jpg"
import dataVerif from "../Images/dataVerif.png"
import scripts from "../Images/scripts.png"
import website from "../Images/website.jpg"
import {faExternalLinkAlt, faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Portfolio.css"
import {FormattedMessage} from "react-intl";
import {Carousel} from "react-bootstrap";

interface IProps {
}

interface IState {
}

class Portfolio extends Component<IProps, IState> {

    render() {

        function compare(el1: any, el2: any, index: string) {
            return el1[index] === el2[index] ? 0 : (el1[index] < el2[index] ? -1 : 1);
        }

        const projects: JSX.Element[] = [
            {
              "title":"Carousel.aide",
                "category":"Carousel.aide.description",
                "image": aide,
                "url":"https://github.com/ding-ma/Projet-tude-de-cas-en-Qualit-de-l-air"
            },
            {
                "title": "Carousel.Brick",
                "category": "Carousel.Brick.description",
                "image": ecse223,
                "url": "https://github.com/ding-ma/ECSE-223-Brick-Breaker"
            },
            {
                "title": "Carousel.Minerva",
                "category": "Carousel.Minerva.description",
                "image": bird,
                "url": "https://github.com/ding-ma/mcgill-autoregistration"
            },
            {
                "title": "Carousel.Scripts",
                "category": "Carousel.Scripts.descriptions",
                "image": scripts,
                "url": "https://github.com/ding-ma/Weather_Bulleting_Separator"
            },
            {
                "title": "Carousel.dataverif",
                "category": "Carousel.dataverif.description",
                "image": dataVerif,
                "url": "https://github.com/ding-ma/Data_Verification"
            },
            {
                "title": "Carousel.website",
                "category": "Carousel.website.description",
                "image": website,
                "url": "https://github.com/ding-ma/portfolio"
            }
        ].sort(function (el1, el2) {
                let compared = compare(el1, el2, "title");
                return compared === 0 ? -compare(el1, el2, "title") : compared;
            }
        ).map(function (project) {
            return (
                <Carousel.Item>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <img className="d-block w-100" alt="Carousel Bootstrap Item"
                             src={project.image}/>
                        <Carousel.Caption>
                            <FontAwesomeIcon
                                icon={faExternalLinkAlt}/>
                            <h4>
                                <FormattedMessage id={project.title}/>
                            </h4>
                            <p>
                                <FormattedMessage id={project.category}/>
                            </p>
                        </Carousel.Caption>
                    </a>
                </Carousel.Item>
            )
        });

        const next = <span className={"icon"}><FontAwesomeIcon size={"3x"} color={"#b0a200"} icon={faChevronRight}/> </span>
        const prev = <span><FontAwesomeIcon size={"3x"} color={"#b0a200"} icon={faChevronLeft}/></span>
        return (
            <section id="portfolio">
                    <Carousel nextIcon={next} prevIcon={prev}>
                        {projects}
                    </Carousel>
            </section>
        );
    }
}

export default Portfolio;
