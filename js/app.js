const navSlider = () => {
    const burger = document.querySelector('.burger');
    const navLink = document.querySelector('.navlink');

    burger.addEventListener('click' , () => {
        navLink.classList.toggle('activer-nav');
        burger.classList.toggle('toggle');
    });
};

navSlider();