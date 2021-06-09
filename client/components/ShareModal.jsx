import React from 'react';
import { ModalWrapper, ModalContent, Closer, ModalHeader, ModalBox, ShareHtml, ShareCopy } from './Styles.jsx';
import styled from 'styled-components';

const copyToClipboard = function (e) {
  e.preventDefault();
  e.target[0].select();
  document.execCommand('copy');
};

const ShareModal = (props) => {
  return (
    <ModalWrapper id="close1" showModal={props.showModal} onClick={props.handleClick}>
      <ModalContent id="safe">
        <Closer id="close2" dangerouslySetInnerHTML={{__html: '&times;'}}></Closer>
        <ModalHeader>Share this course</ModalHeader>
        <ModalBox>
          <form onSubmit={copyToClipboard}>
            <ShareHtml readOnly type="text" value={window.location.href}></ShareHtml>
            <ShareCopy type="submit"><span>Copy</span></ShareCopy>
          </form>
        </ModalBox>
      </ModalContent>
    </ModalWrapper>
  );
};

export { ShareModal as default };