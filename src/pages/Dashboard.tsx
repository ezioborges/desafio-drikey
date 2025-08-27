import { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
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
			className="container-fluid d-flex flex-column border m-0 p-0"
			style={{ height: '100vh', width: '100vw' }}
		>
			<Col className="m-0 shadow-sm" xs={12}>
				<NavBar user={user} />
			</Col>
			<Col className="d-flex flex-column align-items-center justify-content-around">
				<h1 className="">Portaria Via Aplicativo</h1>
				<h3 className="">
					Controle de acesso e seu interfone em suas mãos
				</h3>
				<Image
					className=""
					src="/src/assets/header-iphone.png"
					style={{ width: '55vw' }}
				/>
			</Col>
		</Row>
	);
};

export default Dashboard;
