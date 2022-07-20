import styled, { css } from 'styled-components';

export const Label = styled.button<{ isChecked?: boolean }>`
  ${({ theme }) => theme.mixins.typography.label};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.softBorder};
  cursor: default;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
    }
  }

  ${({ isChecked }) =>
    isChecked &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primaryOpposed};
    `}
`;
