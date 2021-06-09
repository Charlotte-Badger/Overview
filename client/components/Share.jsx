import React from 'react';
import styled from 'styled-components';
import { ShareButton, ShareContents, ShareText, ShareArrow, SharePath } from './Styles.jsx';

const Share = (props) => {
  return (
    <ShareButton id="share1" onClick={props.handleClick} >
      <ShareContents id="share2">
        <ShareText id="share3">Share</ShareText>
        <svg width="18px" height="18px">
          <ShareArrow id="share4" viewBox="0 0 24 24">
            {SharePath}
          </ShareArrow>
        </svg>
      </ShareContents>
    </ShareButton>
  );
};

export default Share;