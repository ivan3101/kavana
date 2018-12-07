import React from 'react';
import styled from "styled-components";
import Overlay from "./overlay/overlay";
import CloseButton from "./closeButton/closeButton";
import ModalContent from "./modalContent/modalContent";
import CrossIcon from "./crossIcon/crossIcon";

const modal = ({ className, children, closeCb, modalColor, crossColor, textColor }) => {
    return (
        <div className={className}>
            <Overlay onClick={closeCb}/>
            <ModalContent modalColor={modalColor} textColor={textColor}>
                {children}

                <CloseButton onClick={closeCb}>
                    <CrossIcon crossColor={crossColor}/>
                </CloseButton>
            </ModalContent>
        </div>
    );
};

const Modal = styled(modal)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
  display: ${props => props.show ? 'block' : 'none'};
`;

export default Modal;
