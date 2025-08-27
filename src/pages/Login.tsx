import Cookies from 'js-cookie';
import { useState, type FormEvent } from 'react';
import { Alert, Button, Form, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginValidation } from '../Validations/loginValidation';
import blueCircle from '../assets/decorative-blue-circle.svg';
import greenDiamond from '../assets/decorative-green-diamond.svg';
import whiteCircle from '../assets/decorative-white-circle.svg';
import yellowCircle from '../assets/decorative-yellow-circle.svg';

function Login() {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');

		const result = await loginValidation(email.trim(), password.trim());

		const validRoles =
			result.roles?.includes('admin') || result.roles?.includes('user');

		if (result.success) {
			if (validRoles) {
				if (result.token) {
					Cookies.set('mock_jwt', result.token, { expires: 1 / 24 });
					navigate('/dashboard');
				} else {
					setError('Token inválido.');
				}
			} else {
				setError('Sem permissão de acesso.');
			}
		} else {
			setError(result.message);
		}
	};

	return (
		<div
			className="container-fluid d-flex flex-column align-items-center justify-content-center"
			style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
		>
			<Image src={greenDiamond} className="decorative-green-diamond" />

			<Image src={yellowCircle} className="decorative-yellow-circle" />

			<Image src={blueCircle} className="decorative-blue-circle" />

			<Image src={whiteCircle} className="decorative-white-circle-left" />

			<Image
				src={whiteCircle}
				className="decorative-white-circle-right"
			/>

			<Row className="w-100 h-100 d-flex justify-content-center align-items-center">
				<Form
					onSubmit={handleLogin}
					className="d-flex flex-column justify-content-center align-items-center rounded-3 shadow-sm bg-white h-75 w-50"
				>
					{error && <Alert variant="danger">{error}</Alert>}
					<Image className="mb-4" src="/src/assets/logo.png" />
					<Form.Group
						className="mb-4 w-75"
						controlId="formLoginEmail"
					>
						<Form.Label className="d-flex justify-content-start">
							Email
						</Form.Label>
						<Form.Control
							type="email"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
							placeholder="Email"
						/>
					</Form.Group>

					<Form.Group
						className="mb-4 w-75"
						controlId="formLoginPassword"
					>
						<Form.Label className="d-flex justify-content-start">
							Password
						</Form.Label>
						<Form.Control
							type="password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
							placeholder="Senha"
						/>
					</Form.Group>
					<Form.Group
						className="mb-4 d-flex w-75"
						controlId="formLoginCheckbox"
					>
						<Form.Check type="checkbox" label="Lembre-me" />
					</Form.Group>
					<Button
						variant="outline-danger"
						type="submit"
						className="w-75"
					>
						Entrar
					</Button>
				</Form>
			</Row>
		</div>
	);
}

export default Login;
