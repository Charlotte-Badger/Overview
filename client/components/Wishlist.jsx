import React from 'react';
import styled from 'styled-components';
import { WishlistButton, WishAdd, WishContents, HeartIcon, HeartPath } from './Styles.jsx';

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist: false,
      matches: window.matchMedia('(min-width: 1080px)').matches
    };
    this.wishClick = this.wishClick.bind(this);
  }

  wishClick () {
    console.log('Wish clicked');
    this.setState({ wishlist: !this.state.wishlist });
    console.log(this.state.wishlist);
  }

  componentDidMount () {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia('(min-width: 1080px)').addListener(handler);
  }

  render () {
    return (
      <WishlistButton onClick={this.wishClick}>
        <WishContents>
          <WishAdd>{!this.state.matches && (<span>Add to Wishlist</span>)}{this.state.matches && (<span>Wishlist</span>)}</WishAdd>
          <svg width="18px" height="18px" color="white">
            <HeartIcon viewBox="0 0 24 24">
              {HeartPath(this.state.wishlist)}
            </HeartIcon>
          </svg>
        </WishContents>
      </WishlistButton>
    );
  }
}

export default Wishlist;