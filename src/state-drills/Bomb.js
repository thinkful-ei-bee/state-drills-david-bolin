import React from 'react';

class Bomb extends React.Component {
  state = {
    content: 'tick',
    count: 0
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