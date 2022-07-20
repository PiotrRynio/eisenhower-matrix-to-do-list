import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  margin-top: 32px;
  gap: 8px;
  flex-direction: column;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledTasksList = styled.ul`
  border-top: 1px solid ${({ theme }) => theme.colors.softBorder};
  list-style: none;
`;
