import { useState } from 'react';
import { Button, CreateNewTaskPopup } from 'components';

export const CreateTaskButton = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  return (
    <>
      <Button
        isPrimary
        onClick={() => {
          setIsPopupOpened(true);
        }}
      >
        Add new task
      </Button>
      {isPopupOpened && <CreateNewTaskPopup onClose={() => setIsPopupOpened(false)} />}
    </>
  );
};
