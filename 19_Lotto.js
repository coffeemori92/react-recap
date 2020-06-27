import React, { Component } from 'react';
import Ball from './19_Ball';

function getWinNumber() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while(candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

class Lotto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winNumbers: getWinNumber(), // 당첨 숫자들
      winBalls: [],
      bonus: null, // 보너스 공
      reDo: false
    };
  }

  timeouts = [];

  componentDidMount() {
    console.log('componentDidMount');
    const { winNumbers } = this.state;
    for(let i = 0; i < winNumbers.length -1; i++) {
      this.timeouts[i] = setTimeout(() => {
        this.setState(prevState => ({
          winBalls: [...prevState.winBalls, winNumbers[i]]
        }));
      }, (i + 1) * 500);
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonus: winNumbers[6],
        reDo: true
      });
    }, 4200);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.timeouts.forEach(v => clearTimeout(v));
  }

  onClickReDo = () => {
    console.log('onClickReDo');
    this.setState({
      winNumbers: getWinNumber(),
      winBalls: [],
      bonus: null,
      reDo: false
    });
    this.timeouts = [];
    const { winNumbers } = this.state;
    for(let i = 0; i < winNumbers.length -1; i++) {
      this.timeouts[i] = setTimeout(() => {
        this.setState(prevState => ({
          winBalls: [...prevState.winBalls, winNumbers[i]]
        }));
      }, (i + 1) * 500);
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonus: winNumbers[6],
        reDo: true
      });
    }, 4200);
  };

  render() {
    const { winBalls, bonus, reDo } = this.state;
    return (
      <>
        <div>당첨 숫자</div>
        <div>
          {winBalls.map(v => (<Ball key={v} number={v} />))}
        </div>
        <div>보너스</div>
        {bonus && <Ball number={bonus} />}
        {reDo && <button onClick={this.onClickReDo}>한 번 더!</button>}
      </>
    );
  }
}

export default Lotto;