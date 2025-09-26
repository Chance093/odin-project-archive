import menu1Img from './imgs/menu-1.png';
import menu2Img from './imgs/menu-2.png';
import menu3Img from './imgs/menu-3.png';
import menu4Img from './imgs/menu-4.png';



function generateMenuPage() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const menu = document.createElement('div');
    const menu1 = new Image();
    const menu2 = new Image();
    const menu3 = new Image();
    const menu4 = new Image();
    menu.textContent = 'Menu';
    menu.classList.add('menu');
    menu1.src = menu1Img;
    menu2.src = menu2Img;
    menu3.src = menu3Img;
    menu4.src = menu4Img;
    content.appendChild(menu);
    content.appendChild(menu1);
    content.appendChild(menu2);
    content.appendChild(menu3);
    content.appendChild(menu4);
}


export default generateMenuPage;