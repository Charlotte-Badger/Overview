import React from 'react';
import styled from 'styled-components';
//import {  } from './Styles.jsx';

const Captions = (props) => {
  if (!props.captions) { return null; }
  if (!props.expanded) {
    return (
      <span>{props.captions[0]}, {props.captions[1]}, <u><span textDecoration="underline" onClick={props.handleClick}>{props.captions.length - 2} more</span></u></span>
    );
  } else {
    return (
      <span>{props.captions.join(', ')}</span>
    );
  }
};

export {Captions as default};