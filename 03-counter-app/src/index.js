import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';

const divRoot = document.querySelector('#root');  

ReactDOM.render( <CounterApp value={ 0 } />  , divRoot );