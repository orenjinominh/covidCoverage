import React, { Component } from 'react';
import USAMap from "react-usa-map";
import ReactDOM from 'react-dom';

class App extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  render() {
    return (
      <div className="App">
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));