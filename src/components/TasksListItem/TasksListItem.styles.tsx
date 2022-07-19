import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  flex-direction: row;
  gap: 16px;
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const LabelsWrapper = styled.section`
  display: flex;
  gap: 8px;
`;
