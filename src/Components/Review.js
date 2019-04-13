import React, { Component } from 'react';
import { MyContext } from './UserProvider'
import {
  getFile,
  putFile
} from 'blockstack';


class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: 0
    };
  }


  componentWillMount() {
    const { steps } = this.props
    const { weight } = steps;

    this.setState({ weight });

  }

  render() {
    console.log("CONTEXT", this.context.state.currentUser);
    const { weight } = this.state;
    return (
     <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Weight</td>
              <td>{weight.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Review;
Review.contextType = MyContext
