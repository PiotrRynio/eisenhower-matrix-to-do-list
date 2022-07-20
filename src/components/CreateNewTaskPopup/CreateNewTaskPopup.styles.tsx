import styled from 'styled-components';
import { POPUP_Z_INDEX } from 'constants/zIndexs';
import { Typography } from 'components';

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

export const TaskNameInputContainer = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const TaskNameInput = styled.input`
  ${({ theme }) => theme.commonMixins.typography.body1};
  border: none;
  padding: 2px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  outline: none;
`;

export const ErrorHintTypography = styled(Typography)`
  color: ${({ theme }) => theme.colors.error};
`;

export const TaskDescriptionInput = styled.input`
  ${({ theme }) => theme.commonMixins.typography.small};
  width: 100%;
  padding: 2px;
  border: none;
  outline: none;
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  gap: 12px;
`;
