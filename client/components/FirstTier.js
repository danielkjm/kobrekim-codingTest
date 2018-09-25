import React, { Component } from 'react';
import axios from 'axios';
import SecondTier from './SecondTier';

class FirstTier extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      show: false,
      flip: false
    };
    this.showTier = this.showTier.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/president');
    this.setState({ data });
  }

  showTier() {
    let bool = this.state.show;
    this.setState({ show: !bool });
  }
  flipCard() {
    let bool = !this.state.flip;
    this.setState({ flip: bool });
  }

  render() {
    return (
      <div className="tier">
        {
          <div className="card-container">
            <div
              className={this.state.flip ? 'card flipped' : 'card'}
              onClick={this.flipCard}
            >
              <div className="card-front">
                <img className="avatar" src="/avatars/glasses.png" />
                {this.state.data.name}
              </div>
              <div className="card-back">
                <div className="back-info">Email</div>
                <div> {this.state.data.email}</div>
                <div className="back-info">Office</div>
                <div>{this.state.data.office}</div>
              </div>
            </div>
          </div>
        }
        <div
          className={this.state.show ? 'button-down up' : 'button-down'}
          onClick={this.showTier}
        />
        {this.state.show ? <SecondTier /> : null}
      </div>
    );
  }
}

export default FirstTier;
