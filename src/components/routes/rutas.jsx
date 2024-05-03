import { Route, Routes } from "react-router-dom";
import LoginForm from "../form/LoginForm.jsx";
import RegisterForm from "../form/RegisterFrom.jsx";

const routes = [
	{ path: "/", component: LoginForm },
	{ path: "/register", component: RegisterForm },
];

function Rutas() {
	return (
		<Routes>
			{routes.map((componente, index) => (
				<Route
					key={index}
					path={componente.path}
					element={<componente.component />}
				/>
			))}
		</Routes>
	);
}

export default Rutas;
