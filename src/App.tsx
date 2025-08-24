import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
		</Routes>
	);
}

export default App;
