import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../helpers';

class Fish extends React.Component{
  addToCart = ()=>{
    const {name,} = this.props.details;
    console.log(`add ${name} to cart`);
  }
  render(){
    const {image, name, price, desc, status} = this.props.details;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        {/*<span role="img" aria-label="Fish emoji">🐠</span>*/}
        <img src={image} alt={name} />
        <h3 className="fish-name">{name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.addToCart}>Add to Cart</button>
      </li>
    );
  }
}
Fish.propTypes= {
  details : PropTypes.object
};

export default Fish;
