import dayjs from 'dayjs';
import { es } from 'dayjs/locale/es';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(isoWeek);
dayjs.locale('es');

export function today(): string {
  return dayjs().format('YYYY-MM-DD');
}

export function formatDisplay(date: string | dayjs.Dayjs): string {
  return dayjs(date).format('dddd, MMMM DD').toUpperCase();
}

export function getWeekRange(date: string | dayjs.Dayjs): { from: string; to: string } {
  const d = dayjs(date);
  return {
    from: d.startOf('week').format('YYYY-MM-DD'),
    to: d.endOf('week').format('YYYY-MM-DD'),
  };
}

export function isSameDay(a: string, b: string | dayjs.Dayjs): boolean {
  return dayjs(a).format('YYYY-MM-DD') === dayjs(b).format('YYYY-MM-DD');
}

export function toISODate(date: string | number | dayjs.Dayjs): string {
  return dayjs(date).format('YYYY-MM-DD');
}

export { dayjs };
