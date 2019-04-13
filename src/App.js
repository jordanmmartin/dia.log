import React, { Component } from 'react';
import './App.css';
import {appConfig} from './utils/constants';
import { UserSession } from 'blockstack';
import ChatBot from './Components/ChatBot'

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
    const { userSession } = this.state
    return (
      <div className="App">
        <p>HELLO BLOCKSTACK</p>
        {
          userSession.isUserSignedIn() ?
          <button onClick={this.handleLogOut}> LOGOUT </button> : <button onClick={this.handleLogIn}> LOGIN </button>
        }
        {userSession.isUserSignedIn() && <ChatBot />}
      </div>
    );
  }
}

export default App;
