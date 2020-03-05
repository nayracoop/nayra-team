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