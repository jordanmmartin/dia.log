import React, { Component } from 'react';
import { MyContext } from './UserProvider'
import {
  getFile,
  putFile
} from 'blockstack';
import { WEIGHT } from "../utils/constants";


class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      weights: []
    };
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

  async componentDidMount () {
    const response = await this.fetchData();
    this.setState({ weights: response })
    const userSession = this.context.state.currentUser.userSession;
    let oldWeights = this.state.weights;
    // let weights = [...oldWeights, this.state.weight]
    // console.log("weights", weights);
    console.log("oldWeights", oldWeights);
    // this.setState({ weights })
    userSession.putFile('weights.json', JSON.stringify(123), { encrypt: true })
  }


  componentWillMount() {
    const { steps } = this.props
    const { weight } = steps;
    this.setState({ weight });
  }

  render() {
    const { weight } = this.state;
    console.log(this.state.weights);
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
