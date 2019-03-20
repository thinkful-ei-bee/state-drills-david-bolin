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
    let content = 'spinning the chamber and pulling the trigger!';
    
    if (!this.state.spinningTheChamber) {
      if (this.state.chamber === this.props.bulletInChamber) {
        content = 'BANG!!!!';
      } else {
        content = "you're safe!";
      }
    }

    return (
      <div>
        <p>{content}</p>
        <button onClick={() => this.handleClick()}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;