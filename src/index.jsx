import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Counter from './Counter.jsx';

const rootElemnt = document.querySelector('#root');

ReactDOM.render(<Counter />, rootElemnt);
