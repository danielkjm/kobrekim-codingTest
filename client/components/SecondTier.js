import React, { Component } from 'react';
import axios from 'axios';
import ThirdTier from './ThirdTier';

class SecondTier extends Component {
  constructor() {
    super();
    this.state = {
      tier2data: [],
      tier3data: [],
      vp: false,
      gm: false,
      0: false,
      1: false
    };
    this.tier = this.tier.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/secondTier');
    this.setState({ tier2data: data });
  }

  tier(manager) {
    let bool = this.state[manager];
    this.setState({ [manager]: !bool });
  }

  flipCard(card) {
    let bool = !this.state[card];
    this.setState({ [card]: bool });
  }

  render() {
    return (
      <div className="second-tier">
        {this.state.tier2data.map((employee, i) => {
          let title = employee.title === 'Vice President' ? 'vp' : 'gm';
          return (
            <div key={employee.name} className="card-container">
              <div
                className={this.state[i] ? 'card flipped' : 'card'}
                onClick={() => this.flipCard(i)}
              >
                <div className="card-front">
                  <div className="role">{employee.title}</div>
                  <img
                    className="avatar"
                    src={i === 0 ? '/avatars/stache.png' : '/avatars/lady.svg'}
                  />
                  {employee.name}
                </div>

                <div className="card-back">
                  <div className="back-info1">Email</div>
                  <div> {employee.email}</div>
                  <div className="back-info2">Office</div>
                  <div>{employee.office}</div>
                </div>
              </div>

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
