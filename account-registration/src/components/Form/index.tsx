import { Button } from '../Button';
import { Input } from '../Input';
import styles from './style.module.css';

export const Form = () => {
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
