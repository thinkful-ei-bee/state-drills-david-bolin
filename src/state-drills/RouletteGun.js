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
    this.timeout = setTimeout(() => {
      const randNum = Math.ceil(Math.random() * 8);
      this.setState({
        chamber: randNum,
        spinningTheChamber: false 
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
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