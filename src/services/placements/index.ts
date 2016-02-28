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
import IPlacementsService from './interface';
import IPlacement from '../../interfaces/placement';

@Injectable()
export class PlacementsService implements IPlacementsService {
	constructor (private _authHttp: AuthHttp, @Inject('API_URL') private apiRoot: string) {}

	handleError (response: any) {
		return Observable.throw(response.json().error || 'Error');
	}

	// placements operations

	getPlacements () {
		return this._authHttp
			.get(this.apiRoot + '/placements/')
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	// single placement operations

	getPlacement (id: number) {
		return this._authHttp
			.get(this.apiRoot + '/placements/' + id)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	createPlacement (data: IPlacement) {
		const body = JSON.stringify(data);

		return this._authHttp
			.post(this.apiRoot + '/placements', body)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	editPlacement (data: IPlacement) {
		const body = JSON.stringify(data);

		return this._authHttp
			.put(this.apiRoot + '/placements/' + data.id, body)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	deletePlacement (id: number) {
		return this._authHttp
			.delete(this.apiRoot + '/placements/' + id)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}
}
