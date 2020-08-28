import React, {Component} from 'react';
import 'react-notifications-component/dist/theme.css'
import ReactNotification, {store} from 'react-notifications-component'
import About from "./Components/About";
import Header from "./Components/Header";
import "./App.css"
import LanguageSwitch from "./Translations/LanguageSwitch";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";

interface IProps {

}

interface IState {
    locationOnPage: String
}

class App extends Component<IProps, IState> {

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
                duration: 5000,
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
              <button type="button" className="btn btn-dark fixed"><LanguageSwitch/></button>
              <Header/>
              <About handleNotification={this.handleNotificationSuccess}/>
              <Resume/>
              <Portfolio/>
              <Footer/>
          </div>
    )
  }
}

export default App;
