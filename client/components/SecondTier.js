import React, { Component } from 'react';
import axios from 'axios';

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
    console.log(manager);
    this.setState({ [manager]: !bool });
    console.log(this.state.vp);
  }

  render() {
    return (
      <div className="second-tier">
        {this.state.tier2data.map(employee => {
          let title = employee.title === 'Vice President' ? 'vp' : 'gm';
          return (
            <div className="card-container">
              <div className="card">{employee.name}</div>
              <div className="button" onClick={() => this.tier(title)} />
              {this.state[title] ? (
                <div className="team">
                  {employee.manager.map(employee => {
                    return <div className="card">{employee.name}</div>;
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default SecondTier;
