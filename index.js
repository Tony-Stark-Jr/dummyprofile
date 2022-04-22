// Creating a portfolio tabbed component


const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;

    p_btn.forEach((curElem) => {
        curElem.classList.remove("p-btn-active")
    })

    p_btn_clicked.classList.add("p-btn-active")

    // To find the number in data attr
    const btn_num = p_btn_clicked.dataset.btnNum;


    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

    p_img_elem.forEach((curElem) => {
        curElem.classList.add("p-image-not-active")
    })

    img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"))

})


//   Initialize Swiper.js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Scrooll to top button
const heroSection = document.querySelector(".section-hero")
const footerElem = document.querySelector(".section-footer")

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`

footerElem.after(scroollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" })
}


scroollElement.addEventListener('click', scrollTop)


// Smooth Scrolling effects
const portfolioSec = document.querySelector(".section-portfolio")
const contactSec = document.querySelector(".section-contact")

document.querySelector('.portfolio-link').addEventListener("click", () => {
    portfolioSec.scrollIntoView({ behavior: "smooth" })
})

document.querySelector(".hireme-btn").addEventListener('click', (e) => {
    e.preventDefault();
    contactSec.scrollIntoView({ behavior: "smooth" })
})