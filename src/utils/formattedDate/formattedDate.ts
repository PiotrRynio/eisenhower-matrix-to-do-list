import { ONE_DAY_IN_MILLISECONDS } from 'constants/times';

export const formattedDate = (formattingDate: Date) => {
  const formattingDateWithoutHours = new Date(new Date(formattingDate).toISOString().split('T')[0]);
  const todayDateWithoutHoursWithoutHours = new Date(new Date().toISOString().split('T')[0]);

  const formattingDateWithoutHoursInMilliseconds = formattingDateWithoutHours.getTime();
  const todayDateWithoutHoursInMilliseconds = todayDateWithoutHoursWithoutHours.getTime();

  const differenceInMilliseconds = formattingDateWithoutHoursInMilliseconds - todayDateWithoutHoursInMilliseconds;

  const isInThePast = differenceInMilliseconds < 0;
  const absoluteValueOfDifferenceInFullDays = Math.abs(Math.floor(differenceInMilliseconds / ONE_DAY_IN_MILLISECONDS));

  const isToday = absoluteValueOfDifferenceInFullDays === 0;
  if (isToday) {
    return `today`;
  }

  if (isInThePast && absoluteValueOfDifferenceInFullDays === 1) {
    return `yesterday`;
  }

  if (!isInThePast && absoluteValueOfDifferenceInFullDays === 1) {
    return 'tomorrow';
  }

  return formattingDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
