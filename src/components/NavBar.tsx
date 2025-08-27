import Cookies from 'js-cookie';
import { Image, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import type { userPropsType } from '../types/UserType';

const NavBar = ({ user }: userPropsType) => {
	const navigate = useNavigate();

	const handleLogout = () => {
		if (Cookies.get('mock_jwt')) {
			Cookies.remove('mock_jwt');
		}

		navigate('/');
	};

	return (
		<Nav
			accessKey="/dashboard"
			className="d-flex justify-content-between align-items-center"
		>
			<Nav.Item className="w-25">
				<Nav.Link as={Link} to="/dashboard">
					<Image src={logo} style={{ maxWidth: '30vw' }} />
				</Nav.Link>
			</Nav.Item>
			<Nav.Item className="w-25 d-flex align-items-center justify-content-center">
				<Nav.Link className="text-dark ">
					<h5 className="text-center">
						Seja bem-vindo, {user?.firstName}!
					</h5>
				</Nav.Link>
			</Nav.Item>
			<Nav.Item className="w-25 d-flex justify-content-center">
				<Nav.Link
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
