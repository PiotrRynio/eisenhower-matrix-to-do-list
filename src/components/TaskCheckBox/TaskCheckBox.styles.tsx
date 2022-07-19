import styled from 'styled-components';

export const StyledInput = styled.input`
  overflow: hidden;
  position: absolute;
  height: 1px;
  width: 1px;
  white-space: nowrap;
`;

export const StyledCheckboxIconWrapper = styled.span<{ isChecked: boolean }>`
  display: flex;
  height: 20px;
  width: 20px;
  padding: 2px;
  border: 2px solid ${({ isChecked, theme }) => (isChecked ? theme.colors.primary : theme.colors.disabled)};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.transparent};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:hover {
      border-color: ${({ isChecked, theme }) => (isChecked ? theme.colors.disabled : theme.colors.primary)};
    }
  }
`;
