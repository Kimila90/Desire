$(function () {

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.contacts-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false
    });

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="./images/blogpost/blogpost/Path.svg" alt="arrow icon"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="./images/blogpost/blogpost/Path-1.svg" alt="arrow icon"></button>'
    });


//     $('.header__btn').on('click', function () {
//         $('.rightside-menu').removeClass('rightside-menu--close');
//         console.log("DELETE");
//     });

//     $('.rightside-menu__close').on('click', function () {
//         $('.rightside-menu').addClass('rightside-menu--close');
//         console.log("ADD");
//     });

})
const headerMenuButtonOpen = document.querySelector('.header__btn'); // кнопка на хедере для открытия
const rightSideMenuButtonClose = document.querySelector('.rightside-menu__close'); // кнопка в меню для закрытия
const rightSideMenu = document.querySelector('.rightside-menu'); // само меню

let showRightSideMenu = () => { // показать меню (удалит класс, который его скрывал)
    rightSideMenu.classList.remove('rightside-menu--close');
};

let hideRightSideMenu = () => { // скрывает меню (доабвит класс который его скроет)
    rightSideMenu.classList.add('rightside-menu--close');
};

headerMenuButtonOpen.addEventListener("click", showRightSideMenu); // на событе click вызывает функцию "ПОКАЗА"
rightSideMenuButtonClose.addEventListener("click", hideRightSideMenu); // на событе click вызывает функцию "СКРЫТИЯ"

var mixer = mixitup('.gallery__inner',{
    load: {
        filter: '.living'
    }
});