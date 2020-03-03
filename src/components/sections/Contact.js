import React from 'react';
import styled, { withTheme } from 'styled-components' 
import SectionTitle from '../snippets/SectionTitle';

const Contact = (props) => {

  const Section = styled.section`
    padding: 5.5em 0 11em;
    margin-top: -5.5em;
    background: ${props.theme.colors.dark};
  `;

  const Container = styled.div`
    margin: 0 auto;
    padding: 0 30px;
    width: 100%;
    max-width: ${props.theme.pageWidth.xl}px;
  `;

  return (
    <Section className="Contact">
      <Container>
        <SectionTitle>{props.title}</SectionTitle>
      </Container>
    </Section>
  );
}

export default withTheme(Contact);