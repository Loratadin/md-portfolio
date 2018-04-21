const navToggle=document.querySelector('.menu-button')
const nav = document.querySelector('nav')
const containerAll = document.querySelector('.container-all')

navToggle.addEventListener('click', function() {
 document.body.classList.toggle('nav-is-open') // do not put dot before class because it's already looking for a class and if you put a dot it will search for a class starting with dot, which doesn't exist
})

nav.addEventListener('click', function() {
 containerAll.style.transition = '0ms'
 document.body.classList.remove('nav-is-open')
})