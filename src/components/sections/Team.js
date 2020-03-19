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
        <TeamCard name="Pehuén Rodriguez" position="Full-stack developer" knowledge={ [ 'node-js', 'elixir','reactjs', 'mongodb', 'postgres' ] } cv={require('../../assets/cvs/CV_PehuenRodriguez.pdf')} github="/pehuen-rodriguez" linkedin="/pehuen-rodriguez" img={require('../../assets/img/pehue.jpg')} />
        <TeamCard name="José Casanova" position="Backend developer" knowledge={ [ 'php', 'node-js', 'python', 'reactjs', 'mongodb', 'mysql' ] } cv={require('../../assets/cvs/CV_JoseMariaCasanova.pdf')}  github="/casanovajose" linkedin="/casajosemus" img={require('../../assets/img/jose.jpg')} />
        <TeamCard name="Martina Colmenero" position="Full-stack developer" knowledge={ ['vuejs', 'node-js', 'mongodb' ] } cv={require('../../assets/cvs/CV_MartinaColmenero.pdf')} github="/martucol" linkedin="/martina-colmenero" img={require('../../assets/img/martu.jpg')} />
        <TeamCard name="Ignacio Guerra" position="Interactive developer" knowledge={ [ 'vuejs', 'reactjs', 'javascript', 'html5' , 'css3-alt'] } cv={require('../../assets/cvs/CV_IgnacioGuerra.pdf')} github="/ignacioguerra" linkedin="/ignacio-guerra" img={require('../../assets/img/nacho.jpg')} />
        <TeamCard name="Tobías Irigoyen" position="Frontend developer" knowledge={ [ 'html5', 'css3-alt', 'vuejs' ] } cv='' github="/tobias-irigoyen" linkedin="/tobiasirigoyen" img={require('../../assets/img/tobi.jpg')} />
        <TeamCard name="Romina Gómez" position="UX designer / Frontend developer" knowledge={ [ 'figma', 'invision', 'html5' , 'css3-alt', 'javascript', 'reactjs' ] } cv={require('../../assets/cvs/CV_RominaGomez.pdf')} github="/romi-gomez" linkedin="/romigomez" img={require('../../assets/img/romi.jpg')} />
      </Grid>
    </div>
  );
}

export default withTheme(Team);