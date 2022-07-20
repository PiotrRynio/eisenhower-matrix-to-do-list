import { formattedDate } from './formattedDate';

describe('formattedLastUpdateDate', () => {
  // 01.05.2022
  const testDate = new Date('2022-05-01T00:00:00.000Z');

  it('should return date in correct format', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2024-06-15'));

    // when
    const result = formattedDate(testDate);

    // then
    expect(result).toBe('1 May 2022');
  });

  it('should return "today", if the day is the same', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-05-01'));

    // when
    const result = formattedDate(testDate);

    // then
    expect(result).toBe('today');
  });

  it('should return "yesterday", if it is previous day', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-05-02'));

    // when
    const result = formattedDate(testDate);

    // then
    expect(result).toBe('yesterday');
  });

  it('should return "tomorrow", if it is next day', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-04-30'));

    // when
    const result = formattedDate(testDate);

    // then
    expect(result).toBe('tomorrow');
  });

  it('should return number of days, if it is day after tomorrow', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-05-03'));

    // when
    const result = formattedDate(testDate);

    // then
    expect(result).toBe('1 May 2022');
  });

  it('should return number of days, if it is day before yesterday', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-04-29'));

    // when
    const result = formattedDate(testDate);

    // then
    expect(result).toBe('1 May 2022');
  });
});
