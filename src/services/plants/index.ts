// angular
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Response} from 'angular2/http';
// packages
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
// services
// interfaces
import IPlantsService from './interface';
// import IPlant from '../../interfaces/plant';

@Injectable()
export class PlantsService implements IPlantsService {
	private _apiRoot: string = 'http://localhost:9271/';

	constructor (private _http: Http) {
		//
	}

	handleError (response: any) {
		return Observable.throw(response.json().error || 'Error');
	}

	getPlantById (id: number) {
		return this._http
			.get(this._apiRoot + 'plants/' + id + '.json')
			// .delay(200 + Math.random() * 300)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}
}
