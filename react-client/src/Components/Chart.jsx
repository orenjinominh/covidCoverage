import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

const data = {
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
};

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
  }

  // componentDidMount() {
  //   console.log(this.chartReference); // returns a Chart.js instance reference
  // }

  render() {
    console.log('donut state', this.props.selectedOption);
    <h2>Deaths By Race Per State</h2>
    return (
      <Doughnut data={data} />
    )
  }
}



export default Chart;