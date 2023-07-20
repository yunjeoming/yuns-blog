import { format, parseISO } from 'date-fns';

export const DateUtil = {
  convertDateFormat: (date: string) => {
    return format(parseISO(date), 'yyyy/MM/dd');
  }
};
