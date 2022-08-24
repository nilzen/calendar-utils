import { DateTime } from 'luxon';
import { createDeflate } from 'zlib';
import { DateAdapter } from '../date-adapter';

export function adapterFactory(): DateAdapter {
  function addDays(date: Date | number, amount: number) {
    return getDateTime(date).plus({ days: amount }).toJSDate();
  }

  function addHours(date: Date | number, amount: number) {
    return getDateTime(date).plus({ hours: amount }).toJSDate();
  }

  function addMinutes(date: Date | number, amount: number) {
    return getDateTime(date).plus({ minutes: amount }).toJSDate();
  }

  function addSeconds(date: Date | number, amount: number): Date {
    return getDateTime(date).plus({ seconds: amount }).toJSDate();
  }

  function differenceInDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number {
    return getDateTime(dateLeft).diff(getDateTime(dateRight), 'days').days;
  }

  function differenceInMinutes(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number {
    return getDateTime(dateLeft).diff(getDateTime(dateRight), 'minutes')
      .minutes;
  }

  function differenceInSeconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number {
    return getDateTime(dateLeft).diff(getDateTime(dateRight), 'seconds')
      .seconds;
  }

  function endOfDay(date: Date | number): Date {
    return getDateTime(date).endOf('day').toJSDate();
  }

  function endOfMonth(date: Date | number): Date {
    return getDateTime(date).endOf('month').toJSDate();
  }

  function endOfWeek(date: Date | number): Date {
    return getDateTime(date).endOf('week').toJSDate();
  }

  function getDay(date: Date | number): number {
    return getDateTime(date).day;
  }

  /* istanbul ignore next */
  function getMonth(date: Date | number): number {
    return getDateTime(date).month;
  }

  function isSameDay(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean {
    return getDateTime(dateLeft).day === getDateTime(dateRight).day;
  }

  function isSameMonth(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean {
    return getDateTime(dateLeft).month === getDateTime(dateRight).month;
  }

  function isSameSecond(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean {
    return getDateTime(dateLeft).second === getDateTime(dateRight).second;
  }

  function max(dates: (Date | number)[]): Date {
    return DateTime.max
      .apply(
        null,
        dates.map((date) => getDateTime(date))
      )
      .toJSDate();
  }

  function setHours(date: Date | number, hours: number): Date {
    return getDateTime(date).set({ hour: hours }).toJSDate();
  }

  function setMinutes(date: Date | number, minutes: number): Date {
    return getDateTime(date).set({ minute: minutes }).toJSDate();
  }

  function startOfDay(date: Date | number): Date {
    return getDateTime(date).startOf('day').toJSDate();
  }

  function startOfMinute(date: Date | number): Date {
    return getDateTime(date).startOf('minute').toJSDate();
  }

  function startOfMonth(date: Date | number): Date {
    return getDateTime(date).startOf('month').toJSDate();
  }

  function startOfWeek(date: Date | number): Date {
    return getDateTime(date).startOf('week').toJSDate();
  }

  function getHours(date: Date | number): number {
    return getDateTime(date).hour;
  }

  function getMinutes(date: Date | number): number {
    return getDateTime(date).minute;
  }

  function getTimezoneOffset(date: Date | number): number {
    return +getDateTime(date).toFormat('ZZ');
  }

  function getDateTime(date: Date | number): DateTime {
    if (typeof date === 'number') {
      return DateTime.fromMillis(date);
    } else {
      return DateTime.fromJSDate(date);
    }
  }

  return {
    addDays,
    addHours,
    addMinutes,
    addSeconds,
    differenceInDays,
    differenceInMinutes,
    differenceInSeconds,
    endOfDay,
    endOfMonth,
    endOfWeek,
    getDay,
    getMonth,
    isSameDay,
    isSameMonth,
    isSameSecond,
    max,
    setHours,
    setMinutes,
    startOfDay,
    startOfMinute,
    startOfMonth,
    startOfWeek,
    getHours,
    getMinutes,
    getTimezoneOffset,
  };
}
