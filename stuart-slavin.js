function openMenu() {
    const button = document.querySelector('.button-menu');
    const menu = document.querySelector('.header-nav ul');

    menu.classList.toggle("open");
    button.classList.toggle("open");

    if (button.classList.contains("open")) {
        button.setAttribute('aria-expanded', 'true');
    }
    else {
        button.setAttribute('aria-expanded', 'false');
    }
}