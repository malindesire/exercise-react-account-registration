import styles from './style.module.css';

type InputProps = {
	name: string;
	label: string;
	type: 'text' | 'email' | 'password';
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ name, label, type, onChange }: InputProps) => {
	return (
		<label className={styles.label}>
			{label}
			<input
				type={type}
				name={name}
				onChange={onChange}
				autoComplete={name}
			/>
		</label>
	);
};
