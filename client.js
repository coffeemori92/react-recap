const React = require('react');
const ReactDOM = require('react-dom');
import { hot } from 'react-hot-loader/root';

// 06_wordRelay
// const WordRelay = require('./06_WordRelay');
// ReactDOM.render(<WordRelay />, document.querySelector('#root'));

// 07_gugudan
// const GuGuDan = require('./07_Gugudan');
// ReactDOM.render(<GuGuDan />, document.querySelector('#root'));

// 08_hooksWordRelay
// import WordRelay from './08_hooksWordRelay';
// const Hot = hot(WordRelay);

// 09_BaseballGame
import BaseballGame from './09_BaseballGame';
const Hot = hot(BaseballGame);

ReactDOM.render(<Hot />, document.querySelector('#root'));