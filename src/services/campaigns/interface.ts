// packages
import {Observable} from 'rxjs/Observable';
// interfaces
import ICampaign from '../../interfaces/campaign';

interface ICampaignsService {
	getCampaigns (): Observable<any>;
	getCampaignsByTeamId (id: number): Observable<any>;
	getCampaign (id: number): Observable<any>;
	createCampaign (data: ICampaign): Observable<any>;
	editCampaign (data: ICampaign): Observable<any>;
	deleteCampaign (id: number): Observable<any>;
	getCreativesByCampaignId (id: number): Observable<any>;
}

export default ICampaignsService;
