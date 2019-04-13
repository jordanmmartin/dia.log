import React, { Component } from 'react';
import _ from 'lodash'
import { Switch, Route, Redirect } from 'react-router-dom'
import UserProvider from '../Components/UserProvider'
import ChatBot from '../Components/ChatBot';
import Profile from '../Components/Profile';

class Routes extends Component {
 state = { user: {} }

 componentDidMount() {
   const { userSession } = this.props

   const user = userSession.loadUserData()
   this.setState({ user })
 }

 render() {
   const { user } = this.state
   const { userSession } = this.props

   return (
     <UserProvider userSession={userSession}>
       <Switch>
         <Route
           exact
           path='/profile'
           render={() => <Profile />} 
         />
         <Route
           exact
           path='/chat'
           render={() =>  <ChatBot />}
         />
       </Switch>
     </UserProvider>
   );
 }
}
export default Routes;
