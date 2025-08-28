import styles from './style.module.css';

type InputProps = {
	name: string;
	label: string;
	type: 'text' | 'email' | 'password';
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	minLength?: number;
};

export const Input = ({
	name,
	label,
	type,
	onChange,
	value,
	minLength,
}: InputProps) => {
	return (
		<label className={styles.label}>
			{label}
			<input
				type={type}
				name={name}
				onChange={onChange}
				autoComplete={name}
				required
				value={value}
				minLength={minLength}
			/>
		</label>
	);
};
