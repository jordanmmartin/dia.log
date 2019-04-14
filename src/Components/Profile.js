import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './UserProvider'

export default class Profile extends Component {
  state = {
    weights: []
  }
  fetchData = () => {
    const userSession = this.context.state.currentUser.userSession;
    userSession.getFile('weights.json', {decrypt: true})
    .then((file) => {
      let weights = JSON.parse(file || '[]');
      console.log(weights);
      this.setState({ weights })
    })
  }

  componentDidMount () {
    this.fetchData()
  }

  render () {
    console.log(this.props.user);
    return (
      <div className="user-profile">
        <div>
          <p className="centered">{this.props.user.profile && `Hello ${this.props.user.profile.name}!`}</p>
          <p className="centered">{this.state.weights ? `Your last weigh in was ${this.state.weights}lbs.` : `You don't have a previous weigh-in.`}</p>
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

Profile.contextType = MyContext
