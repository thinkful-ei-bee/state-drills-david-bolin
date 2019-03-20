import React from 'react';

class RouletteGun extends React.Component {
  
  static defaultProps = {
    bulletInChamber: 8
  }

  state = {
    chamber: null,
    spinningTheChamber: false
  }

  handleClick() {
    this.setState({
      spinningTheChamber: true
    });
  }

  render() {
    return (
      <div>
        <p>you're safe!</p>
        <button onClick={() => this.handleClick()}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;