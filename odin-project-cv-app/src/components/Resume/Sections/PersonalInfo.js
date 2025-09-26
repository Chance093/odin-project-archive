import styles from './PersonalInfo.module.css';

function PersonalInfo({ personalInfo }) {
	return (
		<div className={styles.info}>
			<h1 className={styles.left}>{personalInfo.position}</h1>
			<div className={styles.right}>
				<h3 className={styles.name}>
					{personalInfo.firstName} {personalInfo.lastName}
				</h3>
				<p>{personalInfo.address1}</p>
				<p>{personalInfo.address2}</p>
				<p>{personalInfo.phoneNumber}</p>
				<p>{personalInfo.email}</p>
			</div>
		</div>
	);
}

export default PersonalInfo;
