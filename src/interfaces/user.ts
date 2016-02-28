interface IUser {
	firstName?: string;
	lastName?: string;
	realm?: string;
	username?: string;
	credentials?: any;
	challenges?: any;
	email: string;
	emailVerified?: boolean;
	status?: string;
	created?: string;
	lastUpdated?: string;
	id?: number;
	currentTeamId?: number;
}

export default IUser;
