// angular
import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
// services
import {AuthService} from '../auth/';
import 'rxjs/add/operator/delay';

const isDelay = true;
const getDelayTime = () => {
	return isDelay ? 300 + Math.random() * 1200 : 0;
};

@Injectable()
export class AuthHttp {
	constructor (public http: Http, private _authService: AuthService) {}

	createAuthorizationHeader (headers: Headers) {
		headers.append('Authorization', this._authService.token);
	}

	get (url: string) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.get(url, {headers}).delay(getDelayTime());
	}

	post (url: string, data: any) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		headers.set('Content-Type', 'application/json');

		return this.http.post(url, data, {headers}).delay(getDelayTime());
	}

	put (url: string, data: any) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		headers.set('Content-Type', 'application/json');

		return this.http.put(url, data, {headers}).delay(getDelayTime());
	}

	delete (url: string) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);

		return this.http.delete(url, {headers}).delay(getDelayTime());
	}
}
