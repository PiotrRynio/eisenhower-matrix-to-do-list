import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  margin-top: 32px;
  gap: 8px;
  flex-direction: column;
`;

export const StyledTasksList = styled.ul`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  list-style: none;
`;
