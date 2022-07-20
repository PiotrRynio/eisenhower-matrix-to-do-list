import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from 'types/Task';
import { TaskListsIds } from 'types/TaskListsIds';
import { useTasksLists } from 'hooks';
import { Button, Overlay, TasksListsSelect, TasksLabelsSelect } from 'components';
import { Buttons, TaskNameInput, Popup } from './CreateNewTaskPopup.styles';

export type CreateNewTaskPopupProps = {
  onClose: () => void;
};

export const CreateNewTaskPopup = ({ onClose }: CreateNewTaskPopupProps) => {
  const [selectedList, setSelectedList] = useState<TaskListsIds>();
  const [newTaskName, setNewTaskName] = useState('');
  const [checkedLabels, setCheckedLabels] = useState<string[]>([]);

  const { createNewTask } = useTasksLists();

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    const isTooLong = newName.length > 20;
    if (isTooLong) {
      return;
    }
    setNewTaskName(newName);
  };

  const handleSubmit = () => {
    if (!newTaskName) {
      return;
    }
    const newTask: Task = {
      id: uuidv4(),
      name: newTaskName,
      labels: checkedLabels,
    };
    createNewTask(newTask, selectedList || 'NOT_URGENT_AND_NOT_IMPORTANT');
    onClose();
  };

  return (
    <Overlay isOpened={true} onOverlayClick={onClose}>
      <Popup>
        <TaskNameInput value={newTaskName} onChange={handleTaskNameChange} placeholder="Task name..." />

        <TasksLabelsSelect onChange={setCheckedLabels} />

        <TasksListsSelect onChange={setSelectedList} />

        <Buttons>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} isPrimary>
            Add task
          </Button>
        </Buttons>
      </Popup>
    </Overlay>
  );
};
