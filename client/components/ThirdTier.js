import React, { Component } from 'react';
import axios from 'axios';
import FourthTier from './FourthTier';
class ThirdTier extends Component {
  constructor() {
    super();
    this.state = {
      team: [],
      0: false,
      1: false,
      2: false,
      3: false,
      4: false
    };
  }
  fourthTier(id) {
    let bool = this.state[id];
    this.setState({ [id]: !bool });
  }

  render() {
    return (
      <div className="team">
        {this.props.employee.manager.map((employee, i, array) => {
          return (
            <div key={employee.name} className="card-container">
              <div className="card">
                {' '}
                <img
                  className="avatar"
                  src={i === 0 ? '/avatars/mystery.png' : '/avatars/myst.png'}
                />
                {employee.name}
              </div>
              {employee.manager ? (
                <div
                  className={this.state[i] ? 'button-down up' : 'button-down'}
                  onClick={() => this.fourthTier(i)}
                />
              ) : null}
              {this.state[i] ? <FourthTier employee={employee} /> : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ThirdTier;
