export {getWelcome};
export {getBackgroundDiv};
import './style.css';
import background from './images/background.jpg';
import chef from './images/chef.jpg';

function getWelcome() {

    const backgroundDiv = getBackgroundDiv();
    const containerDiv = getContainerDiv();
    
    const welcomeDiv = document.createElement('div');
    welcomeDiv.classList.add('welcome');
    welcomeDiv.classList.add('main-content');
    welcomeDiv.appendChild(backgroundDiv);
    welcomeDiv.appendChild(containerDiv);
                    
    return welcomeDiv;
}
                
function getBackgroundDiv() {
    const backgroundDiv = document.createElement('div');
    backgroundDiv.classList.add('image');
    const imgElement = new Image();
    imgElement.src = background;
    backgroundDiv.appendChild(imgElement);
    return backgroundDiv; 
}

function getContainerDiv() {
    const html = `
        <div class="content">
            <div class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maiores! Aliquid beatae, odit officia expedita laudantium a soluta maxime voluptatem, aspernatur suscipit, hic vitae vel provident culpa distinctio. Porro aspernatur, cum facere doloremque cupiditate corrupti aliquam iure, fuga maxime iusto qui sit saepe labore obcaecati, provident ex. Dicta debitis, natus quidem quae labore ullam maiores commodi nobis sapiente non repudiandae iure dolor distinctio ea deleniti aliquam.
            </div>
        </div>
    `   
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    containerDiv.innerHTML = html;
   
    const contentDiv = containerDiv.firstElementChild;
    const imgElement = new Image();
    imgElement.src = chef;
    contentDiv.insertBefore(imgElement, contentDiv.children[0]);
    return containerDiv;                  
}