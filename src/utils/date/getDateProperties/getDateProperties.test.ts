import { getDateProperties, DateProperties } from './getDateProperties';

describe('getDateProperties', () => {
  // 01.05.2022
  const testDate = new Date('2022-05-01T00:00:00.000Z');

  it('should return correct data, if the day is the same', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-05-01'));
    const expectedResult: DateProperties = {
      isToday: true,
      isInPast: false,
      isInFuture: false,
      fullDaysDifferenceAbsoluteValue: 0,
    };

    // when
    const result = getDateProperties(testDate);

    // then
    expect(result).toEqual(expectedResult);
  });

  it('should return corect data, if it is previous day', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-05-02'));
    const expectedResult: DateProperties = {
      isToday: false,
      isInPast: true,
      isInFuture: false,
      fullDaysDifferenceAbsoluteValue: 1,
    };

    // when
    const result = getDateProperties(testDate);

    // then
    expect(result).toEqual(expectedResult);
  });

  it('should return "tomorrow", if it is next day', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-04-30'));
    const expectedResult: DateProperties = {
      isToday: false,
      isInPast: false,
      isInFuture: true,
      fullDaysDifferenceAbsoluteValue: 1,
    };

    // when
    const result = getDateProperties(testDate);

    // then
    expect(result).toEqual(expectedResult);
  });

  it('should return number of days, if it is day after tomorrow', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-04-29'));

    const expectedResult: DateProperties = {
      isToday: false,
      isInPast: false,
      isInFuture: true,
      fullDaysDifferenceAbsoluteValue: 2,
    };

    // when
    const result = getDateProperties(testDate);

    // then
    expect(result).toEqual(expectedResult);
  });

  it('should return number of days, if it is day before yesterday', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-05-03'));

    const expectedResult: DateProperties = {
      isToday: false,
      isInPast: true,
      isInFuture: false,
      fullDaysDifferenceAbsoluteValue: 2,
    };

    // when
    const result = getDateProperties(testDate);

    // then
    expect(result).toEqual(expectedResult);
  });
});
