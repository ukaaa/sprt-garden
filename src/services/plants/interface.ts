// packages
import {Observable} from 'rxjs/Observable';
// interfaces
import IPlant from '../../interfaces/plant';

interface IPlantsService {
	getPlantById (id: number): Observable<IPlant>;
}

export default IPlantsService;
