import styles from '../Form.module.css';

function ExperienceForm({
	onArrayInputChange,
	deleteForm,
	addForm,
	experience,
}) {
	const list = (
		<ul className={styles.experienceList}>
			{experience.map((list) => (
				<li key={list.id} className={styles.experience}>
					<input
						className={styles.input}
						type='text'
						placeholder='Position'
						name='positionExp'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={styles.input}
						type='text'
						placeholder='Company'
						name='companyExp'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={styles.input}
						type='text'
						placeholder='City, State'
						name='companyLocExp'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={styles.input}
						type='text'
						placeholder='Start Date'
						name='fromDateExp'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={styles.input}
						type='text'
						placeholder='End Date'
						name='toDateExp'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={styles.input}
						type='text'
						placeholder='Description'
						name='descriptionExp'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<button
						onClick={deleteForm}
						name='experience'
						id={list.id}
						className={styles.deleteBtn}
					>
						Delete
					</button>
				</li>
			))}
		</ul>
	);

	return (
		<div className={styles.experienceForm}>
			<header className={styles.head}>
				<h2>Experience</h2>
				<button onClick={addForm} name='experience' className={styles.addBtn}>
					Add Job
				</button>
			</header>

			{list}
		</div>
	);
}

export default ExperienceForm;
