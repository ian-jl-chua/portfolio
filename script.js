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

const action = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach((el) => el.addEventListener('click', action))

// Header //
const blurHeader = () => {
  const header = document.getElementById('header')
  // add when scroll is greater than 50 viewport height
  this.scrollY >= 50
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

// Email //
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message')

const sendEmail = async (event) => {
  event.preventDefault()

  try {
    await emailjs.sendForm(
      'serviceID',
      'templateID',
      '#contact-form',
      'publicKey'
    )

    contactMessage.textContent = 'Message sent successfully ✅'

    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000)

    contactForm.reset()
  } catch (error) {
    contactMessage.textContent = 'Message not sent (service error) ❌'
  }
}

contactForm.addEventListener('submit', sendEmail)
