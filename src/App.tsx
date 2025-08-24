import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<Dashboard />} />
		</Routes>
	);
}

export default App;
