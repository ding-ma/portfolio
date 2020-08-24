import React, {Component} from 'react';
import aide from "../Images/AIDE.jpg"
import ecse223 from "../Images/ecse223.png"
import bird from "../Images/McGillBird.jpg"
import dataVerif from "../Images/dataVerif.png"
import scripts from "../Images/scripts.png"
import website from "../Images/website.jpg"
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Portfolio.css"
import {FormattedMessage} from "react-intl";

interface IProps {
}

interface IState {
}

class Portfolio extends Component<IProps, IState> {

    render() {

        function compare(el1: any, el2: any, index: string) {
            return el1[index] === el2[index] ? 0 : (el1[index] < el2[index] ? -1 : 1);
        }

        //todo shrink and add some padding
        const projects: any[] = [
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
                <div className="carousel-item">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <img className="d-block w-100" alt="Carousel Bootstrap Item"
                             src={project.image}/>
                        <div className="carousel-caption">
                            <FontAwesomeIcon
                                icon={faExternalLinkAlt}/>
                            <h4>
                                <FormattedMessage id={project.title}/>
                            </h4>
                            <p>
                                <FormattedMessage id={project.category}/>
                            </p>
                        </div>
                    </a>
                </div>
            )
        });
        return (
            <section id="portfolio">

                <div className={"container"}>
                    <div className="col-md-6 offset-md-2">
                        <h1><FormattedMessage id={"Projects"}/></h1>
                    </div>

                    <div className="container-fluid">
                        <div className="carousel slide" id="carousel-644408">
                            <ol className="carousel-indicators">
                                <li data-slide-to="0" data-target="#carousel-644408" className="active"/>
                                <li/>
                                <li/>
                                <li/>
                                <li/>
                                <li/>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <a href={"https://github.com/ding-ma/Projet-tude-de-cas-en-Qualit-de-l-air"}
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        <img className="d-block w-100" alt="Carousel Bootstrap First"
                                             src={aide}/>
                                        <div className="carousel-caption">
                                            <FontAwesomeIcon
                                                icon={faExternalLinkAlt}/>
                                            <h4>
                                                <FormattedMessage id={"Carousel.active"}/>
                                            </h4>
                                            <p>
                                                <FormattedMessage id={"Carousel.active.description"}/>
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                {projects}
                            </div>

                            <a className="carousel-control-prev" href="#carousel-644408" data-slide="prev">
                                <span className="carousel-control-prev-icon"/>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-644408" data-slide="next">
                                <span className="carousel-control-next-icon"/>
                                <span className="sr-only">Next</span>
                            </a>

                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Portfolio;
