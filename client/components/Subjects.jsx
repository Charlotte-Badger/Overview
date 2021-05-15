import React from 'react';

const Subjects = (props) => {
  if (props.subjects) {
    return (
      <div>
    <div className="subject">{props.subjects[0]}</div>
    <div className="pointer">
    <svg className="icon-next" viewBox="0 -5 24 24">
      <path d="M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6-1.41 1.41z"></path>
      </svg>
    </div>
    <div className="subject">{props.subjects[1]}</div>
    <div className="pointer">
      <svg className="icon-next" viewBox="0 -5 24 24">
        <path d="M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6-1.41 1.41z"></path>
        </svg>
    </div>
    <div className="subject">{props.subjects[2]}</div>
    </div>
  )}
  else { return null };
};

export default Subjects;