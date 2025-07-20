const btn = document.getElementById('button');
const sectionAll = document.querySelectorAll('section[id]');
const inputName = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');

window.addEventListener('load', () => {
    const contenedorLoader = document.querySelector('.container--loader');
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = 'hidden';
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('abajo', window.scrollY > 0);
})

btn.addEventListener('click', function () {
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
})

if (flagsElement) {
    flagsElement.addEventListener('click', (e) => {
        changeLanguage(e.target.parentElement.dataset.language);
    });
}

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.classList.remove('active');
    })

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
    })
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel-container').forEach(carousel => {
        const slides = carousel.querySelector('.carousel-slides');
        const slideElements = carousel.querySelectorAll('.carousel-slide');
        const slideCount = slideElements.length;
        let currentSlide = 0;

        const showSlide = () => {
            slideElements.forEach(slide => {
                slide.classList.remove('active');
            });

            slideElements[currentSlide].classList.add('active');

            const slideWidth = slideElements[0].clientWidth;
            slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        carousel.querySelector('.next-button').addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slideCount;
            showSlide();
        })

        carousel.querySelector('.prev-button').addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            showSlide();
        })

        showSlide();

        window.addEventListener('resize', showSlide);
    })

    const modalImage = document.getElementById('modalImage');
    const modalImageContent = document.getElementById('modalImageContent');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.carousel-slide').forEach(img => {
        img.addEventListener('click', (event) => {
            modalImage.classList.add('active');
            modalImageContent.src = event.target.src;
            document.body.classList.add('no-scroll');
        })
    })

    function closeModal() {
        modalImage.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    closeBtn.addEventListener('click', () => {
        closeModal();
    })

    modalImage.addEventListener('click', (event) => {
        if (event.target === modalImage) {
            closeModal();
        }
    })
})

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
    }
    else {
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-button').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

const menuBtn = document.querySelector('.container--btnMenu');
const navMenu = document.querySelector('.nav_menu');
const navLinks = document.querySelectorAll('.nav_menu a');

function toggleMenu() {
    navMenu.classList.toggle('active');
}

if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    })
})

const form = document.getElementById('tuFormularioId');
const formspreeUrl = "https://formspree.io/f/mrblebyq";

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(formspreeUrl, {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })

    if (response.ok) {
        Swal.fire({
            title: "¡Mensaje enviado!",
            text: "Gracias por contactarme, te responderé pronto.",
            icon: "success",
            background: 'var(--charcoal)',
            color: 'var(--light-grey)',
            confirmButtonColor: 'var(--primary-color)'
        })
        form.reset();
    } else {
        Swal.fire({
            title: "Error",
            text: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
            icon: "error",
            background: 'var(--charcoal)',
            color: 'var(--light-grey)',
            confirmButtonColor: '#d33'
        })
    }
})