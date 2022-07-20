import React, { useMemo, useState } from 'react';
// @ts-ignore
import { ValueType } from 'react-select/lib/types';
import { TaskListsIds } from 'types/TaskListsIds';
import { tasksListsSchema } from 'constants/tasksListsSchema';
import { PriorityFlagIcon, Typography } from 'components';
import { StyledSelect, Wrapper } from './TasksListsSelect.styles';

export type ListsOption = {
  value: TaskListsIds;
  label: React.ReactNode;
};

export type TasksListsSelectProps = { onChange: (selectedList: TaskListsIds) => void };

export const TasksListsSelect = ({ onChange }: TasksListsSelectProps) => {
  const listsOptions = useMemo(
    () =>
      tasksListsSchema.map((taskList) => ({
        value: taskList.id,
        label: (
          <>
            <PriorityFlagIcon priority={taskList.id} width={15} height={10} />
            {taskList.title}
          </>
        ),
      })),
    [tasksListsSchema],
  );

  const [selectedList, setSelectedList] = useState<ListsOption>(listsOptions[3]);

  const handleChange = (event: ValueType<ListsOption>) => {
    onChange(event.value);
    setSelectedList(event);
  };

  return (
    <Wrapper>
      <Typography variant="small">Priority:</Typography>
      <StyledSelect defaultValue={selectedList} onChange={handleChange} options={listsOptions} isSearchable={false} />
    </Wrapper>
  );
};
