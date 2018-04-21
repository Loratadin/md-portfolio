const navToggle=document.querySelector('.menu-button')

navToggle.addEventListener('click', function() {
 document.body.classList.add('nav-is-open') // do not put dot before class because it's already looking for a class and if you put a dot it will search for a class starting with dot, which doesn't exist
})