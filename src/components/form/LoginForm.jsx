import { useState } from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		reValidateMode: "onSubmit",
	});

	const [showAlert, setShowAlert] = useState(false);

	const onSubmit = (data) => {
		console.log(JSON.stringify(data));
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 5000);
	};

	return (
		<>
			<h2 className="text-center mb-4">Iniciar Sesión</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label className="form-label fs-6" htmlFor="email">
						Correo Electrónico
					</label>
					<input
						className="form-control"
						placeholder="Correo Electrónico"
						autoComplete="off"
						{...register("email", {
							required: {
								value: true,
								message: "Este Campo es Obligatorio",
							},
							pattern: {
								value: /^\S+@\S+\.\S+$/,
								message: "Ingresa un correo electrónico válido",
							},
						})}
					/>
					{errors.email && (
						<span className="text-danger">{errors.email.message}</span>
					)}
				</div>
				<div className="mb-3">
					<label className="form-label fs-6" htmlFor="password">
						Contraseña
					</label>
					<input
						className="form-control"
						type="password"
						placeholder="Contraseña"
						{...register("password", {
							required: "La Contraseña es Obligatoria",
						})}
					/>
					{errors.password && (
						<span className="text-danger">{errors.password.message}</span>
					)}
				</div>
				<p>
					<a
						href="/register"
						className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
						style={{ textDecoration: "none" }}
					>
						Registrarse
					</a>
				</p>
				<div className="d-flex justify-content-center">
					<button type="submit" className="btn btn-success">
						Log In
					</button>
				</div>
			</form>
			{showAlert && (
				<div className="alert alert-success mt-3" role="alert">
					Inicio Exitoso
				</div>
			)}
		</>
	);
}

export default LoginForm;
