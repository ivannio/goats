import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';

import GoatCorral from '../components/GoatCorral/GoatCorral';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeGoat = (goatId) => {
    goatData.freeAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    return (
      <div className="App">
        <button className="btn btn-outline-success">b o o t s t r a p - b u t t s</button>
        <GoatCorral butts={this.state.goats} freeGoat={this.freeGoat} />
      </div>
    );
  }
}

export default App;
