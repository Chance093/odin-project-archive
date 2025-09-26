import { addProjectFolder } from './controllers/project-folders';
import { setExamples } from './example';
import { removeProjectModal, removeTodoModal } from './dom/modal';
import { displayPriority, displayToday, displayUpcoming } from './dom/links';

const projectFolders = [];


const pfButton = document.querySelector('.pf-button');
pfButton.addEventListener('click', addProjectFolder);

const cpButton = document.querySelector('.cp-button');
const ctdButton = document.querySelector('.ctd-button');
cpButton.addEventListener('click', removeProjectModal);
ctdButton.addEventListener('click', removeTodoModal);

const todayLink = document.querySelector('.today-link');
todayLink.addEventListener('click', displayToday);
const upcomingLink = document.querySelector('.upcoming-link');
upcomingLink.addEventListener('click', displayUpcoming);
const priorityLink = document.querySelector('.priority-link');
priorityLink.addEventListener('click', displayPriority);

setExamples();

export { projectFolders };