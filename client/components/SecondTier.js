import React, { Component } from 'react';
import axios from 'axios';
import ThirdTier from './ThirdTier';

class SecondTier extends Component {
  constructor() {
    super();
    this.state = { tier2data: [], tier3data: [], vp: false, gm: false };
    this.tier = this.tier.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/secondTier');
    this.setState({ tier2data: data });
  }

  tier(manager) {
    let bool = this.state[manager];
    this.setState({ [manager]: !bool });
  }

  render() {
    return (
      <div className="second-tier">
        {this.state.tier2data.map(employee => {
          let title = employee.title === 'Vice President' ? 'vp' : 'gm';
          return (
            <div key={employee.name} className="card-container">
              <div className="card">{employee.name}</div>
              <div
                className={this.state[title] ? 'button-down up' : 'button-down'}
                onClick={() => this.tier(title)}
              />
              {this.state[title] ? <ThirdTier employee={employee} /> : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default SecondTier;
