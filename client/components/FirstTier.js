import React, { Component } from 'react';
import axios from 'axios';
import SecondTier from './SecondTier';

class FirstTier extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      show: false
    };
    this.showTier = this.showTier.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/president');
    this.setState({ data });
  }

  showTier() {
    let bool = this.state.show;
    this.setState({ show: !bool });
  }

  render() {
    return (
      <div className="tier">
        {
          <div className="card" onClick={this.showTier}>
            {this.state.data.name}
          </div>
        }
        {this.state.show ? (
          <div>
            <SecondTier />
          </div>
        ) : null}
      </div>
    );
  }
}

export default FirstTier;
