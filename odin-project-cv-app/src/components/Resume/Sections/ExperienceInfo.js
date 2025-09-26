import styles from './ExperienceInfo.module.css';

function ExperienceInfo({ experience }) {
	const list = (
		<ul className={styles.right}>
			{experience.map((list) => (
				<li key={list.id} className={styles.experience}>
					<p>
						<span className={styles.company}>{list.companyExp}</span> /{' '}
						{list.positionExp}
					</p>
					<p className={styles.dates}>
						{list.fromDateExp} - {list.toDateExp}, {list.companyLocExp}
					</p>
					<p>{list.descriptionExp}</p>
				</li>
			))}
		</ul>
	);

	return (
		<div className={styles.info}>
			<h2 className={styles.left}>Experience</h2>
			{list}
		</div>
	);
}

export default ExperienceInfo;
