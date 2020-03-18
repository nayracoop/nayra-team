import React from 'react';
import styled, { withTheme } from 'styled-components' 
import TeamCardInfo from './TeamCardInfo';

const Container = styled.section`
  padding: 25px;
  border: 1px solid #cdced0;
  border-radius: 8px;

  display: grid;
  grid-template-columns: 140px 1fr;
  grid-column-gap: 22px;
`;

const Image = styled.img`
  display: block;
  margin: 0;
  object-fit: cover;
  width: 140px;
  height: 140px;
  border-radius: 50%;
`;

const TeamCard = (props) => {

  return (
    <Container className="TeamCard">
      <Image src={props.img} />
      <TeamCardInfo name={props.name} position={props.position} skills={props.knowledge} github={props.github} linkedin={props.linkedin} fileCv={props.fileCv} />
    </Container>
  );
}

export default withTheme(TeamCard);