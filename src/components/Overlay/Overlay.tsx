import ReactDOM from 'react-dom';
import { StyledOverlay, StyledOverlayWrapper } from './Overlay.styles';
import React from 'react';

export type OverlayProps = {
  children?: React.ReactNode;
  isOpened: boolean;
  onOverlayClick: () => void;
};

export const Overlay = ({ isOpened, onOverlayClick, children }: OverlayProps) => {
  if (!isOpened) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledOverlayWrapper>
      {children}
      <StyledOverlay onClick={onOverlayClick} />,
    </StyledOverlayWrapper>,
    document.getElementById('overlay-root') as HTMLElement,
  );
};
