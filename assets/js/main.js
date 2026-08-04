const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

const scrollTop = document.getElementById('scrollTop');

if (scrollTop) {
    window.addEventListener('scroll', () => {

        if (window.scrollY > 300) {
            scrollTop.classList.add('show');
        } else {
            scrollTop.classList.remove('show');
        }

    });
}

const sections = document.querySelectorAll('section');
const navLinksActive = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    if(window.scrollY < 200){
        current = "hero";
    }
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksActive.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === "#" + current) {
            link.classList.add('active');
        }
    });
});

const animatedElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right, .slide-up");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-animation");
        }
    });

}, {
    threshold: 0.2
});

animatedElements.forEach(element => {
    observer.observe(element);
});