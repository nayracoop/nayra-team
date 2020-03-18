import React from 'react';
import styled, { withTheme } from 'styled-components' 
import TeamCardInfoIcons from './TeamCardInfoIcons';
import TeamCardInfoLinks from './TeamCardInfoLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Container = styled.section`
  display: grid;  
  @media all and (max-width: 450px) {
    text-align: center;
  }
`;

const Title = styled.h3`
  font-family: ${props => props.theme.fonts.display};
  font-weight: 500;
  color: ${props => props.theme.colors.dark};
  font-size: 1.35em;
  @media all and (max-width: 450px) {
    margin-top: 15px;
  }
`;

const Position = styled.p`
  font-weight: 500;
`;

const LinksContainer = styled.div`
  align-self: end;
  @media all and (max-width: 450px) {
    margin-top: 10px;
  }
`;

const Link = styled.a`
  position: absolute;
  text-decoration: none;
  top: 32px;
  right: 25px;
  color: inherit;
  :hover {
    color: ${props => props.theme.colors.dark};
    text-decoration: underline;
  }
   svg {
     margin-right: 5px;
   }
`;

const TeamCardInfo = (props) => {

  return (
    <Container className="TeamCardInfo">
      {props.cv ? 
      <div>
        <Link href={props.cv } download><FontAwesomeIcon icon={faFileDownload} />CV</Link>
      </div> : null
      }
      <div>
        <Title>{props.name}</Title>
        <Position>{props.position}</Position>
        <TeamCardInfoIcons set={props.skills} />
      </div>
      <LinksContainer>
        <TeamCardInfoLinks github={props.github} linkedin={props.linkedin} />
      </LinksContainer>
    </Container>
  );
}

export default withTheme(TeamCardInfo);