import React from 'react';
import styled, { withTheme } from 'styled-components' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InlineList = styled.ul`
  display: grid;
  grid-column-gap: 10px;

  @media (min-width: ${props => props.theme.pageWidth.s}px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: ${props => props.theme.pageWidth.m}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${props => props.theme.pageWidth.l}px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: ${props => props.theme.pageWidth.xl}px) {
    grid-template-columns: 185px 1fr;
  }
  li {
    a {
      position: relative;
      text-decoration: none;
      color: inherit;
      top: -0.1875em; 
      
      :hover {
        color: ${props => props.theme.colors.dark};
        text-decoration: underline;
      }
    }
  }
`;

const Icon = styled.span`
  font-size: 1.3125em;
`;

const TeamCardInfoLinks = (props) => {

  return (
    <InlineList className="TeamCardInfoLinks">
      <li><Icon><FontAwesomeIcon icon={['fab', 'linkedin']} /></Icon> <a href={'https://www.linkedin.com/in' + props.linkedin} target="_blank" rel="noopener noreferrer">{props.linkedin}</a></li>
      <li><Icon><FontAwesomeIcon icon={['fab', 'github']} /></Icon> <a href={'https://github.com' + props.github} target="_blank" rel="noopener noreferrer">{props.github}</a></li>
    </InlineList>
  );
}

export default withTheme(TeamCardInfoLinks);