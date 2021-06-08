import React from 'react';
import styled from 'styled-components';
import { Subject, Pointer, IconNext, Arrow } from './Styles.jsx';

const Subjects = (props) => {
  if (props.subjects) {
    return (
    <div>
      <Subject href={"http://www.google.com/search?q=" + props.subjects[0]}>{props.subjects[0]}</Subject>
      <Pointer>
        <IconNext viewBox="0 -5 24 24">
          {Arrow}
        </IconNext>
      </Pointer>
      <Subject href={"http://www.google.com/search?q=" + props.subjects[1]}>{props.subjects[1]}</Subject>
      <Pointer>
        <IconNext viewBox="0 -5 24 24">
          {Arrow}
        </IconNext>
      </Pointer>
      <Subject href={"http://www.google.com/search?q=" + props.subjects[2]}>{props.subjects[2]}</Subject>
    </div>
  )}
  else { return null };
};

export default Subjects;