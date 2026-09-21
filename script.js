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

function showGallery() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("mainContact").style.display = "none";
    document.getElementById("mainDelivery").style.display = "none";
    document.getElementById("mainGallery").style.display = "block";

    setTimeout(() => {
        document.getElementById('mainGallery').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}


function showContacts() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("mainContact").style.display = "block";
    document.getElementById("mainGallery").style.display = "none";
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
    document.getElementById("mainDelivery").style.display = "none";
    document.getElementById("mainGallery").style.display = "none";
    document.getElementById("mainMenu").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showDelivery() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("mainContact").style.display = "none";
    document.getElementById("mainGallery").style.display = "none";
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

function initGallery() {
    const uniqueSource = [...new Set(images)];
    
    const count = window.innerWidth <= 920 ? 6 : 9;
    
    currentImages = [...uniqueSource]
        .sort(() => Math.random() - 0.5)
        .slice(0, count);

    gallery.innerHTML = "";

    currentImages.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.style.transition = "opacity 0.3s ease-in-out";
        gallery.appendChild(img);
    });
}

function replaceOneImage() {
    const galleryItems = gallery.querySelectorAll("img");
    if (galleryItems.length === 0) return;

    const indexToReplace = Math.floor(Math.random() * currentImages.length);

    const available = uniqueSourceFilter();

    if (available.length === 0) {
        return;
    }

    const newImageSource = available[Math.floor(Math.random() * available.length)];

    const targetImg = galleryItems[indexToReplace];
    
    const tempImg = new Image();
    tempImg.src = newImageSource;

    tempImg.onload = function() {
        targetImg.style.opacity = "0";

        setTimeout(() => {
            targetImg.src = newImageSource;
            
            currentImages[indexToReplace] = newImageSource;

            setTimeout(() => {
                targetImg.style.opacity = "1";
            }, 50);
        }, 300);
    };
}

function uniqueSourceFilter() {
    const source = [...new Set(images)]; 
    
    return source.filter(src => !currentImages.includes(src));
}

const galleryData = {
    loc0: [
        "images/Lisoparkova/IMG_20260921_150738_309~3.jpg",
        "images/Lisoparkova/IMG_20260921_150738_325~3.jpg",
        "images/Lisoparkova/IMG_20260921_150737_724~5.jpg",
        "images/Lisoparkova/IMG_20260921_150738_210~2.jpg"
    ],
    loc1: [
        "locations/E77A1950.jpg",
        "images/Nezalezhnosti/E77A1562.jpg",
        "images/Nezalezhnosti/E77A1627.jpg",
        "images/Nezalezhnosti/E77A1639.jpg",
        "images/Nezalezhnosti/E77A1650.jpg",
        "images/Nezalezhnosti/E77A1659.jpg",
        "images/Nezalezhnosti/E77A1877.jpg",
        "images/Nezalezhnosti/E77A1879.jpg",
        "images/Nezalezhnosti/E77A1892.jpg",
        "images/Nezalezhnosti/E77A1896.jpg",
        "images/Nezalezhnosti/E77A1899.jpg",
        "images/Nezalezhnosti/E77A1928.jpg",
        "images/Nezalezhnosti/E77A1935.jpg",
        "images/Nezalezhnosti/E77A1938.jpg",
        "images/Nezalezhnosti/E77A1950.jpg",
        "images/Nezalezhnosti/E77A1955.jpg",
        "images/Nezalezhnosti/E77A1960.jpg",
        "images/Nezalezhnosti/E77A1969.jpg",
        "images/Nezalezhnosti/E77A1971.jpg",
        "images/Nezalezhnosti/E77A1975.jpg",
        "images/Nezalezhnosti/E77A1984.jpg",
        "images/Nezalezhnosti/E77A1992.jpg",
        "images/Nezalezhnosti/E77A1998.jpg"
    ],
    loc2: [
        "locations/E77A6148.jpg",
        "images/Soborna/E77A6116.jpg",
        "images/Soborna/E77A6128.jpg",
        "images/Soborna/E77A6137.jpg",
        "images/Soborna/E77A6141.jpg",
        "images/Soborna/E77A6163.jpg",
        "images/Soborna/E77A6176.jpg",
        "images/Soborna/E77A6183.jpg",
        "images/Soborna/E77A6200.jpg",
        "images/Soborna/E77A6202.jpg",
        "images/Soborna/E77A6236.jpg",
        "images/Soborna/E77A6242.jpg",
        "images/Soborna/E77A6259.jpg",
        "images/Soborna/E77A6261.jpg",
        "images/Soborna/E77A6267.jpg",
        "images/Soborna/E77A6281.jpg"
    ],
    loc3: [
        "locations/E77A6297.jpg",
        "images/Teatralna/E77A6321.jpg",
        "images/Teatralna/E77A6326.jpg",
        "images/Teatralna/E77A6343.jpg",
        "images/Teatralna/E77A6363.jpg",
        "images/Teatralna/E77A6369.jpg",
        "images/Teatralna/E77A6388.jpg",
        "images/Teatralna/E77A6391.jpg",
        "images/Teatralna/E77A6403.jpg",
        "images/Teatralna/E77A6412.jpg",
        "images/Teatralna/E77A6418.jpg",
        "images/Teatralna/E77A6432.jpg",
        "images/Teatralna/E77A6441.jpg",
        "images/Teatralna/E77A6453.jpg"
    ],
    loc4: [
        "locations/Знамянка — копия (2).png"
    ]
};

let currentGalleryIndex = 0;
let currentGalleryImages = [];

function openModal(locationId) {
    const modal = document.getElementById("modalGallery");
    const title = document.getElementById("modalTitle");
    const imgElement = document.getElementById("modalImage");
    
    currentGalleryImages = galleryData[locationId] || galleryData['loc1'];
    currentGalleryIndex = 0;

    const titles = {
        loc1: "Кропивницький (Незалежності)",
        loc2: "Кропивницький (Соборна)",
        loc3: "Кропивницький (Театральна)",
        loc4: "Знам'янка (Глібка)"
    };
    title.innerText = titles[locationId] || "Наша галерея";

    imgElement.src = currentGalleryImages[currentGalleryIndex];
    
    modal.style.display = "flex";
}

function changeSlide(direction) {
    const imgElement = document.getElementById("modalImage");
    currentGalleryIndex += direction;

    if (currentGalleryIndex >= currentGalleryImages.length) {
        currentGalleryIndex = 0;
    } else if (currentGalleryIndex < 0) {
        currentGalleryIndex = currentGalleryImages.length - 1;
    }

    imgElement.src = currentGalleryImages[currentGalleryIndex];
}

document.querySelector(".close-modal").addEventListener("click", function() {
    document.getElementById("modalGallery").style.display = "none";
});

window.onclick = function(event) {
    const modal = document.getElementById("modalGallery");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

initGallery();
setInterval(replaceOneImage, 4000);