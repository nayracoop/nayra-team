import React from 'react';
import styled, { withTheme } from 'styled-components' 
import TeamCardInfo from './TeamCardInfo';

const TeamCard = (props) => {

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

  return (
    <Container className="TeamCard">
      <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQFE6nYVEF-UmQ/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=NnZw-2Gq1CKMSVNrTqEkyas-tgv8GCzEgIntu4tjw4M" />
      <TeamCardInfo name="Ignacio Guerra" position="Sr. fullstack developer" />
    </Container>
  );
}

export default withTheme(TeamCard);