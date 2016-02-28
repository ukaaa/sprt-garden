// interfaces
import IUser from '../../interfaces/user';

interface ICurrentUserService {
	update (data: IUser): void;
	getUser (): Promise<any>;
}

export {IUser};
export default ICurrentUserService;
