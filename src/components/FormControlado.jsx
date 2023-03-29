import { useState } from 'react';

const FormControlado = () => {
	const [form, setForm] = useState({
		email: 'prueba@gmail.com',
		password: '123',
	});

	const handlerInput = e => {
		setForm({ ...form, email: e.target.value });
	};
	const handlerInputPassword = e => {
		setForm({ ...form, password: e.target.value });
	};
	return (
		<>
			<input
				type='text'
				name='email'
				placeholder='Ingrese su email'
				autoComplete='off'
				value={form.email}
				onChange={handlerInput}
			></input>
			<input
				type='password'
				name='password'
				placeholder='Ingrese su password'
				autoComplete='off'
				value={form.password}
				onChange={handlerInputPassword}
			></input>
			<button>Login</button>
			<br />
			<span>Email:{form.email}</span>
			<br />
			<span>Password:{form.password}</span>
		</>
	);
};

export default FormControlado;
