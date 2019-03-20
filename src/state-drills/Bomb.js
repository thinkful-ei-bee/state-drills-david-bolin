import React from 'react';

class Bomb extends React.Component {
  state = {
    count: 0
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let content = 'tick';
    
    if (this.state.count % 2 !== 0) {
      content = 'tock'; 
    }

    if (this.state.count >= 8) {
      content = 'BOOM!!!!';
      clearInterval(this.interval);
    }

    return (
      <div>
        <p>{content}</p>
      </div>
    );
  }
}

export default Bomb;