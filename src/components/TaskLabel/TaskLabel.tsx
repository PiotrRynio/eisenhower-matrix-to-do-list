import { Label } from './TaskLabel.styles';

export type TaskLabelProps = {
  name: string;
};

export const TaskLabel = ({ name }: TaskLabelProps) => {
  return <Label variant="label">{name}</Label>;
};
