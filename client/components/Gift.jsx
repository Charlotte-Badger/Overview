import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiftButton, GiftContents, GiftText } from './Styles.jsx';

const Gift = (props) => {
  return (
    <a href="https://www.udemy.com/join/signup-popup">
      <GiftButton id="gift1">
        <GiftContents id="gift2">
          <GiftText id="gift3">Gift this course</GiftText>
        </GiftContents>
      </GiftButton>
    </a>
  );
}

export default Gift;