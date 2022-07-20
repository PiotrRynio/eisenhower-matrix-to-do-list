import { useSearchParams } from 'react-router-dom';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import { TaskListsIds } from 'types/TaskListsIds';
import { Task } from 'types/Task';
import { useTasksLists } from 'hooks';
import { Typography, TasksListItem, PriorityFlagIcon } from 'components';
import { Wrapper, StyledTasksList, StyledHeader } from './TasksList.styles';

type TasksListProps = { tasksListId: TaskListsIds; title: string; isDoneTasksDisplayed?: boolean };

export const TasksList = ({ tasksListId, title, isDoneTasksDisplayed }: TasksListProps) => {
  const [searchParams] = useSearchParams();
  const { getTasksList } = useTasksLists();
  const tasks = getTasksList(tasksListId)?.tasks;

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
        <PriorityFlagIcon priority={tasksListId} />
        <Typography variant="listTitle">{title}</Typography>
        <Typography variant="small"> {taskLabelText}</Typography>
      </StyledHeader>
      <Droppable droppableId={tasksListId} isDropDisabled={!!searchParams.get('labels')}>
        {(provided: DroppableProvided) => (
          <StyledTasksList ref={provided.innerRef} {...provided.droppableProps}>
            {filteredTasks?.map(({ id, labels, isDone, name, description, deadlineDate }, index) => (
              <TasksListItem
                key={id}
                id={id}
                name={name}
                labels={labels}
                isDone={isDone}
                index={index}
                description={description}
                deadlineDate={deadlineDate}
                listId={tasksListId}
              />
            ))}
            {provided.placeholder}
          </StyledTasksList>
        )}
      </Droppable>
    </Wrapper>
  );
};
