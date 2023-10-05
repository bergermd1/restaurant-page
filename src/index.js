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
    setSelectedTab(1);
    
    document.querySelector('.nav>.nav-tab:nth-child(1)').addEventListener('click', () => {
        clearMainContentDiv();
        clearTabFormatting();
        content.appendChild(getWelcome());
        document.querySelector('.nav-tab:nth-child(1)').classList.add('tabSelected')
        document.querySelector('.nav-tab:nth-child(2)').classList.add('tabNotSelected')
        document.querySelector('.nav-tab:nth-child(3)').classList.add('tabNotSelected')
    });
    document.querySelector('.nav>.nav-tab:nth-child(2)').addEventListener('click', () => {
        clearMainContentDiv();
        clearTabFormatting();
        content.appendChild(getMenuDiv());
        document.querySelector('.nav-tab:nth-child(2)').classList.add('tabSelected')
        document.querySelector('.nav-tab:nth-child(1)').classList.add('tabNotSelected')
        document.querySelector('.nav-tab:nth-child(3)').classList.add('tabNotSelected')
    });
    document.querySelector('.nav>.nav-tab:nth-child(3)').addEventListener('click', () => {
        clearMainContentDiv();
        clearTabFormatting();
        content.appendChild(getContactDiv());
        document.querySelector('.nav-tab:nth-child(3)').classList.add('tabSelected')
        document.querySelector('.nav-tab:nth-child(1)').classList.add('tabNotSelected')
        document.querySelector('.nav-tab:nth-child(2)').classList.add('tabNotSelected')
    });
}

function clearMainContentDiv() {
    document.querySelector('.main-content').remove();
}

function clearTabFormatting() {
    if (document.querySelector('.nav-tab.tabSelected')) {
        document.querySelector('.nav-tab.tabSelected').classList.remove('tabSelected');
    }
    [...document.querySelectorAll('.nav-tab.tabNotSelected')].forEach(tab => {
        tab.classList.remove('tabNotSelected');
    })
}

function setSelectedTab(tabNumber) {
    let tabs = [1,2,3];
    tabs = tabs.filter(tab => tab != tabNumber);
    clearTabFormatting();
    document.querySelector(`.nav-tab:nth-child(${tabNumber})`).classList.add('tabSelected')
    tabs.forEach(tab => {
        document.querySelector(`.nav-tab:nth-child(${tab})`).classList.add('tabNotSelected')
    })
}