import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who: 'world'
  }
  
  handleClick(btn) {
    this.setState({
      who: btn
    });
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={() => this.handleClick('world!')}>World</button>
        <button>Friend</button>
        <button>React</button>
      </div>
    );
  }
}

export default HelloWorld;