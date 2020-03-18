import React from 'react';
import styled, { withTheme } from 'styled-components' 
import SectionTitle from '../snippets/SectionTitle';

const Section = styled.section`
  padding: 5.5em 0 7em;
  margin-top: -5.5em;
  background-color: ${props => props.theme.colors.dark};
  background-image: url(${require('../../assets/img/bg/dark.png')});
  background-size: cover;
  background-position: bottom;
  @media all and (max-width: 576px) {
    margin-top: 0;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  text-align: center;
  max-width: ${props => props.theme.pageWidth.xl}px;
`;

const Link = styled.a`
  font-family: ${props => props.theme.fonts.display};
  font-size: 1.5em;
  margin: 1.375em 0;
  color: #c6c6c6;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Contact = (props) => {

  return (
    <Section className="Contact">
      <Container>
        <SectionTitle darkMode={true} align="center">{props.title}</SectionTitle>
        <Link href={'mailto:' + props.email}>{props.email}</Link>
      </Container>
    </Section>
  );
}

export default withTheme(Contact);