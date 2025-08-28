import type { ReactElement } from 'react';
import styles from './style.module.css';

type ButtonProps = {
	disabled?: boolean;
};

export const Button = ({ disabled }: ButtonProps): ReactElement => {
	return (
		<input
			type="submit"
			value="Register"
			className={styles.submitButton}
			disabled={disabled}
		/>
	);
};
