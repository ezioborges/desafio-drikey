import { Image, Nav } from 'react-bootstrap';
import type { userPropsType } from '../types/UserType';

const NavBar = ({ user }: userPropsType) => {
	console.log('navbar user ===> ', user);
	return (
		<Nav
			accessKey="/dashboard"
			onSelect={selectedKey => alert(`selected ${selectedKey}`)}
			className="d-flex justify-content-between align-items-center"
		>
			<Nav.Item className="d-flex align-items-center justify-content-center w-25 border">
				<Nav.Link href="/dashboard">
					<Image src="/src/assets/logo.png" />
				</Nav.Link>
			</Nav.Item>
			<Nav.Item className="w-25 border d-flex align-items-end justify-content-center">
				<Nav.Link href="/test">
					Seja bem-vindo, {user?.firstName}!
				</Nav.Link>
			</Nav.Item>
			<Nav.Item className="w-25 border d-flex justify-content-end">
				<Nav.Link href="/">Sair</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default NavBar;
