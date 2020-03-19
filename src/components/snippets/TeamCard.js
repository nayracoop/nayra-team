import React from 'react';
import styled, { withTheme } from 'styled-components' 
import TeamCardInfo from './TeamCardInfo';

const Container = styled.section`
  padding: 25px;
  border: 1px solid #cdced0;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 138px 1fr;
  grid-column-gap: 0px;
  position: relative;
  @media all and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0;
  object-fit: cover;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  @media all and (max-width: 450px) {
    width: 110px;
    height: 110px;
    margin: auto;
  }  
`;

const TeamCard = (props) => {

  return (
    <Container className="TeamCard">
      <Image src={props.img} />
      <TeamCardInfo name={props.name} position={props.position} skills={props.knowledge} cv={props.cv} github={props.github} linkedin={props.linkedin} />
    </Container>
  );
}

export default withTheme(TeamCard);