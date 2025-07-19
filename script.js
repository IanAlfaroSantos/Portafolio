const btn = document.getElementById('button');
const sectionAll = document.querySelectorAll('section[id]');
const inputName = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');

/* ===== Loader =====*/
window.addEventListener('load', () => {
    const contenedorLoader = document.querySelector('.container--loader');
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = 'hidden';
});

/*===== Header =====*/
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('abajo', window.scrollY > 0);
});

/*===== Boton Menu =====*/
btn.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        this.classList.add('not-active');
        document.querySelector('.nav_menu').classList.remove('active');
        document.querySelector('.nav_menu').classList.add('not-active');
    }
    else {
        this.classList.add('active');
        this.classList.remove('not-active');
        document.querySelector('.nav_menu').classList.remove('not-active');
        document.querySelector('.nav_menu').classList.add('active');
    }
});

/*===== Cambio de idioma =====*/
const changeLanguage = async language => {
    const requestJson = await fetch(`./assets/languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value];
    }
}

if (flagsElement) {
    flagsElement.addEventListener('click', (e) => {
        changeLanguage(e.target.parentElement.dataset.language);
    });
}

/*===== class active por secciones =====*/
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    sectionAll.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const correspondingLink = document.querySelector('nav a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
});

/*===== Carrusel de proyectos =====*/
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel-container').forEach(carousel => {
        const slides = carousel.querySelector('.carousel-slides');
        const slideCount = slides.children.length;
        let currentSlide = 0;

        // Establecer la primera imagen como activa
        slides.children[0].classList.add('active');

        // Función para mover el carrusel
        const moveCarousel = () => {
            const slideWidth = slides.children[0].clientWidth;
            slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
            
            // Actualizar clase 'active'
            document.querySelectorAll(`#${carousel.id} .carousel-slide`).forEach((slide, index) => {
                slide.classList.toggle('active', index === currentSlide);
            });
        };

        // Botón "siguiente"
        carousel.querySelector('.next-button').addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slideCount;
            moveCarousel();
        });

        // Botón "anterior"
        carousel.querySelector('.prev-button').addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            moveCarousel();
        });

        // Ajustar el tamaño del carrusel cuando la ventana cambia de tamaño
        window.addEventListener('resize', moveCarousel);
    });
});

/*===== Boton y función ir arriba =====*/
window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
    }
    else {
        document.querySelector('.go-top-container').classList.remove('show');
    }
};

document.querySelector('.go-top-button').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});