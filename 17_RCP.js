import React, { Component } from 'react';
import styled from 'styled-components';

// 클래스의 경우
// constructor -> 첫 랜더링 -> ref -> componentDidMount
// -> setState/props 바뀔 때 -> shouldComponentUpdate -> render 
// -> componentDidUpdate -> 부모 컴포넌트가 자식 컴포넌트를 없앨때 
// -> componentWillUnmount -> 소멸

const Computer = styled.div`
  width: 142px;
  height: 200px;
  background-position: 0 0;
`;

const rspCoords = {
  R: '0',
  C: '-142px',
  P: '-284px',
};

const scores = {
  R: '0',
  C: '1',
  P: '-1',
};

const computerChoice = imgCoord => {
  return Object.entries(rspCoords).find(function(v) {
    return v[1] === imgCoord;
  })[0];
}

class RCP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      score: 0,
      imgCoord: rspCoords.R,
    };
  }
  interval;

  changeHand = () => {
    const { imgCoord } = this.state;
      if(imgCoord === rspCoords.R) {
        this.setState({
          imgCoord: rspCoords.C
        });
      } else if(imgCoord === rspCoords.C) {
        this.setState({
          imgCoord: rspCoords.P
        });
      } else if(imgCoord === rspCoords.P) {
        this.setState({
          imgCoord: rspCoords.R
        });
      }
  }

  componentDidMount() { // 컴포넌트가 첫 랜더링 된 후 주로 비동기 요청
    console.log('componentDidMount');
    this.interval = setInterval(this.changeHand, 1000);
  }

  componentDidUpdate() { // 컴포넌트가 리랜더링 후
    // console.log('componentDidUpdate');
  }

  componentWillUnmount() { // 컴포넌트가 제거되기 직전 주로 비동기 요청 정리
    console.log('componentWillUnmount');
    clearInterval(this.interval);
  }

  onClickBtn = (choice) => () => {
    const { imgCoord } = this.state;
    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if(diff === 0) {
      this.setState({
        result: '비겼습니다.'
      });
    } else if([-1, 2].includes(diff)) {
      this.setState(prevState => ({
        result: '이겼습니다.',
        score: prevState.score + 1
      }));
    } else {
      this.setState(prevState => ({
        result: '졌습니다.',
        score: prevState.score - 1
      }));
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 1000);
    }, 1000);
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <Computer 
          style={{ 
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`
          }} 
        />
        <div>
          <button onClick={this.onClickBtn('R')}>바위</button>
          <button onClick={this.onClickBtn('C')}>가위</button>
          <button onClick={this.onClickBtn('P')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RCP;