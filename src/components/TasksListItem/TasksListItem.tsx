import { useSearchParams } from 'react-router-dom';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { Task } from 'types/Task';
import { useTasksLists } from 'hooks';
import { TaskCheckBox, Typography, TaskLabel, DeleteForeverIcon } from 'components';
import { Content, LabelsWrapper, Wrapper, RemoveTaskButton } from './TasksListItem.styles';

export type TasksListItemProps = Task & { index: number };

export const TasksListItem = ({ id, name, labels, isDone = false, index, description = '' }: TasksListItemProps) => {
  const { changeTaskDoneStatus, removeTask } = useTasksLists();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedLabels = searchParams.get('labels');

  const handleLabelClicked = (label: string) => {
    const newSearchedLabels = searchedLabels === label ? [] : label;
    const params = { labels: newSearchedLabels };
    setSearchParams(params);
  };

  return (
    <Draggable draggableId={id} index={index} isDragDisabled={isDone}>
      {(provided: DraggableProvided) => (
        <Wrapper {...provided.draggableProps} ref={provided.innerRef}>
          <TaskCheckBox isDone={isDone} onClick={(isChecked: boolean) => changeTaskDoneStatus(id, isChecked)} />
          <Content {...provided.dragHandleProps}>
            <Typography variant="body1">{name}</Typography>
            {!!description && <Typography variant="label">{description}</Typography>}
            <LabelsWrapper>
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
