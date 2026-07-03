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
        <TeamCard name="Pehuén Rodriguez" position="Full-stack developer" knowledge={ [ 'rust', 'elixir', 'node-js','reactjs', 'mongodb', 'postgres' ] } github="/pehuen-rodriguez" linkedin="/pehuen-rodriguez" img={require('../../assets/img/pehue_cartoon.jpg')} />
        <TeamCard name="José Casanova" position="Backend developer" knowledge={ [ 'php', 'node-js', 'python', 'reactjs', 'mongodb', 'mysql' ] }  github="/casanovajose" linkedin="/casajosemus" img={require('../../assets/img/jose_cartoon.jpg')} />
        <TeamCard name="Romina Landa" position="Data Scientist & IA Engineer / Data Architect" knowledge={ [ 'python', 'pandas', 'tensorflow', 'airflow', 'docker', 'database', 'postgres' ] } github="/RomiLanda" linkedin="/romina-ailin-landa" img={require('../../assets/img/romi_dino.jpg')} />
      </Grid>
    </div>
  );
}

export default withTheme(Team);