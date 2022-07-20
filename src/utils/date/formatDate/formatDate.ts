import { getDateProperties } from '../getDateProperties';

export const formatDate = (formattingDate: Date): string => {
  const { fullDaysDifferenceAbsoluteValue, isInPast, isInFuture, isToday } = getDateProperties(formattingDate);

  if (isToday) {
    return `today`;
  }

  if (isInPast && fullDaysDifferenceAbsoluteValue === 1) {
    return `yesterday`;
  }

  if (isInFuture && fullDaysDifferenceAbsoluteValue === 1) {
    return 'tomorrow';
  }

  return formattingDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
