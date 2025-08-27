import { useEffect, useState } from 'react';
import { getUserDataFromToken } from '../utils/userDataFromToken';

const Dashboard = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const userData = getUserDataFromToken();

		if (userData) {
			setUser(userData);
		}
	}, []);

	console.log('user ==> ', user);

	return (
		<>
			<h1>Testando a DashboardPage</h1>
		</>
	);
};

export default Dashboard;
