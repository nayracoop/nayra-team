import React from 'react';
import styled, { withTheme } from 'styled-components' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TeamCardInfoIcons = (props) => {

  const List = styled.ul`
    margin: 0.25em 0;
  `;

  const Item = styled.li`
    display: inline-block;
    font-size: 1.25em;
    margin: 0 0.125em;
  `;

  return (
    <List className="TeamCardInfoIcons">
      <Item><i class="icon-mongodb"></i></Item>
      <Item><i class="icon-reactjs"></i></Item>
      <Item><FontAwesomeIcon icon={['fab', 'vuejs']} /></Item>
    </List>
  );
}

export default withTheme(TeamCardInfoIcons);