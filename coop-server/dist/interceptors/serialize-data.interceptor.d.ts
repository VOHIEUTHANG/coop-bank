import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class SerializeData implements NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any>;
}
