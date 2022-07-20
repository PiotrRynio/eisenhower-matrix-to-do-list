import React, { useEffect, useState } from 'react';
import { useTaskLabel } from 'hooks';
import { TaskLabel, PlusIcon } from 'components';
import { AddLabelButton, LabelInput, LabelInputWrapper, LabelsWrapper } from './TasksLabelsSelect.styles';

export type TasksLabelsSelectProps = {
  onChange: (labels: string[]) => void;
};

export const TasksLabelsSelect = ({ onChange }: TasksLabelsSelectProps) => {
  const { tasksLabels, addTaskLabel } = useTaskLabel();
  const [newTasksLabel, setNewTasksLabel] = useState('');
  const [checkedLabels, setCheckedLabels] = useState<string[]>([]);

  useEffect(() => {
    onChange(checkedLabels);
  }, [checkedLabels]);

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
    if (!isLabelExist) {
      addTaskLabel(newLabel);
    }
    setCheckedLabels([...checkedLabels, newLabel]);
  };

  const handleCheckedLabel = (clickedLabel: string) => {
    if (checkedLabels.includes(clickedLabel)) {
      setCheckedLabels(checkedLabels.filter((label) => label !== clickedLabel));
    } else {
      setCheckedLabels([...checkedLabels, clickedLabel]);
    }
  };

  return (
    <>
      <LabelsWrapper>
        {tasksLabels.map((label) => (
          <TaskLabel key={label} name={label} isChecked={checkedLabels.includes(label)} onClick={handleCheckedLabel} />
        ))}
      </LabelsWrapper>
      <LabelInputWrapper>
        <AddLabelButton onClick={handleAddTaskLabel}>
          <PlusIcon ariaLabel="add label" />
        </AddLabelButton>
        <LabelInput value={newTasksLabel} onChange={handleTaskLabelChange} placeholder="Add label..." />
      </LabelInputWrapper>
    </>
  );
};
