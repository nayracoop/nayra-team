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
          We believe that the workspace plays a fundamental role in performance. That is why we have our own office that allows us to work in a comfortable, safe and fully equipped environment.
        </FeatureCard>
        <FeatureCard title="Scalable teams" img={require('../../assets/img/scalability.svg')}>
          I am part of a team of developers and, as such, we work together in an organized, decisive manner and in an environment of support and trust that allows us to offer fully compatible resources and  teams.
        </FeatureCard>
        <FeatureCard title="Training and vision" img={require('../../assets/img/vision.svg')}>
          As an interdisciplinary team, we approach each project from a global perspective that meets all your specific requirements. As a company, we understand that this is an industry that is continuously evolving and ...
        </FeatureCard>
      </Grid>
    </div>
  );
}

export default withTheme(Features);