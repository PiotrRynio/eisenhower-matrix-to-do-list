import { Typography, TasksListItem } from 'components';
import { TasksList as TasksListType } from 'types/TasksList';
import { Wrapper, StyledTasksList } from './TasksList.styles';

type TasksListProps = TasksListType;

export const TasksList = ({ title, tasks }: TasksListProps) => {
  return (
    <Wrapper>
      <Typography variant="listTitle">{title}</Typography>
      <StyledTasksList>
        {tasks.map((task) => (
          <TasksListItem key={task.name} {...task} />
        ))}
      </StyledTasksList>
    </Wrapper>
  );
};
