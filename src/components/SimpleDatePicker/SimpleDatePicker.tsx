import React, { useState } from 'react';
import { CalendarIcon, Typography } from 'components';
import { DataPickerContainer, IconContainer, StyledDatePicker, Wrapper } from './SimpleDatePicker.styles';

export type SimpleDatePickerProps = {
  onChange: (data: Date) => void;
};

export const SimpleDatePicker = ({ onChange }: SimpleDatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleChange = (date: Date) => {
    setDate(date);
    onChange(date);
  };

  return (
    <Wrapper>
      <Typography variant="label">Deadline (optional):</Typography>
      <DataPickerContainer>
        <IconContainer>
          <CalendarIcon />
        </IconContainer>
        <StyledDatePicker
          selected={date}
          onChange={(date: Date) => handleChange(date)}
          minDate={new Date()}
          placeholderText="--/--/---- (optional)"
        />
      </DataPickerContainer>
    </Wrapper>
  );
};
