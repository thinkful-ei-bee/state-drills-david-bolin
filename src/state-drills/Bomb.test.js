import React from 'react';
import ReactDOM from 'react-dom';
import Bomb from './Bomb';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bomb />, div);
  ReactDOM.unmountComponentAtNode(div);
});
