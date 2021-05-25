import React from 'react';
//import { } from './Styles.jsx';
import styled from 'styled-components';

const ModalWrapper = styled.div`
    display: ${props => props.showModal ? 'block' : 'none'};
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: black;
    background-color: rgba(0,0,0,0.4);
    `;

const ModalContent = styled.div`
  background-color: white;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  width 80%;
  `;

const Closer = styled.span`
  color: grey;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  `;

const ShareModal = (props) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <Closer dangerouslySetInnerHTML={{__html: '$times;'}}></Closer>
        <div>Testing</div>
        </ModalContent>
    </ModalWrapper>
  )
}

export { ShareModal as default };