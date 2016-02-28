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
import ICampaignsService from './interface';
import ICampaign from '../../interfaces/campaign';

@Injectable()
export class CampaignsService implements ICampaignsService {
	constructor (private _authHttp: AuthHttp, @Inject('API_URL') private apiRoot: string) {}

	handleError (response: any) {
		return Observable.throw(response.json().error || 'Error');
	}

	// campaigns operations

	getCampaigns () {
		return this._authHttp
			.get(this.apiRoot + '/campaigns')
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	getCampaignsByTeamId (id: number) {
		return this._authHttp
			.get(this.apiRoot + '/teams/' + id + '/campaigns')
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	// single campaign operations

	getCampaign (id: number) {
		return this._authHttp
			.get(this.apiRoot + '/campaigns/' + id)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	createCampaign (data: ICampaign) {
		const body = JSON.stringify(data);

		return this._authHttp
			.post(this.apiRoot + '/campaigns', body)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	editCampaign (data: ICampaign) {
		const body = JSON.stringify(data);

		return this._authHttp
			.put(this.apiRoot + '/campaigns/' + data.id, body)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	deleteCampaign (id: number) {
		return this._authHttp
			.delete(this.apiRoot + '/campaigns/' + id)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}

	// operations for campaign relations

	getCreativesByCampaignId (id: number) {
		return this._authHttp
			.get(this.apiRoot + '/campaigns/' + id + '/creatives')
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}
}
