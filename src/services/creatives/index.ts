// angular
import {Injectable, Inject} from 'angular2/core';
import {Response} from 'angular2/http';
// packages
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// services
import {AuthHttp} from '../../services/auth-http/';
// interfaces
import ICreativesService from './interface';
import ICreative from '../../interfaces/creative';

@Injectable()
export class CreativesService implements ICreativesService {
	constructor (private _authHttp: AuthHttp, @Inject('API_URL') private apiRoot: string) {}

	handleError (response: any) {
		return Observable.throw(response.json().error || 'Error');
	}

	// single creative operations

	getCreative (id: number) {
		return this._authHttp
			.get(this.apiRoot + '/creatives/' + id)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	createCreative (data: ICreative) {
		const body = JSON.stringify(data);

		return this._authHttp
			.post(this.apiRoot + '/creatives', body)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	editCreative (data: ICreative) {
		const body = JSON.stringify(data);

		return this._authHttp
			.put(this.apiRoot + '/creatives/' + data.id, body)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	deleteCreative (id: number) {
		return this._authHttp
			.delete(this.apiRoot + '/creatives/' + id)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	// operations for creative relations

	getPlacementsByCreativeId (id: number) {
		return this._authHttp
			.get(this.apiRoot + '/creatives/' + id + '/placements')
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}
}
