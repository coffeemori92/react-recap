import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

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
};

const RCP = () => {
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const [imgCoord, setImgCoord] = useState(rspCoords.R);
  const interval = useRef(null);

  useEffect(() => { // componentDidMount
    console.log('componentDidMount');
    interval.current = setInterval(changeHand, 1000);
    return () => { // componentWillUnmount
      console.log('componentWillUnmount');
      clearInterval(interval.current);
    }
  }, [imgCoord]); // 배열에 넣은 값들이 바뀔때 useEffect가 실행
                  // componentDidUpdate
  const changeHand = () => {
    if(imgCoord === rspCoords.R) {
      setImgCoord(rspCoords.C);
    } else if(imgCoord === rspCoords.C) {
      setImgCoord(rspCoords.P);
    } else if(imgCoord === rspCoords.P) {
      setImgCoord(rspCoords.R);
    }
  }

  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if(diff === 0) {
      setResult('비겼습니다.');
    } else if([-1, 2].includes(diff)) {
      setResult('이겼습니다.');
      setScore(prevScore => prevScore + 1);
    } else {
      setResult('졌습니다.');
      setScore(prevScore => prevScore - 1);
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 1000);
    }, 1000);
  };

  return (
    <>
      <Computer 
        style={{ 
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`
        }} 
      />
      <div>
        <button onClick={onClickBtn('R')}>바위</button>
        <button onClick={onClickBtn('C')}>가위</button>
        <button onClick={onClickBtn('P')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
}

export default RCP;