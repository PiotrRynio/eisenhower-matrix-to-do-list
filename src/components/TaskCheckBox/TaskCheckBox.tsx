export type TaskCheckBoxProps = { isDone: boolean; onClick: () => void };

export const TaskCheckBox = ({ isDone, onClick }: TaskCheckBoxProps) => {
  return <div onClick={onClick}>{isDone ? 'X' : '0'}</div>;
};
