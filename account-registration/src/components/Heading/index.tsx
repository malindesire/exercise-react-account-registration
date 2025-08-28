import styles from './style.module.css';

type HeadingProps = {
	heading: string;
};

export const Heading = ({ heading }: HeadingProps) => {
	return <h1 className={styles.heading}>{heading}</h1>;
};
