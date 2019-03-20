import React from 'react';

export default class Accordion extends React.Component {
  
  static defaultProps = {
    sections: []
  }
  
  render() {
    const liArray = this.props.sections.map((section, i) => 
      <li key={i}>
        <button>{section.title}</button>
      </li>
    );

    return (
    <ul>
      {liArray}
    </ul>
    );
  }
}