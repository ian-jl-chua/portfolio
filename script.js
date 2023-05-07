const blurHeader = () => {
  const header = document.getElementById('header')
  // add when scroll is greater than 50 viewport height
  this.scrollY >= 50
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)