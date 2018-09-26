import React, { Component } from 'react';
import axios from 'axios';
import SecondTier from './SecondTier';

class FourthTier extends Component {
  constructor() {
    super();
    this.state = {
      0: false,
      1: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false
    };
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard(card) {
    let bool = !this.state[card];
    this.setState({ [card]: bool });
  }

  render() {
    return (
      <div>
        {this.props.employee.manager.map((member, i) => {
          return (
            <div
              key={member.name}
              className={this.state[i] ? 'card third flipped' : 'card third'}
              onClick={() => this.flipCard(i)}
            >
              <div className="card-front">
                <div className="role">{member.title}</div>
                <img
                  className="avatar"
                  src={
                    i % 2 === 0 ? '/avatars/mystery.png' : '/avatars/myst.png'
                  }
                />
                {member.name}
              </div>

              <div className="card-back">
                <div className="back-info1">Email</div>
                <div> {member.email}</div>
                <div className="back-info2">Office</div>
                <div>{member.office}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FourthTier;
