import React from 'react';
import styled, { withTheme } from 'styled-components' 
import SectionTitle from '../snippets/SectionTitle';

const SectionBlock = (props) => {

  const Section = styled.section`
    padding: 2em 0;
  `;

  return (

    <Section>
      <SectionTitle>{props.title}</SectionTitle>
      {props.children}
    </Section>
  );
}

export default withTheme(SectionBlock);