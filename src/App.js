import React, { Component } from 'react';
import './App.css';
import {appConfig} from './utils/constants';
import { UserSession } from 'blockstack';
import ChatBot from 'react-simple-chatbot';

class App extends Component {

  state = {
    userSession: new UserSession({appConfig})
  };

  componentDidMount = async () => {
   const { userSession } = this.state

   if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
     const userData = await userSession.handlePendingSignIn()

     if (!userData.username) {
       throw new Error('This app requires a username')
     }
     window.location = `/`
   }
 };

  handleLogIn = () => {
    const { userSession } = this.state
    userSession.redirectToSignIn();
  };

  handleLogOut = () => {
    const { userSession } = this.state
    userSession.signUserOut();
    window.location = '/'
  };

  render() {
    const steps = [
    {
      id: '0',
      message: 'Welcome to react chatbot!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Bye!',
      end: true,
    },
  ];
    const { userSession } = this.state
    return (
      <div className="App">
        <p>HELLO BLOCKSTACK</p>
        {
          userSession.isUserSignedIn() ?
          <button onClick={this.handleLogOut}> LOGOUT </button> : <button onClick={this.handleLogIn}> LOGIN </button>
        }
        <ChatBot steps={steps} />
      </div>
    );
  }
}

export default App;
