import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './component/ProtectedRouter';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />

			<Route element={<PrivateRoute />}>
				<Route path="/dashboard" element={<Dashboard />} />
			</Route>
		</Routes>
	);
}

export default App;
