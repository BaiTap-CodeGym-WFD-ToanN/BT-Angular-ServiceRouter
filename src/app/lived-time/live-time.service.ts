import {Injectable} from '@angular/core';
import {
  addDays,
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears
} from 'date-fns';


@Injectable({
  providedIn: 'root'
})
export class LiveTimeService {

  constructor() {
  }

  getDiffToNow(time: string | Date | number) {
    const result: string[] = [];
    const now = new Date();
    time = new Date(time);
    const years = differenceInYears(now, time);
    if (years > 0) {
      result.push(years + ' years');
      time = addYears(time, years);
    }
    const months = differenceInMonths(now, time);
    if (months > 0) {
      result.push(months + ' months');
      time = addMonths(time, months);
    }
    const days = differenceInDays(now, time);
    if (days > 0) {
      result.push(days + ' days');
    }
    return result.join(', ');
  }
}
