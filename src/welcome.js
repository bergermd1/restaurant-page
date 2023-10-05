export {getWelcome};
import background from './background.jpg';

function getWelcome() {

    const html = `
        <div class="image">
            <img src="background.jpg" alt="">
        </div>
        <div class="container">
            <div class="content">
                <img src="images/chef.jpg" alt="">
                <div class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maiores! Aliquid beatae, odit officia expedita laudantium a soluta maxime voluptatem, aspernatur suscipit, hic vitae vel provident culpa distinctio. Porro aspernatur, cum facere doloremque cupiditate corrupti aliquam iure, fuga maxime iusto qui sit saepe labore obcaecati, provident ex. Dicta debitis, natus quidem quae labore ullam maiores commodi nobis sapiente non repudiandae iure dolor distinctio ea deleniti aliquam. Asperiores neque reprehenderit dicta optio impedit quia tenetur laudantium mollitia, consequatur laborum natus deleniti. Corrupti rem, est accusantium id molestiae temporibus velit consequuntur itaque rerum qui similique, perferendis tempore. Quaerat totam quas quibusdam quasi.
                </div>
            </div>
        </div>
    `

    const welcomeDiv = document.createElement('div');
    welcomeDiv.classList.add('welcome');
    welcomeDiv.innerHTML = html;

    return welcomeDiv;
}