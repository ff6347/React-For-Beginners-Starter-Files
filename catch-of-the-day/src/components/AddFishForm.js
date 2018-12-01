import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component{
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    event.preventDefault();
    console.log('\'didn\'t submit');
    const fish = {
      name : this.nameRef.value.value,
      price : parseFloat(this.priceRef.value.value),
      status : this.statusRef.value.value,
      desc : this.descRef.value.value,
      image : this.imageRef.value.value,
    };
    this.props.addFish(fish);
    event.currentTarget.reset();
  }
  render(){
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="price" />
        <select name="status" ref={this.statusRef}  >
          <option value="available">Is available</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
        <button type="submit">+ Add Fish</button>
      </form>);
  }
}
AddFishForm.propTypes = {
  addFish: PropTypes.func
};
export default AddFishForm;
