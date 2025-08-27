import { jwtVerify, SignJWT } from 'jose';
import type { MockUsersType } from '../types/UserType';

const secretKey = new TextEncoder().encode('um-dois-tres-quatro');

export const geneteMockJWT = async (userData: MockUsersType) => {
	const token = await new SignJWT(userData)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('2h')
		.sign(secretKey);
	return token;
};

export const validateMockJWT = async (token: string) => {
	try {
		const { payload } = await jwtVerify(token, secretKey);

		return {
			success: true,
			payload,
		};
	} catch (error) {
		console.error('Erro ao validar JWT: ', error);
		return {
			success: false,
			message: 'Token inválido ou expirado',
		};
	}
};
