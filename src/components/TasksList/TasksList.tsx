import { useSearchParams } from 'react-router-dom';
import { TaskListsIds } from 'types/TaskListsIds';
import { Task } from 'types/Task';
import { useTasksLists } from 'hooks';
import { Typography, TasksListItem } from 'components';
import { Wrapper, StyledTasksList, StyledHeader } from './TasksList.styles';

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

  const filteredTasks = tasks?.filter(filterTasksByLabels);

  return (
    <Wrapper>
      <StyledHeader>
        <Typography variant="listTitle">{title}</Typography>
        <Typography variant="label"> - {filteredTasks?.length || 0} tasks </Typography>
      </StyledHeader>
      <StyledTasksList>
        {filteredTasks?.map(({ id, labels, isDone, name }) => (
          <TasksListItem key={id} id={id} name={name} labels={labels} isDone={isDone} />
        ))}
      </StyledTasksList>
    </Wrapper>
  );
};
