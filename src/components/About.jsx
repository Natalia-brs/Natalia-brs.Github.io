import React, { Component } from 'react';
import * as Styled from './AboutStyle';
import ImgPort from '../img/MinhaPort.png';

export default class About extends Component {
  render() {
    return (
      <Styled.AboutSection>

        <Styled.ImgDiv>
          <Styled.ImgPort src={ ImgPort } />
        </Styled.ImgDiv>
        <Styled.AboutDiv>
          <p>
            icrum isci quam commodi
            possimus rerum laborum quae in nihil unde praesentium voluptod blanditiis.
          </p>
        </Styled.AboutDiv>

      </Styled.AboutSection>
    );
  }
}
//