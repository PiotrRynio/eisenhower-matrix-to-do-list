import { CreateTaskButton, Logo } from 'components';
import { Wrapper } from './TopBar.styles';

export const TopBar = () => {
  return (
    <Wrapper>
      <Logo />
      <CreateTaskButton />
    </Wrapper>
  );
};
