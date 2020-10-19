import React from 'react';

import StateInput from '../components/StateInput.jsx';

// should contain stateInput dropdown and update state by value
// renders chart or error message upon state change of dropdown

function ChartByRace() {


  return (
    <div>
      <h4>Racial Breakdown By State</h4>
      <StateInput></StateInput>
    </div>
  )
}

export default ChartByRace;