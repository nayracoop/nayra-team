import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Header from '../components/sections/Header';
import SectionBlock from '../components/sections/SectionBlock';
import Features from '../components/sections/Features';
import Team from '../components/sections/Team';
import FIT from '../components/sections/FIT';
import Contact from '../components/sections/Contact';

const theme = {
  colors: {
    dark: '#04090d',
    light: '#f8f8f8',
    primary: '#1ac69e'
  },
  fonts: {
    display: "'Saira', sans-serif",
    text: "'Work Sans', sans-serif"
  },
  pageWidth: {
    xl: 1200
  }
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  max-width: ${theme.pageWidth.xl}px;
`;

const P = styled.p`
  font-family: ${theme.fonts.display};
  font-size: 1.5em;
  margin: 1.375em 0;
`;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <article>
          <Container>
            <Header title="No sé qué frase va acá">
              <P>We are a team of designers, developers and artists established as a worker's co-op, dedicated to the development of reliable and dynamic interactive systems.</P>
              <P>Collaborative work and a horizontal and democratic organization enhance the creative and professional processes, allowing us to obtain excellent results in each project.</P>
            </Header>
          </Container>
          <Container>
            <SectionBlock title={<span>Why is better <span>to hire us?</span></span>}>
              <Features />
            </SectionBlock>
          </Container>
          <Container>
            <SectionBlock title={<span>Meet <span>the team</span></span>}>
              <Team />
            </SectionBlock>
          </Container>
          <Container>
            <SectionBlock title={<span>Need <span>a bigger team</span></span>}>
              <P>I am part of a team of developers and, as such, we work together in an organized, decisive manner and in an environment of support and trust that allows us to offer fully compatible resources and  teams. As an interdisciplinary team, we approach each project from a global perspective that meets all your specific requirements. As a company, we understand that this is an industry that is continuously evolving and ...</P>
            </SectionBlock>
          </Container>
          <Contact title={<span>Keep <span>in touch</span></span>} />
        </article>
      </ThemeProvider>
    </div>
  );
}

export default App;
