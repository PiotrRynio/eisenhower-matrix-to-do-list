import { useTasksList } from 'hooks/useTasksList';
import { Typography, TasksListItem } from 'components';
import { TaskListsIds } from 'types/TaskListsIds';
import { Wrapper, StyledTasksList } from './TasksList.styles';

type TasksListProps = { id: TaskListsIds; title: string };

export const TasksList = ({ id, title }: TasksListProps) => {
  const { tasksListIds } = useTasksList(id);

  console.log('tasksListIds', tasksListIds);

  return (
    <Wrapper>
      <Typography variant="listTitle">{title}</Typography>
      <StyledTasksList>
        {tasksListIds.map((taskId) => (
          <TasksListItem key={taskId} taskId={taskId} />
        ))}
      </StyledTasksList>
    </Wrapper>
  );
};
