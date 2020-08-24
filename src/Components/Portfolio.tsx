import React, {Component} from 'react';
import aide from "../Images/AIDE.jpg"
import ecse223 from "../Images/ecse223.png"
import bird from "../Images/McGillBird.jpg"
import dataVerif from "../Images/dataVerif.png"
import scripts from "../Images/scripts.png"
import website from "../Images/website.jpg"

interface IProps {
}

interface IState {
}

class Portfolio extends Component<IProps, IState> {

    render() {

        function compare(el1: any, el2: any, index: string) {
            return el1[index] === el2[index] ? 0 : (el1[index] < el2[index] ? -1 : 1);
        }

        const projects: any[] = [
            {
                "title": "AIDE - GUI tool",
                "category": "Built during my S19 intern",
                "image": aide,
                "url": "https://github.com/ding-ma/Projet-tude-de-cas-en-Qualit-de-l-air"
            },
            {
                "title": "Brick Breaker",
                "category": "Class project: model-based programming",
                "image": ecse223,
                "url": "https://github.com/ding-ma/ECSE-223-Brick-Breaker"
            },
            {
                "title": "Minerva Auto-Registration",
                "category": "Registers automatically to classes with Puppeteer and GCP",
                "image": bird,
                "url": "https://github.com/ding-ma/mcgill-autoregistration"
            },
            {
                "title": "Miscellaneous Scripts",
                "category": "Small form built during my S19 intern to help my life",
                "image": scripts,
                "url": "https://github.com/ding-ma/Weather_Bulleting_Separator"
            },
            {
                "title": "Data Verification",
                "category": "Script that analyzes weather data and highlights important information",
                "image": dataVerif,
                "url": "https://github.com/ding-ma/Data_Verification"
            },
            {
                "title": "This Website",
                "category": "Built in React.js. Simple. Responsive website.",
                "image": website,
                "url": "https://github.com/ding-ma/portfolio"
            }
        ].sort(function (el1, el2) {
                let compared = compare(el1, el2, "title");
                return compared === 0 ? -compare(el1, el2, "title") : compared;
            }
        ).map(function (project) {
            return (
                <div key={project.title} className="">
                    <a href={project.url} target="_blank">
                        <div className="">
                            <img alt={project.title} src={project.image}/>
                            <div className="">
                                <div className="">
                                    <h5>{project.title}</h5>
                                    <p>{project.category}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            )
        });

        return (
            <section id="portfolio">

                <div className={"container-fluid"}>
                    <div className="row">
                        <div className="col-md-3 offset-md-4">
                            <h1>Check Out Some of My Works.</h1>
                            <div id="portfolio-wrapper" className="">
                                {projects}
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        );
    }
}

export default Portfolio;
