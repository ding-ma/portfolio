import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";

interface IProps {
}

interface IState {
}

class Resume extends Component<IProps, IState> {
    
    
    render() {
        
        const works: JSX.Element[] = [
            {
                "company": "Intact",
                "title": "Intact.title",
                "location": "Montréal, Québec",
                "years": "Intact.dates",
                "description": "Intact.description"
            },
            {
                "company": "Desjardins",
                "title": "Desjardins.title",
                "location": "Montréal, Québec",
                "years": "Desjardins.dates",
                "description": "Desjardins.description"
            },
            {
                "company": "Eccc",
                "title": "Eccc.title",
                "location": "Montréal, Québec",
                "years": "Eccc.dates",
                "description": "Eccc.description"
            }
        ].map(function (work) {
            return (<div key={work.title}><h4><FormattedMessage id={work.title}/></h4>
                <p><FormattedMessage id={work.company}/><span> &bull; </span>
                    <em className="date"><FormattedMessage id={work.years}/></em><br/>
                    <em className="date">{work.location}</em>
                </p>
                <p><FormattedMessage id={work.description}/></p>
            </div>)
        });
        
        const skills: JSX.Element[] = [
            "Python (Pandas, openCV, NumPy, Matplotlib, Selenium)",
            "Git, Github",
            "Atlassian tools (Jira, Bitbucket, Confluence)",
            "CI/CD (Github Actions, TravisCI, Jenkins)",
            "Docker and Kubernetes",
            "Java (Spring Framework)",
            "C",
            "Bash",
            "Unix/Linux",
            "Cloud Services (Azure, GCP, Firebase, Heroku)",
            "JavaScript & TypeScript (React, Puppeteer, Node.js)"
        ].sort().map(function (skill) {
            return <ul key={skill}>{skill}</ul>
        });
        
        const education: JSX.Element[] = [{
            "school": "Mcgill",
            "degree": "Mcgill.degree",
            "graduated": "Mcgill.dates",
            "location": "Montréal, Québec",
            "description": [
                "Mcgill.description.pt1",
                "Mcgill.description.pt2"
            ]
        },
            {
                "school": "Heritage",
                "degree": "Heritage.degree",
                "graduated": "Heritage.dates",
                "location": "Gatineau, Québec",
                "description": [
                    "Heritage.description"
                ]
            }].map(function (education) {
            function renderList(d: any[]) {
                const items = d.map((a) => <li key={a}><FormattedMessage id={a}/></li>);
                return <div>
                    {items}
                </div>
            }
            
            return (
                <div key={education.school}><h4><FormattedMessage id={education.school}/></h4>
                    <p className="info"><FormattedMessage id={education.degree}/><span>&bull;</span>
                        <em className="date"><FormattedMessage id={education.graduated}/></em><br/>
                        <em className="date">{education.location}</em>
                    </p>
                    {renderList(education.description)}
                    &nbsp;
                </div>
            )
        });
        
        return (
            <section id="resume">
                <div className={"container-fluid"}>
                    
                    <div className="row">
                        <div className="col-md-3 offset-md-3">
                            <h1><FormattedMessage id={"Education"}/></h1>
                        </div>
                        <div className="col-md-4 offset-md-4">
                            <div className="">
                                {education}
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="row">
                        <div className="col-md-3 offset-md-3">
                            <h1><span><FormattedMessage id={"Internship"}/></span></h1>
                        </div>
                        <div className="col-md-4 offset-md-4">
                            {works}
                        </div>
                    </div>
                    
                    
                    <div className="row">
                        <div className="col-md-3 offset-md-3">
                            <h1><span><FormattedMessage id={"Education"}/></span></h1>
                        </div>
                        
                        <div className="col-md-4 offset-md-4">
                            <p><FormattedMessage id={"TechStack"}/></p>
                            <ul>
                                {skills}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
