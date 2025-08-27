import { geneteMockJWT } from '../mock/mockJWT';
import { mockUsers } from '../mock/users';

export const loginValidation = async (email: string, password: string) => {
	const usersData = mockUsers;
	const userToLog = usersData.find(
		user => user.email === email && user.password === password,
	);

	if (userToLog) {
		const token = await geneteMockJWT(userToLog);
		return {
			success: true,
			user: userToLog,
			roles: userToLog.roles,
			token,
			message: 'Login bem-sucedido!',
		};
	} else {
		return {
			success: false,
			user: null,
			message: 'E-mail ou senha incorretos!',
		};
	}
};
