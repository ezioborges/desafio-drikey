import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import IsLoading from '../components/IsLoading';
import NavBar from '../components/NavBar';
import type { MockUsersType } from '../types/UserType';
import { getUserDataFromToken } from '../utils/userDataFromToken';

const Dashboard = () => {
	const [user, setUser] = useState<MockUsersType | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const userData = getUserDataFromToken();

		if (userData) {
			setUser(userData);
		}

		setIsLoading(false);
	}, []);

	if (isLoading) {
		return IsLoading();
	}

	return (
		<Row
			className="container-fluid d-flex flex-column border border-danger m-0 p-0"
			style={{ height: '100vh', width: '100vw' }}
		>
			<Col className="border border-primary m-0 mb-2" xs={'auto'}>
				<NavBar user={user} />
			</Col>
			<Col className="border border-success" xs={'auto'}>
				<h1>Testando a DashPage BODY</h1>
			</Col>
		</Row>
	);
};

export default Dashboard;
