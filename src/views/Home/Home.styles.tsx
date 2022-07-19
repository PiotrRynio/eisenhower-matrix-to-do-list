import styled from 'styled-components';
import { Button } from '../../components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  margin-top: 8px;
`;
export const TaskLists = styled.ul`
  list-style: none;
`;
