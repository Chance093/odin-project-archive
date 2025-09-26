import EducationForm from './Sections/EducationForm';
import ExperienceForm from './Sections/ExperienceForm';
import PersonalForm from './Sections/PersonalForm';
import styles from './Form.module.css';

function Form({
	onInputChange,
	onArrayInputChange,
	addForm,
	deleteForm,
	experience,
	education,
}) {
	return (
		<div className={styles.form}>
			<PersonalForm onInputChange={onInputChange} />
			<EducationForm
				onArrayInputChange={onArrayInputChange}
				addForm={addForm}
				deleteForm={deleteForm}
				education={education}
			/>
			<ExperienceForm
				onArrayInputChange={onArrayInputChange}
				addForm={addForm}
				deleteForm={deleteForm}
				experience={experience}
			/>
		</div>
	);
}

export default Form;
