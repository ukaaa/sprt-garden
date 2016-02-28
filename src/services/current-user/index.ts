// angular
import {Injectable} from 'angular2/core';
// packages
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
// interfaces
import ICurrentUserService from './interface';
import IUser from '../../interfaces/user';

const clone = (obj: any) => {
	return obj ? Object.assign({}, obj) : obj;
};

@Injectable()
export class CurrentUserService implements ICurrentUserService {
	public observable: Observable<any>;
	private _user: any;
	private _observer: any;

	constructor () {
		this.observable = new Observable((observer: any) => this._observer = observer).share();

		// everytime the user info changes, we store a local copy
		// to do: is this line required when we have this._users = clone(data); in the update method?
		this.observable.subscribe((data: any) => this._user = clone(data));
	}

	clear () {
		this._user = undefined;
		this._observer.next(this._user);
	}

	update (data: IUser) {
		// external component such as the user settings page can update the current user info
		this._user = clone(data);
		this._observer.next(clone(data));
	}

	getUser () {
		return new Promise((resolve: any, reject: any) => {
			if (this._user) {
				resolve(clone(this._user));
			} else {
				this.observable.subscribe((data: any) => resolve(clone(data)));
			}
		});
	}
}
