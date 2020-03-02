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
  }
}

const Container = styled.div`
    margin: 0 auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
`;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <article>
          <Container>
            <Header title="No sé qué frase va acá">
              <p>We are a team of designers, developers and artists established as a worker's co-op, dedicated to the development of reliable and dynamic interactive systems.</p>
              <p>Collaborative work and a horizontal and democratic organization enhance the creative and professional processes, allowing us to obtain excellent results in each project.</p>
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
              <FIT />
            </SectionBlock>
          </Container>
          <Container>
            <Contact />
          </Container>
        </article>
      </ThemeProvider>
    </div>
  );
}

export default App;
