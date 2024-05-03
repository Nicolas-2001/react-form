import "@/assets/styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Rutas from "@/components/routes/rutas.jsx";

function App() {
	return (
		<>
			<div className="vh-100">
				<div className="container h-100">
					<div className="row align-items-center h-100">
						<div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
							<Router>
								<Rutas />
							</Router>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
