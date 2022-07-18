import styled from 'styled-components';
import { OVERLAY_Z_INDEX } from 'constants/zIndexs';

export const StyledOverlayWrapper = styled.div`
  z-index: ${OVERLAY_Z_INDEX};
  position: fixed;
  inset: 0;
`;

export const StyledOverlay = styled.label`
  position: absolute;
  inset: 0;
`;
