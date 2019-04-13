import React, { Component } from 'react';
import './App.css';
import {appConfig} from './utils/constants';
import { UserSession } from 'blockstack';
import Routes from "./Pages/Routes";
import NavBar from "./Components/NavBar"

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
     window.location = `/profile`
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
    const { userSession } = this.state;
    return (
      <div className="App">
      <NavBar handleLogOut={this.handleLogOut} userSession={userSession}/>
        {
          userSession.isUserSignedIn() ?
          <Routes userSession={userSession}/>
          : <div className="sign-in-container"><button className="btn" onClick={this.handleLogIn}>login</button></div>
        }
        {userSession.isUserSignedIn()}
      </div>
    );
  }
}

export default App;
