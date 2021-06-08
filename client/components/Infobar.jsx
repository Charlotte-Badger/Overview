import React from 'react';
import styled from 'styled-components';
import Rating, { star } from './Rating.jsx';
import { InfobarWrapper, InfobarTitle, BestBox, Bestseller, RatingWrapper } from './Styles.jsx';

// title, showBest, average, total, students

const bestseller = (average, ratings, total) => average >= 3.7 && ratings >= 50 && total >= 50000;

const Infobar = (props) => {
  return (
    <InfobarWrapper>
      <InfobarTitle>{props.title}</InfobarTitle>
      <BestBox id="infobest" showBest={bestseller(props.average, props.total, props.students)}><Bestseller>Bestseller</Bestseller></BestBox>
      <RatingWrapper><Rating average={props.average} total={props.total} students={props.students} condensed={true}/></RatingWrapper>
    </InfobarWrapper>
  )
}

export { Infobar as default };