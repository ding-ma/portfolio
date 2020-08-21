import React, {Component} from 'react';
import 'react-notifications-component/dist/theme.css'
import ReactNotification, {store} from 'react-notifications-component'
import About from "./Components/About";
import Header from "./Components/Header";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";

interface IProps{

}

interface IState{
    locationOnPage:String
}

class App extends Component<IProps, IState>{

    handleNotificationSuccess = () => {
        store.addNotification({
            title: 'Email Sent!',
            message: 'I will contact you as soon as possible!',
            type: 'success',
            container: 'top-right',
            insert: 'bottom',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeout'],
            dismiss: {
                duration: 7000,
                showIcon: true,
                pauseOnHover: true
            },
            width: 300
        })
    };


  render() {

      return(
        <div className="App">
            <ReactNotification/>
            <Header/>
            <About handleNotification={this.handleNotificationSuccess}/>
        </div>
    )
  }
}

export default App;
