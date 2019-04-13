import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavBar extends Component {
  render () {
    return (
      <div>
      <h1 className="app-name">dia.log()</h1>
        <nav className="navigation">
          {this.props.userSession.isUserSignedIn() && <Link className="btn" to="/profile">Profile</Link>}
          {this.props.userSession.isUserSignedIn() && <button className="btn" onClick={this.props.handleLogOut}>logout</button>}
        </nav>
      </div>
    )
  }
}

export default withRouter(NavBar);
