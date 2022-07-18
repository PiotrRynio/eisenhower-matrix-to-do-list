import { useState } from 'react';
import { CreateNewTaskPopup } from 'components';
import { StyledButton } from './CreateTaskButton.styles';

export const CreateTaskButton = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  return (
    <>
      <StyledButton
        onClick={() => {
          setIsPopupOpened(true);
        }}
      >
        Add new task
      </StyledButton>
      {isPopupOpened && <CreateNewTaskPopup onClose={() => setIsPopupOpened(false)} />}
    </>
  );
};
