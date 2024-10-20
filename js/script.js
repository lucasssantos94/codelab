const btnFavorite = document.querySelectorAll('.heart');

function toggleFavorite(event) {
    if(event === 'touch') event.preventDefault();
    event.target.classList.toggle('favorited');
}

btnFavorite.forEach((heart) => {    
    heart.addEventListener('click', toggleFavorite);
    heart.addEventListener('touch', toggleFavorite);
});