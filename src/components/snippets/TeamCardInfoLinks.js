import React from 'react';
import styled, { withTheme } from 'styled-components' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InlineList = styled.ul`
  display: grid;
  grid-column-gap: 10px;

  @media (min-width: 576px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Icon = styled.span`
  font-size: 1.3125em;
`;

const Link = styled.a`
  position: relative;
  text-decoration: none;
  color: inherit;
  top: -0.1875em; 
  
  :hover {
    color: ${props => props.theme.colors.dark};
    text-decoration: underline;
  }
`;

const TeamCardInfoLinks = (props) => {

  return (
    <InlineList className="TeamCardInfoLinks">
      <li><Icon><FontAwesomeIcon icon={['fab', 'linkedin']} /></Icon> <Link href={'https://www.linkedin.com/in/' + props.linkedin}>{props.linkedin}</Link></li>
      <li><Icon><FontAwesomeIcon icon={['fab', 'github']} /></Icon> <Link href={'https://github.com' + props.github}>{props.github}</Link></li>
    </InlineList>
  );
}

export default withTheme(TeamCardInfoLinks);