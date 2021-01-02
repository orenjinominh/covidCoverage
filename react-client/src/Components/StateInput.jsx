import React from "react";
import Select from "react-select";
const axios = require('axios');

import { Doughnut } from 'react-chartjs-2';

import {stateHash} from '../stateHash.js';
const options = [...stateHash];


class StateInput extends React.Component {

  state = {
    selectedOption: null,
    data: {
      labels: [
        'AIAN',
        'Asian',
        'Black',
        'LatinX',
        'Multiracial',
        'NHPI',
        'Other',
        'Unknown',
        'White'
      ],
      datasets: [{
        data: [100,100,100,100,100,100,100,100,100],
        backgroundColor: [
          '#cddbe7',
          '#9bb7d0',
          '#6993b8',
          '#456f93',
          '#2e4a62',
          '#294257',
          '#253a4e',
          '#203344',
          '#172531'
        ]
      }]
    }
  };


  fetchDataByState = (id) => {
    return axios.get(`http://localhost:3000/chartByRace/${id}`
    )
    .then(function (response) {
      // console.log('response data here', response.data);

      let stats = Object.values(response.data);

      let filterStats = (stats) => {
        for (var i = 0; i < stats.length; i++) {
          if (stats[i] === null) {
            stats[i] = 0;
          }
        }
        return stats;
      }

      let filtered = filterStats(stats);

      // console.log('filtered here', filtered);

      let newDonutState = {
        labels: [
          'White',
          'Black',
          'LatinX',
          'Asian',
          'AIAN',
          'NHPI',
          'Multiracial',
          'Others',
          'Unknown'
        ],
        datasets: [{
          data: filtered,
          backgroundColor: [
          '#cddbe7',
          '#9bb7d0',
          '#6993b8',
          '#456f93',
          '#2e4a62',
          '#294257',
          '#253a4e',
          '#203344',
          '#172531'
          ]
        }]
      }

      return newDonutState;
    })
    .then(newDonutState => this.setState({ data: newDonutState }))
    .catch(function (error) {
      console.log('error retrieving dataset for state', error);
    })
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => this.fetchDataByState(this.state.selectedOption.label)
    );

  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        <p> Racially specific data points that are not reported by each U.S. state will not render to the donut below. </p>
        <Doughnut data={this.state.data} />
      </div>

    );
  }
}

export default StateInput;