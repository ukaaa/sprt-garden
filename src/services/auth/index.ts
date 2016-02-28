// angular
import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
// interfaces
import IAuthService from './interface';

@Injectable()
export class AuthService implements IAuthService {
	constructor (private _router: Router) {}

	set token (value: string) {
		if (value) {
			window.localStorage.setItem('access_token', value);
		} else {
			window.localStorage.removeItem('access_token');
		}
	}

	get token () {
		return window.localStorage.getItem('access_token');
	}

	set userId (value: number) {
		if (value) {
			window.localStorage.setItem('user_id', value.toString());
		} else {
			window.localStorage.removeItem('user_id');
		}
	}

	get userId () {
		return parseInt(window.localStorage.getItem('user_id'), 10);
	}

	// set isAuth (value: boolean) {
	// 	if (value) {
	// 		window.localStorage.setItem('is_auth', value.toString());
	// 	} else {
	// 		window.localStorage.removeItem('is_auth');
	// 	}
	// }
	//
	// get isAuth () {
	// 	const is_auth = window.localStorage.getItem('is_auth');
	// 	return is_auth === 'true';
	// }

	logIn (access_token: string, userId: number) {
		this.token = access_token;
		this.userId = userId;
		// this.isAuth = true;
	}

	logOut () {
		this.token = '';
		this.userId = 0;
		// this.isAuth = false;
		this._router.navigate(['Login']);
	}
}
