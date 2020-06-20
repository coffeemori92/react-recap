import React, { useState, useRef } from 'react';

const WordRelay = () => {
  const [word, setWord] = useState('이발소');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const input = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(word[word.length - 1] === value[0]) {
      setResult('딩동댕!');
      setWord(value);
      setValue('');
    } else {
      setResult('땡!');
      setValue('');
    }
    input.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={input}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;