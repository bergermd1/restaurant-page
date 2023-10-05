export {getContactDiv};
import {getBackgroundDiv} from "./welcome";


function getContactDiv() {
    const backgroundDiv = getBackgroundDiv();
    
    const html = `
        <p>Address<br>123 Fake Street<br>Nowheresville, OH</p>
        <p>Phone number<br>(555) 555 - 5555</p>
    `;
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    containerDiv.innerHTML = html;

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    contactDiv.classList.add('main-content');
    contactDiv.appendChild(backgroundDiv);
    contactDiv.appendChild(containerDiv);

    return contactDiv;
}

/* <div class="contact">
    <div class="image">
        <img src="images/background.jpg" alt="">
    </div>
    <div class="container">
        <p>Address<br>123 Fake Street<br>Nowheresville, OH</p>
        <p>Phone number<br>(555) 555 - 5555</p>
    </div>
</div> */