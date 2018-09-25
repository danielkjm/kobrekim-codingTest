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
          <div className="card-container">
            <div className="card">{this.state.data.name}</div>
            <div
              className={this.state.show ? 'button-down up' : 'button-down'}
              onClick={this.showTier}
            />
          </div>
        }
        {this.state.show ? <SecondTier /> : null}
      </div>
    );
  }
}

export default FirstTier;
