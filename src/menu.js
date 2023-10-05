export {getMenuDiv};
import './style.css';
import {getBackgroundDiv} from './welcome';
import dish1 from './images/1.webp';
import dish2 from './images/2.webp';
import dish3 from './images/3.webp';
import dish4 from './images/4.webp';
import dish5 from './images/5.jpeg';
import dish6 from './images/6.jpeg';

function getMenuDiv() {
    const backgroundDiv = getBackgroundDiv();
    const dishContainerDiv = getDishContainerDiv()
    
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    menuDiv.appendChild(backgroundDiv);
    menuDiv.appendChild(dishContainerDiv);
    
    return menuDiv;
}

function getDishContainerDiv() {
    const dishContainer = document.createElement('div');
    dishContainer.classList.add('dish-container');

    let dishLocations = [dish1, dish2, dish3, dish4, dish5, dish6];
    dishLocations.forEach(dishLocation => {
        const image = new Image();
        image.src = dishLocation;
        
        const dishCard = document.createElement('div');
        dishCard.classList.add('dish-card');
        dishCard.appendChild(image);

        dishContainer.appendChild(dishCard);
    });

    return dishContainer;
}