import { Typography, TasksListItem } from 'components';
import { TaskListsIds } from 'types/TaskListsIds';
import { Wrapper, StyledTasksList } from './TasksList.styles';
import { useTasksLists } from '../../hooks';

type TasksListProps = { id: TaskListsIds; title: string };

export const TasksList = ({ id, title }: TasksListProps) => {
  const { getTasksList } = useTasksLists();
  const tasks = getTasksList(id)?.tasks;

  return (
    <Wrapper>
      <Typography variant="listTitle">{title}</Typography>
      <StyledTasksList>
        {tasks?.map(({ id, labels, isDone, name }) => (
          <TasksListItem key={id} id={id} name={name} labels={labels} isDone={isDone} />
        ))}
      </StyledTasksList>
    </Wrapper>
  );
};
