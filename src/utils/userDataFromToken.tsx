import Cookies from 'js-cookie';

export const getUserDataFromToken = () => {
	const token = Cookies.get('mock_jwt');

	// verifica se o token existe.
	if (!token || typeof token !== 'string') {
		return null;
	}

	try {
		// divide o token em partes
		const tokenParts = token.split('.');

		//pagar o payload (segunda parte)
		const payloadBase64 = tokenParts[1];

		// decodificar a string em base64 do payload
		const decodedPayload = atob(payloadBase64);

		// converter a string decodificada em um objeto
		const userData = JSON.parse(decodedPayload);

		return userData;
	} catch (error) {
		console.error('Erro ao carregar usuário: ', error);
	}
};
