import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component{
  render(){
    return (
      <div className="inventory">Inventory
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

Inventory.propTypes = {
  addFish : PropTypes.func,
  loadSampleFishes: PropTypes.func
};

export default Inventory;
