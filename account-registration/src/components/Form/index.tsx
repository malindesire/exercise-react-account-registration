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
		<form className={styles.form}>
			<Input label="Fullname" type="text" name="name" />
			<Input label="Username" type="text" name="username" />
			<Input label="E-mail" type="email" name="email" />
			<Input label="Password" type="password" name="password" />
			<Input
				label="Confirm password"
				type="password"
				name="confirmPassword"
			/>
			<Button />
		</form>
	);
};
