import React, { Component } from 'react';
import axios from 'axios';

class ThirdTier extends Component {
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
      <div className="third-tier">
        {this.state.data.map(employee => {
          return (
            <div className="card-container">
              <div className="card">{employee.name}</div>
              <div className="button" onClick={this.showTier} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ThirdTier;
