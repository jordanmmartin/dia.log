import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavBar extends Component {
  render () {
    return (
        <div>
          {this.props.userSession.isUserSignedIn() && <Link to="/profile">Profile</Link>}
          {this.props.userSession.isUserSignedIn() && <button className="login-button" onClick={this.props.handleLogOut}>logout</button>}
        </div>
    )
  }
}

export default withRouter(NavBar);
