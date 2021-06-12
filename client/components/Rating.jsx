import React from 'react';
import styled from 'styled-components';
import { StarIcon, StarSet, StarDisp, RatingInternalWrapper, Total } from './Styles.jsx';

const star = (fill, num) => {
  // 0 = empty, 0.5 = half, 1 = full
  return StarDisp(fill, num);
};

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const Rating = (props) => {
  const five = [0, 1, 2, 3, 4];
  const starArray = five.map(num => {
    if (props.average.toFixed(1) - num <= 0.3) {
      return star(0, num);
    }
    if (props.average.toFixed(1) - num >= 0.7) {
      return star(1, num);
    }
    return star(0.5, num);
  });
  return (
    <RatingInternalWrapper>
      {props.average.toFixed(1)}
      <StarSet>{props.condensed ? star(1, 1) : starArray}</StarSet>
      <Total>{'(' + numberWithCommas(props.total) + (props.condensed ? ')' : ' ratings)')}</Total>
      <Total>{props.students ? numberWithCommas(props.students) : null} students</Total>
    </RatingInternalWrapper>
  );
};

export { Rating as default };
export { star };