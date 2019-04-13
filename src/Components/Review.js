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
    const { weight } = this.state;
    console.log('CONEXT', MyContext);
    return (
      <MyContext.Consumer>
      { (state) => (<div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Weight</td>
              <td>{weight.value}</td>
            </tr>
          </tbody>
        </table>
      </div>)}
      </MyContext.Consumer>
    );
  }
}

export default Review;
