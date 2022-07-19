import React, { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from 'types/Task';
import { TaskListsIds } from 'types/TaskListsIds';
import { tasksListsSchema } from 'constants/tasksListsSchema';
import { useTasksLists, useTaskLabel } from 'hooks';
import { Button, PlusIcon, TaskLabel, Overlay, PriorityFlagIcon, Typography } from 'components';
import {
  Buttons,
  TaskNameInput,
  LabelsWrapper,
  Popup,
  LabelInput,
  LabelInputWrapper,
  AddLabelButton,
  StyledSelect,
} from './CreateNewTaskPopup.styles';

export type CreateNewTaskPopupProps = {
  onClose: () => void;
};

type ListsOption = {
  value: TaskListsIds;
  label: React.ReactNode;
};

export const CreateNewTaskPopup = ({ onClose }: CreateNewTaskPopupProps) => {
  const listsOptions = useMemo(
    () =>
      tasksListsSchema.map((taskList) => ({
        value: taskList.id,
        label: (
          <>
            <PriorityFlagIcon priority={taskList.id} width={15} height={10} />
            <Typography variant="label">{taskList.title}</Typography>
          </>
        ),
      })),
    [tasksListsSchema],
  );
  const [selectedList, setSelectedList] = useState<ListsOption>(listsOptions[3]);

  const [newTaskName, setNewTaskName] = useState('');
  const { tasksLabels, addTaskLabel } = useTaskLabel();
  const [newTasksLabel, setNewTasksLabel] = useState('');
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

  const handleTaskLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    const isTooLong = newName.length > 12;
    if (isTooLong) {
      return;
    }
    setNewTasksLabel(newName);
  };

  const handleAddTaskLabel = () => {
    const newLabel = newTasksLabel.trim();
    setNewTasksLabel('');
    if (!newLabel) {
      return;
    }

    const isLabelExist = tasksLabels.some((label) => label.toLowerCase() === newLabel.toLowerCase());
    if (isLabelExist) {
      setCheckedLabels([...checkedLabels, newLabel]);
      return;
    }
    addTaskLabel(newLabel);
    setCheckedLabels([...checkedLabels, newLabel]);
  };

  const handleCheckedLabel = (clickedLabel: string) => {
    if (checkedLabels.includes(clickedLabel)) {
      setCheckedLabels(checkedLabels.filter((label) => label !== clickedLabel));
    } else {
      setCheckedLabels([...checkedLabels, clickedLabel]);
    }
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
    createNewTask(newTask, selectedList?.value || 'NOT_URGENT_AND_NOT_IMPORTANT');
    onClose();
  };

  return (
    <Overlay isOpened={true} onOverlayClick={onClose}>
      <Popup>
        <TaskNameInput value={newTaskName} onChange={handleTaskNameChange} placeholder="Task name..." />

        <LabelsWrapper>
          {tasksLabels.map((label) => (
            <TaskLabel
              key={label}
              name={label}
              isChecked={checkedLabels.includes(label)}
              onClick={handleCheckedLabel}
            />
          ))}
        </LabelsWrapper>

        <LabelInputWrapper>
          <AddLabelButton onClick={handleAddTaskLabel}>
            <PlusIcon ariaLabel="add label" />
          </AddLabelButton>
          <LabelInput value={newTasksLabel} onChange={handleTaskLabelChange} placeholder="Add label..." />
        </LabelInputWrapper>

        <StyledSelect
          defaultValue={selectedList}
          onChange={(event) => {
            setSelectedList((event as ListsOption) || selectedList);
          }}
          options={listsOptions}
          isSearchable={false}
        />

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
