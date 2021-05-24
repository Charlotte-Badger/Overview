import React from 'react';
import styled from 'styled-components';
import { ShareButton, ShareContents, ShareText, ShareArrow, SharePath } from './Styles.jsx';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.shareClick = this.shareClick.bind(this);
  }

  shareClick () {
    console.log('Share clicked');

  }

  render () {
    return (
      <ShareButton onClick={this.wishClick}>
        <ShareContents>
          <ShareText>Share</ShareText>
          <svg width="18px" height="18px">
            <ShareArrow viewBox="0 0 24 24">
              {SharePath}
            </ShareArrow>
          </svg>
        </ShareContents>
      </ShareButton>
    )
  }
};

export default Share;