import React from 'react';
import styled, { withTheme } from 'styled-components' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const List = styled.ul`
  margin: 0.25em 0;
`;

const Item = styled.li`
  display: inline-block;
  font-size: 1.3125em;
  margin: 0 0.25em;

  svg + i {
    display:none;
  }
`;

const TeamCardInfoIcons = (props) => {

  let icons = null;
  console.log(props.set)
  if(props.set) icons = props.set.map(icon => {
    return <Item key={icon}><FontAwesomeIcon icon={['fab', icon]} /><i class={'icon-' + icon}></i></Item>
  })

  return (
    <List className="TeamCardInfoIcons">
      {icons}
    </List>
  );
}

export default withTheme(TeamCardInfoIcons);