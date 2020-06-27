import React, { useState, useRef } from 'react';
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

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요.');
  const [result, setResult] = useState([]);

  const timeout = useRef(null);
  const startTime = useRef(null);
  const endTime = useRef(null);

  const onClickScreen = (e) => {
    if(state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요');
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭!');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if(state === 'ready') {
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('초록색이 된 후에 클릭하세요. 다시 클릭!');
    } else if(state === 'now') {
      endTime.current = new Date();
      setState('waiting');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
      setMessage('클릭해서 시작하세요.');
    }
  };

  const onClickReset = () => {
    setResult([]);
  };

  const renderAverage = () => (
    result.length === 0
    ? null
    : 
    <>
      <div>평균시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
      <button onClick={onClickReset}>리셋</button>
    </> 
  );

  return (
    <>
      <Screen
        className={state}
        onClick={onClickScreen}
      >
        {message}
      </Screen>
      {(() => {
        if(result.length === 0) {
          return null;
        } else {
          return (
            <>
              <div>평균시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
              <button onClick={onClickReset}>리셋</button>
            </>
          );
        }
      })()}
      {/* {renderAverage()} */}
    </>
  );
};

export default ResponseCheck;