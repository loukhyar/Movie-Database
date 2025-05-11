// Filter movies by genre
const genreCheckboxes = document.querySelectorAll('.genre-checkbox');

genreCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateGenreFilters);
});

function updateGenreFilters() {
    const selectedGenres = Array.from(genreCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);

    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        const movieGenres = Array.from(movie.classList)
            .filter(className => className !== 'movie' && className !== 'movie-info');

        if (selectedGenres.length === 0 || selectedGenres.some(genre => movieGenres.includes(genre))) {
            movie.style.display = 'block';
        } else {
            movie.style.display = 'none';
        }
    });
}

// Toggle 'Read More' section
const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
    button.addEventListener('click', toggleReadMore);
});

function toggleReadMore(event) {
    const extraInfo = event.target.parentElement.querySelector('.extra-info');
    extraInfo.classList.toggle('show');
}
