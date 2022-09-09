
const projectBtn = document.querySelector(".project-btn");
const projectDislay = document.querySelector(".projects");
const details = document.querySelector(".details");
const showDetailsBtn = document.querySelector(".read-more");
const btnRemove = document.querySelector(".projects span");
const detailsRemove = document.querySelector(".details span");

projectBtn.addEventListener("click", () => {
    projectDislay.classList.add("project-active");
})

btnRemove.addEventListener("click", () => {
    projectDislay.classList.remove("project-active");
    facebookVideo.classList.remove("facebook-clone-active");
    twitterVideo.classList.remove("twitter-clone-active");
    responsive.classList.remove("responsive-active");
})

showDetailsBtn.addEventListener("click", () => {
    details.classList.add("details-active");
})

detailsRemove.addEventListener("click", () => {
    details.classList.remove("details-active");
})

// const imgList = [
//     `image-1.png`,
//     `image-2.jpg`,
//     `image-3.png`,
//     `image-4.png`,
//     `image-5.png`,
//     `image-6.png`,
//     `image-7.png`,
// ]

// const images = document.querySelector(".image");

// const img = document.createElement("img");
// img.src = `images/${imgList[0]}`;
// const imgSrc = img.src;

// img.append(imgSrc);

// images.append(img);


// let count = 0;
// function increase() {
//     count++;
//     img.src = `images/${imgList[count]}`;
//     if (count > 6) {
//         count = 0;
//         img.src = `images/${imgList[count]}`;
//     }
// }


// function decrease() {
//     count--;
//     img.src = `images/${imgList[count]}`;
//     if (count < 0) {
//         count = 6;
//         img.src = `images/${imgList[count]}`;
//     }
// }

// const autoCount = setInterval(function () {
//     count++;
//     img.src = `images/${imgList[count]}`;
//     if (count > 6) {
//         count = 0;
//         img.src = `images/${imgList[count]}`;
//     }
// }, 4000)

const menuIcon = document.querySelector(".menu-icon");
const navUl = document.querySelector(".nav-ul");
menuOpen = false;

menuIcon.addEventListener("click", () => {
    navUl.classList.toggle("nav-active");
    if (!menuOpen) {
        menuIcon.classList.add("open");
        menuOpen = true;
    }
    else {
        menuIcon.classList.remove("open");
        menuOpen = false;
    }
})

const body = document.querySelector("body");

body.addEventListener("scroll", () => {
    navUl.classList.remove("nav-active");
})

body.addEventListener("resize", () => {
    navUl.classList.remove("nav-active");
})


const showFacebookVideo = document.querySelector("li .facebook-li");
const showTwitterVideo = document.querySelector("li .twitter-li");

const facebookVideo = document.querySelector(".facebook-clone");
const twitterVideo = document.querySelector(".twitter-clone");

const responsive = document.querySelector(".responsive");

showFacebookVideo.addEventListener("click", function (e) {

    if (e.view.outerWidth < 1200) {
        e.preventDefault();
        if (!facebookVideo.classList.contains("facebook-clone-active")) {
            facebookVideo.classList.add("facebook-clone-active");
            responsive.classList.add("responsive-active");
            twitterVideo.classList.remove("twitter-clone-active");
        }
        else {
            facebookVideo.classList.remove("facebook-clone-active");
            responsive.classList.remove("responsive-active");
        }

    }
    else {
        facebookVideo.classList.remove("facebook-clone-active");
        responsive.classList.remove("responsive-active");
    }
})

showTwitterVideo.addEventListener("click", function (e) {

    if (e.view.outerWidth < 1200) {
        e.preventDefault();
        if (!twitterVideo.classList.contains("twitter-clone-active")) {
            twitterVideo.classList.add("twitter-clone-active");
            responsive.classList.add("responsive-active");
            facebookVideo.classList.remove("facebook-clone-active");
        }
        else {
            twitterVideo.classList.remove("twitter-clone-active");
            responsive.classList.remove("responsive-active");
        }
    }
    else {
        responsive.classList.remove("responsive-active");
        twitterVideo.classList.remove("twitter-clone-active");
    }
})

const arrowUp = document.querySelector('.last');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
        arrowUp.classList.add('last-active');
    }

    else if (window.pageYOffset < 400) {
        arrowUp.classList.remove('last-active');
    }
})


