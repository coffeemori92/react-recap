const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello webpack!'
    }
  }

  render() {
    return (
      <>
      {this.state.text}
      </>
    );
  }
}

module.exports = WordRelay;