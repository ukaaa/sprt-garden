// angular
import {Observable} from 'rxjs/Observable';
// interfaces
import IUser from '../../interfaces/user';

interface IUsersService {
	getUsers (): Observable<any>;
	getUser (id: number): Observable<any>;
	editUser (data: IUser): Observable<any>;
	getTeamsByUserId (id: number): Observable<any>;
}

export default IUsersService;
