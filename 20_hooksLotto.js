import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
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

const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumber(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [reDo, setReDo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    console.log('componentDidMount');
    for(let i = 0; i < winNumbers.length -1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls(preWinBalls => [...preWinBalls, winNumbers[i]]);
      }, (i + 1) * 500);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setReDo(true);
    }, 4200);
    return () => {
      console.log('componentWillUnmount');
      timeouts.current.forEach(v => clearTimeout(v));
    };
  }, [timeouts.current]);

  const onClickReDo = useCallback(() => {
    console.log('onClickReDo');
    console.log(winNumbers);
    setWinNumbers(getWinNumber());
    setWinBalls([]);
    setBonus(null);
    setReDo(false);
    timeouts.current = [];
  }, [winNumbers]);
  
  return (
    <>
      <div>당첨 숫자</div>
      <div>
        {winBalls.map(v => (<Ball key={v} number={v} />))}
      </div>
      <div>보너스</div>
      {bonus && <Ball number={bonus} />}
      {reDo && <button onClick={onClickReDo}>한 번 더!</button>}
    </>
  );
};

export default Lotto;