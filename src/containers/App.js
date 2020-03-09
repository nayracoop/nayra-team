import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
 
import Header from '../components/sections/Header';
import SectionBlock from '../components/sections/SectionBlock';
import Features from '../components/sections/Features';
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';

library.add(fab);

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
    xl: 1200,
    l: 992,
    m: 768,
    s: 576
  }
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  @media (min-width: ${theme.pageWidth.s}px) {
    max-width: ${theme.pageWidth.s}px;
  }
  @media (min-width: ${theme.pageWidth.m}px) {
    max-width: ${theme.pageWidth.m}px;
  }
  @media (min-width: ${theme.pageWidth.l}px) {
    max-width: ${theme.pageWidth.l}px;
  }
  @media (min-width: ${theme.pageWidth.xl}px) {
    max-width: ${theme.pageWidth.xl}px;
  }
`;

const P = styled.p`
  font-family: ${theme.fonts.display};
  font-size: 1.5em;
  margin: 1.375em 0;
`;

class App extends Component {

  componentDidMount = () => {
    // window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    // window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    document.body.style.backgroundPosition = `center, center ${-400 + scrollTop/8}px`
  }

  render() {
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
                <P>We work with all these people from FIT that are unos capos and  lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed magna porta, rutrum dui et, sollicitudin ligula. Duis porttitor blandit mi ornare dignissim. Curabitur eget imperdiet purus, quis condimentum metus. Integer sodales enim eu nibh dignissim venenatis. Duis sit amet condimentum est. Donec facilisis,.</P>
              </SectionBlock>
            </Container>
            <Contact title={<span>Keep <span>in touch</span></span>} email="info@nayra.coop" />
          </article>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
