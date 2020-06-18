import React from 'react';
import ReactDOM from 'react-dom';
import AddMoodLog from './AddMoodLog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddMoodLog/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
