import { Label } from './TaskLabel.styles';

export type TaskLabelProps = {
  name: string;
  isChecked?: boolean;
  onClick?: (name: string) => void;
};

export const TaskLabel = ({ name, isChecked = false, onClick }: TaskLabelProps) => {
  const handleClick = () => onClick && onClick(name);

  return (
    <Label isChecked={isChecked} onClick={handleClick}>
      {name}
    </Label>
  );
};
