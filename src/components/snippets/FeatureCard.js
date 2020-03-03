import React from 'react';
import styled, { withTheme } from 'styled-components' 

const FeatureCard = (props) => {

  const Container = styled.div`
    padding: 30px 12px;
    background: #eaeaea;
    border-radius: 8px;
  `;

  const Title = styled.h3`
    font-family: ${props.theme.fonts.display};
    font-weight: 500;
    color: ${props.theme.colors.primary};
    font-size: 1.25em;
  `;

  return (
    <Container className="FeatureCard">
      <Title>{props.title}</Title>
      <p>{props.children}</p>
    </Container>
  );
}

export default withTheme(FeatureCard);