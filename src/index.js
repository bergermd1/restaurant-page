import './style.css';
import {getBackgroundDiv, getWelcome} from './welcome.js';
import {getHeaders} from './headers.js';
import {getMenuDiv} from './menu.js';
import {getContactDiv} from './contact.js';


window.onload = () => {
    const content = document.querySelector('#content');

    content.appendChild(getHeaders()[0]);
    content.appendChild(getHeaders()[1]);
    content.appendChild(getWelcome());
    
    document.querySelector('.nav>.nav-tab:nth-child(1)').addEventListener('click', () => {
        clearMainContentDiv();
        content.appendChild(getWelcome());
    });
    document.querySelector('.nav>.nav-tab:nth-child(2)').addEventListener('click', () => {
        clearMainContentDiv();
        content.appendChild(getMenuDiv());
    });
    document.querySelector('.nav>.nav-tab:nth-child(3)').addEventListener('click', () => {
        clearMainContentDiv();
        content.appendChild(getContactDiv());
    });
}

function clearMainContentDiv() {
    document.querySelector('.main-content').remove();
}
