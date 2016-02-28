// angular
import {ExceptionHandler} from 'angular2/core';

export class ExceptionsService extends ExceptionHandler {
	call (exception: any, stackTrace: any = null, reason: string = null): void {
		console.error('zntr error', exception);
	}
}

// https://github.com/angular/angular/blob/2.0.0-beta.3/modules/angular2/src/facade/exception_handler.ts#L11-L131
