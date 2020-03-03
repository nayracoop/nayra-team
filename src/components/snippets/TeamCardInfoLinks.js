import React from 'react';
import styled, { withTheme } from 'styled-components' 

const TeamCardInfoLinks = (props) => {

  const InlineList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
  `;

  return (
    <InlineList className="TeamCardInfoLinks">
      <li><a href="/">/pehuenrodriguez</a></li>
      <li><a href="/">/pehuenrodriguez</a></li>
    </InlineList>
  );
}

export default withTheme(TeamCardInfoLinks);