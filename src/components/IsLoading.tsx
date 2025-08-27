import { Col, Image, Row } from 'react-bootstrap';

const IsLoading = () => {
	return (
		<Row
			className="container-fluid m-0 d-flex justify-content-center align-items-center"
			style={{ height: '100vh', width: '100vw' }}
		>
			<Col className="d-flex flex-column align-items-center">
				<Image src="/src/assets/load-oficial.svg" />
				<h1>Carregando...</h1>
			</Col>
		</Row>
	);
};

export default IsLoading;
