import React from 'react';
import styled, { withTheme } from 'styled-components' 
import TeamCard from '../snippets/TeamCard';

const Team = (props) => {

  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 22px;
    grid-row-gap: 22px;
  `;

  return (
    <div className="Team">
      <Grid>
        <TeamCard title="Infrastructure">
          We believe that the workspace plays a fundamental role in performance. That is why we have our own office that allows us to work in a comfortable, safe and fully equipped environment.
        </TeamCard>
        <TeamCard title="Scalable teams">
          I am part of a team of developers and, as such, we work together in an organized, decisive manner and in an environment of support and trust that allows us to offer fully compatible resources and  teams.
        </TeamCard>
        <TeamCard title="Training and vision">
          As an interdisciplinary team, we approach each project from a global perspective that meets all your specific requirements. As a company, we understand that this is an industry that is continuously evolving and ...
        </TeamCard>
        <TeamCard title="Infrastructure">
          We believe that the workspace plays a fundamental role in performance. That is why we have our own office that allows us to work in a comfortable, safe and fully equipped environment.
        </TeamCard>
        <TeamCard title="Scalable teams">
          I am part of a team of developers and, as such, we work together in an organized, decisive manner and in an environment of support and trust that allows us to offer fully compatible resources and  teams.
        </TeamCard>
        <TeamCard title="Training and vision">
          As an interdisciplinary team, we approach each project from a global perspective that meets all your specific requirements. As a company, we understand that this is an industry that is continuously evolving and ...
        </TeamCard>
      </Grid>
    </div>
  );
}

export default withTheme(Team);