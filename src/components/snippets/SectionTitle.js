import React from 'react';
import styled, { withTheme } from 'styled-components' 

const SectionTitle = (props) => {
  
  const Title = styled.h2`
    position: relative;
    font-family: ${props.theme.fonts.display};
    font-weight: 500;
    color: ${props.theme.colors.dark};
    font-size: 4em;
    padding: 0.25em 0;
    
    ::before {
      position: absolute;
      content: "";
      display: block;
      width: 1.5625em;
      height: 0.1em;
      border-radius: 4px;
      background-color: ${props.theme.colors.primary};
      top: 0.15em;
    }

    span span {
      color: ${props.theme.colors.primary};
    }
  `;

  return (
    <div>
      <Title>{props.children}</Title>
    </div>
  );
}

export default withTheme(SectionTitle);