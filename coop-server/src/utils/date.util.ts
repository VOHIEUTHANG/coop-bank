import moment from 'moment';
import { DATE_FORMAT_DDMMYYYY } from 'src/constant/date.constant';

export function transformDate(dateValue: string) {
  return dateValue && moment(dateValue, DATE_FORMAT_DDMMYYYY).toDate().toISOString();
}

export function stringifyDate(dateValue: string, targetFormat: string = DATE_FORMAT_DDMMYYYY) {
  return dateValue && moment(dateValue).format(targetFormat);
}
