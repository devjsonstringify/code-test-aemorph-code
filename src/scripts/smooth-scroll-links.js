const links = document.querySelectorAll(".js-smooth-scroll");

links.forEach((link) => {
    link.scrollIntoView({ behavior: 'smooth', block: 'center',});
});