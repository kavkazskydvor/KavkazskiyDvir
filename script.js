const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 500);
});

function showContacts() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("mainContact").style.display = "block";
    document.getElementById("mainDelivery").style.display = "none";

    setTimeout(() => {
        document.getElementById('contacts').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

function openMail(e) {
    e.preventDefault();

    const mailto = "mailto:kavkazskydvor@gmail.com?subject=Звернення%20та%20побажання%20«Кавказький%20двір»";

    window.location.href = mailto;

    setTimeout(() => {
        window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=kavkazskydvor@gmail.com&su=Звернення%20та%20побажання%20«Кавказький%20двір»",
            "_self"
        );
    }, 1000);
}

function showMenu() {
    document.getElementById("mainContact").style.display = "none";
    document.getElementById("mainMenu").style.display = "block";
    document.getElementById("mainDelivery").style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showDelivery() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("mainContact").style.display = "none";
    document.getElementById("mainDelivery").style.display = "block";

    setTimeout(() => {
        document.getElementById('delivery').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

function toggleMenu() {
    var x = document.querySelector(".nav");
    x.classList.toggle("responsive");
}

let index = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

setInterval(() => {
    index++;
    if (index >= totalSlides) index = 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
}, 9000);


const images = [
    "images/contents/E77A0410.jpg",
    "images/contents/E77A0736.jpg",
    "images/contents/E77A0847.jpg",
    "images/contents/E77A1544.jpg",
    "images/contents/E77A1562.jpg",
    "images/contents/E77A1565.jpg",
    "images/contents/E77A1639 (1).jpg",
    "images/contents/E77A1874.jpg",
    "images/contents/E77A1928 (1).jpg",
    "images/contents/E77A1955.jpg",
    "images/contents/E77A1992.jpg",
    "images/contents/E77A6176.jpg",
    "images/contents/E77A6369.jpg",
    "images/contents/E77A6337.jpg"
];

const gallery = document.getElementById("gallery");

let currentImages = [];

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function getImageCount() {
    return window.innerWidth <= 920 ? 6 : 9;
}

function initGallery() {
    const count = getImageCount();
    currentImages = shuffle([...images]).slice(0, count);

    gallery.innerHTML = "";

    currentImages.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        gallery.appendChild(img);
    });
}

function replaceOneImage() {
    const galleryImages = gallery.children;

    let indexToReplace = Math.floor(Math.random() * currentImages.length);

    let available = images.filter(img => !currentImages.includes(img));
    if (available.length === 0) return;

    let newImage = available[Math.floor(Math.random() * available.length)];

    const imgElement = galleryImages[indexToReplace];

    imgElement.style.opacity = "0";

    setTimeout(() => {
        imgElement.src = newImage;

        setTimeout(() => {
            imgElement.style.opacity = "1";
        }, 50);

        currentImages[indexToReplace] = newImage;

    }, 300);
}

initGallery();
setInterval(replaceOneImage, 4000);