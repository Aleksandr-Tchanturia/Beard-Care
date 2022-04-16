//burger code
let conteiner = document.getElementById('navigation');
let toggleButton = document.getElementById('burger-bar');

toggleButton.addEventListener('click', function() {
    conteiner.classList.toggle('activenav');
})