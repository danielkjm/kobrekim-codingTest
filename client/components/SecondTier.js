import React, { Component } from 'react';
import axios from 'axios';

class SecondTier extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/secondTier');
    this.setState({ data });
  }

  render() {
    return (
      <div className="second-tier">
        {this.state.data.map(employee => {
          return <div className="card"> {employee.name}</div>;
        })}
      </div>
    );
  }
}

export default SecondTier;
