import moment from 'moment';
import { DATE_FORMAT_DDMMYYYY } from 'src/constant/date.constant';

export function transformDate(dateValue: string) {
  return dateValue && moment(dateValue, DATE_FORMAT_DDMMYYYY).toDate().toISOString();
}
