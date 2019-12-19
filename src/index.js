import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HolaMundo from './Component/HolaMundo';
import Button from './Component/Button'; 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Aqui se encuentra toda la configuracion de nuestro proyecto, aqui estamos importando react y tambien react dom que
//es el encargado de manejar el virtual dom 