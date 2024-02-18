import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import moment from 'moment';
import { Observable, map } from 'rxjs';
import { DATE_FORMAT_DDMMYYYY, DATE_FORMAT_YYYYMMDDHHMMSS } from 'src/constant/date.constant';
import { Reponse } from 'src/types/response';

export class SerializeData implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse();
    const statusCode = response.statusCode;
    // set search = '' when it not supply
    const request = context.switchToHttp().getRequest();
    request.query.search = request.query.search || '';
    // convert date time type
    request.query.created_date_from =
      request.query.created_date_from &&
      moment(request.query.created_date_from, DATE_FORMAT_DDMMYYYY)
        ?.startOf('day')
        ?.format(DATE_FORMAT_YYYYMMDDHHMMSS);
    request.query.created_date_to =
      request.query.created_date_to &&
      moment(request.query.created_date_to, DATE_FORMAT_DDMMYYYY)
        ?.endOf('day')
        ?.format(DATE_FORMAT_YYYYMMDDHHMMSS);

    return handler.handle().pipe(
      map((data: any) => {
        return new Reponse(data, statusCode);
      })
    );
  }
}
