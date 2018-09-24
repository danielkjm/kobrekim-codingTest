import React, { Component } from 'react';
import axios from 'axios';
import FirstTier from './FirstTier';
import SecondTier from './SecondTier';

class Main extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/chart');
    this.setState({ data });
  }

  render() {
    return (
      <div className="chart">
        <div className="title">Kobre&#38;Kim - The Team</div>
        <FirstTier />
      </div>
    );
  }
}

export default Main;
