import { useState } from "react";
import { useForm } from "react-hook-form";

function RegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [showAlert, setShowAlert] = useState(false);

	const onSubmit = (data) => {
		console.log(data)
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 5000); // La alerta se ocultará después de 5 segundos
	};

	return (
		<>
			<h2 className="text-center mb-4">Registrar</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label htmlFor="nombres" className="fs-5">
						Nombres :
					</label>
					<input
						className="form-control"
						placeholder="Nombres"
						autoComplete="off"
						id="nombres"
						{...register("nombres", {
							required: {
								value: true,
								message: "Este Campo es Obligatorio",
							},
							pattern: {
								value: /^[a-zA-ZñÑ]+$/,
								message: "Ingresa un Nombre Valido",
							},
							maxLength: {
								value: 20,
								message: "Ingresar un maximo de 20 Caracteres",
							},
							minLength: {
								value: 2,
								message: "Ingresar un minimo de 02 Caracteres",
							},
						})}
					/>
					{errors.nombres && (
						<span className="text-danger">{errors.nombres.message}</span>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="apellidos" className="fs-5">
						Apellidos :
					</label>
					<input
						className="form-control"
						placeholder="Apellidos"
						autoComplete="off"
						id="apellidos"
						{...register("apellidos", {
							required: {
								value: true,
								message: "Este Campo es Obligatorio",
							},
							pattern: {
								value: /^[a-zA-ZñÑ]+$/,
								message: "Ingresa un Apellido Valido",
							},
							maxLength: {
								value: 20,
								message: "Ingresar un maximo de 20 Caracteres",
							},
							minLength: {
								value: 2,
								message: "Ingresar un minimo de 02 Caracteres",
							},
						})}
					/>
					{errors.apellidos && (
						<span className="text-danger">{errors.apellidos.message}</span>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="telefono" className="fs-5">
						Telefono :
					</label>
					<input
						className="form-control"
						placeholder="Telefono"
						autoComplete="off"
						id="telefono"
						type="number"
						{...register("telefono", {
							required: {
								value: true,
								message: "Este Campo es Obligatorio",
							},
							pattern: {
								value: /^\d{10}$/,
								message: "Ingresa un Número Valido",
							},
						})}
					/>
					{errors.telefono && (
						<span className="text-danger">{errors.telefono.message}</span>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="pais" className="fs-5">
						País :
					</label>
					<select
						className="form-control"
						id="pais"
						{...register("pais", {
							required: {
								value: true,
								message: "Seleccione otra Opción",
							},
							validate: (value) => value !== "" || "Selecciona un país válido",
						})}
					>
						<option value="0">Selecciona un país</option>
						<option value="1">Argentina</option>
						<option value="2">Brasil</option>
						<option value="3">Chile</option>
						<option value="4">Colombia</option>
					</select>
					{errors.pais && (
						<span className="text-danger">{errors.pais.message}</span>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="correo" className="fs-5">
						Correo :
					</label>
					<input
						className="form-control"
						placeholder="Correo"
						autoComplete="off"
						id="correo"
						{...register("correo", {
							required: {
								value: true,
								message: "Este Campo es Obligatorio",
							},
							pattern: {
								value: /^\S+@\S+\.\S+$/,
								message: "Ingresa un Número Valido",
							},
						})}
					/>
					{errors.correo && (
						<span className="text-danger">{errors.correo.message}</span>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="fs-5">
						Contraseña :
					</label>
					<input
						className="form-control"
						placeholder="Contraseña"
						id="password"
						type="password"
						{...register("password", {
							required: {
								value: true,
								message: "Este Campo es Obligatorio",
							},
							pattern: {
								value:
									/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d{2})(?=.*[-,._])[A-Za-z\d-,._]{8,}$/,
								message:
									"La contraseña debe tener minimo 8 caracteres, dos numeros, una mayuscula y un caracter especial",
							},
						})}
					/>
					{errors.password && (
						<span className="text-danger">{errors.password.message}</span>
					)}
				</div>
				<div className="d-flex justify-content-center">
					<button type="submit" className="btn btn-success">
						Registrarse
					</button>
				</div>
			</form>
			{showAlert && (
				<div className="alert alert-success mt-3" role="alert">
					Registro Exitoso
				</div>
			)}
		</>
	);
}

export default RegisterForm;
