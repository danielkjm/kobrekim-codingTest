import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/chart');
    console.log(data);
    this.setState({ data });
  }

  render() {
    return (
      <div className="chart">
        {this.state.data.map(el => {
          return <div>{el.name}</div>;
        })}
      </div>
    );
  }
}

export default Main;
