import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ isPrimary?: boolean }>`
  ${({ theme }) => theme.mixins.typography.body1}
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.idle};
  color: ${({ theme }) => theme.colors.primaryText};
  cursor: pointer;

  ${({ isPrimary, theme }) =>
    isPrimary &&
    css`
      border: none;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${theme.colors.primaryOpposed};
    `}
`;
