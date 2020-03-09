import React from 'react';
import styled, { withTheme } from 'styled-components' 

const Container = styled.div`
  padding: 30px 12px;    
  background: -moz-linear-gradient(left, rgba(234,234,234,0) 0%, rgba(245,245,245,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(234,234,234,0)), color-stop(100%, rgba(245,245,245,1)));
  background: -webkit-linear-gradient(left, rgba(234,234,234,0) 0%, rgba(245,245,245,1) 100%);
  background: -o-linear-gradient(left, rgba(234,234,234,0) 0%, rgba(245,245,245,1) 100%);
  background: -ms-linear-gradient(left, rgba(234,234,234,0) 0%, rgba(245,245,245,1) 100%);
  background: linear-gradient(to right, rgba(234,234,234,0) 0%, rgba(245,245,245,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eaeaea', endColorstr='#f5f5f5', GradientType=1 );
  border-radius: 8px;
`;

const Title = styled.h3`
  font-family: ${props => props.theme.fonts.display};
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  font-size: 1.25em;
`;

const Icon = styled.img`
  display: block;
  max-height: 100px;
  margin: 0 auto;
  margin-bottom: 1.5em;
`;

const FeatureCard = (props) => {

  return (
    <Container className="FeatureCard">
      <Icon src={props.img} alt="" />
      <Title>{props.title}</Title>
      <p>{props.children}</p>
    </Container>
  );
}

export default withTheme(FeatureCard);