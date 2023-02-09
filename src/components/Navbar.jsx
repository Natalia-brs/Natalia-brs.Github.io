import React, { Component } from 'react';
import * as Styled from '../pages/Home/style';

export default class Navbar extends Component {
  render() {
    return (
      <Styled.Header>
        <Styled.NavBar>
          <Styled.StyledLink to="/about">Sobre</Styled.StyledLink>
          <Styled.StyledLink to="/contact">Contato</Styled.StyledLink>
          <Styled.StyledLink to="/projects">Projetos</Styled.StyledLink>
        </Styled.NavBar>
      </Styled.Header>
    );
  }
}
