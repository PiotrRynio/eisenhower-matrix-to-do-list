import styled from 'styled-components';
import { Typography } from '../Typography';

export const Label = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: default;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;
