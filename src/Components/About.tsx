import React, {Component} from 'react';
import Modal from "react-responsive-modal";
import {FormattedMessage} from "react-intl";
import Button from 'react-bootstrap/Button';
import IntlTextBox from "../translations/TextFieldTransalattion";
import IntlLabel from "../translations/InputTransalation";
import profile from "../Images/profilepic.jpg"
import "./About.css"

interface IProps {
    handleNotification: any

}

interface IState {
    isFormOpen: boolean
}

class About extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            isFormOpen: false
        }
    }

    openOnModal = () => {
        this.setState({isFormOpen: true})
    }

    onCloseModal = () => {
        this.setState({isFormOpen: false})
    }

    render() {
        const open = this.state.isFormOpen
        const handleNotification = this.props

        const renderForm = (isOpen: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined, notification: any) => {
            //mXve9YwHNaBnKLA9/3TzwVMOQYK+l03anPJsAL+lnUg=
            return (


                <div id="container">

                    <form
                        id="form2"
                        name="form2"
                        acceptCharset="UTF-8"
                        autoComplete="off"
                        target="_blank"
                        encType="multipart/form-data"
                        method="post"
                        noValidate
                        action="https://dingma.wufoo.com/forms/ma5u4611pc2t7b/#public"
                        onSubmit={isOpen}
                    >
                        <ul>
                            <li className="hide">
                                <input type="hidden" id="idstamp" name="idstamp"
                                       value="mXve9YwHNaBnKLA9/3TzwVMOQYK+l03anPJsAL+lnUg="/>
                            </li>

                            <li id="foli4" data-wufoo-field="" data-field-type="text">
                                <IntlLabel labelId={"Field4"} labelName={"Field4"} placeholderId={"Form.name"}/>
                            </li>

                            <li id="foli2" className="notranslate">
                                <IntlLabel labelId={"Field2"} labelName={"Field2"} placeholderId={"Form.email"}/>
                            </li>

                            <li id="foli5" data-wufoo-field="" data-field-type="text">
                                <IntlLabel labelId={"Field5"} labelName={"Field5"} placeholderId={"Form.subject"}/>
                            </li>


                            <li id="foli1">
                                <IntlTextBox labelId={"Field1"} labelName={"Field1"} placeholderId={"Form.message"}/>
                            </li>

                            <li className="buttons ">
                                <input id="saveForm" name="saveForm"
                                       type="submit" value="Submit" onClick={notification}/>
                            </li>

                        </ul>
                    </form>
                </div>
            )
        }

        /*
             <div className="col-8 col-sm-6">


                                </div>

         */
        return (
            <section id="about">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <img className="profile-pic" src={profile} alt=""/>
                    </div>

                    <div className="row">
                        <div className="col-md-3 offset-md-4">
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
                        <div className="col-sm-5 offset-md-4">
                            <h2><FormattedMessage id={"About.contact"}/></h2>

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
                                        <Button variant="secondary" className="button" onClick={this.openOnModal}>
                                            <FormattedMessage id={"About.button.contact"}/></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal closeOnEsc={true} open={open} onClose={this.onCloseModal}
                       showCloseIcon={false}
                       closeOnOverlayClick={true} center={true}>
                    <h2><FormattedMessage id={"About.button.contact"}/></h2>
                    {renderForm(this.onCloseModal, handleNotification)}
                </Modal>
            </section>

        )
    }
}


export default About;
