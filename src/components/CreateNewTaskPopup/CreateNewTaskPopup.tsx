import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from 'types/Task';
import { TaskListsIds } from 'types/TaskListsIds';
import { useTasksLists } from 'hooks';
import { Button, TasksListsSelect, TasksLabelsSelect, SimpleDatePicker } from 'components';
import {
  Buttons,
  TaskNameInput,
  Popup,
  TaskDescriptionInput,
  TaskNameInputContainer,
  ErrorHintTypography,
} from './CreateNewTaskPopup.styles';

export type CreateNewTaskPopupProps = {
  onClose: (isNewTaskCreated?: boolean) => void;
};

export const CreateNewTaskPopup = ({ onClose }: CreateNewTaskPopupProps) => {
  const [selectedList, setSelectedList] = useState<TaskListsIds>();
  const [newTaskName, setNewTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [checkedLabels, setCheckedLabels] = useState<string[]>([]);
  const [taskDeadline, setTaskDeadline] = useState<Date | undefined>(undefined);
  const [isValidationFailed, setIsValidationFailed] = useState<boolean>(false);

  const { createNewTask } = useTasksLists();

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setIsValidationFailed(false);

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
    const trimmedName = newTaskName.trim();
    if (!trimmedName) {
      setIsValidationFailed(true);
      setNewTaskName('');
      return;
    }
    const newTask: Task = {
      id: uuidv4(),
      name: trimmedName,
      labels: checkedLabels,
      description: taskDescription,
      deadlineDate: taskDeadline,
    };
    createNewTask(newTask, selectedList || 'NOT_URGENT_AND_NOT_IMPORTANT');
    onClose(true);
  };

  return (
    <Popup>
      <TaskNameInputContainer>
        {isValidationFailed && <ErrorHintTypography variant="small"> (required) </ErrorHintTypography>}
        <TaskNameInput value={newTaskName} onChange={handleTaskNameChange} placeholder="Task name..." required />{' '}
      </TaskNameInputContainer>
      <TaskDescriptionInput
        value={taskDescription}
        onChange={handleTaskDescriptionChange}
        placeholder="Description... (optional)"
      />

      <TasksLabelsSelect onChange={setCheckedLabels} />

      <TasksListsSelect onChange={setSelectedList} />

      <SimpleDatePicker onChange={setTaskDeadline} value={taskDeadline} />

      <Buttons>
        <Button onClick={() => onClose(false)}>Cancel</Button>
        <Button onClick={handleSubmit} isPrimary type="submit">
          Add task
        </Button>
      </Buttons>
    </Popup>
  );
};
