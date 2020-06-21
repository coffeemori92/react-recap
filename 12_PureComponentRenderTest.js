import React, { PureComponent } from 'react';

class Test extends PureComponent {
  state = {
    counter: 0,
    string: 'hello',
    number: 1,
    boolean: true,
    object: {},
    array: []
  };

  onClickBtn = (e) => {
    this.setState({
      array: [...this.state.array, 1]
    });
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