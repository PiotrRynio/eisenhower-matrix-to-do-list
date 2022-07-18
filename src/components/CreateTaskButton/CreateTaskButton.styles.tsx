import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.primaryOpposed};
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundHovered};
  }
`;
