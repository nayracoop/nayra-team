import React from 'react';
import styled, { withTheme } from 'styled-components' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  siApacheairflow,
  siApachespark,
  siKubernetes,
  siPandas,
  siPytorch,
  siTensorflow,
} from 'simple-icons';

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

  svg {
    width: 1em;
    height: 1em;
    vertical-align: -0.125em;
    fill: currentColor;
  }
`;

// Tools not covered by Font Awesome brands or font-mfizz
const customIcons = {
  airflow: siApacheairflow,
  spark: siApachespark,
  kubernetes: siKubernetes,
  pandas: siPandas,
  pytorch: siPytorch,
  tensorflow: siTensorflow,
};

const SimpleIcon = ({ icon }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label={icon.title}>
    <title>{icon.title}</title>
    <path d={icon.path} />
  </svg>
);

const TeamCardInfoIcons = (props) => {

  let icons = null;
  if(props.set) icons = props.set.map(icon => {
    if (customIcons[icon]) {
      return <Item key={icon}><SimpleIcon icon={customIcons[icon]} /></Item>
    }
    return <Item key={icon}><FontAwesomeIcon icon={['fab', icon]} /><i className={'icon-' + icon}></i></Item>
  })

  return (
    <List className="TeamCardInfoIcons">
      {icons}
    </List>
  );
}

export default withTheme(TeamCardInfoIcons);
