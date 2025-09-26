import styles from './ObjectiveInfo.module.css';

function ObjectiveInfo({ objective }) {
	return (
		<div className={styles.info}>
			<h2 className={styles.left}>Objective Statement</h2>
			<p className={styles.right}>{objective}</p>
		</div>
	);
}

export default ObjectiveInfo;
