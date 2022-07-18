import { useTask } from 'hooks/useTask/useTask';
import { TaskCheckBox, Typography, TaskLabel } from 'components';
import { Content, LabelsWrapper, Wrapper } from './TasksListItem.styles';

export type TasksListItemProps = { taskId: string };

export const TasksListItem = ({ taskId }: TasksListItemProps) => {
  const { task } = useTask(taskId);

  console.log('task', task);

  if (!task) {
    return null;
  }

  return (
    <Wrapper>
      <TaskCheckBox />
      <Content>
        <Typography variant="body1">{task.name}</Typography>
        <LabelsWrapper>
          {task.labels.map((label: string) => (
            <TaskLabel key={label} name={label} />
          ))}
        </LabelsWrapper>
      </Content>
    </Wrapper>
  );
};
