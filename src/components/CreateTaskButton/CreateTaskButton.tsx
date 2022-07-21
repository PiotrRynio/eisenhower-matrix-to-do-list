import { useState } from 'react';
import { Button, CreateNewTaskPopup, Overlay } from 'components';

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
      {isPopupOpened && (
        <Overlay isOpened={true} onOverlayClick={() => setIsPopupOpened(false)}>
          <CreateNewTaskPopup onClose={() => setIsPopupOpened(false)} />
        </Overlay>
      )}
    </>
  );
};
