import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import styles from './style.module.css';
import { type RegistrationData } from '../../utilities/types';

export const Form = () => {
	const [data, setData] = useState<RegistrationData>({
		name: '',
		username: '',
		email: '',
		password: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(data);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<Input
				label="Fullname"
				type="text"
				name="name"
				onChange={handleChange}
			/>
			<Input
				label="Username"
				type="text"
				name="username"
				onChange={handleChange}
			/>
			<Input
				label="E-mail"
				type="email"
				name="email"
				onChange={handleChange}
			/>
			<Input
				label="Password"
				type="password"
				name="password"
				onChange={handleChange}
			/>
			<Input
				label="Confirm password"
				type="password"
				name="confirmPassword"
				onChange={handleChange}
			/>
			<Button />
		</form>
	);
};
