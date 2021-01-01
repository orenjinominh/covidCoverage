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
        data: [300, 50, 100, 50, 300, 200, 20, 10, 10],
        backgroundColor: [
        '#AFB42B',
        '#F0F4C3',
        '#CDDC39',
        '#212121',
        '#FFEB3B',
        '#212121',
        '#757575',
        '#BDBDBD',
        '#4B8D3B'
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

      console.log('filtered here', filtered);
      
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
          '#AFB42B',
          '#F0F4C3',
          '#CDDC39',
          '#212121',
          '#FFEB3B',
          '#212121',
          '#757575',
          '#BDBDBD',
          '#4B8D3B'
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
        <Doughnut data={this.state.data} />
      </div>

    );
  }
}

export default StateInput;