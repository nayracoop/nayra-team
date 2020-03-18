import React from 'react';
import styled, { withTheme } from 'styled-components' 
import FeatureCard from '../snippets/FeatureCard';

const Grid = styled.div`
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 40px;

  @media (min-width: ${props => props.theme.pageWidth.s}px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  @media (min-width: ${props => props.theme.pageWidth.l}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Features = (props) => {

  return (
    <div className="Features">
      <Grid>
        <FeatureCard title="Infrastructure" img={require('../../assets/img/infrastructure.svg')}>
          With an office of our own, we work in a self-managed, safe, comfortable and fully equipped environment.
        </FeatureCard>
        <FeatureCard title="Scalable teams" img={require('../../assets/img/scalability.svg')}>
          Let us grow with your business. We can help you find compatible resources and teams from our IT coops network.
        </FeatureCard>
        <FeatureCard title="Training and vision" img={require('../../assets/img/vision.svg')}>
        Ours is an industry in continuous evolution. We take learning very seriously and invest in constant training.
        </FeatureCard>
      </Grid>
    </div>
  );
}

export default withTheme(Features);