export {getHeaders};

function getHeaders() {
    const headerHTML =`
        <div class="header">
            Restaurant Odin
        </div>
    `
    const navHTML = `
        <div class="nav-tab">
            <div>Welcome</div>
        </div>
        <div class="nav-tab">
            <div>Menu</div>
        </div>
        <div class="nav-tab">
            <div>Contact</div>
        </div>
    `;
    
    const headerDiv = document.createElement('div');
    headerDiv.classList.add("header-container");
    headerDiv.innerHTML = headerHTML;

    const navDiv = document.createElement('div');
    navDiv.classList.add('nav');
    navDiv.innerHTML = navHTML;
    
    return [headerDiv, navDiv];
}
