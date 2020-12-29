import React from "react";
import Select from "react-select";
import $ from 'jquery';
import {stateHash} from '../stateHash.js';
import Chart from '../Components/Chart.jsx';

const options = [...stateHash];

class StateInput extends React.Component {

  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
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
        <Chart />
      </div>

    );
  }
}

export default StateInput;