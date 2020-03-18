import React from 'react';
import styled, { withTheme } from 'styled-components' 
import TeamCard from '../snippets/TeamCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 22px;
  grid-row-gap: 22px;
  @media (min-width: ${props => props.theme.pageWidth.l}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Team = (props) => {

  return (
    <div className="Team">
      <Grid>
        <TeamCard name="Pehuén Rodriguez" position="Sr. full-stack developer" knowledge={ [ 'python', 'node-js', 'reactjs', 'mongodb' ] } github="/pehuenrodriguez" linkedin="/pehuenrodriguez" img={require('../../assets/img/pehue.jpg')} />
        <TeamCard name="José Casanova" position="Sr. full-stack developer" knowledge={ [ 'python', 'node-js', 'reactjs', 'mongodb' ] } github="/pehuenrodriguez" linkedin="/pehuenrodriguez" img={require('../../assets/img/jose.jpg')} />
        <TeamCard name="Martina Colmenero" position="Sr. full-stack developer" knowledge={ [ 'python', 'node-js', 'reactjs', 'mongodb' ] } github="/pehuenrodriguez" linkedin="/pehuenrodriguez" img={require('../../assets/img/martu.jpg')} />
        <TeamCard name="Ignacio Guerra" position="Sr. full-stack developer" knowledge={ [ 'python', 'node-js', 'reactjs', 'mongodb' ] } github="/pehuenrodriguez" linkedin="/pehuenrodriguez" img={require('../../assets/img/nacho.jpg')} />
        <TeamCard name="Tobías Irigoyen" position="Sr. full-stack developer" knowledge={ [ 'python', 'node-js', 'reactjs', 'mongodb' ] } github="/pehuenrodriguez" linkedin="/pehuenrodriguez" img={require('../../assets/img/tobi.jpg')} />
        <TeamCard name="Romina Gómez" position="Sr. full-stack developer" knowledge={ [ 'python', 'node-js', 'reactjs', 'mongodb' ] } github="/pehuenrodriguez" linkedin="/pehuenrodriguez" img={require('../../assets/img/romi.jpg')} />
      </Grid>
    </div>
  );
}

export default withTheme(Team);