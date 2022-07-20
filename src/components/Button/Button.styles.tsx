import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ isPrimary?: boolean }>`
  ${({ theme }) => theme.commonMixins.typography.button}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 19px;
  background-color: ${({ theme }) => theme.colors.primaryOpposed};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryOpposedHovered};
    }
  }

  ${({ isPrimary, theme }) =>
    isPrimary &&
    css`
      border-color: ${theme.colors.primaryOpposed};
      background-color: ${theme.colors.primary};
      color: ${theme.colors.primaryOpposed};

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        &:hover {
          background-color: ${theme.colors.primaryHovered};
        }
      }
    `}
`;
