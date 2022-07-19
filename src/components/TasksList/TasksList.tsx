import { useSearchParams } from 'react-router-dom';
import { TaskListsIds } from 'types/TaskListsIds';
import { Task } from 'types/Task';
import { useTasksLists } from 'hooks';
import { Typography, TasksListItem } from 'components';
import { Wrapper, StyledTasksList, StyledHeader } from './TasksList.styles';

type TasksListProps = { id: TaskListsIds; title: string; isDoneTasksDisplayed?: boolean };

export const TasksList = ({ id, title, isDoneTasksDisplayed }: TasksListProps) => {
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

  const filteredTasks = tasks?.filter(filterTasksByLabels).filter(({ isDone }) => !!isDoneTasksDisplayed || !isDone);
  const tasksNumber = filteredTasks?.length;
  const taskLabelText = `- ${tasksNumber || 'no'} ${tasksNumber === 1 ? 'task' : 'tasks'}`;

  return (
    <Wrapper>
      <StyledHeader>
        <Typography variant="listTitle">{title}</Typography>
        <Typography variant="label"> {taskLabelText}</Typography>
      </StyledHeader>
      <StyledTasksList>
        {filteredTasks?.map(({ id, labels, isDone, name }) => (
          <TasksListItem key={id} id={id} name={name} labels={labels} isDone={isDone} />
        ))}
      </StyledTasksList>
    </Wrapper>
  );
};
