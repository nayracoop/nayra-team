import React from 'react';
import styled, { withTheme } from 'styled-components' 
import SectionTitle from '../snippets/SectionTitle';

const Section = styled.section`
  margin: 11em 0;
`;

const SectionBlock = (props) => {

  return (

    <Section>
      <SectionTitle>{props.title}</SectionTitle>
      {props.children}
    </Section>
  );
}

export default withTheme(SectionBlock);