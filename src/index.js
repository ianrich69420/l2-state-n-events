import React from 'react';
import ReactDOM from 'react-dom/client';
import { CountDown } from './components/CountDown';
import CountMiddle from './components/CountMiddle';
import CountUp from './components/CountUp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {<div>
         <CountUp/>
      <CountDown/>
      <CountMiddle/> 
      </div>}
  </React.StrictMode>
);

