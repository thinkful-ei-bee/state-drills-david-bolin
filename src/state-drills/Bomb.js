import React from 'react';

class Bomb extends React.Component {
  state = {
    content: 'tick',
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
    return (
      <div>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export default Bomb;