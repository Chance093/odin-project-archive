import styles from '../Form.module.css';

function EducationForm({ onArrayInputChange, deleteForm, addForm, education }) {
	const list = (
		<ul className={styles.educationList}>
			{education.map((list) => (
				<li key={list.id} className={styles.education}>
					<input
						className={styles.input}
						type='text'
						placeholder='University Name'
						name='schoolEdu'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={styles.input}
						type='text'
						placeholder='City, State'
						name='locationEdu'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={styles.input}
						type='text'
						placeholder='Degree'
						name='degreeEdu'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={styles.input}
						type='text'
						placeholder='Field of Study'
						name='fieldEdu'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={styles.input}
						type='text'
						placeholder='Start Date'
						name='fromDateEdu'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={styles.input}
						type='text'
						placeholder='End Date'
						name='toDateEdu'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={styles.input}
						type='text'
						placeholder='Description'
						name='descriptionEdu'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<button
						onClick={deleteForm}
						name='education'
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
		<div className={styles.educationForm}>
			<header className={styles.head}>
				<h2>Education</h2>
				<button onClick={addForm} name='education' className={styles.addBtn}>
					Add School
				</button>
			</header>
			{list}
		</div>
	);
}

export default EducationForm;
