import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.softBorder};
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

export const RemoveTaskButton = styled.button`
  display: flex;
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.hardBorder};

  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.transparent};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.primaryHovered};
      background: ${({ theme }) => theme.colors.primaryHovered};
    }
  }
`;
