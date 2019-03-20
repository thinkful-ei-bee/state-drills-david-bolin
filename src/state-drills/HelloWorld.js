import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who: 'world'
  }
  
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
      </div>
    );
  }
}

export default HelloWorld;