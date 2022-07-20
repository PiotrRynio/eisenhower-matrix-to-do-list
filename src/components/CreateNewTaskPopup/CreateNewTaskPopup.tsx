import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from 'types/Task';
import { TaskListsIds } from 'types/TaskListsIds';
import { useTasksLists } from 'hooks';
import { Button, Overlay, TasksListsSelect, TasksLabelsSelect, SimpleDatePicker } from 'components';
import { Buttons, TaskNameInput, Popup, TaskDescriptionInput } from './CreateNewTaskPopup.styles';

export type CreateNewTaskPopupProps = {
  onClose: () => void;
};

export const CreateNewTaskPopup = ({ onClose }: CreateNewTaskPopupProps) => {
  const [selectedList, setSelectedList] = useState<TaskListsIds>();
  const [newTaskName, setNewTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [checkedLabels, setCheckedLabels] = useState<string[]>([]);
  const [taskDeadline, setTaskDeadline] = useState<Date | undefined>(undefined);

  const { createNewTask } = useTasksLists();

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    const isTooLong = newName.length > 20;
    if (isTooLong) {
      return;
    }
    setNewTaskName(newName);
  };

  const handleTaskDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    const isTooLong = newName.length > 40;
    if (isTooLong) {
      return;
    }
    setTaskDescription(newName);
  };

  const handleSubmit = () => {
    if (!newTaskName) {
      return;
    }
    const newTask: Task = {
      id: uuidv4(),
      name: newTaskName,
      labels: checkedLabels,
      description: taskDescription,
      deadlineDate: taskDeadline,
    };
    createNewTask(newTask, selectedList || 'NOT_URGENT_AND_NOT_IMPORTANT');
    onClose();
  };

  return (
    <Overlay isOpened={true} onOverlayClick={onClose}>
      <Popup>
        <TaskNameInput value={newTaskName} onChange={handleTaskNameChange} placeholder="Task name..." />
        <TaskDescriptionInput
          value={taskDescription}
          onChange={handleTaskDescriptionChange}
          placeholder="Description... (optional)"
        />

        <TasksLabelsSelect onChange={setCheckedLabels} />

        <TasksListsSelect onChange={setSelectedList} />

        <SimpleDatePicker onChange={setTaskDeadline} />

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
