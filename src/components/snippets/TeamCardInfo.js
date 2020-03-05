import React from 'react';
import styled, { withTheme } from 'styled-components' 
import TeamCardInfoIcons from './TeamCardInfoIcons';
import TeamCardInfoLinks from './TeamCardInfoLinks';

const Container = styled.section`
  display: grid;
`;

const Title = styled.h3`
  font-family: ${props => props.theme.fonts.display};
  font-weight: 500;
  color: ${props => props.theme.colors.dark};
  font-size: 1.25em;
`;

const Position = styled.p`
  font-weight: 500;
`;

const LinksContainer = styled.div`
  align-self: end;
`;

const TeamCardInfo = (props) => {

  return (
    <Container className="TeamCardInfo">
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