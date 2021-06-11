import React from 'react';
import styled from 'styled-components';
import Rating, { star } from './Rating.jsx';
import { InfobarWrapper, InfobarLeft, InfobarRight, InfoPrice, InfoBuy, InfoRedirect, InfobarTitle, BestBox, Bestseller, RatingWrapper } from './Styles.jsx';

// title, showBest, average, total, students

const bestseller = (average, ratings, total) => average >= 3.7 && ratings >= 50 && total >= 50000;

const Infobar = (props) => {
  console.log('Info props', props);
  return (
    <InfobarWrapper>
      <InfobarLeft>
        <InfobarTitle>{props.title}</InfobarTitle>
        <BestBox id="infobest" showBest={bestseller(props.average, props.total, props.students)}><Bestseller>Bestseller</Bestseller></BestBox>
        <RatingWrapper><Rating average={props.average} total={props.total} students={props.students} condensed={true}/></RatingWrapper>
      </InfobarLeft>
      <InfobarRight>
        <InfoPrice>${props.price}</InfoPrice>
        <InfoRedirect href="https://www.udemy.com/join/signup-popup"><InfoBuy>Buy Now</InfoBuy></InfoRedirect>
      </InfobarRight>
    </InfobarWrapper>
  );
};

export { Infobar as default };