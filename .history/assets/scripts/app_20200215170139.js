const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdropModal = document.getElementById('backdrop');

const toggleMovieModal = () => {
    toggleMovieModal();
    addMovieModal.classList.toggle('visible');
};

const toggleBackdropModal = () => {
    backdropModal.classList.toggle('visible');
};

startAddMovieButton.addEventListener('click', toggleMovieModal);