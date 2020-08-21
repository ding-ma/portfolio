import React, {Component} from 'react';
import Modal from "react-responsive-modal";
import {FormattedMessage} from "react-intl";
import Button from 'react-bootstrap/Button';
import IntlTextBox from "../translations/TextFieldTransalattion";
import IntlLabel from "../translations/InputTransalation";


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

        return (
            <section id="about">
                <div className="d-flex">
                    <div className="">
                        //image here
                    </div>
                    <div className="d-flex justify-content-center">
                        <h2><FormattedMessage id={"About"}/></h2>
                        <p><FormattedMessage id={"About.me"} values={{
                            techwear: <a href="https://www.grailed.com/drycleanonly/an-introduction-to-techwear"
                                         target="_blank" rel="noopener noreferrer"><i> techwear</i></a>
                        }}/></p>

                        <div className="">
                            <div className="">
                                <h2><FormattedMessage id={"About.contact"}/></h2>
                                <p className="address">
                                    <span>Ding Ma</span><br/>
                                    <span>
						         Montréal, Quebéc
                   </span><br/>
                                    <span>438-522-3139</span><br/>
                                    <span>ding.ma@mail.mcgill.ca</span>
                                </p>
                            </div>
                            <div className="">
                                <Button variant="secondary" className="button">
                                    <a href="https://mcgill-my.sharepoint.com/:b:/g/personal/ding_ma_mail_mcgill_ca/ES82qOpc0I1OkmsnucwAxA0BDsvpo_O5e-qOCzPbdsXtKw?e=akagpW"
                                       className="button" target="_blank" rel="noopener noreferrer">See PDF Resume</a>
                                </Button>
                                <div>
                                    <Button onClick={this.openOnModal}><FormattedMessage
                                        id={"About.button.contact"}/></Button>
                                    <Modal closeOnEsc={true} open={open} onClose={this.onCloseModal}
                                           showCloseIcon={false}
                                           closeOnOverlayClick={true} center={true}>
                                        <h2><FormattedMessage id={"About.button.contact"}/></h2>
                                        {renderForm(this.onCloseModal, handleNotification)}
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}


export default About;
