import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledBall = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
`;

class Ball extends PureComponent {
  render() {
    const { number } = this.props;
    let background;
    if(number < 11) {
      background = 'red';
    } else if(number < 21) {
      background = 'orange';
    } else if(number < 31) {
      background = 'yellow';
    } else if(number < 41) {
      background = 'blue';
    } else {
      background = 'green';
    }
    return (
      <>
        <StyledBall style={{ background }}>{number}</StyledBall>
      </>
    );
  }
}

export default Ball;