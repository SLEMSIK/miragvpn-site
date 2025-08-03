const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 3500,
});

ScrollReveal().reveal(".container__right .tent-1", {
  duration: 1000,
  delay: 4000,
});
ScrollReveal().reveal(".container__right .tent-2", {
  duration: 1000,
  delay: 4500,
});

ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 5000,
});

ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 5500,
  interval: 500,
});

document.addEventListener('DOMContentLoaded', function() {
    const planBlock = document.querySelector('.plan');
    
    planBlock.style.opacity = '0';
    
    function checkVisibility() {
        const rect = planBlock.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8) && 
                         (rect.bottom >= 0);
        
        if (isVisible) {
            planBlock.style.animation = 'fadeInUp 0.8s ease-out forwards';
            window.removeEventListener('scroll', checkVisibility);
        }
    }
    
    checkVisibility();
    
    window.addEventListener('scroll', checkVisibility);
});

document.addEventListener('DOMContentLoaded', function() {

    function scrollActiveTab() {
        const activeTab = document.querySelector('input[name="slider"]:checked');
        if (activeTab) {
            const label = document.querySelector(`label[for="${activeTab.id}"]`);
            if (label) {
                label.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }
    
    document.querySelectorAll('input[name="slider"]').forEach(input => {
        input.addEventListener('change', scrollActiveTab);
    });
    
    scrollActiveTab();
});

console.log("███╗░░░███╗██╗██████╗░░█████╗░░██████╗░██╗░░░██╗██████╗░███╗░░██╗\n████╗░████║██║██╔══██╗██╔══██╗██╔════╝░██║░░░██║██╔══██╗████╗░██║\n██╔████╔██║██║██████╔╝███████║██║░░██╗░╚██╗░██╔╝██████╔╝██╔██╗██║\n██║╚██╔╝██║██║██╔══██╗██╔══██║██║░░╚██╗░╚████╔╝░██╔═══╝░██║╚████║\n██║░╚═╝░██║██║██║░░██║██║░░██║╚██████╔╝░░╚██╔╝░░██║░░░░░██║░╚███║");



document.getElementById('open_tg_bot').addEventListener('click', function() {
    window.open('https://MiragVPN_bot.t.me', '_blank');
});