import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends Component {

  render () {
    const { user } = this.props
    console.log(this.props.user.profile);
    return (
      <div className="user-profile">
        <div>
          <p className="your-lessons">Your lessons</p>
          <p className="lesson">Eating Well to Prevent Type 2 Diabetes</p>
          <Link to='/chat'>
            <button className="secondary-button">Enter Lesson</button>
          </Link>
        </div>
      </div>
    )
  }
}
