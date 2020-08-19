import React, {Component} from 'react';
import Modal from "react-responsive-modal";

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

        function renderForm(isOpen: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined, notification:any) {
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
                                          placeholder="What would you like to chat about? Can be anything..."/>
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

        return(
            <div className="About">

                <button onClick={this.openOnModal} className="button">Contact Me</button>
                <Modal open={open} onClose={this.onCloseModal} showCloseIcon={false}>
                    <h2>Contact Me</h2>
                    {renderForm(this.onCloseModal, handleNotification)}
                </Modal>
            </div>
        )
    }
}

export default About;