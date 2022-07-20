import { ONE_DAY_IN_MILLISECONDS } from 'constants/times';

export type DateProperties = {
  isToday: boolean;
  isInPast: boolean;
  isInFuture: boolean;
  fullDaysDifferenceAbsoluteValue: number;
};

export const getDateProperties = (formattingDate: Date): DateProperties => {
  const formattingDateWithoutHours = new Date(new Date(formattingDate).toISOString().split('T')[0]);
  const todayDateWithoutHoursWithoutHours = new Date(new Date().toISOString().split('T')[0]);

  const formattingDateWithoutHoursInMilliseconds = formattingDateWithoutHours.getTime();
  const todayDateWithoutHoursInMilliseconds = todayDateWithoutHoursWithoutHours.getTime();

  const differenceInMilliseconds = formattingDateWithoutHoursInMilliseconds - todayDateWithoutHoursInMilliseconds;

  const isInPast = differenceInMilliseconds < 0;
  const isInFuture = differenceInMilliseconds > 0;
  const isToday = differenceInMilliseconds === 0;
  const fullDaysDifferenceAbsoluteValue = Math.abs(Math.floor(differenceInMilliseconds / ONE_DAY_IN_MILLISECONDS));

  return { isToday, isInPast, isInFuture, fullDaysDifferenceAbsoluteValue };
};
