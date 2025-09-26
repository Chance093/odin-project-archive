import { useState } from 'react';
import Form from './components/Form/Form';
import Resume from './components/Resume/Resume';
import uuid from 'react-uuid';
import styles from './App.module.css';

function App() {
	const [personalInfo, setPersonalInfo] = useState({
		firstName: '',
		lastName: '',
		position: '',
		address1: '',
		address2: '',
		phoneNumber: '',
		email: '',
		objective: '',
		skills: '',
	});
	const [experience, setExperience] = useState([
		{
			id: uuid(),
			positionExp: '',
			companyExp: '',
			companyLocExp: '',
			fromDateExp: '',
			toDateExp: '',
			descriptionExp: '',
		},
	]);
	const [education, setEducation] = useState([
		{
			id: uuid(),
			schoolEdu: '',
			locationEdu: '',
			degreeEdu: '',
			fieldEdu: '',
			startDateEdu: '',
			endDateEdu: '',
			descriptionEdu: '',
		},
	]);

	function onInputChange(e) {
		setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
	}

	function onArrayInputChange(e) {
		const id = e.target.id;
		const name = e.target.name;
		const field = name.includes('Edu') ? 'education' : 'experience';
		let arr = [];
		if (field === 'education') {
			arr = education.map((edu) => {
				if (id === edu.id) {
					return { ...edu, [name]: e.target.value };
				} else return { ...edu };
			});
			setEducation(arr);
		} else {
			arr = experience.map((exp) => {
				if (id === exp.id) {
					return {
						...exp,
						[name]: e.target.value,
					};
				} else return { ...exp };
			});
			setExperience(arr);
		}
	}

	function addForm(e) {
		const field = e.target.name.includes('edu') ? 'education' : 'experience';
		if (field === 'education') {
			setEducation([
				...education,
				{
					id: uuid(),
					schoolEdu: '',
					locationEdu: '',
					degreeEdu: '',
					fieldEdu: '',
					startDateEdu: '',
					endDateEdu: '',
					descriptionEdu: '',
				},
			]);
		} else {
			setExperience([
				...experience,
				{
					id: uuid(),
					positionExp: '',
					companyExp: '',
					companyLocExp: '',
					fromDateExp: '',
					toDateExp: '',
					descriptionExp: '',
				},
			]);
		}
	}

	function deleteForm(e) {
		const id = e.target.id;
		const field = e.target.name.includes('edu') ? 'education' : 'experience';
		if (field === 'education') {
			setEducation((prev) => prev.filter((edu) => edu.id !== id));
		} else {
			setExperience((prev) => prev.filter((exp) => exp.id !== id));
		}
	}

	return (
		<div className={styles.app}>
			<h1 className={styles.header}>CV Creator</h1>
			<Form
				onInputChange={onInputChange}
				onArrayInputChange={onArrayInputChange}
				addForm={addForm}
				deleteForm={deleteForm}
				experience={experience}
				education={education}
			/>
			<Resume
				personalInfo={personalInfo}
				experience={experience}
				education={education}
			/>
		</div>
	);
}

export default App;
