import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/counter'
import App from './app'

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <h1>Hello World</h1>;
root.render(<App/>);