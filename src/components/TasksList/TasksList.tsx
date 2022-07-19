import { useSearchParams } from 'react-router-dom';
import { TaskListsIds } from 'types/TaskListsIds';
import { Task } from 'types/Task';
import { useTasksLists } from 'hooks';
import { Typography, TasksListItem } from 'components';
import { Wrapper, StyledTasksList } from './TasksList.styles';

type TasksListProps = { id: TaskListsIds; title: string };

export const TasksList = ({ id, title }: TasksListProps) => {
  const [searchParams] = useSearchParams();
  const { getTasksList } = useTasksLists();
  const tasks = getTasksList(id)?.tasks;

  const filterTasksByLabels = ({ labels }: Task) => {
    const searchedLabels = searchParams.get('labels');
    if (!searchedLabels) {
      return true;
    }
    return labels.includes(searchedLabels);
  };

  return (
    <Wrapper>
      <Typography variant="listTitle">{title}</Typography>
      <StyledTasksList>
        {tasks?.filter(filterTasksByLabels).map(({ id, labels, isDone, name }) => (
          <TasksListItem key={id} id={id} name={name} labels={labels} isDone={isDone} />
        ))}
      </StyledTasksList>
    </Wrapper>
  );
};
