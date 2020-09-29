import React, { useState } from "react";
import Select from "react-select";

import {stateHash} from '../stateHash.js';

const options = [...stateHash];

function StateInput() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="state-selector">
      <p>Please select a state from the dropdown below:</p>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isSearchable={true}
      />
    </div>
  );
}

export default StateInput;