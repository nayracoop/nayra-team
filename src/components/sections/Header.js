import React from 'react';
import styled, { withTheme } from 'styled-components' 

const StyledHeader = styled.header`
  text-align: center;
  margin: 6em 0;
`;

const TitleContainer = styled.div`
  display: inline-block;
  font-family: ${props => props.theme.fonts.display};
  padding: 3.75em 0;
  font-weight: 500;
  text-align: left;
  line-height: 1;
  color: ${props => props.theme.colors.dark};

  font-size: 0.6875em;

  @media (min-width: ${props => props.theme.pageWidth.s}px) {
    font-size: 0.6875em;
  }
  @media (min-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 0.75em;
  }
  @media (min-width: ${props => props.theme.pageWidth.l}px) {
    font-size: 0.875em;
  }
  @media (min-width: ${props => props.theme.pageWidth.xl}px) {
    font-size: 1em;
  }
`;

const Header = (props) => {

  const Logo = styled.p`
    position: relative;
    text-transform: lowercase;
    font-size: 11em;
    letter-spacing: .075em;
    margin: 0;
    
    ::before {
      position: absolute;
      content: "";
      display: block;
      width: 1.075em;
      height: 0.05em;
      border-radius: 0.05em;
      background-color: ${props.theme.colors.primary};
      left: 0.075em;
      top: 0.1625em;
    }
  `;

  const Title = styled.h1`
    font-size: 2em;
    font-weight: 400;
    margin: -0.325em 0 0 11.25em;
  `;

  const TextContainer = styled.div`
    text-align: left;
  `;

  return (
    <div className="Header">
      <StyledHeader>
        <TitleContainer>
          <Logo>Nayra</Logo>
          <Title>{props.title}</Title>
        </TitleContainer>
        <TextContainer>{props.children}</TextContainer>
      </StyledHeader>
    </div>
  );
}

export default withTheme(Header);