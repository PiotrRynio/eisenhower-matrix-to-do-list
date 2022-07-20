import React from 'react';
import { CalendarIcon, Typography } from 'components';
import { DatePickerContainer, IconContainer, StyledDatePicker, Wrapper } from './SimpleDatePicker.styles';

export type SimpleDatePickerProps = {
  value: Date | undefined;
  onChange: (date: Date) => void;
};

export const SimpleDatePicker = ({ value, onChange }: SimpleDatePickerProps) => {
  const handleChange = (date: Date) => {
    onChange(date);
  };

  return (
    <Wrapper>
      <Typography variant="small">Deadline (optional):</Typography>
      <DatePickerContainer>
        <IconContainer>
          <CalendarIcon />
        </IconContainer>
        <StyledDatePicker
          selected={value}
          onChange={(date: Date) => handleChange(date)}
          minDate={new Date()}
          placeholderText="--/--/---- (optional)"
        />
      </DatePickerContainer>
    </Wrapper>
  );
};
