// Menu //

const navMenu = document.getElementById('nav-menu')
const navBurger = document.getElementById('nav-burger')
const navClose = document.getElementById('nav-close')

if (navBurger) {
  navBurger.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

// Menu mobile //

const navLink = document.querySelectorAll('.nav--link')

const action = ()=>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach((el)=> el.addEventListener('click', action))

// Header //
// const blurHeader = () => {
//   const header = document.getElementById('header')
//   // add when scroll is greater than 50 viewport height
//   this.scrollY >= 50
//     ? header.classList.add('blur-header')
//     : header.classList.remove('blur-header')
// }

// window.addEventListener('scroll', blurHeader)

// Nav Icon //

// Section //
// let sections = document.querySelectorAll('section')
// let navLink = document.querySelectorAll('header nav a')

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY
//     let offset = sec.offsetTop - 100
//     let height = sec.offsetHeight
//     let id = sec.getAttribute('id')

//     if (top >= offset && top < offset + height) {
//       // active navbar links
//       navLink.forEach((links) => {
//         links.classList.remove('active')
//         document
//           .querySelector('header nav a[href*=' + id + ']')
//           .classList.add('active')
//       })
//     }
//   })
// }

// EMAIL //
// const contactForm = document.getElementById('contact-form'),
// contactMessage = document.getElementById('contact-message')

// const sendEmail = (event)=>{
//   event.preventDefault()
// }

// contactForm.addEventListener('submit', sendEmail)
