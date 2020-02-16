const addMovieModalElement = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdropModal = document.getElementById('backdrop');

const toggleMovieModal = () => {
    addMovieModalElement.classList.toggle('visible');
    toggleBackdropModal();
};

const toggleBackdropModal = () => {
    backdropModal.classList.toggle('visible');
};

startAddMovieButton.addEventListener('click', toggleMovieModal);