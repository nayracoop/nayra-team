import React from 'react';
import styled, { withTheme } from 'styled-components' 
import TeamCardInfoIcons from './TeamCardInfoIcons';
import TeamCardInfoLinks from './TeamCardInfoLinks';

const TeamCardInfo = (props) => {

  const Container = styled.section`
    display: grid;
  `;

  const Title = styled.h3`
    font-family: ${props.theme.fonts.display};
    font-weight: 500;
    color: ${props.theme.colors.dark};
    font-size: 1.25em;
  `;

  const Position = styled.p`
    font-weight: 500;
  `;

  const LinksContainer = styled.div`
    align-self: end;
  `;

  return (
    <Container className="TeamCardInfo">
      <div>
        <Title>{props.name}</Title>
        <Position>{props.position}</Position>
        <TeamCardInfoIcons />
      </div>
      <LinksContainer>
        <TeamCardInfoLinks />
      </LinksContainer>
    </Container>
  );
}

export default withTheme(TeamCardInfo);