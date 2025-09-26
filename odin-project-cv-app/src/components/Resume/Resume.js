import PersonalInfo from './Sections/PersonalInfo';
import ObjectiveInfo from './Sections/ObjectiveInfo';
import EducationInfo from './Sections/EducationInfo';
import ExperienceInfo from './Sections/ExperienceInfo';
import SkillsInfo from './Sections/SkillsInfo';
import styles from './Resume.module.css';

function Resume({ personalInfo, education, experience }) {
	return (
		<div className={styles.resume}>
			<PersonalInfo personalInfo={personalInfo} />
			<ObjectiveInfo objective={personalInfo.objective} />
			<EducationInfo education={education} />
			<ExperienceInfo experience={experience} />
			<SkillsInfo skills={personalInfo.skills} />
		</div>
	);
}

export default Resume;
