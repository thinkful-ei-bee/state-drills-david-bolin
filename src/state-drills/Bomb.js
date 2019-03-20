import React from 'react';

class Bomb extends React.Component {
  state = {
    content: 'tick'
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