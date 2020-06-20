const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '이발소',
      value: '',
      result: ''
    }
  }

  input;

  onSubmitForm = e => {
    e.preventDefault();
    if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '딩동댕~!',
        word: this.state.value,
        value: ''
      });
    } else {
      this.setState({
        result: '땡!',
        value: ''
      });
    }
    this.input.focus();
  }

  onChangeInput = e => {
    this.setState({ value: e.target.value });
  };

  onRefInput = c => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input 
            ref={this.onRefInput} 
            value={this.state.value}
            onChange={this.onChangeInput} />
          <button type="submit">입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;