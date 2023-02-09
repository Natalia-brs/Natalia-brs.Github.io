import React, { Component } from 'react';
import * as Styled from './style';
import HomePort from '../../img/HomePort.png';

export default class Home extends Component {
  render() {
    return (
      <Styled.Wrapper>
        <Styled.SectionHome>

          <Styled.DivImg>
            <Styled.MyIcon src={ HomePort } />
          </Styled.DivImg>

          <Styled.DescriptionDiv>
            <h2>Natalia Brasil</h2>
            <p>
              Desenvolvedora Frontend
            </p>
          </Styled.DescriptionDiv>

        </Styled.SectionHome>
      </Styled.Wrapper>
    );
  }
}
