import React from 'react';
import { CalendarIcon, Typography } from 'components';
import { DataPickerContainer, IconContainer, StyledDatePicker, Wrapper } from './SimpleDatePicker.styles';

export type SimpleDatePickerProps = {
  value: Date | undefined;
  onChange: (data: Date) => void;
};

export const SimpleDatePicker = ({ value, onChange }: SimpleDatePickerProps) => {
  const handleChange = (date: Date) => {
    onChange(date);
  };

  return (
    <Wrapper>
      <Typography variant="small">Deadline (optional):</Typography>
      <DataPickerContainer>
        <IconContainer>
          <CalendarIcon />
        </IconContainer>
        <StyledDatePicker
          selected={value}
          onChange={(date: Date) => handleChange(date)}
          minDate={new Date()}
          placeholderText="--/--/---- (optional)"
        />
      </DataPickerContainer>
    </Wrapper>
  );
};
