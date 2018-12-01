// let's go!

import React from 'react';
import {render} from 'react-dom';
import './css/style.css';
import Router from './components/Router';
const main = document.querySelector('#main');
if (main !== null){
  render(<Router />, main);

}
