import Cookies from 'js-cookie';
import { useState, type FormEvent } from 'react';
import { Alert, Button, Col, Form, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import blueCircle from '../assets/decorative-blue-circle.svg';
import greenDiamond from '../assets/decorative-green-diamond.svg';
import whiteCircle from '../assets/decorative-white-circle.svg';
import yellowCircle from '../assets/decorative-yellow-circle.svg';
import drikeyLogo from '../assets/logo.png';
import { loginValidation } from '../validations/loginValidation';

function Login() {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');

		const result = await loginValidation(email.trim(), password.trim());

		console.log('result ===> ', result);

		const validRoles =
			result.roles?.includes('admin') || result.roles?.includes('user');

		if (result.success) {
			if (validRoles) {
				if (result.token) {
					Cookies.set('mock_jwt', result.token, {
						expires: 1 / 24,
					});

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
		<>
			<Row
				className="d-flex justify-content-center align-items-center"
				style={{ height: '100vh', width: '100vw' }}
			>
				<Image
					src={yellowCircle}
					className="decorative-yellow-circle"
				/>

				<Image
					src={greenDiamond}
					className="decorative-green-diamond"
				/>

				<Image src={blueCircle} className="decorative-blue-circle" />

				<Image
					src={whiteCircle}
					className="decorative-white-circle-left"
				/>

				<Image
					src={whiteCircle}
					className="decorative-white-circle-right"
				/>

				<Col
					xs={10} // Ocupa 10 de 12 colunas em telas extra pequenas (celular)
					sm={8} // Ocupa 8 de 12 colunas em telas pequenas
					md={6} // Ocupa 6 de 12 colunas em telas médias (tablet)
					lg={6} // Ocupa 6 de 12 colunas em telas grandes (desktop)
					className="d-flex justify-content-center align-items-center"
				>
					<Form
						onSubmit={handleLogin}
						className="d-flex flex-column align-items-center justify-content-center rounded shadow-sm bg-white p-5 w-100"
					>
						{error && <Alert variant="danger">{error}</Alert>}
						<Image className="mb-4 drikey-logo" src={drikeyLogo} />
						<Form.Group
							className="mb-4 w-100"
							controlId="formLoginEmail"
						>
							<Form.Label className="d-flex justify-content-start">
								Email
							</Form.Label>
							<Form.Control
								type="email"
								value={email}
								onChange={({ target }) =>
									setEmail(target.value)
								}
								placeholder="Email"
							/>
						</Form.Group>

						<Form.Group
							className="mb-4 w-100"
							controlId="formLoginPassword"
						>
							<Form.Label className="d-flex justify-content-start">
								Password
							</Form.Label>
							<Form.Control
								type="password"
								value={password}
								onChange={({ target }) =>
									setPassword(target.value)
								}
								placeholder="Senha"
							/>
						</Form.Group>
						<Form.Group
							className="mb-4 d-flex"
							controlId="formLoginCheckbox"
						>
							<Form.Check type="checkbox" label="Lembre-me" />
						</Form.Group>
						<Button
							variant="outline-danger"
							type="submit"
							className="w-100"
						>
							Entrar
						</Button>
					</Form>
				</Col>
			</Row>
		</>
	);
}

export default Login;
