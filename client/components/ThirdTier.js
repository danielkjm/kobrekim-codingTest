import React, { Component } from 'react';
import axios from 'axios';
import FourthTier from './FourthTier';

class ThirdTier extends Component {
  constructor() {
    super();
    this.state = {
      team: [],
      0: [false, false],
      1: [false, false],
      2: [false, false],
      3: [false, false],
      4: false
    };
    this.fourthTier = this.fourthTier.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  fourthTier(id) {
    console.log(id);
    console.log(this.state[id]);
    let first = this.state[id][0];
    let bool = !this.state[id][1];
    this.setState({ [id]: [first, bool] });
  }

  flipCard(card) {
    let otherBool = this.state[card][1];
    let bool = !this.state[card][0];
    this.setState({ [card]: [bool, otherBool] });
  }

  render() {
    return (
      <div className="team">
        {this.props.employee.manager.map((employee, i, array) => {
          return (
            <div key={employee.name} className="card-container">
              <div
                className={
                  this.state[i][0] ? 'card third flipped' : 'card third'
                }
                onClick={() => this.flipCard(i)}
              >
                <div className="card-front">
                  <div className="role">{employee.title}</div>
                  <img
                    className="avatar"
                    src={i === 0 ? '/avatars/mystery.png' : '/avatars/myst.png'}
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

              {employee.manager ? (
                <div
                  className={
                    this.state[i][1] ? 'button-down up' : 'button-down'
                  }
                  onClick={() => this.fourthTier(i)}
                />
              ) : null}

              {this.state[i][1] ? <FourthTier employee={employee} /> : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ThirdTier;
