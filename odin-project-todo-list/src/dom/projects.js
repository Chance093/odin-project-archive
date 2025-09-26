import { displayEditProjectModal, displayEditTodoModal, displayProjectModal, displayTodoModal } from "./modal";
import { removeProject, selectProject } from "../controllers/projects";
import { checkTodo, removeTodo } from "../controllers/todos";
import { projectFolders } from "..";
import { sortTodosByChecked } from "../controllers/todos";
import deleteIcon from "../icons/delete.svg";
import editIcon from "../icons/edit.png";
import addOrangeIcon from "../icons/add.svg";
import addWhiteIcon from "../icons/add-white.svg";
import priorityIcon from "../icons/star.png";

function displayFolders(folders) {
    const list = document.querySelector('.project-folder-list');
    list.innerHTML = '';
    folders.forEach((folder, pfIndex) => {
        const projFolder = document.createElement('li');
        const button = document.createElement('img');
        const div = document.createElement('div');
        const projectList = document.createElement('ul');
        projectList.classList.add('project-list');
        projectList.setAttribute('data-pf-index', pfIndex);
        button.classList.add('pf-button');
        button.setAttribute('data-button-index', pfIndex);
        button.src = addOrangeIcon;
        button.addEventListener('click', displayProjectModal);
        div.textContent = folder.name;
        button.textContent = '+';
        div.appendChild(button);
        projFolder.appendChild(div);
        projFolder.appendChild(projectList);
        list.appendChild(projFolder);
        const projects = folder.projects;
        projects.forEach((project, pIndex) => {
            const proj = document.createElement('li');
            proj.setAttribute('data-p-index', pIndex);
            proj.setAttribute('data-pf-index', pfIndex);
            proj.textContent = project.name;
            const todoNumber = document.createElement('p');
            let num = 0;
            projectFolders[pfIndex].projects[pIndex].todos.forEach(todo => {
                if (!todo.taskComplete) num++;
            })
            todoNumber.textContent = num;
            proj.appendChild(todoNumber);
            projectList.appendChild(proj)
            proj.addEventListener('click', selectProject);
        })
    })
}

function displayProject(project, pfIndex, pIndex) {
    const mainContainer = document.querySelector('main');
    mainContainer.innerHTML = '';
    const divHeader = document.createElement('div');
    const divButtons = document.createElement('div');
    const description = document.createElement('p');
    const todoHeaderContainer = document.createElement('div');
    const todoList = document.createElement('ul');
    const projectHeader = document.createElement('h1');
    const projectDelete = document.createElement('img');
    const projectEdit = document.createElement('img');
    const todoHeader = document.createElement('h2');
    const addTodo = document.createElement('img');
    addTodo.setAttribute('data-pf-index', pfIndex);
    addTodo.setAttribute('data-p-index', pIndex);
    addTodo.src = addWhiteIcon;
    addTodo.addEventListener('click', displayTodoModal);
    projectDelete.classList.add('p-delete');
    projectDelete.setAttribute('data-pf-index', pfIndex);
    projectDelete.setAttribute('data-p-index', pIndex);
    projectDelete.src = deleteIcon;
    projectDelete.addEventListener('click', removeProject);
    projectEdit.classList.add('p-edit');
    projectEdit.setAttribute('data-pf-index', pfIndex);
    projectEdit.setAttribute('data-p-index', pIndex);
    projectEdit.src = editIcon;
    projectEdit.addEventListener('click', displayEditProjectModal);
    divHeader.classList.add('p-header');
    description.classList.add('p-description');
    todoHeaderContainer.classList.add('todo-header');
    todoList.classList.add('todo-list');
    projectHeader.textContent = project.name;
    projectDelete.textContent = 'X';
    projectEdit.textContent = '/';
    description.textContent = project.description;
    todoHeader.textContent = 'To Do List';
    addTodo.textContent = '+';
    divButtons.appendChild(projectEdit);
    divButtons.appendChild(projectDelete);
    divHeader.appendChild(projectHeader);
    divHeader.appendChild(divButtons);
    todoHeaderContainer.appendChild(todoHeader);
    todoHeaderContainer.appendChild(addTodo);
    mainContainer.appendChild(divHeader);
    mainContainer.appendChild(description);
    mainContainer.appendChild(todoHeaderContainer);
    mainContainer.appendChild(todoList);
    const todos = project.todos;
    displayTodos(todos, todoList, pfIndex, pIndex);
}

function displayTodos(todos, todoList, pfIndex, pIndex) {
    const sortedTodos = sortTodosByChecked(todos);
    sortedTodos.forEach((todo, tdIndex) => {
        const todoContainer = document.createElement('li');
        const leftContainer = document.createElement('div');
        const rightContainer = document.createElement('div');
        const checkbox = document.createElement('input');
        const task = document.createElement('label');
        const date = document.createElement('p');
        const editButton = document.createElement('img');
        const deleteButton = document.createElement('img');
        deleteButton.setAttribute('data-pf-index', pfIndex);
        deleteButton.setAttribute('data-p-index', pIndex);
        deleteButton.setAttribute('data-td-index', tdIndex);
        deleteButton.src = deleteIcon;
        deleteButton.addEventListener('click', removeTodo);
        editButton.setAttribute('data-pf-index', pfIndex);
        editButton.setAttribute('data-p-index', pIndex);
        editButton.setAttribute('data-td-index', tdIndex);
        editButton.src = editIcon;
        editButton.addEventListener('click', displayEditTodoModal);
        leftContainer.classList.add('left-container');
        rightContainer.classList.add('right-container');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', `todo${tdIndex}`);
        checkbox.setAttribute('data-pf-index', pfIndex);
        checkbox.setAttribute('data-p-index', pIndex);
        checkbox.setAttribute('data-td-index', tdIndex);
        checkbox.addEventListener('change', checkTodo);
        task.setAttribute('for', `todo${tdIndex}`);
        if (todo.taskComplete) checkbox.checked = true;
        projectFolders[pfIndex].projects[pIndex].todos[tdIndex].pfIndex = pfIndex;
        projectFolders[pfIndex].projects[pIndex].todos[tdIndex].pIndex = pIndex;
        projectFolders[pfIndex].projects[pIndex].todos[tdIndex].tdIndex = tdIndex;
        task.textContent = todo.task;
        date.textContent = todo.formattedDate;
        editButton.textContent = '/';
        deleteButton.textContent = 'X';
        leftContainer.appendChild(checkbox);
        leftContainer.appendChild(task);
        if (todo.priority) {
            const priority = document.createElement('img');
            priority.src = priorityIcon;
            leftContainer.appendChild(priority);
        }
        rightContainer.appendChild(date);
        rightContainer.appendChild(editButton);
        rightContainer.appendChild(deleteButton);
        todoContainer.appendChild(leftContainer);
        todoContainer.appendChild(rightContainer);
        todoList.appendChild(todoContainer);
    })
}




export { displayFolders, displayProject };