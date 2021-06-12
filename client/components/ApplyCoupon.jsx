import React from 'react';
import styled from 'styled-components';
import { CouponButton, CouponContents, CouponText } from './Styles.jsx';

const ApplyCoupon = (props) => {
  return (
    <a href="https://www.udemy.com/join/signup-popup">
      <CouponButton id="coupon1">
        <CouponContents id="coupon2">
          <CouponText id="gift3">Apply Coupon</CouponText>
        </CouponContents>
      </CouponButton>
    </a>
  );
};

export default ApplyCoupon;