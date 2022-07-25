import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {Clscom} from './Clscom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App contentdata="some data from the props!"/>
  </React.StrictMode>
);

// ReactDOM.render(<App contentdata="some other data, changed from previous props!">Some children data from the functional component</App>, document.getElementById('data2'))
// ReactDOM.render(<Clscom classdata="Some data from the class component" newcomponent="some new class component data">Some data from the other children</Clscom>,document.getElementById("Clscom"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
