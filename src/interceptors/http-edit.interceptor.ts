import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface EditResponse<T> {
  // data?: T;
  id?: string;
  statusCode: HttpStatus;
}

@Injectable()
export class EditInterceptor<T> implements NestInterceptor<T, EditResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<EditResponse<T>> {
    return next.handle().pipe(map(data => ({ id: data.id, statusCode: HttpStatus.OK })));
  }
}