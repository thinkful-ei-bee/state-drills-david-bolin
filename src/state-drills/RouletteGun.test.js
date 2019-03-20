import React from 'react';
import ReactDOM from 'react-dom';
import RouletteGun from './RouletteGun';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RouletteGun />, div);
  ReactDOM.unmountComponentAtNode(div);
});
