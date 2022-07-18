import { Task } from 'types/Task';
import { TaskCheckBox, Typography, TaskLabel } from 'components';
import { Content, LabelsWrapper, Wrapper } from './TasksListItem.styles';

export type TasksListItemProps = Task;

export const TasksListItem = ({ name, labels }: TasksListItemProps) => {
  return (
    <Wrapper>
      <TaskCheckBox />
      <Content>
        <Typography variant="body1">{name}</Typography>
        <LabelsWrapper>
          {labels.map((label: string) => (
            <TaskLabel key={label} name={label} />
          ))}
        </LabelsWrapper>
      </Content>
    </Wrapper>
  );
};
