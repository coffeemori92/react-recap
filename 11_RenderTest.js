import React, { Component } from 'react';

class Test extends Component {
  state = {
    counter: 0
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if(this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }

  onClickBtn = (e) => {
    this.setState({});
  };
  
  render() {
    console.log('랜더링', this.state)
    return (
      <>
        <div>
          <button onClick={this.onClickBtn}>클릭</button>
        </div>
      </>
    );
  }
}

export default Test;