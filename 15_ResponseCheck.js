import React, { Component } from 'react';
import styled from 'styled-components';

const Screen = styled.div.attrs(props => ({
  className: props.className
}))`
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
  &.waiting {
    background-color: aqua;
  }
  &.ready {
    background-color: red;
    color: white;
  }
  &.now {
    background-color: greenyellow;
  }
`;

class ResponseCheck extends Component {
  constructor(props){
    super(props);
    this.state = {
      state: 'waiting',
      message: '클릭해서 시작하세요.',
      result: []
    };
  }

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state, message, result } = this.state;
    if(state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요'
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭!'
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if(state === 'ready') {
      clearTimeout(this.timeout);
      this.setState({
        state: 'waiting',
        message: '초록색이 된 후에 클릭하세요. 다시 클릭!'
      });
    } else if(state === 'now') {
      this.endTime = new Date();
      this.setState((prevState) => ({
        state: 'waiting',
        result: [...prevState.result, this.endTime - this.startTime],
        message: '클릭해서 시작하세요.'
      }));
    }
  };

  onClickReset = () => {
    this.setState({
      result: []
    });
  };

  renderAverage = () => (
    this.state.result.length === 0
    ? null
    : 
    <>
      <div>평균시간: {this.state.result.reduce((a, c) => a + c) / this.state.result.length}ms</div>
      <button onClick={this.onClickReset}>리셋</button>
    </> 
  );

  render() {
    return (
      <>
        <Screen
          className={this.state.state}
          onClick={this.onClickScreen}
        >
          {this.state.message}
        </Screen>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheck;