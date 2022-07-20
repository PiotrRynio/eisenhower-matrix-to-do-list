import styled from 'styled-components';

export const LabelsWrapper = styled.section`
  overflow: scroll;
  display: flex;
  width: 100%;
  padding: 8px 0;
  gap: 8px;
`;

export const LabelInputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const AddLabelButton = styled.button`
  height: 20px;
  width: 20px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.transparent};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const LabelInput = styled.input`
  ${({ theme }) => theme.mixins.typography.label};
  width: 100%;
  border: none;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  outline: none;
`;
