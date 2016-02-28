interface IAuthService {
	token: string;
	userId: number;
	// isAuth: boolean;
	logIn (access_token: string, userId: number): void;
	logOut (): void;
}

export default IAuthService;
