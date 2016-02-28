// angular
import {Observable} from 'rxjs/Observable';
// interfaces
import IPlacement from '../../interfaces/placement';

interface IPlacementsService {
	getPlacements (): Observable<any>;
	getPlacement (id: number): Observable<any>;
	createPlacement (data: IPlacement): Observable<any>;
	editPlacement (data: IPlacement): Observable<any>;
	deletePlacement (id: number): Observable<any>;
}

export default IPlacementsService;
