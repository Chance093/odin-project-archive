import { projectFolders } from "./index";
import { Todo, Project, ProjectFolder } from "./factory-functions";
import { displayFolders, displayProject } from "./dom/projects";
import { format, addDays, subDays } from "date-fns";

const currentDate = format(new Date(), 'yyyy-MM-dd');
const pastDue = format(subDays(new Date(), 2), 'yyyy-MM-dd');
const tomorrowsDate = format(addDays(new Date(), 1), 'yyyy-MM-dd');
const thisWeekDate = format(addDays(new Date(), 5), 'yyyy-MM-dd');

function setExamples() {
    const projectFolder1 = ProjectFolder('Personal');
    const projectFolder2 = ProjectFolder('Work');
    const project1 = cleanHouse();
    const project2 = errands();
    const project3 = auditing();
    const project4 = recording();
    projectFolder1.projects.push(project1);
    projectFolder1.projects.push(project2);
    projectFolder2.projects.push(project3);
    projectFolder2.projects.push(project4);
    projectFolders.push(projectFolder1);
    projectFolders.push(projectFolder2);
    displayFolders(projectFolders);
    displayProject(project1, 0, 0);
}

function cleanHouse() {
    const cleanHouse = Project('Clean House', 'The house is very dirty. I need to clean the whole house before my dinner party this weekend. If it isn\'t clean, all of my friends and family will judge me for the rest of my life. They will think I am the dirty guy who doesn\'t take care of himself. Then I will start to feel everything collapsing around me. Dear god, let me get this house clean!');
    const todo1 = Todo('Do the dishes', currentDate);
    const todo2 = Todo('Wash laundry', currentDate);
    const todo3 = Todo('Clean room', currentDate);
    const todo4 = Todo('Vacuum', currentDate);
    todo2.priority = true;
    todo4.taskComplete = true;
    cleanHouse.todos.push(todo1);
    cleanHouse.todos.push(todo2);
    cleanHouse.todos.push(todo3);
    cleanHouse.todos.push(todo4);
    return cleanHouse;
}

function errands() {
    const errands = Project('Errands', 'Hey Squidward, have you finished those errands? Have you finished those errands? Have you finished those errands? Have you finished those errands? Errands..? Errands..? Errands..? Errands..? Have you finished those errands? Have you finished those errands? Have you finished those errands?');
    const todo1 = Todo('Pay rent', thisWeekDate);
    const todo2 = Todo('Pick up groceries', tomorrowsDate);
    const todo3 = Todo('Get haircut', pastDue);
    todo1.priority = true;
    todo3.taskComplete = true;
    errands.todos.push(todo1);
    errands.todos.push(todo2);
    errands.todos.push(todo3);
    return errands;
}

function auditing() {
    const auditing = Project('Auditing', 'Everyday you will start by working on audit issues. Each audit issue needs to be checked to see if any new docs came in, and any emails that need to be sent to follow up with the audit issue need to be done. Every new audit should be finished the same day it was started. Once all audits are done, all mortgages and other recordables need to be filed away.');
    const todo1 = Todo('Finish all overdue audits', currentDate);
    const todo2 = Todo('Work on audit issues', pastDue);
    const todo3 = Todo('Email lenders', tomorrowsDate);
    const todo4 = Todo('Request R&E Rider', thisWeekDate);
    const todo5 = Todo('File all mortgages', tomorrowsDate);
    todo1.priority = true;
    todo3.taskComplete = true;
    auditing.todos.push(todo1);
    auditing.todos.push(todo2);
    auditing.todos.push(todo3);
    auditing.todos.push(todo4);
    auditing.todos.push(todo5);
    return auditing;
}

function recording() {
    const recording = Project('Recording', 'All work needs to be split up between e-records and mailouts. You cannot spend all day doing one, you must do both. Mortgages are top priority, along with everything that needs to get sent with the mortgage. We are currently behind on recording subordinations so those are also priority. Make sure everything is notarized before submitting to the county.');
    const todo1 = Todo('Record subs', thisWeekDate);
    const todo2 = Todo('Mailout MD docs', tomorrowsDate);
    const todo3 = Todo('Call TX county', pastDue);
    const todo4 = Todo('Follow up with NJ notary', currentDate);
    const todo5 = Todo('Rescan NV mtg', pastDue);
    const todo6 = Todo('Request POA for PA', tomorrowsDate);
    todo1.priority = true;
    todo2.taskComplete = true;
    todo4.priority = true;
    todo5.taskComplete = true;
    recording.todos.push(todo1);
    recording.todos.push(todo2);
    recording.todos.push(todo3);
    recording.todos.push(todo4);
    recording.todos.push(todo5);
    recording.todos.push(todo6);
    return recording;
}

export { setExamples };