import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { validateMockJWT } from '../mock/mockJWT';
import IsLoading from './IsLoading';

const PrivateRoute = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const checkAuth = async () => {
			const token = Cookies.get('mock_jwt');

			if (token) {
				const result = await validateMockJWT(token);
				if (result.success) {
					setIsAuthenticated(true);
				} else {
					Cookies.remove('mock_jwt');
				}
			}
			setIsLoading(false);
		};

		checkAuth();
	}, []);

	if (isLoading) {
		return IsLoading();
	}

	return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
