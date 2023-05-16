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
    // you need to provide serviceID, templateID and publicKey in order for this function to work
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


// Scroll up //
const scrollUp = ()=>{
  const scrollUp = document.getElementById('scroll-up')
  // if scroll is higher than 350 view port height
  this.scrollY >=350 ? scrollUp.classList.add('show-scroll'): scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// Active link //
const sections = document.querySelectorAll('section[id]')

const scrollActive = ()=>{
  const scrollY= window.pageYOffset

  sections.forEach((sec)=>{
    const sectionHeight = sec.offsetHeight,
            sectionTop = sec.offsetTop -58,
            sectionID = sec.getAttribute('id'),
            sectionClass= document.querySelector('.nav--menu a[href*=' + sectionID + ']')

            if(scrollY> sectionTop && scrollY <= sectionTop + sectionHeight){
              sectionClass.classList.add('active-link')
            }else{
              sectionClass.classList.remove('active-link')
            }
  })
}

window.addEventListener('scroll', scrollActive)