/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})



// TESTIMONIELS CARRUCEL SLIDER

const swiper = new Swiper('.swiper', {

  slidesPerView:1,
  pagination: {
  el:'.swiper-pagination'
  },

  mousewheel: true,
  keyboard: true,

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
})

// SCROLLREVEL MOSTRA ELEMENTOS QUANDO DAR SCROLL NA PAGINA 

const scrollReveal = ScrollReveal({
  origin:'top',
  distance:'30px',
  duration:700,
  reset: true,
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .cards,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links

`,
 { interval:100}
)