const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const addMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const updateUI = () => {
    if(movies.length === 0) {
        entryTextSection.style.display = "block";
    } else {
        entryTextSection.style.display = "none"; 
    }
};

const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (let movie of movies) {
        if(movie.id === movieId) {
            break;
        }
        movieIndex++;
    }

    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    // listRoot.removeChild(listRoot.children[movieIndex]);
};

const startMovieDeletion = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();

    const cancelDeletionButton =  deleteMovieModal.querySelector('.btn--passive');
    const confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));

    // deleteMovie(movieId);
};

const renderNewMovieElement = (id, title, image, rating) => {
    const newElement = document.createElement('li');
        newElement.className = "movie-element";
        newElement.innerHTML = `
            <div class="movie-element__image">
                <img src="${image}" alt="${title}">
            </div>
            <div class="movie-element__info">
                <h2>${title}</h2>
                <p>${rating}/5 stars</p>
            </div>
        `;

        newElement.addEventListener('click', startMovieDeletion.bind(null, id));
        const listRoot = document.getElementById('movie-list');  
        listRoot.append(newElement); 
};

const clearMovieInput = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
}

const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(
        titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
      ) {
        alert('Please enter valid values (rating between 1 and 5).');
        return;
    }

    const movie = {
        id: Math.random().toString,
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(movie);
    clearMovieInput();
    closeMovieModal();
    toggleBackdrop();
    updateUI();
    renderNewMovieElement(movie.id, titleValue, imageUrlValue, ratingValue);
    console.log(movies);
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
addMovieButton.addEventListener('click', addMovieHandler);