import './style.css';
import {getBackgroundDiv, getWelcome} from './welcome.js';
import {getHeaders} from './headers.js';
import {getMenuDiv} from './menu.js';
import {getContactDiv} from './contact.js';
// import background from './background.jpg';


window.onload = () => {
    document.querySelector('#content').appendChild(getHeaders()[0]);
    document.querySelector('#content').appendChild(getHeaders()[1]);
    document.querySelector('#content').appendChild(getWelcome());
    // document.querySelector('#content').appendChild(getMenuDiv());
    // document.querySelector('#content').appendChild(getContactDiv());
    
    
    
    
    // const myBackground = new Image();
    // myBackground.src = background;
    // document.querySelector('#content').appendChild(myBackground);
    
    
    // const element = document.createElement('div');
    // element.classList.add('hello');

    // const myBackground = new Image();
    // myBackground.src = background;
    // element.appendChild(myBackground);
    // document.querySelector('#content').appendChild(element)







    // document.querySelector('.welcome.image img').src 
    // document.querySelector('.welcome.container.content img')

}
