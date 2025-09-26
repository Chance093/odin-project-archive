import styles from './EducationInfo.module.css';

function EducationInfo({ education }) {
	function getDegree(list) {
		if (list.fieldEdu) {
			return `${list.degreeEdu} in ${list.fieldEdu}`;
		} else {
			return `${list.degreeEdu}`;
		}
	}

	const list = (
		<ul className={styles.right}>
			{education.map((list) => (
				<li key={list.id} className={styles.education}>
					<p>
						<span className={styles.school}>{list.schoolEdu}</span> /{' '}
						{getDegree(list)}
					</p>
					<p className={styles.dates}>
						{list.fromDateEdu} - {list.toDateEdu}, {list.locationEdu}
					</p>
					<p>{list.descriptionEdu}</p>
				</li>
			))}
		</ul>
	);

	return (
		<div className={styles.info}>
			<h2 className={styles.left}>Education</h2>
			{list}
		</div>
	);
}

export default EducationInfo;
