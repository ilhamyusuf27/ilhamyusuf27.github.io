const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-cls');

navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
})

const navLink = document.querySelectorAll('.nav__link')

navLink.forEach(n => n.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
}))


const countdown = () => {
    const countDate = new Date("December 31, 2022 00:00:00").getTime()
    const now = new Date().getTime()
    const gap = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    const zeroHour = (textHour < 10) ? '0' + textHour : textHour
    const zeroMin = (textMinute < 10) ? '0' + textMinute : textMinute
    const zeroSec = (textSecond < 10) ? '0' + textSecond : textSecond
    
    document.querySelector('.hour').innerHTML = zeroHour
    document.querySelector('.minute').innerHTML = zeroMin
    document.querySelector('.second').innerHTML = zeroSec
}

setInterval(countdown, 1000)

countdown();


let flashsaleSwiper = new Swiper(".flashsale-swiper", {
    spaceBetween: 24,
    observer: true,
    observerParents: true,
    loop: 'true',
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true
    },
    breakpoints: {
        640: {
            slidesPerView: 3.1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.98,
            spaceBetween: 40,
        },
        992: {
             slidesPerView: 3.82,
             spaceBetween: 50,
        },
        1024: {
            slidesPerView: 3.67,
            spaceBetween: 40,
        },
        1274: {
            slidesPerView: 5.1,
            spaceBetween: 40,
        },
    },
});


const favButton = document.querySelectorAll('.fav')

favButton.forEach(n => n.addEventListener('click', () => {
    if (n.classList.contains('bx-heart')==true){
        n.classList.remove('bx-heart')
        n.classList.add('bxs-heart')
    } else {
        n.classList.remove('bxs-heart')
        n.classList.add('bx-heart')
    }

}))

let testimoniSwiper = new Swiper(".testimoni-swiper", {
    spaceBetween: 24,
    observer: true,
    observerParents: true,
    loop: 'true',
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay:{
        delay: 2500,
        disableOnInteractioin: false,
    },
    pagination: {
      el: ".testimoni-pagination",
      dynamicBullets: true
    },
    breakpoints: {
        640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 1.8,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 1.8,
            spaceBetween: 20,
        },
    },
});
