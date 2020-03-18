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
        <TeamCard name="Pehuén Rodriguez" position="Full-stack developer" knowledge={ [ 'node-js', 'elixir','reactjs', 'mongodb', 'postgres' ] } github="/pehuenrodriguez" linkedin="/pehuenrodriguez" img={require('../../assets/img/pehue.jpg')} fileCv="CV_PehuenRodriguez.pdf" />
        <TeamCard name="José Casanova" position="Backend developer" knowledge={ [ 'php', 'node-js', 'python', 'reactjs', 'mongodb', 'mysql' ] } github="/casanovajose" linkedin="/casajosemus" img={require('../../assets/img/jose.jpg')} fileCv="CV_JoseMariaCasanova.pdf"/>
        <TeamCard name="Martina Colmenero" position="Full-stack developer" knowledge={ ['vuejs', 'node-js', 'mongodb' ] } github="/martucol" linkedin="/martina-colmenero" img={require('../../assets/img/martu.jpg')} fileCv="CV_MartinaColmenero.pdf"/>
        <TeamCard name="Ignacio Guerra" position="Interactive developer" knowledge={ [ 'vuejs', 'reactjs', 'javascript', 'html5' , 'css3-alt'] } github="/ignacioguerra" linkedin="/ignacio-guerra" img={require('../../assets/img/nacho.jpg')} fileCv="CV_IgnacioGuerra.pdf"/>
        <TeamCard name="Tobías Irigoyen" position="Frontend developer" knowledge={ [ 'html5', 'css3-alt', 'vuejs' ] } github="/tobias-irigoyen" linkedin="/tobiasirigoyen" img={require('../../assets/img/tobi.jpg')} />
        <TeamCard name="Romina Gómez" position="UX designer/ frontend developer" knowledge={ [ 'figma', 'invision', 'html5' , 'css3-alt', 'javascript', 'reactjs' ] } github="/romi-gomez" linkedin="/romigomez" img={require('../../assets/img/romi.jpg')} fileCv="CV_RominaGomez.pdf"/>
      </Grid>
    </div>
  );
}

export default withTheme(Team);