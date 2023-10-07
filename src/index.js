import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

var swiper = new Swiper(".offerSwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        modules: [Navigation, Pagination],

        breakpoints: {
            100: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20
            },
            1000: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20
            },
        }

    });

var swiper = new Swiper(".trendsSwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        modules: [Navigation, Pagination],

        breakpoints: {
            100: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20
            },
            500: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20
            },
        }

    });

var swiper = new Swiper(".CategorySwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});