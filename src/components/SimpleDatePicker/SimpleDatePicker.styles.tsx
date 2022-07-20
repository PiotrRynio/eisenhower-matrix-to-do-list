import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: ${({ theme }) => theme.sizes.selectBoxWidth.default};
`;

export const DataPickerContainer = styled.div`
  position: relative;
`;

export const IconContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 8px;
  left: 8px;
  cursor: text;
`;

export const StyledDatePicker = styled(DatePicker)`
  ${({ theme }) => theme.mixins.typography.label};
  height: ${({ theme }) => theme.sizes.selectBoxHeight.default};
  width: 100%;
  padding: 8px 8px 8px 36px;
  border: 1px solid ${({ theme }) => theme.colors.hardBorder};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
`;
