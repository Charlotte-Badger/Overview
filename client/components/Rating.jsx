import React from 'react';

// Rating value of 3.7 chosen for now, to check code for half-stars

const star = (fill) => {
  // 0 = empty, 0.5 = half, 1 = full
  const fillings = ["black", "url(#halfstar)", "#FFC48C"];
  return (
  <svg className="star" viewBox="0 0 24 24" width="12" beight="12">
    <defs>
      <linearGradient id="halfstar">
          <stop offset="50%" stop-color="#FFC48C"/>
          <stop offset="50%" stop-color="black" stop-opacity="1" />
      </linearGradient>
    </defs>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" strokeWidth="1" stroke="#FFC48C" fill={fillings[Math.floor(fill * 2)]}></path>
  </svg>
  );
};

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Rating = (props) => {
  const five = [0, 1, 2, 3, 4];
  const starArray = five.map(num => {
    if (props.average - num <= 0.2) {
      return star(0);
    }
    if (props.average - num >= 0.8) {
      return star(1);
    }
    return star(0.5);
  });
  return (
    <div id="rating">
      {props.average.toFixed(1)}
      <div id="star-set">{starArray}</div>
      <div id="reviews-total">{"(" + numberWithCommas(props.total) + " ratings)"}</div>
      <div id="students-total">{props.students ? numberWithCommas(props.students) : null} students</div>
    </div>
  )
};

export { Rating as default };
