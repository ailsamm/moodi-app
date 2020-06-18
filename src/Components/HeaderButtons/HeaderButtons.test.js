import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom';
import HeaderButtons from './HeaderButtons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><HeaderButtons/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});