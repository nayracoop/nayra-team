import React from 'react';
import styled, { withTheme } from 'styled-components' 

const Title = styled.h2`
  position: relative;
  font-family: ${props => props.theme.fonts.display};
  font-weight: 500;
  color: ${props => (props.darkMode) ? props.theme.colors.light : props.theme.colors.dark};
  font-size: 4em;
  padding: 0.25em 0 0 0;
  margin-bottom: 0.375em;
  text-align: ${props => props.align || 'left'};

  ::before {
    position: absolute;
    content: "";
    display: block;
    width: 1.5625em;
    height: 0.1em;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.primary};
    top: 0.15em;
    ${props => (props.align === 'center') ? 'left:0; right:0; margin:0 auto;' : '' }
    ${props => (props.align === 'right') ? 'right:0;' : '' }
  }

  span span {
    color: ${props => props.theme.colors.primary};
  }
`;

const SectionTitle = (props) => {  

  return (
    <div>
      <Title {...props}>{props.children}</Title>
    </div>
  );
}

export default withTheme(SectionTitle);