import React, { Component } from 'react';
import axios from 'axios';
import SecondTier from './SecondTier';

class FourthTier extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.employee.manager.map(member => {
          return <div className="card">{member.name}</div>;
        })}
      </div>
    );
  }
}

export default FourthTier;
