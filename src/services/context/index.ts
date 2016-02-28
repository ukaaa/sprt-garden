// angular
import {Injectable} from 'angular2/core';
// import {Http} from 'angular2/http';

// node packaggs
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

// interfaces
// import ICampaignsService from './interface';
// import {ICampaign} from './interface';

interface IContextQueueItem {
	type: string;
	ref: any;
}

@Injectable()
export class ContextService {
	queue: Array<any> = [];

	constructor () {
		//
	}

	add (data: IContextQueueItem) {
		this.queue.push(data);
	};

	clear () {
		console.log('clearing context queue');

		var clearedQueue = [];
		var remainingQueue = [];

		for (var item of this.queue) {
			if (item.type === 'timeout') {
				clearTimeout(item.ref);
				clearedQueue.push(item);
			} else if (item.type === 'interval') {
				clearInterval(item.ref);
				clearedQueue.push(item);
			} else {
				remainingQueue.push(item);
			}

			this.queue = remainingQueue;
		}

		console.log(clearedQueue.length + ' item' + (clearedQueue.length === 1 ? '' : 's') + ' cleared from context queue:%O', clearedQueue);
	};
}
