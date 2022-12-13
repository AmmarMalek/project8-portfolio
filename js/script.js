// header section
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    header.classList.toggle('active');
}

// theme section
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    if(themeToggler.classList.contains('fa-moon')){
        themeToggler.classList.replace("fa-moon", "fa-sun")
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');        
        themeToggler.classList.replace( "fa-sun","fa-moon")

    }
}