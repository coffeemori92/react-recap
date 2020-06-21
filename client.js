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
// import BaseballGame from './09_BaseballGame';
// const Hot = hot(BaseballGame);

// 10_BaseballGame
// import BaseballGame from './10_hooksBaseballGame';
// const Hot = hot(BaseballGame);

// 11_RenderTest
// import RenderTest from './11_RenderTest';
// const Hot = hot(RenderTest);

// 12_PureComponentRenderTest
// import PureComponentRenderTest from './12_PureComponentRenderTest';
// const Hot = hot(PureComponentRenderTest);

// 13_PureComponentBaseballGame
import PureComponentBaseballGame from './13_PureComponentBaseballGame';
const Hot = hot(PureComponentBaseballGame);

ReactDOM.render(<Hot />, document.querySelector('#root'));