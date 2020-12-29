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
        'White',
        'Black',
        'LatinX',
        'Asian',
        'NHPI',
        'Multiracial',
        'Others',
        'Unknown'
      ],
      datasets: [{
        data: [300, 50, 100, 50, 300, 200, 20, 10],
        backgroundColor: [
        '#AFB42B',
        '#F0F4C3',
        '#CDDC39',
        '#212121',
        '#FFEB3B',
        '#212121',
        '#757575',
        '#BDBDBD'
        ]
      }]
    }
  };

  // this.fetchDataByState = this.fetchDataByState.bind(this);

  fetchDataByState = (id) => {
    console.log('state here', id);

    return axios.get(`http://localhost:3000/chartByRace/${id}`
    )
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => this.fetchDataByState(this.state.selectedOption.label)
    );

    /* eventually: set this.state.data.datasets[0].data to be data pulled from ajax request to server */

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