import React from 'react';

export default class Accordion extends React.Component {
  
  state = {
    openSection: null
  }

  static defaultProps = {
    sections: []
  }
  
  handleButtonClicked(btn) {
    this.setState({
      openSection: btn
    });
  }

  render() {
    const liArray = this.props.sections.map((section, i) => 
      <li key={i}>
        <button onClick={() => this.handleButtonClicked(i)}>{section.title}</button>
        {this.state.openSection === i && <p>{section.content}</p>}
      </li>
    );

    return (
    <ul>
      {liArray}
    </ul>
    );
  }
}