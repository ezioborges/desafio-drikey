import { users } from '../mock/users';

export const loginValidation = (email: string, password: string) => {
	const usersData = users;

	const userToLog = usersData.find(
		user => user.email === email && user.password === password,
	);

	if (userToLog) {
		return {
			success: true,
			user: userToLog,
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
