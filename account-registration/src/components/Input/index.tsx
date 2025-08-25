import styles from './style.module.css';

type InputProps = {
	name: string;
	label: string;
	type: 'text' | 'email' | 'password';
};

export const Input = ({ name, label, type }: InputProps) => {
	return (
		<label className={styles.label}>
			{label}
			<input type={type} name={name} required />
		</label>
	);
};
