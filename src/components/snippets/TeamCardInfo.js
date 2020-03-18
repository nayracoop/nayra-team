import React from 'react';
import styled, { withTheme } from 'styled-components' 
import TeamCardInfoIcons from './TeamCardInfoIcons';
import TeamCardInfoLinks from './TeamCardInfoLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

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

const Icon = styled.span`
  font-size: 0.8em;
`;

const Link = styled.a`
  position: relative;
  text-decoration: none;
  color: inherit;
  top: -0.2em; 
  
  :hover {
    color: ${props => props.theme.colors.dark};
    text-decoration: underline;
  }
`;

const Cv = (props) => {
  if (props.fileCv) {
    return (
      <>
        <Link href={ process.env.PUBLIC_URL+ "/cv/" + props.fileCv} download={props.fileCv}> 
          <Icon><FontAwesomeIcon icon={faFilePdf} /></Icon>
        </Link>
      </>);
  } else {
    return false;
  }
}

const TeamCardInfo = (props) => {

  return (
    <Container className="TeamCardInfo">
      <div>
        <Title>{props.name} <Cv fileCv={props.fileCv}/></Title>
        
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