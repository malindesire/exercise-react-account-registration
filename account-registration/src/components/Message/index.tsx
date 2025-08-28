import styles from './style.module.css';

type MessageProps = {
	message: string;
};

export const Message = ({ message }: MessageProps) => {
	return <p className={styles.message}>{message}</p>;
};
