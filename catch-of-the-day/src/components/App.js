import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes : {},
    order:{}
  };
  addFish = fish => {
    console.log('adding a fish', fish);
    const fishes ={...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    // Object.assign({}, this.state.fishes, fish)
    this.setState({
      fishes: fishes
    });
  };
  loadSampleFishes = () => {
    console.log('loading samples');
    this.setState({fishes: sampleFishes});
  }
  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header
            tagline="Daily Fresh Cool Stuff"
          />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
