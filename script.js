const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const bgNavbar = document.querySelector('.bg-navbar')

burger.addEventListener('click', function() {
    this.classList.toggle('change')
    navbar.classList.toggle('change')
    bgNavbar.classList.toggle('change')
})

bgNavbar.addEventListener('click', function() {
    this.classList.remove('change')
    navbar.classList.remove('change')
    burger.classList.remove('change')
})