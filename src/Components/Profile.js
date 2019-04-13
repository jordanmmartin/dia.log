import React, { Component } from 'react';

export default class Profile extends Component {

  render () {
    const { user } = this.props
    console.log(this.props.user.profile);
    return (
      <div className="user-profile">
        <div>
          <p className="your-lessons">Your lessons</p>
          <p className="lesson">Eating Well to Prevent Type 2 Diabetes</p><button className="secondary-button">Enter Lesson</button>
        </div>
      </div>
    )
  }
}
