import React, { Component } from 'react';

export default class Profile extends Component {

  render () {
    const { user } = this.props
    console.log(this.props.user.profile);
    return (
      <div>
        {user.profile && `Hello, ${user.profile.name}!`}
      </div>
    )
  }
}
