document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.querySelector(".burger-icon");
    const burgerMenu = document.querySelector(".burger-menu");

    // Переключение класса 'active' при клике на иконку бургера
    burgerIcon.addEventListener("click", function () {
        burgerMenu.classList.toggle("active");
    });
});
