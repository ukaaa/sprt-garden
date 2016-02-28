// angular
import {Injectable, Inject} from 'angular2/core';
import {Response} from 'angular2/http';
// packages
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// services
import {AuthHttp} from '../auth-http/';
// interfaces
import IUser from '../../interfaces/user';
import IUsersService from './interface';

@Injectable()
export class UsersService implements IUsersService {
	constructor (private _authHttp: AuthHttp, @Inject('API_URL') private apiRoot: string) {};

	handleError (response: any) {
		return Observable.throw(response.json().error || 'Error');
	}

	getUsers () {
		return this._authHttp
			.get(this.apiRoot + '/users')
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	getUser (id: number) {
		return this._authHttp
			.get(this.apiRoot + '/users/' + id)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	editUser (data: IUser) {
		const body = JSON.stringify(data);

		return this._authHttp
			.put(this.apiRoot + '/users/' + data.id, body)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	getTeamsByUserId (id: number): Observable<any> {
		return this._authHttp
			.get(this.apiRoot + '/users/' + id + '/teams')
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}
}
