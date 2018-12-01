import React,{Fragment} from 'react';
import {getFunName} from '../helpers';
class StorePicker extends React.Component {
  // alternative to declaring custom functions as properties
  // can get verbose
  // constructor(){
  //   super();
  //   this.gotoStore = this.gotoStore.bind(this);

  // }
  input = React.createRef();
  gotoStore = event => {
    event.preventDefault();
    // console.log('stoooree');
    const storeName = this.input.value.value;
    this.props.history.push(`/store/${storeName}`);
  }
  componentDidMount(){
    // console.log('mounted');
  }
  render(){
    return (
      <Fragment>
        { /* foo bah baz */ }
        <form className="store-selector" onSubmit={this.gotoStore}>
          <h2> Please Enter A Store</h2>
          <input
            type="text"
            ref={this.input}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}/>
          <button type="submit">Visit Store →</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
