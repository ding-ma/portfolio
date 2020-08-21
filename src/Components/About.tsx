import React, {Component} from 'react';
import Modal from "react-responsive-modal";
import profImg from '../Images/profilepic.jpg'
import {FormattedMessage} from "react-intl";
import Button from 'react-bootstrap/Button';



interface IProps{
    handleNotification: any
}

interface IState{
    isFormOpen: boolean
}

class About extends Component<IProps, IState>{

    constructor(props:IProps) {
        super(props);
        this.state = {
            isFormOpen:false
        }
    }

    openOnModal = () =>{
        this.setState({isFormOpen:true})
    }

    onCloseModal = () =>{
        this.setState({isFormOpen:false})
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
                                <input id="Field4" name="Field4" type="text"
                                       maxLength={255} tabIndex={0} placeholder="Name"/>
                            </li>

                            <li id="foli2" className="notranslate">
                                <input id="Field2" name="Field2" type="text" spellCheck="false"
                                       maxLength={255} tabIndex={0} placeholder="Email"/>

                            </li>

                            <li id="foli5" data-wufoo-field="" data-field-type="text">
                                <input id="Field5" name="Field5" type="text"
                                       maxLength={255} tabIndex={0}  placeholder="Subject"/>
                            </li>

                            <li id="foli1">
                                <textarea id="Field1"
                                          className="textAreaMultiline"
                                          name="Field1"
                                          spellCheck="true"
                                          rows={10} cols={75}
                                          tabIndex={0}
                                          placeholder="TODO"/>
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
        // <div className="About">
        //
        //     <button onClick={this.openOnModal} className="button">Contact Me</button>
        //     <Modal open={open} onClose={this.onCloseModal} showCloseIcon={false}>
        //         <h2>Contact Me</h2>
        //         {renderForm(this.onCloseModal, handleNotification)}
        //     </Modal>
        // </div>
        return(
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profImg} alt=""/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p><FormattedMessage id={"About.me"} values={{
                            techwear: <a href="https://www.grailed.com/drycleanonly/an-introduction-to-techwear"
                                         target="_blank" rel="noopener noreferrer"><i> techwear</i></a>
                        }} /></p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Ding Ma</span><br/>
                                    <span>
						         Montréal, Quebéc
                   </span><br/>
                                    <span>438-522-3139</span><br/>
                                    <span>ding.ma@mail.mcgill.ca</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <Button  variant="secondary" className="button">
                                    <a href="https://mcgill-my.sharepoint.com/:b:/g/personal/ding_ma_mail_mcgill_ca/ES82qOpc0I1OkmsnucwAxA0BDsvpo_O5e-qOCzPbdsXtKw?e=akagpW"
                                       className="button" target="_blank" rel="noopener noreferrer">See PDF Resume</a>
                                </Button>
                                <div>
                                    <Button onClick={this.openOnModal} className="button">Contact Me</Button>
                                    <Modal closeOnEsc={true} open={open} onClose={this.onCloseModal} showCloseIcon={false}
                                           closeOnOverlayClick={true} center={true}>
                                        <h2>Contact Me</h2>
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