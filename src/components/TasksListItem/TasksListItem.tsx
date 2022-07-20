import { useSearchParams } from 'react-router-dom';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { Task } from 'types/Task';
import { TaskCheckBox, Typography, TaskLabel } from 'components';
import { Content, LabelsWrapper, Wrapper } from './TasksListItem.styles';
import { useTasksLists } from '../../hooks';

export type TasksListItemProps = Task & { index: number };

export const TasksListItem = ({ id, name, labels, isDone = false, index }: TasksListItemProps) => {
  const { changeTaskDoneStatus } = useTasksLists();
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
            <LabelsWrapper>
              {labels.map((label: string) => (
                <TaskLabel key={label} name={label} isChecked={label === searchedLabels} onClick={handleLabelClicked} />
              ))}
            </LabelsWrapper>
          </Content>
        </Wrapper>
      )}
    </Draggable>
  );
};
