import styled from 'styled-components';
import Select from 'react-select';
import { PRIORITY_SELECT } from 'constants/zIndexs';

export const Wrapper = styled.label`
  z-index: ${PRIORITY_SELECT};
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: ${({ theme }) => theme.sizes.selectBoxWidth.default};
`;

export const StyledSelect = styled(Select)`
  ${({ theme }) => theme.mixins.typography.small};
  height: ${({ theme }) => theme.sizes.selectBoxHeight.default};
  width: ${({ theme }) => theme.sizes.selectBoxWidth.default};

  & > div {
    border: 1px solid ${({ theme }) => theme.colors.hardBorder};
  }
`;
