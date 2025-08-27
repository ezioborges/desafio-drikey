import Cookies from 'js-cookie';
import { Image, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import type { userPropsType } from '../types/UserType';

const NavBar = ({ user }: userPropsType) => {
	console.log('navbar user ===> ', user);

	const handleLogout = () => {
		if (Cookies.get('mock_jwt')) {
			Cookies.remove('mock_jwt');
		}
	};

	return (
		<Nav
			accessKey="/dashboard"
			onSelect={selectedKey => alert(`selected ${selectedKey}`)}
			className="d-flex justify-content-between align-items-center"
		>
			<Nav.Item className="w-25">
				<Nav.Link href="/dashboard">
					<Image src={logo} style={{ maxWidth: '30vw' }} />
				</Nav.Link>
			</Nav.Item>
			<Nav.Item className="w-25 d-flex align-items-center justify-content-center">
				<Nav.Link href="/test" className="text-dark ">
					<h5 className="text-center">
						Seja bem-vindo, {user?.firstName}!
					</h5>
				</Nav.Link>
			</Nav.Item>
			<Nav.Item className="w-25 d-flex justify-content-center">
				<Nav.Link
					href="/"
					className="text-danger fw-bolder logout-action"
					onClick={handleLogout}
				>
					Sair
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default NavBar;
