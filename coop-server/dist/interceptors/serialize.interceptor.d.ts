import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
interface ClassConstructor {
    new (...args: any[]): object;
}
export declare function Serialize(dto: ClassConstructor): MethodDecorator & ClassDecorator;
export declare class SerializeInterceptor implements NestInterceptor {
    private dtoEntity;
    constructor(dtoEntity: any);
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any>;
}
export {};