import { projectFolders } from "../index";
import { displayEditTodoModalPriority, displayEditTodoModalToday, displayEditTodoModalUpcoming } from "../dom/modal";
import { format, addDays } from "date-fns";
import { checkTodoToday, removeTodoToday } from "../controllers/today";
import { checkTodoUpcoming, removeTodoUpcoming } from "../controllers/upcoming";
import { checkTodoPriority, removeTodoPriority } from "../controllers/priority";
import deleteIcon from "../icons/delete.svg";
import editIcon from "../icons/edit.png";
import priorityIcon from "../icons/star.png";

function displayToday() {
    const mainContainer = document.querySelector('main');
    mainContainer.innerHTML = '';
    const documentHeader = document.createElement('h1');
    const pastDueHeader = document.createElement('h2');
    const todayHeader = document.createElement('h2');
    documentHeader.textContent = 'Today';
    pastDueHeader.textContent = 'Past Due';
    todayHeader.textContent = 'Due Today';
    const pastDueList = document.createElement('ul');
    const todayList = document.createElement('ul');
    projectFolders.forEach((pf, pfIndex) => {
        pf.projects.forEach((p, pIndex) => {
            p.todos.forEach((td, tdIndex) => {
                const currentDate = format(new Date(), 'MM/dd/yy');
                if (td.taskComplete) return;
                const todoContainer = document.createElement('li');
                const leftContainer = document.createElement('div');
                const rightContainer = document.createElement('div');
                const checkbox = document.createElement('input');
                const task = document.createElement('label');
                const date = document.createElement('p');
                const editButton = document.createElement('img');
                const deleteButton = document.createElement('img');
                leftContainer.classList.add('left-container');
                rightContainer.classList.add('right-container');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', `todo${tdIndex}`);
                checkbox.setAttribute('data-pf-index', pfIndex);
                checkbox.setAttribute('data-p-index', pIndex);
                checkbox.setAttribute('data-td-index', tdIndex);
                checkbox.addEventListener('change', checkTodoToday);
                task.setAttribute('for', `todo${tdIndex}`);
                deleteButton.setAttribute('data-pf-index', pfIndex);
                deleteButton.setAttribute('data-p-index', pIndex);
                deleteButton.setAttribute('data-td-index', tdIndex);
                deleteButton.src = deleteIcon;
                deleteButton.addEventListener('click', removeTodoToday);
                editButton.setAttribute('data-pf-index', pfIndex);
                editButton.setAttribute('data-p-index', pIndex);
                editButton.setAttribute('data-td-index', tdIndex);
                editButton.src = editIcon;
                editButton.addEventListener('click', displayEditTodoModalToday);
                task.textContent = td.task;
                date.textContent = td.formattedDate;
                editButton.textContent = '/';
                deleteButton.textContent = 'X';
                leftContainer.appendChild(checkbox);
                leftContainer.appendChild(task);
                if (td.priority) {
                    const priority = document.createElement('img');
                    priority.src = priorityIcon;
                    leftContainer.appendChild(priority);
                }
                rightContainer.appendChild(date);
                rightContainer.appendChild(editButton);
                rightContainer.appendChild(deleteButton);
                todoContainer.appendChild(leftContainer);
                todoContainer.appendChild(rightContainer);
                if (td.formattedDate < currentDate) {
                    pastDueList.appendChild(todoContainer);
                } else if (td.formattedDate === currentDate) {
                    todayList.appendChild(todoContainer);
                }
            })
        })
    })
    if (!pastDueList.hasChildNodes()) {
        const noPastList = document.createElement('p');
        noPastList.textContent = 'You have nothing past due.';
        pastDueList.appendChild(noPastList);
    }
    if (!todayList.hasChildNodes()) {
        const noTodayList = document.createElement('p');
        noTodayList.textContent = 'You have nothing due today.';
        todayList.appendChild(noTodayList);
    }
    mainContainer.appendChild(documentHeader);
    mainContainer.appendChild(pastDueHeader);
    mainContainer.appendChild(pastDueList);
    mainContainer.appendChild(todayHeader);
    mainContainer.appendChild(todayList);
}

function displayUpcoming() {
    const mainContainer = document.querySelector('main');
    mainContainer.innerHTML = '';
    const documentHeader = document.createElement('h1');
    const tomorrowHeader = document.createElement('h2');
    const thisWeekHeader = document.createElement('h2');
    documentHeader.textContent = 'Upcoming';
    tomorrowHeader.textContent = 'Due Tomorrow';
    thisWeekHeader.textContent = 'Due This Week';
    const tomorrowList = document.createElement('ul');
    const thisWeekList = document.createElement('ul');
    projectFolders.forEach((pf, pfIndex) => {
        pf.projects.forEach((p, pIndex) => {
            p.todos.forEach((td, tdIndex) => {
                const tomorrowsDate = format(addDays(new Date(), 1), 'MM/dd/yy');
                const nextWeekDate = format(addDays(new Date(), 7), 'MM/dd/yy');
                if (td.taskComplete) return;
                const todoContainer = document.createElement('li');
                const leftContainer = document.createElement('div');
                const rightContainer = document.createElement('div');
                const checkbox = document.createElement('input');
                const task = document.createElement('label');
                const date = document.createElement('p');
                const editButton = document.createElement('img');
                const deleteButton = document.createElement('img');
                leftContainer.classList.add('left-container');
                rightContainer.classList.add('right-container');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', `todo${tdIndex}`);
                checkbox.setAttribute('data-pf-index', pfIndex);
                checkbox.setAttribute('data-p-index', pIndex);
                checkbox.setAttribute('data-td-index', tdIndex);
                checkbox.addEventListener('change', checkTodoUpcoming);
                task.setAttribute('for', `todo${tdIndex}`);
                deleteButton.setAttribute('data-pf-index', pfIndex);
                deleteButton.setAttribute('data-p-index', pIndex);
                deleteButton.setAttribute('data-td-index', tdIndex);
                deleteButton.src = deleteIcon;
                deleteButton.addEventListener('click', removeTodoUpcoming);
                editButton.setAttribute('data-pf-index', pfIndex);
                editButton.setAttribute('data-p-index', pIndex);
                editButton.setAttribute('data-td-index', tdIndex);
                editButton.src = editIcon;
                editButton.addEventListener('click', displayEditTodoModalUpcoming);
                task.textContent = td.task;
                date.textContent = td.formattedDate;
                editButton.textContent = '/';
                deleteButton.textContent = 'X';
                leftContainer.appendChild(checkbox);
                leftContainer.appendChild(task);
                if (td.priority) {
                    const priority = document.createElement('img');
                    priority.src = priorityIcon;
                    leftContainer.appendChild(priority);
                }
                rightContainer.appendChild(date);
                rightContainer.appendChild(editButton);
                rightContainer.appendChild(deleteButton);
                todoContainer.appendChild(leftContainer);
                todoContainer.appendChild(rightContainer);
                if (td.formattedDate === tomorrowsDate) {
                    tomorrowList.appendChild(todoContainer);
                } else if (td.formattedDate > tomorrowsDate && td.formattedDate < nextWeekDate) {
                    thisWeekList.appendChild(todoContainer);
                }
            })
        })
    })
    if (!tomorrowList.hasChildNodes()) {
        const noTomorrowList = document.createElement('p');
        noTomorrowList.textContent = 'You have nothing due tomorrow.';
        tomorrowList.appendChild(noTomorrowList);
    }
    if (!thisWeekList.hasChildNodes()) {
        const noThisWeekList = document.createElement('p');
        noThisWeekList.textContent = 'You have nothing due this week.';
        thisWeekList.appendChild(noThisWeekList);
    }
    mainContainer.appendChild(documentHeader);
    mainContainer.appendChild(tomorrowHeader);
    mainContainer.appendChild(tomorrowList);
    mainContainer.appendChild(thisWeekHeader);
    mainContainer.appendChild(thisWeekList);
}

function displayPriority() {
    const mainContainer = document.querySelector('main');
    mainContainer.innerHTML = '';
    const documentHeader = document.createElement('h1');
    documentHeader.textContent = 'Priority';
    const priority = document.createElement('ul');
    projectFolders.forEach((pf, pfIndex) => {
        pf.projects.forEach((p, pIndex) => {
            p.todos.forEach((td, tdIndex) => {
                if (!td.priority) return;
                if (td.taskComplete) return;
                const todoContainer = document.createElement('li');
                const leftContainer = document.createElement('div');
                const rightContainer = document.createElement('div');
                const checkbox = document.createElement('input');
                const task = document.createElement('label');
                const date = document.createElement('p');
                const editButton = document.createElement('img');
                const deleteButton = document.createElement('img');
                leftContainer.classList.add('left-container');
                rightContainer.classList.add('right-container');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', `todo${tdIndex}`);
                checkbox.setAttribute('data-pf-index', pfIndex);
                checkbox.setAttribute('data-p-index', pIndex);
                checkbox.setAttribute('data-td-index', tdIndex);
                checkbox.addEventListener('change', checkTodoPriority);
                task.setAttribute('for', `todo${tdIndex}`);
                deleteButton.setAttribute('data-pf-index', pfIndex);
                deleteButton.setAttribute('data-p-index', pIndex);
                deleteButton.setAttribute('data-td-index', tdIndex);
                deleteButton.src = deleteIcon;
                deleteButton.addEventListener('click', removeTodoPriority);
                editButton.setAttribute('data-pf-index', pfIndex);
                editButton.setAttribute('data-p-index', pIndex);
                editButton.setAttribute('data-td-index', tdIndex);
                editButton.src = editIcon;
                editButton.addEventListener('click', displayEditTodoModalPriority);
                task.textContent = td.task;
                date.textContent = td.formattedDate;
                editButton.textContent = '/';
                deleteButton.textContent = 'X';
                leftContainer.appendChild(checkbox);
                leftContainer.appendChild(task);
                if (td.priority) {
                    const priority = document.createElement('img');
                    priority.src = priorityIcon;
                    leftContainer.appendChild(priority);
                }
                rightContainer.appendChild(date);
                rightContainer.appendChild(editButton);
                rightContainer.appendChild(deleteButton);
                todoContainer.appendChild(leftContainer);
                todoContainer.appendChild(rightContainer);
                priority.appendChild(todoContainer);
            })
        })
    })
    mainContainer.appendChild(documentHeader);
    mainContainer.appendChild(priority);
}

export { displayToday, displayUpcoming, displayPriority }