import styled from 'styled-components';
import { POPUP_Z_INDEX } from 'constants/zIndexs';

export const Popup = styled.div`
  z-index: ${POPUP_Z_INDEX};
  position: relative;
  display: flex;
  width: 90%;
  max-width: 450px;
  padding: 16px;
  margin: 100px auto;
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 15px 50px 0 rgba(0, 0, 0, 0.35);
`;

export const TaskNameInput = styled.input`
  ${({ theme }) => theme.mixins.typography.body1};
  width: 100%;
  border: none;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  outline: none;
`;

export const TaskDescriptionInput = styled.input`
  ${({ theme }) => theme.mixins.typography.label};
  width: 100%;
  border: none;
  outline: none;
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  gap: 12px;
`;
