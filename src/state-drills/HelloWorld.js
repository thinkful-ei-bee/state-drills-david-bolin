import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who: 'world'
  }
  
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button>World</button>
        <button>Friend</button>
        <button>React</button>
      </div>
    );
  }
}

export default HelloWorld;