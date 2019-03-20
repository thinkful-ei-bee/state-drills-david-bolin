import React from 'react';

class RouletteGun extends React.Component {
  
  static defaultProps = {
    bulletInChamber: 8
  }

  state = {
    chamber: null,
    spinningTheChamber: false
  }


  render() {
    return (
      <div>
        <p>you're safe!</p>
        <button>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;