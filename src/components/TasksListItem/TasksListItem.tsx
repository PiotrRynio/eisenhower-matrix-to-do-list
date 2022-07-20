import { useSearchParams } from 'react-router-dom';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { Task } from 'types/Task';
import { TaskListsIds } from 'types/TaskListsIds';
import { useTasksLists } from 'hooks';
import { TaskCheckBox, Typography, TaskLabel, DeleteForeverIcon } from 'components';
import { formatDate, getDateProperties } from 'utils';
import { Content, LabelsWrapper, Wrapper, RemoveTaskButton, StyledDateTypography } from './TasksListItem.styles';

export type TasksListItemProps = Task & { index: number; listId: TaskListsIds };

export const TasksListItem = ({
  id,
  name,
  labels,
  isDone = false,
  index,
  description = '',
  deadlineDate,
  listId,
}: TasksListItemProps) => {
  const { changeTaskDoneStatus, removeTask } = useTasksLists();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedLabels = searchParams.get('labels');

  const handleLabelClicked = (label: string) => {
    const newSearchedLabels = searchedLabels === label ? [] : label;
    const params = { labels: newSearchedLabels };
    setSearchParams(params);
  };

  const isDeadlineDisplayed = !!deadlineDate && listId === 'URGENT_AND_IMPORTANT';
  const isAfterDeadline = deadlineDate && getDateProperties(new Date(deadlineDate)).isInPast;
  const dateText = deadlineDate && formatDate(new Date(deadlineDate));

  return (
    <Draggable draggableId={id} index={index} isDragDisabled={isDone}>
      {(provided: DraggableProvided) => (
        <Wrapper {...provided.draggableProps} ref={provided.innerRef}>
          <TaskCheckBox isDone={isDone} onClick={(isChecked: boolean) => changeTaskDoneStatus(id, isChecked)} />

          <Content {...provided.dragHandleProps}>
            <Typography variant="body1">{name}</Typography>
            {!!description && <Typography variant="small">{description}</Typography>}

            <LabelsWrapper>
              {isDeadlineDisplayed && (
                <StyledDateTypography variant="small" isAfterDeadline={isAfterDeadline}>
                  || {dateText} ||
                </StyledDateTypography>
              )}
              {labels.map((label: string) => (
                <TaskLabel key={label} name={label} isChecked={label === searchedLabels} onClick={handleLabelClicked} />
              ))}
            </LabelsWrapper>
          </Content>

          <RemoveTaskButton
            onClick={() => {
              removeTask(id);
            }}
          >
            <DeleteForeverIcon />
          </RemoveTaskButton>
        </Wrapper>
      )}
    </Draggable>
  );
};
