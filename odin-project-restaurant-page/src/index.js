import './style.css';
import generateHomePage from './home';
import generateMenuPage from './menu';
import generateContactPage from './contact';

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

home.addEventListener('click', generateHomePage);
menu.addEventListener('click', generateMenuPage);
contact.addEventListener('click', generateContactPage);

generateHomePage();