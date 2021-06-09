import React from 'react';
import styled from 'styled-components';

export const BodyWrapper = styled.div`
  background-color: #1e1e1c;
  margin-top: 86px;
  margin-right: 0px;
  margin-left: 0px;
  `;

export const Title = styled.h1`
  color: white;
  font-size: 32px;
  letter-spacing: 0.5px;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:600;
  margin-top: 8px;
  margin-bottom: 8px;
  `;

export const Tagline = styled.div`
  color: white;
  font-size: 19px;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:300;
  margin-top:16px;
  margin-bottom:16px;
  `;

export const BestBox = styled.div`
  display: ${props => props.showBest ? 'inline' : 'none'};;
  `;

export const Bestseller = styled.span`
  background-color: #FFE799;
  font-size:12px;
  color: black;
  font-family:"sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 4px 8px;
  border-radius:7%;
  display: inline;
  `;

export const RatingWrapper = styled.div`
  margin-top: 8px;
  display: inline;
  color: #FFC48C;
  `;

export const AuthorWrapper = styled.div`
  color: white;
  font-size: 14px;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:250;
  margin-top:16px;
  margin-bottom:16px;
  `;

export const AuthorName = styled.a`
  color: #8ED1DC;
  text-decoration: underline;
  display:inline;
  `;

export const TrailingInfo = styled.div`
  color: white;
  font-size: 14px;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:250;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-right: 14px;
  display: inline-block;
  word-wrap: normal;
  `;

export const SmallIcon = styled.svg`
  width: 14px;
  height: auto;
  padding-top: 4px;
  box-sizing: border-box;
  display: inline;
  vertical-align: -2px;
  `;

export const InfoText = styled.span`
  margin-left: 8px;
  display: inline;
  `;

export const StarIcon = styled.svg`
  width: 14px;
`;

export const StarSet = styled.div`
  display:inline;
  margin-left: 4px;
  margin-right: 4px;
  vertical-align: -2px;
  `;

export const RatingInternalWrapper = styled.div`
  display:inline;
  font-size:14px;
  margin-left: 4px;
  color:#FFC48C;
  font-family:"sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  `;

export const Total = styled.div`
  color:white;
  display:inline;
  margin-left: 4px;
  margin-right: 4px;
  font-weight: 300;
  `;

export const WishlistButton = styled.button`
  position: relative;
  color: white;
  height: 40px;
  width: 20%;
  border: 1px solid white;
  margin: 8px;
  font-weight: 700;
  background: transparent;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  min-width: 10rem;
  padding: 0 1.2rem;
  `;

export const GiftButton = styled.button`
  position: relative;
  color: white;
  height: 40px;
  width: 20%;
  border: 1px solid white;
  margin: 8px;
  font-weight: 700;
  background: transparent;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  min-width: 10rem;
  padding: 0 1.2rem;
  `;

export const ButtonWrapper = styled.div`
  display: block;
  `;

export const ShareButton = styled.button`
  position: relative;
  color: white;
  height: 40px;
  width: 20%;
  border: 1px solid white;
  font-weight: 700;
  background: transparent;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  min-width: 10rem;
  padding: 0 1.2rem;
  `;

export const WishContents = styled.div`
  height: 40px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  display: flex;
  `;

export const GiftContents = styled.div`
  height: 40px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  display: flex;
  `;

export const ShareContents = styled.span`
  height: 40px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  display: flex;
  `;

export const WishAdd = styled.div`
  display: flex;
  margin-right: 10px;
  `;

export const ShareText = styled.div`
  display: flex;
  margin-right: 10px;
  `;

export const GiftText = styled.div`
  display: flex;
  `;

export const HeartIcon = styled.svg`
  box-sizing: border-box;
  color: white;
  width: 24px;
  height: 24px;
  display: inline;
  `;

export const ShareArrow = styled.svg`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  display: inline;
  `;

export const Subject = styled.a`
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #8ED1DC;
  display:inline;
  text-decoration: none;
`;

export const Pointer = styled.div`
  color: white;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 10px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  display:inline;
`;

export const IconNext = styled.svg`
  fill: white;
  width: 14px;
`;

export const ModalWrapper = styled.div`
    display: ${props => props.showModal ? 'block' : 'none'};
    position: fixed;
    z-index: 2000;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: black;
    background-color: rgba(0,0,0,0.4);
    `;

export const ModalContent = styled.div`
  background-color: white;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 8px;
  width 50%;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -60%);
    `;

export const Closer = styled.span`
  color: grey;
  float: right;
  display: inline;
  font-size: 28px;
  font-weight: 300px;
  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  `;

export const ModalHeader = styled.h2`
  color: black;
  font-weight: 600;
  line-height: 1.2;
  font-size: 20px;
  letter-spacing: -.02rem;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  `;

export const ModalBox = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: white;

  `;

export const ShareHtml = styled.input`
  border-top-left-radius: 4px;
  font-size: 14px;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  border-bottom-left-radius: 4px;
  border: 1px solid grey;
  height: 40px;
  width: 78%;
  display: inline;
  background-color: white;
  `;

export const ShareCopy = styled.button`
  font-size: 14px;
  font-weight: 500;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: inline;
  color: white;
  font-weight: 600;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #0f7c90;
  margin: auto;
  height: 44px;
  width: 20%;
  border: 1px solid grey;
  &:hover {
    background-color: #083e48;
    text-decoration: none;
    cursor: pointer;
  }
  `;

export const InfobarWrapper = styled.div`
  background-color: #1e1e1c;
  color: white;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, .08), 0 -4px 12px rgba(0, 0, 0, .16);
  margin: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: block;
  `;

export const InfobarTitle = styled.div`
  font-weight: 600;
  font-size: 0.8 rem;
  letter-spacing: 0.03rem;
  margin-bottom: 8px;
  `;


export const Arrow = (
  <path d="M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6-1.41 1.41z"></path>
);

export const UpdatedIcon = (
  <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z" fill="white">
  </path>
);

export const GlobeIcon = (
  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" fill="white">
  </path>
);

export const CCIcon = (
  <path d="M20.4 2.4H3.6a2.4 2.4 0 00-2.4 2.4v14.4a2.4 2.4 0 002.4 2.4h16.8c1.32 0 2.4-1.08 2.4-2.4V4.8c0-1.32-1.08-2.4-2.4-2.4zm-9.6 8.4H9v-.6H6.6v3.6H9v-.6h1.8v1.2c0 .66-.54 1.2-1.2 1.2H6c-.66 0-1.2-.54-1.2-1.2V9.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.2zm8.4 0h-1.8v-.6H15v3.6h2.4v-.6h1.8v1.2c0 .66-.54 1.2-1.2 1.2h-3.6c-.66 0-1.2-.54-1.2-1.2V9.6c0-.66.54-1.2 1.2-1.2H18c.66 0 1.2.54 1.2 1.2v1.2z" fill="white">
  </path>
);

export const StarDisp = function (fill, num) {
  const fillings = ['black', 'url(#halfstar)', '#FFC48C'];
  return (
    <StarIcon key={num} viewBox="0 0 24 24" width="12" beight="12">
      <defs>
        <linearGradient id="halfstar">
          <stop offset="50%" stopColor="#FFC48C"/>
          <stop offset="50%" stopColor="black" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" strokeWidth="1" stroke="#FFC48C" fill={fillings[Math.floor(fill * 2)]}></path>
    </StarIcon>
  );
};

export const HeartPath = (filling) => {
  return (
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeWidth="2" stroke="white" fill={filling ? 'red' : 'transparent'}>
    </path>
  );
};

export const SharePath = (
  <path d="M23.25 10.75L14.5 2v5C5.75 8.25 2 14.5.75 20.75c3.125-4.375 7.5-6.375 13.75-6.375V19.5l8.75-8.75z" fill="white" id="share5"></path>
);