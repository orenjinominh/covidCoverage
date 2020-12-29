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

// const Chart = (props) => {


//   const [option, setOption] = useState([]);

//   console.log('chart props here', this.props);
//   let {id} = this.props;

//   useEffect(() => {

//     $.ajax({
//       url: `http://localhost:3000/${id}`,
//       success: (data) => {
//         setOption(data[0]);

//       },
//       error: (err) => {
//         console.log('err', err);
//       }
//     });

//   }, []);

//   return (
//     <div>
//       <Doughnut data={data} />
//     </div>

//   )


// }




class Chart extends React.Component {
  constructor(props) {
    super(props);
    // this.chartReference = React.createRef();
  }

  componentDidMount() {
    // console.log(this.chartReference); // returns a Chart.js instance reference
    console.log('donut state', this.props.selected);
  }

  render() {


    return (
      <div>
        <p>{this.props.selected}</p>
        <Doughnut data={data} />
      </div>

    )
  }
}

export default Chart;

