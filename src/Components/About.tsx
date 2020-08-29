import React, {Component} from 'react';

import Modal from "react-responsive-modal";
import {FormattedMessage} from "react-intl";
import Button from 'react-bootstrap/Button';
import profile from "../Images/profilepic.jpg"
import "./About.css"
import IntlLabel from "../Translations/InputTranslation";

interface IProps {
    handleNotificationSuccess: any
    handleNotificationFailure: any
}

interface IState {
    isFormOpen: boolean
    name: string
    email: string
    subject: string
    msg: string
}

declare type eventType = { target: { value: string; }; }

class About extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            isFormOpen: false,
            name: "",
            email: "",
            subject: "",
            msg: ""
        };
        this.handleName = this.handleName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleSubject = this.handleSubject.bind(this)
        this.handleMsg = this.handleMsg.bind(this)
        this.contactMe = this.contactMe.bind(this)
    }

    openOnModal = () => {
        this.setState({isFormOpen: true})
    }

    onCloseModal = () => {
        this.setState({isFormOpen: false})
    }

    handleName(event: eventType) {
        this.setState({name: event.target.value})
    }

    handleEmail(event: eventType) {
        this.setState({email: event.target.value})
    }

    handleSubject(event: eventType) {
        this.setState({subject: event.target.value})
    }

    handleMsg(event: eventType) {
        this.setState({msg: event.target.value})
    }

    render() {
        const renderForm = () => {
            return (
                    <form noValidate={true} id={"contact"}>
                        <div className="form-group">
                            <h2><FormattedMessage id={"About.button.contact"}/></h2>
                            <IntlLabel labelId={"Name"} labelName={"Name"} placeholderId={"Form.name"}
                                       onchange={this.handleName} isBox={false}/>
                        </div>

                        <div className="form-group">
                            <IntlLabel labelId={"Email"} labelName={"Email"} placeholderId={"Form.email"}
                                       onchange={this.handleEmail} isBox={false}/>
                        </div>

                        <div className="form-group">
                            <IntlLabel labelId={"Subject"} labelName={"Subject"} placeholderId={"Form.subject"}
                                       onchange={this.handleSubject} isBox={false}/>
                        </div>

                        <div className="form-group">
                            <IntlLabel labelId={"Message"} labelName={"Message"} placeholderId={"Form.message"}
                                       onchange={this.handleMsg} isBox={true}/>
                        </div>

                        <div className="form-group">
                            <Button variant="secondary" className="button"
                                    onClick={this.contactMe}> Contact! </Button>
                        </div>
                    </form>
            )
        }

        return (
            <section id="about">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <img className="profile-pic" src={profile} alt=""/>
                    </div>

                    <div className="row">
                        <div className="col-md-3 offset-md-3">
                            <h2><FormattedMessage id={"About"}/></h2>
                        </div>
                        <div className="col-md-4 offset-md-4">
                            <p className={"center"}><FormattedMessage id={"About.me"} values={{
                                techwear: <a href="https://www.grailed.com/drycleanonly/an-introduction-to-techwear"
                                             target="_blank" rel="noopener noreferrer"><i> techwear</i></a>
                            }}/></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3 offset-md-3">
                            <h2><FormattedMessage id={"About.contact"}/></h2>
                        </div>
                        <div className="col-sm-5 offset-md-4">
                            <div className="row">
                                <div className="col-4 col-sm-6">
                                    <p className="address">
                                        <span>Ding Ma</span><br/>
                                        <span>
						         Montréal, Quebéc
                                </span><br/>
                                        <span>438-522-3139</span><br/>
                                        <span>ding.ma@mail.mcgill.ca</span>
                                    </p>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-4">
                                        <Button variant="secondary" className="button">
                                            <a href="https://mcgill-my.sharepoint.com/:b:/g/personal/ding_ma_mail_mcgill_ca/ES82qOpc0I1OkmsnucwAxA0BDsvpo_O5e-qOCzPbdsXtKw?e=akagpW"
                                               className="no-link" target="_blank" rel="noopener noreferrer">
                                                <FormattedMessage id={"About.button.resume"}/></a>
                                        </Button>
                                    </div>
                                    <div className="col-4">
                                        <Button variant="secondary" className="button" onClick={this.openOnModal}
                                                id={"contact"}>
                                            <FormattedMessage id={"About.button.contact"}/></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal closeOnEsc={true} open={this.state.isFormOpen} onClose={this.onCloseModal}
                       showCloseIcon={true}
                       closeOnOverlayClick={true} center={true}>
                    {renderForm()}
                </Modal>
            </section>
        )
    }

    contactMe() {
        console.log(JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            msg: this.state.msg
        }))
        fetch("https://us-central1-portfolio-ding.cloudfunctions.net/contactMe", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": this.state.name,
                "subject": this.state.subject,
                "message": this.state.msg,
                "email": this.state.email
            })
        }).then(resp => {
            this.onCloseModal();
            console.log(resp)
            if (resp.status === 200) {
                console.log("Success")
                this.props.handleNotificationSuccess()
            } else {
                console.log("Failure")
                this.props.handleNotificationFailure()
            }
        })
    }
}


export default About;
