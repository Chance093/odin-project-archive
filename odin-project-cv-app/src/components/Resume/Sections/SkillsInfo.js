import styles from './SkillsInfo.module.css';

function SkillsInfo({ skills }) {
	return (
		<div className={styles.info}>
			<h1 className={styles.left}>Skills</h1>
			<p className={styles.right}>{skills}</p>
		</div>
	);
}

export default SkillsInfo;
