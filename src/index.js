import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './accueil.css';
import './enfant.css'
import './epicerie.css'
import App from './App';


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

