import { useState } from 'react';
import { StyledCheckboxIconWrapper, StyledInput } from './TaskCheckBox.styles';
import { CheckboxIcon } from '../Icons';

export type TaskCheckBoxProps = { isDone: boolean; onClick: (isChecked: boolean) => void };

export const TaskCheckBox = ({ isDone, onClick }: TaskCheckBoxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(isDone);

  const handleClick = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    onClick(newIsChecked);
  };

  return (
    <label>
      <StyledInput type="checkbox" onChange={handleClick} checked={isChecked} />
      <StyledCheckboxIconWrapper isChecked={isChecked} aria-hidden="true">
        <CheckboxIcon isChecked={isChecked} ariaHidden />
      </StyledCheckboxIconWrapper>
    </label>
  );
};
