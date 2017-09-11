import React, { Component } from 'react';
import Greeting from './greeting'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Bob',
    };
  }

  handleMouseOver() {
    this.setState({ name: 'Bob' });
  }

  handleMouseOut() {
    this.setState({ name: 'Jhoe' });
  }

  handleOnChange(name) {
    this.setState({ name: name });
  }

  render() {
    return (
      <div
        onMouseOver={() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}
      >
        <input type="text" value={this.state.name} onChange={e => this.handleOnChange(e.target.value)} />
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
