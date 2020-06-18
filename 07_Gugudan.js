const React = require('react');
const { Component } = React;

class GuGuDan extends Component {
  state = {
    firstNum: Math.ceil(Math.random() * 9),
    secondNum: Math.ceil(Math.random() * 9),
    value: '',
    result: ''
  }
  input;
  onSubmit = (e) => {
    e.preventDefault();
    if(parseInt(this.state.value, 10) === this.state.firstNum * this.state.secondNum) {
      this.setState((prevState) => {
        return {
          result: '정답: ' + prevState.value,
          firstNum: Math.ceil(Math.random() * 9),
          secondNum: Math.ceil(Math.random() * 9),
          value: ''
        }
      });
    } else {
      this.setState({
        result: '땡!',
        value: ''
      });
    }
    this.input.focus();
  }
  onChange = (e) => this.setState({ value: e.target.value });
  ref = (c) => this.input = c;

  render() {
    return (
      <>
        <div>{this.state.firstNum}곱하기{this.state.secondNum}는?</div>
        <form onSubmit={this.onSubmit}>
          <input ref={this.ref} type="number" value={this.state.value} onChange={this.onChange} />
          <button type="submit">입력!</button>
        </form>
        <div>{this.state.result}</div>  
      </>
    );
  }
}

module.exports = GuGuDan;