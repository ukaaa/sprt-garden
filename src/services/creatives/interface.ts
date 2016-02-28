// package
import {Observable} from 'rxjs/Observable';
// interfaces
import ICreative from '../../interfaces/creative';

interface ICreativesService {
	getCreative (id: number): Observable<any>;
	createCreative (data: ICreative): Observable<any>;
	editCreative (data: ICreative): Observable<any>;
	deleteCreative (id: number): Observable<any>;
	getPlacementsByCreativeId (id: number): Observable<any>;
}

export default ICreativesService;
